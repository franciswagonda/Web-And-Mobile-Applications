
// try{
//     let a = 10;
//     let b = john;
//     console.log(typeof b)
//     if(b === 0)
//         throw new Error("Division by zero is not allowed.");
//     if(typeof b === 'string')throw new Erro ("Entry is not a number");
//     // let c = a / b;
//     console.log(a/b);
// }catch(error){
//     console.log(error.message);
// }finally{
//     console.log("Attend to divide processed.");
// }



// const student1 = {
//     fullname:"Ogwang Emmanuel",
//     yob:2000,
//     accessNo:12345,
//     regNo:"M25B13/045",
//     gender:"Male",
//     phone:"0701234567",
//     isRegistered:true,
// }
// // console.log (student.regNo,student.fullname)


// const student2 = {
//     fullname:"Christelle Francis",
//     yob:2000,
//     accessNo:"B33245",
//     regNo:"M25B13/065",
//     gender:"Female",
//     phone:"0777369543",
//     isRegistered:false,
// }

// console.log (student2.regNo,student2.fullname)

// console.log(student1.fullname,student1.isRegistered)



class Student {
    constructor(fullname,yob,accessNo,regNo,gender,phone,isRegistered,courseunit){
        this.fullname = fullname;
        this.yob = yob;
        this.accessNo = accessNo;
        this.regNo = regNo;
        this.gender = gender;   
        this.phone = phone;
        this.isRegistered = isRegistered;
        this.courseunit = courseunit;
    }
}

studentAge = function() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.yob;
        console.log(`${this.fullname} is ${age} years old.`);
    }

student1.studentAge = studentAge;
student2.studentAge = studentAge;


const student1 = new Student("Ogwang Emmanuel",2000,12345,"M25B13/045","Male","0701234567",true,["Mathematics","Biology","Chemistry"]);
const student2 = new Student("Christelle Francis",2000,"B33245","M25B13/065","Female ","0777369543",false,["History","Geography","English"]);

const currentcourseunits = student1.courseunit;
console.log(currentcourseunits);

for (i = 0; i < currentcourseunits.length; i++){
    console.log(i+1, currentcourseunits[i]);
}


student1.studentAge();