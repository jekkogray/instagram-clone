import React, { useEffect, useState } from 'react';
import './css/App.css';
import Header from './components/Header';
import Post from './components/Post';
import { db } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button} from "@material-ui/core"

// UI styling.
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  // This is pretty much storing an object.
  // setPosts is a function that sets the variable to the left
  const [posts, setPosts] = useState([
  ]);
  const [open, setOpen] = useState(false);

  // useEffect runs a piece of code based on a specific condition.
  useEffect(() => {
    // onSnapshot runs whenever there is a change in the database and returns a snapshot of that moment.
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(
        doc => (
          {
            id: doc.id,
            post: doc.data()
          }
        )
      ))
    })
  }, [])


  // If the second paramater is blank, it will run once the page loads. 
  // useEffect(()=>{
  // }, [])

  const signUp = (event) => (setOpen(true));

  return (
    <div className="app">
      <Modal
        open={open}
        onClose={() => (setOpen(false))}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2>Simple Modal Test</h2>
        </div>
      </Modal>

      <Button onClick={()=>{setOpen(true)}}>Sign Up</Button>
      <Header/>
      {
        posts.map(({ id, post }) => (
          // Adding a key here is important, it prevents react from refreshing the whole scene by referencing the key id.
          <Post key={id} userName={post.userName} imageUrl={post.imageUrl} caption={post.caption} />
        ))
      }

      {/* Header */}
      {/* Posts */}
      {/* Posts */}
    </div>
  );
}

export default App;
