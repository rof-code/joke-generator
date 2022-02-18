import "./App.css";
import useRandomJoke from "./useRandomJoke";
import { useRef, useState } from "react";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("Rodolfo");
  const [lastName, setLastName] = useState("Augusto");

  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="App">
      <div className="overlay__joke"></div>
      <h1>The Joke Generator</h1>
      <h2>{joke}</h2>
      <form>
        <input placeholder="First Name" ref={firstNameRef} />
        <input placeholder="Last Name" ref={lastNameRef} />
        <button onClick={generateJoke}>Generate Joke</button>
      </form>
    </div>
  );
}

export default App;
