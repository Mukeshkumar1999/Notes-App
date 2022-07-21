console.log("Ganeshay");


shownotes();

let Addbtn = document.getElementById("Addbtn");
let AddTitle = document.getElementById('addTitle');
Addbtn.addEventListener("click", function (e) {


    let Addtxt = document.getElementById("Addtxt");
    let notes = localStorage.getItem("notes")

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        text: Addtxt.value,
        title: AddTitle.value
    }

    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    AddTitle.value = "";
    Addtxt.value = "";
    console.log(notesObj);


    shownotes();
})

//  if user add a note  it to local storage


function shownotes() {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `

        <div class="notecard  my-2 mx-2 border border-info " style="width: 18rem;">
  
         <div class="card-body">
         <h5 class="card-title">${element.title}</h5>
         <p class="card-text">${element.text}.</p>
         <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Notes</button>
        </div>
       </div> `;

    });
    let notesElm = document.getElementById('notes');
    if (notesElm.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show ! "Add a note" section above to add notes`;
    }

}

//  Function  delete a notes

function deleteNote(index) {
    console.log("i am delete", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
}

//search Function


let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    console.log("input Fired!", inputVal);

    let notecard = document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("h5")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })



})