let row0 = {
    img: "https://i.ytimg.com/vi/lK4Eb6rhuG8/maxresdefault.jpg",
    name: "Em Lo Thoi A?",
    artist: "Duong Trieu Vu",
    length: "5:32",
    link:"https://www.youtube.com/watch?v=lK4Eb6rhuG8"
};

let row1 = {
    img: "https://i.ytimg.com/vi/KhTeiaCezwM/maxresdefault.jpg",
    name: "Hip",
    artist: "Mamamoo",
    length: "3:31",
    link:"https://www.youtube.com/watch?v=KV2ssT8lzj8"
};

let row2 = {
    img: "https://i.ytimg.com/vi/KV2ssT8lzj8/maxresdefault.jpg",
    name: "No Love",
    artist: "Eminem ft. Lil Wayne",
    length: "5:15",
    link:"https://www.youtube.com/watch?v=KhTeiaCezwM"
};

let allrows = [
    row0,
    row1,
    row2
];

$('#appendBtn').click(function() {
    let songTitle = $('#songTitle').val();
    let songArtist = $('#artist').val();
    let songLength = $('#songLength').val();
    let songImg = $('#songImg').val();
    let songLink = $('#songLink').val();

    let row3 = {};

    row3.img = songImg;
    row3.name = songTitle;
    row3.artist = songArtist;
    row3.length = songLength;
    row3.link = songLink;
  
    $('.imgs').append(`<img class="images"src= ${row3.img}><br>`);
    $('.songNames').append(`<p> ${row3.name} </p>`);
    $('.songArtists').append(`<p> ${row3.artist} </p>`);
    $('.songLengths').append(  `<p> ${row3.length} </p>`);
    $('.links').append(`<a href="${row3.link}" target=_blank>Click ME to Listen<br></a>`);
});

display();

function display(){

    for (var i = 0; i < allrows.length; i++){
        let obj = allrows[i];
        console.log(obj);
        $('.imgs').append(`<img class="images"src= ${obj.img}><br>`);      
        $('.songNames').append(`<p> ${obj.name} </p>`);      
        $('.songArtists').append(`<p> ${obj.artist} </p>`);       
        $('.songLengths').append(`<p> ${obj.length} </p>`);       
        $('.links').append(`<a href="${obj.link}" target=_blank>Click ME to Listen<br></a>`);
    }

}
