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

    // إضافة محتوى متكرر إلى boxGrid1
    boxGrid1.innerHTML = `
        ${boxZena.repeat(14)}
    `;

    // استخدام setTimeout لتأخير تنفيذ الجلب (fetch)
    setTimeout(() => {
        // إفراغ محتوى boxGrid1
        boxGrid1.innerHTML = ``;

        // جلب البيانات من data.json
        fetch("data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            let content = ''; // متغير لتجميع المحتوى

            // حلقة لإضافة البيانات إلى المحتوى
            data.quran.forEach(item => {
                content += `
                <li class="box">
                    <a href="./display.html?query=${item.link}">
                        <p class="id">${item.id}</p>
                        <h3 class="title">${item.title}</h3>
                    </a>
                    <div class="box-bottom">
                        <p class="ayat">${item.ayat}</p>
        
                        <button class="bookmark bookmark-off" data-bookmark-off>
                            <i class="fa-regular fa-bookmark"></i>
                        </button>
        
                        <button class="bookmark bookmark-on" data-bookmark-on>
                            <i class="fa-solid fa-bookmark"></i>
                        </button>
                    </div>
                </li>
                `;
            });

            // تعيين المحتوى المجمع إلى boxGrid1.innerHTML
            boxGrid1.innerHTML = content;
        })
        .catch(error => {
            console.error('Fetch error:', error);
            // يمكنك هنا إضافة معالجة للأخطاء، مثل عرض رسالة للمستخدم
        });
    }, 200);
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

    // إضافة محتوى متكرر إلى boxGrid1
    boxGrid2.innerHTML = `
        ${boxZena.repeat(14)}
    `;

    // استخدام setTimeout لتأخير تنفيذ الجلب (fetch)
    setTimeout(() => {
        // إفراغ محتوى boxGrid1
        boxGrid2.innerHTML = ``;

        // جلب البيانات من data.json
        fetch("data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            let content = ''; // متغير لتجميع المحتوى

            // حلقة لإضافة البيانات إلى المحتوى
            data.part.forEach(item => {
                content += `
                <li class="box">
                    <a href="./display.html?query=${item.link}">
                        <p class="id">${item.id}</p>
                        <h3 class="title">${item.title}</h3>
                    </a>
                    <div class="box-bottom">
                        <p class="ayat">${item.ayat}</p>
        
                        <button class="bookmark bookmark-off" data-bookmark-off>
                            <i class="fa-regular fa-bookmark"></i>
                        </button>
        
                        <button class="bookmark bookmark-on" data-bookmark-on>
                            <i class="fa-solid fa-bookmark"></i>
                        </button>
                    </div>
                </li>
                `;
            });

            // تعيين المحتوى المجمع إلى boxGrid1.innerHTML
            boxGrid2.innerHTML = content;
        })
        .catch(error => {
            console.error('Fetch error:', error);
            // يمكنك هنا إضافة معالجة للأخطاء، مثل عرض رسالة للمستخدم
        });
    }, 200);
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

    // إضافة محتوى متكرر إلى boxGrid1
    boxGrid3.innerHTML = `
        ${boxZena.repeat(14)}
    `;

    // استخدام setTimeout لتأخير تنفيذ الجلب (fetch)
    setTimeout(() => {
        // إفراغ محتوى boxGrid1
        boxGrid3.innerHTML = ``;

        // جلب البيانات من data.json
        fetch("data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            let content = ''; // متغير لتجميع المحتوى

            // حلقة لإضافة البيانات إلى المحتوى
            data.Remembrance.forEach(item => {
                content += `
                <li class="box">
                    <a href="./display.html?query=${item.link}">
                        <p class="id">${item.id}</p>
                        <h3 class="title">${item.title}</h3>
                    </a>
                    <div class="box-bottom">
                        <p class="ayat">${item.ayat}</p>
        
                        <button class="bookmark bookmark-off" data-bookmark-off>
                            <i class="fa-regular fa-bookmark"></i>
                        </button>
        
                        <button class="bookmark bookmark-on" data-bookmark-on>
                            <i class="fa-solid fa-bookmark"></i>
                        </button>
                    </div>
                </li>
                `;
            });

            // تعيين المحتوى المجمع إلى boxGrid1.innerHTML
            boxGrid3.innerHTML = content;
        })
        .catch(error => {
            console.error('Fetch error:', error);
            // يمكنك هنا إضافة معالجة للأخطاء، مثل عرض رسالة للمستخدم
        });
    }, 200);
});

// إضافة محتوى متكرر إلى boxGrid1
boxGrid1.innerHTML = `
    ${boxZena.repeat(14)}
`;

// استخدام setTimeout لتأخير تنفيذ الجلب (fetch)
setTimeout(() => {
    // إفراغ محتوى boxGrid1
    boxGrid1.innerHTML = ``;

    // جلب البيانات من data.json
    fetch("data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        let content = ''; // متغير لتجميع المحتوى

        // حلقة لإضافة البيانات إلى المحتوى
        data.quran.forEach(item => {
            content += `
            <li class="box">
                <a href="./display.html?query=${item.link}">
                    <p class="id">${item.id}</p>
                    <h3 class="title">${item.title}</h3>
                </a>
                <div class="box-bottom">
                    <p class="ayat">${item.ayat}</p>
    
                    <button class="bookmark bookmark-off" data-bookmark-off>
                        <i class="fa-regular fa-bookmark"></i>
                    </button>
    
                    <button class="bookmark bookmark-on" data-bookmark-on>
                        <i class="fa-solid fa-bookmark"></i>
                    </button>
                </div>
            </li>
            `;
        });

        // تعيين المحتوى المجمع إلى boxGrid1.innerHTML
        boxGrid1.innerHTML = content;
    })
    .catch(error => {
        console.error('Fetch error:', error);
        // يمكنك هنا إضافة معالجة للأخطاء، مثل عرض رسالة للمستخدم
    });
}, 200);