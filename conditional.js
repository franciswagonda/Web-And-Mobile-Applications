
let coursework = 45;

let exammark = 30;

let finalmark = (coursework + exammark);


if (finalmark < 50) {
    console.log("Fail");
} 
else {
    console.log("Pass");
}

// grading scale 
// range (0-49 F) (50-59 C) (60-69 B) (70-100 A)
// (-0 Exelled 1-10)
if (finalmark <= 49) 
    if (finalmark == 0) {
        console.log("You should be expelled");
    }
else if (finalmark >= 60) {
    console.log("Merit");
}
else if (finalmark >= 50) {
    console.log("Pass");
}
else {
    console.log("Fail");
}



/////// switch statement
let weekdayNumber = 3;
// 1 = Monday
// 2 = Tuesday
// 3 = Wednesday
// 4 = Thursday
// 5 = Friday
// 6 = Saturday
// 7 = Sunday

switch (weekdayNumber) {
    case 1:
        console.log("Monday");
        break
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
        break
    case 4:
        console.log("Thursday");
        break
    case 5:
        console.log("Friday");
        break
    case 6:
        console.log("Saturday");
        break
    case 7:
        console.log("Sunday");
        break
    default:
        console.log("Invalid day");
}



////// lops
// for while

let x = 0;

while (x <= 10) {
    console.log(x);
    x++;
    x = x + 1;
}  


//for loop

for (let mynumber = 0; mynumber <= 10; mynumber++) {
    if (mynumber % 2 !== 0) {
        console.log(mynumber);
    }
}



// /functions
// /arrow functions read about them
const AddMarks = (courseworkmarks, exammarks,percentageofattendance) => {
    return courseworkmarks + exammarks*0.5 + percentageofattendance;
}

AddMarks(20, 30,70);

let result = AddMarks(20, 30,70);

console.log(result);