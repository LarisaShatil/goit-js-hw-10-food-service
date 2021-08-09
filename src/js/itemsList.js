import list from '../templates/list.hbs';
import menu from '../menu.json';


const menuList = document.querySelector('.js-menu');

function createMenuItem () {
    return menu.map(list).join("");
}

const menuListMarkup = createMenuItem ();
menuList.insertAdjacentHTML('beforeend', menuListMarkup);