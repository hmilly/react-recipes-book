const Footer = () => {
  return (
    <footer className="main_footer">
      <ul>
        <h3>Categories</h3>
        <li>About Us</li>
        <li>Testimonials</li>
        <li>Contact</li>
        <li>Private Policy</li>
        <li>Private Policy</li>
      </ul>
      <ul>
        <h3>Partners</h3>
        <li>Support</li>
        <li>Shipping & Returns</li>
        <li>Size Guide</li>
        <li>Product Care</li>
      </ul>
      <ul>
        <h3>Contact Us</h3>
        <p>26A Pagoda St, Tangs Singapore, 058187</p>
        <li>+65 62215462</li>
      </ul>
      <div>
        <h3>Follow Us</h3>
        <ul className="socials">
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/assets/insta.png`}
              alt="instagram logo"
            />
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/assets/fb.png`}
              alt="Facebook logo"
            ></img>
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/assets/tw.png`}
              alt="Twitter logo"
            />
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/assets/wh.png`}
              alt="Whatsapp logo"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
