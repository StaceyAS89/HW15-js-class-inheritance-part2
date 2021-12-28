class Timer {
    constructor(timer) {
        this.timer = timer;
        this.timeClick = true;
        this.timeShow = new Date();
        this.shortFormat = this.timeShow.toLocaleTimeString([], {
            timeStyle: 'short'
        })
        this.timer.addEventListener('click', () => this.timeClick = !this.timeClick);
    }

    render() {
        this.timer.innerHTML = this.getTime();
    }
    getTime() {
        return this.timeClick ? this.shortFormat : this.fullFormat
    }
}



class BabyClock1 extends Timer {
    getTime() {
        this.fullFormatSec = this.timeShow.toLocaleTimeString();
        return this.timeClick ? this.shortFormat : this.fullFormatSec
    }

}
let timer1 = document.getElementById('demo-full-format-sec')
let babyclock1 = new BabyClock1(timer1)
setInterval(() => babyclock1.render(), 250)

class BabyClock2 extends Timer {

    getTime() {
        this.fullFormatMsec = this.timeShow.toLocaleTimeString() + `:${this.timeShow.getMilliseconds()}`;
        return this.timeClick ? this.shortFormat : this.fullFormatMsec
    }

}

let timer2 = document.getElementById('demo-full-format-msec')
let babyclock2 = new BabyClock2(timer2)
setInterval(() => babyclock2.render(), 250)