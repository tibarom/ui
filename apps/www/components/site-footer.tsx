"use client"

import { siteConfig } from "@/config/site"
import SettingPanel from "@/components/settingPanel"
// import MyAudioPlayer from "@/components/etc/myAudioPlayer/myAudioPlayer"
import AudioPlayer from "@/components/audioPlayer/audioPlayer"
import { PopoverButton } from "@/components/PopoverButton"

export function SiteFooter() {
  return (
    // <footer className="py-6 md:px-8 md:py-0">
    // <div className="invert">
    <footer className="sticky bottom-0 w-full mt-[24px]">
      <div className="absolute right-12 bottom-24">
          <PopoverButton/>
      </div>
          <AudioPlayer/>
    </footer>
    // </div>
  )
}
