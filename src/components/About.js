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
            Hello! I’m Daniel Curry. Web designer from USA, California, San
            Francisco. I have rich experience in web site design and building,
            also I am good at wordpress. I love to talk with you about our
            unique.
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
