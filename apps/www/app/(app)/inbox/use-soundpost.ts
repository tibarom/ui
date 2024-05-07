import { atom, useAtom } from "jotai"

import { SoundPost, soundposts } from "@/app/(app)/inbox/data"

type Config = {
  selected: SoundPost["id"] | null
}

const configAtom = atom<Config>({
  selected: soundposts[0].id,
})

export function useSoundPost() {
  return useAtom(configAtom)
}
