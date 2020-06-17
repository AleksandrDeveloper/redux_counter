import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter_One from "./components/Counter_One";
import Counter_Two from "./components/Counter_Two";


function App() {
  const [theme, settheme] = useState(true);
  return (
    <div className={theme ? "main pt-5 dark" : "main pt-5"}>
      <div className="container">
        <div className="d-flex justify-content-between pb-2 align-items-center">
          <h1 className="text-success">React Counter</h1>
          <button type="button" className={theme?"btn btn-light":"btn btn-dark"} onClick={()=>settheme(!theme)}>Theme</button>
        </div>
        <hr className={theme ? "bg-light" : ""} />

        <div className="mw-100">

          <Counter_One theme={theme} />
          <Counter_Two theme={theme} /> 
        
        </div>
      </div>
    </div>
  );
}

export default App;
