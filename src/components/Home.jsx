import React, { useRef } from 'react'
import { useState } from 'react';

const Home = () => {
	let current = new Date();
	const [storeValue,setStoreValue] = useState(null);
	const [appear,setappear] = useState(false);
	const [appear2,setappear2] = useState(false);
	const [appearDiv,setappearDiv] = useState(false);
	const UCCountity = useRef(null);
	const [arba7Value,setArba7Value] = useState({});
	const YouWantInput = useRef(null);
	const dollerPriceInp = useRef(null);
	const [dollerPrice,setdollerPrice] = useState(null);
	const [appearAll,setappearAll] = useState(false);
	const determineDollerPrice=()=>{
		if(dollerPriceInp.current.value ==""){
		alert("You Should Enter Doller Price")	
		}else if(dollerPriceInp.current.value>1000000000){
			alert("Value Enterd Is Long..."	);
		}else{
			setdollerPrice(dollerPriceInp.current.value);
			setappearAll(true);
		}
			
	}
	const calcShouldBay =() =>{
		const UCC=UCCountity.current.value;
		if(dollerPrice==null){
				
		}
		else if(UCC ==""){
			alert("You Should Enter UC")	
			}else if(UCC>1000000000000){
				alert("Value Enterd Is Long..."	);
			}
	
			else{
				setStoreValue(UCC * dollerPrice );
				setappear(true);
			}
		
		
		
	}

	const calcArba7 =() =>{
	
		const YWI=YouWantInput.current.value;
		if(YWI ===""){
			
		}else{
			if(YWI>10000000){
				alert("The Number Enterd Is Very Large !");
			}else{
				setArba7Value({id:(Math.random()*15),time:((current.getHours()) +":"+(current.getMinutes()) +" - "+(current.getMonth() + 1)+" / "+(current.getDate()) +" / " +(current.getFullYear())),youWant:Number(YWI),youShould:storeValue, profit:(Number(YWI) - storeValue)});
				setappear2(true);	
			}
	
		}
	}
	const saveInLS=(transction)=>{
		setappear(false);
		setappear2(false);
		setappearDiv(true);
		if(localStorage.getItem("trans") == undefined){ //first enter
			const arrayOfAllTransc=[];
			arrayOfAllTransc.push(transction);
			localStorage.setItem("trans", JSON.stringify(arrayOfAllTransc));
			document.location.reload(true);
		
		}else if(localStorage.getItem("trans") != undefined){ //second
			const anotherElemntsarrayOfAllTransc=[];
			anotherElemntsarrayOfAllTransc.push(...(JSON.parse(localStorage.getItem("trans"))),transction)
			localStorage.setItem("trans", JSON.stringify(anotherElemntsarrayOfAllTransc));
			document.location.reload(true);
		}
		
	}
  return (
	< div className='mainHome'>

	<div className="container">
		<div className="row d-flex justify-content-center ">
			<div className="col-md-6 ">
				<div className="allThings py-5">
 
					<h2 style={{color:"#6242FC"}} className="help fw-bold  text-center py-2">  UC Transactions Helper</h2>
					{appearDiv===true && 
					<div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong><i className="fa fa-check"></i> Saved Successfully</strong> 
  <button type="button" onClick={()=>setappearDiv(false)} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
}
<div className="input-group mb-3">
{appearAll==true &&<i style={{color:"green",padding:"10px"}} className=" fa fa-check-circle"></i>}
  <input onChange={()=>{setappearAll(false);setappear(false); setappear2(false)} } ref={dollerPriceInp} type="number" className="form-control" placeholder="Enter Doller Price"/>
  <button  onClick={determineDollerPrice} style={{backgroundColor:"#6242FC"}} className="btn btn-primary" type="button" id="button-addon2">$</button>
</div>

	<div className="input-group mb-3">
	<input onChange={()=>{setappear(false); setappear2(false)} } ref={UCCountity}type="number" className="form-control" placeholder="Enter UC Quantity"/>
	
  <button style={{backgroundColor:"#6242FC"}} onClick={calcShouldBay} className="btn btn-success" type="button" > <i class="fa fa-check-circle"></i></button>
</div>
		<div className="sholdbayresult">
			{appear ===true && <> <div className='yshoulddiv'> You Should Pay : <span className='fw-bold'> {storeValue}</span> EGP</div> <div className="input-group mb-3">
  <input onChange={()=>{ setappear2(false)} } ref={YouWantInput} type="number" className="form-control" placeholder="Enter You want from Customer "/>
  <button  onClick={calcArba7} style={{backgroundColor:"#6242FC"}} className="btn btn-primary" type="button" id="button-addon2"><i class="fa fa-money"></i></button>
</div></> } 
		</div>
		<div className="arba7Result ">
			{appear2 ===true &&  <>
			<ul>
				<li><div > - Date : <span>{arba7Value.time}</span> </div></li>
			<li><div > - You Want From Customer : <span> {arba7Value.youWant} </span>EGP</div></li>
			<li><div > - You Should Pay : <span>{arba7Value.youShould}</span>  EGP</div></li>
			<li> <div className='profitDivR'>  Your Profit : <span>{arba7Value.profit} </span> EGP</div></li>
			
			</ul>
			<button onClick={()=>saveInLS(arba7Value)} className="btn savebtn btn-dark w-100  fw-bold"><i class="fa fa-bookmark"></i> Save</button>
			</>}
		</div>

</div>
			
</div>
</div>
	</div>
	</div>
  )
}

export default Home
