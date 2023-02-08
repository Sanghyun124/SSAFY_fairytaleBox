import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Modal.css";
import "./BackHomeModal.css";

const BackHomeModal = (props) => {
  const { open, close, header } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section id="BackHomeBg">
          <header>
            {header}
            <button className="headerbutton" onClick={close}>
              &times;
            </button>
          </header>
          <main className="modalMain">{props.children}</main>
          <footer className="modalFooter">
            <a href="/home">
              <button className="footerButton">👈🏻 홈으로</button>
            </a>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

const BackHome = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button className="backHomeBtn txt" onClick={openModal}>
        👈🏻 그만하기
      </button>
      <BackHomeModal open={modalOpen} close={closeModal} header="홈으로가기">
        인자그만놀고 홈으로 돌아갈까요?
        <footer className="modalFooter"></footer>
      </BackHomeModal>
    </div>
  );
};

export default BackHome;
