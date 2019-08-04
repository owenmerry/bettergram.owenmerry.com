
//import
import React from "react";
import { auth } from '../helpers/firebase.js'
import Header from '../components/header'
import Router from 'next/router'


// Logic


// Class

class Login extends React.Component {


  // Starting class

  constructor(query) {
    super();
    this.state = { 
      uploadedImage: '',
      userName: '',
      userEmail: '',
      userPassword: '',
      folders: [],
      status: '',
      error: '',
    };

  }



  static async getInitialProps(context) {
    console.log('get data from getinitialprops', context.query.id);
    const id = context.query.id;
    return {id};
}



  // Functions

  loginUser = () => {

    //setup image

    //when loaded


    // auth create user
    const userEmail = this.state.userEmail;
    const userPassword = this.state.userPassword;

    this.setState({
      status: 'checking...',
      error: '',
    });

    auth.signInWithEmailAndPassword(userEmail, userPassword).then( cred => {
      console.log(cred.user);
      this.setState({
        status: 'logged in successfully',
        error: '',
      });

        // go to home
        Router.push('/')

    }, (err) => {
      this.setState({
        error: err.message,
        status: '',
      });
    });


  }


  //Form handle changes

  //user inputs
  changeUserEmail = (e) => {
    this.setState({
      userEmail: e.target.value,
    });
  }

  changeUserPassword = (e) => {
    this.setState({
      userPassword: e.target.value,
    });
  }


  //Render

  render() {
    return (
      <section>
        <Header />
          <div>
            <h2>Login</h2>
            <div className='status'>{this.state.status}</div>
            <div className='error'>{this.state.error}</div>
            <div className='row'>
              <label>Email:*</label>
              <input type='text' onChange={this.changeUserEmail.bind(this)} value={this.state.userEmail} />
            </div>

            <div className='row'>
              <label>Password:*</label>
              <input type='password' onChange={this.changeUserPassword.bind(this)} value={this.state.userPassword} />
            </div>

            <div className='row'>
              <button onClick={this.loginUser}>Login</button>
            </div>
          </div>

          <style jsx>{`
           .row{
             padding: 10px 0px;
           }
           label{
             display:block;
            }
            input{
              padding:15px 5px;
              width:300px;
              font-size:16px;
            }
            select{
              padding:15px 5px;
              width:300px;
              height:50px;
              font-size:16px;
            }
            button{
              padding:10px;
            }
          `}</style>
          <style global jsx>{`
            body{
                    padding:0px;
                    margin:0px;   
                    font-family:Helvetica; 
            }
            `}</style>
      </section>
    );
  }
}

export default Login;