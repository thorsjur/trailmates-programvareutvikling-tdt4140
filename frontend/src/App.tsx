import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import './App.css';

const fromApi = (set: Dispatch<SetStateAction<any>>) => {
  fetch("http://localhost:3001/")
    .then(res => res.json())
    .then(data => { set(data); });
}

export const App = () => {
  const [message, setMessage] = useState<String>("");

  useEffect(() => fromApi((data) => setMessage(data.message)), []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {message}
        </p>
      </header>
    </div>
  );
}


