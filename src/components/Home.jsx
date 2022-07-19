import React, { useRef } from 'react'
import { useState } from 'react';

const Home = () => {




//...

	let current = new Date();
	const [storeValue,setStoreValue] = useState(null);
	const [appear,setappear] = useState(false);
	const [appear2,setappear2] = useState(false);
	const [appearDiv,setappearDiv] = useState(false);
	const UCCountity = useRef(null);
	const [arba7Value,setArba7Value] = useState({});
	const YouWantInput = useRef(null);
	const calcShouldBay =() =>{
		const UCC=UCCountity.current.value;

		setStoreValue(UCC * 17.5 );
		setappear(true);
	
		//YouWantInput.current.value="";
		//setArba7Value(null)
	}

	const calcArba7 =() =>{
	
		const YWI=YouWantInput.current.value;
		setArba7Value({id:(Math.random()*15),time:((current.getHours()) +":"+(current.getMinutes()) +" - "+(current.getMonth() + 1)+" / "+(current.getDate()) +" / " +(current.getFullYear())),youWant:Number(YWI),youShould:storeValue, profit:(Number(YWI) - storeValue)});
		setappear2(true);

	}
	const saveInLS=(transction)=>{
		setappear(false);
		setappear2(false);
		setappearDiv(true);
		if(localStorage.getItem("trans") == undefined){ //first enter
			const arrayOfAllTransc=[];
			arrayOfAllTransc.push(transction);
			localStorage.setItem("trans", JSON.stringify(arrayOfAllTransc));
			var storedTrans = JSON.parse(localStorage.getItem("trans"));
				console.log(storedTrans);	
		
		}else if(localStorage.getItem("trans") != undefined){ //second
			const anotherElemntsarrayOfAllTransc=[];
			anotherElemntsarrayOfAllTransc.push(...(JSON.parse(localStorage.getItem("trans"))),transction)
			localStorage.setItem("trans", JSON.stringify(anotherElemntsarrayOfAllTransc));
			var storedTrans2 = JSON.parse(localStorage.getItem("trans"));
				console.log(storedTrans2);
		}
		
	}
  return (
	<>

	<div className="container">
		<div className="row d-flex justify-content-center ">
			<div className="col-md-6 ">
				<div className="allThings py-5">
					{appearDiv===true && 
					<div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong><i className="fa fa-check"></i> Saved Successfully</strong> 
  <button type="button" onClick={()=>setappearDiv(false)} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
}
<label class="form-label ">Choose UC</label>
	<div className="input-group mb-3">
		
			<select onChange={()=>{setappear(false); setappear2(false)} } ref={UCCountity} className="form-select" aria-label="Default select example">
			       <option value="0.25">0.25</option>
					<option value="0.35">0.35</option>
					<option value="0.50">0.50</option>
			        <option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="5.53">5.53</option>
					<option value="6">6</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
					<option value="11">11</option>
					<option value="13">13</option>
					<option value="15">15</option>
					<option value="18">18</option>
					<option value="20">20</option>
					<option value="22">22</option>
					<option value="25">25</option>
					<option value="28">28</option>
					<option value="30">30</option>
					<option value="35">35</option>
					<option value="38">38</option>
					<option value="40">40</option>
					<option value="45">45</option>
					<option value="50">50</option>
			</select>
  <button  onClick={calcShouldBay} className="btn btn-success" type="button" >Choose</button>
</div>
		<div className="sholdbayresult">
			{appear ===true && <> <div className='py-4 text-center'> You Should Pay : <span className='fw-bold'> {storeValue}</span> EGP</div> <div className="input-group mb-3">
  <input ref={YouWantInput} type="number" className="form-control" placeholder="Enter You want from Customer "/>
  <button onClick={calcArba7} className="btn btn-primary" type="button" id="button-addon2">Determine</button>
</div></> } 
		</div>
		<div className="arba7Result  py2">
			{appear2 ===true &&  <>
			<ul>
				<li><div >Date : <span>{arba7Value.time}</span> </div></li>
			<li><div >You Want From Customer : <span> {arba7Value.youWant} </span>EGP</div></li>
			<li><div >You Should Pay : <span>{arba7Value.youShould}</span>  EGP</div></li>
			<li> <div >Your Profit : <span>{arba7Value.profit} </span> EGP</div></li>
			
			</ul>
			<button onClick={()=>saveInLS(arba7Value)} className="btn w-100 btn-warning fw-bold">Save</button>
			</>}
		</div>
</div>
</div>
</div>
	</div>
	</>
  )
}

export default Home