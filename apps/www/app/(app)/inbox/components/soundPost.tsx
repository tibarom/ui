"use client"

import * as React from "react"
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/registry/new-york/ui/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/new-york/ui/resizable"
import { Separator } from "@/registry/new-york/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york/ui/tabs"
import { TooltipProvider } from "@/registry/new-york/ui/tooltip"
import { AccountSwitcher } from "@/app/(app)/inbox/components/account-switcher"
import { SoundPostList } from "@/app/(app)/inbox/components/soundPost-list"
import { Nav } from "@/app/(app)/inbox/components/nav"
import { type SoundPost } from "@/app/(app)/inbox/data"
import { useSoundPost } from "@/app/(app)/inbox/use-soundpost"

interface SoundPostProps {
  // accounts: {
  //   label: string
  //   email: string
  //   icon: React.ReactNode
  // }[]
  soundPosts: SoundPost[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

export function SoundPost({
  soundPosts,
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize,
}: SoundPostProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
  const [mail] = useSoundPost()

  return (
    <TooltipProvider delayDuration={0}>
          <Tabs defaultValue="all">
            <TabsContent value="all" className="m-0">
              <SoundPostList items={soundPosts} />
            </TabsContent>
          </Tabs>
    </TooltipProvider>
  )
}
