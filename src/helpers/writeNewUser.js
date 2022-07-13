import { getDatabase, update, ref } from 'firebase/database';

export async function writeNewUser(userID, name, email) {
    const db = getDatabase();
    await update(ref(db, 'users/' + userID), {
        name: name,
        email: email
    })
}