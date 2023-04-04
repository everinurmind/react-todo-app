// eslint-disable-next-line import/extensions
import Header from '@/components/Header';
// eslint-disable-next-line import/extensions
import TodosLogic from '@/components/TodosLogic';

const Home = () => (
  <div className="todos">
    <Header>
      <h1>todos</h1>
      <p>Items will persist in the browser local storage</p>
    </Header>
    <TodosLogic />
  </div>
);

export default Home;
