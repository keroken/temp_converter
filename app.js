var fahrenheitInput = document.getElementById('fahrenheitInput');
var celciusInput = document.getElementById('celciusInput');

fahrenheitInput.addEventListener('input', function(e) {
    celciusInput.value = ((this.value - 32) / 1.8).toFixed(2);
})
celciusInput.addEventListener('input', function(e) {
    fahrenheitInput.value = ((this.value * 1.8) + 32).toFixed(2);
})



