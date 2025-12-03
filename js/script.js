/******************************************************************************************* */
/*--------------------------------MUSHROOM GRID FOR atlas.html------------------------------ */
const mushrooms = [
    {
        name: "Borowik szlachetny",
        type: "edible",
        image: "images/mushrooms/borowik_szlachetny/borowik_szlachetny.jpg",
        page: "borowik_szlachetny.html"
    },
    {
        name: "Borowik sosnowy",
        type: "edible",
        image: "images/mushrooms/borowik_sosnowy/borowik_sosnowy.png",
        page: "borowik_sosnowy.html"
    },

    {
        name: "Czubajka kania",
        type: "edible",
        image: "images/mushrooms/czubajka_kania/czubajka_kania.png",
        page: "czubajka_kania.html"
    },    
    {
        name: "Koźlarz czerwony",
        type: "edible",
        image: "images/mushrooms/kozlarz_czerwony/kozlarz_czerwony.png",
        page: "kozlarz_czerwony.html"
    },    
    {
        name: "Mleczaj rydz",
        type: "edible",
        image: "images/mushrooms/mleczaj_rydz/mleczaj_rydz.png",
        page: "mleczaj_rydz.html"
    },    
        {
        name: "Pieprznik jadalny",
        type: "edible",
        image: "images/mushrooms/pieprznik_jadalny/pieprznik_jadalny.png",
        page: "pieprznik_jadalny.html"
    },    

    {
        name: "Gołąbek wymiotny",
        type: "toxic",
        image: "images/mushrooms/golabek_wymiotny/golabek_wymiotny.png",
        page: "golabek_wymiotny.html"
    },    
       
   {
        name: "Hubiak pospolity",
        type: "inedible",
        image: "images/mushrooms/hubiak_pospolity/hubiak_pospolity.jpg",
        page: "hubiak_pospolity.html"
    },    
  

    {
        name: "Muchomor czerwony",
        type: "toxic",
        image: "images/mushrooms/muchomor_czerwony/muchomor_czerwony.png",
        page: "muchomor_czerwony.html"
    },
    {
        name: "Muchomor sromotnikowy",
        type: "toxic",
        image: "images/mushrooms/muchomor_sromotnikowy/muchomor_sromotnikowy.png",
        page: "muchomor_sromotnikowy.html"
    },    
]



