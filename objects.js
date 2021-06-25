//create a class called color, that need a constructor used to asign value
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

class Color {
    constructor (name, shade){
        this.name = name;
        this.shade = shade;
    }
}

class Rainbow {
    constructor () {
        this.colors = [];    // the [] says there is an array
        this.length = 0;
    }
    
    addColor(color) {              // add a methond name () {} add outside the construcor body
        this.colors.push(color);    // this is access the rainbow instence, push is a method need ()
        this.length++;              // this is a number and the ++ increment length by one and reasing it's value
    }
}

var rainbow = new Rainbow();    //this will create a new rainbow instence and store it in th rainbow

colors.forEach (function (value) {
    let color = new Color(value, 5);
    rainbow.addColor(color);
});