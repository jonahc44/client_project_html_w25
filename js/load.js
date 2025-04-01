function load() {
    var sidenav = document.getElementById("sidenav");
    sidenav.style.width = "0%";
    var children = sidenav.children;
    for (var i = 0; i < children.length; i++) {
        children[i].tabIndex = "-1";
    }

    if (screen.width >= 900) {
        document.getElementById("menu").remove();
        document.getElementById("sidenav").remove();

        // Set up events for topnav children
        // var topnav = document.getElementById("topnav");
        // var topChildren = topnav.children;
        // for (var i = 1; i < topChildren.length; i++) {
        //     topChildren[i].addEventListener(
        //         "mouseover",
        //         (event) => {
        //             event.target.style.borderLeft = "5px";
        //             event.target.style.zIndex = "50";
        //         },
        //         false
        //     )
        // }
    } else {
        document.getElementById("topnav").remove();
    }
}