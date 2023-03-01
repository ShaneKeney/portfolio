const About = () => {
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src="images/man_r.jpg" alt="" />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
            {`Hey there! My name is Shane Keney and I'm a Fullstack Software Engineer based out of the beautiful coastal city of Wilmington, NC. As a Mobile Development specialist with a focus on React Native via Expo, I love helping businesses and individuals turn their software ideas into reality. With my expertise and experience, I'm committed to delivering top-notch solutions that meet your unique needs and exceed your expectations. So whether you're looking to build a new app from scratch or improve an existing one, I'm here to help! Let's connect and make your software dreams a reality.`}
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> 29
              </li>
              <li>
                <strong>Residence:</strong> USA
              </li>
              <li>
                <strong>Freelance:</strong> Available
              </li>
              <li>
                <strong>Address:</strong> Wilmington, NC
              </li>
              <li>
                <strong>Phone:</strong> +1 860 815 7873
              </li>
              <li>
                <strong>E-mail:</strong> sckeney@gmail.com
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="#" className="btn hover-animated">
              <span className="circle" />
              <span className="lnk">Download CV</span>
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
