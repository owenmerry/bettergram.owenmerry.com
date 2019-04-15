
//import
import React from "react";
import { database, storageRoot } from '../helpers/firebase.js'


// Logic


// Class

class Admin extends React.Component {


  // Starting class

  constructor() {
    super();
    this.state = { 
      folderTitle: '',
      folderImage: '',
      postTitle: '',
      postImage: '',
      postFolderID: '',
      uploadedImage: '',
      userName: '',
      folders: [],
    };

    database.ref('folders')
    .once('value').then((snapshot) => {
        this.setState({
            folders: snapshot.val()
        })
    })

  }


  // Lifecycles

  componentDidMount(){
  }

  componentWillUnmount(){
  }



  // Functions

  addFolder = () => {

    //setup image
    const file = this.folderImage.files[0];
    const name = file.name + '-' + (+new Date());
    const task = storageRoot.child(name).put(file);

    //when loaded
    task.then((snapshot) => {
      snapshot.ref.getDownloadURL().then((url)=>{

        //add to firebase
        database.ref('folders')
          .push({
            folderTitle: this.state.folderTitle,
            folderImage: url,
          })

        //reset state and inputs
        this.setState({
          folderTitle: '',
        });
        this.folderImage.value = '';

      });
    })
  }


  addPost = () => {

    //setup image
    const file = this.postImage.files[0];
    const name = file.name + '-' + (+new Date());
    const task = storageRoot.child(name).put(file);

    //when loaded
    task.then((snapshot) => {
      snapshot.ref.getDownloadURL().then((url)=>{

        //add to firebase
        database.ref('posts')
          .push({
            postTitle: this.state.postTitle,
            postImage: url,
            folderID: this.state.postFolderID,
          })

        //reset state and inputs
        this.setState({
          postTitle: '',
          postFolderID: '',
        });
        this.postImage.value = '';

      });
    })

  }

  addUser = () => {

    //setup image
    const file = this.userImage.files[0];
    const name = file.name + '-' + (+new Date());
    const task = storageRoot.child(name).put(file);

    //when loaded
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

      });
    })

  }


  //Form handle changes

  //folder inputs
  changeFolderTitle = (e) => {
    this.setState({
      folderTitle: e.target.value,
    });
  }

  //post inputs
  changePostTitle = (e) => {
    this.setState({
      postTitle: e.target.value,
    });
  }
  changePostFolderID = (e) => {
    this.setState({
      postFolderID: e.target.value,
    });
  }

  //user inputs
  changeUserName = (e) => {
    this.setState({
      userName: e.target.value,
    });
  }


  //Render

  render() {
    return (
      <section>
          <div>
            <h2>Create New Folder</h2>
            <div className='row'>
              <label>Title:*</label>
              <input type='text' onChange={this.changeFolderTitle.bind(this)} value={this.state.folderTitle} />
            </div>
            <div className='row'>
              <label>Image:*</label>
              <input type='file' label='Upload' ref={(ref) => this.folderImage = ref} />
            </div>
            <div className='row'>
              <button onClick={this.addFolder}>Add Folder</button>
            </div>
          </div>

          <div>
            <h2>Create Post</h2>
            <div className='row'>
              <label>Title:*</label>
              <input type='text' onChange={this.changePostTitle.bind(this)} value={this.state.postTitle} />
            </div>
            <div className='row'>
              <label>Title:*</label>
              <select onChange={this.changePostFolderID.bind(this)} value={this.state.postFolderID}>
              <option value=''>Select Section</option>
              {Object.keys(this.state.folders).map((key) => (
                <option key={key} value={key}>
                  {this.state.folders[key].folderTitle}
                </option>
              ))}
              </select>
            </div>
            <div className='row'>
              <label>Image:*</label>
              <input type='file' label='Upload' ref={(ref) => this.postImage = ref} />
            </div>
            <div className='row'>
              <button onClick={this.addPost}>Add Post</button>
            </div>
          </div>

          <div>
            <h2>Create User</h2>
            <div className='row'>
              <label>Name:*</label>
              <input type='text' onChange={this.changeUserName.bind(this)} value={this.state.userName} />
            </div>
            <div className='row'>
              <label>Image:*</label>
              <input type='file' label='Upload' ref={(ref) => this.userImage = ref} />
            </div>
            <div className='row'>
              <button onClick={this.addUser}>Add User</button>
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
      </section>
    );
  }
}

export default Admin;