import { useAppContext } from "@/components/business/AppContext"
import ToDoCard from "@/components/business/ToDoCard"
import Text from "@/components/generic/Text"

const ListCard = () => {
  const {
    state: { todos },
  } = useAppContext()

  return (
    <div className="flex h-[36rem] basis-2/4 flex-col gap-y-4 overflow-auto rounded-lg bg-white p-8 shadow-md">
      {todos?.length === 0 && (
        <Text className="flex h-full items-center justify-center font-medium">
          Pas de to-dos pour le moment.
        </Text>
      )}
      {todos?.length
        ? todos?.map((todo, i) => <ToDoCard key={i} todo={todo} />)
        : null}
    </div>
  )
}

export default ListCard
