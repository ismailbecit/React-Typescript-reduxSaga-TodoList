import CustomTable from "../components/Tables/customTable";
import Search from "./search";

const TodoList = () => {
  return (
    <div className="todoList-app">
      <div className="card-header">
        <h3>Yapılacaklar Listesi </h3>
      </div>
      <Search />
      <CustomTable />
    </div>
  );
};
export default TodoList;
