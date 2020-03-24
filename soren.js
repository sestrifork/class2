function showSorenLectureSolution(lecture) {
    switch (lecture) {
        case 1:
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");

            
            for (i=0; i<10; i++) {
                function drawrect() {
                    ctx.beginPath();
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.strokeRect(i*10, i*10, 10, 10);
                    ctx.stroke();
                }
                setTimeout(drawrect,5000);
            }
            
            break;
        
        case 2:
            break;
            
    }
}