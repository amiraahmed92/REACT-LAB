import { useState } from "react";
import { Input } from "../input";
export const ADDlist =(props) => {
    const [title, setTitle] = useState("Please enter list title");
  const [body, setBody] = useState("Please enter list body");

  const handleSubmit = () => {
    console.log("Calling to backend service");
     props.addtodo({ title, body });
};
return (
    <div className="card p-3 m-2" style={{ height: "95vh" }}>
      <h1>Add List</h1>
      <Input value={title} setValue={setTitle} label="Title" />
      <Input value={body} setValue={setBody} label="Body" />

      <button onClick={handleSubmit} className="btn btn-primary">
        addlist
      </button>
    </div>
  );
};