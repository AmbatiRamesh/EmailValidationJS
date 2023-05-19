const emailRegex = RegExp("^(?=.{3,20}@)[a-zA-Z]+[A-Za-z0-9]+[- + . _]?[a-zA-Z0-9]+.@[^-_.][a-zA-Z0-9-]+(\\.[a-z]+)(\\.[a-z]{2})*$");
function validateEmail(email){
    if(emailRegex.test(email))
        console.log(email + " is a valid EMAIL.");
    else
        throw email + " is an invalid EMAIL.";
}
try{
    validateEmail("ramesh.ambati@ggg.co.in");   //valid
    validateEmail("rahul_r$kkk@fgd.com.com");  //invalid - email has to start with a letter
}catch(e){
    console.error(e);
}