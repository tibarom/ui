import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Announcement } from "@/components/announcement"
import { ExamplesNav } from "@/components/examples-nav"
import { Icons } from "@/components/icons"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { buttonVariants } from "@/registry/new-york/ui/button"
import InboxPage from "@/app/(app)/inbox/page"

export default function IndexPage() {
  return (
    <div className="container relative max-w-screen-2xl h-full">
      <section className="hidden md:block mx-auto mb-md mt-md w-full max-w-2xl text-lg tablet:text-xl">
        <div className="w-full overflow-hidden">
          <InboxPage />
        </div>
      </section>
    </div>
  )
}
