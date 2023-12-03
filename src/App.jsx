import { useState } from 'react'
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import { UserContext } from "../src/context/UserContext";


function App() {
  const [username, setUsername] = useState();

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };

  const userData = { username, setUsername };

  return (
    <>
      <UserContext.Provider value={{ username, updateUsername }}>
        <Header />
        <Main />
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App;
