window.addEventListener('DOMContentLoaded', () => {

    const navParent = document.querySelector('.nav'),
          tabs = document.querySelectorAll('.nav-item'),
          tabsContent = document.querySelectorAll('.tabcontent');



function hideContent() {
    tabsContent.forEach(item => {
        item.classList.remove('show');
        item.classList.add('hide');
    });
    tabs.forEach(item => {
        item.classList.remove('nav-item_active');
    });
}

function showContent(i = 0) {
    tabsContent[i].classList.remove('hide');
    tabsContent[i].classList.add('show');
    tabs[i].classList.add('nav-item_active');
}

hideContent();
showContent();


navParent.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-item')) {
        tabs.forEach((item, i) => {
            if (e.target == item) {
                hideContent();
                showContent(i);
            }
        });
    }
});

});