const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ title }) {
  return (
    <Layout title={title}>
      <div className="regist">
        <div>
          <img
            src="https://static.tildacdn.com/tild3238-6431-4437-a262-623263373337/photo.jpg"
            alt=""
          />
        </div>
        <form action="/main">
          <div>What is your name?</div>
          <div>
            <input type="text" name="name" required />
          </div>
          <button type="submit">
            <a href="/questions">Game</a>
          </button>
        </form>
      </div>
    </Layout>
  );
};
