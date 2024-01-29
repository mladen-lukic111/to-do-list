const inputBox = document.querySelector('#inputBox');
const listContainer = document.querySelector('#list-container');

const eventBtn = document.querySelector('.event-btn');

eventBtn.addEventListener("click", function() {
    if(inputBox.value === ''){
        alert('You need to enter something!');
    }else{
        var li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
});

//
// Logika
// e.target omogucava da znamo koji element trigeruje eventListener
// tagName je tag elementa koji je trigerovao eventListener
// 
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function that saves data after refreshing the page
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
};

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
};
showTask();