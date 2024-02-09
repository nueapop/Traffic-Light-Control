function changeLight(light) {
    if (light === 'red') {
        document.querySelector('.green-light').style.backgroundColor = 'black';
        document.querySelector('.button-red').style.backgroundColor = 'black'
        document.querySelector('.button-green').style.backgroundColor = 'green'
        document.querySelector('.button-red').disabled = true;
        document.querySelector('.button-green').disabled = false;
        document.querySelector('.button-red').style.pointerEvents = 'none';
        document.querySelector('.button-green').style.pointerEvents = 'auto';
        document.querySelector('.red-light').style.backgroundColor = 'black';
        document.querySelector('.yellow-light').style.backgroundColor = 'yellow';
        setTimeout(() => {
            document.querySelector('.yellow-light').style.backgroundColor = 'black';
            document.querySelector('.red-light').style.backgroundColor = 'red';
        }, 1000);


    } else if (light === 'green') {
        document.querySelector('.red-light').style.backgroundColor = 'black';
        document.querySelector('.yellow-light').style.backgroundColor = 'black';
        document.querySelector('.green-light').style.backgroundColor = 'green';
        document.querySelector('.button-green').style.backgroundColor = 'black'
        document.querySelector('.button-red').style.backgroundColor = 'red'
        document.querySelector('.button-green').disabled = true;
        document.querySelector('.button-red').disabled = false;
        document.querySelector('.button-green').style.pointerEvents = 'none';
        document.querySelector('.button-red').style.pointerEvents = 'auto';
    }
}