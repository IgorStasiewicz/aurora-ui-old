import React from "react";
import FormButton from "./FormButton";
import Title from "../../components/atoms/title";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import axios from 'axios';
import {
  StyledFormWrapper,
  StyledContactImage,
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
  StyledCheckbox,
  StyledCheckboxLabel,
} from "./StyledContact";

const API_URL = `${process.env.REACT_APP_API_CONTACTS}`;

const ContactForm = () => {
  const ValidationSchema = Yup.object().shape({
    name: Yup.string().required("The field is required").trim(),
    email: Yup.string()
      .required("The field is required")
      .email("Please enter a valid email address"),

    subject: Yup.string().required("The field is required"),

    content: Yup.string().required("The field is required"),

    acceptTerms: Yup.bool().oneOf([true], "The field is required"),
  });

  return (
    <StyledFormWrapper>
      <StyledContactImage />
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          content: "",
          acceptTerms: false,
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values, { resetForm }, e) => {
          axios.post(`${API_URL}/SendEmail`, values).finally(() => resetForm())
        }}
      >
        {({ values, handleChange, handleBlur, isSubmitting }) => {
          return (
            <StyledForm>
              <Title styleType="form">Contact Us</Title>
              <StyledFormElementsWrapper first>
                <StyledFormElements first>
                  <StyledLabel htmlFor="name">Name</StyledLabel>
                  <StyledField
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <StyledSpan />
                  <StyledError>
                    <ErrorMessage name="name" />
                  </StyledError>
                </StyledFormElements>
                <StyledFormElements first>
                  <StyledLabel htmlFor="email">Email</StyledLabel>
                  <StyledField
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <StyledSpan />
                  <StyledError>
                    <ErrorMessage name="email" />
                  </StyledError>
                </StyledFormElements>
              </StyledFormElementsWrapper>
              <StyledFormElementsWrapper second>
                <StyledFormElements>
                  <StyledLabel htmlFor="subject">Subject</StyledLabel>
                  <StyledField
                    type="subject"
                    name="subject"
                    placeholder="Enter subject"
                    id="subject"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.subject}
                  />
                  <StyledSpan />
                  <StyledError>
                    <ErrorMessage name="subject" />
                  </StyledError>
                </StyledFormElements>
                <StyledFormElements>
                  <StyledLabel htmlFor="content">Message</StyledLabel>
                  <StyledField
                    type="text"
                    name="content"
                    id="content"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.content}
                    as="textarea"
                    placeholder="Enter your message"
                  />
                  <StyledSpan textarea />
                  <StyledError message>
                    <ErrorMessage name="content" />
                  </StyledError>
                </StyledFormElements>
              </StyledFormElementsWrapper>
              <StyledContactElements>
                <StyledCheckboxWrapper>
                  <StyledCheckboxElements>
                    <StyledCheckbox
                      type="checkbox"
                      name="acceptTerms"
                      id="acceptTerms"
                      checked={values.acceptTerms}
                      onChange={handleChange}
                    />
                    <StyledCheckboxLabel htmlFor="acceptTerms">
                      I accept the Privacy Policy
                    </StyledCheckboxLabel>
                  </StyledCheckboxElements>
                  <StyledError checkbox>
                    <ErrorMessage name="acceptTerms" />
                  </StyledError>
                </StyledCheckboxWrapper>
                <FormButton content="Send" isSubmitting={isSubmitting} />
              </StyledContactElements>
            </StyledForm>
          );
        }}
      </Formik>
    </StyledFormWrapper>
  );
};

export default ContactForm;
