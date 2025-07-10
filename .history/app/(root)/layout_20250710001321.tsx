export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang="en">
    
        className='font-work-sans'
      >
        {children}
    </main>
  );
}