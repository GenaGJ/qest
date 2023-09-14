const React = require('react');
const Layout = require('./Layout');
const Card = require('../components/Card');

module.exports = function CardsList({ title, questionsArr }) {
  return (
    <Layout title={title}>
      <div id="cards">
        <Card questions={questionsArr[0]} />
        <div>
          <form action={`/cardsList/${questionsArr.id}`} id="updateCards">
            <button type='submit'>Continue</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
