document.addEventListener("DOMContentLoaded", () => {
  // form = document.getElementById("create-task-form")
  // form.addEventListener('submit', function(event) {
  //   inputField = document.getElementById("new-task-description")
  //   inputField.value
  //   event.preventDefault();
  // });

  findForm().addEventListener('submit', (event) => {
    // get the value for the text field *
    // get the element that we want to append this to *
    // create li child *
    // assign li text content *
    // append the value of the text field to that element
    let li = createLiElement();
    li.textContent = textFieldValue();
    ulEl().appendChild(li);
    event.preventDefault();
  });
});

// Step 1

function findForm() {
 return document.getElementById("create-task-form");
};

// Step 2
// fuction submitListener() {
//   findForm().addEventListener('submit', function(event) {
//     event.preventDefault();
//   });
// };

//Step 3
function textFieldValue() {
  return document.getElementById("new-task-description").value
};

//Step 4
function ulEl() {
  return document.getElementById("tasks");
};

//Step 5
function createLiElement () {
  return document.createElement('li');
};