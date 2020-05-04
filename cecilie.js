var Population;
var Infectionday;

function showCecilieLectureSolution(lecture) {

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
            strokeStyle:"#0FFF00"
        };
    }
    function getColorRedBlackGreenRandomC() {
        //der findes et tilfældigt nummer mellem 0 og 2
        var random_number = (Math.floor(Math.random()*3));
        console.log(random_number)
        //skift mellem de tilfældige numre
        switch (random_number) {
            case 0:
                //farven er rød når det tilfældige tal er 0
                console.log("rektanglerne er røde");
                return "#FF0000";
                
                break;
            case 1: 
                // farven er sort når det tilfældige tal er 1
                console.log("rektanglerne er sorte");
                return "#000000";
                
                break;
            default:  
                //farven er grøn hvis ikke det tilfældige nummer er 0 eller 1
                console.log("rektanglerne er grønne");
                return "#00FF00";
    
        }
    
    }
    switch (lecture) {
        case 1:
            var canvas = document.getElementById("myCanvas1");
            var ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        
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
            
            var canvas = document.getElementById("myCanvas2");
            var ctx = canvas.getContext("2d");
            

            // Clear canvas
            ctx.beginPath();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        
            var rects = [];
            var boxsize = 10;
            
            // Først laver jeg 99 rektangel
            do {
                var rect2 = getRandomRect(canvas.width, canvas.height, boxsize);
                let overlapping = false;
                for (j=0; j<rects.length; j++){
                    if (isOverlapping(rects[j], rect2)) {
                       overlapping = true; 
                       console.log("De overlapper, så jeg smider det væk");
                    }       
                }
                if (overlapping == false){
                    rects.push(rect2);
                }
            }
            while ( rects.length<100 ) 
                    
            
            // the same as, farven sættes til funktionen.
            for (i=0; i<rects.length; i++) {
                var rect = rects[i];
                debugger
                ctx.strokeStyle = getColorRedBlackGreenRandomC();
                //ctx.strokeStyle = "#000000"
                //ctx.strokeStyle =
                ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
            }

            ctx.stroke();       
            

            break;
        
        case 4:
            var canvas = document.getElementById("myCanvas4");
            var ctx = canvas.getContext("2d");
            var populationSize = Math.floor(Math.random()*50);
        
            // Clear canvas
            ctx.beginPath();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        
            var population = [];
            var boxsize = 10;
            
            // Først personen i populationen bliver født
            let newPerson = new RandomPerson(canvas.width, canvas.height, boxsize);
            population.push(newPerson);
        
            // så laver jeg et mere og tjekker om den nye person overlapper med de andre personer
            for (var i=0; population.length<populationSize; i++) {
                newPerson = new RandomPerson(canvas.width, canvas.height, boxsize);
                var overlapping = false;
                for (var j=0; j<population.length; j++) {
                    let person = population[j];
                    if (person.isOverlapping(newPerson)) {
                        overlapping = true;

                    }
                }
                if (!overlapping) {
                    population.push(newPerson);
                    
                }
            }
            //her bliver 3 personer smittet på dag 1
            if (population.length>2) {
                population[0].setInfect(1);
                population[1].setInfect(1);
                population[2].setInfect(1);
            }          
            // draw the population
            /*
            for (i=0; i<population.length; i++) {
                var person = population[i];
                person.render(ctx);
                    
            }
            */
            population.forEach(person => { person.render(ctx); });
            ctx.stroke();
            break;
            
            case 5:
                var canvas = document.getElementById("myCanvas5");
                var ctx = canvas.getContext("2d");
                //der bliver minimum lavet 25 personer
                var populationSize = 25+Math.floor(Math.random()*50);
                var Tempboxsize = 10;

                 //Definition af smittezone for en smittet person, 
                //derfor bruges isoverlapping boxsize ganget med DANGER, for at gøre zonen større.
                    
                // Clear canvas
                ctx.beginPath();
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // hvis populationen ikke eksistere laves der en ny population.
                if (Population == null) {
                    Population = new Array();
                    Infectionday = 1;
                    for (var i=0; Population.length<populationSize; i++) {
                        let newPerson = new RandomPerson(canvas.width, canvas.height, Tempboxsize);
                        newPerson.setNotinfected();
                        var overlapping = false;
                        for (var j=0; j<Population.length; j++) {
                            let person = Population[j];
                            if (person.isOverlapping(newPerson)) {
                                overlapping = true;
        
                            }
                        }
                        if (!overlapping) {
                            Population.push(newPerson);    
                        }
                    }
                    //her bliver 3 personer smittet på dag 1
                    if (Population.length>5) {
                        Population[0].setInfect(Infectionday);
                        Population[1].setInfect(Infectionday);
                        Population[2].setInfect(Infectionday);
                        Population[3].setImmune(Infectionday);
                        Population[4].setDeceased(Infectionday);

                    }
                             
                }
                else {
                    Infectionday = Infectionday + 1;
                    console.log("Infectionday:",Infectionday);
                
                    // Sprede virus ud
                    // For alle dem, der er smittet skal vi smitte dem i nærheden for hver dag der går
                    Population.forEach(person => {
                        if (person.isInfected() && (!person.isInfectedToday(Infectionday))) {
                            //debugger
                            for (var i=0; i<Population.length; i++) {
                                if (person.isInsideInfectionzone(Population[i])) {
                                    Population[i].setInfect(Infectionday);
                                }
                            }
                        }
                    });
                /*Population.forEach(Infectionday => { 
                    for (var k=0; k<Population.length; k++);
                        Population[k].moveRandom(boxsize) });*/
                }
                

                Population.forEach(person => { person.render(ctx); });
                ctx.stroke();
                
            break; 




    }
}