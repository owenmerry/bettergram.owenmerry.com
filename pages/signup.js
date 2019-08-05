
//import
import React from "react";
import { database, storageRoot, auth } from '../helpers/firebase.js'
import Header from '../components/header'
import Router from 'next/router'


// Logic


// Class

class SignUp extends React.Component {


  // Starting class

  constructor(query) {
    super();
    this.state = { 
      uploadedImage: '',
      userName: '',
      userEmail: '',
      userPassword: '',
      folders: [],
      firebaseDatabase: false,
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

  addUser = () => {

    //when loaded
    if(this.state.firebaseDatabase){
      //setup image
      const file = this.userImage.files[0];
      const name = file.name + '-' + (+new Date());
      const task = storageRoot.child(name).put(file);

      task.then((snapshot) => {
        snapshot.ref.getDownloadURL().then((url)=>{

          //get time
          const now = new Date().getTime();
          
          //add to firebase
          database.ref('users')
            .push({
              userName: this.state.userName,
              userImage: url,
              userAdded: now,
            })

          //reset state and inputs
          this.setState({
            userName: '',
          });
          this.userImage.value = '';

          // go to home
          Router.push('/')

        });
      })
    }

    // auth create user
    const userEmail = this.state.userEmail;
    const userPassword = this.state.userPassword;

    this.setState({
      status: 'signing up...',
      error: '',
    });

    auth.createUserWithEmailAndPassword(userEmail, userPassword).then( cred => {

      //get time
      const now = new Date().getTime();
      const url = '';
      const userID = cred.user.uid;
      const userName = '';

      //create user
      database.ref('users')
      .push({
        userID: userID,
        userName: userName,
        userImage: url,
        userAdded: now,
      })
      
      //reset settings
      this.setState({
        status: 'created user successfully and logged in',
        error: '',
      });

      // go to home
      //Router.push('/')

    }, (err) => {
      this.setState({
        error: err.message,
        status: '',
      });
    });





  }


  //Form handle changes

  //user inputs
  changeUserName = (e) => {
    this.setState({
      userName: e.target.value,
    });
  }

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
            <h2>Sign up</h2>
            <div className='status'>{this.state.status}</div>
            <div className='error'>{this.state.error}</div>
            {this.state.firebaseDatabase ? (
              <div className='row'>
                <label>Name:*</label>
                <input type='text' onChange={this.changeUserName.bind(this)} value={this.state.userName} />
              </div>
            ) : ''}

            <div className='row'>
              <label>Email:*</label>
              <input type='text' onChange={this.changeUserEmail.bind(this)} value={this.state.userEmail} />
            </div>

            <div className='row'>
              <label>Password:*</label>
              <input type='password' onChange={this.changeUserPassword.bind(this)} value={this.state.userPassword} />
            </div>

            {this.state.firebaseDatabase ? (
            <div className='row'>
              <label>Image:*</label>
              <input type='file' label='Upload' ref={(ref) => this.userImage = ref} />
            </div>
            ) : ''}

            <div className='row'>
              <button onClick={this.addUser}>Sign up</button>
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

export default SignUp;