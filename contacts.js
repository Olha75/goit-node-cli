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
    const contacts =await listContacts();
    const index = contacts.findIndex((item)=>item.id===contactId);
    if (index===-1)return null;
    const deleteContact=contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    return deleteContact;
 
  }
  
  async function addContact(name, email, phone) {
   const contacts = await listContacts();
   const newContact={
    id:nanoid(),
    name, email, phone}
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  
  }

 
module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
  };
   