import CreateToDo from '@/components/business/CreateCard';
import ListToDos from '@/components/layout/ListToDos';
import Page from '@/components/layout/Page';

const HomePage = () => {
  return (
    <Page>
      <div className="flex gap-x-16 w-screen justify-center">
        <ListToDos />
        <CreateToDo />
      </div>
    </Page>
  );
};

export default HomePage;
