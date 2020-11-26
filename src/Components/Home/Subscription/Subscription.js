import React from 'react';
import './Subscription.css'

const Subscription = () => {
    return (
        <div id="subscription">
            <h3 className="text-center mt-5 mb-4 pt-5"> Get your design right, right now </h3>

            <p className="text-secondary text-center">
                Be the first know our latest offers and updates!
            </p>
            <form action="" className="form w-50 ">
            <input type="email" class="form-control mt-5" placeholder="Enter your email address" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <button className="primary-form-button">
                    Get Started
                </button>
            </form>

        </div>
    );
};

export default Subscription;