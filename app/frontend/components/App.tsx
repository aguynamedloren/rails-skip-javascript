const data = {
  books: [
    {
      id: '1',
      title: 'Active Rails'
    }
  ]
}
const loading = false

const Book: React.FC = ({ title }) => {
  return <li>{title}</li>
}

const App: React.FC = () => {
  if (loading) {
    return <span>"Loading..."</span>
  }
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {data.books.map((book) => (
          <Book {...book} key={book.id} />
        ))}
      </ul>
    </div>
  )
}

export default App
