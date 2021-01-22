// дефолтный импорт джейсона
// и хэндл бара козы

import dishes from '../menu.json'
import y from '../templates/gallery-items.hbs'


const galleryRef = document.querySelector('.js-menu')
// console.log(galleryRef);
const z = y(dishes)
// console.log(z);

 galleryRef.insertAdjacentHTML('beforeend' , z)