document.addEventListener('DOMContentLoaded', () => {
    const atlasGrid = document.querySelector('.atlas-grid');
    const edibleCheckbox = document.getElementById('filter-edible');
    const toxicCheckbox = document.getElementById('filter-toxic');
    const inedibleCheckbox = document.getElementById('filter-inedible');

    function createMushroomCards() {
        atlasGrid.innerHTML = '';
        mushrooms.forEach(m => {
            const card = document.createElement('div');
            card.classList.add('mushroom-card');
            card.setAttribute('data-type', m.type);
            card.onclick = () => { window.location.href = m.page; };

            let typeClass='';
            let typeText = '';

            if (m.type === 'edible'){
                typeClass = 'edible';
                typeText = 'Jadalny';
            }else if(m.type === 'inedible'){
                typeClass = 'inedible';
                typeText = 'Niejadalny'
            }else if(m.type === 'toxic'){
                typeClass = 'toxic';
                typeText = 'Trujący'
            }
            card.innerHTML = `
                <img src="${m.image}" alt="${m.name}">
                <h4>${m.name}</h4>
                <p class="type ${typeClass}">
                    ${typeText}
                </p>
                `;
            atlasGrid.appendChild(card);
        });
    }

    function filterMushrooms() {
        const cards = document.querySelectorAll('.mushroom-card');
        cards.forEach(card => {
            const type = card.getAttribute('data-type');
            if ((type === 'edible' && edibleCheckbox.checked) || 
                (type === 'toxic' && toxicCheckbox.checked) || 
            ((type === 'inedible' && inedibleCheckbox.checked))) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    createMushroomCards();
    filterMushrooms();
    edibleCheckbox.addEventListener('change', filterMushrooms);
    toxicCheckbox.addEventListener('change', filterMushrooms);
    inedibleCheckbox.addEventListener('change', filterMushrooms);
});




/******************************************************************************************* */
/*--------------------------------------HAMBURGER MENU-------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("open");
  });

  const dropdownPar = document.querySelectorAll(".menu ul li:has(.dropdown)");

  dropdownPar.forEach(par => {
    par.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.stopPropagation(); 
        par.classList.toggle("open-dropdown");
        const dropdown = par.querySelector(".dropdown");
        if (dropdown) {
          dropdown.style.display = par.classList.contains("open-dropdown") ? "block" : "none";
        }
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768){
      dropdownPar.forEach(par => {
        if (!par.contains(e.target)) {
          par.classList.remove("open-dropdown");
          const dropdown = par.querySelector(".dropdown");
          if (dropdown) dropdown.style.display = "none";
        }
      });
    }
  });
});



/******************************************************************************************* */
/*---------------------------------HEADER BG COLOR CHANGE----------------------------------- */
window.addEventListener('scroll', ()=>{
  const header = document.querySelector('header');
  if(window.scrollY > 50){
    header.classList.add('scrolled');
  }else{
    header.classList.remove('scrolled');
  }
})



/******************************************************************************************* */
/*--------------------------RANDOM FUN FACT FOR index.html --------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  const facts = [
    "Na świecie istnieje grupa grzybów drapieżnych, które żywią się drobnymi zwierzętami bezkręgowymi.",
    "Największym organizmem na Ziemi jest grzyb, a konkretnie opieńka ciemna, której grzybnia zajmuje niemal 9 kilometrów kwadratowych i waży (wg szacunków) ponad 600 ton.",
    "Niektóre gatunki grzybów, takie jak Mycena chlorophos, są bioluminescencyjne i potrafią emitować światło. ",
    "Trufla biała (Tuber magnatum), rosnąca głównie we Włoszech, należy do najdroższych grzybów świata. Jej cena sięga nawet 5000 euro za kilogram. ",
    "Niektóre grzyby rosną w niesamowitym tempie. Grzyby z rodzaju Coprinus potrafią rosnąć nawet 5 mm na minutę. Oznacza to, że w ciągu kilku godzin mogą całkowicie wyrosnąć i osiągnąć dojrzałość.",
    "W starożytnym Egipcie grzyby uważano za święte i nazywano „roślinami nieśmiertelności”. Mogli je spożywać jedynie faraonowie i członkowie rodziny królewskiej. ",
    "Grzyby takie jak Reishi (Ganoderma lucidum) i Chaga (Inonotus obliquus) są ważną częścią medycyny tradycyjnej. Wzmacniają odporność, działają przeciwzapalnie i przeciwnowotworowo.",
    "Pierwszy antybiotyk – penicylina – został wyizolowany z grzyba Penicillium notatum w 1928 roku przez Alexandra Fleminga. ",
    "Do poszukiwania trufli wykorzystuje się specjalnie szkolone psy, najczęściej labradory i cocker spaniele.",
    "Grzyby potrafią komunikować się ze sobą przez sieci mikoryzowe.",
    "Grzyby mogą przetrwać w ekstremalnych warunkach, np. w kosmosie.",
    "W Polsce występuje aż 1000 gatunków grzybów jadalnych. Gatunków grzybów niejadalnych oraz trujących jest jeszcze więcej.",
    "Muchomor zielonawy zwany również muchomorem sromotnikowym zawiera w sobie tyle jadu, że można nim otruć 4 osoby."  
];



  const factElement = document.getElementById('fact');
  const randomIndex = Math.floor(Math.random() * facts.length);
  factElement.textContent = facts[randomIndex];

  const button = document.getElementById('new-fact');
  button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
  });
});





/******************************************************************************************* */
/*----------------------------------obsługa SIDEBAR TOC------------------------------------- */
document.addEventListener("DOMContentLoaded", function() {
    const sidebarLinks=document.querySelectorAll('.sidebar-toc a');
    const headerOffset = 100; 

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e){
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (!targetSection) return;

            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = window.pageYOffset + elementPosition - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            const h3 = targetSection.querySelector('h3');
            if (!h3) return;
            h3.classList.add('active');

            setTimeout(() => {
                h3.classList.remove('active');
            }, 1000);
        });
    });
});





/******************************************************************************************* */
/*------------------------------------IMAGE CAROUSEL---------------------------------------- */
const images = document.querySelectorAll('.img-carousel .carousel-image');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let current = 0;
images[current].classList.add('active');

function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
});

nextBtn.addEventListener('click', () => {
    current = (current + 1) % images.length;
    showImage(current);
});






