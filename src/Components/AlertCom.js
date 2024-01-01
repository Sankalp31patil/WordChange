import React from 'react'

export default function Alert(props) {

    // const fixedAlertStyle = {
    //     position: 'fixed', 
    //     bottom: 0,
    //     left: 0,
    //     width: '100%',
    //     zIndex: 1000, // Adjust the z-index as needed
    //   };

  return (
    <div style={{height: '45px'}}>
      {props.showAlert && <div className={`alert alert-${props.mode === 'dark' ? 'dark' : 'success'}`}  role="alert"> {props.title} </div> }
    </div>
  )
}
