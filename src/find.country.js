'use strict';
const countries = [
  {
    name: 'Ukraine',
    capital: 'Kyiv',
    population: '41 342 465',
    area: '603.628',
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    population: '47 450 795',
    area: '505.990',
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    population: '109 035 343',
    area: '300.000',
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    population: '31 127 674',
    area: '1.246.700',
  },
  {
    name: 'Gibraltar',
    capital: 'Gibraltar',
    population: '34 003',
    area: '6.8',
  },
];
const inputRef = document.querySelector('.search-input');
const outputErroRef = document.querySelector('.output-error');
const listRef = document.querySelector('.country-card');

const onHandleInput = evt => {
  console.log(evt.target.value);
};

const trottledInput = _.throttle(onHandleInput, 300);
inputRef.addEventListener('input', trottledInput);
