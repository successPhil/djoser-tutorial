import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";



export default function Activation() {
    const base_url = import.meta.env.VITE_BASE_URL
    // const API_BASE_URL = `http://localhost:80/api`
    const API_BASE_URL = `http://${base_url}/api`


    const {uid, token} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const activateAccount = async () => {
            try {
                const response = await axios.post(`${API_BASE_URL}/users/activation/`, {
                    uid: uid,
                    token: token
                });

                // Handle the response as needed
                toast.success('Account activated');
                navigate('/login')
            } catch (error) {
                // Handle errors
                toast.error('Whoops something went wrong');
                navigate('/')
            }
        };

        // Call the activation function
        activateAccount();
    }, [uid, token]);
    
    return (
        <h1 className="text-teal-400">Activation Page</h1>
    )
}