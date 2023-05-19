const emailRegex = RegExp("^(?=.{3,20}@)[a-zA-Z]{2,}[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-_.][a-zA-Z0-9-]+(\\.[A-Za-z0-9-]+)$");
function validateEmail(email){
    if(emailRegex.test(email))
        console.log(email + " is a valid EMAIL.");
    else
        throw email + " is an invalid EMAIL.";
}
try{
    validateEmail("ramesh@ggg.com");   //valid
    validateEmail(".rahul@kkkfgd");  //invalid - email has to start with a letter
}catch(e){
    console.error(e);
}