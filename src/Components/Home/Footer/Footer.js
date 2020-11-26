import React from 'react';
import './Footer.css';
import logo from '../../../Illustration/Group 86.png'
import facebook from '../../../Illustration/facebook-logo-in-circular-shape@2x.png';
import twitter from '../../../Illustration/twitter (4)@2x.png';
import linkedin from '../../../Illustration/linkedin (2)@2x.png';
import dribbble from '../../../Illustration/dribbble (1)@2x.png';

const Footer = () => {
    return (
        <div id="footer" className="mt-5 mb-5">
            <div className="row mt-5">
                <div className="col-md-5 col-sm-12 m-sm-auto pl-5 text-center">
                    <div className="logo-img ">
                        <img src={logo}  alt=""/>
                    </div>
                    <div className="social-group">
                        <img src={facebook} alt=""/>
                        <img src={twitter} alt=""/>
                        <img src={linkedin} alt=""/>
                        <img src={dribbble} alt=""/>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="row mt-5 font-weight-bold">
                        <div className="col-md-4 col-sm-12 my-4 m-sm-auto text-center">
                            <p className="text-secondary"> Features</p>
                            <p className="text-secondary"> Enterprise </p>
                            <p className="text-secondary"> Pricing </p>
                        </div>
                        <div className="col-md-4 my-4 m-sm-auto text-center">
                            <p className="text-secondary"> Blog </p>
                            <p className="text-secondary"> Help  </p>
                            <p className="text-secondary"> Contact Us </p>
                            <p className="text-secondary"> Status </p>
                        </div>
                        <div className="col-md-4 my-4 m-sm-auto text-center">
                        <p className="text-secondary"> About Us </p>
                            <p className="text-secondary"> Terms of Service  </p>
                            <p className="text-secondary"> Security </p>
                            <p className="text-secondary"> Login </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;