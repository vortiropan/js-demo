// адрес назначения Lat
let addressLat;
// адрес назначения Long 
let addresLong 
// текущее положение пользователя Lat допустим равен 3
let positionLat  = 3;
// текущее положение пользователя Long допустим равен 6
let positionLong = 6;

// получаем длину
addresLong = positionLong * positionLong;
// получаем широту
addressLat = positionLat * positionLat;
// чтобы получить значение дистанции к объекту 
let addressObject = addresLong + addressLat;
// диагональ объекта.
console.log(Math.sqrt(addressObject));
