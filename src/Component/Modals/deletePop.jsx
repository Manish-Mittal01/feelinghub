import React from "react";
import { Button, Modal } from "react-bootstrap";

const DeletePopup = ({ action, setAction, onSubmit, submitLabel }) => {
  const handleClosePop = () => {
    setAction(null);
  };

  const handleDeletePop = async () => {
    handleClosePop();
    await onSubmit();
  };

  return (
    <>
      <Modal
        show={!!action}
        onHide={handleClosePop}
        backdrop="static"
        keyboard={false}
        centered
        size="sm"
        className="delete-pop"
      >
        {/* <Modal.Header >
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div className="text-center py-3">
            <div className="icn my-3">
              {/* <WarningSign /> */}
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M256,0C114.497,0,0,114.507,0,256c0,141.503,114.507,256,256,256c141.503,0,256-114.507,256-256    C512,114.497,397.493,0,256,0z M256,472c-119.393,0-216-96.615-216-216c0-119.393,96.615-216,216-216    c119.393,0,216,96.615,216,216C472,375.393,375.385,472,256,472z"
                  fill="#f8c886"
                ></path>
                <path
                  d="M256,128.877c-11.046,0-20,8.954-20,20V277.67c0,11.046,8.954,20,20,20s20-8.954,20-20V148.877    C276,137.831,267.046,128.877,256,128.877z"
                  fill="#f8c886"
                ></path>
                <circle cx="256" cy="349.16" r="27" fill="#f8c886"></circle>{" "}
              </svg>
            </div>
            <h2 className="pop-head m-0 pb-2">Are you Sure?</h2>
            <div className="btn-wrap my-2 d-flex align-items-center justify-content-center mt-3">
              <Button
                onClick={handleClosePop}
                className="btn me-2 d-flex align-items-center justify-content-center bg-secondary border-0"
              >
                No Cancel!
              </Button>
              <Button
                onClick={handleDeletePop}
                className="d-flex align-items-center justify-content-center bg-danger border-0"
              >
                {submitLabel || "Yes, Delete it"}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeletePopup;
