import Image from 'next/image'
import { useReducer } from 'react'

import styles from '@styles/Exemplo.module.css'

const images = Array.from(Array(16), (_v, i) => i).map(
  (i) => `https://placekitten.com/200/200?image=${i + 1}`
)
const swapArrayElements = (array, origin, destination) => {
  const newArray = Array.from(array)
  newArray[origin] = newArray.splice(destination, 1, newArray[origin])[0]
  return newArray
}

const initialValues = {
  images,
  over: -1,
  dragged: -1
}

const reducer = (s, a) => {
  if (typeof a === 'function') return a(s)
  return { ...s, ...a }
}

const Exemplo = () => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  const handleDragEnter = (e, index) => {
    e.preventDefault()
    dispatch({ over: index })
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    dispatch({ over: -1 })
  }

  const handleDragStart = (index) => dispatch({ dragged: index })

  const handleDragEnd = () => dispatch({ over: -1, dragged: -1 })

  const handleDragOver = (e) => e.preventDefault()

  const handleOnDrop = (e, index) => {
    e.preventDefault()
    dispatch((s) => ({ images: swapArrayElements(s.images, s.dragged, index) }))
  }

  return (
    <div className={styles.container}>
      {state.images.map((url, index) => (
        <DraggableImage
          onDragStart={() => handleDragStart(index)}
          onDragEnter={(e) => handleDragEnter(e, index)}
          onDragLeave={(e) => handleDragLeave(e)}
          onDragEnd={() => handleDragEnd(index)}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleOnDrop(e, index)}
          key={url}
          url={url}
          hovered={state.over === index}
        />
      ))}
    </div>
  )
}

export default Exemplo

const DraggableImage = ({ url, hovered, ...otherProps }) => {
  return (
    <div
      {...otherProps}
      className={`${styles.image} ${hovered ? styles.hovered : ''}`}
      draggable
    >
      <Image layout="fill" src={url} />
    </div>
  )
}
