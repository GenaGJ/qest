const React = require('react');

module.exports = function Card({ questions, img }) {
  return (
    <div style={{ width: '400px', height: '400px' }}>
      <div className="imageCards" name="img" style={{ marginBottom: '20px' }}>
        <img
          src={img}
          alt=""
          style={{ width: '30vw' }}
        />
      </div>
      <div className="questionsCards" style={{ marginBottom: '20px' }}>
        {questions.text}
      </div>
      <form id="sendId" data-idcard={questions.id} data-trueanswer={questions.ansver}>
        <div className="inputCards" style={{ marginBottom: '20px' }}>
          <input type="text" name="answer" id="inputValue" />
        </div>
        <div>
          <button type="submit" id='btn'>Send</button>
        </div>
      </form>
      <div id="true" style={{ display: 'none' }}>
        Ответ верный!
      </div>
      <div id="false" style={{ display: 'none' }}>{`Ответ не верный!
      Верный ответ: ${questions.ansver}`}</div>
    </div>
  );
};
