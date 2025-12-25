import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16 flex items-center justify-center">
      <div className="section-container">
        <Card className="max-w-2xl mx-auto shadow-card">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Page Not Found
              </h2>
              <p className="text-muted-foreground text-lg">
                The page you are looking for does not exist or has been moved.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Return Home
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
