let fname = document.forms["RegForm"]["firstname"],
  lname = document.forms["RegForm"]["lastname"],
  email = document.forms["RegForm"]["email"],
  password = document.forms["RegForm"]["password"];

let submit = document.getElementById("submitBtn");
let signupDisplay = document.getElementById("signup-display");
let loginDisplay = document.getElementById("login-display");
let formDisplay = document.getElementById("form-display");

let loginText = document.getElementById("login-text");

submit.addEventListener("click", function () {
  if (
    fname.value != "" &&
    lname.value != "" &&
    email.value != "" &&
    password.value != ""
  ) {
    localStorage.setItem("userFirstName", fname.value);
    localStorage.setItem("userLastName", lname.value);
    localStorage.setItem("userEmail", email.value);
    localStorage.setItem("userPassword", password.value);

    signupDisplay.style.display = "none";
    formDisplay.style.display = "none";
    loginDisplay.style.display = "block";

    loginText.innerHTML = `Thank you ${fname.value} for Registering. Please login now!`;
  }
});

/* To avoid page refreshing when submit button is clicked */
var form = document.getElementById("container");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

/*  TO LOGIN BUTTON BELOW THE REGISTER PAGE */

let toLogin = document.getElementById("to-login");

toLogin.addEventListener("click", function () {
  signupDisplay.style.display = "none";
  loginDisplay.style.display = "block";
  formDisplay.style.display = "none";
});

/* TO REGESTER BUTTON BELOW THE LOGIN PAGE */

let toSignup = document.getElementById("to-register");

toSignup.addEventListener("click", function () {
  signupDisplay.style.display = "block";
  loginDisplay.style.display = "none";
  formDisplay.style.display = "none";
});

/* LOGIN CHECK WITH REGISTERED DETAILS */
let lemail = document.forms["LoginForm"]["lemail"],
  lpassword = document.forms["LoginForm"]["lpassword"];

/* To avoid page refreshing when login button is clicked */
var lform = document.getElementById("lcontainer");
function handleLoginForm(event) {
  event.preventDefault();
}
lform.addEventListener("submit", handleLoginForm);

/* ACTUAL LOGIN BUTTON */
let actualLogin = document.getElementById("loginSubmitBtn");

let incorrectPass = document.getElementById("incorrect-pass");
let userFormName = document.getElementById("form-user-name");

actualLogin.addEventListener("click", function () {
  if (
    localStorage.getItem("userEmail") === lemail.value &&
    localStorage.getItem("userPassword") === lpassword.value
  ) {
    incorrectPass.innerHTML = "correct";
    signupDisplay.style.display = "none";
    loginDisplay.style.display = "none";
    formDisplay.style.display = "block";
    userFormName.innerHTML = `${localStorage.getItem(
      "userFirstName"
    )}, Please fill the form`;
  } else {
    incorrectPass.innerHTML = "Your email or password is incorrect";
  }
});

/* To avoid page refreshing when height form submit button is clicked */
var fform = document.getElementById("fcontainer");
function handleHeightForm(event) {
  event.preventDefault();
}
fform.addEventListener("submit", handleHeightForm);

/* HEIGHT FORM  - MEAN, MEDIAN AND MODE CALCULATION */

let yourHeight = document.forms["FinalForm"]["yourheight"],
  fathersHeight = document.forms["FinalForm"]["fatherheight"],
  mothersHeight = document.forms["FinalForm"]["motherheight"],
  grandFathersHeight = document.forms["FinalForm"]["gfatherheight"],
  grandMothersHeight = document.forms["FinalForm"]["gmotherheight"];

let heightBtn = document.getElementById("FormSubmitBtn");
let displayData = document.getElementById("data");
/* MEAN */

heightBtn.addEventListener("click", function () {
  if (
    yourHeight.value !== "" &&
    fathersHeight.value !== "" &&
    mothersHeight.value !== "" &&
    grandFathersHeight.value !== "" &&
    grandMothersHeight.value !== ""
  ) {
    let arrOfHeights = [
      Number(yourHeight.value),
      Number(fathersHeight.value),
      Number(mothersHeight.value),
      Number(grandFathersHeight.value),
      Number(grandMothersHeight.value),
    ];
    /* CALCUALTE MEAN */
    let mean = arrOfHeights.reduce((sum, acc) => sum + acc) / 5;
    /* CALCULATE MEDIAN */
    let median;
    let sorted = arrOfHeights.sort((a, b) => a - b);
    let half = Math.floor(sorted.length / 2);
    if (arrOfHeights.length % 2 === 0) {
      median = (sorted[half] + sorted[half - 1]) / 2;
    } else median = sorted[half];

    /* CALCULATE MODE */
    function getMode(array) {
      // count amount of occurences of each number
      const obj = {};
      array.forEach((number) => {
        // for each number in array,
        // if it doesn't already exist as a key on the
        // object, create one and set its value to 1.
        if (!obj[number]) {
          obj[number] = 1;
        } else {
          // if it already exists as key on the object,
          // increment its corresponding value.
          obj[number] += 1;
        }
      });

      // return object key with highest value.
      let highestValue = 0;
      let highestValueKey = -Infinity;

      for (let key in obj) {
        const value = obj[key];
        if (value > highestValue) {
          highestValue = value;
          highestValueKey = key;
        }
      }
      // convert key back to number
      return Number(highestValue) === 1
        ? "Modes are not present"
        : Number(highestValueKey);
    }

    let mode = getMode(arrOfHeights);

    displayData.innerHTML = `Mean: ${mean} , Median: ${median} and Mode: ${mode}`;
  }
});
