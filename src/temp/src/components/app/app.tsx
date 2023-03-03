import { useEffect, useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Header from "../header/header";
import HeaderDesktop from "../header/header-desktop";
import Footer from "../footer/footer";
import FooterDesktop from "../footer/footer-desktop";
import { Main, MainDesktop, Course, Courses, CoursesDesktop } from "../../pages/";
import { AppContext } from "../../services/context";
import ModalCategory from "../modal-category/modal-category";

const App = () => {
  const appRef = useRef<HTMLDivElement | null>(null);
  const [context, setContext] = useState({
    modal: false,
    course: "all",
    menu: false,
  });

  useEffect(() => {
    if (appRef.current === null) return;
    context.modal || context.menu
      ? (appRef.current.style.height = "100vh")
      : (appRef.current.style.height = "auto");
  }, [context.modal, context.menu]);

  const modalClose = () => {
    setContext({ ...context, modal: false });
  };

  return (
  <>
  {/*
    <AppContext.Provider value={{ context, setContext }}>
      <div className={styles.app} ref={appRef}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/1" element={<Course />} />
          <Route path="contacts" element={<div>Контакты</div>} />
        </Routes>
        <Footer />
      </div>
      {context.modal && <ModalCategory onClose={modalClose} />}
    </AppContext.Provider>
  */
  }
  {
    <AppContext.Provider value={{ context, setContext }}>
      <div className={styles.app} ref={appRef}>
        <HeaderDesktop />
        <Routes>
          <Route path="/" element={<MainDesktop />} />
          <Route path="/courses" element={<CoursesDesktop />} />
          <Route path="/courses/1" element={<Course />} />
          <Route path="contacts" element={<div>Контакты</div>} />
        </Routes>
         <FooterDesktop />
      </div>
      {context.modal && <ModalCategory onClose={modalClose} />}
    </AppContext.Provider>
   }
   </>
  );
};

export default App;
