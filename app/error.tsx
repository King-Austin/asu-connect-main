"use client";

import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 flex items-center justify-center">
      <div className="section-container">
        <Card className="max-w-2xl mx-auto shadow-card">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-destructive mb-4">Error</h1>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Something went wrong!
              </h2>
              <p className="text-muted-foreground">
                We apologize for the inconvenience. Please try again.
              </p>
            </div>

            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Try Again
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
