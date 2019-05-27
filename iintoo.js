window.onload = () => {
    const fbButton = document.getElementById('fb-btn');
    const lnButton = document.querySelector('#ln-btn');
    const buttons = document.querySelectorAll('button.btn');
    const submitButton = document.querySelector('input[type="submit"]');
    const radios = document.querySelectorAll('input[type="radio"]');
    const radioTextResult = document.querySelector('.investor-type-description');
    const userInfoDiv = document.querySelector('.user--info');
    const readData = document.getElementById('read');

    if (userInfoDiv) {
        const UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
        const phone = document.getElementById('phone')
        const email = document.getElementById('email')
        phone.value = UserInfo.phone;
        email.value = UserInfo.email;
        // userInfoDiv.innerHTML = `
        //                         <h2>Email: ${UserInfo.email}</h2>
        //                         <h2>Phone: ${UserInfo.phone}</h2>
        //                         <h2>Investor Type: ${UserInfo.investor_type}</h2>`
    }

    // readData && 
    if (submitButton) {
        // readData.addEventListener('click', (event) => {
        //     event.stopImmediatePropagation();
        //     const email = localStorage.getItem('email')
        //     const phone = localStorage.getItem('phone')
        //     const investor_type = localStorage.getItem('investor_type')
        //     const UserInfo = localStorage.getItem('UserInfo');
        //     // console.log(email, phone, investor_type)
        //     console.log(JSON.parse(UserInfo));
        // })


        buttons.forEach(function (button) {
            button.addEventListener('click', function (event) {
                const openUrl = event.target.dataset.url;
                window.open(openUrl, "");
            })
        });

        radios.forEach((radio) => {
            radio.addEventListener('click', (event) => {
                const text = event.target.dataset.text;
                const p = document.createElement('p');
                p.textContent = text;
                radioTextResult.innerHTML = '';
                radioTextResult.appendChild(p);
            })
        });

        submitButton.addEventListener('click', function (event) {
            event.preventDefault();
            const email = document.getElementById('email')
            const phone = document.getElementById('phone')
            const investor_type = document.querySelector('input[type="radio"]:checked');
            const FormElement = document.getElementById('myform');
            const UserInfo = {
                email: email.value,
                phone: phone.value,
                investor_type: investor_type.value
            }
            // localStorage.setItem('email', email.value)
            // localStorage.setItem('phone', phone.value)
            // localStorage.setItem('investor_type', radio.value); 
            localStorage.setItem('UserInfo', JSON.stringify(UserInfo));
            // console.log(FormElement.investor_type)
            // console.log(FormElement.email)
            // console.log(FormElement.phone)
            FormElement.submit();
        })
    }


    // DRY
    // console.log(fbButton, lnButton)
    // location.replace('https://fb.com');
    // fbButton.onclick = function(){
    //     window.open('https://fb.com', "");
    // }

    // lnButton.addEventListener('click',  function(){
    //     window.open('https://linkedin.com', "");
    // });

}