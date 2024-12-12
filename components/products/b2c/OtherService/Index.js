import React from "react";
import styles from "./Index.module.css";
import Link from "next/link"

const OtherService = () => {

    return (
        <div className={styles.serviceContainer}>
            <div className={styles.service}>
                <iframe
                    className={styles.video}
                    width="100%"
                    height="280"
                    src="https://www.youtube.com/embed/PEM0Vs8jf1w?si=BBIf6q6kL6xXRj8L"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
                <h3>Wholesale and B2B redifined</h3>
                <p>Enhance your wholesale and B2B businesses for ecommerce with specialized features</p>
                <br />
                <span className={styles.serviceLink}>
                    <span >
                        <Link href='/products/b2b'>MORE</Link>
                    </span>
                    <Link href='/products/b2b'>
                        <svg width="80" height="16" viewBox="0 0 116 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M115.707 8.70711C116.098 8.31658 116.098 7.68342 115.707 7.29289L109.343 0.928932C108.953 0.538408 108.319 0.538408 107.929 0.928932C107.538 1.31946 107.538 1.95262 107.929 2.34315L113.586 8L107.929 13.6569C107.538 14.0474 107.538 14.6805 107.929 15.0711C108.319 15.4616 108.953 15.4616 109.343 15.0711L115.707 8.70711ZM0 9H115V7H0V9Z" fill="black" />
                        </svg>
                    </Link>
                </span>

            </div>
            <div className={styles.service}>
                <iframe
                    className={styles.video}
                    width="100%"
                    height="280"
                    src="https://www.youtube.com/embed/PEM0Vs8jf1w?si=BBIf6q6kL6xXRj8L"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
                <h3>DROPSHIPPING</h3>
                <p>Create a seamless online platform for harnessing the power of dropshipping with us</p>
                <br />
                <span className={styles.serviceLink}>
                    <span >
                        <Link href='/products/dropshipping'>MORE</Link>
                    </span>
                    <Link href='/products/dropshipping'>
                        <svg width="80" height="16" viewBox="0 0 116 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M115.707 8.70711C116.098 8.31658 116.098 7.68342 115.707 7.29289L109.343 0.928932C108.953 0.538408 108.319 0.538408 107.929 0.928932C107.538 1.31946 107.538 1.95262 107.929 2.34315L113.586 8L107.929 13.6569C107.538 14.0474 107.538 14.6805 107.929 15.0711C108.319 15.4616 108.953 15.4616 109.343 15.0711L115.707 8.70711ZM0 9H115V7H0V9Z" fill="black" />
                        </svg>
                    </Link>
                </span>
            </div>
        </div>
    )

}

export default OtherService;