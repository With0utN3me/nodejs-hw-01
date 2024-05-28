import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        let contacts = JSON.parse(data);

        if (contacts.length > 0) {
            const decimatedContacts = contacts.filter(() => Math.random() > 0.5);

            await fs.writeFile(PATH_DB, JSON.stringify(decimatedContacts, null, 2));
            console.log(`Successfully decimated contacts. Remaining contacts: ${decimatedContacts.length}`);

        } else {
            console.log("No contacts left for decimation...");
        }
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log("No contact file found.");
        } else {
            throw error;
        }
    }
};

await thanos();
