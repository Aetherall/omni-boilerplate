import express from 'express'

import { html } from './html'

const app = express()

app.get('/', (req, res) => {
  res.send(html)
})

export default (clientStats) => app