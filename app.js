// адрес назначения Lat
let addresLat = 10;
// адрес назначения Long 
let addresLong = 20;
// текущее положение пользователя Lat допустим равен 3
let positionLat  = 3;
// текущее положение пользователя Long допустим равен 6
let positionLong = 6;

// получаем длину
addresLong = (addresLong - positionLong ) * 2;
// получаем широту
addressLat = (addresLat - positionLat ) * 2;
// чтобы получить значение дистанции к объекту 
let addressObject = (addresLong + addressLat ) / 2 ;
// диагональ объекта.
console.log(addressObject);
