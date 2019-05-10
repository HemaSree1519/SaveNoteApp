import {getUser} from "../../Session/UserSession";

export const formNoteDetails = (title, content) => {
    return {
        "email": getUser(),
        "title": title,
        "content": content,
        "createdAt": new Date(),
        "updatedAt": new Date()
    };
};