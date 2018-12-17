import React from 'react'
import Classnames from 'classnames'
export function SideBar({toggle, active, search}) {
  const classnames = Classnames('filter', {
    'filter-is-visible': active,
  })
  return (
    <div>
      {/*If the sidebar is open you need to add the css class filter-is-visible to the div below*/}
      <div className={classnames}>
        <form onSubmit={e => e.preventDefault()}>
          <div className="filter-block">
            <h4>Search</h4>
            <div className="filter-content">
              <input
                type="search"
                placeholder="title"
                onChange={e => search(e.target.value)}
              />
            </div>
          </div>
        </form>
        <a className="hand-cursor close-f" onClick={toggle}>
          Close
        </a>
      </div>

      <a className="hand-cursor filter-trigger" onClick={toggle}>
        Filters
      </a>
    </div>
  )
}
