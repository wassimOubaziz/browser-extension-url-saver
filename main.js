// Log out "Button clicked!"
// Creat two variables:

let myLeads = [];
const inputEl = document.getElementById("input-el");
let savedEl = document.getElementById("saved-el");

/* localStorage.setItem("01", "www.youtube.com")
console.log(localStorage.getItem("01"))
localStorage.clear()
console.log(localStorage.getItem("01")) */

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

const tabBtn = document.getElementById("tab-btn");

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  // 1. Create a variable, listItems, to hold all the html for the list items
  // Assign it to an empty string to begin with
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    //listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li > "
    listItems += `
            <li>
                <a href="${leads[i]}" target="_blank"> ${leads[i]} </a>
            </li>
            `;
  }
  savedEl.innerHTML = listItems;
}

const deleteBtn = document.querySelector("#delete-btn");

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  console.log("clicked");
  render(myLeads);
});

const inputBtn = document.getElementById("input-btn");
// addEvetlistener take the place of onclick()
inputBtn.addEventListener("click", function () {
  console.log("Button clicked! from addEventListener");
  myLeads.push(inputEl.value);
  // Clear out the input field
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

// test template strings/literals

/* const recipient = "James"

const email = "Hey " + recipient + "! How is it doing? Cheers Per"
const emailLiterals = `Hey ${recipient} ! 
How is it doing? 
Cheers Wassim
`
console.log(email)
console.log(emailLiterals) */

/* // test 02

let myLead = `["www.youtube.com"]`

// turn the myLeads string into an array
myLead = JSON.parse(myLead)
console.log(typeof myLead)
    // puch a new value to the array
myLead.push("www.facebook.com")

// turn the array into a string again
myLead = JSON.stringify(myLead)
console.log(typeof myLead) */

/* // test 03

// Creat a function, add(), that adds two numbers together and returns the sum

function add(a, b) {
    return a + b
}

console.log(add(3, 4))
console.log(add(9, 102)) */

/*   */
