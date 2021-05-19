import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context'


const SearchForm = () => {
  const { setSearch } = useGlobalContext();
  const searchValue = React.useRef('')

  useEffect(()=>{
    searchValue.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange = () => {
    setSearch(searchValue.current.value)
  }
  return(
    <section className='section search'>
      <div>
        <form className='search-form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor="name">Search for a recipe</label>
            <input
              type='text'
              name='name'
              id='name'
              ref={searchValue}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;

