import React from 'react';
import './App.css'

 
const Weekly = (props) => {
  const [value, setValue] = React.useState(
      localStorage.getItem(props.day) || ''

  );
 
 
  React.useEffect(() => {
    localStorage.setItem(props.day, value);
  }, [value]);
 
  const onChange = event => setValue(event.target.value);

  const deleteInput = event => {
      localStorage.removeItem(props.day)
      setValue('')
  }  
 
  return (
    <div className="formdiv">
     
      <textarea className="weeklyvalue" value={value} type="text" onChange={onChange}/> 
     
      <button onClick={deleteInput} className="del">X</button>
 
    </div>
  );
};
 
export default Weekly