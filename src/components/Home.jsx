import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>SolidCraft</h1>
          <p>We make best designs for the machine components </p>
        </main>
      </div>

      <div className='home2'>
        <img src={vg} alt='Graphics' />
        <div>
          <p>
            We are highly in demand for the solution of every problems you face
            in todays market related to design, we are the leading tech solution
            company and our aim is to provide better service to provide you robust design.
          </p>
        </div>
      </div>

      <div className='home3' id='about'>
        <div>
          <h1>Who we are?</h1>
          <p>
            At SolidCraft, we are passionate about transforming ideas into
            tangible realities. As a leading force in the component
            manufacturing industry, we leverage the power of SolidWorks to
            engineer innovative solutions that push the boundaries of what's
            possible, Our commitment to excellence is unwavering.
          </p>
        </div>
      </div>
      <div className='home4' id='brands'>
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.2s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.8s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
