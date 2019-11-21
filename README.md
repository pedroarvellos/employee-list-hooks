# employee-list-hooks

employee-list-hooks is a simple application created to demonstrate good practices associated to key technologies of the React World. Some of these technologies are: hooks (stateless/functional applications), redux, redux-saga, axios and material-ui.

## How to use

Download the project directly or go to a specific folder and download it by git:

* `git init`

* `git clone https://github.com/pedroarvellos/employee-list-hooks.git`

* install all project dependencies with `npm install`
* start the development server with `npm start`
* or run it in production mode by `npm run build`

Obs.: The Service Worker is created by create-react-app, but it just works in production mode.

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json
├── public
│   └── index.html
└── src
    ├── Components
    │   ├── Spinner
    │        ├── Spinner.js
    │        ├── Spinner.css
    │
    ├── Employee
    │   ├── EmployeeForm.js - Has the form implementation to create employees and roles
    │   ├── EmployeeList.js - Has the employees' list implementation
    │
    ├── hooks
    │   ├── useInfoState.js - Hook created to manage the state of the employee form
    │
    ├── store
    │   ├── actions
    │   │    ├── employee.js - Has all actions which will be dispatched to the reducer
    │   │    ├── index.js - export all actions from a single file (it is good for applications with several action files)
    │   │
    │   ├── reducers
    │   │    ├── employee.js - Has the functions that will manipulate the state
    │   │
    │   ├── sagas
    │   │    ├── employee.js - Has all saga functions that handles the side-effects of assync actions
    │   │    ├── index.js - Export the watchers that associate the sagas with actions
    │
    ├── App.js
    ├── axios.js
    ├── index.js
    └── serviceWorker.js

The project can be opened in any text editor, for example: _Sublime Text_, _Visual Studio_,  _Atom_, etc. To execute the project.
```
