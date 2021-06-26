var password = document.getElementById('password')
var email = document.getElementById('email')
var btnLogin = document.getElementsByTagName('input')[2]


btnLogin.addEventListener('click', function(){
    var valemail = email.value 
    var valpassword = password.value

    if(valemail!='' && valpassword!='' ){
        alert('Selamat Datang di gadgetNih ' )
        window.location.replace('homepage.html')
    }
    else{
        alert('Silahkan isi terlebih dahulu data anda')
    }
})
