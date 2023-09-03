import React from "react"

import ToDoList from "./components/ToDoList"
import Loader from "./components/Loader"
import { ErrorMessage } from "./components/ErrorMessage"
import { useTodos } from "./hooks/Todos"

export const ViewContext = React.createContext(() => {})

function App() {
    const { loading, error, todos, inViewRef } = useTodos()

    return (
        <section className="container">
            {todos && (
                <ViewContext.Provider value={inViewRef}>
                    <ToDoList toDoList={todos} />
                </ViewContext.Provider>
            )}
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
        </section>
    )
}

export default App
