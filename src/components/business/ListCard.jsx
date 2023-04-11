import { useAppContext } from "@/components/business/AppContext"
import ToDoCard from "@/components/business/ToDoCard"

const ListCard = () => {
  const {
    state: { todos },
  } = useAppContext()

  return (
    <div className="flex h-[36rem] basis-1/3 flex-col overflow-auto rounded-lg bg-white p-6 shadow-md">
      {todos?.length === 0 && (
        <p className="flex h-full items-center justify-center font-medium">
          Pas de to-dos pour le moment.
        </p>
      )}
      {todos?.length
        ? todos?.map((todo, i) => <ToDoCard key={i} todo={todo} />)
        : null}
    </div>
  )
}

export default ListCard
