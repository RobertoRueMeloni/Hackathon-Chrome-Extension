
const pics = [
  "https://www.codesmith.io/hs-fs/hubfs/Screen%20Shot%202022-11-29%20at%203.58.43%20PM.png?width=1952&height=2128&name=Screen%20Shot%202022-11-29%20at%203.58.43%20PM.png",
  "https://www.codesmith.io/hs-fs/hubfs/Bio_picture_Alexander.jpg?width=1432&height=1430&name=Bio_picture_Alexander.jpg",
  "https://www.codesmith.io/hs-fs/hubfs/Screen%20Shot%202022-11-29%20at%203.56.38%20PM.png?width=1080&height=1356&name=Screen%20Shot%202022-11-29%20at%203.56.38%20PM.png",
  
  //"https://www.codesmith.io/hs-fs/hubfs/Screen%20Shot%202022-07-06%20at%2010.15.38%20AM.png?width=2312&height=2032&name=Screen%20Shot%202022-07-06%20at%2010.15.38%20AM.png",
  //"https://www.codesmith.io/hs-fs/hubfs/Screen%20Shot%202022-10-11%20at%209.15.27%20AM.png?width=2080&height=2192&name=Screen%20Shot%202022-10-11%20at%209.15.27%20AM.png",
  //"https://www.codesmith.io/hs-fs/hubfs/headshot.jpg?width=2232&height=2232&name=headshot.jpg",
  //"https://www.codesmith.io/hs-fs/hubfs/Screen%20Shot%202022-04-21%20at%2010.27.03%20AM.png?width=504&height=508&name=Screen%20Shot%202022-04-21%20at%2010.27.03%20AM.png",
  //"https://www.codesmith.io/hubfs/Codesmith_June2021/Images/Phillip%20Troutman.jpg",
  //"https://www.codesmith.io/hubfs/Codesmith_June2021/Images/Will%20Sentance.jpg"
  ];
  
const webImg = document.querySelectorAll('img');
for (let i=0; i<webImg.length; i++) {
  const randomImage = Math.floor(Math.random()*pics.length)
  webImg[i].src = pics[randomImage];
}
const headers = document.getElementsByTagName('h1');
for(let i = 0; i< headers.length; i++) {
headers[i].innerText = 'You are Awesome. Positive vibes'
}
console.log(webImg, headers)
console.log(document.querySelectorAll('.popup'));
const timing = 1000*2 ;

//invoke the setTimeout (sleep function, time))
setTimeout(() => {
  document.querySelector(".popup").style.display = "block";
}, 1000*10);


/** 
$('div').click(function() {
    alert('A div was clicked!');
  });
**/