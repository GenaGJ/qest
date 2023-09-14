const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ title }) {
  return (
    <Layout title={title}>
      <div>
        <form action="/main">
          <div>What is your name?</div>
          <div>
            <input type="text" name="name" required />
          </div>
          <button type="submit">Game</button>
        </form>
      </div>
    </Layout>
  );
};