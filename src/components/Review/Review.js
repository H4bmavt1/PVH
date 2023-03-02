import React from 'react'
import Container from '../Container/Container'
import InputReview from './InputReview/InputReview'
import styles from './Review.module.css';
import ReviewList from './ReviewList/ReviewList';
 
const Review = ({productId}) => {
    return (
        <Container>
            <h2 className={styles.title} >Review</h2>
            <InputReview productId={productId}></InputReview>
            <ReviewList productId={productId}></ReviewList>
        </Container>
    )
}

export default Review
