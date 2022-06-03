let navbutton = document.getElementById("nav-hamburger");
let navmenus = document.getElementById("nav-container");

let onClickNavButton = () => {
    if (navmenus.style.display == "flex") {
        navmenus.style.display = "none";
    } else {
        navmenus.style.display = "flex";
    }
};

var coll = document.getElementsByClassName("notice-title");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var icon = this.children[0];
    var content = this.nextElementSibling;
    // console.log(content.style.display);
    if (content.style.display === "" || content.style.display === "block"){
        content.style.display = "none";
        icon.classList.replace('fa-caret-up', 'fa-caret-down');
    //   content.style.maxHeight = null;
    } else {
    //   content.style.maxHeight = content.scrollHeight + "px";
        content.style.display = "block";
        icon.classList.replace('fa-caret-down', 'fa-caret-up');
    } 
  });
}