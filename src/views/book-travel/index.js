import React, { useEffect, useState, useCallback } from "react";
import Navbar from "../../components/navigations/navbar";
import DatePicker from "./DatePicker";
import { StyledWrapper, DatePickerWrapper } from "./StyledBookTravel";
import FormButton from "../contact/FormButton";
import Title from "../../components/atoms/title";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import {
  StyledFormWrapper,
  StyledForm,
  StyledFormElementsWrapper,
  StyledFormElements,
  StyledField,
  StyledLabel,
  StyledSpan,
  StyledError,
  StyledContactElements,
  StyledCheckboxWrapper,
  StyledCheckboxElements,
  SecondColumnWrapper,
  StyledNormalCheckbox,
  StyledCheckboxLabel,
  CheckboxesWrapper,
  StyledInput
} from "./StyledBookTravel";
import CateringModal from "./CateringModal";

const ValidationSchema = Yup.object().shape({
  FirstName: Yup.string().required("The field is required").trim(),
  LastName: Yup.string().required("The field is required").trim(),
  CompanyName: Yup.string().required("The field is required").trim(),
  Nip: Yup.string().required("The field is required").trim(),
  Email: Yup.string()
    .required("The field is required")
    .email("Please enter a valid email address"),
  Phone: Yup.string().required("The field is required").trim(),
  // DateTime: Yup.string().required("The field is required").trim(),
  PeopleAmount: Yup.number().min(1, 'Must be greater than 1').required("The field is required"),
  TotalCost: Yup.number().required("The field is required"),
  PhotosAmount: Yup.number().required("The field is required"),
});

