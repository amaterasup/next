var hariH = new Date("Apr 29, 2026 23:00:00");
const hitung_mundur = document.getElementsByClassName("hitung-mundur")[0];
fetchTime();
async function fetchTime(){
    try {
        // Fetch time from an API
        let response = await fetch("https://www.timeapi.io/api/timezone/zone?timeZone=Asia%2FJakarta");
        let data = await response.json();
        
        // Get current UTC time and offset
        let date = new Date(data.currentLocalTime);
        // Start the timer
        startTimer(date);
        
    } catch (error) {
        console.error("Error fetching time:", error);
        document.getElementsByClassName("hitung-mundur")[0].innerText = "Jaringan Hilang";
        document.getElementsByClassName("hitung-mundur")[0].style = "color:black;"
    }
}
function startTimer(waktu) {
    function UpdateTimer() {
        var time = new Date(waktu).getTime();
        var jangka = hariH - time;
        var hari = Math.floor(jangka / (1000 * 60 * 60 * 24)) ;
        var jam = Math.floor((jangka % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var menit = Math.floor((jangka % (1000 * 60 * 60)) / (1000 * 60));
        var detik = Math.floor((jangka % (1000 * 60)) / 1000);
        
        hitung_mundur.innerHTML = cek(hari) + ' : ' + cek(jam) + ' : ' + cek(menit) + ' : ' + cek(detik);

        if(jangka <= 0){
            hitung_mundur.innerHTML = "00 : 00 : 00 : 00";
            efek_ulang_tahun();
            return 0;
        }
    }
    if(UpdateTimer() == 0){
        return;
    }
    setInterval(UpdateTimer(), 1000);
    fetchTime();
}

function cek(angka){
    if(angka < 10){
        return '0' + angka;
    }
    else{
        return angka;
    }
}
var warna = 0;
function efek_ulang_tahun(){
    hitung_mundur.innerHTML = "";
    document.querySelector("body").style.background = "url(https://www.pixelstalk.net/wp-content/uploads/images5/Aesthetic-Space-Wallpaper-1080p.jpg) no-repeat;";
    document.getElementsByClassName("hitung-mundur")[0].style.display= "none";
    anim();
    setInterval(function(){
        document.getElementById('c').remove();
        animasi_kartu();
    },15000)
}
function tombol(){
    document.body.innerHTML = `<div class="night"></div><div class="flowers"><div class="flower flower--1"><div class="flower__leafs flower__leafs--1"><div class="flower__leaf flower__leaf--1"></div><div class="flower__leaf flower__leaf--2"></div><div class="flower__leaf flower__leaf--3"></div><div class="flower__leaf flower__leaf--4"></div><div class="flower__white-circle"></div><div class="flower__light flower__light--1"></div><div class="flower__light flower__light--2"></div><div class="flower__light flower__light--3"></div><div class="flower__light flower__light--4"></div><div class="flower__light flower__light--5"></div><div class="flower__light flower__light--6"></div><div class="flower__light flower__light--7"></div><div class="flower__light flower__light--8"></div></div><div class="flower__line"><div class="flower__line__leaf flower__line__leaf--1"></div><div class="flower__line__leaf flower__line__leaf--2"></div><div class="flower__line__leaf flower__line__leaf--3"></div><div class="flower__line__leaf flower__line__leaf--4"></div><div class="flower__line__leaf flower__line__leaf--5"></div><div class="flower__line__leaf flower__line__leaf--6"></div></div></div><div class="flower flower--2"><div class="flower__leafs flower__leafs--2"><div class="flower__leaf flower__leaf--1"></div><div class="flower__leaf flower__leaf--2"></div><div class="flower__leaf flower__leaf--3"></div><div class="flower__leaf flower__leaf--4"></div><div class="flower__white-circle"></div><div class="flower__light flower__light--1"></div><div class="flower__light flower__light--2"></div><div class="flower__light flower__light--3"></div><div class="flower__light flower__light--4"></div><div class="flower__light flower__light--5"></div><div class="flower__light flower__light--6"></div><div class="flower__light flower__light--7"></div><div class="flower__light flower__light--8"></div></div><div class="flower__line"><div class="flower__line__leaf flower__line__leaf--1"></div><div class="flower__line__leaf flower__line__leaf--2"></div><div class="flower__line__leaf flower__line__leaf--3"></div><div class="flower__line__leaf flower__line__leaf--4"></div></div></div><div class="flower flower--3"><div class="flower__leafs flower__leafs--3"><div class="flower__leaf flower__leaf--1"></div><div class="flower__leaf flower__leaf--2"></div><div class="flower__leaf flower__leaf--3"></div><div class="flower__leaf flower__leaf--4"></div><div class="flower__white-circle"></div><div class="flower__light flower__light--1"></div><div class="flower__light flower__light--2"></div><div class="flower__light flower__light--3"></div><div class="flower__light flower__light--4"></div><div class="flower__light flower__light--5"></div><div class="flower__light flower__light--6"></div><div class="flower__light flower__light--7"></div><div class="flower__light flower__light--8"></div></div><div class="flower__line"><div class="flower__line__leaf flower__line__leaf--1"></div><div class="flower__line__leaf flower__line__leaf--2"></div><div class="flower__line__leaf flower__line__leaf--3"></div><div class="flower__line__leaf flower__line__leaf--4"></div></div></div><div class="grow-ans" style="--d:1.2s"><div class="flower__g-long"><div class="flower__g-long__top"></div><div class="flower__g-long__bottom"></div></div></div><div class="growing-grass"><div class="flower__grass flower__grass--1"><div class="flower__grass--top"></div><div class="flower__grass--bottom"></div><div class="flower__grass__leaf flower__grass__leaf--1"></div><div class="flower__grass__leaf flower__grass__leaf--2"></div><div class="flower__grass__leaf flower__grass__leaf--3"></div><div class="flower__grass__leaf flower__grass__leaf--4"></div><div class="flower__grass__leaf flower__grass__leaf--5"></div><div class="flower__grass__leaf flower__grass__leaf--6"></div><div class="flower__grass__leaf flower__grass__leaf--7"></div><div class="flower__grass__leaf flower__grass__leaf--8"></div><div class="flower__grass__overlay"></div></div></div><div class="growing-grass"><div class="flower__grass flower__grass--2"><div class="flower__grass--top"></div><div class="flower__grass--bottom"></div><div class="flower__grass__leaf flower__grass__leaf--1"></div><div class="flower__grass__leaf flower__grass__leaf--2"></div><div class="flower__grass__leaf flower__grass__leaf--3"></div><div class="flower__grass__leaf flower__grass__leaf--4"></div><div class="flower__grass__leaf flower__grass__leaf--5"></div><div class="flower__grass__leaf flower__grass__leaf--6"></div><div class="flower__grass__leaf flower__grass__leaf--7"></div><div class="flower__grass__leaf flower__grass__leaf--8"></div><div class="flower__grass__overlay"></div></div></div><div class="grow-ans" style="--d:2.4s"><div class="flower__g-right flower__g-right--1"><div class="leaf"></div></div></div><div class="grow-ans" style="--d:2.8s"><div class="flower__g-right flower__g-right--2"><div class="leaf"></div></div></div><div class="grow-ans" style="--d:2.8s"><div class="flower__g-front"><div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1"><div class="flower__g-front__leaf"></div></div><div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2"><div class="flower__g-front__leaf"></div></div><div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3"><div class="flower__g-front__leaf"></div></div><div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4"><div class="flower__g-front__leaf"></div></div><div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5"><div class="flower__g-front__leaf"></div></div><div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6"><div class="flower__g-front__leaf"></div></div><div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7"><div class="flower__g-front__leaf"></div></div><div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8"><div class="flower__g-front__leaf"></div></div><div class="flower__g-front__line"></div></div></div><div class="grow-ans" style="--d:3.2s"><div class="flower__g-fr"><div class="leaf"></div><div class="flower__g-fr__leaf flower__g-fr__leaf--1"></div><div class="flower__g-fr__leaf flower__g-fr__leaf--2"></div><div class="flower__g-fr__leaf flower__g-fr__leaf--3"></div><div class="flower__g-fr__leaf flower__g-fr__leaf--4"></div><div class="flower__g-fr__leaf flower__g-fr__leaf--5"></div><div class="flower__g-fr__leaf flower__g-fr__leaf--6"></div><div class="flower__g-fr__leaf flower__g-fr__leaf--7"></div><div class="flower__g-fr__leaf flower__g-fr__leaf--8"></div></div></div><div class="long-g long-g--0"><div class="grow-ans" style="--d:3s"><div class="leaf leaf--0"></div></div><div class="grow-ans" style="--d:2.2s"><div class="leaf leaf--1"></div></div><div class="grow-ans" style="--d:3.4s"><div class="leaf leaf--2"></div></div><div class="grow-ans" style="--d:3.6s"><div class="leaf leaf--3"></div></div></div><div class="long-g long-g--1"><div class="grow-ans" style="--d:3.6s"><div class="leaf leaf--0"></div></div><div class="grow-ans" style="--d:3.8s"><div class="leaf leaf--1"></div></div><div class="grow-ans" style="--d:4s"><div class="leaf leaf--2"></div></div><div class="grow-ans" style="--d:4.2s"><div class="leaf leaf--3"></div></div></div><div class="long-g long-g--2"><div class="grow-ans" style="--d:4s"><div class="leaf leaf--0"></div></div><div class="grow-ans" style="--d:4.2s"><div class="leaf leaf--1"></div></div><div class="grow-ans" style="--d:4.4s"><div class="leaf leaf--2"></div></div><div class="grow-ans" style="--d:4.6s"><div class="leaf leaf--3"></div></div></div><div class="long-g long-g--3"><div class="grow-ans" style="--d:4s"><div class="leaf leaf--0"></div></div><div class="grow-ans" style="--d:4.2s"><div class="leaf leaf--1"></div></div><div class="grow-ans" style="--d:3s"><div class="leaf leaf--2"></div></div><div class="grow-ans" style="--d:3.6s"><div class="leaf leaf--3"></div></div></div><div class="long-g long-g--4"><div class="grow-ans" style="--d:4s"><div class="leaf leaf--0"></div></div><div class="grow-ans" style="--d:4.2s"><div class="leaf leaf--1"></div></div><div class="grow-ans" style="--d:3s"><div class="leaf leaf--2"></div></div><div class="grow-ans" style="--d:3.6s"><div class="leaf leaf--3"></div></div></div><div class="long-g long-g--5"><div class="grow-ans" style="--d:4s"><div class="leaf leaf--0"></div></div><div class="grow-ans" style="--d:4.2s"><div class="leaf leaf--1"></div></div><div class="grow-ans" style="--d:3s"><div class="leaf leaf--2"></div></div><div class="grow-ans" style="--d:3.6s"><div class="leaf leaf--3"></div></div></div><div class="long-g long-g--6"><div class="grow-ans" style="--d:4.2s"><div class="leaf leaf--0"></div></div><div class="grow-ans" style="--d:4.4s"><div class="leaf leaf--1"></div></div><div class="grow-ans" style="--d:4.6s"><div class="leaf leaf--2"></div></div><div class="grow-ans" style="--d:4.8s"><div class="leaf leaf--3"></div></div></div><div class="long-g long-g--7"><div class="grow-ans" style="--d:3s"><div class="leaf leaf--0"></div></div><div class="grow-ans" style="--d:3.2s"><div class="leaf leaf--1"></div></div><div class="grow-ans" style="--d:3.5s"><div class="leaf leaf--2"></div></div><div class="grow-ans" style="--d:3.6s"><div class="leaf leaf--3"></div></div></div></div>`;
}

const kartu = document.getElementById("kartu");
function animasi_kartu(){
    kartu.innerHTML = kata_kata;
    kartu.style = "display:flex";
    const animasi = kartu.animate([
        {
            transform: "scale(0) rotateX(0deg) rotateY(0deg)"
        },{
            transform: "scale(0.2) rotateX(360deg) rotateY(180deg)"
        },{
            transform: "scale(0.4) rotateX(720deg) rotateY(360deg)"
        },{
            transform: "scale(0.8) rotateX(1080deg) rotateY(540deg)"
        },{
            transform: "scale(1.0) rotateX(1440deg) rotateY(720deg)"
        }
    ],{
        duration: 5000,
        easing: "linear"
    })
}
let lastX = 0;
let lastY = 0;
let rotationX = 0;
let rotationY = 0;

kartu.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    lastX = touch.clientX;
    lastY = touch.clientY;
});

