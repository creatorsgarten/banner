import { GoogleOfflineAccess } from 'google-offline-access'
import { google } from 'googleapis'
import fs from 'fs'

const googleOfflineAccess = new GoogleOfflineAccess({
  scopes: [
    'https://www.googleapis.com/auth/youtube',
    'https://www.googleapis.com/auth/youtube.force-ssl',
  ],
})

;(async () => {
  const authClient = await googleOfflineAccess.getAuthenticatedAuthClient()
  google.options({ auth: authClient })

  const youtube = google.youtube('v3')

  console.log('fetching channel...')
  const channelResponse = await youtube.channels.list({
    part: ['brandingSettings'],
    mine: true,
  })
  const channelBrandingSettings = channelResponse.data.items[0].brandingSettings

  console.log('uploading image...')
  const insertedImage = await youtube.channelBanners.insert({
    media: {
      mimeType: 'image/png',
      body: fs.createReadStream('dist/screenshot.png'),
    },
  })
  console.log('image', insertedImage.data)
  channelBrandingSettings.image.bannerExternalUrl = insertedImage.data.url

  console.log('updating channel...')
  await youtube.channels.update({
    part: ['brandingSettings'],
    requestBody: {
      id: channelResponse.data.items[0].id,
      brandingSettings: channelBrandingSettings,
    },
  })

  console.log('done!')
})()
