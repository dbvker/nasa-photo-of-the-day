import React from "react";
import "./App.css";

import Photo from './components/Photo';


function App() {
  const darkMode = () => {
    const appDiv = document.querySelector('.App');
    appDiv.classList.toggle('dark-mode');
  };

  return (
    <div className="App">
      <h1>NASA Astronomy Photo of the Day!</h1>
      <button onClick={darkMode}>Dark Mode</button>
      <Photo />
    </div>
  );
}

export default App;