kartu.addEventListener("touchmove", (e) => {
    e.preventDefault(); // Prevent scrolling
    const touch = e.touches[0];
    const deltaX = touch.clientX - lastX;
    lastX = touch.clientX;
    const deltaY = touch.clientY - lastY;
    lastY = touch.clientY;

    rotationX += deltaX; // Adjust this for sensitivity
    rotationY += deltaY;
    kartu.style.transform = `rotateX(${-rotationY}deg) rotateY(${rotationX}deg)`;
});

/*setInterval(function(){
        document.querySelector("body").style.background = `hsl(${warna}, 100%, 50%)`;
        warna++;
        warna = warna % 360;
    }, 100);*/

/*
roket : https://drive.google.com/thumbnail?id=11mb2N4M4yEgwT32FSxiFiR7IQIXRVyPV
background : https://drive.google.com/thumbnail?id=1h55Ds2sXcsr0cPHmkhC91W5nKoj3Nlwk
*/

let w = (c.width = window.innerWidth),
    h = (c.height = window.innerHeight),
    ctx = c.getContext("2d"),
    hw = w / 2;
    (hh = h / 2),
    (opts = {
    // change the text in here //
        strings: ["HAPPY", "BIRTHDAY!", "NAYSHA"],
        charSize: 30,
        charSpacing: 35,
        lineHeight: 40,

        cx: w / 2,
        cy: h / 2,

        fireworkPrevPoints: 10,
        fireworkBaseLineWidth: 5,
        fireworkAddedLineWidth: 8,
        fireworkSpawnTime: 200,
        fireworkBaseReachTime: 30,
        fireworkAddedReachTime: 30,
        fireworkCircleBaseSize: 20,
        fireworkCircleAddedSize: 10,
        fireworkCircleBaseTime: 30,
        fireworkCircleAddedTime: 30,
        fireworkCircleFadeBaseTime: 10,
        fireworkCircleFadeAddedTime: 5,
        fireworkBaseShards: 5,
        fireworkAddedShards: 5,
        fireworkShardPrevPoints: 3,
        fireworkShardBaseVel: 4,
        fireworkShardAddedVel: 2,
        fireworkShardBaseSize: 3,
        fireworkShardAddedSize: 3,
        gravity: 0.1,
        upFlow: -0.1,
        letterContemplatingWaitTime: 360,
        balloonSpawnTime: 20,
        balloonBaseInflateTime: 10,
        balloonAddedInflateTime: 10,
        balloonBaseSize: 20,
        balloonAddedSize: 20,
        balloonBaseVel: 0.4,
        balloonAddedVel: 0.4,
        balloonBaseRadian: -(Math.PI / 2 - 0.5),
        balloonAddedRadian: -1,
    }),
    (calc = {
        totalWidth:
        opts.charSpacing *
        Math.max(opts.strings[0].length, opts.strings[1].length),
    }),
    (Tau = Math.PI * 2),
    (TauQuarter = Tau / 4),
    (letters = []);

