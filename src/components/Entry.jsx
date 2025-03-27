import React from 'react'

const Entry = ({ entry }) => {
  console.log(entry)
  return (
    <>
      <div className="travel-entry">
        <img src={entry.img.src} alt={entry.img.alt} />

        <section>
          <img src="/src/assets/marker.svg" alt="marker-icon" />
          <span>{entry.country = entry.country.toUpperCase()}</span>
          <a href={entry.googleMapsLink}>View on Google Maps</a>
          <h1>{entry.title}</h1>
          <p className='date'>{entry.dates}</p>
          <p className='info'>{entry.text}</p>
        </section>
      </div>
    </>
  )
}

export default Entry