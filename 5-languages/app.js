let lang1 = 'ru'
let lang2 = 'en'
let lang3= 'de'

switch(lang1){
  case 'ru':
    console.log('Привет');
  case 'en':
  console.log('Hello');
  break;
  case 'de':
    console.log('Gutten Tag');
    break;
  default:
    console.log('Я не знаю такой язык');
    break;
}