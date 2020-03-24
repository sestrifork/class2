function showKatrineLectureSolution(lecture) {
    switch (lecture) {
        case 1:
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            {
                var KArray = new Array();
                for (i=0; i<200; i++) {
                    mitArray[i] = [
                        Math.floor(Math.random()*(canvas.width-5)),
                        Math.floor(Math.random()*(canvas.height-5)),
                        5,
                        5
                    ];
                }

            ctx.rect(20,20,10,10);
            ctx.rect(15,15,10,10);
            ctx.stroke();
            break;
        
        case 2:
            break;
            
    }
}