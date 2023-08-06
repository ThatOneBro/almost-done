import "~/styles/globals.css";

export const metadata = {
  title: "AlmostDone",
  description: "Take your tasks from almost done to done",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
