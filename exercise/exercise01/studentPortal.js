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





  }

  // Return a closure function that acts as the portal interface.
  return function portal(action, data) { // complete this function





  };

}

// === Demo usage ===

// place the test code here

