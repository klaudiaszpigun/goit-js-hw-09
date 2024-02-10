/*
  1. biblioteka flatpickr
  2. flatpickr(selector, options) =>
  3. const options = {
      enableTime: true,
      time_24hr: true,
      defaultDate: new Date(),
      minuteIncrement: 1,
      onClose(selectedDates) {
        console.log(selectedDates[0]);
      },
    };
  4. selectedDates => tablica wybranych dat, dlatego bierzemy z niej pierwszy element.
  5. onClose() => zamknięcie kalendarza
  6. window.alert("Please choose a date in the future")
  7. function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
  }
  console.log(convertMs(2000));// {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000));// {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000));// {days: 0, hours: 6 minutes: 42, seconds: 20}

  8. addLeadingZero(value) => padStart()

*/

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const timer = document.querySelector('.timer');
const butttor = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      window.alert('Please choose a date in the future');
    }
  },
});
