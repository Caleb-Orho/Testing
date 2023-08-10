import { addDoc, collection } from "firebase/firestore";
import { db } from '../../firebase-config'

const AddUser = async (email, name)  => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            email: email, name: name
        });
        console.log("Document written with ID: ", docRef.id);

    } catch (e) {
        console.error("Error adding document: ", e);
    }

}

export default AddUser