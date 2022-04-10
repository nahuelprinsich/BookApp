import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Book } from "../services/book/Book";
import { searchBooks, resetSearch, setBookSelected, getData } from "../stores/book";

const useBook = () => {

    const [ page, setPage ] = useState<number>(1);
    const { books, bookSelected, lastBook, loading } = useSelector((state) => state.book);

    const dispatch = useDispatch();

    const search = (name: string, page: number) => {
        if(name && name.length > 3) {
            setPage(page);
            page === 1 && dispatch(resetSearch(false));
            !lastBook && dispatch(searchBooks({
                name: name.split(' ').join('+'), 
                page: page
            }));
        }
    }; 

    const getBookData = (book: Book) => {
        dispatch(setBookSelected(book));
        dispatch(getData({bookKey: book.key, authorKey: book.author.key}));
    }

    return { books, page, bookSelected, loading, setPage, search, getBookData }

}

export { useBook }