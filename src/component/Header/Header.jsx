import React from 'react'
import styles from './Header.module.css'


export default function Header() {
    return (
        <div id='home' className={styles.headerContainer}>
            <h3>
                <p>
                    I<span>'</span>m
                </p>
                Ricardo
                <h2>Full Stack Developer</h2>
            </h3>
        </div>
    );
}