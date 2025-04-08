//pages
document.querySelectorAll('.logo').forEach((logo)=>{
    logo.addEventListener('click', ()=>{
        document.querySelector('.front-page').style.display = 'block';
        document.querySelector('.login-page').style.display = 'none';
        document.querySelector('.signup-page').style.display = 'none';
    })
})
document.querySelectorAll('.login').forEach((loginBtn)=>{
    loginBtn.addEventListener('click', ()=>{
        document.querySelector('.front-page').style.display = 'none';
        document.querySelector('.login-page').style.display = 'block';
        document.querySelector('.signup-page').style.display = 'none';
    })
})
document.querySelectorAll('.signup').forEach((signupBtn)=>{
    signupBtn.addEventListener('click', ()=>{
        document.querySelector('.front-page').style.display = 'none';
        document.querySelector('.login-page').style.display = 'none';
        document.querySelector('.signup-page').style.display = 'flex'; //so it will display flex and not messed up
    })
})


//hover effect
const dropdownItems = document.querySelectorAll('.dropdown-hover'); //array of the 2 dropdown menus

if(window.innerWidth < 1150){ //if smaller than 1150 pixels
    //responsive part
    const menuIcon = document.querySelector('.menu');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', ()=> { //when we click the class change is added and removed to the navbar
        navbar.classList.toggle('change');

        if(!navbar.classList.contains('change')){ //if navbar does not contain the class change
            document.querySelectorAll('.dropdown-menu').forEach((dropdown) => {
                dropdown.style.left = '-21rem'; //we hide the dropdown menu
            })
        }
    })

    document.querySelectorAll('.show-dropdown').forEach((link) => {
        link.addEventListener('click', () => {
            link.nextElementSibling.style.left = '0'; //to display the dropdown menus
            //which they are the siblings of the link elements.
        })
    })

    document.querySelectorAll('.dropdown-heading-link').forEach((headingLink) =>{
        headingLink.addEventListener('click', () => {
            headingLink.parentElement.parentElement.style.left = '-21rem'; //to hide the dropdown menus
            //So we need here heading link.
            // Then we have to access to the parent element.
            // And for that we have to use one of the property called parent elements.
            // So right now we have access to the list item.
            // And next we have to get access, the list element itself.
            // So again, we need parent element followed by the style property.
        })
    })

} else{
    dropdownItems.forEach(dropdownItem => { //one parameter which will be the current item from the list called it dropdownItem
        dropdownItem.addEventListener('mouseover', () => { //the event when the mouse is over 
            dropdownItem.lastElementChild.style.cssText = 'opacity: 1 ; visibility: visible'; //make the dropdown menu visible
            //Then we need to access the dropdown menu which is the last child element of the list item.
            document.querySelector('.navbar-wrapper').style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)'; //change the background color of the navbar wrapper
            dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(180deg)';
            //to access the arrows from the list item we need here.
            // Drop down item, then we have to access the link element, which is the first child element of the list item.
            // The arrow is represented with the font awesome icon, which is the child of the link element.
            // So we need again another First element child.
        })
        dropdownItem.addEventListener('mouseout', () => { //the event when the mouse is out 
            dropdownItem.lastElementChild.style.cssText = 'opacity: 0 ; visibility: hidden';
            document.querySelector('.navbar-wrapper').style.background = 'none';
            dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(0)'; //same over but with 0
        })
    })
}


//So in order to avoid refreshing the page manually
//we will make it automatic once we resize the screen size.
window.addEventListener('resize', () => {
    window.location.reload();
})