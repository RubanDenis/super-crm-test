import { useEffect, useState } from "react"
import axios, { AxiosError } from "axios"
import { useInView } from "react-intersection-observer"

import { IToDo } from "../models/ToDo"

interface IUseTodos {
    todos: IToDo[]
    error: string
    loading: boolean
    inViewRef: (node?: Element | null | undefined) => void
}

export function useTodos(): IUseTodos {
    const [todos, setTodos] = useState<IToDo[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const [page, setPage] = useState<number>(1)

    const { ref: inViewRef, inView } = useInView({
        threshold: 0,
    })

    async function fetchTodos() {
        try {
            setError("")
            setLoading(true)

            const response = await axios.get<IToDo[]>(
                `https://jsonplaceholder.typicode.com/todos?_page=${page}`
            )
            setTodos([...todos, ...response.data])

            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchTodos()
    }, [page])

    useEffect(() => {
        if (inView) {
            setPage(prev => (prev += 1))
        }
    }, [inView])

    return { todos, error, loading, inViewRef }
}
