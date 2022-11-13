import type { BannerData } from '../@types/BannerData'

export const getBannerData = async (): Promise<BannerData> =>
  fetch('https://creatorsgarten.org/api/banner').then(o => o.json())
