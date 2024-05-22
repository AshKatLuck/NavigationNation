const overylay=document.getElementById('overlay');

const nav1=document.getElementById('nav-1');
const nav2=document.getElementById('nav-2');
const nav3=document.getElementById('nav-3');
const nav4=document.getElementById('nav-4');
const nav5=document.getElementById('nav-5');

const menuBars=document.getElementById("menu-bars");
const bar1=document.getElementById("bar1");
const bar2=document.getElementById("bar2");
const bar3=document.getElementById("bar3");

const navs=[nav1,nav2,nav3,nav4,nav5];

//Function to Animate the nav items one by one
function navAnimation(direction1, direction2){
    navs.forEach((nav,i)=>{
        nav.classList.replace(`slide-${direction1}-${i+1}`,`slide-${direction2}-${i+1}`);
    })
}

// TO toggle the menu icon bars
function toggleMenu(){
    menuBars.classList.toggle("change");
    overylay.classList.toggle("overlay-active");
    if(overylay.classList.contains("overlay-active")){
        overylay.classList.replace("overlay-slide-left", "overlay-slide-right");
        // Animate the nav items
        navAnimation("out", "in");
        // nav1.classList.remove('slide-out-1');
        // nav1.classList.add('slide-in-1');

        // nav2.classList.remove('slide-out-2');
        // nav2.classList.add('slide-in-2');

        // nav3.classList.remove('slide-out-3');
        // nav3.classList.add('slide-in-3');

        // nav4.classList.remove('slide-out-4');
        // nav4.classList.add('slide-in-4');

        // nav5.classList.remove('slide-out-5');
        // nav5.classList.add('slide-in-5');
    }else{
        overylay.classList.replace("overlay-slide-right", "overlay-slide-left");

        //Animate the nav items
        navAnimation("in","out");
        
        // nav1.classList.remove('slide-in-1');
        // nav1.classList.add('slide-out-1');

        // nav2.classList.remove('slide-in-2');
        // nav2.classList.add('slide-out-2');

        // nav3.classList.remove('slide-in-3');
        // nav3.classList.add('slide-out-3');

        // nav4.classList.remove('slide-in-4');
        // nav4.classList.add('slide-out-4');

        // nav5.classList.remove('slide-in-5');
        // nav5.classList.add('slide-out-5');

       
    }
}


// Event Listeners
menuBars.addEventListener('click',toggleMenu);
navs.forEach(nav=>{
    nav.addEventListener('click',toggleMenu);
})