import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Book } from "../services/book/Book";
import { searchBooks, getDescriptionByKey, resetSearch, setBookSelected, getBioByKey } from "../stores/book";

const useBooks = () => {

    const { books, bookSelected, lastBook, loading } = useSelector((state) => state.book);

    const dispatch = useDispatch();
    
    const search = (name: string, page: number) => {
        page === 1 && dispatch(resetSearch(false));
        !lastBook && dispatch(searchBooks({
            name: name, 
            page: page
        }));
    }

    const getDescription = (book: Book) => {
        dispatch(setBookSelected(book));
        dispatch(getDescriptionByKey(book.key));
        dispatch(getBioByKey(book.author.key));
    }

    return { books, bookSelected, loading, search, getDescription }

}

export { useBooks }