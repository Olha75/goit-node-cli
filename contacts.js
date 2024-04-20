const fs = require("node:fs/promises");
const {nanoid} =require ("nanoid");
const path =require("path");



//  Розкоментуй і запиши значення
 const contactsPath = path.join(__dirname, "db", "contacts.json");
 

async function listContacts() {
     const data = await fs.readFile("contactsPath", {encoding: "utf-8"});

     return JSON.parse(data);
  }
  


  async function getContactById(contactId) {
    const id=contactId.toString();
    const contacts = await listContacts();
    const result= contacts.find((contact)=>contactId===id);

    return result || null;
  }
  
  async function removeContact(contactId) {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  }
  
  async function addContact(name, email, phone) {
    // ...твій код. Повертає об'єкт доданого контакту (з id).
  }