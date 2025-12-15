export const metadata = {
  title: 'Vulnerable App',
  description: 'Test target for React2Shell Scanner',
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
