import * as _ from 'lodash';
import './index.less'
interface Obj {
  a:string,
  b:number,
  d:any,
  c?:any,
}
function component() {
  let obj: Obj = {
    a: '2',
    b:1,
    c:{},
    d:123
  }
  const element: any = document.createElement('div');
  element.classList.add('hello');
  element.innerHTML = _.join(['Hello', 'webpack', 'webpack'], ' ');
  console.log(obj)
  return element;
}

document.body.appendChild(component());