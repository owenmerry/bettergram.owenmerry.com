// This is the Link API
import Link from 'next/link'
import ProfileImage from '../components/profile-image'
import Header from '../components/header'
import { database } from '../helpers/firebase.js'
import React from "react";

class Profile extends React.Component {

    constructor(query) {
        super();

        this.state = { 
            folders: [],
            posts: [],
            user: {},
          };

        this.userID = query.id;

        this.getData(query);

    }




    getData(query) {

        database.ref(`users/${this.userID}`)
        .once('value').then((snapshot) => {
            this.setState({
                user: snapshot.val()
            })
        })

        database.ref('folders')
        .orderByChild('userID')
        .equalTo(this.userID)
        .once('value').then((snapshot) => {
            this.setState({
                folders: snapshot.val()
            })
        })

        database.ref('posts')
        .orderByChild('userID')
        .equalTo(this.userID)
        .once('value').then((snapshot) => {
            this.setState({
                posts: snapshot.val()
            })
        })

      }


    static async getInitialProps(context) {
        console.log('get data from getinitialprops', context.query.id);
        const id = context.query.id;
        return {id};
    }
 
 render () {
    return (
    <div>
    <Header />
        <div className="page-info">
            <ProfileImage image={this.state.user.userImage} />
            <div className="page-text">
                <h1 className="page-name">{this.state.user.userName}</h1>
                {1 === 0 ? (
                    <div className="stat-grid">
                        <div className="stat">
                            <h3 className="stat-title">24</h3>
                            <div className="stat-text">Posts</div>
                        </div>
                        <div className="stat">
                            <h3 className="stat-title">143</h3>
                            <div className="stat-text">Views</div>
                        </div>
                        <div className="stat stat-long">
                            <h3 className="stat-title">2 days ago</h3>
                            <div className="stat-text">Last Added to</div>
                        </div>
                    </div>
                ) : ''}
            </div>
        </div>
        <div className="heading">
            <h2>Collections</h2>
        </div>

        <div className="grid">
            <div className="grid-container">

            {Object.keys(this.state.folders).map((key) =>
                <Link key={key} href={`/folder?id=${key}`} >
                    <a className="grid-item grid-item-circle">
                        <div className="image image-circle" style={{backgroundImage: 'url(' + this.state.folders[key].folderImage + ')',}}></div>
                        <div className="text">{this.state.folders[key].folderTitle}</div>
                    </a>
                </Link>
            )}

            </div>
            <div className="clear"></div>
        </div>

        <div className="heading">
            <h2>Most Recent</h2>
        </div>
        <div className="grid-container">
            {Object.keys(this.state.posts).reverse().splice(0,8).map((key) =>
                <Link key={key} href={`/post?id=${key}`} >
                    <a className="grid-item grid-item-image image image-scale" style={{backgroundImage: 'url(' + this.state.posts[key].postImage + ')',}}>
                    </a>
                </Link>
            )}
        </div>

        <style jsx>{`
            .page-info{
            }
            .heading{
                border-top:solid 1px #e5e5e5;
            }
            .heading h2{
                text-align:center;
                font-size:21px;
                color:#5a5a5a;
                font-weight:normal;
                margin-top:57px;
                margin-bottom:35px;
            }
            .grid{
                margin-bottom:50px;
            }
        .grid-container {
            
            margin:0px auto;
            }
            .grid-item {
                float:left;
                width:33.3333vw;
                text-align:center;
            }
            .grid-item-image{
                height:33.3333vw;
            }
            .grid-item-circle{
                padding-bottom:20px;
            }

            .image{
                background-image: url('static/images/photos/instagram-photo.jpg');
                background-size: cover;
                background-position: center center;
                min-height:190px;
                max-width:190px;
                margin:0px auto;
            }

            .image-circle{
                border-radius:50%;
            }

            .image-circle{
                border-radius:50%;
            }

            .image-scale{
                min-height:inherit;
                max-width:inherit;
            }

            .text{
                font-size:23px;
                font-weight:bold;
                margin-top:12px;
                color:black;
            }

            a{
                text-decoration:none;
            }

            .clear{
                clear:both;
            }


            .page-info{
                display:flex;
                vertical-align:center;
                align-items:center;
                margin: 40px 25px 25px 25px;

            }
            .page-text{
                margin-left:45px;
            }
            .page-name{
                font-size: 33px;
                font-weight: bold;
                letter-spacing: -1px;
                margin:0px 0px 20px;
            }

            .page-image{
                width:190px;
                height:190px;
                background-image: url('static/images/folders/folder-cookbook.jpg');
                background-size: cover;
                background-position: center center;
                border-radius:50%;
                margin-right:46px;
            }


            .stat-grid{
                display:flex;
                max-width:600px;
            }
            .stat{
                flex:1;
                margin-right:35px;
            }
            .stat-long{
                min-width:200px;
            }
            .stat-title{
                font-size:29px;
                margin:0px 0px 10px;
                letter-spacing: -0.9px;
            }
            .stat-text{
                font-size:19px;
                color:#999999;
                letter-spacing: -0.6px;
            }



            .back{
                margin: 17px 25px 40px;
                color:#7e7e7e;
                font-size:16px;
                letter-spacing: -0.5px;
            }



            @media only screen and (max-width: 840px) {
                .page-info{
                    display:block;
                    text-align:center;
                }
                .page-text{
                    margin-left:0px;
                }
                .image-circle{
                    width:120px;
                    height:120px;
                    min-height:120px;
                }
            }

            @media only screen and (min-width: 840px) {
                .grid-item {
                    width:25vw;
                }
                .grid-item-image{
                height:25vw;
                }
            }

            @media only screen and (min-width: 1172px) {
                .grid-item {
                    width:293px;

                }
                .grid-item-image{
                    height:293px;
                }
            }

            @media only screen and (min-width: 1172px) {
                .grid-item {
                    width:20vw;
    
                }
                .grid-item-image{
                    height:20vw;
                }
            }


        `}</style>
        <style global jsx>{`
        body{
                padding:0px;
                margin:0px;   
                font-family:Helvetica; 
        }
        `}</style>
    </div>
    );
    }
}

export default Profile;