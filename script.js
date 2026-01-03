document.addEventListener('DOMContentLoaded', () => {
    // --- State Management ---
    const state = {
        location: {
            city: 'London',
            country: 'UK',
            lat: 51.5074,
            long: -0.1278
        },
        tasbihCount: 0,
        currentSurah: null
    };

    // --- DOM Elements ---
    const views = document.querySelectorAll('.view');
    const navLinks = document.querySelectorAll('.sidebar .nav-links li');
    const gregorianDateEl = document.getElementById('gregorian-date');
    const hijriDateEl = document.getElementById('hijri-date');

    // --- Navigation ---
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all
            navLinks.forEach(l => l.classList.remove('active'));
            views.forEach(v => v.classList.remove('active-view'));

            // Add active to current
            link.classList.add('active');
            const tabId = link.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active-view');
        });
    });

    // --- Date & Time ---
    function updateDates() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        gregorianDateEl.textContent = now.toLocaleDateString('en-US', options);

        // Simple Hijri calculation or API fetch
        // For now, simpler Intl API if supported or fetch
        if (typeof Intl.DateTimeFormat === 'function') {
            try {
                const hijri = new Intl.DateTimeFormat('en-u-ca-islamic', {
                    day: 'numeric', month: 'long', year: 'numeric'
                }).format(now);
                hijriDateEl.textContent = hijri;
            } catch (e) {
                hijriDateEl.textContent = "Hijri Date Loading...";
            }
        }
    }
    updateDates();

    // --- API: Prayer Times ---
    async function fetchPrayerTimes() {
        const container = document.getElementById('prayer-times-container');
        try {
            const dateStr = new Date().toLocaleDateString('en-GB').split('/').join('-'); // DD-MM-YYYY
            const res = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${state.location.city}&country=${state.location.country}&method=2`);
            const data = await res.json();

            const timings = data.data.timings;
            // Common prayers to show
            const prayerOrder = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

            container.innerHTML = ''; // Clear loading

            let nextPrayerFound = false;
            const now = new Date();
            const currentTimeStr = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');

            prayerOrder.forEach(prayer => {
                const time = timings[prayer];
                const div = document.createElement('div');
                div.className = 'prayer-time-item';

                // Simple next prayer logic (rough)
                // In a production app, we'd parse times properly

                div.innerHTML = `
                    <span class="prayer-name">${prayer}</span>
                    <span class="prayer-time">${time}</span>
                `;
                container.appendChild(div);

                // Dashboard Update
                if (!nextPrayerFound && time > currentTimeStr && prayer !== 'Sunrise') {
                    document.getElementById('next-prayer-name').textContent = prayer;
                    document.getElementById('next-prayer-time').textContent = time;
                    nextPrayerFound = true;
                    // Start countdown logic here if needed
                }
            });

            // Fallback if all prayers passed
            if (!nextPrayerFound) {
                document.getElementById('next-prayer-name').textContent = 'Fajr (Tomorrow)';
                document.getElementById('next-prayer-time').textContent = timings['Fajr'];
            }

        } catch (error) {
            console.error('Error fetching prayer times:', error);
            container.innerHTML = '<p style="color:red">Failed to load prayer times.</p>';
        }
    }
    fetchPrayerTimes();

    // --- API: Quran ---
    async function fetchSurahList() {
        const listContainer = document.getElementById('surah-list');
        try {
            const res = await fetch('https://api.alquran.cloud/v1/surah');
            const data = await res.json();

            listContainer.innerHTML = '';

            data.data.forEach(surah => {
                const title = document.createElement('div');
                title.className = 'surah-card';
                title.onclick = () => loadSurah(surah.number, surah.englishName);
                title.innerHTML = `
                    <div style="display:flex; align-items:center; gap:1rem;">
                        <span class="surah-number">${surah.number}</span>
                        <div class="surah-info">
                            <h4>${surah.englishName}</h4>
                            <p>${surah.englishNameTranslation} • ${surah.numberOfAyahs} Ayahs</p>
                        </div>
                    </div>
                    <span class="surah-arabic">${surah.name.replace('سُورَةُ', '')}</span>
                `;
                listContainer.appendChild(title);
            });
        } catch (error) {
            listContainer.innerHTML = '<p>Failed to load Surahs.</p>';
        }
    }
    fetchSurahList();

    async function loadSurah(number, name) {
        document.getElementById('surah-list').classList.add('hidden');
        document.getElementById('surah-detail').classList.remove('hidden');
        document.querySelector('.search-bar').classList.add('hidden'); // Hide search when reading

        const contentDiv = document.getElementById('surah-content');
        contentDiv.innerHTML = '<p>Loading...</p>';

        try {
            const res = await fetch(`https://api.alquran.cloud/v1/surah/${number}/editions/quran-uthmani,en.sahih`);
            const data = await res.json();

            const arabicData = data.data[0];
            const englishData = data.data[1];

            let html = `<h2>${name}</h2><br>`;

            // Bismillah handling (standard API usually includes it for all except Tawbah, logic simplified here)

            arabicData.ayahs.forEach((ayah, index) => {
                const enText = englishData.ayahs[index].text;
                html += `
                    <div class="ayah-container">
                        <p class="ayah-arabic">${ayah.text}</p>
                        <p class="ayah-translation">${enText}</p>
                        <small style="color:var(--text-muted)">Verse ${ayah.numberInSurah}</small>
                    </div>
                `;
            });

            contentDiv.innerHTML = html;

        } catch (error) {
            contentDiv.innerHTML = '<p>Error loading content.</p>';
        }
    }

    document.getElementById('back-to-surahs').addEventListener('click', () => {
        document.getElementById('surah-detail').classList.add('hidden');
        document.getElementById('surah-list').classList.remove('hidden');
        document.querySelector('.search-bar').classList.remove('hidden');
    });

    // --- API: Names of Allah ---
    async function fetchNames() {
        const grid = document.getElementById('names-grid');
        try {
            const res = await fetch('https://api.aladhan.com/v1/asmaAlHusna');
            const data = await res.json();

            // The API returns all 99
            data.data.forEach(item => {
                const div = document.createElement('div');
                div.className = 'name-card';
                div.innerHTML = `
              <span class="name-arabic">${item.name}</span>
              <h4>${item.transliteration}</h4>
              <p style="color:var(--text-muted); font-size:0.9rem;">${item.en.meaning}</p>
           `;
                grid.appendChild(div);
            });
        } catch (error) {
            grid.innerHTML = '<p>Failed to load Names.</p>';
        }
    }
    fetchNames();


    // --- Tasbih ---
    const tasbihCountEl = document.getElementById('tasbih-count');
    const tasbihBtn = document.getElementById('tasbih-count-btn');
    const tasbihReset = document.getElementById('tasbih-reset');

    tasbihBtn.addEventListener('click', () => {
        state.tasbihCount++;
        tasbihCountEl.textContent = state.tasbihCount;
        // Simple vibration on mobile if supported
        if (navigator.vibrate) navigator.vibrate(50);
    });

    tasbihReset.addEventListener('click', () => {
        if (confirm('Reset counter?')) {
            state.tasbihCount = 0;
            tasbihCountEl.textContent = 0;
        }
    });

    // --- Search Filter for Quran ---
    const searchInput = document.getElementById('quran-search');
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.surah-card');
        cards.forEach(card => {
            const txt = card.innerText.toLowerCase();
            card.style.display = txt.includes(val) ? 'flex' : 'none';
        });
    });

    // --- Store Interactions ---
    const addToCartBtns = document.querySelectorAll('.btn-add-cart, .product-info button');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Simple interaction feedback
            const originalText = btn.textContent;
            btn.textContent = "Added!";
            btn.style.background = "var(--accent)";
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = ""; // revert to CSS default
            }, 1500);
        });
    });

});
