import React from "react";
import './Pricing.css';
import Subscription from '../Subscription/Subscription'

const Pricing = () => {
  return (
    <div id="card" className="mb-5">
        <h3 className="text-center mt-4 mb-5"> Choose Your Dedicated Team </h3>
      <div className="row card-deck">
        <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card mb-4">
          <div className="card-body text-center">
            <h5 className="card-title"> $199 </h5>
            <p className="card-text primary-border-bottom">
              For Basic
            </p>
            <p className="card-text">
              Homepage <br/>
            </p>
            <p className="card-text">
            No inner Page <br/>

            </p>
            <p className="card-text">
            Asset file <br/>

            </p>
            <p className="card-text">
            Source file <br/>
            </p>
            <p className="card-text">
            Free Stock Photos  <br/>
            </p>
            <p className="card-text">
            10 Days Free Support  <br/>
            </p>
            <p className="card-text">
            24/7 Support <br/>
            </p>
            
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card mb-4 card-active">
          <div className="card-body text-center">
            <h5 className="card-title "> $199 </h5>
            <p className="card-text ">
              For Basic
            </p>
            <p className="card-text">
              Homepage <br/>
            </p>
            <p className="card-text">
            No inner Page <br/>

            </p>
            <p className="card-text">
            Asset file <br/>

            </p>
            <p className="card-text">
            Source file <br/>
            </p>
            <p className="card-text">
            Free Stock Photos  <br/>
            </p>
            <p className="card-text">
            10 Days Free Support  <br/>
            </p>
            <p className="card-text">
            24/7 Support <br/>
            </p>
            
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card ">
          <div className="card-body text-center">
            <h5 className="card-title "> $199 </h5>
            <p className="card-text primary-border-bottom">
              For Basic
            </p>
            <p className="card-text">
              Homepage <br/>
            </p>
            <p className="card-text">
            No inner Page <br/>

            </p>
            <p className="card-text">
            Asset file <br/>

            </p>
            <p className="card-text">
            Source file <br/>
            </p>
            <p className="card-text">
            Free Stock Photos  <br/>
            </p>
            <p className="card-text">
            10 Days Free Support  <br/>
            </p>
            <p className="card-text">
            24/7 Support <br/>
            </p>
            
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        </div>
      </div>

      <Subscription/>
    </div>
  );
};

export default Pricing;
