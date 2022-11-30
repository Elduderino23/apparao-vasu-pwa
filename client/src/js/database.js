import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) =>
console.log('Post to the database');


const contactDb = await openDB('contact', 1);


const tx = contactDb.transaction('contact', 'readwrite');


const store = tx.objectStore('contact');


const request = store.add({ });


const result = await request;
console.log('🚀 - data saved to the database', result);


export const getDb = async () => {
  console.log('GET from the database');


const contactDb = await openDB('contact', 1);


const tx = contactDb.transaction('contact', 'readonly');


const store = tx.objectStore('contact');


const request = store.getAll();


const result = await request;
console.log('result.value', result);
return result;
};

initdb();
