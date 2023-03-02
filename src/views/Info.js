import React from 'react'
import UserInfo from '../components/UserInfo/UserInfo'
import UserReceipts from '../components/UserReceipts/UserReceipts'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'

const Info = () => {
    return (
        <>
            <ScrollToTop></ScrollToTop>
            <UserInfo></UserInfo>   
            <UserReceipts></UserReceipts>
        </>
    )
}

export default Info
