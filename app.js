console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printodd (count){
    if(count <0) count = count * -1
    
    for(let i = 0 ; i <= count; i ++){
    
    if( i % 2 != 0){
        console.log(i);
    }
    
}

}

printodd(-200);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(name,age){
    let aboveSixteen = `"Congrats ${name} You can drive!"`
    let belowSixteen = `"Sorry ${name} but you need to wait until your 16."`

    if(age<16){

        console.log(belowSixteen)
    }

    else if(age >=16){
        console.log(aboveSixteen)

    }

    else{
        console.log("Sorry either a name or age was not passed in, please try again")
    }
}

checkAge("Joseph",21);

console.log("EXERCISE 3:\n==========\n");

function cartesisanPlane (x,y){

    let xAxis=`"(${x},${y}) is on the x axis"` 

    let yAxis=`"(${x},${y}) is on the y axis"` 

    let quad1=`"(${x},${y}) is in Quadrant 1"` 
    
    let quad2=`"(${x},${y}) is in Quadrant 2"`
    
    let quad3=`"(${x},${y}) is in Quadrant 3"` 

    let quad4=`"(${x},${y}) is in Quadrant 4"` 

    let origin=`"(${x}, ${y}) is on the origin'`


    if(x==0 && y==0){
        console.log(origin)
    }
    
    else if(x==0 && y !=0 ){
        console.log(xAxis)
    }

   else if(y==0 && x!=0){
        console.log(yAxis)

    }

   else if(x>0 && y>0){
        console.log(quad1)
    }

   else if (x<0 && y >0){
        console.log (quad2)
    }

   else if(x<0 && y<0){
        console.log(quad3)
    }

    else{
       console.log(quad4)
    }

}

cartesisanPlane(-1,-1);
cartesisanPlane(0,10);
cartesisanPlane(10,0);
cartesisanPlane(-2,1);
cartesisanPlane(2,-1);
cartesisanPlane(2,2);
cartesisanPlane(0,0);
cartesisanPlane(-2,0)


console.log("EXERCISE 4:\n==========\n");

function typeOfTriangle(side1,side2,side3){

    let equal = `"-Sides ${side1}, ${side2}, ${side3} make an equilateral triangle"`

    let isos = `"-Sides ${side1}, ${side2}, ${side3} make an isosceles triangle"`

    let scal = `"-Sides ${side1}, ${side2}, ${side3} make an scalene triangle"`

    let invalid = `"-Sides ${side1}, ${side2}, ${side3} make an invalid triangle"`

    if(side1==side2 && side1==side3){
        console.log(equal)
    
    }
    

  else if((side1+side2)>side3 && (side2+side3)> side1 && (side3+side1)>side2 && side1==side2 || side1==side3){
        console.log(isos)
    }

   else if((side1+side2)>side3 && (side2+side3)> side1 && (side3+side1)>side2 ){
        console.log(scal)
    }

    else{
        console.log(invalid)
    }


   

}

typeOfTriangle(10,20,15)
typeOfTriangle(2,2,2)
typeOfTriangle(2,5,1)
typeOfTriangle(1,2,1)
typeOfTriangle(1,1,2)
typeOfTriangle(2,1,1)
typeOfTriangle(1,1,2)


console.log("EXERCISE 5:\n==========\n");

function dataPlanStatus(planLimit, day, usage){
    let periodLength=30;

    let remainingDays= periodLength-day;

    let remainingData=planLimit-usage;

    let currentAverage= usage/day;

    let projectedAverage= planLimit/periodLength

    let remainingAverage= usage/remainingDays

    let continuedUsage= (currentAverage*periodLength) - planLimit

    let recomendedUsage = remainingData/remainingDays

    let rollover= planLimit -(currentAverage*periodLength);


    console.log(`${day} days(s) used, ${remainingDays} days(s) remaining`);

    console.log(`Average projected use: ${projectedAverage} GB/day`)

    if(usage>= planLimit){
        console.log(`'You have exceeded or met you plan limit of ${planLimit} GB by ${usage-planLimit} GB`)
    }

  else if (currentAverage> projectedAverage){

        console.log(`'You are EXCEEDING your average daily use (${currentAverage}GB/day'`)
        console.log(`'continuing this high usage, you'll exceed your data plan by ${continuedUsage} GB'`)
        console.log(`'To stay below your data plan, use no more than ${recomendedUsage} GB/day'`)
    }

    else{
        console.log(`'Your usage of ${currentAverage} GB/day is at or below your recomended daily usage'`)
        console.log(`' If you continue at this usage level you will roll over ${rollover} GB into next month `)
    }


}

dataPlanStatus(75,20,40)
