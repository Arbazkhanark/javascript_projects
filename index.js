'use strict'
// const arbaaz={
//     firstname:'arbaaz',
//     lastname:'khan',
//     birthYear:2001,
//     course:'BCA',
//     DriverLicence: true,
//     friends:['Ajay','Ayush','Laxman','Ankit','sourabh'],
    
//     calAge: function(birthYear){
//         return 2024- this.birthYear;
//     },
    
//     // calAge: function(){
//     //     this.age=2024-this.birthYear;
//     //     return this.age; 
//     // },

// //below this will show wrong output    
     
//     // licence: function(DriverLicence){
//     //     if (DriverLicence===true && this.calAge()>=18){
//     //         return `${this.firstname} is a ${this.calAge()} year old ${this.work} and he has Driving Licence`;
//     //     }else{
//     //         return `${this.firstname} is a ${this.calAge()} year old ${this.work} and he has no Driving Licence`;
//     //     }
//     // },

// //this will show right output
//     getSummary: function(){
//         return `${this.firstname} is a ${this.calAge()} year old ${this.work} and he has ${this.DriverLicence ?'a':'no'} driver's license.`
//     }
// }

// console.log(arbaaz);

// arbaaz.work='Student';
// console.log(`${arbaaz['firstname']} has ${arbaaz.friends.length} friends, and his best friend is ${arbaaz.friends[0]}`);
// //const res=arbaaz.licence();
// //console.log(res);
// console.log(arbaaz.getSummary());



// //--------222----------
// const mark={
//     fullName:'mark miller',
//     mass:79,
//     height:1.69
// }

// const john={
//     fullName:'John smith',
//     mass:92,
//     height:1.95
// }

// function calcBmi( mass,height){
//     return mass/height**2
// }

// const markBMI=(calcBmi(mark.mass,mark.height));
// const johnBMI=(calcBmi(john.mass,john.height));

// if(johnBMI>markBMI){
//     console.log(`${john.fullName}'s BMI(${johnBMI}) is higher than mark's(${markBMI})`) ;
// }else{
//     console.log(`${mark.fullName}'s BMI(${markBMI}) is higher than john's BMI(${johnBMI}) `) ;
// }












// //2-----------------------------
// const mark={
//     fullName:"Mark Miller",
//     mass:78,
//     height:1.69
// };

// const john={
//     fullName:"John Smith",
//     mass:92,
//     height:1.95
// };

// function calcBmi(mass,height) {
//     return mass/height**2;

// }

// const markBmi=calcBmi(mark.mass,mark.height);
// const johnBmi=calcBmi(john.mass,john.height);

// if(johnBmi>markBmi){
//     console.log( `${john.fullName}'s BMI (${johnBmi}) is higher than ${mark.fullName}'s (${markBmi})!!`);
// }else{
//     console.log(`${mark.fullName}'s BMI (${markBmi}) is higher than ${john.fullName}'s (${johnBmi})!!`);
// }



//3.................
// const str='Lift weight 2 ';
// for(let i=2;i<=10;i=i+1){
//     console.log(str);
// }





// 4.Object with Dot and Bracets
// const Arbaz={
//     firstName:'Arbaaz',
//     lastName:'Khan',
//     job:'Student',
//     age:2024-2001,
//     friends:['Arbaaz','Ayush','Laxman','Ankit','sourabh','Vanshika','Aishwarya','Ayushi','Nidhi']

// }

// console.log(Arbaz.lastName);
// console.log(Arbaz['lastName']);
// console.log(Arbaz['age']);

// const keyname='Name';    //name common ho jayega,  toh humme first and last name add krrna hoga bass
// console.log(Arbaz['first'+keyname],Arbaz['last'+keyname]);




// const interestedIn=prompt('What do you want to know about Arbaz?  Choose between firstName, lastName,job,age, and friends.');


// console.log(Arbaz[interestedIn]); //it show undefined


// //For removing undefined
// if (Arbaz[interestedIn]){
//     console.log(Arbaz[interestedIn]);
// }else{
//     console.log('You Entered Invalid Typo');
// }


// Arbaz.location='NEW Delhi';
// Arbaz['Tweeter']='@arbaaz23';
// console.log(Arbaz);




// //CHALLENGE
// console.log(`${Arbaz.firstName} has ${Arbaz.friends.length} friends,and his best friend is called ${Arbaz.friends[0]}`);










// // -------4 Random numbers----------while loop is better for these kind of conditions

// // Math.random()

// let dice=Math.trunc(Math.random()*6)+1;
// console.log(dice);
//  while(dice!==6){
//     console.log(`You rolled a ${dice}`);
//      dice=Math.trunc(Math.random()*6)+1;
//      if (dice===6){
//          console.log('Loop is about to end....');
//      }
//  }



//--------5 Bill calculator using loops--------

const bills=[22,295,176,440,37,105,10,1100,86,52];
const tips=[];
const totals=[];


for(let j=0;j<bills.length;j++){
    let tip;
    let total;
    function calcTip(bill){
        if(bill>50 && bill<300){
            tip= bill*15/100;  
        }
        else{
            tip= bill*20/100;
        }
        total= bill+tip;
        tips.push(tip);
        totals.push(total);
        
    }
     calcTip(bills[j]);//calling the calcTip() function.
    // console.log(tip);
    // console.log(tips);
    // console.log(totals);
}
// console.log(totals.length);




////This is a part of upper program in this code we code for Average Function
let sum=0;
for(let i=0;i<totals.length;i++){
    sum+=totals[i];
}
function calcAvg(avg){
    return avg/10;
}
console.log(calcAvg(sum));