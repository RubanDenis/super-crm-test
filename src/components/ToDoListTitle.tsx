import "../styles/ToDoListTitle.scss"
import AddIcon from "../icons/add_bold.svg"

interface ToDoListTitleProps {
    counter: number
}

function ToDoListTitle({ counter }: ToDoListTitleProps) {
    return (
        <div className="toDoListTitleWraper">
            <span className="listTitle">Today</span>
            <div className="listCounterWraper">
                <button className="addItemBtn">
                    <img src={AddIcon} alt="add" />
                </button>
                <span className="listCounter">{counter}</span>
            </div>
        </div>
    )
}

export default ToDoListTitle
