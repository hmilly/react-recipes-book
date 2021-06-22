import React from "react";

function Footer() {
	return (
		<div className="footer">
			<div>
				<h2>Categories</h2>
				<ul>
					<li>About Us</li>
					<li>Testimonials</li>
					<li>Contact</li>
					<li>Private Policy</li>
					<li>Private Policy</li>
				</ul>
			</div>
			<div>
				<h2>Partners</h2>
				<ul>
					<li>Support</li>
					<li>Shipping & Returns</li>
					<li>Size Guide</li>
					<li>Product Care</li>
				</ul>
			</div>
			<div>
				<h2>Contact Us</h2>
				<ul>
					<li>26A Pagoda St, Tangs</li>
					<li>Singapore, 058187</li>
					<br></br>
					<li>+65 62215462</li>
				</ul>
			</div>
			<div>
				<h2>Follow Us</h2>
				<section>
					<img src={`${process.env.PUBLIC_URL}/assets/insta.png`} alt="I"></img>
					<img src={`${process.env.PUBLIC_URL}/assets/fb.png`} alt="F" ></img>
					<img src={`${process.env.PUBLIC_URL}/assets/tw.png`} alt="T" ></img>
					<img src={`${process.env.PUBLIC_URL}/assets/wh.png`} alt="W" ></img>
				</section>
			</div>
		</div>
	)
}

export default Footer
