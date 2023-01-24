import './App.css';
import { Route } from 'react-router-dom';
import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Route path="/books/:id" component={BookDetail} />
      <Route path="/books" component={BookList} />
    </main>
  );
}

export default App;
