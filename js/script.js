let imgs = [
    "https://i.ytimg.com/vi/lK4Eb6rhuG8/maxresdefault.jpg",
    "https://i.ytimg.com/vi/KV2ssT8lzj8/maxresdefault.jpg",
    "https://i.ytimg.com/vi/KhTeiaCezwM/maxresdefault.jpg"
];

let songNames = [
    "Em Lo Thoi A?",
    "No Love",
    "Hip"
];

let songArtists = [
    "Duong Trieu Vu",
    "Eminem ft. Lil Wayne",
    "Mamamoo"
];

let songLengths = [
    "5:32",
    "5:15",
    "3:31"
];

let links = [
    "https://www.youtube.com/watch?v=lK4Eb6rhuG8",
    "https://www.youtube.com/watch?v=KV2ssT8lzj8",
    "https://www.youtube.com/watch?v=KhTeiaCezwM"
];

let row1 = {
    img: "https://i.ytimg.com/vi/lK4Eb6rhuG8/maxresdefault.jpg",
    name: "Em Lo Thoi A?",
    artist: "Duong Trieu Vu",
    length: "5:32",
    link:"https://www.youtube.com/watch?v=lK4Eb6rhuG8"
};

let row2 = {
    img: "https://i.ytimg.com/vi/KhTeiaCezwM/maxresdefault.jpg",
    name: "Hip",
    artist: "Mamamoo",
    length: "3:31",
    link:"https://www.youtube.com/watch?v=KV2ssT8lzj8"
};

let row3 = {
    img: "https://i.ytimg.com/vi/KV2ssT8lzj8/maxresdefault.jpg",
    name: "No Love",
    artist: "Eminem ft. Lil Wayne",
    length: "5:15",
    link:"https://www.youtube.com/watch?v=KhTeiaCezwM"
};

$('#appendBtn').click(function() {
    let songTitle = $('#songTitle').val();
    let songArtist = $('#artist').val();
    let songLength = $('#songLength').val();
    let songImg = $('#songImg').val();
    let songLink = $('#songLink').val();

    imgs.push(songImg);
    songNames.push(songTitle);
    songArtists.push(songArtist);
    songLengths.push(songLength);
    links.push(songLink);
  
    $('.imgs').append(`<img class="images"src= ${imgs[imgs.length-1]}><br>`);
    $('.songNames').append(`<li> ${songNames[songNames.length-1]} </li>`);
    $('.songArtists').append(`<li> ${songArtists[songArtists.length-1]} </li>`);
    $('.songLengths').append(  `<li> ${songLengths[songLengths.length-1]} </li>`);
    $('.links').append(`<a href="${links[links.length-1]}" target=_blank>Click ME to Listen<br></a>`);
});

display();

function display(){
    // imgs.forEach(function(img){
    //     let text =  `<img class="images"src= ${img}><br>`;
    //     $('.imgs').append(text);
    // });

    for (let key in row1) {
        if(row1.hasOwnProperty(key)){
            if(key === "img"){
                $('.imgs').append(`<img class="images"src= ${row1.key}><br>`);
            } else if (key === "name"){
                $('.songNames').append(`<li> ${row1.key} </li>`);
            } else if (key === "artist"){
                $('.songArtists').append(`<li> ${row1.key} </li>`);
            } else if (key === "length") {
                 $('.songLengths').append(`<li> ${length} </li>`);
            } else {
                $('.links').append(`<a href="${link}" target=_blank>Click ME to Listen<br></a>`);
            }
        }
    }

    songNames.forEach(function(name){
        let text =  `<li> ${name} </li>`;
        $('.songNames').append(text);
    });

    songArtists.forEach(function(artist){
        let text =  `<li> ${artist} </li>`;
        $('.songArtists').append(text);
    });

    songLengths.forEach(function(length){
        let text =  `<li> ${length} </li>`;
        $('.songLengths').append(text);
    });

    links.forEach(function(link){
        let text =  `<a href="${link}" target=_blank>Click ME to Listen<br></a>`;
        $('.links').append(text);
    });  
}
