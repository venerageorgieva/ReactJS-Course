export default function UncontrolledForm() {
  
    const submitHandler = (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget);
    }

    return (
    <>
      <h1>Uncontrolled Form</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input type='text' name='username' id='username' />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input type='text' name='password' id='password' />
        </div>
        <div>
            <label htmlFor="age" >Age</label>
            <input type="number" name="age" id="age" />
        </div>
        <div>
            <button type="button">Register</button>
            <button>Reset</button>
        </div>
      </form>
    </>
  );
}
