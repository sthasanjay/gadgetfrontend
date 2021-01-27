import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import TrendingItemsData from './TrendingItemsData';
import TrendingItem from './TrendingItem';
const TrendingProducts = () => {
    return (
        <>
    <Container fluid className="trending-container my-5">
        <Row>
          <div className="trending-heading w-100 text-center">
            <h1>Essential Products</h1>
            <p> Trending Products </p>
          </div>
          <Col xl={11} className="mx-auto">
            <Row className="flex-row-wrap">
              {TrendingItemsData.map((value, index) => {
                return (
                  <>
                    <TrendingItem
                      key={index}
                      img={value.img}
                      name={value.name}
                      price={value.price}
                    />
                  </>
                );
              })}
            </Row>
            <Row className="flex-css py-5">
              <a href="#" className="show-all-btn">
                All Products
              </a>
            </Row>
          </Col>
        </Row>
      </Container>
       </>


    )
}

export default TrendingProducts
