// //////--------------CH : 06_______)09;
// QNO 1;
document.write("<h2>pre post</h2>")
// let a = 5;
// document.write(`The value of a is = ${5} <br> <br>`);
// let b = ++a;
// document.write(`The value of ++a is = ${b} <br>`)
// document.write(`Now the value of a is 6 <br> <br>`)
// document.write(`The value of a++ is = ${b} <br>`);
// let c = a++;
// document.write(`Now the value of a is = ${c = a++} <br><br>`);
// let d = --a;
// document.write(`the value of --a is = ${d = --a} <br>`);
// document.write(`The value of a is ${d}<br><br>`);
// document.write(`The value of a is = 6<br>`);
// let e = a--;
// document.write(`Now The value of a-- is = ${e = a--} `);

// QNO 02;
document.write("<h2>PRE-POST INCREMENT AND DECREMENT</h2>")
let i = 2;
let z = 1;
document.write(`i =${2}<br>`);
document.write(`z =${1}<br>`);
document.write(`<h3>Stage #01; --a<br></h3>`)
document.write(`--a means pre-decrement. This decreases the value of a by 1 before using it.<br>
    So the value of a becomes 1. <br>
    So after --a the value of a is 1 <br>
    <h3> Stage #02; --a - --b</h3><br>
    --a already becomes a = 1. <br>
    Now --b means pre-decrement on b.<br>
    b was initially 1.so --b becomes = 0.<br>
    So the expression is 1 - 0. <br>
    Result after this stage is = 1.<br>
    <h3> Stage #03; --a - --b + ++b</h3><br>
    --a - --b has already value calculates is = 1.<br>
    Now we calculate value ++b .<br>
    ++b it means pre-increment on b.<br>
    This increases the value of b by 1 before using it.<br>
    b was 0, so ++b makes b 1.<br>
    Now the expression is 1 + 1.<br>
    Result after this stage: 2.<br>
    <h3>Stage #04; --a - --b + ++b + b--</h3><br>
    We already  know --a - --b + ++b.<br>
    b-- means post decrement. it means the value of b is used first<br>
    then decreased it.<br>
    So the value of b is currently 1, so b-- uses the value 1, and then b becomes 0<br>
    The expression is now becomes 2 + 1 = 3.<br>
    <h3> Final values </h3><br>
    a = 1 (from the first pre-decrement --a)<br>
    b = 0 (after b--)<br>
    result = 3.<br>
    <h3>Summary</h3>
    a = 1,
    b = 0,
    result = 3.<br>`)

    // QNO 03;
    // document.write("<h2>Greet User</h2>")
    // let name = prompt("enter a name");
    // document.write(`Welcome ${name}`);

    // QNO 06;
    function calculateResult() {
        // a) Take three subjects name from user
        let subject1 = document.getElementById("subject1").value;
        let subject2 = document.getElementById("subject2").value;
        let subject3 = document.getElementById("subject3").value;

        // b) Total marks for each subject is 100
        var totalMarksPerSubject = 100;

        // c) & d) Take obtained marks for each subject
        let marks1 = parseFloat(document.getElementById("marks1").value);
        let marks2 = parseFloat(document.getElementById("marks2").value);
        let marks3 = parseFloat(document.getElementById("marks3").value);

        // e) Calculate total marks and percentage
        let totalObtainedMarks = marks1 + marks2 + marks3;
        let totalMarks = totalMarksPerSubject * 3;  // Total marks for 3 subjects
        let percentage = (totalObtainedMarks / totalMarks) * 100;

        // Display the result in a table
        let resultSection = document.getElementById("resultSection");
        resultSection.innerHTML = `
            <h3>Result</h3>
            <table border = "black" >
                <tr>
                    <th>Subject</th>
                    <th>Total Marks</th>
                    <th>Obtained Marks</th>
                </tr>
                <tr>
                    <td>${subject1}</td>
                    <td>${totalMarksPerSubject}</td>
                    <td>${marks1}</td>
                </tr>
                <tr>
                    <td>${subject2}</td>
                    <td>${totalMarksPerSubject}</td>
                    <td>${marks2}</td>
                </tr>
                <tr>
                    <td>${subject3}</td>
                    <td>${totalMarksPerSubject}</td>
                    <td>${marks3}</td>
                </tr>
                <tr>
                    <th>Total</th>
                    <th>${totalMarks}</th>
                    <th>${totalObtainedMarks}</th>
                </tr>
                <tr>
                    <th colspan="2">Percentage</th>
                    <th>${percentage.toFixed(2)}%</th>
                </tr>
            </table>
        `;
    }

