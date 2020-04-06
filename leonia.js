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

        break;
    }
}