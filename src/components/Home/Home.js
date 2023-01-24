import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {' '}
      <Link to={`/books/`}>Books</Link>
    </div>
  );
}
