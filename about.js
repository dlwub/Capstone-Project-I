const aboutMenuContainer = document.createElement('div');
aboutMenuContainer.className = 'about-menu-container';
const aboutMenu = document.querySelector('.nav-two-text-about');
const mobileNavAbout = document.querySelector('.mobile-nav-about');
const closeBtnAbout = document.querySelector('.closeBtnAbout');
const mobileMenuAbout = document.querySelector('.mobile-menu-about');

window.addEventListener('resize', ()=> {        
    this.location.reload();
});

function showMenu(homeMenu, mobileNav, closeBtn, menuContainer, mobileMenuHome){
    mobileNav.style.display = 'none';
    mobileNav.cursor = 'pointer';
    menuContainer.style.display = 'flex';
    menuContainer.style.flexDirection = 'column';
    closeBtn.style.display = 'block';
    menuContainer.appendChild(closeBtn);
    homeMenu.style.display = 'flex';
    homeMenu.style.flexDirection = 'column';
    menuContainer.appendChild(homeMenu);
    mobileMenuHome.appendChild(menuContainer);    
    menuContainer.classList.add('active-menu');    
}

function hideMenu(mobileNav, closeBtn, menuContainer){    
    closeBtn.style.display = 'none';
    menuContainer.classList.remove('active-menu');
    menuContainer.style.display = 'none';  
    mobileNav.style.display = 'block';
}

mobileNavAbout.addEventListener('click', () => {
  showMenu(aboutMenu, mobileNavAbout, closeBtnAbout, 
  aboutMenuContainer, mobileMenuAbout);
  });

closeBtnAbout.addEventListener('click', () => {
  hideMenu(mobileNavAbout, closeBtnAbout, aboutMenuContainer);
  });