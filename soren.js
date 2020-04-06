function showSorenLectureSolution(lecture) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    // Clear canvas
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    switch (lecture) {
        case 1:
            var rects = [];
            for (i=0; i<10; i++) {
                rects.push({x:i*10, y:i*15, width:10, height:10, strokeStyle:"#7FFF00"});
            }

            rects.forEach(rect => {
                ctx.strokeStyle = rect.strokeStyle;
                ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
            });

            break;
        
        case 2:
            break;
            
    }
    ctx.stroke();
}