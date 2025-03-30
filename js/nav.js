function openNav() {
    var sidenav = document.getElementById("sidenav");
    sidenav.style.width = "100%";
    var children = sidenav.children;
    for (var i = 0; i < children.length; i++) {
        children[i].tabIndex = String(i + 2);
    }
}

function closeNav() {
    var sidenav = document.getElementById("sidenav");
    sidenav.style.width = "0%";
    var children = sidenav.children;
    for (var i = 0; i < children.length; i++) {
        children[i].tabIndex = "-1";
    }
}