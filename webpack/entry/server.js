import { createServer } from 'http'
import fs from 'fs';
import path from 'path';

import getApp from '../../server'

// This permits to get the app aware of the new clientStats
const getLastApp = () => {
  // Require the new clientStats
  const clientStats = require('../dist/client/clientstats.json')
  // Apply the new clientStats to the app
  return getApp(clientStats)
}


let app = getLastApp()

const server = createServer(app)

server.listen(3000)


if (module.hot) {
  // This fires when the getApp reference get Updated
  module.hot.accept('../../server', () => {
    // Detach the oudated app from the main server
    server.removeListener('request', app)
    // update the app with the new getApp reference
    app = getLastApp()
    // Bind the updatedApp to the main server
    server.on('request', app)
  })
}

