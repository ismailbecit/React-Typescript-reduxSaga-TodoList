import Button from "../Button/button";
import { FC } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { UInitialState } from "../../redux/futures/todoSlice";
import { todoActions } from "../../redux/futures/todoActions";

interface ICustomTable {
  headcell?: [];
  data?: [];
}

const CustomTable: FC<ICustomTable> = () => {
  const myTodos = useSelector((state: RootStateOrAny) => state.todo.todos);
  const dispatch = useDispatch();
  console.log(myTodos, "mytodoss");
  return (
    <div style={{ width: "500px" }}>
      <table width={500} style={{ width: "500px" }} className="custom-Table">
        <tr>
          <td></td>
          <th>Yapılacak</th>
          <th>Durum</th>
          <th>İşlem</th>
        </tr>

        {myTodos
          ? myTodos.map(
              (todo: any) => (
                console.log(todo, "todsss"),
                (
                  <tr className={todo.complated ? "todo-complated" : ""}>
                    <td>
                      <input
                        type="checkbox"
                        style={{
                          transform: "scale(1.5)",
                        }}
                        onChange={(e) => {
                          if (e.target.checked) {
                            dispatch({
                              type: todoActions.UPDATE_TODO,
                              id: todo.id,
                              complated: true,
                            });
                          } else {
                            dispatch({
                              type: todoActions.UPDATE_TODO,
                              id: todo.id,
                              complated: false,
                            });
                          }
                        }}
                      />
                    </td>
                    <td>{todo.content}</td>
                    <td>
                      {todo.complated ? (
                        <div style={{ color: "red" }}>Tamamlandı</div>
                      ) : (
                        "Bekleniliyor"
                      )}
                    </td>
                    <td>
                      <Button
                        style={{
                          color: "white",
                          background: "red",
                          border: "none",
                          padding: "10px",
                          borderRadius: "5px",
                        }}
                        onClick={() =>
                          dispatch({
                            type: todoActions.DELETE_TODO,
                            id: todo.id,
                          })
                        }
                        text="Sil"
                      />
                    </td>
                  </tr>
                )
              )
            )
          : ""}
      </table>
    </div>
  );
};

export default CustomTable;
