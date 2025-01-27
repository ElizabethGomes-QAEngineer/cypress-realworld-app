import loginPages from '../../pages/loginPages.js'

const loginPagesInstance = new  loginPages();



describe('Real World APP',()=> {
  

      it('Login with Sucess',()=>{

       
            loginPagesInstance.acessLoginPage ()
            const userData =loginPagesInstance.getUserData()
            loginPagesInstance.loginWithUser(userData.userSucess.username,userData.userSucess.password)

      })

      it('Login Fail',()=>{
       
       
             loginPagesInstance.acessLoginPage ()
             const userData= loginPagesInstance.getUserData()
             loginPagesInstance.loginWithUser(userData.userFail.username,userData.userFail.password)
             loginPagesInstance.loginFail()

      })

})

