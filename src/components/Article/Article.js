import React, { Component } from 'react'
import styles from './article.css'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

class Article extends Component {
  render() {
    return (
      <article className={cx('wrapper')}>
        <h2 className={cx('title')}>
          Iranian boats attempted to seize a British tanker in the Strait of
          Hormuz
        </h2>
        <div className={cx('content')}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
          nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
          felis nec eratLorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
          pulvinar lorem felis nec eratLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui
          mattis dui, non pulvinar lorem felis nec eratLorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo
          sagittis, sapien dui mattis dui, non pulvinar lorem felis nec
          eratLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
          pulvinar lorem felis nec eratLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui
          mattis dui, non pulvinar lorem felis nec eratLorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo
          sagittis, sapien dui mattis dui, non pulvinar lorem felis nec
          eratLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
          pulvinar lorem felis nec eratLorem ipsum dolor sit amet, consectetinar
          lorem felis nec eratLorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui,
          non pulvinar lorem felis nec eratLorem ipsum dolor sit amet,
          consectetinar lorem felis nec eratLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis,
          sapien dui mattis dui, non pulvinar lorem felis nec eratLorem ipsum
          dolor sit amet, consectetinar lorem felis nec eratLorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo
          sagittis, sapien dui mattis dui, non pulvinar lorem felis nec
          eratLorem ipsum dolor sit amet, consectetinar lorem felis nec
          eratLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
          pulvinar lorem felis nec eratLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui
          mattis dui, non pulvinar lorem felis nec eratLorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo
          sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
        </div>
      </article>
    )
  }
}

export default Article
