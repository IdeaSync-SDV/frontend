import { useAppContext } from "@/components/business/AppContext"
import Logo from "../../assets/logo.svg"
import Image from "next/image"
import Stats from "@/components/business/Stats"
import Text from "@/components/generic/Text"

const Navbar = () => {
  const {
    state: { todos },
  } = useAppContext()

  return (
    <header className="shadow">
      <nav className="flex justify-between px-4 py-2">
        <div className="flex items-center gap-x-2">
          <Image width={50} src={Logo} alt="Logo" />
          <Text className={"text-lg font-medium"}>IdeaSync</Text>
        </div>
        <Stats todos={todos} />
      </nav>
    </header>
  )
}

export default Navbar
