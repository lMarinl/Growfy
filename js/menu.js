"use strict"

document.addEventListener('click', documentClick);

function documentClick(e) {
    if (targetItem.closest('.icon_menu')) {
        document.documentElement.classList.toggle(menu-open);
    }
}