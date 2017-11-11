const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.use(new GoogleStrategy(
    {
        //Options for google strategy
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL:'/auth/google/redirect'
    },
    (accessToken, refreshToken, profile, done) => {
        console.log('Yep')

        console.log(profile)
    }
))