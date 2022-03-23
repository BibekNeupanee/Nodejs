import React from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

// function validate(values) {
//   const errors = {};
//   if (!values.name) {
//     errors.name = "Name is Required";
//   } else if (!/^[a-z]+\s[a-z]+$/i.test(values.name)) {
//     // errors.name = "Name should only contain alphabets";
//   } else if (values.name.length > 10) {
//     errors.name = "Name exceeds max length 10";
//   }
//   return errors;
// }

const keai = [
  { name: "Apple", description: "An apple" },
  { name: "Ball", description: "A Ball" },
];

const FacyButton = styled.button`
  padding: 1em;
`;
const RedFacyButton = styled(FacyButton)`
  color: red;
`;
const FacyButtonDesc = (props) => {
  return (
    <FacyButton
      {...props}
      children={
        keai.filter((e) => e.name === props.children)[0]?.description ||
        props.children
      }
    />
  );
};

function TestForm() {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            alert("submit sucessful! ");
            setSubmitting(false);
          }, 200);
        }}
        validationSchema={Yup.object({
          name: Yup.string().max(20, "Exceded 20.").required("Name required."),
          email: Yup.string()
            .email("Invalid Email.")
            .required("Email required."),
        })}
      >
        {(formik) => (
          <Form className="test-form">
            <div className="test-form__field">
              <label htmlFor="name">Name:</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" />
            </div>
            <div className="test-form__field">
              <label htmlFor="name">Email:</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
            </div>
            {/* <button type="submit">Submit</button> */}
            <FacyButton type="submit">Submit</FacyButton>
          </Form>
        )}
      </Formik>
      <RedFacyButton as="label">RESET</RedFacyButton>
      <FacyButtonDesc>Ball</FacyButtonDesc>
    </>
  );
}

export default TestForm;
