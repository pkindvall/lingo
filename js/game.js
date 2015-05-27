var ordLista =["gurka", "banan", "morot"];

var valtOrd = ordLista[Math.floor (Math.random()*3)];

console.log(valtOrd);

var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function()){

	var användarOrd = document.getElementsByTagName("input")[0].value;

	if(value === användarOrd)
	{
		alert ("Grattis");
	}else 
	{
		alert("Obs! försöks igen");
	}
}

