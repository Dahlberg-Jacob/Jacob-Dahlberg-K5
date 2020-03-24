let body = document.querySelector ("body");
let menu = document.querySelectorAll (".D_menu");
let dropdown = document.querySelectorAll (".A");
let dark_M = document.querySelector (".check");
let droptext = document.querySelectorAll (".droptext");
dark_M.addEventListener('change', darkmode);

let x = 0;

console.log("hej");
function darkmode() {
    x += 1;
    console.log(x);
    if(x == 8){
        x=2;
    }
    if ((x % 2)== 0){
        body.style.backgroundColor = "white";
        body.style.color = "black";
        menu.forEach((e) => {
            e.style.color = "black"
        });
        dropdown.forEach((e) => {
            e.style.backgroundColor = "rgb(248, 248, 248)"
        });
        droptext.forEach((e) => {
            e.style.color = "black"
        });
    }
    else{
        body.style.backgroundColor = "black";        
        body.style.color = "white";
        menu.forEach((e) => {
            e.style.color = "white"
        });
        dropdown.forEach((e) => {
            e.style.backgroundColor = "rgb(7, 7, 7)"
        });
        droptext.forEach((e) => {
            e.style.color = "white"
        });
    }
}