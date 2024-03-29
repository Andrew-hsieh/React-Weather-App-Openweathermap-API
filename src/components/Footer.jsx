import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => (
  <div className="border-top-0 list-group-item row px-0 py-md-4 border-bottom bg-dark text-white">
    <div className="text-center pt-3">
      <h6>Create by Andrew Hsieh</h6>
      <small>Weather information is provide by openweathermap.org</small>
    </div>
    <div className="text-center pt-3">
      <ul className="d-flex justify-content-around col-8 col-md-4 mx-auto">
        <li>
          <a href="https://github.com/zhi999xie/Weather-App"><i className="fab fa-github-square" aria-label="github-link" /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/andrew-hsieh-22a802205/"><i className="fab fa-linkedin" aria-label="linkedin-link" /></a>
        </li>
        <li>
          <a href="tel:+61478326588"><i className="fas fa-mobile-alt" aria-label="phone-number" /></a>
        </li>
        <li>
          <a href="mailto:zhi999xie@gmail.com"><i className="far fa-envelope" aria-label="e-mail" /></a>
        </li>
      </ul>
    </div>

  </div>
);

export default Footer;
