'use strict';

const got = require('got');

function usecanvas(canvasURL) {
  return new Promise((resolve, reject) => {
    got(canvasURL, { json: true, retries: 1, timeout: 15000 })
      .then(response => resolve(response.body.data.attributes))
      .catch(error => reject(error));
  });
}

module.exports = usecanvas;
