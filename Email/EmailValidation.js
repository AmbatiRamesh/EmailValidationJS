const emailRegex = RegExp("^(?=.{3,20}@)[a-zA-Z]+[A-Za-z0-9]+[- + . _]?[a-zA-Z0-9]+.@[^-_.][a-zA-Z0-9-]+(\\.[A-Za-z]+)(\\.[a-zA-Z]+)*$");
function validateEmail(email){
    if(emailRegex.test(email))
        console.log(email + " is a valid EMAIL.");
    else
        throw email + " is an invalid EMAIL.";
}
try{
    validateEmail("ramesh_am@ggg.co.in");   //valid
    validateEmail("rahul$kkk@fgd.com");  //invalid - email has to start with a letter
}catch(e){
    console.error(e);
}