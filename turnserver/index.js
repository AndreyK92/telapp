'use strict';

const WebSocket = require('ws');

const wsServer = new WebSocket.Server(require(__dirname + '/config/server.config'));

const verifyIncoming = msg => {
  //TODO: actually check
  return JSON.parse(msg);
};

const sendOffer = (callerWs, msg) => {
  // TODO: actually handle
  callerWs.send('You sent ' + JSON.stringify(msg));
};

const sendAnswer = (callerWs, msg) => {
  // TODO: actually handle
  callerWs.send('You sent ' + JSON.stringify(msg));
};

const sendNoAction = (callerWs, msg) => {
  callerWs.send('Action not known. Action: ' + msg.action);
};

const handleIncomingMsg = (ws, msg) => {
  const _msg = verifyIncoming(msg);
  if(!_msg) // TODO: handle bad message

  console.log(_msg);
  switch(_msg.action) {
    case 'send_offer':
        sendOffer(ws, _msg);
      break;
    case 'send_answer':
        sendAnswer(ws, _msg);
      break;
    default:
        sendNoAction(ws, msg);
      break;
  }
};

wsServer.on('connection', ws => {
  ws.on('message', msg => handleIncomingMsg(ws, msg));
});
