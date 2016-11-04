'use strict';

const got = require('got');

function usecanvas(CANVAS_URL) {
  const response = await got(CANVAS_URL, { json: true });
  const canvas = response.data.attributes.blocks;
  return canvas;
}

module.exports = usecanvas;
