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
let songLengthss = [
    "5:32",
    "5:15",
    "3:31"
];
let imgs = [
    "https://i.ytimg.com/vi/lK4Eb6rhuG8/maxresdefault.jpg",
    "https://i.ytimg.com/vi/KV2ssT8lzj8/maxresdefault.jpg",
    "https://i.ytimg.com/vi/KhTeiaCezwM/maxresdefault.jpg"
];
let links = [
    "https://www.youtube.com/watch?v=lK4Eb6rhuG8",
    "https://www.youtube.com/watch?v=KV2ssT8lzj8",
    "https://www.youtube.com/watch?v=KhTeiaCezwM"
];

songNames.forEach(function(name){
    let text =  name + "<br>";
    $('.songNames').append(text);
});

songArtists.forEach(function(artist){
    let text =  artist + "<br>";
    $('.songArtists').append(text);
});

songLengths.forEach(function(length){
    let text =  length + "<br>";
    $('.songLengths').append(text);
});

imgs.forEach(function(img){
    let text =  `<img src= ${img} <br>>`;
    $('.imgs').append(text);
});

links.forEach(function(link){
    let text =  `<a href=${link} target=_blank <br>>Click ME to Listen</a>`;
    $('.links').append(text);
});