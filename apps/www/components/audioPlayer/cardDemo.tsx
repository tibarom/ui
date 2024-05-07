import { BellIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import { Switch } from "@/registry/new-york/ui/switch"

type CardProps = React.ComponentProps<typeof Card>

export function CardDemo({ songTitle, songArtist, className, ...props }: any) {
    return (
      <div className="rounded-xl bg-card text-card-foreground shadow w-[380px]">
          <div className="flex items-center space-x-4 rounded-md p-4">
            <BellIcon />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                {songTitle || "Default Title"}
              </p>
              <p className="text-sm text-muted-foreground">
                {songArtist || "Default Artist"}
              </p>
            </div>
          </div>
      </div>
    )
  }
  