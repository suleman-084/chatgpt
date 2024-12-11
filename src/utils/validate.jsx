export const checkValidData = (email, password, number) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    const isNumberValid = /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/.test(number)

    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is invalid";
    // if (!isNumberValid) return "Number is invalid";

    return null


}