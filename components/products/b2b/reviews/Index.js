import React from 'react'
import styles from './Index.module.css'
import { AiFillStar } from 'react-icons/ai'
const Review = () => {
    return (
        <div className={styles.review}>
            <h1>Review</h1>
            <div className={styles.reviewContainer}>
                <div className={styles.reviewTop}>
                    <div className={styles.Box1}>
                        <p>0</p>
                        <h3>
                            <AiFillStar /> &nbsp;
                            <AiFillStar /> &nbsp;
                            <AiFillStar /> &nbsp;
                            <AiFillStar /> &nbsp;
                            <AiFillStar />
                        </h3>
                    </div>
                    <div className={styles.Box2}>
                        <div className={styles.Box2Div}><p></p> &nbsp; &nbsp;<h4><AiFillStar /> &nbsp;
                            <AiFillStar /> &nbsp;
                            <AiFillStar /> &nbsp;
                            <AiFillStar /> &nbsp;
                            <AiFillStar />
                        </h4>
                    </div>
                        <div className={styles.Box2Div}><p></p>&nbsp; &nbsp;<h4>
                            <AiFillStar /> &nbsp;
                            <AiFillStar /> &nbsp;
                            <AiFillStar /> &nbsp;
                            <AiFillStar />
                        </h4></div>
                        <div className={styles.Box2Div}><p></p>&nbsp; &nbsp;<h4>
                            <AiFillStar /> &nbsp;
                            <AiFillStar /> &nbsp;
                            <AiFillStar />
                        </h4></div>
                        <div className={styles.Box2Div}><p></p>&nbsp; &nbsp;<h4>
                            <AiFillStar /> &nbsp;
                            <AiFillStar />
                        </h4></div>
                        <div className={styles.Box2Div}><p></p>&nbsp; &nbsp;<h4>
                            <AiFillStar />
                        </h4></div>
                    </div>
                    
                </div>
                <div className={styles.reviewBottom}>
                    <p>Reviews</p>
                    <div className={styles.reviewBottomDiv}>
                        <span><h1>ME</h1></span>
                        <div className={styles.AddReview}>
                            {/* <input type="text" name="" id="" placeholder='Add Your Review Here'/> */}
                            <textarea name="" placeholder='Add Your Review Here' id="" cols="30" rows="10"></textarea>
                            <div className={styles.AddReviewBox2}>
                                <h5>
                                    <AiFillStar /> &nbsp;
                                    <AiFillStar /> &nbsp;
                                    <AiFillStar /> &nbsp;
                                    <AiFillStar /> &nbsp;
                                    <AiFillStar />
                                </h5>
                                <button>POST</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review