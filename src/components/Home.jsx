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
		}else if(dollerPriceInp.current.value>10000000){
			alert("Value Enterd Is Long..."	);
		}else{
			setdollerPrice(dollerPriceInp.current.value);
			setappearAll(true);
		}
			
	}
	const calcShouldBay =() =>{
		const UCC=UCCountity.current.value;
		if(UCC === "Choose UC"){
			
		}else{
			if(dollerPrice==null){
				
			}else{
				setStoreValue(UCC * dollerPrice );
				setappear(true);
			}
		
		
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
		
			<select onChange={()=>{setappear(false); setappear2(false)} } ref={UCCountity} className="form-select" aria-label="Default select example">
			<option selected disabled value="Choose UC">Choose UC Quantity</option>
				   <option value="0.25">0.25</option>
					<option value="0.35">0.35</option>
					<option value="0.50">0.50</option>
			        <option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="5.35">5.35</option>
			        <option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="96">96</option><option value="97">97</option><option value="98">98</option><option value="99">99</option><option value="100">100</option>
		
			</select>
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