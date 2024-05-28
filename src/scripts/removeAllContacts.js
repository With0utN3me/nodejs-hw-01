import { PATH_DB } from '../constants/contacts.js';
import fs from "node:fs/promises";

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify([]));
        console.log(`Successfully deleted all contacts from ${PATH_DB}`);
    } catch (error) {
        console.error(`Failed to delete all contacts from ${PATH_DB}:`, error);
    }
};

await removeAllContacts();
