const React = require('react');
const Layout = require('./Layout');

module.exports = function Qestions({ title, thems }) {
  return (
    <Layout title={title}>
      <div>
        <div>
          1. <a href="">{thems[0].name}</a>
        </div>
        <div>
          2. <a href="">{thems[1].name}</a>
        </div>
      </div>
    </Layout>
  );
};
