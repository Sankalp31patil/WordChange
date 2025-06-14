import React from 'react'

// Alert component to show feedback messages like "Text Cleared", "Dark Mode Enabled", etc.
export default function Alert(props) {
  return (
    // This outer div helps maintain layout even when no alert is shown
    <div style={{height: '45px'}}>
      {/* Conditional rendering: shows alert only when props.showAlert is true */}
      {props.showAlert && (
        <div
          className={`alert alert-${props.mode === 'dark' ? 'dark' : 'success'}`}
          role="alert"
        >
          {props.title} {/* Alert message text */}
        </div>
      )}
    </div>
  )
}
