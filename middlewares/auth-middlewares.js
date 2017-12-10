const AuthGaurd = (req, res, next) => {

    if(!req.user) {
        res.redirect('/auth/login')
    }

    next();

}

exports.AuthGaurd = AuthGaurd;


const Guest = (req, res, next) => {
    if(req.user) {
        res.redirect('/profile')
    }

    next();
}

exports.Guest = Guest