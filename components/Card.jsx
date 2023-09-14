const React = require('react');

module.exports = function Card({ questions }) {
  return (
    <div>
      <div className="imageCards" name='img'>img</div>
      <div className="questionsCards">{questions.text}</div>
      <div className="inputCards">
        <input type="text" name="answer" />
      </div>
      <div className="true">Ответ верный!</div>
      <div className="false">{`Ответ не верный!
      Верный ответ: ${questions.ansver}`}</div>
      <div>
        <button type="submit">Send</button>
      </div>
    </div>
  );
};
