const movies = [
    { 
        id: 1, 
        title: "Dune: Part Two", 
        genre: "Sci-Fi", 
        image: "Images/dune.jpg",
        trailer: "https://www.youtube.com/embed/Way9Dexny3w" 
    },
    { 
        id: 2, 
        title: "The Batman", 
        genre: "Action", 
        image: "Images/The Batman.jpg",
        trailer: "https://www.youtube.com/embed/u34gHaRiBIU"
    },
    { 
        id: 3, 
        title: "Interstellar", 
        genre: "Sci-Fi", 
        image: "Images/Interstellar.jpg",
        trailer: "https://www.youtube.com/embed/zSWdZVtXT7E" 
    },
    { 
        id: 4,
        title: "Inception",
        genre: "Sci-Fi",
        image: "Images/Inception.jpg",
        trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    { 
        id: 5,
        title: "Demon Slayer: Infinity Castle",
        genre: "Action",
        image: "Images/Demon Slayer.jpg",
        trailer:"https://www.youtube.com/embed/x7uLutVRBfI"
    }
];
function openTrailer(url) {
    const modal = document.getElementById("modal");
    const frame = document.getElementById("trailerFrame");
    
    // الحل الأقوى لضمان القبول من سيرفرات جوجل
    const finalUrl = `${url}?autoplay=1&rel=0&origin=${window.location.origin}`;
    
    frame.src = finalUrl;
    modal.style.display = "flex";
}

function renderMovies(list) {
    const grid = document.getElementById("movieGrid");

    grid.innerHTML = list.map(m => `
        <div class="movie-card">
            <img src="${m.image}" alt="${m.title}">
            <div class="movie-info">
                <h3>${m.title}</h3>
                <p>${m.genre}</p>
                <div class="card-btns">
                    <button class="btn-book" onclick="goToBooking('${m.title}')">Book Now</button>
                    <button class="btn-trailer" onclick="openTrailer('${m.trailer}')">Open Trailer</button>
                </div>
            </div>
        </div>
    `).join("");
}

renderMovies(movies);

/* TRAILER FUNCTIONS */
function openTrailer(url) {
    const modal = document.getElementById("modal");
    const frame = document.getElementById("trailerFrame");
    frame.src = url + "?autoplay=1";
    modal.style.display = "flex";
}

function closeTrailer() {
    const modal = document.getElementById("modal");
    const frame = document.getElementById("trailerFrame");
    modal.style.display = "none";
    frame.src = "";
}

/* SEARCH */
document.getElementById("search").oninput = (e) => {
    const val = e.target.value.toLowerCase();
    const filtered = movies.filter(m => m.title.toLowerCase().includes(val));
    renderMovies(filtered);
};

/* FILTER */
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.onclick = () => {
        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");
        const genre = btn.dataset.genre;
        const filtered = genre === "all" ? movies : movies.filter(m => m.genre === genre);
        renderMovies(filtered);
    };
});

function goToBooking(title) {
    localStorage.setItem("movie", title);
    window.location.href = "../Booking/booking.html";
}