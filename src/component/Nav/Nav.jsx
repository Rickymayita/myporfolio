import React from 'react'
import styles from '../Nav/Nav.modules.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { TiGroupOutline } from 'react-icons/ti'
import { BiMessageRoundedDots } from 'react-icons/bi'
import { BsArrowDownCircle } from 'react-icons/bs'


export default function Navbar() {
    return (
        <div className={styles.navigation}>
            <a href="#home">
                <AiOutlineHome classname={styles.icon} />
            </a>
            <a href="#about">
                <AiOutlineUser classname={styles.icon} />
            </a>
            <a href="#members">
                <TiGroupOutline classname={styles.icon} />
            </a>
            <a href="#contact">
                <BiMessageRoundedDots classname={styles.icon} />
            </a>
            <a href="#footer">
                <BsArrowDownCircle classname={styles.icon} />
            </a>
        </div>
    )
}

let Icons = document.querySelectorAll('styles.navigation styles.icon');
Icons.forEach(icon =>{
    icon.addEventListener('click', ()=>{
        changeactive()
        icon.classList.add('active-nav')
    })
})

function changeactive(){
    Icons.forEach(icon=>{
        icon.classList.remove('active-nav')
    })
}