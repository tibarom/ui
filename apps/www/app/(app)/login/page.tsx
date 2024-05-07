import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"

import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "@/components/auth/submit-button";
import { Separator } from "@/registry/new-york/ui/separator"

export default function LoginPage({ searchParams }: { searchParams: { message: string };}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/api/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
  };

  return (
    <div className="container relative max-w-screen-2xl h-screen">
      <section className="hidden md:block mx-auto mb-md mt-md w-full max-w-2xl text-lg tablet:text-xl">
        <div className="w-full overflow-hidden">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                LOGIN
              </h1>
              <p className="text-sm text-muted-foreground">
                Welcome to DSC
              </p>
            </div>
            <div>
            <form className="mb-4">
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <Label className="sr-only" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    // disabled={isLoading}
                  />
                  <Label className="sr-only" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    id="password"
                    placeholder="••••••••"
                    type="password"
                    autoCorrect="off"
                    // disabled={isLoading}
                    required
                  />
                </div>
                <SubmitButton
                      formAction={signIn}
                    className="border border-foreground/20 rounded-md text-foreground"
                      pendingText="Signing Up..."
                    >
                      Sign In
                    </SubmitButton>
                    <SubmitButton
                      formAction={signUp}
                      className="border border-background/20 rounded-md bg-foreground text-background mb-2"
                      pendingText="Signing Up..."
                    >
                      Sign Up
                    </SubmitButton>
                    {searchParams?.message && (
                      <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                        {searchParams.message}
                      </p>
                    )}
              </div>
            </form>
            <div className="relative flex justify-center text-xs uppercase">

              <span className="bg-background px-2 text-muted-foreground mb-8">
                Or continue with
              </span>
            </div>
            <Button className="w-full" variant="outline" type="button">
                <Icons.gitHub className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            </div>
            <p className="text-left text-xs text-muted-foreground leading-loose">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>

          </div>

        </div>
      </section>
    </div>
  )
}
