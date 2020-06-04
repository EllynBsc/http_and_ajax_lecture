// 1. yarn add package
// 2. check package.json
// 3. have a look at the package in the node modules folder
// 4. create the file with the right name and in the folder plugins
// 5. import the code from the node modules + use the code

// import PackageName from 'the folder in the node modules'
import Sortable from 'sortablejs'; //downloading all the code from the node module and making it accessible in this file

const initSortable = () => {
  const list = document.querySelector('#results');
  Sortable.create(list, {
  ghostClass: "ghost",
  animation: 150,
  onEnd: (event) => {
    alert(`${event.oldIndex} moved to ${event.newIndex}`);
  }
 });
};

// 6.export the function to make it public/accessible later in the index.js
// 7. import the function in the index.js

export { initSortable };
// export { functionName}
