const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h3>Categories</h3>
        <ul>
          <li>About Us</li>
          <li>Testimonials</li>
          <li>Contact</li>
          <li>Private Policy</li>
          <li>Private Policy</li>
        </ul>
      </div>
      <div>
        <h3>Partners</h3>
        <ul>
          <li>Support</li>
          <li>Shipping & Returns</li>
          <li>Size Guide</li>
          <li>Product Care</li>
        </ul>
      </div>
      <div>
        <h3>Contact Us</h3>
        <ul>
          <p>26A Pagoda St, Tangs Singapore, 058187</p>
          <li>+65 62215462</li>
        </ul>
      </div>
      <div>
        <h3>Follow Us</h3>
        <ul id="footer_socials">
          <img src={`${process.env.PUBLIC_URL}/assets/insta.png`} alt="I"></img>
          <img src={`${process.env.PUBLIC_URL}/assets/fb.png`} alt="F"></img>
          <img src={`${process.env.PUBLIC_URL}/assets/tw.png`} alt="T"></img>
          <img src={`${process.env.PUBLIC_URL}/assets/wh.png`} alt="W"></img>
        </ul>
      </div>
    </div>
  );
};

export default Footer