/* 
    Contributors: Dallen Corry, Laura Anderson, Jacob Hamilton
    Project name: Aperture Science
    Date: 12/05/2022
    Version 1.0
 */

//Form Control
function suForm() {
    document.getElementById("form-con").style.display = "block";
    document.getElementById("optNot").style.display = "block";
    document.getElementById("science-form").style.display = "none";
    document.getElementById("subject-form").style.display = "block";
}

function scForm() {
    document.getElementById("form-con").style.display = "block";
    document.getElementById("optNot").style.display = "block";
    document.getElementById("science-form").style.display = "block";
    document.getElementById("subject-form").style.display = "none";
}

/*These don't work with images that have max-width set in CSS*/
function enlarge(item) {
    item.style.width = "300px";
}

function normalImg(item) {
    item.style.width = "200px";
}