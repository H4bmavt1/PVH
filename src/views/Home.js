import React from 'react'
import Hero from '../components/Hero/Hero'
import ListItem from '../components/ListItem/ListItem'
import Ads from '../components/Ads/Ads'
import Featured from '../components/Featured/Featured'
import Reviews from '../components/Reviews/Reviews'
import Picked from '../components/Picked/Picked'
import WhyChoose from '../components/WhyChoose/WhyChoose'
import { getProducts } from '../actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Loading from '../components/Loading/Loading'
import Error from '../components/Error/Error'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import Container from '../components/Container/Container'
import LoadMore from '../components/LoadMore/LoadMore'


const Home = () => {
    const dispatch = useDispatch();
    const {products, errors, loading} = useSelector((state) => state.products);
    
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])
    return (
        <>
            <ScrollToTop></ScrollToTop>
            <Hero></Hero>
            {loading ? <Loading></Loading> : errors ? <Error>{errors}</Error> : <Container><ListItem title="New products for you" data={products}></ListItem> <LoadMore></LoadMore> </Container>}
            <Ads></Ads>
            {loading ? <Loading></Loading> : errors ? <Error>{errors}</Error> : <Featured data={products}></Featured>}
            <Reviews></Reviews>
            <Picked></Picked>
            <WhyChoose></WhyChoose>
        </>
    )
}

export default Home
