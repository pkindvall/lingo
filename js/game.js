var ordLista =["gurka", "banan", "morot"];

var valtOrd = ordLista[Math.floor (Math.random()*3)];

console.log(valtOrd);

var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function(){

	var användarOrd = document.getElementsByTagName("input")[0].value;

	//hämta rutor och lägg in bokstäverna rätt

	var rutor = document.getElementsByTagName("td");

	for (var i=0;i<5;i++)
{
	rutor[i].innerHTML = anvandarOrd[i];

	if (användarOrd)[i] === valtOrd[i]){

	}
rutor[i].style.background ="green";
	}
	else
	{
	rutor[i].style.background = "red";
}
}


	if(valtOrd === användarOrd)
	{
		alert ("Grattis");
	}else 
	{
		alert("Obs! försöks igen");
	}
}




