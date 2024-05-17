function Textarea() {
  return <textarea className="textarea" onChange={(e) => {
    console.log("change event...");
    console.log(e.target.value);
  }} 
  placeholder="Enter text here..."
  spellCheck="false"
  />;
}

export default Textarea;
