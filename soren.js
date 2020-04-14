class Person {
    constructor(x, y, boxsize, infectionDay) { 
        this.x = x;
        this.y = y;
        this.boxsize = boxsize;
        this.infectionDay = infectionDay; 
    }
}

function isOverlapping(rect1, rect2){
    return ((rect2.x > (rect1.x-rect2.width)) && (rect2.x < (rect1.x+rect1.width)) &&
    (rect2.y > (rect1.y-rect2.height)) && (rect2.y < (rect1.y+rect1.height)));
}

function getRandomRect(width, height, boxsize){
    return {
        x:Math.floor(Math.random()*(width-boxsize)), 
        y:Math.floor(Math.random()*(height-boxsize)), 
        width:boxsize, 
        height:boxsize, 
        strokeStyle:"#7FFF00"
    };
}

function showSorenLectureSolution(lecture) {
    switch (lecture) {
        case 1:
            var canvas = document.getElementById("myCanvas1");
            var ctx = canvas.getContext("2d");
            
            // Clear canvas
            ctx.beginPath();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        
            var rects = [];
            for (i=0; i<10 ; i++) {
                rects.push({x:i*10, y:i*15, width:10, height:10, strokeStyle:"#7FFF00"});
            }

            rects.forEach(rect => {

                ctx.strokeStyle = rect.strokeStyle;
                ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
           
            });

            // the same as
            for (i=0; i<rects.length; i++) {
                var rect = rects[i];
                ctx.strokeStyle = rect.strokeStyle;
                ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
            }
            ctx.stroke();       

            break;
        
        case 2:
            var canvas = document.getElementById("myCanvas2");
            var ctx = canvas.getContext("2d");
            
            // Clear canvas
            ctx.beginPath();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        
            var rects = [];
            var boxsize = 50;
            
            // Først laver jeg et rektangel
            for (i=0; i<1 ; i++) {
                rects.push(getRandomRect(canvas.width, canvas.height, boxsize));
            }
      
            // så laver jeg et mere og tjekker om de overlapper
            var rect2 = getRandomRect(canvas.width, canvas.height, boxsize);
            if (isOverlapping(rects[0], rect2)) {
                console.log("De overlapper, så jeg smider det væk");
            } else {
                rects.push(rect2);
            }

            // the same as
            for (i=0; i<rects.length; i++) {
                var rect = rects[i];
                ctx.strokeStyle = rect.strokeStyle;
                ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
            }
            ctx.stroke();       
            break;

            case 3:
                var canvas = document.getElementById("myCanvas2");
                var ctx = canvas.getContext("2d");
                
                // Clear canvas
                ctx.beginPath();
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            
                var rects = [];
                var boxsize = 50;
                
                // Først laver jeg et rektangel
                for (i=0; i<1 ; i++) {
                    rects.push(getRandomRect(canvas.width, canvas.height, boxsize));
                }
          
                // så laver jeg et mere og tjekker om de overlapper
                var rect2 = getRandomRect(canvas.width, canvas.height, boxsize);
                if (isOverlapping(rects[0], rect2)) {
                    console.log("De overlapper, så jeg smider det væk");
                } else {
                    rects.push(rect2);
                }
    
                // the same as
                for (i=0; i<rects.length; i++) {
                    var rect = rects[i];
                    ctx.strokeStyle = rect.strokeStyle;
                    ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
                }
                ctx.stroke();       
                break;            
    }

}