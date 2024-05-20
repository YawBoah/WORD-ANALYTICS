import { useState } from "react";
import Stats from "./Stats"
import Textarea from "./Textarea"

function Container() {
  const [text, setText] = useState("");
  const numberOfCharacters = text.length;

  return (
    <main className="container">
   <Textarea text={text} setText={setText}/>
   <Stats numberOfCharacters={numberOfCharacters} />
    </main>
  )
}

export default Container