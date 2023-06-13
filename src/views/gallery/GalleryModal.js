import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { ModalContent } from "./StyledGallery";

const GalleryModal = ({
  open,
  closeModal,
  currentImg,
  setNextImg,
  setPrevImg,
  currentItems,
}) => {
  const index = currentItems.findIndex((item) => item === currentImg);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={closeModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <ModalContent currentImg={currentImg?.photoUrl}>
          <button
            className="prev"
            onClick={setPrevImg}
            disabled={index === 0}
          >{`<`}</button>
          <button className="next" onClick={setNextImg}>{`>`}</button>
        </ModalContent>
      </Fade>
    </Modal>
  );
};
export default GalleryModal;
