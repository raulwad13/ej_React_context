import React, {useState, useContext} from "react";
import Form from './Form'
import Card from './Card'
import { UserContext } from "../../context/UserContext";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
  const { updateUsername } = useContext(UserContext);
  const [users, setUsers] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
  

    const name = e.target.name.value;
    const email = e.target.email.value;
    const url = e.target.url.value;
    const age = e.target.age.value;



    const myForm = { name, email, url, age };

    updateUsername(email)
    setUsers(myForm);
  };
  return (
  <>
  <main>
    
    <Form handleSubmit={handleSubmit}/>
    <section>{users? <Card key={uuidv4()} props={users} />:""}</section>
  </main>
  </>
  )
};

export default Main;
