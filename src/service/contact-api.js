import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000'

export function fetchContacts() {
    return axios.get('/contacts');
}

export function addContact(contact) {
    return axios.get('/contacts', contact)
}

export function deleteContact(id) {
    return axios.delete(`/contacts/${id}`)
}

// import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:3000'

// export async function fetchContacts() {
//     const{data} = await axios.get('/contacts');
//     return data;
// }

// // export function addContact(contact) {
// //     const{data} = await axios.post('/contacts', contact);
// //     return data;
// // }

// // export function deleteContact(id) {
// //     const{data} = await axios.delete(`/contacts/${id}`);
// //     return data;
// // }