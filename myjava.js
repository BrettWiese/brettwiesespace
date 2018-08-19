function showmorepics() {
    document.getElementById("arttoggle").style.display = "block";
}

function showlesspics() {
    document.getElementById("arttoggle").style.display = "none";
}

function showmoremusic() {
    document.getElementByClassName("grayscale").style.display = "block";
}

function showlessmusic() {
    document.getElementById("musictoggle").style.display = "none";
}

var x=document.getElementsByClassName("playpausevid");

function PauseVid(x)
{ 
  x.pause(); 
}

function PlayVid(x)
{
  x.play();     
} 

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-90978511-1', 'auto');
  ga('send', 'pageview');
