import { useSelector, useDispatch } from 'react-redux';
import { movieAction } from '../duck';

const MoviesContainer = () => {
    const movies = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    return (
        <>
            <ul>
                {movies.items.map((movie, index) => (
                    <li key={index}>{movie}</li>
                ))}
            </ul>
            <button
                onClick={() =>
                    dispatch(movieAction.add('Shawshank Redemption'))
                }
            >
                Dodaj
            </button>
        </>
    );
};

export default MoviesContainer;
