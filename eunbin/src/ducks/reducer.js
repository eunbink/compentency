import axios from 'axios';

//------setting initial state----------//
const initialState = {
   books:[]
}

const GET_BOOKS = "GET_BOOKS";




//-------actionbuilders------//
export function getBooks() {
    let booklists = axios.get('/api/get_books').then(response => {
        console.log(response.data)
        return response.data
       
    })
    return {
        type: GET_BOOKS,
        payload: booklists
    }
}
//---------reducer----------//
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_BOOKS + '_FULFILLED':
        return Object.assign({}, state, { books: action.payload })
    }
}