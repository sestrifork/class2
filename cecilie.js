

function isOverlapping(rect1, rect2){
    return ((rect2.x > (rect1.x-rect2.width)) && (rect2.x < (rect1.x+rect1.width)) &&
    (rect2.y > (rect1.y-rect2.height)) && (rect2.y < (rect1.y+rect1.height)));
}


function showCecilieLectureSolution(lecture) {
    switch (lecture) {
        case 1:
            var canvas = document.getElementById("myCanvas");
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
            
            break;
            
    }
}