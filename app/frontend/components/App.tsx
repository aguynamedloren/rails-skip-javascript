import { withProvider } from './graphqlProvider'
import { useAllBooksQuery } from '../graphql/generated-types'

const Book: React.FC = ({ title }) => {
  return (
    <div className='w-full mb-20'>
      <h1 className='text-2xl lg:text-4xl font-serif mt-7 leading-tight'>
        {title}
      </h1>

      <p className='font-sans mt-10 pr-0 lg:pr-14 font-light leading-7'>
        Thundercats subway tile knausgaard intelligentsia cold-pressed
        helvetica. Banh mi live-edge helvetica wayfarers jean shorts enamel pin
        williamsburg thundercats hot chicken pitchfork vexillologist. Schlitz
        trust fund ugh 90's affogato, pok pok cred copper mug kogi adaptogen
        poke bicycle rights salvia marfa. Vape vaporware tousled hexagon
        succulents paleo.
      </p>
    </div>

  )
}

const App: React.FC = () => {
  const { data, loading } = useAllBooksQuery()

  if (loading) {
    return <span>Loading...</span>
  }

  return (
    <div className='flex flex-col text-black h-screen'>
      <div className='lg:hidden border-4 border-green rounded-full ml-4 mt-4 absolute' />

      <main className='flex justify-center w-full px-4 pt-16 h-screen'>
        <div className='max-w-4xl'>
          {data.books.map((book) => (
            <Book {...book} key={book.id} />
          ))}

        </div>
      </main>
    </div>
  )
}

export default withProvider(App)
