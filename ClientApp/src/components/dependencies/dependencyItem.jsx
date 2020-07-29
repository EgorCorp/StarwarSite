import React, {useState, useEffect} from 'react'
import './dependencies.css'
import DependencyCard from './dependencyCard'
import Axios from 'axios'
import {getVisualUrl, toHttps} from '../../utils/utils'

const DependencyItem = (props) => {
  const {url, type} = props
  const [name, setName] = useState(null)
  const [imgUrl, setImgUrl] = useState(null)
  useEffect(() => {
    Axios(toHttps(url)).then((data) => {
      const tempImgUrl = data.data.url
      setImgUrl(getVisualUrl(type, tempImgUrl))
      setName(data.data.name)
    })
  }, [])

  return (
    <div className="dependencyItem">
      {name && imgUrl && <DependencyCard imgUrl={imgUrl} name={name} />}
    </div>
  )
}
export default DependencyItem
