const SPACEBETWEENBOXES = 3;
const VIRUS_DANGER = 3;
const NOT_INFECTED = 0;
const DECEASED = 999998;
const IMMUNE = 999999;
const ALL = 999999;
const SICKNESSPERIOD = 14;
const DECEASE_PERCENTAGE = 2; 

class Person {
    // class methods
    constructor(x, y, boxsize) { 
        this.x = x;
        this.y = y;
        this.boxsize = boxsize;
        this.infected = NOT_INFECTED; 
    }
    isAlive() {
        return (this.infected != DECEASED);
    }

    isInfectedToday (infectionDay) {
        return (infectionDay == this.infected);
    }
    isInfected() {
        return ((this.infected != NOT_INFECTED) && 
        (this.infected != IMMUNE) &&
        (this.infected != DECEASED));
    }
    isOverlappingBoxsize(otherPerson, boxsize) {
        return (
            (Math.abs(this.x-otherPerson.x) < (boxsize + SPACEBETWEENBOXES)) && 
            (Math.abs(this.y-otherPerson.y) < (boxsize + SPACEBETWEENBOXES))) ;
    }

    isOverlapping(otherPerson) {
        var boxsize = Math.max(this.boxsize, otherPerson.boxsize);
        return this.isOverlappingBoxsize(otherPerson, boxsize);
    }

    isInsideInfectionzone(infectedPerson) {
        return this.isOverlappingBoxsize(infectedPerson, infectedPerson.boxsize*VIRUS_DANGER) ;
    }

    setInfect(dayCounter) {
        if (this.infected == NOT_INFECTED) {
            this.infected = dayCounter;
        }
    }
    setImmune() {
        if (this.infected == DECEASED) {
            console.log("Error: Trying to make DECEASED IMMUNE");
        } else {
            this.infected = IMMUNE;
        }
    }

    setDeceased() {
        this.infected = DECEASED;
    }
    setNotinfected(){
        this.infected = NOT_INFECTED;
    }

    updateImmunity(dayCounter) {
        if(Math.abs(this.infected - dayCounter) > SICKNESSPERIOD) {
            if(this.isInfected()) {
                this.infected = IMMUNE;
            }
        }
    }

    drawOn2DContext(ctx) {
        switch (this.infected) {
            case NOT_INFECTED:
                ctx.beginPath()
                ctx.strokeStyle = "#FAEBD7"; //green
                ctx.strokeRect(this.x, this.y, this.boxsize, this.boxsize);
                ctx.closePath()
                break; 
                
            case IMMUNE: 
                ctx.beginPath()        
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x, this.y + this.boxsize);
                ctx.moveTo(this.x - 0.5 * this.boxsize, this.y + 0.5 * this.boxsize);
                ctx.lineTo(this.x + 0.5 * this.boxsize, this.y + 0.5 * this.boxsize);
                ctx.strokeStyle = "#0000FF";
                ctx.stroke();
                ctx.closePath()                
                break;

            case DECEASED: 
                ctx.beginPath()    
                ctx.moveTo(this.x + 0.5 * this.boxsize, this.y);
                ctx.arc(this.x, this.y, this.boxsize * 0.5 , 0 , 2 * Math.PI);
                ctx.strokeStyle = "#000000"; // black 
                ctx.stroke();
                ctx.closePath()
                break ;

            default: 
                ctx.beginPath()
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.boxsize, this.y+this.boxsize);
                ctx.moveTo(this.x + this.boxsize, this.y);
                ctx.lineTo(this.x, this.y+this.boxsize);
                ctx.strokeStyle = "#FF0000"; //red
                ctx.stroke();
                ctx.closePath()
        }
    }
    
    render(ctx) {
        this.drawOn2DContext(ctx);
    }

    moveRandom(moveSize) {
        var deltaX = Math.round(Math.random()*moveSize-moveSize/2);
        var deltaY = Math.round(Math.random()*moveSize-moveSize/2);

        if (this.x+deltaX > 0) {
            this.x = this.x + deltaX;
        }
        if (this.y+deltaY > 0) {
            this.y = this.y + deltaY;
        }
    }

    liveOrDie(dayCounter) {
        if (
            (this.isInfected()) && 
            ((dayCounter-this.infected)>SICKNESSPERIOD)
            ) {
                var diefactor = Math.random()*100;
                if (diefactor < DECEASE_PERCENTAGE) {
                    this.infected = DECEASED;
                } else {
                    this.infected = IMMUNE;
                } 
        }
    }

    static unitTest(testcase) {
        var start_time = new Date();
        var tests = [];
        function unitTest1() {
            var newPerson1 = new Person(100,100,50);
            var newPerson2 = new Person(100,100,50);
            var testReport;

            if (newPerson1.isOverlapping(newPerson2)) {
                testReport = "Person test 0 passed";
            } else {
                testReport = "!Person test 0 NOT passed!";
            }
            console.log(testReport);
            tests.push([1, testReport]);
        }
        switch (testcase) {
            case 0: // Test basic overlap
                unitTest1();
                break;
            
            // Insert new test here
            default:
                unitTest1();
                break;
        }
        var stop_time = new Date();
        console.log(tests.length + " tests performed in " + (stop_time.getTime()-start_time.getTime()) + " ms");
    }
}

class RandomPerson extends Person {
    constructor(canvassize_x, canvassize_y, boxsize){
        super(
            Math.floor(Math.random() * (canvassize_x-boxsize)-1)+1,
            Math.floor(Math.random() * (canvassize_y-boxsize)-1)+1,
            boxsize
            );
          this.name ="RandomPerson";  
    }
}

function unittestPerson() {
    // Test1
    {
        let person1 = new Person(10,10,20);
        let person2 = new Person(20,20,10);

        if (!person1.isOverlapping(person2)){
            console.log("Test not passed: Not overlapping");
        }
    }

    // Test2
    {
        let person3 = new RandomPerson(20);
        if (!person3.isAlive()) {
            console.log("Test not passed: Person is ALIVE");
        }
    }
}

unittestPerson();
