import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ListWrapper, ListItem, Wrapper } from "./StyledGallery";
import { usePhotosQuery } from '../../hooks/usePhotos';
import PuffLoader from "react-spinners/PuffLoader";

const GalleryList = () => {
  const { data, isLoading } = usePhotosQuery();

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <PuffLoader />
      </div>
    );
  }

  return (
    <ListWrapper>
      {(data ?? []).map(({ photoUrl, id, name }) => {
        return (
          <Wrapper key={id}>
            <Link to={`/gallery/${id}`}>
              <ListItem img={photoUrl}>
                <div className="background-img" />
              </ListItem>
            </Link>
            <h3 className="date">{name}</h3>
          </Wrapper>
        );
      })}
    </ListWrapper>
  );
};

export default GalleryList;
