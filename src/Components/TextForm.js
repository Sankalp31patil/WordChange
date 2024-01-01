import React, {useState} from "react";

export default function TextForm(props) {

    const [val,setVal] = useState("");
    let NoExtraSpaces = val.replace(/\s+/g,' ').trim();

    const onChange = (event)=> {
        setVal(event.target.value)
        
    }

    const forAlert = (value, text)=> {

        if(NoExtraSpaces.length !== 0 && val !== value)
            props.Alert(text);
        else if (val === value) 
            props.Alert("No Changes Needed!");

    }

    const onClickClearText = ()=> {
        setVal("");
        forAlert("", "Text Cleared.");

    }

    const onClickUpperCase = ()=> {  

        setVal(val.toUpperCase());
        forAlert(val.toUpperCase(), "Text Converted to UpperCase.");

    }

    const onClickLowerCase = ()=> {      
          
        setVal(val.toLowerCase());
        forAlert(val.toLowerCase(), "Text Converted to LowerCase.");

    }

    const onClickRemoveExtraSpaces = ()=> {
        
        setVal(NoExtraSpaces);
        forAlert(NoExtraSpaces, "Extra Spaces Removed.");

        // if (NoExtraSpaces.length !==0 && val !== NoExtraSpaces)
        //     props.Alert("Extra Spaces Removed.")
        // else if (val === NoExtraSpaces)
        //     props.Alert("No Changes Needed!")

        // setTimeout(() => {
        //     setAlert(false);
        //   }, 1000);

        // NoExtraSpaces.length !==0 ? setAlert(true) : setAlert(false); 
        // val !== NoExtraSpaces  ? setAlertText("Extra Spaces Removed.") : setAlertText("No changes Needed!")
        
    }

  return (
      <div className={`mb-3 text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label"> <h3> {props.label} </h3></label>
        <textarea className={`form-control bg-${props.mode} text-${props.mode === 'dark' ? 'white' : 'dark'}`} id="exampleFormControlTextarea1" rows="10" value = {val} onChange={onChange}></textarea>
        <div className="mt-3">
            <button className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} m-2`} disabled = {val.length === 0} onClick={onClickUpperCase}>To UpperCase</button>
            <button className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} m-2`} disabled = {val.length === 0} onClick={onClickLowerCase}>To LowerCase</button>
            <button className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} m-2`} disabled = {val.length === 0} onClick={onClickRemoveExtraSpaces}>Remove Extra Spaces</button>
            <button className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} m-2`} disabled = {val.length === 0} onClick={onClickClearText}>Clear Text</button>
        </div>
        <div className="mt-3"> <h5>Text Summary</h5> {NoExtraSpaces.length !== 0 ? NoExtraSpaces.split(" ").length : 0} words {NoExtraSpaces.length} characters</div>
        <div className="mt-3"> <h3>Preview</h3> <p>{val.length === 0 ? "Nothing to Preview" : val}</p> </div>
      </div>
  );
}
