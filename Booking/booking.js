const seatGrid = document.getElementById("seatGrid");
const countEl = document.getElementById("count");
const totalEl = document.getElementById("total");
const movie = localStorage.getItem("movie");

document.getElementById("movieName").innerText = movie;

const ticketPrice = 15;

// إنشاء الكراسي
for (let i = 0; i < 40; i++) {
    const seat = document.createElement("div");
    seat.classList.add("seat");

    // عشوائي: كراسي محجوزة
    if (Math.random() < 0.2) {
        seat.classList.add("occupied");
    }

    seat.addEventListener("click", () => {
        if (!seat.classList.contains("occupied")) {
            seat.classList.toggle("selected");
            updateTotal();
        }
    });

    seatGrid.appendChild(seat);
}

// تحديث السعر
function updateTotal() {
    const selectedSeats = document.querySelectorAll(".seat.selected").length;

    countEl.innerText = selectedSeats;
    totalEl.innerText = selectedSeats * ticketPrice;
}

// تأكيد الحجز
function confirmBooking() {
    const seats = document.querySelectorAll(".seat.selected").length;

    if (seats === 0) {
        alert("Please select at least one seat!");
        return;
    }

    alert("Booking Confirmed 🎉");
    window.location.href = "../Home/home.html";
}