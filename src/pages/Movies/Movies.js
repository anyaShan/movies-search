import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { MainContainer } from 'components/MainContainer/MainContainer';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { apiSearchQuery } from 'components/Services/Api';
// import { Outlet } from 'react-router-dom';
// import { AppBar } from 'components/AppBar/AppBar';
// import { LayoutWrap } from './Layout.stuled';

const Movies = () => {
  const [moviesSearchList, setSearchList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!queryParam) {
      return;
    }
    apiSearchQuery(queryParam)
      .then(respons => {
        const { results } = respons;
        if (results.length === 0) {
          return toast.error('You enter invalid search request');
        }
        setSearchList([...results]);
      })
      .catch(error => error.message);
  }, [queryParam]);

  const updateQueryString = value => {
    const { query } = value;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <MainContainer>
      <ToastContainer autoClose={3000} theme="dark" />
      <SearchBox onSubmit={updateQueryString} />
      {moviesSearchList.length > 0 && (
        <MoviesList moviesList={moviesSearchList} />
      )}
    </MainContainer>
  );
};

export default Movies;
