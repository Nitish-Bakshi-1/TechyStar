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
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
            aliquam natus cupiditate ratione ex cumque praesentium, temporibus
            atque nostrum est consectetur, modi molestiae ducimus id alias optio
            delectus eligendi voluptate.lorem lorem
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            deleniti sint esse non minus? Ipsam praesentium quaerat est
            aspernatur at provident, ad unde, architecto omnis, odit aut
            molestias itaque labore?Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laboriosam repellendus incidunt alias unde ratione
            eos exercitationem fuga repudiandae dolores. Tempora maiores
            deleniti repellendus iusto est quae dignissimos explicabo optio!
            Dignissimos.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
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
