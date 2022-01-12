const elenco = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColore ()
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColore ()
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColore ()
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColore ()
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColore ()
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColore ()
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColore ()
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColore ()
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: randomColore ()
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: randomColore ()
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: randomColore ()
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: randomColore ()
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: randomColore ()
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: randomColore ()
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: randomColore ()
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: randomColore ()
	}
];

const elencoAnimali = elenco.filter((elemento) => {
	if(elemento.type == "animal"){
		return true
	} else{
		return false;
	} 
});

const elencoVegetali = elenco.filter((elemento) => {
	if(elemento.type == "vegetable"){
		return true
	} else{
		return false;
	} 
});

const elencoUser = elenco.filter((elemento) => {
	if(elemento.type == "user"){
		return true
	} else{
		return false;
	} 
});


let creaBox = document.getElementById("box-container");
 
elenco.forEach(elemento => {
	generaBox(elemento, creaBox);
});

let scelta = document.getElementById("type-selection");
scelta.addEventListener( "change", function() {
	const sceltaTipo = this.value;
	console.log(sceltaTipo);
	creaBox.innerHTML = "";

	if (sceltaTipo == "all"){
		elenco.forEach(elemento => {
			generaBox(elemento, creaBox);
		});
	}else if(sceltaTipo == "animal"){
		elencoAnimali.forEach(elemento => {
			generaBox(elemento, creaBox);
		});
	}else if(sceltaTipo == "vegetable"){
		elencoVegetali.forEach(elemento => {
			generaBox(elemento, creaBox);
		});
	}else{
		elencoUser.forEach(elemento => {
			generaBox(elemento, creaBox);
		});
	}
});



//lista funzioni 
//funzione genera box con elementi di un'array
function generaBox(elemento, creaBox){
	creaBox.innerHTML += `
		<div class="col text-center box">
			<i id="${elemento.type}" class="${elemento.family} ${elemento.prefix}${elemento.name} ${elemento.type}" style="color:${elemento.color}"></i>
			<h6>${elemento.name.toUpperCase()}</h6>
		</div>  
	`
}

//funzione genera colore esadecimale randomizzato
function randomColore (){
	esadecimaleArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
	arrayNuovoColore = [];
	for (i=0; i < 6; i++){
		arrayNuovoColore.push(esadecimaleArray[Math.floor(Math.random()*esadecimaleArray.length)]);
	}
	let nuovoColore = "#" + arrayNuovoColore.join("");
	return nuovoColore;	
}
