/*
 * Jeff Mariconda
 * CS546
 */

var exports = module.exports = {
    getToDoEntries,
    getOpenToDoEntries,
    getCompletedToDoEntries,
    getToDoEntry,
    addNewEntry,
    modifyEntry,
    addNoteToEntry
};

var toDoEntries = [];
var currentID = 0;
/*
{
  id: NUMBER, // the ID number of the entry
  author: STRING, // A string representing the author of the task
  taskTitle: STRING, // A title for the task; think of it as the one-sentence summary of the task
  taskDescription: STRING, // A more detailed explanation of what you want to do in the task
  taskNotes: STRING[], // Notes about the task, used for conversation
  status: STRING ("open", "completed" only) // A status representing whether or not the task is open or completed
}
*/

/*
 *  Checks if a string is blank or contains only whitespace.
 */
String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};

/*
 *  Returns an array containing every ToDoEntry currently stored in memory.
 */
function getToDoEntries() {
    return toDoEntries;
}

/*
 *  Returns an array containing every open ToDoEntry currently stored in memory.
 */
function getOpenToDoEntries() {
    var openEntries = [];

    for (entry in toDoEntries) {
        if (entry['status'] === 'open')
            openEntries.push(entry);
    }

    return openEntries;
}

/*
 *  Returns an array containing every completed ToDoEntry currently stored in memory.
 */
function getCompletedToDoEntries() {
    var completedEntries = [];

    for (entry in toDoEntries) {
        if (entry['status'] === 'completed')
            completedEntries.push(entry);
    }

    return completedEntries;
}

/*
 *  Finds a single ToDoEntry by id and returns it.
 *  If the entry cannot be found, throw error.
 */
function getToDoEntry(id) {
    if (typeof id !== 'number')
        throw "Argument not a number.";
    else if (id < 0)
        throw "Negative argument.";

    for (entry in toDoEntries) {
        if (entry['id'] === id) {
            return entry;
        }
    }

    // error case if no entry is found
    throw "An entry with the ID of {" + id + "} could not be found.";
}



/*
 *  Adds a new ToDoEntry to the toDoEntries array.
 */
function addNewEntry(requestBody) {
    if (typeof requestBody !== 'object') {

        throw "Argument not typeof object.";

    } else if (!('author' in requestBody) || !('taskTitle' in requestBody) || !('taskDescription' in requestBody)
                || requestBody['author'].isEmpty() || requestBody['taskTitle'].isEmpty() || requestBody['taskDescription'].isEmpty()) {

        throw "You must provide valid information in the request body to create an entry.";

    }

    var newEntry = {
        id: currentID++,
        author: requestBody['author'],
        taskTitle: requestBody['taskTitle'],
        taskDescription: requestBody['taskDescription'],
        taskNotes: [],
        status: 'open'
    };

    toDoEntries.push(newEntry);

    return newEntry;
}

/*
 *  Modifies any or all of the taskTitle, taskDescription, and status fields of the ToDoEntry with the given id.
 */
function modifyEntry(id, requestBody) {
    if (typeof requestBody !== 'object') {

        throw "Argument not typeof object.";

    } else if (!('taskTitle' in requestBody) && !('taskDescription' in requestBody) && !('status' in requestBody)
                && requestBody['taskTitle'].isEmpty() && requestBody['taskDescription'].isEmpty() && requestBody['status'].isEmpty()
                && (requestBody['status'] !== 'open' || requestBody['status'] !== 'completed')) {

        throw "You must provide valid information in the request body to create an entry.";

    }

    var modifiedEntry = getToDoEntry(id);

    for (key in requestBody) {
        if (key === 'taskTitle' || key === 'taskDescription' || key === 'status') {
            entry[key] = requestBody[key];
        }
    }

    return modifiedEntry;
}

/*
 *  Adds a new note to the ToDoEntry with the given id.
 */
function addNoteToEntry(id, requestBody) {
    if (typeof requestBody !== 'object') {
        throw "Argument not typeof object.";
    } else if (!('note' in requestBody)) {
        throw "You must provide valid information in the request body to create an entry.";
    }

    var modifiedEntry = getToDoEntry(id);

    modifiedEntry['taskNotes'].push(requestBody['note']);

    return modifiedEntry;
}

/*
 *  Deletes the ToDoEntry with the given id.
 */
 function deleteEntry(id) {
     toDoEntries = toDoEntries.splice(toDoEntries.indexOf(getToDoEntry(id)), 1);
 }
