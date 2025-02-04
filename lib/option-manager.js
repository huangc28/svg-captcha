'use strict';
const path = require('path');
const opentype = require('opentype.js');
const charPreset = require('./char-preset');
const { dirname } = require('path');

console.log('debug from om 1', dirname(path.resolve()));
console.log('debug from om 2', __dirname);
console.log('debug from om 3', __filename);

const fontPath = path.join(
	dirname(path.resolve()),
	'../fonts/Comismsh.ttf'
);
const font = opentype.loadSync(fontPath);
const ascender = font.ascender;
const descender = font.descender;

const options = {
	width: 150,
	height: 50,
	noise: 1,
	color: false,
	background: '',
	size: 4,
	ignoreChars: '',
	fontSize: 56,
	charPreset, font, ascender, descender
};

const loadFont = filepath => {
	const font = opentype.loadSync(filepath);
	options.font = font;
	options.ascender = font.ascender;
	options.descender = font.descender;
};

module.exports = {
	options, loadFont
};
