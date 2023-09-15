const React = require('react');

module.exports = function Navbar({ user }) {
  return (
    <div className="navbar">
      <div>
        <a href="">
          <img src="/image/logo.png" alt="Logo" />
        </a>
      </div>
      <div>
        <img src="/image/user.png" alt="" />
      </div>
      {user && <div>Hello, {user.user}</div>}
      <div>
        <a href="/questions">In game</a>
      </div>
      <div id="logOut">
        <a href="/">Log Out</a>
      </div>
    </div>
  );
};
