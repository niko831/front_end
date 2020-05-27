import * as yup from "yup"


const formSchemaLogin= yup.object().shape({
    username: yup.string()
    .trim()
    .required("You must enter a username"),
    password: yup.string()
    .required("You must enter a password")
})

export default formSchemaLogin