const React = require('react');
const Layout = require('./Layout');

module.exports = function Navbar() {
  return (
    <div className="navbar">
      <div>
        <a href="">
          <img src="../image/logo.png" alt="Logo" />
        </a>
      </div>
      <div>
        <img src="../image/user.png" alt="" />
      </div>
      <div className="userHello" id="userHello"></div>
      <div id="logOut">
        <a href="/">Log Out</a>
      </div>
    </div>
  );
};