// QNO 03
function displayTable() {
    // Get the number input from the user
    let number = document.getElementById("numberInput").value;
    
    // If the input is empty, use 5 as the default value
    if (number === "") {
        number = 5;
    } else {
        number = parseInt(number); // Convert input to a number
    }
    
    // Create the multiplication table
   let tableHTML = "<h3>Multiplication Table of " + number + ":</h3>";
    tableHTML += "<table>";
    for (let i = 1; i <= 10; i++) {
        tableHTML += "<tr>";
        tableHTML += "<td>" + number + "</td>";
        tableHTML += "<td>x</td>";
        tableHTML += "<td>" + i + "</td>";
        tableHTML += "<td>=</td>";
        tableHTML += "<td>" + (number * i) + "</td>";
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";

    // Display the table in the browser
    document.getElementById("tableSection").innerHTML = tableHTML;
}

// ---------------------CH :9_____________11---------------------------

document.write("<h1>CH 9______ 11</h1>")

// QNO 01;
// let city = "karachi";
// let x = prompt("Enter a city name");
// if (x === city) {
//     document.write("WELCOME TO THE CITY OF LIGHTS<br>");
// } else {
//     document.write("WELCOME")
// }

// QNO 2;
// let gender = prompt("Please enter a gender");
// if (gender === "Male") {
//     document.write(`Good morning! sir`);
// } else if (gender === "Female") {
//     document.write(`Good morning! mam`);
// } else {
//     document.write(`Rather Not Say<br>`)
// }

// QNO 03;
// document.write(`<h3>TRAFFIC SIGNAL LIGHTS</h3><br>`)
// let lights = prompt('Enter a traffic light color');
// if (lights == "red") {
//     document.write(`Must Stop!`)
// } else if (lights == "yellow") {
//     document.write(`Ready to move!`)
// } else if (lights == "green") {
//     document.write(`Move now!`)
// } else {
//     document.write(`YOU BROKE THE SIGNAL!`)
// }

// QNO 10;
// let temperature = 30;
// let temperature = prompt("enter a temperature");
// if (temperature >= 40) {
//     document.write(`Today weather is to hot!`)
// } else if (temperature >= 30) {
//     document.write(`Today weather is to Normal!`)
// } else if (temperature >= 20) {
//    document.write(`Today's Weather is cool.`)
// }  else {
//     document.write("Rainy weather<br>")
// }

// QNO 07
// document.write("<h2>Guessing Game</h2>")
// let max = prompt("enter a max number");

// let randomNum = Math.floor(Math.random() * max) + 1;
// // --------
// let guess = prompt("guess the number");

// while (true) {
//     if (guess == "quit") {
//         document.write("quitting game");
//         break;
//     }

//     if (guess == randomNum ) {
//        document.write(`you are right congrats!! random number is = ${randomNum}`);
//         break;

//     } else if (guess < randomNum) {
//         guess = prompt("your guess was to small. please try again!!")
//     }
//     else {
//         guess = prompt("your guess was to large. please try again!!")
//     }
    
// }


// QNO 8;
// document.write(`"<h2>Divisible number</h2><br>`)
// let number = prompt("enter a number");
// n = parseInt(number)
// if (number % 3 === 0){
//     document.write("Number is divisble by 3")
// } else {
//     document.write("not divisble")
// }

// QNO 9;
// let num = prompt("Enter a number")
// n = parseInt(num)
// if (num % 2 === 0) {
//     document.write("The number is even")
// } else {
//     document.write("The number is odd")
// }

// QNO 6
document.write("<h2>Grade</h2><br>")
function calculateGrade() {
    // Get the values of input fields
    let subject1 = Number(document.getElementById("subject1").value);
    let subject2 = Number(document.getElementById("subject2").value);
    let subject3 = Number(document.getElementById("subject3").value);
    let totalMarks = Number(document.getElementById("totalMarks").value);

    // Calculate total obtained marks
    let obtainedMarks = subject1 + subject2 + subject3;
    
    // Calculate percentage
    let percentage = (obtainedMarks / totalMarks) * 100;

    // Initialize grade and remarks
    let grade, remarks;

    // Determine grade and remarks based on percentage
    if (percentage >= 90) {
        grade = "A+";
        remarks = "Excellent";
    } else if (percentage >= 80) {
        grade = "A";
        remarks = "Very Good";
    } else if (percentage >= 70) {
        grade = "B";
        remarks = "Good";
    } else if (percentage >= 60) {
        grade = "C";
        remarks = "Average";
    } else if (percentage >= 50) {
        grade = "D";
        remarks = "Below Average";
    } else {
        grade = "F";
        remarks = "Fail";
    }

    // Display the result
    document.getElementById("result").innerHTML = `
        Total Marks: ${totalMarks} <br>
        Marks Obtained: ${obtainedMarks} <br>
        Percentage: ${percentage.toFixed(2)}% <br>
        Grade: ${grade} <br>
        Remarks: ${remarks}
    `;
}

//QNO 4
// document.write("<h2>Remaining Fuel</h2>")
// let remFuel = prompt("Enter a remaining fuel (in litres)")
// if (remFuel < 0.25) {
//     document.write("Please refill the fuel in the car")
// } else {
//     document.write("your fuel is full")
// }

//QNO 5
//  var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// }
// var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// }
// var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 
// if (c === 13){ 
// alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
// alert("condition 3 is true"); 
// } 
// if(c === 14){ 
// alert("condition 4 is true"); 
// }
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// }
// if (true){ 
//     alert("True"); 
//     } 
//     if (false){ 
//     alert("False"); 
//     }
//     if("car" < "cat"){ 
//         alert("car is smaller than cat"); 
//         }

// QNO 11
document.write("<h2>Enter operations</h2>")
// let num1 = +prompt("Enter a number")
// let operation = prompt("Enter a operation");
// let num2 = +prompt("Enter a second number");
// if (operation === "+"){
//     document.write(`${num1 + num2}`);
//     }
//     else if(operation === "-") {
//         document.write(`${num1 - num2}`)
//     } else if (operation === "*") {
//         document.write(`${num1*num2}`)
//     } else if (operation === "/") {
//         document.write(`${num1 / num2}`)
//     } else if (operation=== "%") {
//         document.write(`${num1%num2}`)
//     } 
//     else {
//     document.write(`user enter invalid operation`)
//     }