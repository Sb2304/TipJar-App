import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import User from '@/app/models/User'
import connectDb from '@/app/db/connectDb'

export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if(account.provider=="github"){
        await connectDb()
        // console.log(user,account,email,profile,credentials);
        
        
        // check if user already exists in the database
        const currentUser = await User.findOne({email:user.email})
        if(!currentUser){
          const newUser = await User.create({
            email:user.email,
            username:user.email.split("@")[0],
            name:user.name
          })
        }
        
        return true
      }
    },
    async session({session,user,token}){
      await connectDb()
      const dbUser = await User.findOne({email: session.user.email})
      session.user.name = dbUser.name 
      session.user.username = dbUser.username
      return session
    }
  }
})

export { authoptions as GET, authoptions as POST }
