import { useAppContext } from '@/components/business/AppContext';
import Logo from '../../assets/logo.svg';
import Image from 'next/image';

const Navbar = () => {
  const {
    state: { todos },
  } = useAppContext();

  return (
    <header className="shadow">
      <nav className="flex justify-between p-2">
        <div className="flex gap-x-2 items-center">
          <Image width={50} src={Logo} />
          <p className="font-medium text-lg">IdeaSync</p>
        </div>
        <div className="flex items-center">
          <p className="font-medium color:blue text-lg">
            {todos?.length} ToDos
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
