
import { useState } from "react";
import { ADDlist } from "./components/AddList";
import { VIEWTODO } from "./components/VIEW";

export const App = () => {
  const [todos,setlist]=useState([]);

  const handleDelete = () => {
    setlist([]);
  };

  const addtodo =(newlist) => {
    setlist([...todos,newlist]);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
      <ADDlist addtodo={addtodo}/>
      </div>
      <div className="col-6">
       <VIEWTODO
        todos={todos}
        onDelete={handleDelete}/>
      </div>
      </div>
      </div>
    
  );
        };