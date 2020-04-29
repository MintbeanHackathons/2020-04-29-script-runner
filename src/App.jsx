import React, {useState} from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";

import "./App.css";

function App() {
  const [value, setValue] = useState("// You can write the code");
  const options = {
    viewportMargin: Infinity,
    mode: "javascript",
    lineNumbers: true,
    theme: "default height500 readonly"
  };

  const ejecuteCode = () => eval(value)

  return (
    <div className="App" >
      <h1>You can write your JS Code here: </h1>
      <button onClick={ejecuteCode}>EJECUTAR</button>
      <CodeMirror
        value={value}
        options={options}
        onBeforeChange={(editor, data, value) => setValue(value)}
        className="margin"
      />

    </div>
  );
}

export default App;
