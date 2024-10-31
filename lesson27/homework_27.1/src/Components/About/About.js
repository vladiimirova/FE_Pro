import "./About.css";

function About() {
  return (
    <div className="container about-container">
      <div className="about-content">
        <h1 className="about-title">Про мене</h1>
        <p className="about-description">
          Я — веб-розробник з пристрастю до створення інтуїтивно зрозумілих та
          привабливих веб-сайтів. Займаюся розробкою проектів різного масштабу, 
          від простих веб-сторінок до складних веб-додатків.
        </p>
        <p className="about-description">
          Мої інтереси охоплюють новітні технології, дизайн інтерфейсів та UX/UI. 
          Завжди прагну впроваджувати нові рішення, щоб підвищити ефективність 
          користувачів.
        </p>
        <p className="about-description">
          Коли я не працюю, люблю досліджувати нові міста, читати книги про технології 
          та брати участь у хакатонах.
        </p>
        <h2 className="about-subtitle">Чому я це роблю?</h2>
        <p className="about-description">
          Я вірю, що технології можуть полегшити життя людей. Моє прагнення — 
          створювати продукти, які допомагають користувачам досягати своїх цілей.
        </p>
      </div>
    </div>
  );
}

export default About;

