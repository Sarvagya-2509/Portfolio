
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