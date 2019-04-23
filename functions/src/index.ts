import * as functions from 'firebase-functions';
import axios from 'axios'

export const updateReadme = functions.https.onRequest(async(request, response) => {
  const baseUrl = 'https://api.github.com/repos/soniczsonic/wMaker/contents/README.md'
  try {
    const res = await axios.get(baseUrl)
    const base64DateStr = await Buffer.from(JSON.stringify(new Date())).toString('base64')
    axios.put(`${baseUrl}?access_token=a1733aa9aa9a5ea62f2c226d5fa7ed475c5f9395`, {
      "message": "wwwww",
      "content": base64DateStr,
      "sha": res.data.sha
    })
    response.send('success to update readme')
  } catch (e) {
    response.send('error at getShaOfReadme');
  }
})
