import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Formik, ErrorMessage } from 'formik';
// import * as yup from 'yup';

import {
  Wrapper,
  SearchForm,
  SearchFormInput,
  SearchFormButton,
  SearchFormLabel,
} from './SearchBox.styled';

// let schema = yup.object().shape({
//   query: yup.string().required(),
// });

export const SearchBox = ({ onSubmit }) => {
  const handleFormSubmit = (values, { resetForm }) => {
    // console.log(values.query);
    // console.log(values);
    if (values.query.trim() === '') {
      return toast.error('Please enter something!');
      // return alert('Please, add word');
    }
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        query: '',
      }}
      // validationSchema={schema}
      onSubmit={handleFormSubmit}
    >
      <Wrapper>
        <SearchForm>
          <SearchFormInput
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            // value={value}
            placeholder="Search movie"
          />
          <SearchFormButton type="submit">
            <SearchFormLabel>Search</SearchFormLabel>
          </SearchFormButton>
          <ErrorMessage component="span" name="query" />
        </SearchForm>
      </Wrapper>
    </Formik>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
