import React from 'react';
import allCountryScores from './public';

function HighScoreTable({ country }) {
    const scores = allCountryScores.find((item) => item.name === country).scores;