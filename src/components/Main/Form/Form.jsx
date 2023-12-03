import React from "react";


const Form = ({handleSubmit}) => {

  return (
    <>
      <article>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" name="name" />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input type="text" name="email" />
          <br />
          <label htmlFor="url">Foto</label>
          <br />
          <input type="url" name="url" />
          <br />
          <label htmlFor="age">Edad</label>
          <br />
          <input type="number" name="age" />
          <br />

          <button type="submit">Guardar</button>
        </form>
      </article>
    </>
  );
};

export default Form;
