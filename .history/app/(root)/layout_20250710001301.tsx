export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang="en">
      <body
        className=''
      >
        {children}
      </body>
    </main>
  );
}