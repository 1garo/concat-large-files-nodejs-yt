import data from './dd/2010.json'
const payloads = data.payloads
import crypto from 'crypto'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
import { Worker, isMainThread, parentPort } from 'worker_threads';
const LEADING_ZEROES = 4
const final = []
let finishedWorkers = 0

if (isMainThread) {
  for (let payload of payloads) {
    const worker = new Worker(__filename)
    worker.once('message', (message) => {
      final.push(message)
      finishedWorkers++
    //   if (finishedWorkers === payloads.length) console.log(final)
    //   if (finishedWorkers === payloads.length) process.exit()
    })
    worker.on('error', console.error)

    console.log(`Iniciando worker de ID ${worker.threadId} e enviando o payload "${payload}"`)
    worker.postMessage(payload)
  }
} else {
  parentPort.once('message', (message) => {
    const payload = message
    // let nonce = 0
    // let generatedHash = ''
    // console.log()
    parentPort.postMessage({ payload: message})
  })
}