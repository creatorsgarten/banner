import type { PageServerLoad } from './$types'

interface BannerData {
  message: string
  data: {
    hacks: {
      id: string
      name: string
      banner: {
        original: string
        compressed: string
      }
    }[]
  }
}

export const load: PageServerLoad = async event => {
  // get event details
  const bannerData: BannerData = await fetch(
    'https://creatorsgarten.org/api/banner'
  ).then(o => o.json())

  return bannerData.data
}
