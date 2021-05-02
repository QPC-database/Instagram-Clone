import logo from './logo.svg';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
     
    {/* Header - to contain instagram, search, icons, etc.*/} 
    <div className="app__header">
      <img
        className="app__headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt=""
      />
    </div>

    <h1>Instagram Clone Test2</h1>

    <Post />
    {/* Posts */}
    {/* Posts */}
    </div>
  );
}

export default App;
