import React from 'react';
import allCountryScores from './public';

function HighScoreTable({ country }) {
    const scores = allCountryScores.find((item) => item.name === country).scores;

    return (
        <div>
          <h2>{country}</h2>
          <table>
            <thead>
              <tr>
                <th>Player</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) => (
                <tr key={index}>
                  <td>{score.n}</td>
                  <td>{score.s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

function PlayerScore({ name, score }) {
    return (
      <tr>
        <td>{name}</td>
        <td>{score}</td>
      </tr>
    );
  }

  function App() {
    const countries = allCountryScores.map((item) => item.name);