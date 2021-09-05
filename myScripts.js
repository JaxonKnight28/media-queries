function openNav () {
    document.getElementById('sidenav').style.left = '0px'
}
function closeNav () {
    document.getElementById('sidenav').style.left = '-250px'
}

window.onresize = () => {
    if(window.innerWidth > 700)
        openNav();
    else
        closeNav();
}