let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectedDate = null;

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const monthYear = document.getElementById("monthYear");
const calendarDates = document.getElementById("calendarDates");

function renderCalendar(month, year) {
    const firstDay = (new Date(year, month)).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();
    
    calendarDates.innerHTML = "";

    monthYear.textContent = `${months[month]} ${year}`;

    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement("div");
        emptyDiv.classList.add("empty");
        calendarDates.appendChild(emptyDiv);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dateDiv = document.createElement("div");
        dateDiv.textContent = i;
        dateDiv.onclick = () => selectDate(i, month, year);

        // Highlight current date
        if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dateDiv.classList.add("current-date");
        }

        // Highlight selected date
        if (selectedDate && i === selectedDate.getDate() && month === selectedDate.getMonth() && year === selectedDate.getFullYear()) {
            dateDiv.classList.add("selected-date");
        }

        calendarDates.appendChild(dateDiv);
    }
}

function selectDate(day, month, year) {
    selectedDate = new Date(year, month, day);
    renderCalendar(month, year);
    alert(`Selected date: ${selectedDate.toDateString()}`);
}

function prevMonth() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    renderCalendar(currentMonth, currentYear);
}

function nextMonth() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
    renderCalendar(currentMonth, currentYear);
}

renderCalendar(currentMonth, currentYear);
