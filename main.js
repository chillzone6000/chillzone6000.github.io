const coords = {x: 0, y: 0}

window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;

    console.log(e)
});