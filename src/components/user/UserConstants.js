export const ERROR_SIGNUP_EMPTY_NAME = "Name cannot be empty";
export const ERROR_SIGNUP_EMPTY_LASTNAME = "Lastname cannot be empty";
export const ERROR_SIGNUP_EMPTY_EMAIL =
  "Email will be your user credential, it cannot be empty";
export const ERROR_SIGNUP_EMPTY_PASSWORD = "You must enter a password";
export const ERROR_SIGNUP_EMPTY_REPASSWORD = "You must confirm your password";

export const ERROR_SIGNUP_ALPHABET_NOTMATCH =
  "Please enter alphabet characters only.";
export const ERROR_SIGNUP_PHONE_NOTMATCH =
  "Please enter valid phone. 10 digits";
export const ERROR_SIGNUP_EMAIL_NOTMATCH = "Please enter a valid email.";
export const ERROR_SIGNUP_PASSWORD_NOTMATCH =
  "The password confirmation does not match with original one";
export const ERROR_SIGNUP_PASSWORD_NOTSTRONG =
  "Please enter secure and strong password";

export const SIGNUP_ALPHABET_PATTERN = /^[a-zA-Z ]*$/;
export const SIGNUP_PHONE_PATTERN = /^[0-9]{10}$/;
export const SIGNUP_EMAIL_PATTERN = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
export const SIGNUP_PASSWORD_PATTERN =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})";
