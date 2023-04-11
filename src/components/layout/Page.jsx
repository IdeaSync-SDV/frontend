import Navbar from '@/components/layout/Navbar';

const Page = ({ children }) => (
  <div className="flex flex-col h-screen bg-gray-50">
    <Navbar />
    <main className="flex-1 grid place-items-center">{children}</main>
  </div>
);

export default Page;
