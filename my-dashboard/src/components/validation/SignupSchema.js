import * as yup from "yup"

const formSchemaSignup= yup.object().shape({
    username: yup.string()
    .trim()
    .min(3, "Your username must be at least three characters")
    .required("You must enter a username"),
    password: yup.string()
    .required("You must enter a password")
    .min(5, "Your password must be at least five characters long"),
    phone_number: yup.string()
    .length(10,'Please enter a VALID phone number in the following format 1234567890')
    .max(12),
})


export default formSchemaSignup