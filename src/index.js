"use strict"

import _ from 'lodash';
import printMe from './print';
// import './style.css';
import {cube} from './math';

function component(){
  // var element = document.createElement('div');
  // var btn = document.createElement('button');

  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack',
    '5 cubed is equal to' + cube(5)
  ].join('\n\n');

  // element.innerHTML = _.join(["hello",'webpack','']);
  // btn .innerHTML = 'click me and check the console';
  // btn.onclick = printMe;

  // element.appendChild(btn);

  return element;
}

if(process.env.NODE_ENV !== 'production'){
  console.log('Looks like we are in development mode!')
}

// document.body.appendChild(component());

if(module.hot){
  module.hot.accept('./print.js',function(){
    console.log('Accepting the updated printMe module!');
    // printMe();
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}