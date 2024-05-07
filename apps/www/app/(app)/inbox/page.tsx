import { cookies } from "next/headers"
import Image from "next/image"

import { SoundPost } from "@/app/(app)/inbox/components/soundPost"
import { soundposts } from "@/app/(app)/inbox/data"
import { accounts } from "@/app/(app)/inbox/data"
import Tracklist from '@/components/Tracklist';

export default function InboxPage() {
  const layout = cookies().get("react-resizable-panels:layout")
  const collapsed = cookies().get("react-resizable-panels:collapsed")

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <>
      <div className="hidden flex-col md:flex py-4 border-transparent border">
        {/* <Tracklist /> */}
        <SoundPost
          // accounts={accounts}
          soundPosts={soundposts}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  )
}
