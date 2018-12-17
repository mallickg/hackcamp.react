import React from 'react'
import {Movie} from './Movie'
import Classnames from 'classnames'

export function Movies({movies, active}) {
  {
    /*If the sidebar is open you need to add the css class filter-is-visible to the div below*/
  }
  //   let classnames = 'gallery'

  //   classnames += active ? ' filter-is-visible' : ''

  const classnames = Classnames('gallery', {
    'filter-is-visible': active,
  })

  return (
    <section className={classnames}>
      {movies.map(movie => (
        <Movie
          key={movie.id}
          data={movie}
          selectMovie={() => {
            alert('Movie clicked')
          }}
        />
      ))}
    </section>
  )
}
