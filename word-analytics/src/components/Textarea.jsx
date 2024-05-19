import { useState } from "react";

function Textarea() {
  const [text, setText] = useState("");

  return <textarea className="textarea" 
  value={text}
  onChange={(e) => {
    const newText = e.target.value;
    setText(newText);
  }} 
  placeholder="Enter text here..."
  spellCheck="false"
  />;
}

export default Textarea;
