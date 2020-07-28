import React from 'react'
import numeral from 'numeral'

export function FormatDateForView(date) {
  if (date) {
    const dateToFormat = new Date(date)
    const year = dateToFormat.getFullYear()
    let month = ''
    let m = dateToFormat.getMonth() + 1
    if (m < 10) {
      month = '0' + m
    } else {
      month = m
    }
    const d = dateToFormat.getDate()
    let day = ''
    if (d < 10) {
      day = '0' + d
    } else {
      day = d
    }

    let r = day + '.' + month + '.' + year

    if (r === '01.01.1') {
      return undefined
    }
    return r
  }
  return date
}

const extractId = (url) => {
  const idRegExp = /\/([0-9]*)\/$/
  return url.match(idRegExp)[1]
}
export {extractId}

const _imageBase = 'https://starwars-visualguide.com/assets/img'

export {_imageBase}

const formatValue = (v, isNum) => (
  <>
    <span className="starValue">{isNum ? numeral(v).format('0,0') : v}</span>
    <br />
  </>
)

export {formatValue}

const toHttps = (url) => {
  return url.replace('http', 'https')
}
export {toHttps}
