import { useAppContext } from "@/components/business/AppContext"
import Logo from "../../assets/logo.svg"
import Image from "next/image"

const Navbar = () => {
  const {
    state: { todos },
  } = useAppContext()

  return (
    <header className="shadow">
      <nav className="flex justify-between p-2">
        <div className="flex items-center gap-x-2">
          <Image width={50} src={Logo} alt="Logo" />
          <p className="text-lg font-medium">IdeaSync</p>
        </div>
        <div className="flex items-center">
          <p className="color:blue text-lg font-medium">
            {todos?.length} ToDos
          </p>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
