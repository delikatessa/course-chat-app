const expect = require('chai').expect;

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		const from = 'User';
		const text = 'Hi!';
		const message = generateMessage(from, text);
		expect(message).to.include({from, text});
		expect(message.createdAt).to.be.a('number');
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location message object', () => {
		const from = 'User';
		const latitude = 48.2137987;
		const longitude = 16.388473599999998;
		const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
		const message = generateLocationMessage(from, latitude, longitude);
		expect(message).to.include({from, url});
		expect(message.createdAt).to.be.a('number');
	});
});
