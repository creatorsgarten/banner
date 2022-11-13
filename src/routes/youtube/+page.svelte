<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
  $: ({ hacks } = data)
</script>

<main class="w-[2048px] h-[1152px] flex justify-center items-center mesh-3">
  <div class="w-[1235px] h-[338px] p-6 flex justify-evenly items-center">
    <div class="px-12 py-8 backdrop-blur-md bg-white/[.25] rounded-3xl">
      <img src="/creatorsgarten.svg" alt="creatorsgarten" class="w-96" />
    </div>
    <div class="w-[520px] h-full relative">
      <img
        src={hacks[0].banner.compressed}
        alt={hacks[0].name}
        class="w-[300px] h-[300px] rounded-2xl absolute z-40 top-0 left-48 rotate-0"
      />
      <img
        src={hacks[1].banner.compressed}
        alt={hacks[1].name}
        class="w-[300px] h-[300px] rounded-2xl absolute z-30 -top-3 left-32 scale-90 rotate-[-18deg]"
      />
      <img
        src={hacks[2].banner.compressed}
        alt={hacks[2].name}
        class="w-[300px] h-[300px] rounded-2xl absolute z-20 top-2 left-16 scale-[.80] rotate-[-30deg]"
      />
      <img
        src={hacks[3].banner.compressed}
        alt={hacks[3].name}
        class="w-[300px] h-[300px] rounded-2xl absolute z-10 top-8 left-0 scale-75 rotate-[-45deg]"
      />
      <img
        src={hacks[4].banner.compressed}
        alt={hacks[4].name}
        class="w-[300px] h-[300px] rounded-2xl absolute z-0 top-16 -left-8 scale-[.65] rotate-[-55deg]"
      />
    </div>
  </div>
</main>

<style>
  .mesh-3 {
    background: fixed;
    background-color: rgb(252, 165, 165);
    background-image: radial-gradient(
        at 79% 79%,
        rgb(236, 254, 255) 0,
        transparent 49%
      ),
      radial-gradient(at 22% 84%, rgb(254, 249, 195) 0, transparent 47%),
      radial-gradient(at 55% 48%, rgb(161, 74, 89) 0, transparent 27%),
      radial-gradient(at 81% 52%, rgb(7, 89, 133) 0, transparent 32%),
      radial-gradient(at 19% 2%, rgb(147, 197, 253) 0, transparent 25%);
  }
</style>
