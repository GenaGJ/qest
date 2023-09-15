const React = require('react');
const Navbar = require('./Navbar');
const Footer = require('./Footer');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="icon" href="/image/logo.png" />
        <link rel="stylesheet" href="/styles/style.css" />
        <script defer src="/scripts/script.js" />
      </head>
      <body>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};
