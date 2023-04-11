import { useAppContext } from '@/components/business/AppContext';
import ToDoCard from '@/components/business/ToDoCard';

const ListCard = () => {
  const {
    state: { todos },
  } = useAppContext();

  return (
    <div className="bg-white rounded-lg flex flex-col p-6 shadow-md basis-1/3 h-[36rem] overflow-auto">
      {todos?.length === 0 && (
        <p className="flex h-full justify-center items-center font-medium">
          Pas de to-dos pour le moment.
        </p>
      )}
      {todos?.length
        ? todos?.map((todo, i) => <ToDoCard todo={todo} index={i} />)
        : null}
    </div>
  );
};

export default ListCard;
