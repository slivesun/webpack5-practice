import _ from 'lodash';

import printMe from './print.js';
const element = document.createElement('div');
const btn = document.createElement('button');
element.innerHTML = _.join(['Hello', 'webdddpack'], ' ');
btn.innerHTML = 'asdasd!';
btn.onclick = printMe;
console.log(_.join(['Another', 'module', 'loaded!'], ' '));