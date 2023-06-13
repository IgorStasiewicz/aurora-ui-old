import React, { useEffect, useState } from "react";
import Navbar from "../../components/navigations/navbar";
import { ImagesWrapper, SingleItem } from "./StyledGallery";
import GalleryModal from "./GalleryModal";
import { usePhotoCollectionQuery } from '../../hooks/usePhotoCollection';
import PuffLoader from "react-spinners/PuffLoader";

const SelectedGallery = () => {
  const { data, isLoading } = usePhotoCollectionQuery();

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <PuffLoader />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <ImagesWrapper>
        <Items currentItems={data} />
      </ImagesWrapper>
    </div>
  );
};

export default SelectedGallery;

function Items({ currentItems }) {
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const openModal = (index) => {
    setCurrentImg(currentItems[index]);
    setOpen(true);
  };

  useEffect(() => {
    if (!currentImg) {
      setOpen(false);
    }
  }, [currentImg]);

  const setNextImg = () => {
    if (currentItems.findIndex((item) => item === currentImg) !== -1) {
      setCurrentImg(
        currentItems[currentItems.findIndex((item) => item === currentImg) + 1]
      );
    }
  };

  const setPrevImg = () => {
    if (currentItems.findIndex((item) => item === currentImg) !== -1) {
      setCurrentImg(
        currentItems[currentItems.findIndex((item) => item === currentImg) - 1]
      );
    }
  };

  return (
    <>
      <GalleryModal
        open={open}
        closeModal={() => setOpen(false)}
        currentImg={currentImg}
        setNextImg={setNextImg}
        setPrevImg={setPrevImg}
        currentItems={currentItems}
      />
      <SingleItem>
        {currentItems.map(({ photoUrl }, index) => {
          return (
            <div className="item" onClick={() => openModal(index)}>
              <img src={photoUrl} alt="img" />
            </div>
          );
        })}
      </SingleItem>
    </>
  );
}
