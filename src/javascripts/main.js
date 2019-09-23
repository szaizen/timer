
class Timer {
    
  constructor(seconds,targetId) {
    this.total = seconds;
    this.targetId = targetId;
    this.timercount;
  }

  // 1秒ずつカウント
  count() {
    this.show(this.total);
    if(this.total < 0) {
      this.stop();
    }
    this.total -= 1;
  }

  // タイマー開始
  start() {
    this.show('Start!!');
    this.timercoun = setInterval(() => { this.count(); },1000);
  }

  // タイマー停止
  stop() {
    this.show('終了');
    clearInterval(this.timercoun);
  }

  // 秒数追加
  add(second) {
    this.total += second;
  }

  // タイマー表示
  show(text) {
    document.getElementById(this.targetId).innerText = text;
  }

}

let timer1;
let timer2;
let timer3;

document.getElementById('timerstart1').onclick = function () {
  if(timer1 == null) {
    timer1 = new Timer(60,'timer1');
    timer1.start();
  };
};

document.getElementById('addseconds1').onclick = function () {
  timer1.add(10);
};


document.getElementById('timerstart2').onclick = function () {
  if(timer2 == null) {
    timer2 = new Timer(40,'timer2');
    timer2.start();
  };
};

document.getElementById('addseconds2').onclick = function () {
  timer2.add(10);
};



document.getElementById('timerstart3').onclick = function () {
  if(timer3 == null) {
    timer3 = new Timer(100,'timer3');
    timer3.start();
  };
};

document.getElementById('addseconds3').onclick = function () {
  timer3.add(10);
};
