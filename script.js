// script.js

// Mock data for calendar dates (you can replace this with dynamic data)
const calendarDates = ['2022-10-01', '2022-10-05', '2022-10-10'];

// Display the calendar with clickable dates
function displayCalendar() {
    const calendarElement = document.getElementById('calendar');
    // Display calendar dates and make them clickable
    calendarDates.forEach(date => {
        const dateElement = document.createElement('div');
        dateElement.textContent = date;
        dateElement.classList.add('calendar-date');
        dateElement.addEventListener('click', () => showJournalEntryForm(date));
        calendarElement.appendChild(dateElement);
    });
}

// Show journal entry form when a date is clicked
function showJournalEntryForm(date) {
    const journalEntryForm = document.getElementById('journalEntryForm');
    journalEntryForm.style.display = 'block';
    // You can set the selected date in the form for reference
    document.getElementById('journal-entry').value = `Journal entry for ${date}`;
}

// Submit journal entry and mark the date as green
function submitJournal() {
    const selectedDate = document.getElementById('journal-entry').value.split(' ')[3]; // Extract the date
    // Update the calendar to mark the selected date as green
    document.querySelectorAll('.calendar-date').forEach(dateElement => {
        if (dateElement.textContent.includes(selectedDate)) {
            dateElement.style.backgroundColor = 'green';
        }
    });
    // You can send the journal entry data to the backend for further processing
}

// Initialize the calendar display
displayCalendar();