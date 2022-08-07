import React from 'react';
import { Link } from 'react-router-dom';
import SeekerSidebar from '../../components/SeekerSidebar/SeekerSidebar';
import './ServiceDashboard.css';
import bannerGuy from '../../images/dash-banner-guy.png';
import { useDocTitle } from '../../hooks/useDocTitle';

const ServiceDashboard = () => {
  useDocTitle();

  return (
    <div className="service-dash-ctn">
      <SeekerSidebar />
      <div className="service-dash">
        <div className="service-dash-banner">
          <img
            src={bannerGuy}
            alt="banner guy"
            className="service-dash-banner-guy"
          />
          <h4 className="service-dash-banner-title">
            Want to have best servises?
          </h4>
          <p className="service-dash-banner-desc">
            Hello this is a line of text will go here
          </p>
          <Link to="/service_dashboard/upload_service">
            <button className="service-dash-banner-button">
              Create New Service
            </button>
          </Link>
        </div>
        <div className="service-dash-content">
          <div className="service-dash-content-heading">
            <p className="service-dash-content-title">All Services</p>
            <div className="service-dash-content-styled-divider"></div>
            <p className="service-dash-content-amount">6 in total</p>
          </div>
          <div className="service-dash-content-services">placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDashboard;
