import {useEffect} from 'react'
import { useLocation } from 'react-router'

const ScrollToTop = () => {
    const {key} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [key])    
    return (
        null
    )
}

export default ScrollToTop
