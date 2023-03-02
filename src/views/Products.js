import React, { useEffect } from 'react'
import Container from '../components/Container/Container'
import Selector from '../components/Selector/Selector'
import ListItem from '../components/ListItem/ListItem'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading/Loading'
import Error from '../components/Error/Error'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { useHistory, useLocation } from 'react-router'
import { fetchProductList } from '../actions/productListAction'
import PageNav from '../components/PageNav/PageNav'

const Products = () => {
    const dispatch = useDispatch();
    const {productList, errors, loading, pages} = useSelector(state => state.productList);
    const {items, errors: errorsItem} = useSelector(state => state.nav);
    const query = new URLSearchParams(useLocation().search);
    const manufacturer = query.get('manufacturer');
    const classes = query.get('classes');
    const price = query.get('price');
    const search = query.get('search');
    const sort = query.get('sort');
    const page = query.get('page') ? parseInt(query.get('page')) : 1;
    const history = useHistory();


    useEffect(() => {
        dispatch(fetchProductList(page, manufacturer, classes, price, search, sort));
        window.scrollTo(0, 0);
    }, [dispatch, page, manufacturer, classes, price, search, sort]);

    

    const manufacturers = items.find(item => {
        return item.title === 'Manufacturers';
    }).links;
    const classesList = items.find(item => {
        return item.title === 'Classes';
    }).links;

    const findProductList = (manufacturer, productClass, price, search, sort) => {
        const queryURL = new URLSearchParams();
        if(search !== '') {
            queryURL.append('search', search);
        }
        if(manufacturer !== 'all') {
            queryURL.append('manufacturer', manufacturer);
        }
        if(productClass !== 'all') {
            queryURL.append('classes', productClass);
        }
        if(price !== 'all') {
            queryURL.append('price', price);
        }
        if(sort !== 'name-asc') {
            queryURL.append('sort', sort);
        }
        queryURL.append('page', 1);
        history.push({search: queryURL.toString()});
    }
    const handleChangePage = (thePage) => {
        const queryURL = new URLSearchParams();
        if(search) {
            console.log(search)
            queryURL.append('search', search);
        }
        if(manufacturer) {
            queryURL.append('manufacturer', manufacturer);
        }
        if(classes) {
            queryURL.append('classes', classes);
        }
        if(price) {
            queryURL.append('price', price);
        }
        if(sort) {
            queryURL.append('sort', sort);
        }
        queryURL.append('page', thePage);
        history.push({search: queryURL.toString()});
    }

    return (
        <Container>
            <ScrollToTop></ScrollToTop>
            {errorsItem ? <Error>{errors}</Error> : <Selector manufacturers={manufacturers} classes={classesList} defaultManufacturer={manufacturer} defaultClasses={classes} onFindProductList={findProductList} ></Selector>}
            
            {loading ? <Loading></Loading> : errors ? <Error>{errors}</Error> : <><ListItem data={productList} ></ListItem> <PageNav number={pages} onChangePage={handleChangePage} data={{page}} ></PageNav></>  }
            
        </Container>
    )
}

export default Products
