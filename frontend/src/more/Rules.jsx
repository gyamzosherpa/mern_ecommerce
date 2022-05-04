import React from 'react';
import './Rules.css';
import Header from '../component/Home/Header';
import BottomTab from './BottomTab';
import MetaData from './Metadata';
import Footer from '../Footer';

const Rules = () => {
  return (
    <>
      <MetaData title="Rules" />
      <Header />
      <div
        className="rules"
        style={{
          padding: '50px 30px',
          display: 'flex',
          width: '95%',
          overflow: 'hidden',
        }}
      >
        <ul className="rules">
          <span
            style={{
              color: '#000',
              fontSize: '1.3rem',
              fontWeight: '800',
              fontFamily: 'Roboto',
            }}
          >
            Some Rules:
          </span>
          <li>
            1. You can easily return your product..But you have to give us the
            delivery charge...
          </li>
          <li>
            2. You have to give delivery charge first for cash on
            Delivery..Inside City you have to give Rs.100 and outside charge
            will be more than 100 according to your location.
          </li>
          <li>3. You can not order the OutOfStock products...</li>
          <li>
            4. You can order the available products from us...we are trying our
            best to give the best quality of products...
          </li>
          <li>
            5. You can find more new features in coming days very soon, so keep
            in touch with us... Our developers team always work for your good
            services...
          </li>
          <li>
            6. You can also directly order from our social media pages. We are
            available in instagram and facebook.
          </li>
          <li>
            7. At last thanks for visiting our website...Have a good day !
          </li>
        </ul>
      </div>
      <Footer />
      <BottomTab />
    </>
  );
};

export default Rules;
