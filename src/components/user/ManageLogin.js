import React, { useState } from "react";
import SignUpUser from "./SignUpUser";

const ManageLogin = props => {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setFields(prevFields => ({
      ...prevFields,
      [name]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ""
    }));
  }

  function handleSave(e) {
    e.preventDefault();
    if (!isValidSignUp()) return;

    let fields = {};
    fields.name = "";
    fields.lastname = "";
    fields.email = "";
    fields.phone = "";
    fields.password = "";
    fields.repassword = "";
    setFields(fields);
    alert("Form submitted");
  }

  function isValidSignUp() {
    const _errors = {};

    if (!fields.name) {
      _errors.name = "Name cannot be empty";
    }

    if (typeof fields.name !== "undefined") {
      if (!fields.name.match(/^[a-zA-Z ]*$/)) {
        _errors.name = "Please enter alphabet characters only.";
      }
    }

    if (!fields.lastname) {
      _errors.lastname = "Lastname cannot be empty";
    }

    if (typeof fields.lastname !== "undefined") {
      if (!fields.lastname.match(/^[a-zA-Z ]*$/)) {
        _errors.lastname = "Please enter alphabet characters only.";
      }
    }

    if (!fields.email) {
      _errors.email = "Email will be your user credential, it cannot be empty";
    }

    if (typeof fields.email !== "undefined") {
      let pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields.email)) {
        _errors.email = "Please enter a valid email.";
      }
    }

    if (typeof fields.phone !== "undefined" && fields.phone !== "") {
      if (!fields.phone.match(/^[0-9]{10}$/)) {
        _errors.phone = "Please enter valid phone. 10 digits";
      }
    }

    if (!fields.password) {
      _errors.password = "You must enter a password";
    }

    if (typeof fields.password !== "undefined") {
      let pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
      if (!pattern.test(fields.password)) {
        _errors.password = "Please enter secure and strong password.";
      }
    }

    if (!fields.repassword) {
      _errors.repassword = "You must confirm your password";
    }

    if (fields.repassword !== fields.password) {
      _errors.repassword =
        "The password confirmation does not match with original one";
    }

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  return (
    <SignUpUser errors={errors} onChange={handleChange} onSave={handleSave} />
  );
};

export default ManageLogin;
