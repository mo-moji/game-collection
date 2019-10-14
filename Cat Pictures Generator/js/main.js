const whatsCat = () => {
	const catPic = document.querySelector(".cat-generator img");
	const catBtn = document.querySelector(".cat-generator button");
	const catFactsBtn = document.querySelector(".facts .facts-button");
	const facts = document.querySelector(".facts-api");

	catFactsBtn.addEventListener('click',()=>{
		fetch("https://cors-anywhere.herokuapp.com/https://catfact.ninja/fact")
			.then(data => {
				return data.json();
			})
			.then(data => {
				facts.textContent = data.fact;
			})
	})

	catBtn.addEventListener('click',()=>{
		fetch("https://api.thecatapi.com/v1/images/search")
			.then(data => {
				return data.json();
			})
			.then(data => {
				catPic.src = data[0].url;
			})
	})
	

}

whatsCat();