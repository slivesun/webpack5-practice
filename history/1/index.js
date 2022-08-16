import _ from 'lodash';
import './assets/style.css';
import Icon from './assets/icon.png';
import Data from './assets/data.xml';
import Notes from './assets/data.csv';
import SVg from './assets/data.svg';
import toml from './assets/data.toml';
import yaml from './assets/data.yaml';
import json from './assets/data.json5';
//执行命令 npm install css-loader csv-loader json5 style-loader toml xml-loader yamljs
console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
    const element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    // lodash 在当前 script 中使用 import 引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // 将图像添加到我们已经存在的 div 中。
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    console.log(Data);
    console.log(Notes);
    console.log(SVg);
    return element;
}

document.body.appendChild(component());