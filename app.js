
const music = new Audio('audio/1.mp3');
//music.play();

const songs = [
    {
        id:1,
        songName: `<h5>Agar Tum Mil Jao <br>
        <div class="subtitle">Shreya Ghoshal</div>`,
        poster:"img/1.jpg"
    } ,

    {
        id:2,
        songName: `<h5>Bye<br>
        <div class="subtitle">Aditya Bhardwaj</div>`,
        poster:"img/2.jpg"
    },

    {
        id:3,
        songName: `<h5>Kaun Tuze <br>
        <div class="subtitle">Palak Muchhal</div>`,
        poster:"img/3.jpg"
    },

    {
        id:4,
        songName: `<h5>Tera Fitoor <br>
        <div class="subtitle">Argit Singh</div>`,
        poster:"img/4.jpg"
    },

    {
        id:5,
        songName: `<h5>Thoda Thoda Pyar <br>
        <div class="subtitle">Argit Singhr</div>`,
        poster:"img/5.jpg"
    },

    {
        id:6,
        songName: `<h5>Kuch To Huva Hai <br>
        <div class="subtitle">Shankar</div>`,
        poster:"img/6.jpg"
    },

    {
        id:7,
        songName: `<h5>Kabil Hoon<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster:"img/7.jpg"
    },

    {
        id:8,
        songName: `<h5>Heartquake <br>
        <div class="subtitle">Papon</div>`,
        poster:"img/8.jpg"
    },

    {
        id:9,
        songName: `<h5>Tera Yar Hoon Main<br>
        <div class="subtitle">Argit Singh</div>`,
        poster:"img/9.jpg"
    },

    {
        id:10,
        songName: `<h5>Dil Galti Kar Baitha Hai <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster:"img/10.jpg"
    },

    {
        id:11,
        songName: `<h5>Dil Kya Kare <br>
        <div class="subtitle">Alka Yagnik</div>`,
        poster:"img/11.jpg"
    },

    {
        id:12,
        songName: `<h5>Jaan Ban Gaye<br>
        <div class="subtitle">Argith Singh</div>`,
        poster:"img/12.jpg"
    },

    {
        id:13,
        songName: `<h5>Khulke Jine Ka <br>
        <div class="subtitle">A.R.Rahman</div>`,
        poster:"img/13.jpg"
    },

    {
        id:14,
        songName: `<h5>Maine Pucha Chand Se <br>
        <div class="subtitle">Mohammed Rafi</div>`,
        poster:"img/14.jpg"
    },

    {
        id:15,
        songName: `<h5>Mere Liye Tum Kafi Ho <br>
        <div class="subtitle">Ayushman Khurana</div>`,
        poster:"img/15.jpg"
    },

    {
        id:16,
        songName: `<h5>Tujhse Naraaz Nahin Zindagi<br>
        <div class="subtitle">Anup Ghoshal</div>`,
        poster:"img/16.jpg"
    },

    {
        id:17,
        songName: `<h5>Tumse Milke Dik Ka Jo haal <br>
        <div class="subtitle">Sonu Nigam</div>`,
        poster:"img/17.jpg"
    },

    {
        id:18,
        songName: `<h5>Raabta <br>
        <div class="subtitle">Pritam</div>`,
        poster:"img/18.jpg"
    },

    {
        id:19,
        songName: `<h5>Tere Liye<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:"img/19.jpg"
    },

    {
        id:20,
        songName: `<h5>Teri Baaton Me Aisa Uljha Liyay <br>
        <div class="subtitle">Atif Alsam</div>`,
        poster:"img/20.jpg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e , i) =>{

    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});



let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click' , ()=>{

    if(music.paused || music.currentTime <=0)
    {
       music.play();
       wave.classList.add('active1');
       masterPlay.classList.remove('bi-play-fill');
       masterPlay.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');

    }
});


const makeAllplays= () => {

    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) =>{

        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
      
    })
}


const makeAllBackground = () => {

    Array.from(document.getElementsByClassName('songItem')).forEach((el) =>{

        el.style.background = 'rgb(105 , 105 , 105 , .0)';

    })
}

let index = 0;
// to access img in bottom bar
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

// to play song on click and chnage poster in botttom bar 
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) =>{

    e.addEventListener('click',(el)=>{

        index = el.target.id;
       // console.log(index);
       music.src = `audio/${index}.mp3`;
       poster_master_play.src = `img/${index}.jpg`;
       music.play();

       // to chnage play and pause button on click
       masterPlay.classList.remove('bi-play-fill');
       masterPlay.classList.add('bi-pause-fill');

       // to change title and subtitle of bottom bar
       let songTitles = songs.filter((els) => {

            return els.id == index;

       });

       // to change title in bottom bar 
       songTitles.forEach(elss => {

           let {songName} = elss;
           title.innerHTML = songName;

       });

       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105 , 105 , 105 , .1)";
       makeAllplays();
       
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
    });

});


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];



music.addEventListener('timeupdate', ()=>{

    let music_curr = music.currentTime;
    let music_dur = music.duration;

  //  console.log(music_curr);

    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur % 60);

    if(sec1 < 10)
    {
        sec1 = `0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    
    if(sec2 < 10)
    {
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});


seek.addEventListener('change' , () =>{

    music.currentTime = seek.value * music.duration / 100;
})



let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',() =>{

    if(vol.value == 0)
    {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }

    if(vol.value > 0)
    {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    if(vol.value > 50)
    {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click' , () =>{

    index -= 1;

    if(index < 1)
    {
        index = Array.from(document.getElementsByClassName('songItem')).length;

    }

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();

    // to chnage play and pause button on click
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    // to change title and subtitle of bottom bar
    let songTitles = songs.filter((els) => {

         return els.id == index;

    });

    // to change title in bottom bar 
    songTitles.forEach(elss => {

        let {songName} = elss;
        title.innerHTML = songName;

    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105 , 105 , 105 , .1)";
    makeAllplays();
    
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});



next.addEventListener('click' , () =>{

    index += 1;

    if(index > Array.from(document.getElementsByClassName('songItem')).length)
    {
        index = 1;
        
    }

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();

    // to chnage play and pause button on click
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    // to change title and subtitle of bottom bar
    let songTitles = songs.filter((els) => {

         return els.id == index;

    });

    // to change title in bottom bar 
    songTitles.forEach(elss => {

        let {songName} = elss;
        title.innerHTML = songName;

    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105 , 105 , 105 , .1)";
    makeAllplays();
    
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});





let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{

    pop_song.scrollLeft += 330;
})


pop_song_left.addEventListener('click',()=>{

    pop_song.scrollLeft -= 330;
})


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

pop_art_right.addEventListener('click',()=>{

    item.scrollLeft += 330;
})


pop_art_left.addEventListener('click',()=>{

    item.scrollLeft -= 330;
})