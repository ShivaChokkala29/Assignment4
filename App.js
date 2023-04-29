import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './main';
import Nav from './nav';
import Footer from './footer';
const { parseBlog } = require('./blogparser');

parseBlog((err, posts) => {
  if (err) {
    console.error(err);
    return;
  }
  // use the parsed data
  console.log(posts);
});


function App() {
  return (
    <div className="App">
      <header />
      <main />
      <nav />
      <footer />
    </div>
  );
}







export default App;
