import react from 'react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';


export default function TextForm(props){
	const handleonchange=(event)=>{
		setText(event.target.value);
	}
	const handleupclick=()=>{
		//console.log('uppercsase');
		let newtext = text.toUpperCase();
		setText(newtext);
		props.showalert("converted to uppercase","success");
		//setText('you are converted in uppercase');
	}
	const handleloclick=()=>{
		//console.log('uppercsase');
		let newltext = text.toLowerCase();
		setText(newltext);
		//setText('you are converted in uppercase');
		props.showalert("converted to lower","success");
	}
	const capitalclick=()=>{
		let lower = text.toLowerCase();
		setText(lower.charAt(0).toUpperCase() + lower);
		props.showalert("converted to captialized","success");
	}
	const handleclclick=()=>{
		//console.log('uppercsase');
		let newtext = " ";
		setText(newtext);
		//setText('you are converted in uppercase');
		props.showalert("text cleared","success");
	}
	
	const copy=()=>{
		//console.log('uppercsase');
		let text = document.getElementById('mybox');
		 text.select();
		 navigator.clipboard.writeText(text.value);
		 props.showalert("text copied","success");
	}
	
	
	const removeextraspaces=()=>{
		//console.log('uppercsase');
		let newtxt = text.split(/[ ]+/);
		 setText(newtxt.join(" "));
		 props.showalert("extra space removed","success");
	}
	
	  const [text, setText] = useState('Enter text here');
	  //setText('new text');
	return (
	   <>
<div className="container">
<h1>{props.heading}</h1>

  <textarea className="form-control" style={{backgroundColor:props.mode=='dark'?'gray':'white',color:props.mode=='dark'?'white':'black'}} onChange={handleonchange} id="mybox" value={text} rows="8"></textarea>
  
<button onClick={handleupclick} className="btn btn-primary my-3">Convert to Uppercase</button>
<button onClick={handleloclick} className="btn btn-success mx-3 my-3">Convert to Lowercase</button>
<button onClick={handleclclick} className="btn btn-info mx-3 my-3">Clear Text</button>
<button onClick={copy} className="btn btn-info mx-3 my-3">Copy Text</button>
<button onClick={removeextraspaces} className="btn btn-info mx-3 my-3">Remove extra Space</button>
<button onClick={capitalclick} className="btn btn-info mx-3 my-3">Convert to Captialized</button>

</div>
<div className="container my-3">
<h2> Your Summery Here</h2>
<p> No of words {text.split(" ").filter((element)=>{return element.length!==0}).length} No of Character {text.length}</p>
<p> {0.008 * text.split(" ").length} Minutes Read </p>
<h2>Preview</h2>
<p> {text.length>0?text:'Enter text to preview'}</p>



</div>
</>

	)
	
}
