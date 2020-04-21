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
        strokeStyle: "#FF0000"
    };
}


function showLeoniaLectureSolution(lecture) {
    switch (lecture) {
        case 1:
            var canvas = document.getElementById("myCanvas1");
            // Vi laver et object vi kan tegne med
            var ctx = canvas.getContext("2d");
            // Fortæl objektet at vi vil tegne
            ctx.beginPath();
            
            // Vi laver et array (en liste) til at holde (store) vores rektangler.
            // Hvert regtangle adskilles med komma.
            // Vores array kalder vi 'rectArray' 
            var rectArray = 
            [ctx.arc(95, 50, 40, 0, 2 * Math.PI),
                ctx.rect(50,100,10,10), 
                ctx.rect(150,150,20,20),
                ctx.rect(75,75,14,14),
                ctx.rect(25,25,15,15),
                ctx.rect(30,30,20,30),
                ctx.rect(150,150,14,14),
                ctx.rect(100,75,15,15),
                ctx.rect(90,45,20,20)];

            // Nu indkodes for loopet
            for (var i=0; i<rectArray.length; i++) {
                rectArray[i];
                ctx.stroke();
            }
        break ;

        
        case 2:
            var canvas = document.getElementById("myCanvas2");
            var ctx = canvas.getContext("2d");
            //clear canvas 
            ctx.beginPath();
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            var rects = [];
            var boxsize = 5;

            //Der tilføjes (push()) random retangler
            //for (i=0; i<1; i++) {
                //rects.push(getRandomRect(canvas.width, canvas.height, boxsize));
            //}
            while (rects.length<50) {
                //Retangel 2 tilføjes:
                var rect2 = getRandomRect(canvas.width, canvas.height, boxsize);

                var overlapping = false;
                for (i=0; i<rects.length; i++) {
                    if (isOverlapping(rects[i], rect2)) {
                        overlapping = true;
                        console.log("Overlapping"); 
                    }
                }
                // Hvis retanglet ikke overlapper de andre, tilføjes de i arrayet. 
                if (overlapping == false) {
                    rects.push(rect2)
                }
            }
            //koden skrives ud - yes!
            for (i=0; i<rects.length; i++) {
                var rect = rects[i];
                ctx.strokeStyle = getColorRedBlackGreenRandom()
                //ctx.strokeStyle = "#FF0000" svt. at vælge én bestemt farve 
                //ctx.strokeStyle = rect.strokeStyle fungerer ikke - hvorfor?
                ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
            }

            ctx.stroke();       

        break;

    }
}