let menubtn = document.querySelector(".hamb-menu");
let open = document.querySelector(".open");
let close = document.querySelector(".close");
let nav = document.querySelector(".navbar");
let boxDrop = document.querySelectorAll(".dropmenu-box");
let btnDrop = document.querySelectorAll(".btn-drop");
let drop = document.querySelectorAll(".dropmenu-sub");



/*script for open and close navbar menu (mobile and tablet)*/ 
menubtn.addEventListener("click", () => {
  open.classList.toggle("open--close")
  close.classList.toggle("close--open")
  nav.classList.toggle("navbar--open")
})


boxDrop.forEach(i => {
  i.children[0].addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      if(i.children[2].classList.contains("dropmenu-sub--open")) {
        i.children[2].classList.remove("dropmenu-sub--open")
        i.children[1].classList.remove('arrows--rot');
        i.children[0].classList.remove('active');
      } else{
        hideLists();
        i.children[2].classList.add("dropmenu-sub--open");
        i.children[1].classList.add('arrows--rot');
        i.children[0].classList.add('active');
      }
  })
});

function hideLists() {
  boxDrop.forEach(i => {
    i.children[2].classList.remove("dropmenu-sub--open");
    i.children[1].classList.remove('arrows--rot');
    i.children[0].classList.remove('active');
  })
}


document.addEventListener('click', e => {
  if (e.target===boxDrop) {
  }
  else {
      hideLists();
  }
})