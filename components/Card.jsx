const React = require('react');

module.exports = function Card({ questions }) {
  return (
    <div style={{ width: '400px', height: '400px' }}>
      <div className="imageCards" name="img" style={{ marginBottom: '20px' }}>
        <img
          src="https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/4c/22/d0/4c22d05c-e407-7bc4-c5a1-d787a8c4c1bf/cover.jpg/1200x1200bf-60.jpg"
          alt=""
          style={{ width: '300px' }}
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
          <button type="submit">Send</button>
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
