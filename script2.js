// const CreatePlaylist = function(name, genre){
//     this.name = name;
//     this.genre = genre;
//     this.getPlaylist = function(){
//         if (genre === 'jazz'){
//             return console.log('Луи Армстронг', 'Майлс Дейвис', 'Игорь Михайлович Бутман');
//         } else if (genre === 'pop'){
//             return console.log('Стас Михайлов', 'Дима Билан', 'Ты мое сердце из чистого золота!!');
//         } else if (genre === 'rock'){
//             return console.log('Dead by April', 'Metallica', 'Nirvana');
//         } 
//     }
// }
// const getGenreForNick = new CreatePlaylist('Nick', 'jazz')
// const getGenreForJack = new CreatePlaylist('Jack', 'pop')
// const getGenreForDick = new CreatePlaylist('Dick', 'rock')

// getGenreForNick.getPlaylist();
// getGenreForJack.getPlaylist();
// getGenreForDick.getPlaylist();

const Plane = function(model, reactIndex) {
    this.model = model;
    this.reactIndex = reactIndex; // ускорение

    this.inAir = false; // в воздухе или нет
    this.speed = 0;  

    this.start = function() {
        if (this.inAir){
            console.log('а самолет уже запущен');
        } else {
            this.inAir = true;
            this.speed = 10*this.reactIndex;
            console.log(`Поехали. начальная скорость ${this.model} ${this.speed} км/ч`);
        }
    }
    this.finish = function() {
        this.inAir = false;
        this.speed = 0;
        console.log(`Вы завершили полет. ${this.model}, скорость ${this.speed} км/ч`);
    }
    this.accelerate = function() { // проверка запущен ли самолет
        if (this.inAir){
            this.speed = this.speed*this.reactIndex;
            console.log(`${this.model} ускоряется. Скорость на данный момент ${this.speed} км/ч`);    
        } else {
            const turn = confirm('Запустить самолет?')
            if (turn) { // пользователь ответил да и мы запускаем
                this.start()
            } else{
                console.log('ok'); // пользователь ответил нет
            }
        }
    }
}

const boing = new Plane('Boing', 2)
const tu = new Plane('Ту-134', 4)
const il = new Plane('Ил-62', 5)
boing.start()
tu.accelerate()
// tu.start()
boing.accelerate()
tu.finish()
il.accelerate()
