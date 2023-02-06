const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>E: sckeney@gmail.com</p>
        <p>T: +1 (860) 815 7873</p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/shane-keney/"
          >
            <span className="icon fab fa-linkedin" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ShaneKeney"
          >
            <span className="icon fab fa-github" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/skeney8/"
          >
            <span className="icon fab fa-instagram" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.pinterest.com/keney0601/"
          >
            <span className="icon fab fa-pinterest" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
