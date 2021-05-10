import React from 'react';
import './App.css';
import CustomInput from './movies/components/CustomInput';

import MoviesContainer from './movies/components/MoviesContainer';

const App = () => (
    <div className="">
        <MoviesContainer />
        <CustomInput />
    </div>
);

export default App;
