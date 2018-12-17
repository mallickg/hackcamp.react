import React from 'react'
import {UIContextConsumer} from '../App'

function Counter({value}) {
  return (
    <ul className="misc">
      <li className="counter">
        <a>{value}</a>
      </li>
    </ul>
  )
}

function Filter({filter}) {
  return (
    <UIContextConsumer>
      {context => (
        <li onClick={() => context.selectTab(filter.category)}>
          <a className={filter.selected ? 'selected' : ''}>{filter.category}</a>
        </li>
      )}
    </UIContextConsumer>
  )
}

export function NavBar({filters, counter}) {
  return (
    <React.Fragment>
      <div className="tab-filter-wrapper">
        <div className="tab-filter">
          <div className="filters">
            <ul className="filters-list">
              {filters.map(filter => (
                <Filter key={filter.category} filter={filter} />
              ))}
            </ul>
            <Counter value={counter} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
