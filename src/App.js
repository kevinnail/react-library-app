import './App.css';
import { Link, Route, Switch, useParams } from 'react-router-dom';
import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail.js';
import Home from './components/Home/Home.js';

function App() {
  // TODO: Add routes to books & views

  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Switch>
        <Route path="/books/:id" component={BookDetail} />
        <Route path="/books" component={BookList} />
        <Route path="/" component={Home} />
      </Switch>
    </main>
  );
}

export default App;
