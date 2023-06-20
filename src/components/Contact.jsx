import React from "react";

const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contact us</h1>
        <form>
          <div>
            <label>name</label>
            <input type='text' required placeholder='ex-john' />
          </div>

          <div>
            <label>Email</label>
            <input type='Email' required placeholder='ex-john@gmail.com' />
          </div>

          <div>
            <label>Chore</label>
            <input
              type='text-area'
              required
              placeholder='What is the query? '
            />
          </div>

          <button type='submit'>Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
