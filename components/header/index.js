import Link from 'next/link'
import { database, auth } from '../../helpers/firebase.js'
import Router from 'next/router'

class Header extends React.Component {

  constructor(query) {
    super();

    this.state = { 
      loggedIn: false,
      userID: '',
    };

  }

  componentDidMount(){
    auth.onAuthStateChanged( (user) => {
      if(user){

        //variables
        const userID = user.uid;

        //get user details
        database.ref(`users`)
        .orderByChild('userID')
        .equalTo(userID)
        .once('value').then((snapshot) => {

          // get settings
          const userDetailsID = Object.keys(snapshot.val())[0];

          //set settings
          this.setState({
            loggedIn: true,
            userID: user.uid,
            userDetailsID: userDetailsID,
          });

        })
      



      } else {
        this.setState({
          loggedIn: false,
          userID: '',
        });
      }
    });
  }

  userLogout = () => {
    auth.signOut().then(() => {
      console.log('user was signed out, successfully');

      // home page
      Router.push('/');
    });
  };

  render() { 
    return (<div>
      <div className="header">
        <div className="logo">Bettergram</div>
        <div className="menu">
            <div className='item'><Link href={`/`} ><div>Home</div></Link></div>
            { this.state.loggedIn ? (
              <>
                <div className='item'><Link href={`/profile?id=${this.state.userDetailsID}`} ><div>Profile</div></Link></div>
                <div className='item'><Link href={`settings?id=${this.state.userDetailsID}`} ><div>Settings</div></Link></div>
                <div className='item'><div onClick={this.userLogout}>Logout</div></div>
              </>
            ) : (
              <>
                <div className='item'><Link href={`/login`} ><div>Login</div></Link></div>
                <div className='item'><Link href={`/signup`} ><div>Create Account</div></Link></div>
              </>
            ) }
            
        </div>
      </div>
      <style jsx>{`
          .header{
            background-color: black;
            height:70px;

            display: flex;
            justify-content: center;
            align-items: left;
          }
          .logo{
            color:white;
            width:70px;
            line-height:70px;
            padding:0px 20px;
          }
          .menu{
              color:white;
              flex:1;
          }
          .item{
              flex:1;
              height:70px;
              line-height:70px;
          }

          .header,.menu{
            display: flex;
            justify-content: center;
            text-align: center; 
          }
  
        `}</style>
    </div>)
    };

};
  
  export default Header
  