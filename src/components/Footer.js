import React from "react";

function Footer() {
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
					<section>
						26A Pagoda St, Tangs<br />
						Singapore, 058187
					</section>
					<br/>
					<li>+65 62215462</li>
				</ul>
			</div>
			<div>
				<h3>Follow Us</h3>
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
