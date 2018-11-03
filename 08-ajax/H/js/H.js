let learn = document.getElementById('learn-more');

learn.click(function(){
	let overlay = document.getElementById('overlay');
    overlay.remove();
    

	let flowershopTitle = document.getElementById('flowershop-title');
	flowershopTitle.innerHTML = "Welcome to my flower shop"
	flowershopTitle.style.backgroundColor = 'blue';
    this.innerHTML = "buy flowers";
    this.style.backgroundColor = 'red';
});

let iconclick = document.getElementsByClassName('icon');

for (let element of iconclick) {    
    element.addEventListener('mouseenter', function(){
        this.style.height = "170px";
        this.style.width = "170px";
    });

    element.addEventListener('mouseleave', function(){
        this.style.height = "112px";
        this.style.width = "112px";
    });
};