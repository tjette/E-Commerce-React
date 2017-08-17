process.env.NODE_ENV = 'test'

const mongoose = require('mongoose')
const Product = require('../models/Product')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const should = chai.should()

chai.use(chaiHttp)

describe('Products', () => {
  beforeEach((done) => {
    Product.remove({}, err => {
      done()
    })
  })

  describe('/GET products', () => {
    it('it should GET all products', done => {
      chai.request(server)
        .get('/api/products')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.data.should.be.a('array')
          res.body.data.length.should.be.eql(0)
          done()
      })
    })
  })
})