ctx.font = opts.charSize + "px Verdana";

function Letter(char, x, y) {
    this.char = char;
    this.x = x;
    this.y = y;
    this.dx = -ctx.measureText(char).width / 2;
    this.dy = +opts.charSize / 2;
    this.fireworkDy = this.y - hh;

  var hue = (x / calc.totalWidth) * 360;

    this.color = "hsl(hue,80%,50%)".replace("hue", hue);
    this.lightAlphaColor = "hsla(hue,80%,light%,alp)".replace("hue", hue);
    this.lightColor = "hsl(hue,80%,light%)".replace("hue", hue);
    this.alphaColor = "hsla(hue,80%,50%,alp)".replace("hue", hue);

    this.reset();
}
Letter.prototype.reset = function () {
    this.phase = "firework";
    this.tick = 0;
    this.spawned = false;
    this.spawningTime = (opts.fireworkSpawnTime * Math.random()) | 0;
    this.reachTime =
        (opts.fireworkBaseReachTime + opts.fireworkAddedReachTime * Math.random()) |
        0;
    this.lineWidth =
        opts.fireworkBaseLineWidth + opts.fireworkAddedLineWidth * Math.random();
    this.prevPoints = [[0, hh, 0]];
};
Letter.prototype.step = function () {
    if (this.phase === "firework") {
        if (!this.spawned) {
        ++this.tick;
        if (this.tick >= this.spawningTime) {
            this.tick = 0;
            this.spawned = true;
        }
        } else {
        ++this.tick;

        var linearProportion = this.tick / this.reachTime,
            armonicProportion = Math.sin(linearProportion * TauQuarter),
            x = linearProportion * this.x,
            y = hh + armonicProportion * this.fireworkDy;

        if (this.prevPoints.length > opts.fireworkPrevPoints)
            this.prevPoints.shift();

        this.prevPoints.push([x, y, linearProportion * this.lineWidth]);

        var lineWidthProportion = 1 / (this.prevPoints.length - 1);

        for (var i = 1; i < this.prevPoints.length; ++i) {
            var point = this.prevPoints[i],
            point2 = this.prevPoints[i - 1];

            ctx.strokeStyle = this.alphaColor.replace(
            "alp",
            i / this.prevPoints.length
            );
            ctx.lineWidth = point[2] * lineWidthProportion * i;
            ctx.beginPath();
            ctx.moveTo(point[0], point[1]);
            ctx.lineTo(point2[0], point2[1]);
            ctx.stroke();
        }

        if (this.tick >= this.reachTime) {
            this.phase = "contemplate";

            this.circleFinalSize =
            opts.fireworkCircleBaseSize +
            opts.fireworkCircleAddedSize * Math.random();
            this.circleCompleteTime =
            (opts.fireworkCircleBaseTime +
                opts.fireworkCircleAddedTime * Math.random()) |
            0;
            this.circleCreating = true;
            this.circleFading = false;

            this.circleFadeTime =
            (opts.fireworkCircleFadeBaseTime +
                opts.fireworkCircleFadeAddedTime * Math.random()) |
            0;
            this.tick = 0;
            this.tick2 = 0;

            this.shards = [];

            var shardCount =
                (opts.fireworkBaseShards +
                opts.fireworkAddedShards * Math.random()) |
                0,
            angle = Tau / shardCount,
            cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = 1,
            y = 0;

        for (var i = 0; i < shardCount; ++i) {
            var x1 = x;
            x = x * cos - y * sin;
            y = y * cos + x1 * sin;

            this.shards.push(new Shard(this.x, this.y, x, y, this.alphaColor));
            }
        }
        }
    } else if (this.phase === "contemplate") {
        ++this.tick;

        if (this.circleCreating) {
        ++this.tick2;
        var proportion = this.tick2 / this.circleCompleteTime,
            armonic = -Math.cos(proportion * Math.PI) / 2 + 0.5;

        ctx.beginPath();
        ctx.fillStyle = this.lightAlphaColor
            .replace("light", 50 + 50 * proportion)
            .replace("alp", proportion);
        ctx.beginPath();
        ctx.arc(this.x, this.y, armonic * this.circleFinalSize, 0, Tau);
        ctx.fill();

        if (this.tick2 > this.circleCompleteTime) {
            this.tick2 = 0;
            this.circleCreating = false;
            this.circleFading = true;
        }
        } else if (this.circleFading) {
        ctx.fillStyle = this.lightColor.replace("light", 70);
        ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

        ++this.tick2;
        var proportion = this.tick2 / this.circleFadeTime,
            armonic = -Math.cos(proportion * Math.PI) / 2 + 0.5;

        ctx.beginPath();
        ctx.fillStyle = this.lightAlphaColor
            .replace("light", 100)
            .replace("alp", 1 - armonic);
        ctx.arc(this.x, this.y, this.circleFinalSize, 0, Tau);
        ctx.fill();

        if (this.tick2 >= this.circleFadeTime) this.circleFading = false;
        } else {
        ctx.fillStyle = this.lightColor.replace("light", 70);
        ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);
        }

    for (var i = 0; i < this.shards.length; ++i) {
        this.shards[i].step();

        if (!this.shards[i].alive) {
            this.shards.splice(i, 1);
            --i;
        }
        }

    if (this.tick > opts.letterContemplatingWaitTime) {
        this.phase = "balloon";

        this.tick = 0;
        this.spawning = true;
        this.spawnTime = (opts.balloonSpawnTime * Math.random()) | 0;
        this.inflating = false;
        this.inflateTime =
            (opts.balloonBaseInflateTime +
            opts.balloonAddedInflateTime * Math.random()) |
            0;
        this.size =
        (opts.balloonBaseSize + opts.balloonAddedSize * Math.random()) | 0;

        var rad =
            opts.balloonBaseRadian + opts.balloonAddedRadian * Math.random(),
            vel = opts.balloonBaseVel + opts.balloonAddedVel * Math.random();

        this.vx = Math.cos(rad) * vel;
        this.vy = Math.sin(rad) * vel;
        }
    } else if (this.phase === "balloon") {
        ctx.strokeStyle = this.lightColor.replace("light", 80);

        if (this.spawning) {
        ++this.tick;
        ctx.fillStyle = this.lightColor.replace("light", 70);
        ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

        if (this.tick >= this.spawnTime) {
            this.tick = 0;
            this.spawning = false;
            this.inflating = true;
        }
        } else if (this.inflating) {
        ++this.tick;

        var proportion = this.tick / this.inflateTime,
            x = (this.cx = this.x),
            y = (this.cy = this.y - this.size * proportion);

        ctx.fillStyle = this.alphaColor.replace("alp", proportion);
        ctx.beginPath();
        generateBalloonPath(x, y, this.size * proportion);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, this.y);
        ctx.stroke();

        ctx.fillStyle = this.lightColor.replace("light", 70);
        ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

        if (this.tick >= this.inflateTime) {
            this.tick = 0;
            this.inflating = false;
        }
        } else {
        this.cx += this.vx;
        this.cy += this.vy += opts.upFlow;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        generateBalloonPath(this.cx, this.cy, this.size);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(this.cx, this.cy);
        ctx.lineTo(this.cx, this.cy + this.size);
        ctx.stroke();

        ctx.fillStyle = this.lightColor.replace("light", 70);
        ctx.fillText(this.char, this.cx + this.dx, this.cy + this.dy + this.size);

        if (this.cy + this.size < -hh || this.cx < -hw || this.cy > hw)
            this.phase = "done";
        }
    }
};
function Shard(x, y, vx, vy, color) {
    var vel =
        opts.fireworkShardBaseVel + opts.fireworkShardAddedVel * Math.random();

    this.vx = vx * vel;
    this.vy = vy * vel;

    this.x = x;
    this.y = y;

    this.prevPoints = [[x, y]];
    this.color = color;

    this.alive = true;

    this.size =
        opts.fireworkShardBaseSize + opts.fireworkShardAddedSize * Math.random();
    }
    Shard.prototype.step = function () {
    this.x += this.vx;
    this.y += this.vy += opts.gravity;

    if (this.prevPoints.length > opts.fireworkShardPrevPoints)
        this.prevPoints.shift();

    this.prevPoints.push([this.x, this.y]);

    var lineWidthProportion = this.size / this.prevPoints.length;

    for (var k = 0; k < this.prevPoints.length - 1; ++k) {
        var point = this.prevPoints[k],
        point2 = this.prevPoints[k + 1];

        ctx.strokeStyle = this.color.replace("alp", k / this.prevPoints.length);
        ctx.lineWidth = k * lineWidthProportion;
        ctx.beginPath();
        ctx.moveTo(point[0], point[1]);
        ctx.lineTo(point2[0], point2[1]);
        ctx.stroke();
    }

    if (this.prevPoints[0][1] > hh) this.alive = false;
};
function generateBalloonPath(x, y, size) {
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(
        x - size / 2,
        y - size / 2,
        x - size / 4,
        y - size,
        x,
        y - size
    );
    ctx.bezierCurveTo(x + size / 4, y - size, x + size / 2, y - size / 2, x, y);
}

