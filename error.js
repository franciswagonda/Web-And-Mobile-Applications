
try{
    let a = 10;
    let b = john;
    console.log(typeof b)
    if(b === 0)
        throw new Error("Division by zero is not allowed.");
    if(typeof b === 'string')throw new Erro ("Entry is not a number");
    // let c = a / b;
    console.log(a/b);
}catch(error){
    console.log(error.message);
}finally{
    console.log("Attend to divide processed.");
}