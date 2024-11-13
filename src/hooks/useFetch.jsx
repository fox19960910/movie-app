import { useEffect, useState } from 'react'

const DEFAULT_HEADER = {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
}
export default function useFetch(
    { url, method = 'GET', headers = {} },
    { enabled } = { enabled: true }
) {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const { VITE_API_HOST } = import.meta.env
    useEffect(() => {
        if (enabled) {
            setIsLoading(true)
            fetch(`${VITE_API_HOST}/${url}`, {
                method: method,
                headers: { ...DEFAULT_HEADER, ...headers },
            })
                .then(async (res) => {
                    const response = await res.json()
                    setData(response)
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }, [method, url, JSON.stringify(headers)])
    return { data, isLoading }
}
