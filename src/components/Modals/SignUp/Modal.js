import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <ModalWrapper>
      <div onClick={onClose} className="overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer"
        >
          <div className="modalRight">
            <div className="content">
              <h1>Email Verification Required</h1>
              <p>Please Check Your Email and Verify then Login </p>
            </div>
            <div className="btnContainer">
              <button className="btnPrimary">
                <Link to="/login" className="linkStyle">
                  <span className="bold">Close</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");
  * {
    font-family: "Poppins", sans-serif;
  }
  .modalButton {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    padding: 12px 24px;
  }

  /* Modal */
  .overlay {
    margin-top: -150px;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 100%;
    height: 500%;
  }

  .modalContainer {
    max-width: 600px;
    width: 100%;
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    background-color: #ffffff;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
    border-radius: 8px;
  }

  img {
    width: 250px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .modalRight {
    width: 100%;
  }

  .closeBtn {
    position: fixed;
    top: 8px;
    right: 8px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 3rem;
    padding: 1rem 2rem;
  }

  .btnContainer {
    display: flex;
    padding: 1rem 1rem;
  }
  .btnContainer button {
    width: 100%;

    margin: 0.5rem;
    padding: 16px 0;

    /* color: #ffffff; */
  }

  .btnPrimary {
    background-color: #336cff;
    border: 1px solid #336cff;
    border-radius: 5px;
    color: white;
  }

  .bold {
    font-weight: 600;
  }

  @media screen and (max-width: 500px) {
    .modalContainer {
      flex-direction: column;
      top: 0;
      left: 0;
      transform: none;
      width: 100%;
      height: 100vh;
    }
    img {
      width: 100%;
      max-height: 70vh;
      object-fit: cover;
    }

    .heading {
      margin: 1rem;
    }
  }
`;

export default Modal;
