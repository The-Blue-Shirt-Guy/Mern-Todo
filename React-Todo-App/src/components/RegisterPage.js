import React, { useState } from "react";

const RegisterPage = () => {
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerFormDataHandler = (e) => {
    e.preventDefault();

    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value,
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (
      registerFormData.name === "" ||
      registerFormData.email === "" ||
      registerFormData.password === ""
    ) {
      return alert("You must provide all values");
    }
  };

  return (
    <form className="register" onSubmit={submitFormHandler}>
      <h3>Register Here</h3>
      <div>
        <label>Name :</label>
        <input
          value={registerFormData.name}
          onChange={registerFormDataHandler}
          name="name"
          type="text"
          placeholder="enter your name"
          className="form-input"
        ></input>
      </div>
      <div>
        <label>Email :</label>
        <input
          value={registerFormData.email}
          onChange={registerFormDataHandler}
          name="email"
          type="email"
          placeholder="enter your Email"
          className="form-input"
        ></input>
      </div>
      <div>
        <label>Password :</label>
        <input
          value={registerFormData.password}
          onChange={registerFormDataHandler}
          type="password"
          placeholder="enter your password"
          className="form-input"
          name="password"
        ></input>
      </div>
      <button className="btn" onClick={submitFormHandler}>
        Submit
      </button>
    </form>
  );
};

export default RegisterPage;
