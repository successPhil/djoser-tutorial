import axios from 'axios'
const base_url = import.meta.env.VITE_BASE_URL
// const API_BASE_URL = `http://localhost:80/api`
const API_BASE_URL = `http://${base_url}/api`

export async function Logout(){
    function deleteAllCookies() {
        const cookies = document.cookie.split(";");
    
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
    
    try {
        await axios.post(`${API_BASE_URL}/logout/`, null, {
            withCredentials: true, // Ensure that cookies are included in the request
          })
        }
        catch (error){
            console.error('Error fetching data', error)
        }
        finally {
            localStorage.removeItem('access')
        
                // Clear access token cookie
            document.cookie = 'access=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
        // Clear refresh token cookie
            document.cookie = 'refresh=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            
        }

}