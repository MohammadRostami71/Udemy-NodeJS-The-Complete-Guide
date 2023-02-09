var name = 'Mohammad';

console.log(name);

var age = 30;
var isHobbies = true;

function summarizeUser(userName,userAge,userHasHobby) {
    return('Name is' + userName + ', age is' + userAge + 'and the user has hobbies : ' + userHasHobby)
}

console.log(summarizeUser(name,age,isHobbies));

const add = (a,b) => {
    return a + b
}

const sum = (a,b) => a + b

const addOne = a => a +1;

const addRandom = () => 1 + 3;

console.log(add(2,2));
console.log(sum(1,2));
console.log(addOne(1));
console.log(addRandom());

const person = {
    name:'Mohammad',
    age:30,
    greet:() => {
        console.log('Hi, I am '+ this.name);
    },
    userAge(){
        console.log('Hi, I am '+ this.age);
    }
}

console.log(person);
person.greet();
person.userAge();

const hobbies = ['Sports','Cooking'];
for (let hobby of hobbies){
    console.log(hobby);
}

console.log(hobbies.map(hobby => {
    return 'Hobby :' + hobby
}));
console.log(hobbies);
hobbies.push('programming');
console.log(hobbies);

const copiedArray = hobbies.slice();
console.log(copiedArray);

const copiedArray2 = [...hobbies];
console.log(copiedArray2);

const copiedPerson ={...person};
console.log(copiedPerson);

const toArray = (...args) => {
    return args
}
console.log(toArray(1,2,3,4))

const printName= ({name}) => {
    console.log(name);
};

printName(person);

const user = {
    userName:'mamad',
    userAge:30
}
const {userAge,userName} = user;

console.log(userAge,userName);

const [hobby1,hobby2]= hobbies;

console.log(hobby1);
console.log(hobby2);

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000);

console.log('Hello!');
console.log('Hi!');


