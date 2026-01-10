// Authentic Duas Data
const duas = [
    {
        id: 1,
        category: "Morning",
        arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا ، وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
        transliteration: "Allahumma bika asbahna wa bika amsayna, wa bika nahya wa bika namootu wa ilaykan-nushoor.",
        translation: "O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the Final Return.",
        ref: "Tirmidhi"
    },
    {
        id: 2,
        category: "Food",
        arabic: "بِسْمِ اللَّهِ",
        transliteration: "Bismillah",
        translation: "In the name of Allah.",
        ref: "Bukhari"
    },
    {
        id: 3,
        category: "Travel",
        arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
        transliteration: "Subhanalladhi sakhkhara lana hadha wa ma kunna lahu muqrineen, wa inna ila Rabbina lamunqaliboon.",
        translation: "Glory to Him purely who has subjected this to us, and we were not able to do it. And surely to our Lord we are returning.",
        ref: "Quran 43:13-14"
    },
    {
        id: 4,
        category: "Sleep",
        arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
        transliteration: "Bismika Allahumma amootu wa ahya.",
        translation: "In Your Name, O Allah, I die and I live.",
        ref: "Bukhari"
    },
    {
        id: 5,
        category: "Home",
        arabic: "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا",
        transliteration: "Bismillahi walajna, wa bismillahi kharajna, wa 'ala Rabbina tawakkalna.",
        translation: "In the Name of Allah we enter, in the Name of Allah we leave, and upon our Lord we depend.",
        ref: "Abu Dawud"
    },
    {
        id: 6,
        category: "Evening",
        arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ",
        transliteration: "Amsayna wa amsal-mulku lillah, wal-hamdu lillah, la ilaha illallah wahdahu la shareeka lah.",
        translation: "We have reached the evening and at this very time unto Allah belongs all sovereignty, and all praise is for Allah. None has the right to be worshipped except Allah, alone, without partner.",
        ref: "Muslim"
    },
    {
        id: 7,
        category: "Prayer",
        arabic: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلاَةِ وَمِن ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاء",
        transliteration: "Rabbi j'alnee muqeemas-salati wa min dhurriyyatee rabbana wa taqabbal du'a.",
        translation: "My Lord, make me an establisher of prayer, and [many] from my descendants. Our Lord, and accept my supplication.",
        ref: "Quran 14:40"
    },
    {
        id: 8,
        category: "Ablution",
        arabic: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
        transliteration: "Ash-hadu an la ilaha illallah wahdahu la shareeka lahu wa ash-hadu anna Muhammadan 'abduhu wa Rasooluh.",
        translation: "I testify that there is no deity except Allah, alone, without partner, and I testify that Muhammad is His Servant and Messenger.",
        ref: "Muslim"
    },
    {
        id: 9,
        category: "Clothing",
        arabic: "الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا (الثَّوْبَ) وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
        transliteration: "Alhamdu lillahil-ladhee kasaanee hadha (ath-thawba) wa razaqaneehi min ghayri hawlin minnee wa la quwwah.",
        translation: "Praise be to Allah Who has clothed me with this (garment) and provided it for me, though I was powerless myself and incapable.",
        ref: "Abu Dawud"
    },
    {
        id: 10,
        category: "Sleep",
        arabic: "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ",
        transliteration: "Allahumma aslamtu nafsee ilayk, wa fawwadtu amree ilayk, wa wajjahtu wajhee ilayk.",
        translation: "O Allah, I submit my soul unto You, and I entrust my affair unto You, and I turn my face towards You.",
        ref: "Bukhari"
    },
    {
        id: 11,
        category: "Morning",
        arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
        transliteration: "SubhanAllahi wa bihamdihi.",
        translation: "Glory is to Allah and praise is to Him.",
        ref: "Bukhari"
    },
    {
        id: 12,
        category: "Prayer",
        arabic: "اللَّهُمَّ أَنْتَ السَّلاَمُ وَمِنْكَ السَّلاَمُ تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ",
        transliteration: "Allahumma antas-salam wa minkas-salam tabarakta ya dhal-jalali wal-ikram.",
        translation: "O Allah, You are As-Salam (The One Who is free from all defects and deficiencies), and from You is all peace, blessed are You, O Possessor of majesty and honor.",
        ref: "Muslim"
    }
];

