const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/User')

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user.id)
})

// Deserialize user

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id)
  if (user) {
    done(null, user)
  }
})

passport.use(
  new GoogleStrategy(
    {
      // Options for google strategy
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/redirect'
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log('Yep')

      console.log(profile)

      // Check the user id exists

      const currentUser = await User.findOne({ googleId: profile.id })

      if (currentUser) {
        done(null, currentUser)
      } else {
        const newUser = new User({
          googleId: profile.id,
          first_name: profile.name.givenName,
          last_name: profile.name.familyName
        })

        await newUser.save()

        done(null, newUser)
      }
    }
  )
)
