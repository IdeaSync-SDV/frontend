import CreateCard from '@/components/business/CreateCard';
import ListCard from '@/components/business/ListCard';
import Page from '@/components/layout/Page';

const HomePage = () => {
  return (
    <Page>
      <div className="flex gap-x-16 w-screen justify-center">
        <ListCard />
        <CreateCard />
      </div>
    </Page>
  );
};

export default HomePage;
