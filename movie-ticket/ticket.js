const seats = document.querySelectorAll('.seat');
const selectedSeats = document.querySelector('.selected-seats');
const count = document.querySelector('.text p:first-of-type');
const total = document.querySelector('.total');
const checkoutBtn = document.querySelector('.checkout-btn');

let selectedCount = 0;
let selectedTotal = 0;

function updateSelectedCount() {
    const selected = document.querySelectorAll('.seat.selected');
    const countSelected = selected.length;
    selectedCount = countSelected;
    count.innerText = `Selected Seats: ${countSelected}`;
    selectedSeats.innerHTML = '';
    
    selectedTotal = countSelected * 150; // Price per seat
    total.innerText = selectedTotal;
}

seats.forEach((seat) => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
        updateSelectedCount();
    });
});

checkoutBtn.addEventListener('click', () => {
    if (selectedCount === 0) {
        alert('Please select at least one seat');
    } else {
        alert(`Selected Seats: ${selectedCount}`);
        window.location='tickBooked.html';
    }
});