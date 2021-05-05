import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Slider = () => {
  const [buttonVisible, setButtonVisible] = useState(false)

  const handleVisibleClick = (latest) => {
    setButtonVisible(latest.x !== 0)
  }

  const transition = {
    min: 0,
    max: -300,
    bounceDamping: 100,
    bounceStiffness: 1000,
  }

  return (
    <div>
      <div className="flex flex-row">
        <motion.div
          drag="x"
          dragTransition={transition}
          onUpdate={handleVisibleClick}
          className="w-3/4 h-16 font-bold p-6"
        >
          Slide This
        </motion.div>
        {buttonVisible && (
          <button
            className="rounded w-30 h-30 p-6 right-0"
            onClick={handleVisibleClick}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  )
}

export default Slider
