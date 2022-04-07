import { useState } from "react";
import Contador from "./Contador";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import ModalForm from "./ModalForm";
import Popup from "./Popup";
import useContador from "../hooks/useContador";

const TodosContainer = () => {
  const [todos, setTodos] = useState([]);
  const [buttonForm, setButtonForm] = useState(false);
  const [contador, handleContador] = useContador(0, todos);

  const submit = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <Contador totalTodos={todos.length} completed={contador} />
      <Todos
        todos={todos}
        handleContador={handleContador}
        setTodos={setTodos}
      />
      <div className="btn-container">
        <AddTodo onClick={() => setButtonForm(true)} />
      </div>
      <Popup trigger={buttonForm} setTrigger={setButtonForm}>
        <ModalForm setTrigger={setButtonForm} submit={submit} />
      </Popup>
    </>
  );
};

export default TodosContainer;