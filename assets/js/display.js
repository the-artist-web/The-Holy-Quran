/**
 * #OVERFLOW
 */
const overflow = document.querySelector("[data-overflow]");

/**
 * #ASIED
 */
const aside = document.querySelector("[data-aside]");
const btnSura = document.querySelector("[data-btn-sura]");
const btnGuza = document.querySelector("[data-btn-guza]");
const xmark = document.querySelector("[data-xmark]");
const asideListSura = document.querySelector("[data-aside-list-sura]");
const searchSura = document.querySelector("[data-search-sura]");
const asideListGuza = document.querySelector("[data-aside-list-guza]");
const searchGuza = document.querySelector("[data-search-guza]");

const btnAzkar = document.querySelector("[data-btn-azkar]");
const asideListAzkar = document.querySelector("[data-aside-list-azkar]");
const searchAzkar = document.querySelector("[data-search-azkar]");

const btnShowAside = document.querySelector("[data-btn-show-aside]");

const tagLink = document.querySelectorAll(".tag-link");

btnSura.addEventListener("click", () => {
    btnSura.classList.add("active");
    btnGuza.classList.remove("active");
    btnAzkar.classList.remove("active");

    asideListSura.style.display = "flex";
    asideListGuza.style.display = "none";
    asideListAzkar.style.display = "none";
});

btnGuza.addEventListener("click", () => {
    btnGuza.classList.add("active");
    btnSura.classList.remove("active");
    btnAzkar.classList.remove("active");
    
    asideListGuza.style.display = "flex";
    asideListSura.style.display = "none";
    asideListAzkar.style.display = "none";
});

btnAzkar.addEventListener("click", () => {
    btnAzkar.classList.add("active");
    btnGuza.classList.remove("active");
    btnSura.classList.remove("active");
    
    asideListAzkar.style.display = "flex";
    asideListGuza.style.display = "none";
    asideListSura.style.display = "none";
});

btnShowAside.addEventListener("click", () => {
    overflow.classList.add("active");
    aside.classList.add("active");
    document.body.style.overflow = "hidden";
})

xmark.addEventListener("click", () => {
    overflow.classList.remove("active");
    aside.classList.remove("active");
    document.body.style.overflow = "visible";
});

overflow.addEventListener("click", () => {
    overflow.classList.remove("active");
    aside.classList.remove("active");
    document.body.style.overflow = "visible";
});

searchSura.addEventListener('input', () => {
    const query = searchSura.value.toLowerCase();
    for (let i = 0; i < tagLink.length; i++) {
        if (tagLink[i].innerHTML.toLowerCase().indexOf(query) >= 0) {
            tagLink[i].style.display = "";
        } else {
            tagLink[i].style.display = "none";
        };
    };
});

searchGuza.addEventListener('input', () => {
    const query = searchGuza.value.toLowerCase();
    for (let i = 0; i < tagLink.length; i++) {
        if (tagLink[i].innerHTML.toLowerCase().indexOf(query) >= 0) {
            tagLink[i].style.display = "";
        } else {
            tagLink[i].style.display = "none";
        }
    }
});

searchAzkar.addEventListener('input', () => {
    const query = searchAzkar.value.toLowerCase();
    for (let i = 0; i < tagLink.length; i++) {
        if (tagLink[i].innerHTML.toLowerCase().indexOf(query) >= 0) {
            tagLink[i].style.display = "";
        } else {
            tagLink[i].style.display = "none";
        }
    }
});

/**
 * #HOME
 */
const pushContent = document.querySelector("[data-push-content]");

pushContent.innerHTML = `
<div class="home-zena">
<div class="container">
    <div class="home-img-zena"></div>

    <div class="home-content-zena">
        <div class="home-title-zena">
            <h1 class="title-zena"></h1>

            <div class="boxs-saved-zena"></div>
        </div>

        <div class="home-bottom-zena"></div>

        <h2 class="title-description-zena"></h2>

        <p class="description-zena"></p>
        <p class="description-zena"></p>
        <p class="description-zena"></p>
        <p class="description-zena"></p>
        <p class="description-zena"></p>
        <p class="description-zena"></p>
        <p class="description-zena"></p>
        <p class="description-zena"></p>
        <p class="description-zena"></p>
        <p class="description-zena"></p>
        <p class="description-zena"></p>
        <p class="description-zena"></p>
        <p class="description-zena"></p>
        <p class="description-zena"></p>
        <p class="description-zena"></p>
        <p class="description-zena"></p>
    </div>
</div>
</div>

<h1 class="h1"><span class="title-zena"></span></h1>

<p class="sura-zena"></p>
<p class="sura-zena"></p>
<p class="sura-zena"></p>
<p class="sura-zena"></p>
<p class="sura-zena"></p>
<p class="sura-zena"></p>
<p class="sura-zena"></p>
<p class="sura-zena"></p>
<p class="sura-zena"></p>
<p class="sura-zena"></p>
<p class="sura-zena"></p>
<p class="sura-zena"></p>
<p class="sura-zena"></p>
<p class="sura-zena"></p>
<p class="sura-zena"></p>
<p class="sura-zena"></p>
<p class="sura-zena"></p>
<p class="sura-zena"></p>
<p class="sura-zena"></p>
<p class="sura-zena"></p>
<p class="sura-zena"></p>
<p class="sura-zena"></p>
`;

setTimeout(() => {
    pushContent.innerHTML = ``;

    fetch("data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('query') ? decodeURIComponent(urlParams.get('query')).toLowerCase() : '';

        const filteredSurahs = data.display.filter(display => display.title.toLowerCase().includes(query));

        filteredSurahs.forEach(item => {
            pushContent.innerHTML += `
            <div class="home">
                <div class="container">
                    <figure>
                        <img src="${item.image}" alt="${item.title}" loading="lazy" class="home-img img-cover">
                    </figure>
        
                    <div class="home-content">
                        <div class="home-title">
                            <h1 class="title">${item.title}</h1>
        
                            <div class="boxs-saved">
                                <button class="bookmark bookmark-off" data-bookmark-off>
                                    <span>save</span>
                                    <i class="fa-regular fa-bookmark"></i>
                                </button>
        
                                <button class="bookmark bookmark-on" data-bookmark-on>
                                    <span>unsaved</span>
                                    <i class="fa-solid fa-bookmark"></i>
                                </button>
                            </div>
                        </div>
        
                        <div class="home-bottom">
                            <p>${item.ayat}</p>
                        </div>
        
                        <h2 class="title-description">معلومات عنها:</h2>
                        <p class="description">${item.description}</p>
                    </div>
                </div>
            </div>
        
            <h1 class="display-title">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</h1>
        
            <p class="sura">${item.sura}</p>
            `;
        });
    })
    .catch(error => { console.error('Fetch error:', error); });
}, 300);