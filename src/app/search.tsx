import { Input } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../redux/futures/todoActions";

const Search = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  return (
    <div>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          width: "300px",
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: todoActions.ADD_TODO, data: task });
          setTask("");
        }}
        style={{
          color: "green",
          padding: "15px",
          marginLeft: "10px",
          border: "none",
          width: "150px",
        }}
      >
        Ekle
      </button>
    </div>
  );
};
export default Search;
