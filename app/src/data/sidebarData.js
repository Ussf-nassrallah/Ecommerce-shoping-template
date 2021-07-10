import React from 'react';
import items from './categories';

let categoryNames = [];

function getNames() {
  let names = items.map((item) => item.name);
  categoryNames.push(names);
}
getNames();

export { categoryNames };