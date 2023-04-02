const menuTrigger = document.querySelector('.menu-trigger'),
        closeTrigger = document.querySelector('.close'),
        giveClass = document.querySelector('.site');
menuTrigger.addEventListener('click', function() {
    giveClass.classList.toggle('showmenu')
})
closeTrigger.addEventListener('click', function() {
    giveClass.classList.remove('showmenu')
})