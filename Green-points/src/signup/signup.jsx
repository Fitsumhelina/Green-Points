import React from 'react';
import './signup.css'
const  Signup=()=>{

    return (
      < div className="mainframe">
        <div className="container">
      <header>
        <h1><i className="h1"></i> Green Points</h1>
        <nav>
          <button className="login" onClick={() => handleNavigation('login.html')}>
            LOG IN
          </button>
          <b>or</b>
          <button className="signup" onClick={() => handleNavigation('signup.html')}>
            SIGN UP
          </button>
        </nav>
      </header>
      <main>
        <section className="login-signup">
          <h2>ADMIN & FARMER SIGNUP</h2>
          <p>
            Small actions today, a greener tomorrow. Every point counts, every
            choice matters, every action inspires a better future for our
            planet.
          </p>
          <div className="login-form">
            <form action="registration.php" method="post">
              <h3>Sign up to your account</h3>
              <label htmlFor="first_name">First Name</label>
              <input type="text" id="first_name" name="first_name" required />
              <label htmlFor="middle_name">Middle Name</label>
              <input type="text" id="middle_name" name="middle_name" required />
              <label htmlFor="last_name">Last Name</label>
              <input type="text" id="last_name" name="last_name" required />
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
              <fieldset className="fieldset">
                <legend>Gender</legend>
                <label>
                  <input value="1" type="radio" name="gender" required />Male
                </label>
                <label>
                  <input value="2" type="radio" name="gender" />Female
                </label>
              </fieldset>
              <fieldset className="fieldset">
                <legend>Type</legend>
                <label>
                  <input value="1" type="radio" name="type" required />Admin
                </label>
                <label>
                  <input value="2" type="radio" name="type" />Farmer
                </label>
              </fieldset>
              <label htmlFor="birthdate">Birthdate</label>
              <input type="date" id="birthdate" name="birthdate" required />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
              <div className="terms">
                <input type="checkbox" id="terms" name="terms" required />
                <label htmlFor="terms">
                  I've read and agreed to <a href="#">User Agreement</a> and
                  <a href="#">Privacy Policy</a>
                </label>
              </div>
              <button type="submit" className="signin">Sign Up</button>
            </form>
          </div>
        </section>
      </main>
    </div>
      </div>
    )
  }


export default Signup