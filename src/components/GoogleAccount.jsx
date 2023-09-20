import axios from "axios";
import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux";
import { userlogingoogle } from "../store/actions/userActions";

const GoogleAccount = () => {
    const googleButton = useRef();
    const dispatch = useDispatch();

    const handleCredentialResponse = async (response) => {
        const data = {
            token_id: response.credential
        }
        const userResponse = await axios.post('http://localhost:7000/api/auth/google', data);
        //console.log(userResponse)

        // despacha la accion con los datos
        dispatch(userlogingoogle(userResponse));        
    }

    useEffect(() => {
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: "840871944006-ub1g60l4l62s39qshvte8qvi5pcn9d2e.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });

            window.google.accounts.id.renderButton(
                googleButton.current,
                {
                    type: "standard",
                    shape: "pill",
                    theme: "outline",
                    text: "signin_with",
                    size: "large",
                    locale: "en-US",
                    logo_alignment: "center",
                    width: "300"
                }  // customization attributes
            );
        }
    }, [])

    return (
        <div ref={googleButton}></div>
    )
}

export default GoogleAccount