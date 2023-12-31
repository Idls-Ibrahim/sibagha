// open or close the nave bar
document.querySelector('.nav-bar').onclick = ()=>{
    document.querySelector('.nav').classList.add('open');
}
document.querySelector('.close').onclick = ()=>{
    document.querySelector('.nav').classList.remove('open');
}
// switch dark or light mode
const body = document.querySelector('body');

if(window.localStorage.getItem("theme")=="dark"){
    body.classList.add("dark");
}
else{
    body.classList.remove("dark");
}

document.querySelector('.moon').onclick = ()=>{
    body.classList.add("dark");
    window.localStorage.setItem("theme", body.className);
    document.querySelector('.sun').classList.remove('remove');
    document.querySelector('.moon').classList.add('remove');
}
document.querySelector('.sun').onclick = ()=>{
    body.classList.remove('dark');
    window.localStorage.setItem("theme", body.className);
    document.querySelector('.sun').classList.add('remove');
    document.querySelector('.moon').classList.remove('remove');
}
;
window.onscroll = ()=>{
    document.querySelector('.nav').classList.remove('open');
    if(this.scrollY>=50){
        document.querySelector('header').style.cssText = 'background: var(--header--bg); box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px;';
    }
    else{
        document.querySelector('header').style.cssText = 'background: none';
    }
    if(this.scrollY>=1800){
        document.querySelector('.btn-up').classList.remove("remove");
    }else{
            document.querySelector('.btn-up').classList.add("remove");
    }
}
document.querySelector('.up').onclick = ()=>{
    window.scrollTo({
        top :0 ,
        behavior : 'smooth',
    });
};
// choise colors
const imgs = document.querySelectorAll('.list-color span img');
const screen = document.querySelector('.full-scren');

imgs.forEach((ele)=>{
    ele.onclick = ()=>{
        const element = ele.getAttribute('src');
        let a = "background : url("
        let b = ")";
        screen.style.cssText =`${a}${element}${b}`;
    }
})

const colors = document.querySelectorAll('.divs div');
const screenTwo = document.querySelector('.scren');
const inputColor = document.querySelector("#color");

inputColor.oninput = ()=>{
    screenTwo.style.backgroundColor =  inputColor.value ;
}

colors.forEach((ele)=>{
    ele.addEventListener('click', (ele)=>{
        screenTwo.style.backgroundColor = ele.currentTarget.dataset.color;
    })
})

