import { Route, Routes } from "react-router-dom"; 
import Main from "../Main/Main.js";
import About from "../About/About.js";
import Contacts from "../Contacts/Contacts.js";
import NotFound from "../NotFound/NotFound.js";

function RouterComponent() {
  return (
    <div className="Router-wrapper">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default RouterComponent;
