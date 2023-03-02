import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ViewProduct from '../components/ViewProduct/ViewProduct'
import Loading from '../components/Loading/Loading'
import Error from '../components/Error/Error'
import { useEffect } from 'react'
import { getProductDetail, getProducts } from '../actions/productAction'
import { useParams } from 'react-router'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import Featured from '../components/Featured/Featured'
import Review from '../components/Review/Review'


const ProductDetail = () => {
    const dispatch = useDispatch();
    const {id} = useParams(); 
    const {product, errors, loading, products, loadingDetail, errorsDetail} = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(getProductDetail(id));
        dispatch(getProducts());
    }, [dispatch, id])


    return (
        <>
            <ScrollToTop></ScrollToTop>
            {loadingDetail ? <Loading></Loading> : errorsDetail ? <Error>{errors}</Error> : <ViewProduct {...product}></ViewProduct>}
            {loadingDetail ? <Loading></Loading> : errorsDetail ? <Error>{errors}</Error> : <Review productId={product._id}></Review>}
            {loading ? <Loading></Loading> : errors ? <Error>{errors}</Error> : <Featured title="Featured Products" data={products}></Featured>}
            
        </>
    )
}

export default ProductDetail
