import fs from 'fs'
import path from 'path'

interface OriginalEvent {
  name: string
  slug: string
}

const Page = async () => {
  const { latest, upcoming } = await import('../../../creatorsgarten.org/src/data')

  const processedEvents = [
    ...latest,
    ...upcoming,
  ].reverse().map((event: OriginalEvent) => {
    const expectedImagePath = path.join(process.cwd(), '../creatorsgarten.org/static/images/hacks/original', `${event.slug}.png`)

    if (!fs.existsSync(expectedImagePath))
      return null
    
    const imageContent = fs.readFileSync(expectedImagePath).toString('base64')

    return {
      id: event.slug,
      name: event.name,
      image: `data:image/jpeg;base64,${imageContent}`
    }
  }).filter(o => o !== null)

  const featuredEvent = processedEvents[0]

  return (
    <main className="w-[2048px] h-[1152px] flex justify-center items-center mesh-3">
      <div className="w-[1235px] h-[338px] p-6 flex justify-evenly items-center">
        <div className="px-12 py-8 backdrop-blur-md bg-white/[.25] rounded-3xl">
          <img src="/creatorsgarten.svg" className="w-96" />
        </div>
        <div className="w-[520px] h-full relative">
          {/* <img src={featuredEvent.image} className="w-[300px] h-[300px] rounded-2xl absolute z-50 top-0" /> */}
          <img src={featuredEvent.image} className="w-[300px] h-[300px] rounded-2xl absolute z-40 top-0 left-48 rotate-0" />
          <img src={processedEvents[1].image} className="w-[300px] h-[300px] rounded-2xl absolute z-30 -top-3 left-32 scale-90 rotate-[-18deg]" />
          <img src={processedEvents[2].image} className="w-[300px] h-[300px] rounded-2xl absolute z-20 top-2 left-16 scale-[.80] rotate-[-30deg]" />
          <img src={processedEvents[3].image} className="w-[300px] h-[300px] rounded-2xl absolute z-10 top-8 left-0 scale-75 rotate-[-45deg]" />
        </div>
      </div>
    </main>
  )
}

export default Page
