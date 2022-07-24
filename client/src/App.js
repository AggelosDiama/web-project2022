import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");

  const addUser = () => {
    Axios.post("http://localhost:3001/register", {
      username: username,
      email: email,
      pwd: password,
    })
      .then(() => {
        alert("It worked");
      })
      .catch(() => {
        alert("It didn't work");
      });
  };

  const validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  };

  const validatePassword = (text) => {
    let reg = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$*&@])(?=.{8,})');
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="App">
      <div className="inputs">
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => {
            if (validateEmail(event.target.value))
              setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            if (validatePassword(event.target.value))
              setPwd(event.target.value);
          }}
        />

        <button
          onClick={() => {
            if (username == "") {
              alert("Please enter a valid username");
            }
            else if (email == "") {
              alert("Please enter a valid email");
            }
            else if (password == "") {
              alert("Please enter a valid password");
            } 
            else addUser();
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default App;
