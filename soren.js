function showSorenLectureSolution(lecture) {
    switch (lecture) {
        case 1:
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            {
                var mitArray = new Array();
                for (i=0; i<200; i++) {
                    mitArray[i] = [
                        Math.floor(Math.random()*(canvas.width-5)),
                        Math.floor(Math.random()*(canvas.height-5)),
                        10,
                        5
                    ];
                }

                // Laver noget andet
                for (i=0; i<mitArray.length; i++) {
                    let x = mitArray[i][0];
                    if ((mitArray[i][0] > 20)) {
                        ctx.rect(mitArray[i][0], mitArray[i][1], mitArray[i][2], mitArray[i][3]);
                    }
                }

            }
            
            ctx.stroke();
            break;
        
        case 2:
            break;
            
    }
}