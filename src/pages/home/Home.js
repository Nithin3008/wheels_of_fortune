import { useEffect, useState } from "react"

export function Home1() {
    const [category, setCategory] = useState([])
    useEffect(() => {
        const url = async () => {
            const data = await fetch("/api/categories")
            const recData = await data.json()
            setCategory(recData.categories)
        }; url();
    }, [])
    return (<div>

    </div>)
}