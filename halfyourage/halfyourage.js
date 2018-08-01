/*function myfunction(){
	var age = prompt("please put in your age here to see if you are a sick bastard");
	var highest = (age-7) * 2
	var lowest = age / 2 + 7
	document.write(" lowest age is " +  lowest + "<br>")
	document.write(" highest age is " + highest);
}

function yourfunction() {
	var age = prompt("your age");
	var highest = (age-7) * 2
	var lowest = age / 2 + 7
	var otherage = prompt("significant other's age")

	if(otherage > highest || otherage < lowest)
		{document.write("sus")}
	else{document.write("kosher")}

	}*/

function thenextfunction(){
var age = document.getElementById('pore').value;

	var highest = (age-7) * 2
	var lowest = age / 2 + 7
	var display=document.getElementById("display")

	display.innerHTML=("<br>" + "low: " +  lowest + " y.o." + " || " + "high: " + highest + " y.o." + "<br>" + "<br>" + '<img class="beware" src="https://media.giphy.com/media/3o7TKugn2ylpjNGUNy/giphy.gif">')
    return false;
}