/**
 * v0 by Vercel.
 * @see https://v0.dev/t/P7SM8scwqJy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, Avatar } from "@/registry/new-york/ui/avatar"
import { Badge } from "@/registry/new-york/ui/badge"
import { Button } from "@/registry/new-york/ui//button"

export default function SoundCard() {
  return (
    <div className="bg-white p-4">
      <div className="flex items-center space-x-3">
        <Avatar>
          <AvatarImage alt="User avatar" src="/placeholder.svg?height=40&width=40" />
        </Avatar>
        <div>
          <p className="text-sm font-semibold">pinae</p>
          <p className="text-xs text-gray-500">reposted a track 10 days ago</p>
        </div>
      </div>
      <div className="mt-4 flex items-center space-x-4">
        <img
          alt="Vinyl record"
          className="h-24 w-24"
          height="120"
          src="/placeholder.svg"
          style={{
            aspectRatio: "120/120",
            objectFit: "cover",
          }}
          width="120"
        />
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Eckk - Space Cowboy [Eckk Edit]</h3>
            <Badge variant="secondary">#House</Badge>
          </div>
          <div className="mt-2 h-2 bg-gray-200">
            <div
              className="h-2 bg-orange-500"
              style={{
                width: "50%",
              }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button className="p-0" variant="ghost">
                <HeartIcon className="h-6 w-6 text-red-500" />
              </Button>
              <span className="text-sm">9,108</span>
              <Button className="p-0" variant="ghost">
                <MessageCircleIcon className="h-6 w-6 text-gray-500" />
              </Button>
              <span className="text-sm">1,231</span>
              <Button className="p-0" variant="ghost">
                <ShareIcon className="h-6 w-6 text-gray-500" />
              </Button>
              <Button className="p-0" variant="ghost">
                <LinkIcon className="h-6 w-6 text-gray-500" />
              </Button>
              <span className="text-sm">Copy Link</span>
              <Button className="p-0" variant="ghost">
                <DotIcon className="h-6 w-6 text-gray-500" />
              </Button>
              <span className="text-sm">More</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button className="p-0" variant="ghost">
                <DownloadIcon className="h-6 w-6 text-gray-500" />
              </Button>
              <span className="text-sm">Free Download</span>
              <span className="text-sm">330K</span>
              <Button className="p-0" variant="ghost">
                <SpeakerIcon className="h-6 w-6 text-gray-500" />
              </Button>
              <span className="text-sm">1,549</span>
            </div>
          </div>
        </div>
        <span className="text-sm text-gray-500">6:52</span>
      </div>
    </div>
  )
}

function DotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  )
}


function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function LinkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}


function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function SpeakerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M12 6h.01" />
      <circle cx="12" cy="14" r="4" />
      <path d="M12 14h.01" />
    </svg>
  )
}