# JavaScript Programming Essentials - IBM

My hands-on coursework for IBM's **JavaScript Programming Essentials** course (part of the IBM Full-Stack JavaScript Developer Professional Certificate). This repo holds the lab exercises I worked through: setting up the environment and, most importantly, understanding how variables and scope work in JavaScript.

[![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat-square)]()
[![Course](https://img.shields.io/badge/Course-IBM%20JavaScript%20Programming%20Essentials-blue?style=flat-square)]()

---

## What is this course

A beginner-friendly IBM course covering the core of JavaScript: ES6 features, variables, control flow, functions, arrays, objects, DOM manipulation, events, and AJAX. Each module ends with hands-on labs, and the ones I have completed so far live in this repo.

## Lab folders

| Folder | Course lab | What it covers |
|---|---|---|
| `SampleFolder/` | Lab 1 - Setting Up the Environment | A minimal HTML page to verify the local setup works (editor, browser, Git) |
| `variable_scope/` | Lab 2 - Working with Variables and Their Scope | Declaring variables with `var`, `let`, and `const`; block scope vs function scope vs global scope; what happens when you access a variable outside its scope |

### `variable_scope/` contents

- `scope_lab.js` / `scope_lab.html` - Declares `var`, `let`, and `const` at global, block, and function level, then tries to read each one from outside its scope. The script intentionally throws a `ReferenceError` on the final three lines, which is the point of the exercise: function-scoped variables cannot be reached from the global scope.
- `practice.js` / `practice.html` - A practice task: create a block with `{}`, declare one variable with each keyword inside it, try reassigning them inside the block, then try again outside the block to see which assignments are allowed and which fail.

## How to run the labs

**Option 1: in the browser** (how the course teaches it)

1. Open the `.html` file in your browser.
2. Open DevTools (`F12` or `Ctrl+Shift+J` / `Cmd+Option+J`).
3. Read the output in the Console tab.

**Option 2: with Node.js** (quick check, no browser needed)

```bash
node variable_scope/practice.js
node variable_scope/scope_lab.js   # ends with an intentional ReferenceError
```

> Note: `scope_lab.js` throwing `ReferenceError: functionVar is not defined` at the end is expected. The lab is demonstrating that variables declared inside a function do not exist outside of it.

## Key takeaways so far

- `var` is function-scoped and hoisted; `let` and `const` are block-scoped, which makes code easier to reason about.
- A block `{}` creates a scope for `let` and `const`, but not for `var`.
- Accessing a variable outside the scope where it was declared throws a `ReferenceError`.
- `const` prevents reassignment of the binding, not mutation of the value it holds.

## Author

**Muhammad Izaz Haider** - Cybersecurity student at Howest University of Applied Sciences, working through IBM's Full-Stack JavaScript Developer certificate alongside his security studies.

- GitHub: [mizazhaider-ceh](https://github.com/mizazhaider-ceh)
- LinkedIn: [Muhammad Izaz Haider](https://www.linkedin.com/in/muhammad-izaz-haider-091639314)
