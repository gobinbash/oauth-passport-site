const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/User')

// Serialize user
passport.serializeUser((user, done) => {
    done(null, user.id)
})

// Deserialize user

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})

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

        // Check the user id exists

        User.findOne({ googleId: profile.id})
            .then(currentUser => {

                if( currentUser ) {
                    // User already exists
                    done(null, currentUser)
                }
                else {

                    new User({
                            googleId: profile.id,
                            first_name: profile.name.givenName,
                            last_name: profile.name.familyName
                        })
                        .save().then(newUser => {
                            console.log('newUser created', newUser)
                            done(null, newUser)
                        })

                }
            })

        
    }
))
