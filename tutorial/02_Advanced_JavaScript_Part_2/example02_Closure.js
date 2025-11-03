// Closure = How a function remembers those variables even after the outer scope has finished running.
// Closure makes sure it "stays seen" when the outer function is gone.
// 
// Lexical scope defines which variables a function can access.
// Closure is what happens when that function actually remembers and uses them later.
// You can’t have closures without lexical scope — closures depend on lexical scope.
//
// Example: Demonstrating JavaScript Closures
// This script implements a simple assignment tracker factory. Each
// tracker keeps its own private `completed` list using closure. The
// returned function (closure) has access to `studentName` and `completed`
// even after `createAssignmentTracker` has finished executing.

const input = require("readline-sync");

// createAssignmentTracker(studentName)
// - Purpose: returns a tracker function that manages a private list of
//   completed tasks for `studentName`.
//
// - Inputs: `studentName` (string) used for logging.
// - Output: a function (closure) with signature (action = 'display', task = "")
//           which can 'display' the student's completed tasks or 'add' a task.
//
// - Closure behavior: the returned function keeps access to the local
//   `completed` array and `studentName` even after the outer function
//   has returned, allowing each tracker to maintain its own state.
function createAssignmentTracker(studentName) {
    let completed = [];

    return function (action = 'display', task = '') {
        if (action === 'display') {
            console.log(`${studentName}'s completed tasks: ${completed.join(", ") || "None"}\n`);
        } else if (action === 'add' && task) {
            completed.push(task);
            console.log(`${studentName} completed: ${task}\n`);
            console.log(`All tasks done so far: ${completed.join(", ")}\n`);
        } else {
            console.log("Invalid action or missing task name.\n");
        }
    };
}
// === Demo === Using the Assignment Tracker Closure
console.clear();
console.log("=== Assignment Tracker Demo using Closures ===\n");

// Sample tasks to be assigned
const tasks = ["FOP Practical 2", "JavaScript Exercise 1", "Database Report", "Project Proposal", "Team Meeting", "Code Review Session"];

// Create two separate trackers for different students
const tracker1Lydia = createAssignmentTracker("Lydia");
const tracker2John  = createAssignmentTracker("John");
const tracker3Alice = createAssignmentTracker("Alice");

// Randomly assign tasks to either tracker1Lydia or tracker2John
for (let i = 0; i < tasks.length; i++) {
    console.clear();
    const task = tasks[i];

    let randomInt = Math.floor(Math.random() * 3); // 0, 1, 2

    if (randomInt == 0) { 
        tracker1Lydia('add', task);
    } else if (randomInt == 1) {
        tracker2John('add', task);
    } else {
        tracker3Alice('add', task);
    }
    input.question("Press Enter to continue...");
}

// Finally, display each student's completed tasks
console.clear();
tracker1Lydia('display');
tracker2John('display');
tracker3Alice('display');
