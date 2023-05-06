import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-coal text-base font-brandLight text-biege">
        {children}
      </body>
    </html>
  );
}
