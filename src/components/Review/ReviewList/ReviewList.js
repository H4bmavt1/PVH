import React from 'react'
import styles from './ReviewList.module.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { deleteComment, dislikeComment, fetchComments, likeComment } from '../../../actions/commentAction'
import Loading from '../../Loading/Loading'
import Error from '../../Error/Error'
import { url } from '../../../data'

const ReviewList = ({productId}) => {
    const dispatch = useDispatch();
    const {loading, errors, comments} = useSelector(state => state.comment);
    const {user} = useSelector(state => state.account);

    useEffect(() => {
        dispatch(fetchComments(productId));
    }, [dispatch, productId])

    const handleDeleteComment = (id) => {
        dispatch(deleteComment(id));
    }

    const handleLike = (id) => {
        dispatch(likeComment(id));
    }

    const handleDislike = (id) => {
        dispatch(dislikeComment(id));
    }

    if(loading) {
        return <Loading></Loading>
    }
    if(errors) {
        return <Error>{errors}</Error>
    }

    return (
        <ul className={styles.list}>
            {comments.map(item => {
                return (
                    <li key={item._id} className={styles.item}>
                        <img src={`${url}/images/users/${item.user.avata}`} alt={item.user.name} className={styles.avata} />
                        <p className={styles.name} >{item.user.name} <span className={styles.date}>{new Date(item.date).toLocaleDateString()}</span></p>
                        <p className={styles.comment}>{item.text}</p>
                        <div className={styles.control}>
                            <div className={styles.control_btn}>
                                <button onClick={() => handleLike(item._id)} className={styles.control_icon}><i className="far fa-thumbs-up"></i></button>
                                <span>{item.likes.length}</span>
                            </div>
                            <div className={styles.control_btn}>
                                <button onClick={() => handleDislike(item._id)} className={styles.control_icon}><i className="far fa-thumbs-down"></i></button>
                                <span>{item.dislikes.length}</span>
                            </div>
                        </div>
                        {user._id === item.user._id && <button onClick={() => handleDeleteComment(item._id)} className={styles.remove}><i className="fas fa-trash-alt"></i></button>}

                    </li>
                )
            })}
        </ul>
    )
}

export default ReviewList
