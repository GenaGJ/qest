const React = require('react');
const Layout = require('./Layout');

module.exports = function CardsList({ title, questions }) {
  return (
    <Layout title={title}>
      <div>
        <Card question={questions[0]} />
        <div>
          <button>Continue</button>
        </div>
      </div>
    </Layout>
  );
};
