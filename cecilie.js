var Population;
var Infectionday;
var PopulationDiagram = [];

class DataPoint {
    constructor(day){
    this.day = day;
    this.deceased = 0;
    this.infected = 0;
    this.immune = 0;
    this.noninfected = 0;
    }
}

// laver et diagram
function showChart(populationDatapoints){
    var chart = new CanvasJS.Chart("chartContainer", {
        title:{ 
            text: "Smittespredning Covid-19"
        },
        theme: "light2", //"light1", "light2", "dark1", "dark2"
        //ikke sikker på hvad det gør? om den er true eller false
        animationEnabled: true,
        axisX: {
            interval:1,
            intervalType:"days"
        },
        // gør at en boks dukker op med informationer
        toolTip: {
            shared: true
        },

        data: [
        {
            type: "stackedArea100",
            name: "Immune",
            showInLegend: "true",
            dataPoints:[]
        },
        {
            type:"stackedArea100",
            name: "Deceased",
            showInLegend: "true",
            dataPoints:[]
        },  
        {
            type: "stackedArea100",
            name: "Infected",
            showInLegend: "true",
            dataPoints:[]
        },
        {
            type: "stackedArea100",
            name: "Not infected",
            showInLegend: "true",
            dataPoints:[]
        },
        ]
    });
    // tilføjer nu data til diagrammet, den her vil jeg gerne have uddybet. Options og den der hedder xValue

    populationDatapoints.forEach(datapoint => {
        chart.options.data[0].dataPoints.push({ x: new Date(2020, 03, datapoint.day), y: datapoint.immune});
        chart.options.data[1].dataPoints.push({ x: new Date(2020, 03, datapoint.day), y: datapoint.deceased});
        chart.options.data[2].dataPoints.push({ x: new Date(2020, 03, datapoint.day), y: datapoint.infected});
        debugger;
        chart.options.data[3].dataPoints.push({ x: new Date(2020, 03, datapoint.day), y: datapoint.noninfected});
    });
    //tegner det
    chart.render();
}

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
                }
                //hvis en person har været infected i mere end 14 bliver personen enten immun eller dør
                
                
                for (var k=0; k<Population.length; k++) {
                    var person = new Person(Population[k].x, Population[k].y, Population[k].boxsize);
                    person.moveRandom(10);
                    var overlapping = false;
                    for (var j=0; j<Population.length; j++) {
                        let otherperson = Population[j];
                        if (person.isOverlapping(otherperson)) {
                            if (j != k) {
                                overlapping = true;
                            }    
                        }
                    }
                    if (!overlapping) {
                        Population[k].x = person.x;  
                        Population[k].y = person.y;
                    }
                }
                // hvis personen er smittet skal der gå 14 dage også dør eller overlever personen.
                Population.forEach(person => { person.liveOrDie(Infectionday); });
            
                //Population.forEach(person => { person.moveRandom(10); });

                Population.forEach(person => { person.render(ctx); });
                ctx.stroke();
                

                //laver et diagram med datapunkterne ved at bruge class Datapoint
                var datapoint = new DataPoint(Infectionday);

                //siger til systemet at det skal tegne datapunkterne
                /*Population.forEach(person => { 
                    if (person.infected == DECEASED) {                        
                        datapoint.deceased = datapoint.deceased + 1;
                    }
                    else if (person.infected == IMMUNE) {
                        datapoint.immune = datapoint.immune + 1;
                    }
                    else if (person.infected == NOT_INFECTED) {
                        datapoint.noninfected = datapoint.noninfected +1;
                    }
                    else if (person.infected != NOT_INFECTED && person.infected != IMMUNE && person.infected != DECEASED) {
                        datapoint.infected = datapoint.infected +1;
                    }
                });*/

                //samme som:

                Population.forEach(person => {
                    switch(person.infected){
                        case IMMUNE: datapoint.immune++ ; break;
                        case DECEASED: datapoint.deceased++ ; break;
                        case NOT_INFECTED: datapoint.noninfected++ ; break;
                        default: datapoint.infected++ ;
                    }
                })
                
                //tegner diagrammet.
                PopulationDiagram.push(datapoint);
                showChart(PopulationDiagram)
            
                    


            break; 




    }
}