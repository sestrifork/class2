function showKatrineLectureSolution(lecture) {
    switch (lecture) {
        case 1:
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.rect(100,100,10,10);
            ctx.rect(150,150,10,10);
            ctx.stroke();
            break;
        
        case 2:
            break;
            
    }
}