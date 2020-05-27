import * as yup from "yup"


//const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const formSchemaSignup= yup.object().shape({
    username: yup.string()
    .trim()
    .min(3, "Your username must be at least three characters")
    .required("You must enter a username"),
    password: yup.string()
    .required("You must enter a password")
    .min(5, "Your password must be at least five characters long"),
    // confirm: yup.string()
    // .required("You must confirm your password")
    // .oneOf([yup.ref('password'), null], 'Passwords must match'),
    phone_number: yup.string()
    //.matches(phoneRegExp, 'Phone number is not valid')
    .required("You must enter a phone number")
})


export default formSchemaSignup