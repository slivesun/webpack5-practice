import _ from 'lodash';
import printMe from './print.js';
import './index.less'
import {
    cube
} from './math.js';
if ('serviceWorker' in navigator) { // PWA  渐进式网络应用环境判断
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

function component() {
    // console.log(process.env.NODE_ENV,'dsadsd')
    // const element = document.createElement('pre');
    // element.innerHTML = [
    //     'Hello webpack!',
    //     '5 cubed is equal to ' + cube(5)
    // ].join('\n\n');

    const element = document.createElement('div');
    element.classList.add('hello');
    const btn = document.createElement('button');
    element.innerHTML = _.join(['dsddsadas', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe.bind(null, 'asdasd');
    element.appendChild(btn);
    const IMgElement = document.createElement('img');
    IMgElement.src = require('./image/sad.png');
    document.body.appendChild(IMgElement)
    return element;
}
let element = component(); // 存储 element，以在 print.js 修改时重新渲染
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
        document.body.appendChild(element);
    })
}
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