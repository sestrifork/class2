
//ændre i funktion, så det gælder for alle rektangler

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

function showCecilieLectureSolution(lecture) {
    switch (lecture) {
        case 1:
            var canvas = document.getElementById("myCanvas1");
            var ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            /*
            {
                var mitArray = new Array();
                for (i=0; i<200; i++) {
                    mitArray[i] = [
                        Math.floor(Math.random()*(canvas.width-5)),
                        Math.floor(Math.random()*(canvas.height-5)),
                        5,
                        5
                    ]
                }

                
                for (i=0; i<mitArray.length; i++) {
                    let x = mitArray[i][0];
                    //if ((mitArray[i][0] > 50)) {
                        ctx.rect(mitArray[i][0], mitArray[i][1], mitArray[i][2], mitArray[i][3]);
                    //}
                }

            }
            */

            var rect1 = {x:50, y:50, width:100, height:100};
            ctx.strokeStyle = "#000000";
            ctx.strokeRect(rect1.x, rect1.y, rect1.width, rect1.height);
            
            var rect2 = {x:Math.random()*canvas.width, y:Math.random()*canvas.height, width:25, height:25};
            // hvis rect2 overlapper rect1, så skal vi tegne med rødt
            if (isOverlapping(rect1, rect2)) {
                ctx.strokeStyle = "#FF0000";
            }
            ctx.strokeRect(rect2.x, rect2.y, rect2.width, rect2.height);

            ctx.stroke();
            break;
            
        
        case 2:
            /*
        //vælg canvas jeg skal bruge
            var canvas = document.getElementById("myCanvas2");
            var ctx = canvas.getContext("2d");


            // gør klar til at kunne starte med at tegne på canvas
            ctx.beginPath();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            //starter med at tegne en rektangel på canvassen
            var rectangle = {x:Math.random()*canvas.width, y:Math.random()*canvas.height, width:10, height:10 };
            ctx.strokeStyle="00FF00";
            ctx.strokeRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
            
            //laver endnu en rektangel
            var rectangle2 = {x:Math.random()*canvas.width, y:Math.random()*canvas.height, width:10, height:10 };
            ctx.strokeStyle="00FF00";
            ctx.strokeRect(rectangle2.x, rectangle2.y, rectangle2.width, rectangle2.height);
            */
           
            var canvas = document.getElementById("myCanvas2");
            var ctx = canvas.getContext("2d");

            // Clear canvas
            ctx.beginPath();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        
            var rects = [];
            var boxsize = 10;
            
            // Først laver jeg et rektangel
            for (i=0; i<98 ; i++) {
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
                ctx.strokeStyle = "0000FF";
                ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
            }


            ctx.stroke();       
                

            
            

            break;
           



    }
}