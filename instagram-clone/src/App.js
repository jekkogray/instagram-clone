import logo from './logo.svg';
import './css/App.css';
import Post from './components/Post'

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="app__headerImage"
        />
      </div>
      <Post/>
      <Post/>
      <Post/>

      {/* Header */}
      {/* Posts */}
      {/* Posts */}
    </div>
  );
}

export default App;