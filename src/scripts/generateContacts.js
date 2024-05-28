import { PATH_DB } from '../constants/contacts.js';
import fs from "node:fs/promises";
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    let contacts = [];
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        contacts = JSON.parse(data);
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
    }
    for (let i = 0; i < number; i++){
        contacts.push(createFakeContact());
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`${number} contacts generated and saved to ${PATH_DB}`);
};

await generateContacts(10);