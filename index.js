// Navbar Section
window.onload = function() {
    const logo = document.querySelector('.nav-logo');
    const menuIcon = document.querySelector('.menu-icon');
    const icon = document.querySelector('.icon')
    const menuItems = document.querySelector('.nav-menu');
    const menuLinks = document.querySelectorAll('.nav-links');

    menuIcon.addEventListener('click', ()=>{
        if(menuItems.classList.contains('active')){
            menuItems.classList.remove('active');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
        else{
            menuItems.classList.add('active');
            icon.classList.add('fa-times');
            icon.classList.remove('fa-bars');
        }
    })

    //Contact section
    const submit = document.querySelector('#submit')
    submit.addEventListener('click', (event) => {
        
        const text='Response sent. Thank you!'
        document.getElementById("output").innerHTML = text;
        setTimeout(function(){
            document.getElementById("output").innerHTML = '';
        }, 2000);
    });
}



