
// Scope Chain in Closure Example
// What Is a Scope Chain?
//
// When a variable is used inside a function, JavaScript looks for it in a chain of scopes, starting from:
// - The function’s own local scope
// - Then moving outward to its parent scopes
// - And finally, the global scope
//
// This hierarchy of variable lookups is called the scope chain.
// In a closure, the scope chain is what allows the inner function to “remember” variables from multiple levels above it.

const school = "SP"; // global variable

// Outer function representing a course
function createCourse(courseName) {
    const lecturer = "Mr Tan";

    // Inner function representing an assignment within the course
    function createAssignment(title) {
        const deadline = "Week 10";

        // Innermost function to submit the assignment
        return function submitAssignment(studentName) {
            console.log("=== Submission Details ===");
            console.log("School:", school);            // from global scope
            console.log("Course:", courseName);        // from outer function (createCourse)
            console.log("Lecturer:", lecturer);        // from outer function (createCourse)
            console.log("Assignment:", title);         // from inner function (createAssignment)
            console.log("Deadline:", deadline);        // from inner function (createAssignment)
            console.log("Submitted by:", studentName); // local scope
        };
    }

    return createAssignment;
}

// === Demo ===
console.clear();
console.log(`=== Scope Chain in Closure Demo ===\n`);
// Step 1: Create a course closure
const courseDIT = createCourse("Web App Development");

// Step 2: Create an assignment closure within the course
const wadAssignment = courseDIT("Practical 2");

// Step 3: Submit the assignment
wadAssignment("Alice");
