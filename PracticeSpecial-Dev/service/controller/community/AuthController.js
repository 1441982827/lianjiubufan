var contentType = require('content-type')
var getRawBody = require('raw-body')
var convert = require('xml-js')

const config = require('../../config/')
const tools = require('../../utils/tools')

const auth = (req,res, next) => {
  console.log(req.query)
  let { signature, timestamp, nonce, echostr } = req.query
  let orderedQueryString = [ timestamp, nonce, config.token ].sort().join('')
  let mySignature = tools.sha1(orderedQueryString)

  res.send( mySignature === signature ? echostr : '') 
}
 

const reply = (req,res , next) => {
  let receivedMsgXML= ''
   getRawBody(req, {
    length: req.headers['content-length'],
    limit: '1mb',
    encoding: contentType.parse(req).parameters.charset
  },function(err , string ){

    receivedMsgXML = string

    let receivedMsgJS = convert.xml2js(receivedMsgXML, {
      compact: true,
      cdataKey: 'value',
      textKey: 'value'
    }).xml 
  
    let { ToUserName, FromUserName } = tools.flatObj(receivedMsgJS)
  
    res.render('reply', {
      ToUserName,
      FromUserName,
      timestamp: tools.genTimeStamp(),
      replyText: '<a href="https://xuxuxu.club/">练就不凡</a>'
    })

  })
 
 
}

module.exports = {
  auth,
  reply
}