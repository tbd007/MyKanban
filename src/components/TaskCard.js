import React from 'react';
import './Kanban.css'


export default function TaskCard(props) {
 
  return (
    <div className="task-card" draggable="true" id={[props.timeId]} onClick={props.onDragStart} >
      {props.taskText} 
    </div>
  ) 
};