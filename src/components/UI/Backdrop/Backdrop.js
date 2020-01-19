import React from 'react'; 
import classes from './Backdrop.css'

 const componentName = (props) =>  (
    props.show ? <div className = {classes.Backdrop} onClick={props.clicked}> </div> : null
);

 export default componentName;