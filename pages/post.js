import { withRouter } from 'next/router'
import Link from 'next/link'
import { database } from '../helpers/firebase.js'
import React from "react";
import Header from '../components/header'

class Post extends React.Component {

    constructor(query) {
        super();
        this.state = { 
          folder: [],
          post: [],
        };

        this.getData(query);

      }   

    //   componentDidMount(query){
    //   }

      getData(query){

        database.ref(`posts/${query.id}`)
        .once('value').then((snapshot) => {
            this.setState({
                post: snapshot.val() || {}
            })
        })

    }
      
      

    static async getInitialProps(context) {
        console.log('get data from getinitialprops', context.query.id);
        const id = context.query.id;
        return {id};
    }


    goToLastPage = () => {
        window.history.back();
        //console.log('run this function');
    }



    render () {
        return (    
            <div>
            <Header />
            <div className="back">
                <a onClick={this.goToLastPage}>back</a> 
            </div>
                <div className="image-container">
                    <img className='image' src={this.state.post.postImage} />
                </div>
                <style jsx>{`

                .back a{
                    color:black;
                    text-decoration: none;
                }

                    .image-container{
                        max-width:960px;
                        margin:0px auto;
                        text-align:center;
                    }
                    .image{
                        
                        width:100%;
                        margin-bottom:20px;
                    }

                  

                    .back{
                        padding: 17px 25px 20px 25px;
                        margin-bottom:  20px;
                        border-bottom:solid 1px #dcdcdc;
                        color:#7e7e7e;
                        font-size:16px;
                        letter-spacing: -0.5px;
                    }
                    .back a{
                        cursor:pointer;
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

export default Post