export const API_URL = "http://dev.codeleap.co.uk/careers/";

export function POSTS_GET(){
    return {
        url: API_URL,
        opitions: {
            method: "GET",
        }
    }
};

export function POSTS_POST(body){
    return{
        url: API_URL, 
        options:{
            method: "POST",
            headers: {
            "Content-Type" : "application/json",},
            body : JSON.stringify(body),
        }
    }

}

export function POSTEDIT_PATCH(id, body){
    return {
        url : API_URL + id + "/",
        options:{
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(body)
        }
    }

}

export function POSTDELETE_DELETE(id){
    return {
        url : API_URL + id + "/",
        options: {
            method: "DELETE",
            headers: {
                "Content-Type" : "cors",
            },
        }
    }
}