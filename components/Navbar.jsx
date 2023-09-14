const React = require('react');
const Layout = require('./Layout');

module.exports = function Navbar() {
  return (
    <div className="navbar">
      <div>
        <a href="">
          <img
            src="https://www.pinclipart.com/picdir/middle/101-1018856_picture-quiz-time-png-gif-clipart.png"
            alt="Logo"
          />
        </a>
      </div>
      <div>
        <img
          src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          alt=""
        />
      </div>
      <div>Name</div>
      <div>
        <a href="">Sig In</a>
      </div>
      <div>
        <a href="">Log Out</a>
      </div>
    </div>
  );
};
