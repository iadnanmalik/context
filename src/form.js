import React, { Component } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import { Form, Input, Title, Text, Button, Label } from "./theme.js";

export default class NewForm extends Component {
  render() {
    return (
      <div>
        <Title>Form</Title>
        {/* FORMIK */}
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={values => {
            let errors = {};
            // REGEX
            let regex = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            // VALIDATION
            if (!values.email) {
              errors.email = "Email is required";
            } else if (regex.test(values.email)) {
              errors.email = "Invalid email address";
            }

            if (!values.password) {
              errors.password = "A password is required";
            } else if (values.password.length < 6) {
              errors.password = "Password must be 6 characters";
            }
            return errors;
          }}
          onSubmit={values => {
            console.log(values);
          }}
          render={({
            touched,
            errors,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Label>
                Email *
                {touched.email &&
                  errors.email && <Text color="red">{errors.email}</Text>}
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  border={touched.email && errors.email && "1px solid red"}
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </Label>
              <Label>
                Password *
                {touched.password &&
                  errors.password && <Text color="red">{errors.password}</Text>}
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  border={
                    touched.password && errors.password && "1px solid red"
                  }
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Label>
              <Button type="submit">Submit</Button>
            </Form>
          )}
        />
        {/* END OF FORMIK */}
      </div>
    );
  }
}