const expect = require('chai').expect;

const {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		const from = 'A';
		const text = 'B';
		const res = generateMessage(from, text);
		expect(res).to.include({from, text});
		expect(res.createdAt).to.be.a('number');
	});
});
