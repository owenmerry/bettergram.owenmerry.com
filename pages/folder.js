import { withRouter } from 'next/router'
import Link from 'next/link'
import { database } from '../helpers/firebase.js'
import React from "react";

class Folder extends React.Component {

    constructor(query) {
        super();
        this.state = { 
          folder: [],
          posts: [],
        };

        this.getData(query);

      }   

    //   componentDidMount(query){
    //   }

      getData(query){

        database.ref(`folders/${query.id}`)
        .once('value').then((snapshot) => {
            this.setState({
                folder: snapshot.val() || {}
            })
        })

        database.ref('posts')
        .orderByChild('folderID')
        .equalTo(query.id)
        .once('value')
        .then((snapshot) => {
            this.setState({
                posts: snapshot.val() || {}
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
            <div className="back">
                <Link href="/profile">
                    <a>back</a>
                </Link>
            </div>
            <div className="page-info">
                <div className="page-image" style={{backgroundImage: 'url(' + this.state.folder.folderImage + ')',}}></div>
                <div className="page-text">
                    <h1 className="page-name">{this.state.folder.folderTitle}</h1>
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
                </div>
            </div>
            <div className="filter"></div>
                <div className="grid-container">
                {Object.keys(this.state.posts).map((key) =>
                <Link key={key} href="/folder" >
                    <a className="grid-item image image-scale" style={{backgroundImage: 'url(' + this.state.posts[key].postImage + ')',}}>
                    </a>
                </Link>
            )}
                </div>
                <style jsx>{`
                    .page-info{
                    }
                .grid-container {
                    
                    margin:0px auto;
                    }
                    .grid-item {
                        float:left;
                        width:33.3333vw;
                        height:33.3333vw;
                    }

                    @media only screen and (min-width: 840px) {
                        .grid-item {
                            width:25vw;
                            height:25vw;
                        }
                    }

                    @media only screen and (min-width: 1172px) {
                        .grid-item {
                            width:293px;
                            height:293px;
                        }
                    }

                    @media only screen and (min-width: 1172px) {
                        .grid-item {
                            width:20vw;
                            height:20vw;
                        }
                    }

                    .image{
                        
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


                    .page-info{
                        display:flex;
                        vertical-align:center;
                        align-items:center;
                        margin: 40px 25px 25px 25px;

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




                    .filter{
                        border-top:solid 1px #e5e5e5;
                        height:62px;
                    }

                    .back{
                        margin: 17px 25px 40px;
                        color:#7e7e7e;
                        font-size:16px;
                        letter-spacing: -0.5px;
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
            )
    }
}

export default Folder