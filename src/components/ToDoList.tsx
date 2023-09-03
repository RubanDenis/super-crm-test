import ToDoListTitle from "./ToDoListTitle"
import ToDoListItem from "./ToDoListItem"
import { IToDo } from "../models/ToDo"

interface ToDoListProps {
    toDoList: IToDo[]
}

function ToDoList({ toDoList }: ToDoListProps) {
    return (
        <section className="toDoListContainer">
            <ToDoListTitle counter={toDoList.length} />
            {toDoList.map((item: IToDo, index: number) => (
                <ToDoListItem toDoItem={item} key={index} />
            ))}
        </section>
    )
}

export default ToDoList
