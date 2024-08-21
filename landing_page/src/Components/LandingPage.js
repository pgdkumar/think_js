import React from 'react';
import exampleImage from './../Image/logo1.jpg';
import banner from './../Image/banner.png';
import content from './../Image/arrow.png';
import image1 from './../Image/Jar.jpg';


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
            {/* section 2 */}
            <section>
                <div className="banner">
                    <img src={banner} alt="Banner" />
                    <div className="banner-content">
                    </div>
                </div>
            </section>
            {/* section 3 */}
            <section className='p-20px'>
                <div className='content'>
                    <div>
                        <img src={content} />
                    </div>
                    <div>
                        <lable>What is Lorem Ipsum?</lable>
                    </div>
                </div>
                <div>
                    LoremIpsumissimplydummytextoftheprintingandtypesettingindustry.
                </div>
                <div class=".container"> 
                <div class="row mt-35px">
                    <div class="column" >
                    <img src={image1} />
                        <h2 className='text-red .text-align-center'>Where does it come from?</h2>
                        <p className='fs-14px .text-align-center text-blue'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div class="column" >
                    <img src={image1} />
                        <h2 className='text-red .text-align-center'>Where does it come from?</h2>
                        <p className='fs-14px text-blue .text-align-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div class="column" >
                    <img src={image1} />
                        <h2 className='text-red .text-align-center'>Where does it come from?</h2>
                        <p className='fs-14px text-blue .text-align-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage