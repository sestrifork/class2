function showSorenLectureSolution(lecture) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    // Clear canvas
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#7FFF00"; //dark green

    switch (lecture) {
        case 1:
            for (i=0; i<10; i++) {
                ctx.strokeRect(i*20, i*20, 10, 10);
            }
            break;
        
        case 2:
            break;
            
    }
    ctx.stroke();
}