// App State
let currentCategory = 'all';
let favs = JSON.parse(localStorage.getItem('savedDuas') || '[]');
let isFavMode = false;

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderFeed();
    
    // Search Listener
    document.getElementById('search-input').addEventListener('input', (e) => {
        renderFeed(e.target.value.toLowerCase());
    });

    // Fav Toggle Listener
    const favBtn = document.getElementById('fav-toggle-btn');
    favBtn.addEventListener('click', () => {
        isFavMode = !isFavMode;
        
        // UI Toggle
        if(isFavMode) {
            favBtn.classList.add('active');
            favBtn.innerHTML = '<i class="fas fa-heart"></i> All Duas';
            document.getElementById('page-title').innerText = 'Saved Collection';
        } else {
            favBtn.classList.remove('active');
            favBtn.innerHTML = '<i class="fas fa-heart"></i> Favorites';
            document.getElementById('page-title').innerText = 'All Duas';
        }
        
        renderFeed();
    });
}

function filterCategory(cat, btn) {
    // Nav UI
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Logic
    currentCategory = cat;
    isFavMode = false; // Reset fav mode on cat switch
    document.getElementById('fav-toggle-btn').classList.remove('active');
    
    document.getElementById('page-title').innerText = cat === 'all' ? 'All Duas' : `${cat} Duas`;
    
    renderFeed();
}

function renderFeed(searchQuery = '') {
    const feed = document.getElementById('duas-feed');
    feed.innerHTML = '';
    
    let data = duas;

    // 1. Category Filter
    if(currentCategory !== 'all') {
        data = data.filter(d => d.category === currentCategory);
    }

    // 2. Favorites Filter
    if(isFavMode) {
        data = data.filter(d => favs.includes(d.id));
    }

    // 3. Search Filter
    if(searchQuery) {
        data = data.filter(d => 
            d.translation.toLowerCase().includes(searchQuery) ||
            d.transliteration.toLowerCase().includes(searchQuery) ||
            d.category.toLowerCase().includes(searchQuery)
        );
    }

    if(data.length === 0) {
        feed.innerHTML = `<div style="text-align:center; padding:40px; color:#64748b;">
            <i class="fas fa-search" style="font-size:2rem; margin-bottom:10px;"></i><br>
            No duas found in this view.
        </div>`;
        return;
    }

    data.forEach(d => {
        const isSaved = favs.includes(d.id);
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-header">
                <span class="tag-pill">${d.category}</span>
                <span class="ref-pill">Ref: ${d.ref}</span>
            </div>
            
            <div class="arabic">${d.arabic}</div>
            
            <div class="transliteration">${d.transliteration}</div>
            
            <div class="translation">
                "${d.translation}"
            </div>
            
            <div class="card-footer">
                <button class="text-btn" onclick="copyText('${d.translation}')">
                    <i class="fas fa-copy"></i> Copy
                </button>
                <button class="text-btn" onclick="shareDua('${d.translation}')">
                    <i class="fas fa-share-alt"></i> Share
                </button>
                <button class="text-btn" style="color: ${isSaved ? '#f43f5e' : ''}" onclick="toggleSave(${d.id})">
                    <i class="${isSaved ? 'fas' : 'far'} fa-heart"></i> ${isSaved ? 'Saved' : 'Save'}
                </button>
            </div>
        `;
        feed.appendChild(card);
    });
}

// Actions
window.copyText = (text) => {
    navigator.clipboard.writeText(text);
    // Could add toast here
};

window.shareDua = (text) => {
    if(navigator.share) {
        navigator.share({ title: 'Dua', text: text });
    } else {
        copyText(text);
    }
};

window.toggleSave = (id) => {
    if(favs.includes(id)) {
        favs = favs.filter(x => x !== id);
    } else {
        favs.push(id);
    }
    localStorage.setItem('savedDuas', JSON.stringify(favs));
    renderFeed(); // Re-render to update heart icon immediately
};
