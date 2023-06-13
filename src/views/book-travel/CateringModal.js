import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { ModalContent } from "./StyledCateringModal";
import sandw1 from "../../assets/kanapka z miesem.jpeg";
import sandw2 from "../../assets/kanapka z lososiem.jpeg";
import sandw3 from "../../assets/kanapka vege.webp";
import { useMealsQuery } from '../../hooks/useMeals';
import PuffLoader from "react-spinners/PuffLoader";

const CateringModal = ({ open, setOpenModal, lunches, setLunches }) => {
  const { data, isLoading } = useMealsQuery();

  const preventMinus = (e) => {
    console.log(e.code);
    if (e.code === "Slash") {
      e.preventDefault();
    }
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => setOpenModal(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <ModalContent>
          {isLoading ? <div className="w-full h-full flex items-center justify-center"><PuffLoader /></div> : 
          <div className="content-wrapper">
            <div class="scrollable">
              {data.map(({ id, description, grossPrice, photoUrl }) => (
                <div key={id} className="item">
                  <img src={photoUrl} alt={description} />
                  <h2>{description}</h2>
                  <p>Price: {grossPrice} NOK</p>
                  <input
                    type="number"
                    placeholder="Amount"
                    min={1}
                    onKeyPress={preventMinus}
                    value={lunches?.first.toString()}
                    onChange={(e) =>
                      setLunches({
                        ...lunches,
                        first: isNaN(parseInt(e.target.value))
                          ? 0
                          : parseInt(e.target.value),
                      })
                    }
                  />
                </div>
              ))}
            </div>
            <div className="btn-wrapper">
            <button
              onClick={() => setOpenModal(false)}
              className="catering-btn"
            >
              Save
            </button>

            </div>
          </div>
}
        </ModalContent>
      </Fade>
    </Modal>
  );
};
export default CateringModal;
