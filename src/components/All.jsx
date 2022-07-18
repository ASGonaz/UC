import React from 'react'
import { useState } from 'react';

const All = () => {
	let totalProfit =0;
	let totalYouShould =0;
	let totalYouWant =0;
	const [appearMsgDiv,setappearMsgDiv] = useState(false);
	let arrayOfAllTransactions = JSON.parse(localStorage.getItem("trans"));
	
	const deleteOneTransFunc=(transId)=>{
	
		const arrayAfterDel = arrayOfAllTransactions.filter((oneT)=> oneT.id !== transId)
		localStorage.setItem("trans", JSON.stringify(arrayAfterDel));
		console.log("delete success");
		
		document.location.reload(true);
		setappearMsgDiv(true)
	}
  return (
	<>
	<div className="container">
		<div className="row">
			<div className="col-md-8">
				<div className="holdAll">		
				{appearMsgDiv===true && 
					<div className="alert alert-danger alert-dismissible fade show" role="alert">
  <strong><i className="fa fa-check"></i> Deleted Successfully</strong> 
  <button type="button" onClick={()=>setappearMsgDiv(false)} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

} 
{ arrayOfAllTransactions.length <1 ? <div  className=" alert alert-info text-center " role="alert">
  No Transactions Saved
</div> : 		<div className="holdTable"style={{overflowX:"scroll"}}>
			<table className="table">
  <thead>
    <tr>
      <th >Date</th>
	  <th >You Pay</th>
	  <th >Customer Pay</th>
      <th >Profit</th>
	  <th >Delete</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
  {arrayOfAllTransactions.length > 0 &&  arrayOfAllTransactions.map((oneTransction)=>
  {
	totalYouWant = totalYouWant + oneTransction.youWant;
	totalYouShould = totalYouShould + oneTransction.youShould;

	totalProfit= totalProfit  + oneTransction.profit;
	return (<tr>
      <td >{oneTransction.time}</td>
      <td>{oneTransction.youShould} EGP</td>
      <td>{oneTransction.youWant} EGP</td>
      <td>{oneTransction.profit} EGP</td>
	  <td><button type="button" onClick={()=>deleteOneTransFunc(oneTransction.id)} class="btn btn-danger">Delete</button></td>
    </tr>)}) }
{arrayOfAllTransactions.length > 0 &&   <tr>
      <th >Total</th>
	  <th >{totalYouShould} EGP</th>
	  <th > {totalYouWant} EGP</th>
      <th >{totalProfit} EGP</th>
    </tr>}

  </tbody>
</table>
			</div>}
			</div>	
		</div>
		</div>
	</div>
	</>
  )
}

export default All