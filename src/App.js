import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
import React, { useState } from 'react';
import About from './components/About.js';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import './App.css';

function App() {
	const [mode, setmode] = useState('light');
	const [alert, setalert] = useState(null);
	const showalert=(message,type)=>{
		setalert({
			msg: message,
			type: type
		})
		setTimeout(()=>{
			setalert(null);
		},2000);
		
	}
	
    const togglemode=()=>{
		//console.log('uppercsase');
		if(mode== 'dark'){
			setmode('light');
			document.body.style.backgroundColor='white';
			document.body.style.color='black';
			document.title ="dark mode";
			showalert("Light mode has been enabled", "success");
		}
		else{
			setmode('dark');
			document.body.style.backgroundColor='#051240';
			document.body.style.color='white';
	        document.title ="light mode";
			showalert("Dark mode has been enabled","primary");
		}
	}
	// whether dark mode is enabed or not
  return (
   <>
   <Router>
  <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
  <Alert alert={alert} />
  <Switch>
      {/* there will only ever be one child here */}
      <Route path ="/about">
      <About />
	  </Route>
    </Switch>
	
  <div className="container">
  <TextForm showalert={showalert} heading="Enter the analyze text below" mode={mode} /> 
  </div>
  </Router>
   </>
  );
}

export default App;
