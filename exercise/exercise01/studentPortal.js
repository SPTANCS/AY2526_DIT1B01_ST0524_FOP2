// ------------------------------------------------------
// Student Portal Manager
// Demonstrating: Lexical Scope, Closure, and Scope Chain
// ------------------------------------------------------

console.clear();
console.log("=== Student Portal Manager Demo ===\n");

/**
 * Outer function that creates a student portal.
 * - studentName: String identifying the student.
 * - returns: a closure function that can 'add', 'view', or 'summary' modules.
 */

function createStudentPortal(studentName) {

  //declare an array is private to the student — it lives in the closure.
  let modules = [];

  console.log(`Portal created for ${studentName}.\n`);

  // Nested helper function to display each module.
  // It can access both 'module' (its own parameter)
  // and 'studentName' from the outer lexical scope.
  function displayModuleInfo(module) { // complete this function
    console.log(`Module: ${module.code} — Grade: ${module.grade}`);
  }

  // Return a closure function that acts as the portal interface.
  return function portal(action, data) { // complete this function
    if (action == 'add' && data && data.code && data.grade) {
      modules.push(data);
      console.log(`Module added for ${studentName}: ${data.code} (${data.grade})`)
    } else if (action == 'view') {
      console.log(`${studentName}'s Modules:`);
      if (modules.length === 0) {
        console.log('No modules recorded.\n');
      } else {
        modules.forEach(displayModuleInfo);
        console.log();
      }
    } else if (action == 'summary') {
      return `${studentName} has completed ${modules.length} module(s).`;
    } else {
      console.log('Invalid action or missing data.\n');
    }
  };
}

// === Demo usage ===

// place the test code here
console.clear();
console.log("=== Student Portal Manager Demo ===\n");

const alicePortal = createStudentPortal("Alice");
const benPortal = createStudentPortal("Ben");

// Alice adds two modules
alicePortal("add", { code: "FOP", grade: "A" });
alicePortal("add", { code: "BED", grade: "B+" });

// Ben adds one module
benPortal("add", { code: "WAD", grade: "A-" });
console.log();

// View their results
alicePortal("view");
benPortal("view");

// Show summaries
console.log(alicePortal("summary"));
console.log(benPortal("summary"));


