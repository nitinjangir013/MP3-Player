const audio1 = document.getElementsByClassName('audio_p1');
const play_pause_btns = document.getElementsByClassName('play_btn');
const images = document.getElementById('images');
const musicList = document.getElementById('music_list');
const volumeLine = document.getElementById('volume_line');
volumeLine.style.marginTop = '0px';
const vh = document.getElementsByClassName('volume_container')[0];
var openlist=false;
var counter = 0;
var int;
var min;
var sec;
var mint;
var seco;
var v = 0;
var m_name = ["https://s2d2.turboimg.net/sp/f947ebf68ec9bf371ddc3fb415e234e8/00_-_Yeh_Dil_Aashiqana_Front.JPG","https://aniportalimages.s3.amazonaws.com/media/details/Screenshot_20220310-223017__01.jpg","https://images.genius.com/b667e99f1c1a959025c2d0d828c5beee.980x940x1.jpg","https://a10.gaanacdn.com/images/albums/49/3588849/crop_480x480_1607405239_3588849.jpg","https://c.saavncdn.com/623/Boli-Tujhse-Hindi-2022-20220417053529-500x500.jpg"];
	images.style.background = 'url('+m_name[counter]+')';
	images.style.backgroundSize = 'cover';
const rangeInput = document.getElementById('range');
rangeInput.min = audio1[counter].currentTime;
const currentTimer = document.getElementById('currnt_time');
const totalTimer = document.getElementById('total_time');
var vol = audio1[counter].volume;


function play1()
{
	audio1[counter].play();
	play_pause_btns[0].style.display="none";
	play_pause_btns[1].style.display="block";
	images.style.background = 'url('+m_name[counter]+')';
	images.style.backgroundSize = 'cover';
	int = setInterval(function()
	{
		min = parseInt(audio1[counter].currentTime / 60);
		sec = parseInt(audio1[counter].currentTime % 60);
		mint = parseInt(audio1[counter].duration / 60);
    seco = parseInt(audio1[counter].duration % 60);
		sec = parseInt(sec);
		min = parseInt(min);
		sec=sec+1;
		if (sec == 60 || sec == 0) {
			min=min+1;		}
		if (sec<10) {
			sec='0'+sec;
		}
		if (min<10 || min == 0) {
			min='0'+min;
		}
		currentTimer.innerHTML = min+':'+sec;
		totalTimer.innerHTML = '0'+mint+':'+seco;
		rangeInput.value = audio1[counter].currentTime;
		rangeInput.max = audio1[counter].duration;
	if (audio1[counter].currentTime==audio1[counter].duration) 
	{
		next();
	}
	},500);
}
function pause1() 
{
	audio1[counter].pause();
	play_pause_btns[0].style.display="block";
	play_pause_btns[1].style.display="none";
	clearInterval(int);
}
function next()
{
	pause1();
	if (counter<audio1.length) 
	{
		counter++;
	}
	if (counter==audio1.length) {
		counter=0;
	}
	replay();
	play1();
}

function pre()
{
	pause1();
	if (counter>0) 
	{
		counter--;
	play1();
	}
	replay();
}

function volup()
{
	vh.style.opacity="1";
	if (vol<1) 
	{
		vol = vol + 0.1;
	}
	if (v>0) {
		v=v-10;
	volumeLine.style.marginTop = v+'px';
	}
	audio1[counter].volume = vol;
setTimeout(function () {
	vh.style.opacity="0";
},3000);
}

function voldow() 
{
	vh.style.opacity="1";
	if (vol>0) 
	{
		vol = vol - 0.1;
	}
	if (v<100) {
		v=v+10;
	volumeLine.style.marginTop = v+'px';
	}
	audio1[counter].volume = vol;
setTimeout(function () {
	vh.style.opacity="0";
},3000);
}

function replay()
{
	audio1[counter].currentTime = 0;
	rangeInput.value=0;
	currentTimer.innerHTML = '00:00';
	totalTimer.innerHTML = '0'+mint+':'+seco;
}

function list_music()
{
	if (openlist==false) 
	{
		musicList.style.display="block";
		images.style.display = "none";
		openlist = true;
	}
	else
	{
		musicList.style.display="none";
		images.style.display = "block";
		openlist=false;
	}
}

function songValue()
{
	audio1[counter].currentTime = rangeInput.value;
}

function songChange() {
	audio1[counter].pause();
	replay();
	musicList.style.display="none";
	counter=0;
	images.style.display = "block";
	play1();
}

function songChange1() {
	audio1[counter].pause();
	replay();
	musicList.style.display="none";
	counter=1;
	images.style.display = "block";
	play1();
}

function songChange2() {
	audio1[counter].pause();
	replay();
	musicList.style.display="none";
	counter=2;
	images.style.display = "block";
	play1();
}

function songChange3() {
	audio1[counter].pause();
	replay();
	musicList.style.display="none";
	counter=3;
	images.style.display = "block";
	play1();
}

function songChange4()
{
  audio1[counter].pause();
	replay();
	musicList.style.display="none";
	counter=4;
	images.style.display = "block";
	play1();
}