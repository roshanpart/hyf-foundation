const notes = [];

function saveNote(content, id) {
    notes.push({content: content, id: id})

}

function getNote(id) {
    if (id === undefined) {
        console.log("ID is not provided");
        return;
    }

    if (typeof id !== "number") {
        console.log("ID must be a number");
        return;
    }

    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            return notes[i];
        }
    }
}

function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}.`)
        
    
    }
}



saveNote(`pickup groceries`, 1);
saveNote(`do laundry`, 2);
console.log(notes);


console.log(getNote(2));
console.log(getNote(1));
getNote();
getNote("hello");

logOutNotesFormatted();