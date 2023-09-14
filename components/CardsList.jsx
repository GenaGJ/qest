const React = require('react');
const Layout = require('./Layout');

module.exports = function CardsList({ title, questions }) {
  return (
    <Layout title={title}>
      <div>
        <Card question={questions} />
        <div>
          <button>Continue</button>
        </div>
      </div>
    </Layout>
  );
};
