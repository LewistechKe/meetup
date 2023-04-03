const menuTrigger = document.querySelector('.menu-trigger'),
        closeTrigger = document.querySelector('.close'),
        giveClass = document.querySelector('.site');
menuTrigger.addEventListener('click', function() {
    giveClass.classList.toggle('showmenu')
})
closeTrigger.addEventListener('click', function() {
    giveClass.classList.remove('showmenu')
})

//animated items on scroll
const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('this')
        }
    })
})
const boxEllist = document.querySelectorAll('.animate');
boxEllist.forEach((el) => {
    io.observe(el)
})