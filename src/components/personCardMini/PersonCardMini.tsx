import React from 'react'
import styles from './PersonCardMini.module.css'

export interface personCardMiniPropsType {
  firstName?: string;
  lastName?: string;
  img?: string;
}

const PersonCardMini = ({
  firstName = 'Станислав',
  lastName = 'Эрклиевский',
  img = 'https://thumbs.dfs.ivi.ru/storage8/contents/e/c/e4d57236fbab1a3dd3dfec4b1cde65.jpg/44x44/?q=85',
}: personCardMiniPropsType) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {
          img ?
            <img src={img} className={styles.image} />
            :
            <div className={styles.noImage}>
            </div>
        }
      </div>
      <div className={styles.firstName}>{firstName}</div>
      <div className={styles.lastName}>{lastName}</div>
    </div>
  )
}

export default PersonCardMini