export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang="en">
      <body
        className='font-work-sans'
      >
        {children}
      </body>
    </main>
  );
}