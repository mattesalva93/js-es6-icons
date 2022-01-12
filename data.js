const elenco = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
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





function generaBox(elemento, creaBox){
	creaBox.innerHTML += `
		<div class="col text-center box">
			<i class="${elemento.family} ${elemento.prefix}${elemento.name} ${elemento.type}" style="color:${elemento.color}"></i>
			<h6>${elemento.name.toUpperCase()}</h6>
		</div>  
	`
}
