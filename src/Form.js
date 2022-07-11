import React, { useState} from "react";

const UseInputValue = initialvalue =>{
   const[value, setValue]= useState(initialvalue);

   

   return{
      value,
      onChange : e => setValue(e.target.value),
      resetValue : ()=> setValue(""),
   };
};

export default ({onSubmit}) => {
    const { resetValue, ...text } = UseInputValue("");

    return(
         
         <form  onSubmit={e=>{
         e.preventDefault();
         onSubmit(text.value)
         resetValue();
         }}>

         <input className="input" placeholder="write tasks here " type="text"  {...text} />        
         </form>
   )
}