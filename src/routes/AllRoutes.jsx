import {Routes, Route} from 'react-router-dom'

import Movies from '../pages/Movies'
import Movie from '../pages/Movie'
import Search from '../pages/Search'
import PageNotFound from '../pages/PageNotFound'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Movies />} />
            <Route path='/movie/:id' element={<Movie />} />
            <Route path='/search' element={<Search />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}
