import { useContext } from "react"
import { faker } from "@faker-js/faker"
import Checkbox from "@mui/material/Checkbox"

import "../styles/ToDoListItem.scss"
import UserImage from "../icons/user.svg"
import { IToDo } from "../models/ToDo"
import { ViewContext } from "../App"

interface ToDoListItemProps {
    toDoItem: IToDo
}
type TInViewRef = (node?: Element | null | undefined) => void

function ToDoListItem({ toDoItem }: ToDoListItemProps) {
    const inViewRef: TInViewRef = useContext(ViewContext)

    const dateFormat: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    }

    return (
        <div ref={inViewRef} className="toDoListItemWraper">
            <div className="toDoListItem">
                <div className="itemTitle">
                    <Checkbox
                        sx={{
                            color: "#AAB7D4",
                            backgroundColor: "#F8FAFB",
                            "&.Mui-checked": {
                                color: "#3D8FEC",
                            },
                        }}
                        className="itemCheckbox"
                        checked={toDoItem.completed}
                    />
                    {toDoItem.title}
                </div>

                <div className="timeIntervalWraper">
                    <span className="timeIntervalItem">
                        {faker.date
                            .recent()
                            .toLocaleString("en-US", dateFormat)}
                    </span>
                    <span className="timeIntervalItem">
                        {faker.date
                            .future()
                            .toLocaleString("en-US", dateFormat)}
                    </span>
                </div>

                <p className="itemDescription">{faker.lorem.lines()}</p>

                <div className="itemFooter">
                    <div className="tagWraper">
                        <span className="itemTag">
                            {faker.word.adjective({ strategy: "any-length" })}
                        </span>
                        <div className="itemTag">
                            {faker.word.adjective({ strategy: "any-length" })}
                        </div>
                        <div className="tagRectangle"></div>
                    </div>

                    <img src={UserImage} alt="User" />
                </div>
            </div>
        </div>
    )
}

export default ToDoListItem