const BookTravel = () => {
  const [optionsArray, setOptionsArray] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(8000);
  const [photoAmount, setPhotoAmount] = useState(0);
  const [lunches, setLunches] = useState({
    first: 0,
    second: 0,
    third: 0,
  });

  const [isPhotoActive, setIsPhotoActive] = useState(false);
  const [isLunchActive, setIsLunchActive] = useState(false);

  const preventMinus = (e) => {
    if (e.code === "Slash") {
      e.preventDefault();
    }
  };

  const calculateTotalCost = useCallback(() => {
    setTotalPrice(
      8000 +
        photoAmount * 100 +
        lunches.first * 15 +
        lunches.second * 15 +
        lunches.third * 15 -
        (photoAmount * 100 +
          lunches.first * 15 +
          lunches.second * 15 +
          lunches.third * 15)
    );
  }, [photoAmount, lunches.first, lunches.second, lunches.third]);

  useEffect(() => {
    calculateTotalCost();
  }, [isPhotoActive, photoAmount, isLunchActive, lunches, calculateTotalCost]);

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "180px", marginBottom: "60px" }}>
        <Title style={{ textAlign: 'center' }} styleType="form">Book Travel</Title>
        <StyledWrapper>
          <StyledFormWrapper>
            <Formik
              initialValues={{
                FirstName: "",
                LastName: "",
                CompanyName: "",
                Nip: "",
                Email: "",
                Phone: "",
                PeopleAmount: 0,
                TotalCost: 0,
                PhotosAmount: 0,
                acceptTerms: false,
              }}
              validationSchema={ValidationSchema}
              onSubmit={(values, { resetForm }, e) => {
                console.log(values);
                resetForm();
              }}
            >
              {({ values, handleChange, handleBlur, isSubmitting }) => {
                return (
                  <StyledForm>
                    <StyledFormElementsWrapper first>
                      <StyledFormElements first>
                        <StyledLabel htmlFor="name">First Name</StyledLabel>
                        <StyledField
                          type="text"
                          name="FirstName"
                          placeholder="Enter your first name"
                          id="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.FirstName}
                        />
                        <StyledSpan />
                        <StyledError>
                          <ErrorMessage name="FirstName" />
                        </StyledError>
                      </StyledFormElements>
                      <StyledFormElements>
                        <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
                        <StyledField
                          type="text"
                          name="LastName"
                          placeholder="Enter your last name"
                          id="lastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.LastName}
                        />
                        <StyledSpan />
                        <StyledError>
                          <ErrorMessage name="LastName" />
                        </StyledError>
                      </StyledFormElements>
                      <StyledFormElements>
                        <StyledLabel htmlFor="email">E-mail</StyledLabel>
                        <StyledField
                          type="email"
                          name="Email"
                          placeholder="Enter your e-mail"
                          id="email"
                          onChange={handleChange}
                          autoComplete="off"
                          onBlur={handleBlur}
                          value={values.Email}
                        />
                        <StyledSpan />
                        <StyledError>
                          <ErrorMessage name="Email" />
                        </StyledError>
                      </StyledFormElements>
                      <StyledFormElements>
                        <StyledLabel htmlFor="company">Company name</StyledLabel>
                        <StyledField
                          type="text"
                          name="CompanyName"
                          placeholder="Enter company name"
                          id="company"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.CompanyName}
                        />
                        <StyledSpan />
                        <StyledError>
                          <ErrorMessage name="CompanyName" />
                        </StyledError>
                      </StyledFormElements>
                      <StyledFormElements>
                        <StyledLabel htmlFor="nip">NIP</StyledLabel>
                        <StyledField
                          type="text"
                          name="Nip"
                          placeholder="Enter your NIP"
                          id="nip"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.Nip}
                        />
                        <StyledSpan />
                        <StyledError>
                          <ErrorMessage name="Nip" />
                        </StyledError>
                      </StyledFormElements>

                      <StyledFormElements>
                        <StyledLabel htmlFor="phone">Phone</StyledLabel>
                        <StyledField
                          type="text"
                          name="Phone"
                          placeholder="Enter your phone"
                          id="phone"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.Phone}
                        />
                        <StyledSpan />
                        <StyledError>
                          <ErrorMessage name="Phone" />
                        </StyledError>
                      </StyledFormElements>

                      <StyledFormElements>
                        <StyledLabel htmlFor="people">Amount of people</StyledLabel>
                        <StyledField
                          type="number"
                          name="PeopleAmount"
                          placeholder="Enter amount of people"
                          id="people"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.PeopleAmount}
                        />
                        <StyledSpan />
                        <StyledError>
                          <ErrorMessage name="PeopleAmount" />
                        </StyledError>
                      </StyledFormElements>
                    </StyledFormElementsWrapper>

                    <StyledContactElements>
                      <FormButton content="Order" />
                    </StyledContactElements>
                  </StyledForm>
                );
              }}
            </Formik>
          </StyledFormWrapper>
          <SecondColumnWrapper>
            <DatePickerWrapper>
              <DatePicker />
            </DatePickerWrapper>

            <CheckboxesWrapper>
              <StyledCheckboxWrapper>
                <StyledCheckboxElements>
                  <StyledNormalCheckbox
                    type="checkbox"
                    name="acceptTerms"
                    id="photo"
                    checked={optionsArray.includes("photo")}
                    onChange={() => {
                      optionsArray.includes("photo")
                        ? setOptionsArray(
                            optionsArray.filter((item) => item !== "photo")
                          )
                        : setOptionsArray([...optionsArray, "photo"]);
                      setIsPhotoActive(!isPhotoActive);
                    }}
                  />
                  <StyledCheckboxLabel htmlFor="photo">
                    Photo
                  </StyledCheckboxLabel>

                  <StyledInput
                    type="number"
                    name="PhotosAmount"
                    placeholder="Enter your amount"
                    id="photos"
                    small
                    value={photoAmount.toString()}
                    onChange={(e) =>
                      setPhotoAmount(
                        isNaN(parseInt(e.target.value))
                          ? 0
                          : parseInt(e.target.value)
                      )
                    }
                    min={1}
                    max={10}
                    maxLength="10"
                    onKeyPress={preventMinus}
                    disabled={!isPhotoActive}
                  />

                  <p className="img-price">100 NOK per image</p>
                </StyledCheckboxElements>
              </StyledCheckboxWrapper>
              <StyledCheckboxWrapper>
                <StyledCheckboxElements>
                  <StyledNormalCheckbox
                    type="checkbox"
                    name="acceptTerms"
                    id="second"
                    checked={optionsArray.includes("second")}
                    onChange={() => {
                      optionsArray.includes("second")
                        ? setOptionsArray(
                            optionsArray.filter((item) => item !== "second")
                          )
                        : setOptionsArray([...optionsArray, "second"]);

                      setIsLunchActive(!isLunchActive);
                    }}
                  />
                  <StyledCheckboxLabel htmlFor="second">
                    Catering
                  </StyledCheckboxLabel>
                  <button
                    onClick={() => setOpenModal(true)}
                    disabled={!isLunchActive}
                    className="catering-btn"
                  >
                    show options
                  </button>
                </StyledCheckboxElements>
              </StyledCheckboxWrapper>
            </CheckboxesWrapper>
            <div className="total-wrapper">
              <h2>Travel cost: 8000 NOK</h2>
              <p>
                Additonal items cost before discount:{" "}
                {photoAmount * 100 +
                  lunches.first * 15 +
                  lunches.second * 15 +
                  lunches.third * 15}{" "}
                NOK
              </p>
              <p>
                Additonal items cost after discount:{" "}
                {photoAmount * 100 +
                  lunches.first * 15 +
                  lunches.second * 15 +
                  lunches.third * 15 -
                  (photoAmount * 100 +
                    lunches.first * 15 +
                    lunches.second * 15 +
                    lunches.third * 15)}{" "}
                NOK
              </p>
              <h2 className="total">Order total: {totalPrice} NOK</h2>
            </div>
          </SecondColumnWrapper>
        </StyledWrapper>
      </div>

      <CateringModal
        open={openModal}
        setOpenModal={setOpenModal}
        lunches={lunches}
        setLunches={setLunches}
      />
    </>
  );
};

export default BookTravel;
