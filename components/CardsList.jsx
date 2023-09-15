const React = require('react');
const Layout = require('./Layout');
const Card = require('../components/Card');

module.exports = function CardsList({ title, questionsArr, user }) {
  let img = '';
  if (questionsArr[0].idTheme === 1) {
    img =
      'https://avatars.dzeninfra.ru/get-zen_doc/3431141/pub_5ed3e1f8d85eff2ac10d25c9_5ed3e4c1706f83164ac7c2d2/scale_1200';
  } else if (questionsArr[0].idTheme === 2) {
    img = 'https://mana.su/wp-content/uploads/2017/11/papiny-dochki-film-2018-goda-1.jpg';
  } else if (questionsArr[0].idTheme === 3) {
    img =
      'https://cs2.gamemodding.com/images/47c59d896b40f1e2fdec85bb7b5e0546422c53b3321e309ae6837736544c7b73.jpg';
  }
  return (
    <Layout title={title} user={user}>
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
          <Card questions={questionsArr[0]} img={img} />
        </figure>
        <figure class="js-slider_item img-2">
          <h3 class="wo-h3">{questionsArr[1].text}</h3>
          <Card questions={questionsArr[1]} img={img} />
        </figure>
        <figure class="js-slider_item img-3">
          <h3 class="wo-h3">{questionsArr[2].text}</h3>
          <Card questions={questionsArr[2]} img={img} />
        </figure>
        <figure class="js-slider_item img-4">
          <h3 class="wo-h3">{questionsArr[3].text}</h3>
          <Card questions={questionsArr[3]} img={img} />
        </figure>
        <figure class="js-slider_item img-5">
          <h3 class="wo-h3">{questionsArr[4].text}</h3>
          <Card questions={questionsArr[4]} img={img} />
        </figure>
        <div class="js-slider_nav" style={{ left: '-100px' }}>
          <label class="js-slider_nav_item s-nav-1 prev" for="s-5"></label>
          <label
            class="js-slider_nav_item s-nav-1 next"
            for="s-2"
            style={{ left: '1000px' }}></label>
          <label class="js-slider_nav_item s-nav-2 prev" for="s-1"></label>
          <label
            class="js-slider_nav_item s-nav-2 next"
            for="s-3"
            style={{ left: '1000px' }}></label>
          <label class="js-slider_nav_item s-nav-3 prev" for="s-2"></label>
          <label
            class="js-slider_nav_item s-nav-3 next"
            for="s-4"
            style={{ left: '1000px' }}></label>
          <label class="js-slider_nav_item s-nav-4 prev" for="s-3"></label>
          <label
            class="js-slider_nav_item s-nav-4 next"
            for="s-5"
            style={{ left: '1000px' }}></label>
          <label class="js-slider_nav_item s-nav-5 prev" for="s-4"></label>
          <label
            class="js-slider_nav_item s-nav-5 next"
            for="s-1"
            style={{ left: '1000px' }}></label>
        </div>
      </div>
    </Layout>
  );
};
