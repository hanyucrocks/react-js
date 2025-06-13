import React from 'react'

function Card({username, spantext, imgsrc}) {
  return (
    <div className="max-w-xs p-6 rounded-xl shadow-md bg-black">
        <img
          src={imgsrc}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{spantext}</h2>
        </div>
        <p className="text-gray-300">
          one of the best models in a while
        </p>
      </div>
  )
}

export default Card