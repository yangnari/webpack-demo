// commonJS 스펙의 개별 모듈화 => es6의 named export
export var area = (r) => Math.PI * r * r; // 다른 모듈에서 area function 사용 가능

export var circumference = (r) => 2 * Math.PI * r;

