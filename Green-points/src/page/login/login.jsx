import React from 'react';
import './login.css'
import images from "../../assets/images.png";
const imagesList = [
  {
    id: 1,
    src: images,
    alt: "Logo",
  },
];
const  Login=()=>{

    return (
        < div className="mainframe">
        <div className="container">
          <header>
            <h1 className='greenheader'>
            Green Points
            </h1>
            <nav>
            {imagesList.map((images) => (
        <img key={images.id} src={images.src} alt={images.alt}/>
      ))}
            </nav>
          </header>
          <main>
            <section className="login-signup">
              <h2>LOGIN & SIGNUP</h2>
              <p>
                Small actions today, a greener tomorrow. Every point counts, every
                choice matters, every action inspires a better future for our
                planet.
              </p>
              <div className="login-form">
                <h3>Sign in to your account</h3>
                <form>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
  
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" required />
  
                  <div className="forgot-password">
                    <a href="#">Forgot password?</a>
                  </div>
  
                  <div className="terms">
                    <input type="checkbox" id="terms" name="terms" required />
                    <label htmlFor="terms">
                      I've read and agreed to <a href="#">User Agreement</a> and
                      <a href="#">Privacy Policy</a>
                    </label>
                  </div>
  
                  <button type="submit" className="signin">
                    Sign in
                  </button>
  
                  <div className="other-signin">
                    <p>or other way to sign in</p>
                    <button className="google-signin">
                     Sign in with Google
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </main>
        </div>
        </div>
    )
  }


export default Login