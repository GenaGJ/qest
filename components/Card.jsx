const React = require('react');

module.exports = function Card({ questions }) {
  return (
    <div>
      <div className="imageCards">{questions.img}</div>
      <div className="questionsCards">{questions.questionss}</div>
      <div className="inputCards">
        <input type="text" name="answer" />
      </div>
      <div className="true">Ответ верный!</div>
      <div className="false">{`Ответ не верный!
      Верный ответ: ${questions.answer}`}</div>
      <div>
        <button type="submit">Send</button>
      </div>
    </div>
  );
};
