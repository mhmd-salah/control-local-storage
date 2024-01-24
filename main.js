let allSpans = document.querySelectorAll(".button span");
let result = document.querySelector(".result > span");
let theInput = document.getElementById("the-input");

allSpans.forEach((span) => {
  span.addEventListener("click", function (e) {
    if (e.target.classList.contains("check-item")) {
      checkItem();
    }
    if (e.target.classList.contains("add-item")) {
      addItem();
    }
    if (e.target.classList.contains("delete-item")) {
      deleteItem();
    }
    if (e.target.classList.contains("show-items")) {
      showItems();
    }
  });
});

function checkinputempty() {
  result.innerHTML = `Cannot Input Be Empty`;
}
// let fL = theInput.value.split("")[0]
// fL.toUpperCase()


function checkItem() {
  if (theInput.value !== '') {
    if (window.localStorage.getItem(theInput.value)) {
      result.innerHTML = `The Item Called <span>[${theInput.value}]</span> founded`;
    } else {
      result.innerHTML = `The Item Called <span>[${theInput.value}]</span> Not founded`;
    }
  } else {
    checkinputempty``
  }
};

function addItem() {
  if (theInput.value !== '') {
    localStorage.setItem(theInput.value, "test")
    result.innerHTML = `The Item Called <span>[${theInput.value}]</span> Added`;
    theInput.value =``
  } else {
    checkinputempty``;
  }
}
function deleteItem() {
  if (theInput.value !== '') {
    if (localStorage.getItem(theInput.value)) {
      localStorage.removeItem(theInput.value)
      result.innerHTML = `<span>[${theInput.value}] </span> Deleted`
      theInput.value = ``;
    } else {
      result.innerHTML = `<span>[${theInput.value}]</span> Not Founeded`
    }
  } else {
    checkinputempty``;
  }
}
function showItems() {
  if (theInput.value !== '') {
    if (localStorage.getItem(theInput.value)) {
      result.innerHTML = `The Item Key <span>[${theInput.value}]</span> And Value <span>[${localStorage.getItem(theInput.value)}]</span>`
      theInput.value = ``;
    } else {
      
    }
  } else {
    checkinputempty``;
  }
}