import { Link } from 'react-router-dom';

export default function DogLink({ book }) {
  return (
    <div>
      <Link to={`/books/${book.id}`}>{book.name}</Link>
    </div>
  );
}
