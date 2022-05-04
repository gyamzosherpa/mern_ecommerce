import React, { useState, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearErrors, getProduct } from '../../actions/ProductActions';
import Footer from '../../Footer';
import BottomTab from '../../more/BottomTab';
import MetaData from '../../more/Metadata';
import Header from '../Home/Header';
import ProductCard from './ProductCard';
import './Search.css';

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push('/products');
    }
  };

  const dispatch = useDispatch();
  const { products, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <Fragment>
      <MetaData title="Search" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search your favourite products ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-search pointer"
          viewBox="0 0 16 16"
          onClick={searchSubmitHandler}
          style={{
            right: '26%',
            position: 'absolute',
          }}
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </form>
      <div style={{ marginTop: 100 }}>
        <Header />
      </div>

      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>

      <Footer />
      <BottomTab />
    </Fragment>
  );
};

export default Search;
