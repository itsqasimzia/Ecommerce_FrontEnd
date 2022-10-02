import React, { Fragment } from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      <div id="footer" style={{ background: "#ebf4fa", padding: "1rem" }}>
        <div id="utility-links">
          <div class="help">
            <ul>
              <h3 class="left">Need Help?</h3>
              <li>
                <a href="#">Check Order Status</a>
              </li>
              <li>
                <a href="#">Return Policy</a>
              </li>
              <li>
                <img
                  class="help-img-icon"
                  width="18"
                  height="14"
                  src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469462241/msg_jn0whe.svg"
                />
                <a href="#">Live Chat</a>
              </li>
              <li>
                <img
                  class="help-img-icon"
                  width="15"
                  height="15"
                  src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469462243/phone_zfj4ey.svg"
                />
                <a href="#">310-4901000</a>
              </li>
            </ul>
          </div>

          <div class="rectangle"></div>

          <div class="about">
            <ul>
              <h3 class="left">About Application</h3>
              <li>
                <a href="#">Company Information</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          <div class="rectangle"></div>

          <div class="card">
            <ul>
              <h3 class="left">Card Services</h3>
              <li>
                <a href="#">Application Credit Card</a>
              </li>
              <li>
                <a href="#">Application Gift Card</a>
              </li>
            </ul>
          </div>
        </div>

        <div id="newsletter-social">
          <div id="newsletter">
            <h3 class="center">Get More Deals!</h3>
            <p class="deals">
              Weekly ad, new store openings, store events, and more.
            </p>
            <form className="form-inner">
              <input type="text" placeholder="Enter email address" />
              <input type="submit" value="Sign Up" />
            </form>
          </div>

          <div
            id="social"
            style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
          >
            <a href="https://facebook.com" target="_blank">
              <img
                width="34"
                height="34"
                src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469457641/facebook_khedl5.svg"
              />
            </a>

            <a href="https://twitter.com" target="_blank">
              <img
                width="34"
                height="34"
                src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469457641/twitter_fu5ejk.svg"
              />
            </a>

            <a href="hhttps://pinterest.com/" target="_blank">
              <img
                width="34"
                height="34"
                src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469457641/pinterest_kahh1i.svg"
              />
            </a>

            <a href="https://www.youtube.com" target="_blank">
              <img
                width="34"
                height="34"
                src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469457641/youtube_xrntt3.svg"
              />
            </a>

            <a href="http://instagram.com" target="_blank">
              <img
                width="34"
                height="34"
                src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469457641/instagram_ugek0w.svg"
              />
            </a>
          </div>
        </div>

        <div class="rectangle-horiz"></div>

        <div id="copyright">
          <ul>
            <li class="copy">© All Rights Reserved.</li>

            <li class="copy">Privacy Policy | Terms + Conditions | Sitemap</li>

            <li class="copy">
              California Proposition 65 | California Transparency in Supply
              Chains Act (SB 657)
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
