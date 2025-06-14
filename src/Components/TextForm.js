import React, { useState } from "react";

export default function TextForm(props) {

    // State to track the textarea value
    const [val, setVal] = useState("");

    // Trim and remove extra spaces for summary and cleaning
    let NoExtraSpaces = val.replace(/\s+/g, ' ').trim();

    // Update textarea value as user types
    const onChange = (event) => {
        setVal(event.target.value);
    }

    // Utility to show alerts based on whether text changed or not
    const forAlert = (value, text) => {
        if (NoExtraSpaces.length !== 0 && val !== value)
            props.Alert(text);
        else if (val === value)
            props.Alert("No Changes Needed!");
    }

    // Clear the text area
    const onClickClearText = () => {
        setVal("");
        forAlert("", "Text Cleared.");
    }

    // Convert text to uppercase
    const onClickUpperCase = () => {
        setVal(val.toUpperCase());
        forAlert(val.toUpperCase(), "Text Converted to UpperCase.");
    }

    // Convert text to lowercase
    const onClickLowerCase = () => {
        setVal(val.toLowerCase());
        forAlert(val.toLowerCase(), "Text Converted to LowerCase.");
    }

    // Remove extra spaces
    const onClickRemoveExtraSpaces = () => {
        setVal(NoExtraSpaces);
        forAlert(NoExtraSpaces, "Extra Spaces Removed.");
    }

    return (
        <div className={`mb-3 text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
            {/* Label for the textarea */}
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                <h3>{props.label}</h3>
            </label>

            {/* Textarea for input */}
            <textarea
                className={`form-control bg-${props.mode} text-${props.mode === 'dark' ? 'white' : 'dark'}`}
                id="exampleFormControlTextarea1"
                rows="10"
                value={val}
                onChange={onChange}>
            </textarea>

            {/* Action buttons */}
            <div className="mt-3">
                <button
                    className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} m-2`}
                    disabled={val.length === 0}
                    onClick={onClickUpperCase}>
                    To UpperCase
                </button>
                <button
                    className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} m-2`}
                    disabled={val.length === 0}
                    onClick={onClickLowerCase}>
                    To LowerCase
                </button>
                <button
                    className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} m-2`}
                    disabled={val.length === 0}
                    onClick={onClickRemoveExtraSpaces}>
                    Remove Extra Spaces
                </button>
                <button
                    className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} m-2`}
                    disabled={val.length === 0}
                    onClick={onClickClearText}>
                    Clear Text
                </button>
            </div>

            {/* Text Summary */}
            <div className="mt-3">
                <h5>Text Summary</h5>
                {NoExtraSpaces.length !== 0 ? NoExtraSpaces.split(" ").length : 0} words {NoExtraSpaces.length} characters
            </div>

            {/* Live Preview */}
            <div className="mt-3">
                <h3>Preview</h3>
                <p>{val.length === 0 ? "Nothing to Preview" : val}</p>
            </div>
        </div>
    );
}
