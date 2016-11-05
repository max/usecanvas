'use strict';

const got = require('got');

function usecanvas(CANVAS_URL) {
  return new Promise((resolve, reject) => {
    got(CANVAS_URL, { json: true })
      .then(response => resolve(response.body))
      .catch(error => reject(error));
  });
}

module.exports = usecanvas;
