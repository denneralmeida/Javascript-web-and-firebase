class User {
    constructor(email, password) {
        this.id;
        this.email = email;
        this.password = password;
    }

    logar = () => {
        window.location.href = "/sign-in";
        return;
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(result => {
            alert(result.user.uid);
            
        }).catch(error => {
            alert(error.message);
        });
    };

    static getInfo = () => { return this.id };
}

btnSubmit = document.getElementById('submitHandler');

btnSubmit.addEventListener('click', () => {
    const user = new User();
    user.email = document.getElementById('email').value;
    user.password = document.getElementById('password').value;
    user.logar();
  
});








