function attachEventsListeners() {
    let btns = document.querySelectorAll('input[type=\'button\']');
    for (let btn of btns) {
        if(btn.id === 'daysBtn'){
            btn.addEventListener('click',convertFromDays);
        }else if(btn.id === 'hoursBtn'){
            btn.addEventListener('click',convertFromHours);
        }else if(btn.id === 'minutesBtn'){
            btn.addEventListener('click',convertFromMinutes);
        }else {
            btn.addEventListener('click',convertFromSeconds);
        }
    }
    function convertFromDays(event) {
        let value = Number(event.target.parentElement.children[1].value);
        document.getElementById('hours').value = value * 24;
        document.getElementById('minutes').value = value * 24 * 60;
        document.getElementById('seconds').value = value * 24 * 60 * 60;
    }
    function convertFromHours(event) {
        let value = Number(event.target.parentElement.children[1].value);
        document.getElementById('days').value = value / 24;
        document.getElementById('minutes').value = value * 60;
        document.getElementById('seconds').value = value * 60 * 60
    }
    function convertFromMinutes(event) {
        let value = Number(event.target.parentElement.children[1].value);
        document.getElementById('days').value = value / 24 / 60;
        document.getElementById('hours').value = value / 60;
        document.getElementById('seconds').value = value * 60;
    }
    function convertFromSeconds(event) {
        let value = Number(event.target.parentElement.children[1].value);
        document.getElementById('days').value = value / 24 / 60 / 60;
        document.getElementById('hours').value = value / 60 / 60;
        document.getElementById('minutes').value = value / 60;
    }
}
