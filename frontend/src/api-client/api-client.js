const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const createAccount = async (formData) => {
    const response = await fetch(`${VITE_API_BASE_URL}/api/auth/create-account`, {

        method: "POST",

        //tells the server to expect a body in json format 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
    })
    
    // get the body of the response
    const responseBody = await response.json();
    
    if (!response.ok) {
        throw new Error(responseBody.message);
    }
}

