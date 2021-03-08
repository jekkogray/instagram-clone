import React, { useEffect, useState } from 'react';
import './css/App.css';
import Header from './components/Header';
import Post from './components/Post';
import {db} from './firebase';

function App() {

  // This is pretty much storing an object.
  const [posts, setPosts] = useState([
  ]);

  // useEffect runs a piece of code based on a specific condition.
  useEffect(() => {
    // onSnapshot runs whenever there is a change in the database and returns a snapshot of that moment.
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(
        doc => doc.data()
      ))
    })
  }, [])


  // If the second paramater is blank, it will run once the page loads. 
  // useEffect(()=>{

  // }, [])

  return (
    <div className="app">
      <Header />
      {
        posts.map(post => (
          <Post userName={post.userName} imageUrl={post.imageUrl} caption={post.caption} />
        )
        )
      }

      {/* Header */}
      {/* Posts */}
      {/* Posts */}
    </div>
  );
}

export default App;
