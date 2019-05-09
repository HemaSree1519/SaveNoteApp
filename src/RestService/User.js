
export const getAllUsers= async () => {
    const response = await fetch('/notesaver/users');
    const body = await response.json();
};

export const createUser= (user) => {
    return new Promise(async function (resolve, reject) {
        try {
            const response= await fetch('/notesaver/users/add', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user),
            });
            resolve(response.status);
        } catch (e) {
            reject(e)
        }
    });
};