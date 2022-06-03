const nav = document.querySelectorAll(".nav-menu");
const contents = document.querySelectorAll("#contents");

nav.forEach((item, index) => { 
	
	item.addEventListener("click", (e) => {		
		nav.forEach((list) => {
			list.classList.remove("active");
		});
		contents.forEach((list) => {
			list.classList.remove("active");
		});
		contents[index].classList.add("active")
		item.classList.add("active");
	});
});