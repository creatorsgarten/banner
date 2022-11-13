import type { Hack } from './Hack'

export interface BannerData {
  message: string
  data: {
    hacks: Hack[]
  }
}
