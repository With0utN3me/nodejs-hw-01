import { PATH_DB } from '../constants/contacts.js';
import fs from "node:fs/promises";
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    let contacts = [];
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        contacts = JSON.parse(data);
        contacts.push(createFakeContact());
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`Contact generated and saved to ${PATH_DB}`);
};

await addOneContact();
