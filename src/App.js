import React, {Component, createContext} from 'react'
import logo from './images/hackflix_logo.svg'
import filters from './mocks/filters'
import './css/Header.css'
import movies from './mocks/movies'
import {Header} from './components/Header'
import {NavBar} from './components/NavBar'
import {Movies} from './components/Movies'
import {SideBar} from './components/SideBar'
import {filterMoviesByCat, getGenreId} from './libs/utils'

const UIContext = createContext()
export const UIContextProvider = UIContext.Provider
export const UIContextConsumer = UIContext.Consumer

export class App extends Component {
  state = {
    movies: movies,
    filters: filters,
    active: false,
    selectedCategory: 'All',
  }

  selectMovies = category => filterMoviesByCat(movies, getGenreId(category))

  selectFilters = category =>
    this.state.filters.map(filter => ({
      ...filter,
      selected: category === filter.category,
    }))

  selectTab = category => {
    // We need to update the `selected` property of the clicked category to be true.
    // We should also filter the movies which are passed to the movie list
    const newFilters = this.selectFilters(category)
    const filteredMovies =
      category === 'All' ? movies : this.selectMovies(category)
    this.setState({
      filters: newFilters,
      movies: filteredMovies,
      selectedCategory: category,
    })
  }

  toggle = () => {
    // We need to toggle the state of the sidebar here to make sure it is in an open state
    this.setState({active: !this.state.active})
  }

  search = value => {
    const filteredMovies = this.selectMovies(
      this.state.selectedCategory
    ).filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()))

    this.setState({movies: filteredMovies})
  }

  render() {
    const {movies, filters, active} = this.state
    return (
      <UIContextProvider value={{selectTab: this.selectTab}}>
        <React.Fragment>
          <Header logo={logo} />
          <main className="main-content">
            <NavBar filters={filters} counter={movies.length} />
            <Movies movies={movies} active={active} />
            <SideBar
              toggle={this.toggle}
              active={active}
              search={this.search}
            />
          </main>
        </React.Fragment>
      </UIContextProvider>
    )
  }
}
