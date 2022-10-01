import React from 'react'
import { useState } from 'react';

const All = () => {
	let totalProfit =0;
	let totalYouShould =0;
	let totalYouWant =0;
	const [appearMsgDiv,setappearMsgDiv] = useState(false);
if(localStorage.getItem("trans") == undefined){
	window.location.href = "/";
}
   let arrayOfAllTransactions = JSON.parse(localStorage.getItem("trans"));
	const deleteOneTransFunc=(transId)=>{
	
		const arrayAfterDel = arrayOfAllTransactions.filter((oneT)=> oneT.id !== transId)
		localStorage.setItem("trans", JSON.stringify(arrayAfterDel));
		console.log("delete success");
		
		document.location.reload(true);
		setappearMsgDiv(true)
	}
	const deleteAllTransFunc=()=>{
		//localStorage.removeItem("trans");
		
		localStorage.setItem("trans","[]");
		console.log("delete All success");
		
		document.location.reload(true);
		setappearMsgDiv(true)
	}
  return (
	<div className='mainHome'>
	<div className="container">
		<div className="row d-flex justify-content-center ">
			<div className="col-md-8  ">
				<div className="holdAll  ">	
				<h2><img src="/assets/images/Home/uc.webp" alt="" /> All Saved Transactions</h2>	
				{appearMsgDiv===true && 
					<div className="alert alert-danger alert-dismissible fade show" role="alert">
  <strong><i className="fa fa-check"></i> Deleted Successfully</strong> 
  <button type="button" onClick={()=>setappearMsgDiv(false)} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

} 
{ arrayOfAllTransactions.length <1 ? <div  className=" alert alert-info text-center " role="alert">
  No Transactions Saved
</div> : 		<div className="holdTable"style={{overflowX:"scroll"}}>
{arrayOfAllTransactions.length > 0 && <button type="button" class="btn btn-dark"onClick={()=>deleteAllTransFunc()}><i class="fa fa-trash"></i> Delete All </button>  }
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
	  <td><button type="button" onClick={()=>deleteOneTransFunc(oneTransction.id)} class="btn btn-danger"><i class="fa fa-trash"></i></button></td>
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
	</div>
  )
}

export default All