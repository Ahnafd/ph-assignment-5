document.getElementById('change-clr-btn').addEventListener('click', 
    function () {
        const colors = ['#6e77b6' ,'#757995', '#424557' , '#2b2c35' , '#c2c3cb' , '#6b6d75'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor; 

        
    })