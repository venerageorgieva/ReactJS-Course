import { useState } from "react";

const formInitialState = {
  username: "",
  password: "",
  age: "",
  gender: "f",
  swimming: false,
  shopping: false,
  running: false,
};

export default function ControlledForm(formRef) {
  const [formValues, setFormValues] = useState(formInitialState);

  const changeHandler = (e) => {
    let value = "";

    switch (e.target.type) {
      case "number":
        value = Number(e.target.value);
        break;
      case "checkbox":
        value = e.target.checked;
        break;
      default:
        value = e.target.value;
        break;
    }

    setFormValues((state) => ({
      ...state,
      [e.target.name]: e.target,
    }));
  };

  const resetFormHandler = () => {
    setFormValues(formInitialState);
  };

  const usernameBlurHandler = () => {
    console.log("on blur");
  };

  const submitHandler = () => {
    e.preventDefault();
    console.log(formValues);
    resetFormHandler();
  };

  return (
    <>
      <h1>Controlled Form</h1>
      <form ref={formRef} onSubmit={submitHandler}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            name='username'
            id='username'
            value={formValues.username}
            onChange={changeHandler}
            onBlur={usernameBlurHandler}
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='text'
            name='password'
            id='password'
            value={formValues.password}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor='age'>Age</label>
          <input
            type='number'
            name='age'
            id='age'
            value={formValues.age}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor='gender'>Gender</label>
          <select
            name='gender'
            id='gender'
            onChange={changeHandler}
            value={formValues.gender}
          >
            <option value='f'>F</option>
            <option value='m'>M</option>
          </select>
        </div>
        <div>
          <h3>Hobbies</h3>
          <label htmlFor='swimming'>Swimming</label>
          <input
            type='checkbox'
            name='swimming'
            id='swimming'
            checked={formValues.swimming}
            onChange={changeHandler}
          />
          <label htmlFor='shopping'>Shopping</label>
          <input
            type='checkbox'
            name='shopping'
            id='shopping'
            checked={formValues.shopping}
            onChange={changeHandler}
          />
          <label htmlFor='running'>Running</label>
          <input
            type='checkbox'
            name='running'
            id='running'
            checked={formValues.running}
            onChange={changeHandler}
          />
        </div>
        <div>
          <button type='button' onClick={submitHandler}>
            Register
          </button>
          <button type='button' onClick={resetFormHandler}>
            Reset
          </button>
        </div>
      </form>
    </>
  );
}
