//CommonJS 스펙의 모듈 가져오기: require => import, 배포하기: export => export
//ES6에서는 import _ from 'lodash';
var _ = require('lodash');
import './style.css';
import './hello.scss';
// commonJS 스펙의 가져오기 => ex6 named import
import {area, circumference} from './js/circle';
// es6 default import: {} 필요 없고 이름을 마음대로 정의할 수 있다.
import aaa from './js/cube';

function component() {
	let element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack!'], ' ');

	return element;
}

document.body.appendChild(component());

console.log("area", area(5));
console.log("circumference", circumference(5));
console.log("cube", aaa(5));