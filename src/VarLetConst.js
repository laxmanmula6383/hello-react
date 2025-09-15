import React from 'react'

const VarLetConst = () => {
  return (
    <div style={{ padding: "20px" }}>
    <h2>Var vs Let vs Const</h2>
    <ul>
      <li><b>var</b> → Function-scoped, can be redeclared & updated.</li>
      <li><b>let</b> → Block-scoped, can be updated but not redeclared in same scope.</li>
      <li><b>const</b> → Block-scoped, cannot be redeclared or updated.</li>
    </ul>

    <h3>Examples:</h3>
    <pre style={{ background: "#f4f4f4", padding: "10px" }}>

{`
// VAR Example

var can be used inside and outside function
once we declare a value for var then again we refdeclared for that

let
Block-scoped (lives only inside { } block).
Can be declared both inside and outside functions.
let x = 100;  // Global (but NOT added to window object)


const

Also block-scoped (like let).
Must be initialized immediately.
Cannot be reassigned.
----------------------
var a = 10;
console.log("a (first):", a);   // 10

var a = 20;  //  Allowed (redeclaration possible)
console.log("a (second):", a);  // 20


// LET Example
let b = 30;
console.log("b (first):", b);   // 30

// let b = 40;  //  Error: Identifier 'b' has already been declared
b = 40;        //  Reassignment allowed
console.log("b (second):", b);  // 40


// CONST Example
const c = 50;
console.log("c (first):", c);   // 50

// c = 60;     //  Error: Assignment to constant variable
 `}
   
    </pre>
  </div>
)
}
export default VarLetConst