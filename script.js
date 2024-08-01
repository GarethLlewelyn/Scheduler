
let currentYear = 2024;
let currentMonth = 7;
const daysOfWeek = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; // Array for day names

function getCalendar(year, month) {
    const calendar = document.getElementById("Calender");


    const existingRows = calendar.querySelectorAll(".WeekRow:not(:first-child)");

    // Clear the content of each row (without removing the row itself)
    existingRows.forEach(row => {
        row.innerHTML = "";
    });


    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = (new Date(year, month, 1).getDay() + 6) % 7; // Adjust for 0-based Monday


    // Add day of week headers
    const headerRow = document.createElement("div");
    headerRow.classList.add("WeekRow");

    calendar.appendChild(headerRow);

    let day = 1;
    for (let week = 0; week < 6; week++) {
        const weekRow = document.createElement("div");
        weekRow.classList.add("WeekRow");
        calendar.appendChild(weekRow);

        for (let weekday = 0; weekday < 7 && day <= daysInMonth; weekday++) {
            const dayDiv = document.createElement("div");
            dayDiv.classList.add("Day");

            if (week === 0 && weekday < firstDay) {
                // Fill empty cells before the first day (no day number)
                dayDiv.classList.add("EmptyDay");
            } else {
                const NumDiv = document.createElement("div");
                NumDiv.classList.add("DayItteration");
                NumDiv.textContent = day++;
                dayDiv.appendChild(NumDiv);
            }

            weekRow.appendChild(dayDiv);
        }
    }

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const MonthDisplay = document.getElementById("MonthDisplay");

    MonthDisplay.textContent = monthNames[month] + " " + year;
}


document.getElementById("prevMonth").addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    getCalendar(currentYear, currentMonth);
});

document.getElementById("nextMonth").addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;

    }
    getCalendar(currentYear, currentMonth);
});

getCalendar(currentYear, currentMonth); // Initial calendar display