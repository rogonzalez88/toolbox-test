var app = require('../src/index'),
  chai = require('chai'),
  request = require('supertest');

var expect = chai.expect;

describe('API Tests', function() {
  var body = {
    message: 'integration test'
  };
  describe('# Get sended message', function() {
    it('should get sended message', function(done) {
        request(app).post('/api/text').send(body).end(function(err, res) {
            expect(res.statusCode).to.equal(200);
            expect(res.body.message).to.equal('integration test');
            body = res.body;
            done();
        });
    });
  });
});