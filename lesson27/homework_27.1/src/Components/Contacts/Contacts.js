import "./Contacts.css";

function Contacts() {
  return (
    <div className="conatiner contacts-container">
      <div className="contacts-wrapper">
        <div className="container">
          <h1 className="contacts-title">Контакти</h1>
          <p className="contacts-description">
            Ми завжди раді почути ваші відгуки та пропозиції. Ви можете зв’язатися 
            з нами через одну з наведених платформ:
          </p>
          <ul className="contacts-list">
            <li className="contacts-item">
              Електронна пошта:{" "}
              <a className="contacts-link" href="mailto:info@example.com">
                info@example.com
              </a>
            </li>
            <li className="contacts-item">Телефон: (123) 456-7890</li>
            <li className="contacts-item">
              Соціальні мережі:
              <ul className="social-media-list">
                <li>
                  <a className="contacts-link" href="#">
                    Facebook
                  </a>
                </li>
                <li>
                  <a className="contacts-link" href="#">
                    Twitter
                  </a>
                </li>
                <li>
                  <a className="contacts-link" href="#">
                    Instagram
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
