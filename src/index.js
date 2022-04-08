import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component:{text}</div>
}

export const Button = (props) => {
  return (
    <button
      {...props}
      className={`${styles.btn} ${
        props.type == 'primary' 
        ? styles.primary 
        : props.type == 'default'
        ? styles.default 
        : props.type == 'dashed'
        ? styles.dashed 
        : props.type == 'text'
        ? styles.text
        : props.type == 'link'
        ? styles.link
        : console.log('Type için böyle bir değer yok.')
      }`}
    >
      {props.text}
    </button>
  )
}
