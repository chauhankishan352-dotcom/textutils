import React , {useState} from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if(text.length === 0){
      props.showAlert("Please enter some text!", "warning");
    } else {
      props.showAlert("Converted to uppercase!", "success");
    }
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if(text.length === 0){
      props.showAlert("Please enter some text!", "warning");
    } else {
      props.showAlert("Converted to lowercase!", "success");
    }
  }

  const handlehideClick = () => {
    setText('');
    if(text.length === 0){
      props.showAlert("Please enter some text!", "warning");
    } else {
      props.showAlert("Text hidden!", "success");
    }
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    if(text.length === 0){
      props.showAlert("Please enter some text!", "warning");
    } else {
      props.showAlert("Text copied to clipboard!", "success");
    }
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    if(text.length === 0){
      props.showAlert("Please enter some text!", "warning");
    } else {
      props.showAlert("Extra spaces removed!", "success");
    }
  }

  const handleClearText = () => {
    setText('');
    if(text.length === 0){
      props.showAlert("Please enter some text!", "warning");
    }
    else {
    props.showAlert("Text cleared!", "success");
  }
}

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const vowels = ()=>{
    let c=0;
    for(let i=0; i<text.length; i++){
      if(text.charAt(i).toLowerCase() === 'a' || text.charAt(i).toLowerCase() === 'e' || text.charAt(i).toLowerCase() === 'i' || text.charAt(i).toLowerCase() === 'o' || text.charAt(i).toLowerCase() === 'u'){
        c++;
      }
    }
    return c;
  }




  return (
    <>
    <div className={`container bg-${props.Mode1 === 'light' ? 'light' : '#042743'} text-${props.Mode1 === 'light' ? 'dark' : 'light'}`} my-3>
      <h1>{props.label}</h1>
      <div className="mb-3">
      <textarea className={`form-control text-${props.Mode1 === 'light' ? 'dark' : 'light'},${props.Mode2 === 'light' ? 'dark' : 'white'} `} id="myBox" rows="3" placeholder={props.placeholder} style={{backgroundColor: (props.Mode1 === 'light' ? 'white' : '#042743'), color: (props.Mode1 === 'light' ? 'black' : 'white')}} value={text} onChange={handleOnChange}></textarea>
      </div>
      <button  disabled={text.length === 0}className="btn btn-primary my-1 mx-3"   onClick={handleUpClick}>Convert to Uppercase</button>
      <button  disabled={text.length === 0}className="btn btn-primary mx-3 my-1"  onClick={handleLowClick}>Convert to Lowercase</button>
      <button  disabled={text.length === 0}className="btn btn-primary mx-3 my-1"  onClick={handlehideClick}>Hide Text</button>
      <button  disabled={text.length === 0}className="btn btn-primary mx-3 my-1"  onClick={handleCopyClick}>Copy Text</button>
      <button  disabled={text.length === 0}className="btn btn-primary mx-3 my-1"  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button  disabled={text.length === 0}className="btn btn-primary mx-3 my-1"  onClick={handleClearText}>Clear Text</button>



    </div>
    <div className={`container my-3 text-${props.Mode1 === 'light' ? 'dark' : 'white'} text-${props.Mode2 === 'light' ? 'dark' : 'white'}`}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>Number of vowels: {vowels()}</p>
      <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
