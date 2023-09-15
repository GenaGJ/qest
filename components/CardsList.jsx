const React = require('react');
const Layout = require('./Layout');
const Card = require('../components/Card');

module.exports = function CardsList({ title, questionsArr }) {
  return (
    <Layout title={title}>
      <input type="radio" id="s-1" name="slider-control" checked="checked" />
      <input type="radio" id="s-2" name="slider-control" />
      <input type="radio" id="s-3" name="slider-control" />
      <input type="radio" id="s-4" name="slider-control" />
      <input type="radio" id="s-5" name="slider-control" />
      <div
        class="js-slider"
        style={{
          width: '800px',
          height: '600px',
        }}>
        <figure class="js-slider_item img-1">
          <h3 class="wo-h3">{questionsArr[0].text}</h3>
          <Card questions={questionsArr[0]} />
        </figure>
        <figure class="js-slider_item img-2">
          <h3 class="wo-h3">{questionsArr[1].text}</h3>
          <Card questions={questionsArr[1]} />
        </figure>
        <figure class="js-slider_item img-3">
          <h3 class="wo-h3">{questionsArr[2].text}</h3>
          <Card questions={questionsArr[2]} />
        </figure>
        <figure class="js-slider_item img-4">
          <h3 class="wo-h3">{questionsArr[3].text}</h3>
          <Card questions={questionsArr[3]} />
        </figure>
        <figure class="js-slider_item img-5">
          <h3 class="wo-h3">{questionsArr[4].text}</h3>
          <Card questions={questionsArr[4]} />
        </figure>
        <div class="js-slider_nav" style={{ left: '-100px' }}>
          <label class="js-slider_nav_item s-nav-1 prev" for="s-5"></label>
          <label class="js-slider_nav_item s-nav-1 next" for="s-2"></label>
          <label class="js-slider_nav_item s-nav-2 prev" for="s-1"></label>
          <label class="js-slider_nav_item s-nav-2 next" for="s-3"></label>
          <label class="js-slider_nav_item s-nav-3 prev" for="s-2"></label>
          <label class="js-slider_nav_item s-nav-3 next" for="s-4"></label>
          <label class="js-slider_nav_item s-nav-4 prev" for="s-3"></label>
          <label class="js-slider_nav_item s-nav-4 next" for="s-5"></label>
          <label class="js-slider_nav_item s-nav-5 prev" for="s-4"></label>
          <label class="js-slider_nav_item s-nav-5 next" for="s-1"></label>
        </div>
      </div>
      {/* <div class="js-slider_indicator" style={{ marginTop: '150px' }}>
        <div class="js-slider-indi indi-1"></div>
        <div class="js-slider-indi indi-2"></div>
        <div class="js-slider-indi indi-3"></div>
        <div class="js-slider-indi indi-4"></div>
        <div class="js-slider-indi indi-5"></div>
      </div> */}

    </Layout>
  );
};

{
  /* 
<div id="cards">
        {/* {questionsArr.map((el) => ( */
}
// <Card questions={questionsArr[0]} />
// <Card questions={questionsArr[1]} />
// <Card questions={questionsArr[2]} />
// <Card questions={questionsArr[3]} />
// <Card questions={questionsArr[4]} />
{
  /* ))} */
}
// <div>
{
  /* <form
            action={`/cardslist/${questionsArr[0].id}`}
            data-id={questionsArr[0].id}
            id="updateCards">
            <button type="submit">Continue</button>
          </form> */
}
//   </div>
// </div> */}
