class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (typeof id === 'undefined') {
            throw new Error('error text');
        } else if (typeof this.alarmCollection.find(clock => clock.id === id) !== 'undefined') {
            return console.error('Будильник с таким id уже существует');
        }
        return this.alarmCollection.push({id, time, callback});
    }
    removeClock(id) {
        let inputArrLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
        let outputArrLength = this.alarmCollection.length;
        return outputArrLength < inputArrLength;
    }
    getCurrentFormattedTime () {
        let zeroAdd = (number) => {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }
        let actualTime = new Date();
        let minutes = zeroAdd(actualTime.getMinutes());
        let hours = zeroAdd(actualTime.getHours());
        return hours + ':' + minutes;
    }
    start () {
        let checkClock = (clock) => {
            let alarm = this.getCurrentFormattedTime();
            if (clock.time === alarm) {
                return clock.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(clock => checkClock(clock));
            }, 1000);
        }
        return;
    }
    stop () {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            return this.timerId = null;
        }
    }
    printAlarms () {
        return this.alarmCollection.forEach(clock => console.log(clock.id + ': ' + clock.time));
    }
    clearAlarms () {
        this.stop();
        return this.alarmCollection = [];
    }
}

let PhoneClock = new AlarmClock();
PhoneClock.addClock('13:19', () => console.log ("Пора вставать!"), 1);
PhoneClock.addClock('13:20', () => console.log ("Вставай уже!"), 2);
PhoneClock.removeClock(2);
PhoneClock.addClock('13:21', () => console.log ("Пора умываться"), 3);
PhoneClock.start();
PhoneClock.stop();
PhoneClock.printAlarms();