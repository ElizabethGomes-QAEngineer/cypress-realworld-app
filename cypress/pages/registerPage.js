class registerPage {

      getUserData () {
         return {

            signUp: {

                  firstName:'teste' , 
                  lastName:'Nascimento' ,
                  userName:'automacaoelizabeth@gmail.com' ,
                  passWord:'1234' , 
                  confirmPassword:'1234' } ,

            invalidSignUp: {
                          
                  firstName: 'invalid',
                  lastName: 'nascimento',         
                  userName: '0000000000',         
                  passWord: 'senha123',
                  confirmPassword: 'senha123' }

                 }
       }


      selectorsList () {

            const selectors = { 

                   firstName:"[name='firstName']",
                   lastName:"[name='lastName']",
                   userName:"[name='username']",
                   password:"[name='password']",
                   confirmPassword:"[name='confirmPassword']",
                   signUpButton:"[type='submit']"
                               
                                 
                   }; return selectors; 
       }



       acessSignUp () {cy.visit('/signup')}



       signUpForm (firstName,lastName,userName ,password ,confirmPassword) {

                   cy.get(this.selectorsList().firstName).type(firstName)
                   cy.get(this.selectorsList().lastName).type(lastName)
                   cy.get(this.selectorsList().userName).type(userName)
                   cy.get(this.selectorsList().password).type(password)
                   cy.get(this.selectorsList().confirmPassword).type(confirmPassword)
                 
       }

       saveSignUp () {
                   
                   cy.get(this.selectorsList().signUpButton).click
       
       }

       invalidRegister () {
                      
                   cy.get(this.selectorsList().signUpButton) 
              
       }

       }


export default registerPage