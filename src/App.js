import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{useState} from 'react';

import{
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


function App() {
  const [Mode1, setMode1] = useState("light");

  const toggleMode1 = () => {
    if (Mode1 === "light") {
      setMode1("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode1("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const [Mode2, setMode2] = useState("light");

  const toggleMode2 = () => {
    if (Mode2 === "light") {
      setMode2("red");
      document.body.style.backgroundColor = 'red';
      showAlert("red mode has been enabled", "success");
    }
    else {
      setMode2("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }


const[alert,setAlert]=useState("null");


const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 2000);
}


  return (
    <>
     <Router basename={process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "/"}>
       <Navbar title="TextUtils" home="Home" about="About" toggleMode1={toggleMode1} toggleMode2={toggleMode2} Mode1={Mode1} Mode2={Mode2} />
       <Alert  alert={alert}/>
       <div className="container my-3">
            <Routes>
              <Route
                path="/"
                element={<TextForm showAlert={showAlert} placeholder="Start typing..." label="Try TextUtils - word counter ,character counter,remove extra spaces" Mode1={Mode1} Mode2={Mode2} />}
              />
              <Route path="/About" element={<About  Mode1={Mode1}/>} />
            </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
