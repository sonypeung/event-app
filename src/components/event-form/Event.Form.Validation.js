export const isDefined = (text) => {
    return text !== "" && text?.length > 0;
}


export const isValidEmail = (email) => 
{
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}