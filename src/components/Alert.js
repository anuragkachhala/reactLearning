import React from 'react'

export default function Alert(props) 
{
 const captilize = (word) => {
       const lower = word.toLowerCase();
       return lower.charAt(0).toUpperCase()+ lower.slice(1);
 }
 
  return (
    props.alertMessage && <div className={`alert alert-${props.alertMessage.type} alert-dismissible fade show`} role="alert">
    <strong>{captilize(props.alertMessage.type)}</strong> : {props.alertMessage.msg}
  </div>
  )
}
