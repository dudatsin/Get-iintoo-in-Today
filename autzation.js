window.onload = () => {
    const password = document.getElementById('password')
    const email = document.getElementById('email')
    const autBtn = document.getElementById('autBtn');

    function autBtnFunc(){
        const UserInfo = JSON.parse( localStorage.getItem('UserInfo') );

        if( password.value === UserInfo.password && email.value === UserInfo.email ){
            location.replace('autzation.html');
        }
        else {
            alert("ასეთი მომხმარებელი არ არსებობს");
        }
    }
    autBtn.addEventListener('click', autBtnFunc);
}