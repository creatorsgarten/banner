import { getBannerData } from '../../core/services/getBannerData'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  // get event details
  const bannerData = await getBannerData()

  return bannerData.data
}
