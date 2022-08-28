const speakersArr = [
  {
	name: 'Lionel Tostivint',
	class_name: 'profile-pic',
	role: 'Chief Operating Officer at PNB Paribas',
	bioBata: 'Lionel Tostivint is working as Chief Operating Officer at BNP Paribas.'
			+ 'BNP Paribas has several entities operating directly in this territory, '
			+ 'offering a wide range of integrated financial solutions to support its '
			+ 'clients and their businesses.',
	image: 'images/Lionel.jpg',
	}, 
	{
	name: 'Shital Balser',
	class_name: 'profile-pic',
	role: 'Clinical Psychotherapist | Founder of Soulpsychology',
  bioBata: 'Her passion is to go deeper in the being, to discover what is beyond the identity of us,'
		+ 'the deeper self and true strength inside of us, '
		+ 'in order to live a more happy, fulfilled and successful life.',
  image: "images/shital.jpg"
	}, 
	{
	name: 'Anastasia Valentine',
	class_name: 'profile-pic',
	role: 'Chief Revenue Officer at Wagepoint',
	bioBata: 'Anastasia has held executive leadership roles with '
		+ 'startups to billion-dollar companies in the areas of innovation, '
		+ 'commercialization, marketing and sales.',
	image: "images/anastasia.jpg"
	}, 
	{
	name: 'Vivian Acquah',
	class_name: 'profile-pic',
	role: 'Inclusive Workplace Wellness Advocate ',
	bioBata: 'As an inclusive Workplace Wellness Advocate, Vivian Acquah advises managers '
	+ 'on how to keep their team members engaged, energized, and safe in a sustainable manner.',
	image: 'images/vivian.jpg',
	}, 
	{
	name: 'Jody Urquhart',
	class_name: 'profile-pic',
	role: 'Motivational Speaker',
	bioBata: 'Jody is a stand up comedian and a motivational' 
	+ 'speaker and participates in over 100 events per year.',
	image: 'images/jody.jpg',
	}, 
	{
	name:"Vincent Irrling",
	class_name: "profile-pic",
	role: "Founder at KAPSLY",
	bioBata: "Founder of KAPSLY, the first service investment marketplace "
		+ "with the mission to help founders to build their startups with "
		+ "hands-on support from professional service agencies.",
	image: "images/vincent.jpg"
	}];

let speakersList = document.querySelector('.speakers-list');
speakersArr.forEach(createObject);

function createObject (arr){        
  const i = speakersArr.indexOf(arr);
  const profileDiv = document.createElement('div'); 
  profileDiv.className = 'profile-div';        
  const imgDiv = document.createElement('div');
  imgDiv.className = 'img-div';
  const bgImg = document.createElement('img');
  bgImg.src = "images/chess.png";
  bgImg.alt = "Chess board";
	bgImg.className = "chess";
	const profilePic = document.createElement('img');
	profilePic.src = arr['image'];
	profilePic.alt = "Profile picture";
	profilePic.className = arr['class_name'];
	imgDiv.appendChild(bgImg);
	imgDiv.appendChild(profilePic);
	profileDiv.appendChild(imgDiv);

	const profileText = document.createElement('div');
	profileText.style.display = 'flex';
	profileText.style.flexDirection = 'column';
	profileText.className = 'profile-text';
	const name = document.createElement('h3');
	name.textContent = arr.name;
	name.className = 'name';
	const profileRole = document.createElement('p');
	profileRole.textContent = arr.role;
	profileRole.className = 'profile-role';
	const underlined = document.createElement('span');
	underlined.className = 'underline_';
	underlined.textContent = '____';
	const bioBata = document.createElement('p');
	bioBata.textContent = arr.bioBata;
	bioBata.className = 'bio-data';
	profileText.appendChild(name);
	profileText.appendChild(profileRole);
	profileText.appendChild(underlined);
	profileText.appendChild(bioBata);                   
	profileDiv.appendChild(profileText);
	profileDiv.gridColumn = i % 2 + 1;
	profileDiv.gridRow = Math.floor(i/2) + 1; 
	speakersList.appendChild(profileDiv);          
}

const speakers = speakersList.children;
const moreBtn = document.querySelector('.more-btn');

function displaySpeakers(){
	for(let i = 0; i < speakers.length; i + 1){
		speakers[i].style.display = 'block';                
	}
	this.location.reload();        
}

function hideSpeakers(){
	for(let i = 0; i < speakers.length; i + 1){
		if(i >= 2){
			speakers[i].style.display = 'none';
		}
	}
}

window.addEventListener('resize', function(){        
	if(this.window.innerWidth < 768){            
		hideSpeakers();
	}else{
		displaySpeakers();
	}
})

moreBtn.addEventListener('click', function(){
	displaySpeakers(); 
	moreBtn.style.display = 'none';       
})

// Mobile menu    
const homeMenuContainer = document.createElement('div');
homeMenuContainer.className = "home-menu-container";
const homeMenu = document.querySelector('.nav-two-text');
const mobileNav = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.close_btn');
const mobileMenuHome = document.querySelector('.mobile-menu');

function showMenu(homeMenu, mobileNav, closeBtn, menuContainer, mobileMenuHome){
	mobileNav.style.display = "none";
	mobileNav.cursor = 'pointer';
	menuContainer.style.display = 'flex';
	menuContainer.style.flexDirection = 'column';
	closeBtn.style.display = "block";
	menuContainer.appendChild(closeBtn);
	homeMenu.style.display = 'flex';
	homeMenu.style.flexDirection = 'column';
	menuContainer.appendChild(homeMenu);
	mobileMenuHome.appendChild(menuContainer);    
	menuContainer.classList.add('active-menu');    
}

function hideMenu(mobileNav, closeBtn, menuContainer){    
	closeBtn.style.display = 'none';
	menuContainer.classList.remove('active-menu');
	menuContainer.style.display = 'none';  
	mobileNav.style.display = 'block';    
}

mobileNav.addEventListener('click', function(){
	showMenu(homeMenu, mobileNav, closeBtn, homeMenuContainer, mobileMenuHome);
});

closeBtn.addEventListener('click', function(){
	hideMenu(mobileNav, closeBtn, homeMenuContainer);
});