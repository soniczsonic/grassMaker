import * as functions from 'firebase-functions';
import axios from 'axios'

const baseUrl = 'https://api.github.com/repos/soniczsonic/wMaker/contents/README.md'
const myAccessToken = '731e8370810ddfeb4ff97a1fd36122bf8b94cb7a'
let successMessage = 'success to update readme yay'

export const updateReadme = functions.https.onRequest(async(request, response) => {
  try {
    const res = await axios.get(baseUrl)
    const base64DateStr = await Buffer.from(JSON.stringify(new Date())).toString('base64')
    axios.put(`${baseUrl}?access_token=${myAccessToken}`, {
      "message": "gardening is fun! I love github!",
      "content": base64DateStr,
      "sha": res.data.sha
    }).catch(error => {
      successMessage = 'error at put request'
    })

    response.send(successMessage)
  } catch (e) {
    response.send('error at getShaOfReadme');
  }
})
