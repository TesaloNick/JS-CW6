const SayHello = function(name, lang) {
    this.name = name;
    this.lang = lang;
    this.SayHello = function() {
        if (lang === 'en'){
            return 'Hello, ' + this.name
        } else if (lang === 'by'){
            return 'Дароу, ' + this.name
        }else if (lang === 'ru'){
            return 'Привет, ' + this.name
        }
    }
}

const sayHelloToVasia = new SayHello('Vasya', 'en')
const sayHelloToPetya = new SayHello('Petya', 'by')
const sayHelloToSasha = new SayHello('Sasha', 'ru')

// console.log(sayHelloToVasia.name);
console.log(sayHelloToPetya.SayHello())
console.log(sayHelloToVasia.SayHello())
console.log(sayHelloToSasha.SayHello())