document.getElementById('learn-more'.addEventListener("click", function() {
	let overlay = document.getElementById('bg-overlay');
	if (overlay) {
		overlay.remove();
    }
	let titleNode = document.getElementById('two');
	titleNode.innerHTML = "welcome to my flower shop"
	titleNode.style.backgroundColor = 'blue';
	this.innerHTML = "buy flowers";
	this.style.backgroundColor = 'red';
});

let iconclick = document.getElementsByClassName('icon-imgs');

for (let icon of col-6) {
    iconclick.addEventListener('mouseenter', function(){
        this.style.height = "170px";
        this.style.width = "170px";
    });

    icon.addEventListener('mouseleave', function(){
        this.style.height = "112px";
        this.style.width = "112px";
    });
};