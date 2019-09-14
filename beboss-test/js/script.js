
var options = {
  url: "resources/franchise.json",

  getValue: "name"

  // template: {
  //     type: "links",
  //     fields: {
  //         link: "website-link"
  //     }
  // },

  // theme: "plate-dark"
};

$("#franchise").easyAutocomplete(options);

$(".easy-autocomplete")
/* List show animation */
.on("show.eac", function() {
  console.log("Show EAC!!!");
  this.classList.add("easy-autocomplete--opened");
})
.on("hide.eac", function() {
  console.log("Hide EAC!!!");
  this.classList.remove("easy-autocomplete--opened");
});

var form = document.querySelector(".form__form");
var submitBtn = document.querySelector(".form__submit");
var telInput = document.getElementById("tel");
var nameInput = document.getElementById("name");
var franchiseInput = document.getElementById("franchise");
var inputsValidity = [{telIsValid: false}, {nameIsValid: false}, {franchiseIsValid: false}];

// form.addEventListener("invalid", function(evt) {
//   console.log("evt.currentTarget = " + evt.currentTarget);
//   console.log("evt.target = " + evt.target);

//   if (evt.target.getAttribute("id") === "tel") {

//     evt.preventDefault();
//     console.log("telephone!");
//     console.log(form.elements[1].validity);

//     if (evt.target.validity.patternMismatch) {
//       evt.target.parentNode.classList.add("pattern-mismatch");
//     }
//   }
// }, true);

function checkValidity(evt) {
  var validity = evt.target.validity;
  var parent = evt.target.parentNode;

  if (!(validity.valid)) {
    window.isValid = false;
    parent.classList.add("invalid");

    parent.classList.toggle("invalid--pattern", (validity.patternMismatch));
    parent.classList.toggle("invalid--missing", (validity.valueMissing));

  } else {
    window.isValid = true;
    parent.classList.remove("invalid", "invalid--pattern", "invalid--mismatch");
  }

  if ((telInput.validity.valid) && (nameInput.validity.valid) && (franchiseInput.validity.valid)) {
    submitBtn.classList.remove("form__submit--disabled");
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.classList.add("form__submit--disabled");
    submitBtn.setAttribute("disabled", "true");
  }
  
}

telInput.addEventListener("blur", checkValidity);
nameInput.addEventListener("blur", checkValidity);
franchiseInput.addEventListener("blur", checkValidity);