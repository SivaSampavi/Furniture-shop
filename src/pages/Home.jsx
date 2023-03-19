import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet.js';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import '../styles/hero-section.css';
import { Link } from 'react-router-dom';
import Category from '../components/UI/category/Category.jsx';
import '../styles/home.css';
import products from '../assets/fake-data/products.js';

import ProductCard from '../components/UI/product-card/ProductCard.jsx';
import whyImg from '../assets/images/location.jpg';
import networkImg from '../assets/images/network.jpg';
import TestimonialSlider from '../components/UI/slider/TestimonialSlider.jsx';


const Home = () => {
  const [category, setCategory] = useState('ALL');
  const [allProducts, setAllProducts] = useState(products);
  
  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products);
    }
    if (category === 'BEDS') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Bed'
      );
      setAllProducts(filteredProducts);
    }
    if (category === 'CHAIRS') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Chair'
      );
      setAllProducts(filteredProducts);
    }
    if (category === 'SOFAS') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Sofa'
      );
      setAllProducts(filteredProducts);
    }
    if (category === 'TABLES') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Table'
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <Helmet title='Home'>
      <section>
        <Container align='center' >
          <Row>
            <Col lg='12' md='6'style={{ backgroundImage: `url('https://images.pexels.com/photos/12277409/pexels-photo-12277409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,opacity: 0.9, backgroundSize: '1400px 500px' }}>
              <div className='hero__content' >
              <h5 className='mb-3'>
                 
                </h5>
                <h1 className='mb-4 hero__title'>
                  Discover your perfect home style with out curated collection of furniture. <br /> Everything is here.
                </h1>

                

                <div className='hero__btns d-flex align-items-center gap-5 mt-4 justify-content-center'>
                <Link to='/furnitures'>
                  <button className='order__btn d-flex align-items-center justify-content-between'>
                  
                    Our collections <i className='ri-arrow-right-s-line'></i>
                  
                  </button>
                </Link>
                  <button className='all__furnitures-btn'>
                    <Link to='/furnitures'>Shop Now</Link>
                  </button>
                </div>
                <div className='hero__service d-flex align-items-center gap-5 mt-5 justify-content-center'>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='shipping__icon'>
                      
                    </span>
                    <b>Welcome to SOFTSOUL! We offer A Wide Range of Stylish And Functional Pieces To Enhance Your Home Or Office. Our Collection Includes Everything From Cozy Armchairs And Plush Sofas ToPractical Desks And Storage Solutions. Whether You're Looking For A Statement Piece To Complete Your Living Room Or Seeking Functional Office Furniture, We've Got you Covered. With A Focus On Quality,Affordablility, And Excellent Customer Service, We've Confident That You'll Find The Perfect Addition To You Space At Our Shop.Browse Our Collection Today To Start Transforming Your Space Into The Home Or Office Of Your Dreams.</b>
                  </p>
                  
                  <p className='d-flex align-items-center gap-2'>
                  <span className='shipping__icon'>
                    </span>
                  
                  </p>
                </div>
              </div>
            </Col>
           
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h5 className='feature__subtitle mb-4'>WHY WE ARE HERE...</h5>
              <h2 className='feature__title'> Experience comfort and style like never before with our premium selection of sofas for your home or office.</h2>
              <p className='mb-1 mt-4 feature__text'>
              Skip the hassle of browsing through countless furniture stores and let us do the work for you. Our team offers swift and dependable delivery of all your favorite furniture brands, right to your doorstep.
              </p>
              <p className='mb-1 mt-4 feature__text'>
              Sit back, relax, and let us take care of everything so you can enjoy the comfort of your new sofa from the comfort of your own home.
              </p>


              
            </Col>

          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>OUR COLLECTIONS</h2>
            </Col>
            <Col lg='12'>
              <div className='furniture__category d-flex align-items-center justify-content-center gap-5'>
                <button
                  onClick={() => setCategory('ALL')}
                  className={`all__btn ${
                    category === 'ALL' ? 'furnitureBtnActive' : ''
                  }`}
                >
                  NEW ARRIVALS
                </button>
                <button
                  onClick={() => setCategory('BEDS')}
                  className={`d-flex align-items-center gap-2 ${
                    category === 'BEDS' ? 'furnitureBtnActive' : ''
                  }`}
                >
                 
                  Beds
                </button>
                <button
                  onClick={() => setCategory('CHAIRS')}
                  className={`d-flex align-items-center gap-2 ${
                    category === 'CHAIRS' ? 'furnitureBtnActive' : ''
                  }`}
                >
                 
                  Chairs
                </button>
                <button
                  onClick={() => setCategory('TABLES')}
                  className={`d-flex align-items-center gap-2 ${
                    category === 'TABLES' ? 'furnitureBtnActive' : ''
                  }`}
                >
                 
                  Tables
                </button>
              </div>
            </Col>

            {allProducts.map((item) => {
              return (
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                  <ProductCard item={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className='why__choose-us'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImg} alt='why-Soft Soul' className='w-100'></img>
            </Col>
            <Col lg='6' md='6'>
              <div className='why__Soft Soul'>
                <h2 className='Soft Soul-title mb-4'>
                  Why <span>Soft Soul?</span>
                </h2>
                <p className='Soft Soul-desc'>
                "Make your home feel complete with a new sofa that perfectly complements your interior design. Forgot to add furniture to your last shopping trip? No worries - we've got you covered. At our company, we're committed to providing fast and reliable delivery for all your furniture needs. Whether you're looking for a sleek modern sectional from your favorite brand, or need same-day delivery for your new bed and bedding, we've got you covered. Our mission is to bring everything you want, need, or desire straight to your doorstep, without the hassle of shopping in-store. Trust us to handle the delivery, so you can focus on creating the home of your dreams."
                </p>
                <ListGroup className='mt-4'>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i className='ri-checkbox-circle-line'></i>Stylish
                   
                      <i className='ri-checkbox-circle-line'></i>Perfect Quality 
                      <i className='ri-checkbox-circle-line'></i>Affordable price
                    </p>
                  </ListGroupItem>
                  
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='Testimonial'>
                <h5 className='Testimonial__subtitle mb-4'>Customer Reviews</h5>
                <h2 className='Testimonial__title mb-40'>
                What are they thinking about us.
                </h2>
                <p className='Testimonial__desc'>
                We take great pride in the positive feedback we receive from our customers, and we would love to share some of their comments with you. Here are a few examples of what our satisfied customers have to say
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg='6' md='6'>
              <img src={networkImg} alt='Review-img' className='w-100' />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
