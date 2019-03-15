# Risk Calculation

### Task1 Changes(clean up, refactor, and test cases)

- Created the folder structure for project to better organise the components, services, utils etc...
- Removed the var statment in all files and used let and const keywords from ES6 to declare the varibales wherver it is nessary.
- Added the wrapper as <React.Fragment> instead of using the div to wrap the elements as per React documentaion.
- Added the prop types in all components.
- Removed the calculation of timeseries in Table, Chart components repeatadly and moved this calculation in to main app.js file so that it can be calculated once and then passing this value as props to table, chart components.
- Created the utils folder in project src structure to maintain utility/helper functions and app specific constants in one place.
- Changed the statless components as dump components whever it is applicable.
- Added the unit test cases for all components.

### Task2 Changes
- Intigrated with API, instead of having cons data (which is required for calculation of timeseries) in codebase 

### Task3 Changes
- Made the initial investment sum changable instead of static, so now when user changes initial sum value table, chart will update autmatically

### Get it running

- Install the dependences -  ``` npm install ```
- Run the application - ``` npm start ```
- Run the tests - ``` npm test ```

