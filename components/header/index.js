import Link from 'next/link'
import { auth } from '../../helpers/firebase.js'
import Router from 'next/router'

class Header extends React.Component {

  constructor(query) {
    super();

    this.state = { 
      loggedIn: false,
    };

  }

  componentDidMount(){
    auth.onAuthStateChanged( (user) => {
      console.log('run auth check:', user);
      if(user){
        this.setState({
          loggedIn: true,
        });
      } else {
        this.setState({
          loggedIn: false,
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
                <div className='item'><Link href={`/old`} ><div>Profile</div></Link></div>
                <div className='item'><div onClick={this.userLogout}>Logout</div></div>
                <div className='item'><Link href={`/settings`} ><div>Settings</div></Link></div>
              </>
            ) : (
              <>
                <div className='item'><Link href={`/login`} ><div>Login</div></Link></div>
                <div className='item'><Link href={`/signup`} ><div>Sign Up</div></Link></div>
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
  