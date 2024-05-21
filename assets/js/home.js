/**
 * #HEADER
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
    if (scrollY >= 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    };
});

/**
 * #HERO
 */
const btnSearch = document.querySelector("[data-btn-search]");
const query = document.querySelector("[data-search]");

btnSearch.addEventListener('click', () => { if (query.value) window.location.href = `display.html?query=${encodeURIComponent(query.value.toLowerCase())}`; });

query.addEventListener('keydown', e => { if (e.key == "Enter") btnSearch.click(); });

/**
 * #BOX LIST 
 */
const tabBtnSurah = document.querySelector("[data-tab-btn-Surah]");
const tabBtnPart = document.querySelector("[data-tab-btn-part]");
const tabBtnRemembrance = document.querySelector("[data-tab-btn-Remembrance]");
const boxGrid1 = document.querySelector("[data-box-grid-1]");
const boxGrid2 = document.querySelector("[data-box-grid-2]");
const boxGrid3 = document.querySelector("[data-box-grid-3]");

let boxZena = `
<li class="box-zena">
    <div class="id-zena"></div>
    <div class="title-zena"></div>
    <div class="box-bottom-zena"></div>
    <div class="bookmark-zena"></div>
</li>
`;

tabBtnSurah.addEventListener("click", () => {
    tabBtnSurah.classList.add("active");
    tabBtnPart.classList.remove("active");
    tabBtnRemembrance.classList.remove("active");

    boxGrid1.style.display = "grid";
    boxGrid2.style.display = "none";
    boxGrid3.style.display = "none";

    boxGrid2.innerHTML = ``;
    boxGrid3.innerHTML = ``;

    boxGrid1.innerHTML = `
        ${boxZena.repeat(14)}
    `;

    setTimeout(() => {
        boxGrid1.innerHTML = ``;

        fetch("data.json")
        .then(response => response.json()) 
        .then(data => {
            for (let i = 0; i < data.quran.length; i++) {
                boxGrid1.innerHTML += `
                <li class="box">
                    <a href="./display.html?query=${data.quran[i].link}">
                        <p class="id">${data.quran[i].id}</p>
                        <h3 class="title">${data.quran[i].title}</h3>
                    </a>
                    <div class="box-bottom">
                        <p class="ayat">${data.quran[i].ayat}</p>
        
                        <button class="bookmark bookmark-off" data-bookmark-off>
                            <i class="fa-regular fa-bookmark"></i>
                        </button>
        
                        <button class="bookmark bookmark-on" data-bookmark-on>
                            <i class="fa-solid fa-bookmark"></i>
                        </button>
                    </div>
                </li>
                `;
            };
        });
    });
});

tabBtnPart.addEventListener("click", () => {
    tabBtnPart.classList.add("active");
    tabBtnSurah.classList.remove("active");
    tabBtnRemembrance.classList.remove("active");
    
    boxGrid1.style.display = "none";
    boxGrid2.style.display = "grid";
    boxGrid3.style.display = "none";

    boxGrid1.innerHTML = ``;
    boxGrid3.innerHTML = ``;

    boxGrid2.innerHTML = `
        ${boxZena.repeat(14)}
    `;

    setTimeout(() => {
        boxGrid2.innerHTML = ``;

        fetch("data.json")
        .then(response => response.json()) 
        .then(data => {
            for (let i = 0; i < data.part.length; i++) {
                boxGrid2.innerHTML += `
                <li class="box">
                    <a href="./display.html?query=${data.part[i].link}">
                        <p class="id">${data.part[i].id}</p>
                        <h3 class="title">${data.part[i].title}</h3>
                    </a>
                    <div class="box-bottom">
                        <p class="ayat">${data.part[i].ayat}</p>
      
                        <button class="bookmark bookmark-off" data-bookmark-off>
                            <i class="fa-regular fa-bookmark"></i>
                        </button>
      
                        <button class="bookmark bookmark-on" data-bookmark-on>
                            <i class="fa-solid fa-bookmark"></i>
                        </button>
                    </div>
                </li>
                `;
            };
        });
    });
});

tabBtnRemembrance.addEventListener("click", () => {
    tabBtnRemembrance.classList.add("active");
    tabBtnSurah.classList.remove("active");
    tabBtnPart.classList.remove("active");

    boxGrid1.style.display = "none";
    boxGrid2.style.display = "none";
    boxGrid3.style.display = "grid";

    boxGrid1.innerHTML = ``;
    boxGrid2.innerHTML = ``;

    boxGrid3.innerHTML = `
        ${boxZena.repeat(14)}
    `;

    setTimeout(() => {
        boxGrid3.innerHTML = ``;

        fetch("data.json")
        .then(response => response.json()) 
        .then(data => {
            for (let i = 0; i < data.Remembrance.length; i++) {
                boxGrid3.innerHTML += `
                <li class="box">
                    <a href="./display.html?query=${data.Remembrance[i].link}">
                        <p class="id">${data.Remembrance[i].id}</p>
                        <h3 class="title">${data.Remembrance[i].title}</h3>
                    </a>
                    <div class="box-bottom">
                        <p class="ayat">${data.Remembrance[i].ayat}</p>
    
                        <button class="bookmark bookmark-off" data-bookmark-off>
                            <i class="fa-regular fa-bookmark"></i>
                        </button>
                        <button class="bookmark bookmark-on" data-bookmark-on>
                            <i class="fa-solid fa-bookmark"></i>
                        </button>
                    </div>
                </li>
                `;
            };
        });
    });
});

boxGrid1.innerHTML = `
    ${boxZena.repeat(14)}
`;

setTimeout(() => {
    boxGrid1.innerHTML = ``;

    fetch("data.json")
    .then(response => response.json()) 
    .then(data => {
        for (let i = 0; i < data.quran.length; i++) {
            boxGrid1.innerHTML += `
            <li class="box">
                <a href="./display.html?query=${data.quran[i].link}">
                    <p class="id">${data.quran[i].id}</p>
                    <h3 class="title">${data.quran[i].title}</h3>
                </a>
                <div class="box-bottom">
                    <p class="ayat">${data.quran[i].ayat}</p>
    
                    <button class="bookmark bookmark-off" data-bookmark-off>
                        <i class="fa-regular fa-bookmark"></i>
                    </button>
    
                    <button class="bookmark bookmark-on" data-bookmark-on>
                        <i class="fa-solid fa-bookmark"></i>
                    </button>
                </div>
            </li>
            `;
        };
    });
}, 200);