import React from 'react';
import exampleImage from './../Image/logo1.jpg';
function LandingPage() {
    return (
        <div>
            {/* section 1 */}
            <section>
                <nav class="navbar">
                    <div class="navbar-container container">
                        <input type="checkbox" name="" id="" />
                        <div class="hamburger-lines">
                            <span class="line line1"></span>
                            <span class="line line2"></span>
                            <span class="line line3"></span>
                        </div>
                        <ul class="menu-items">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Category</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Testimonial</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <div className='logo'>
                            <img src={exampleImage} alt="Example" style={{ width: '100px', height: 'auto' }} />
                        </div>

                    </div>
                </nav>
            </section>
        </div>
    )
}

export default LandingPage