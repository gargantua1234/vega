import { useDispatch } from 'react-redux';
import { movieAction } from '../duck';
import { useRef } from 'react';

const CustomInput = () => {
    const inputElement = useRef(null);
    const dispatch = useDispatch();

    const addMovie = () => {
        dispatch(movieAction.add(inputElement.current.value));
        inputElement.current.value = '';
    };

    return (
        <>
            <input
                type="text"
                ref={inputElement}
                value="Incredible Hulk"
            ></input>
            <button type="submit" onClick={addMovie}>
                Zmień
            </button>
        </>
    );
};

export default CustomInput;
