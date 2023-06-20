/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
const { processFile } = require('../services/helperService')
const assert = require('assert')
const sinon = require('sinon')
const axiosInstance = require('../utils/axiosInstance')

describe('fileProcessor', function () {
  describe('#processFile()', function () {
    let axiosGet

    before(function () {
      axiosGet = sinon.stub(axiosInstance, 'get')
    })

    after(function () {
      axiosGet.restore()
    })

    it('should return an object if file contains correctly formatted lines', async function () {
      axiosGet.resolves({
        data: 'col1,text,2,FF00FF\ncol1,text,3,00FF00'
      })

      const result = await processFile('fakefile.csv')

      assert.deepEqual(result, {
        file: 'fakefile.csv',
        lines: [
          {
            text: 'text',
            number: 2,
            hex: 'FF00FF'
          },
          {
            text: 'text',
            number: 3,
            hex: '00FF00'
          }
        ]
      })
    })

    it('should return undefined if there is an error downloading the file', async function () {
      axiosGet.rejects(new Error('Error downloading file'))

      const result = await processFile('fakefile.csv')

      assert.strictEqual(result, undefined)
    })
  })
})
