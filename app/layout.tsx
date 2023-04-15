import "./globals.css";

export const metadata = {
  title: "Password Generator",
  description:
    "Generate secure passwords with ease: Our password generator creates strong, randomized passwords to keep your accounts safe. Try it now!",
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
