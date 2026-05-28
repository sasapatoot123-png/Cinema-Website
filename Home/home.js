function openTrailer() {
    const modal = document.getElementById("modal");
    const frame = document.getElementById("trailerFrame");

    frame.src = "https://www.youtube.com/embed/Way9Dexny3w"; 
    
    modal.style.display = "flex";
}

function closeTrailer() {
    const modal = document.getElementById("modal");
    const frame = document.getElementById("trailerFrame");

    modal.style.display = "none";
    frame.src = "";
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
    const nav = document.getElementById("main-nav");

    if (window.scrollY > 50) {
        nav.style.background = "#000";
    } else {
        nav.style.background = "rgba(0,0,0,0.8)";
    }
});
function goToMovies() {
    window.location.href = "../Movies/movies.html";
}