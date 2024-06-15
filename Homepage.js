import React from "react";
import { Link, Navigate} from "react-router-dom";
import Bmicalculator from "./Bmicalculator";


export default function Homepage() {
  const auth = localStorage.getItem('user');
  const logout = ()=>{
    localStorage.clear();
    Navigate('/profile');
  }
  return (
    <>
      <div className="navbar">
        <nav className="navs">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/training" target="_blank">TRAINING</Link>
            </li>
            <li>
              <Link to="/whyus" target="_blank">WHY US</Link>
            </li>
            <li>
              <Link to="/about" target="_blank">ABOUT</Link>
            </li>
            <li>{
              auth? <Link to="/profile" onClick={logout}>Logout</Link> : 
              <Link to="/profile" target="_blank">PROFILE</Link>
              }
            </li>
          </ul>
        </nav>

        <span className="sp">
          <li>
            <Link to="https://www.facebook.com/profile.php?id=61558249133728&mibextid=ZbWKwL">facebook</Link>
          </li>
          <li>
            <Link to="#">instagram</Link>
          </li>
        </span>
      </div>

      <div className="middle">
        <h1>STAY ON TRACK</h1>
        <p>FITNESS AT ANY COST</p>
      </div>

      <div className="welcome">
        <h1>WELCOME</h1>
        <p>
          STAY ON TRACK is the best place to learn how to stay in
          shape, all in a relaxed, friendly and supportive atmosphere. To start
          your training with us, just pick up the phone and mail us on
          bhanu@gmail.com to book your first class, or scroll down to learn more.
        </p>
      </div>


      <div className="program">
        <h1>OUR TRAINING</h1>
      </div>

      <div className="train">
        <div id="train1">
          <img src="https://images.pexels.com/photos/7801206/pexels-photo-7801206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height="350px" width="350px" className="image"/>
          <p>WEIGHT GAIN</p>
        </div>
        <div id="train2">
          <img src="https://images.pexels.com/photos/6551070/pexels-photo-6551070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height="350px" width="350px" className="image"/>
          <p>WEIGHT LOSS</p>
        </div>
        <div id="train3">
          <img src="https://images.pexels.com/photos/17944268/pexels-photo-17944268/free-photo-of-man-lifting-weights.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height="350px" width="350px"className="image"/>
          <p>MAINTENANCE CALORY</p>
        </div>
        <div id="train4">
          <img src="https://images.pexels.com/photos/2035066/pexels-photo-2035066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height="350px" width="350px" className="image"/>
          <p>YOGA</p>
        </div>
      </div>

      <div className="bmi">

        <div className="bmi1">
          <h1>KNOW</h1>
          <h1>YOUR</h1>
          <h2>BMI</h2>
        </div>

        <div id="bmi2">
         <Link to="/bmicalculator" >click here</Link>
        </div>
      </div>

      <h1 className="h">WHY US</h1>
      <hr/>
      <div className="us">
        

        <div className="des">
          <div id="d1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL00hjngnZ_4KozRJyhDoIidFd7ilCaqz3MhTN3t8Wlg&s" height="80px" width="70px"/>
            <h4>TOP FACILITY</h4>
          </div>
          <div id="d2">
            <img src="https://t3.ftcdn.net/jpg/04/75/79/00/360_F_475790067_rfgcv3o1UuCbDxyPOb0RoZZd7a8TpGar.jpg" height="80px" width="70px"/>
           <h4>PROFESSIONAL SERVICE</h4>
          </div>
          <div id="d3">
            <img src="https://img.squadhelp.com/story_images/visual_images/1658500068-SelfFocus.png?class=listing" height="80px" width="70px"/>
            <h4>SELF FOCUS</h4>
          </div>
        </div>

        <div className="desc">
        <div id="d4">
          <img src="https://www.shutterstock.com/image-vector/level-logotype-design-260nw-758417338.jpg" height="80px" width="70px" />
          <h4>ALL LEVEL</h4>
        </div>
        <div id="d5">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHBudUU1it5JMfVK23seOoJstm0hJTmVqZUxjr66LlQ&s" height="80px" width="70px" />
          <h4>EXTRA SENIOR SUPPORT</h4>
        </div>
        <div id="d6">
          <img src="https://logos.flamingtext.com/Word-Logos/special-design-sketch-name.png" height="80px" width="70px" />
          <h4>EXTRA SUPPORT</h4>
        </div>
        </div>


      </div>

      <div className="test">
        <h1>testimonials</h1>
        <hr/>
        <p>We have now trained in 5 districts and maybe 50 different gyms and I can confirm this is the best place to train in the world.</p>
      </div>

      <div id="our">
        <h1>OUR TEAM</h1>
      </div>
      <hr/>

      <div className="team">
        <div id="t1">
          <img src="https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height="350px" width="350px" />
          <h3>HARSH</h3>
        </div>
        <div id="t2">
          <img src="https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height="350px" width="350px" />
          <h3>ASHU</h3>
        </div>
        <div id="t3">
          <img src="https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height="350px" width="350px" />
          <h3>AMAN</h3>
        </div>
      </div>

      <footer className="footer">

        <div className="f1">
          <h1>SUBSCRIBE US</h1>
          <input type="email" placeholder="Your Email" id="e"></input>
          <button id="btns">GO</button>
        </div>

        <div className="f2">
          <h1>OUR LINKS</h1>
          <Link to="/training" id="train">TRAINING</Link>
          <Link to="/about" id="a1" target="_blank">ABOUT</Link>
          <Link to="#" id="h1">HELP</Link>
        </div>

        <div className="f3">
          <h2>MORE INFORMATION</h2>
          <p>College Of Engineering</p>
          <p>ROORKEE</p>
        </div>

      </footer>
    </>
  );
}