function anim() {
    window.requestAnimationFrame(anim);
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, w, h);
    ctx.translate(hw, hh);
    var done = true;
    for (var l = 0; l < letters.length; ++l) {
        letters[l].step();
        if (letters[l].phase !== "done") done = false;
    }
    ctx.translate(-hw, -hh);
}

for (let i = 0; i < opts.strings.length; ++i) {
    for (var j = 0; j < opts.strings[i].length; ++j) {
        letters.push(
            new Letter(
                opts.strings[i][j] , j * opts.charSpacing + opts.charSpacing / 2 - (opts.strings[i].length * opts.charSize) / 2 , i * opts.lineHeight +opts.lineHeight / 2 - (opts.strings.length * opts.lineHeight) / 2
            )
        );
    }
}


window.addEventListener("resize", function () {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
    hw = w / 2;
    hh = h / 2;
    ctx.font = opts.charSize + "px Verdana";
});

const kata_kata = `<div id=kata-kata><h1>HAPPY BIRTHDAY</h1><p>Selamat ulang tahun yang ke-18 Nay! <br> Semoga semakin bijak, dewasa dan selalu sehat untuk terus membawa kebaikan buat orang orang disekitarmu<br><br>-orang</p></div><div id=gambar><img src=https://drive.google.com/thumbnail?id=1pNxWS7TFCIRmqYOT2fD09V9law6BMULb id=g1><button id=tombol onclick=tombol()>CLICK ME!</button></div>`;



