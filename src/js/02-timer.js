import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const timer = document.querySelector('.timer');
const button = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');
const input = document.querySelector('#datetime-picker');

let selectedDates;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selected) {
    selectedDates = selected;
    const selectedDate = selected[0];
    if (selectedDate < new Date()) {
      window.alert('Please choose a date in the future');
      button.disabled = true;
    }
  },
});

button.addEventListener('click', () => {
  if (button.disabled === false) {
    button.disabled = true;
    const intervalTimer = setInterval(() => {
      const selectedDay = selectedDates[0].getTime();
      const todayDay = new Date().getTime();
      const ms = selectedDay - todayDay;
      const convertMs = milliseconds => {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
        return { days, hours, minutes, seconds };
      };
      const value = convertMs(ms);
      const addLeadingZero = value => {
        daysSpan.textContent = String(value.days).padStart(2, '0');
        hoursSpan.textContent = String(value.hours).padStart(2, '0');
        minutesSpan.textContent = String(value.minutes).padStart(2, '0');
        secondsSpan.textContent = String(value.seconds).padStart(2, '0');
      };
      convertMs(ms);
      addLeadingZero(value);
      if (
        daysSpan.textContent === '00' &&
        hoursSpan.textContent === '00' &&
        minutesSpan.textContent === '00' &&
        secondsSpan.textContent === '00'
      ) {
        clearInterval(intervalTimer);
      }
    }, 1000);
    input.disabled = true;
  }
});
