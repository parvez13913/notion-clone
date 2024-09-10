"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import Link from "next/link";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const { isAuthenticated, isLoading } = useConvexAuth();

  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {!!isLoading && <Spinner />}

        {isSignedIn && !isLoading ? (
          <>
            <Button variant="ghost" size="sm">
              <Link href="/documents">Enter potion</Link>
            </Button>
            <UserButton />
          </>
        ) : (
          !isAuthenticated &&
          !isLoading && (
            <>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </SignInButton>

              <SignInButton mode="modal">
                <Button size="sm">Get potion free</Button>
              </SignInButton>
            </>
          )
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
