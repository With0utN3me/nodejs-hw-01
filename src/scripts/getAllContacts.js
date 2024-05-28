import { PATH_DB } from '../constants/contacts.js';
import fs from "node:fs/promises";

export const getAllContacts = async () => {
    let contacts = [];
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        contacts = JSON.parse(data);
        if (contacts.length > 0){
            return contacts;
        }
        else {
            return "No contacts in Database!";
        }
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
    }
};

console.log(await getAllContacts());
