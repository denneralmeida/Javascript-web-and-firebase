class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    logIn() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(result => {
            const { uid, email } = result.user;
            let info = {
                uid,
                email,
            }
            localStorage.setItem('userInfo', JSON.stringify(info));
            window.location.href = '/sign-in';
        }).catch(error => {
            alert(error.message);
        });
    };

    create() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(result => {
            const { uid, email } = result.user;
            let info = {
                uid,
                email,
            }
            localStorage.setItem('userInfo', JSON.stringify(info));
            window.location.href = '/sign-in';
        }).catch(error => {
            alert(error.message);
        });
    }
}









