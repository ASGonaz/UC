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
		<div className="row">
			<div className="col-md-6">
				<div className="allThings">
					{appearDiv===true && 
					<div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong><i className="fa fa-check"></i> Saved Successfully</strong> 
  <button type="button" onClick={()=>setappearDiv(false)} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
}
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
  <button  onClick={calcShouldBay} className="btn btn-outline-secondary" type="button" ><i className="fa fa-check"></i></button>
</div>
		<div className="sholdbayresult">
			{appear ===true && <> <div> You Should Pay {storeValue} EGP</div> <div className="input-group mb-3">
  <input ref={YouWantInput} type="number" className="form-control" placeholder="Enter You want from Customer "/>
  <button onClick={calcArba7} className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fa fa-check"></i></button>
</div></> } 
		</div>
		<div className="arba7Result">
			{appear2 ===true &&  <>
			<div>Date {arba7Value.time}</div>
			<div>You Want From Customer : {arba7Value.youWant} EGP</div>
			<div>You Should Pay : {arba7Value.youShould} EGP</div>
			<div>Your Profit : {arba7Value.profit} EGP</div>
			<button onClick={()=>saveInLS(arba7Value)} className="btn btn-primary">save</button>
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