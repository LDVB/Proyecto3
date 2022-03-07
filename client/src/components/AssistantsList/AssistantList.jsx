import { useState } from "react"
import { useEffect } from "react"
import userService from "../../services/user.service"

const AsisstantsList = ({ eachAssitant }) => {

    const [oneAssistant, setOneAssitant] = useState({})

    console.log('asistirá: => ', oneAssistant)

    useEffect(() => {
        userService
            .getOneUserById(eachAssitant)
            .then(({ data }) => {
                console.log('data => ', data)
                setOneAssitant(data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <p>{oneAssistant.username}</p>
        </>
    )
}

export default AsisstantsList