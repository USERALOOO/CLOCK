let d = new Date();
setInterval(() => {
    d = new Date();
    let hours = d.getHours() * 30;
    let minutes = d.getMinutes() * 6;
    let seconds = d.getSeconds() * 6;
    let sec = document.querySelector('.seconds');
    let min = document.querySelector('.minutes');
    let hou = document.querySelector('.hours');
    sec.style.transformOrigin = "100% 100%";

    sec.style.transform = "rotate(" + seconds + "deg)";
    min.style.transformOrigin = "100% 100%";

    min.style.transform = "rotate(" + minutes + "deg)";
    hou.style.transformOrigin = "100% 100%";

    hou.style.transform = "rotate(" + hours + "deg)";





}, 1000)