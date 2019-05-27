window.onload = () => {
    const phone = document.getElementById('phone')
    const email = document.getElementById('email')
    const loginBtn = document.getElementById('loginBtn');

    function loginBtnFunc(){
        const UserInfo = JSON.parse( localStorage.getItem('UserInfo') );

        if( phone.value === UserInfo.phone && email.value === UserInfo.email ){
            location.replace('profile.html');
        }
        else {
            alert("მობილური ან მეილი არასწორია");
        }
    }
    loginBtn.addEventListener('click', loginBtnFunc);
}