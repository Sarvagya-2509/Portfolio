
const buttons=document.querySelector('.m')
buttons.addEventListener('click',function(e){
    document.querySelector(".contact").scrollIntoView({
        behavior: "smooth"
    });
})
document.querySelector('#bhai').addEventListener('click',function(e){
    document.querySelector(".contact").scrollIntoView({
        behavior: "smooth"
    });
})
document.querySelector('#abt').addEventListener('click',function(e){
    document.querySelector(".about").scrollIntoView({
        behavior: "smooth"
    }); 
})

document.querySelector('#sk').addEventListener('click',function(e){
    document.querySelector(".skills").scrollIntoView({
        behavior: "smooth"
    }); 
})

document.querySelector('#ps').addEventListener('click',function(e){
    document.querySelector(".Projects").scrollIntoView({
        behavior: "smooth"
    }); 
})
document.querySelector('#hm').addEventListener('click',function(e){
    document.querySelector(".parent").scrollIntoView({
        behavior: "smooth"
    }); 
})
document.querySelector('.b').addEventListener('click',function(e){
    document.querySelector(".Projects").scrollIntoView({
        behavior: "smooth"
    }); 
})
let n = document.querySelector('.title');
let m = document.querySelector('.title1');

let name = "SARVAGYA KHANDELWAL";
let i = 0;

let skn = setInterval(function () {

    if (i < name.length) {

        if (name[i] != ' ') {
            if (i < name.indexOf(' ')) {
                n.innerHTML += name[i];
            }
            else {
                m.innerHTML += name[i];
            }
        }

        i++;
    }
    else {
        n.innerHTML = '';
        m.innerHTML = '';
        i = 0;
    }

}, 1000);

let me=document.querySelector('#me')
me.addEventListener('click',function(e){
window.open('https://drive.google.com/file/d/1V0U5CQngJlxOXOs88-MNu8X6UwA2IWuK/view?usp=drive_link')
});

let resale=document.querySelector('#resale')
resale.addEventListener('click',function(e){
window.open('https://github.com/Sarvagya-2509/Bpit-resale')    
})

let aqua=document.querySelector('#aqua')
aqua.addEventListener('click',function(e){
window.open('https://github.com/Sarvagya-2509/AquaSave')    
})

let ayu=document.querySelector('#ayu')
ayu.addEventListener('click',function(e){
window.open('https://github.com/Sarvagya-2509/ip-sakt-sahayak')    
})


