
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {/* <header>
          <nav>
            <ul className="flex gap-4 p-4 bg-white shadow">
              <li><a href="/">BOARDING SCHOOL</a></li>
              <li><a href="#">Summer School Program</a></li>
              <li><a href="#">BSC's Support</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </header> */}
        {children}
      </body>
    </html>
  );
}
