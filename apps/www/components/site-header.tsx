import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/registry/new-york/ui/button"
import WalletLogin from "@/components/walletLogin"

import DeployButton from "@/components/auth/supabase/DeployButton";
import AuthButton from "@/components/auth/AuthButton";
import { createClient } from "@/utils/supabase/server";

export function SiteHeader() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  return (
    // <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <header className="sticky top-0 left-0 z-50 h-24 w-full bg-dither mb-12">
      <div className="container flex h-full max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu/>
          </div>
          <ModeToggle/>
          {isSupabaseConnected && <AuthButton />}
        </div>
      </div>
    </header>
  )
}
