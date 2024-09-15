const experiencePoints = [100, 150, 75];

const totalExperience = experiencePoints.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Total experience points:", totalExperience);



let password= 'helloKitty';

if (password.length >= 6){
    if (password.indexOf(' ') ===-1){
        console.log('Valid Password');
    }

    else{
        console.log('Password is long enough, but cannot contain spaces');
    }
}
else {
console.log('Password must be longer')
}