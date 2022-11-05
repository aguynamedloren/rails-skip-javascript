import { Outlet } from 'react-router-dom'

const BlogLayout: React.FC = () => {
  return (
    <div className='flex flex-col text-black h-screen'>
      <div className='lg:hidden border-4 border-green rounded-full ml-4 mt-4 absolute' />

      <main className='flex justify-center w-full px-4 pt-16 h-screen'>
        <div className='max-w-4xl'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default BlogLayout
