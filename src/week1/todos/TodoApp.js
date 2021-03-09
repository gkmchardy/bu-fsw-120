import React from 'react'

function TodoApp() {
  return (
    <div style={{width:"100%", textAlign:"center"}}>
      <div style={{display:"inline-block", margin:"0 auto", padding:"3px", textAlign:"left"}}>
        <h2>My To Do List</h2>
        <h4>
          <input type="checkbox" />&nbsp;Get Up<br />
          <input type="checkbox" />&nbsp;Make the Coffee<br />
          <input type="checkbox" />&nbsp;Shower<br />
          <input type="checkbox" />&nbsp;Drink the Coffee<br />
          <input type="checkbox" />&nbsp;Go to Work<br />
        </h4>
      </div>
    </div>
  );
}

export default TodoApp;
