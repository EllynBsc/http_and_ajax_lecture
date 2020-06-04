console.log("Hello from src/index.js!");
// index.js is our main file, entry file
// invoke all the functions
// import all the functions inside of this file (require_relative 'file' in ruby)


// import { functionName } from 'path_to_the_file'
import { updateListMovies } from './movie.js'
import { initSortable } from './plugins/init_sortable'
import { initMarkdown } from './plugins/init_markdown'
import { initSelect2 } from './plugins/init_select2'

// event listener with my callback function updaListMovies
const myForm = document.getElementById('search-movies')
myForm.addEventListener('submit', updateListMovies);

// execution of my PLUGINS
initSortable();
initMarkdown();
initSelect2();


// yarn is the package manager that allows you to install packages(plugins, gems in ruby) from js
// the repo to find all the packages is NPM
// package.json is the file where you can check your plugins installed(gemfile in ruby)
































