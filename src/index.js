import _ from 'lodash';
import printMe from './print.js';
// import './style.css'
function component() {
    const element = document.createElement('div');
    element.classList.add('hello');
    const btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe.bind(null,'asdasd');
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());


/**
 * 
 * @returns 第二个
 */
// function getComponent() {
//     return import('lodash')
//         .then(({
//             default: _
//         }) => {
//             const element = document.createElement('div');
//             element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//             return element;
//         }).catch((error) => 'An error occurred while loading the component');
// }
/**
 * 
 * @returns 第二
 * 
 * 
 */
// async function getComponent() {
//     const element = document.createElement('div');
//     const {
//         default: _
//     } = await import('lodash');
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return element;
// }

// getComponent().then((component) => {
//     document.body.appendChild(component);
// });