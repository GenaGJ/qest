const React = require('react');
const Layout = require('./Layout');

module.exports = function Qestions({ title, theme,user }) {
  return (
    <Layout title={title} user={user}>
      <div className="questions">
        <div>
          1. <a href={`/cardlist/${theme[0].id}`}>{theme[0].name}</a>
        </div>
        <div>
          2. <a href={`/cardlist/${theme[1].id}`}>{theme[1].name}</a>
        </div>
        <div>
          3. <a href={`/cardlist/${theme[2].id}`}>{theme[2].name}</a>
        </div>
      </div>
    </Layout>
  );
};
