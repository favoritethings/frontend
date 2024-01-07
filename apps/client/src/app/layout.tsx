import localFont from 'next/font/local';
import '@/app/globals.css';
import type { Metadata } from 'next';

const spoqa = localFont({
  src: [
    {
      path: '../../public/fonts/SpoqaHanSansNeo-Thin.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SpoqaHanSansNeo-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SpoqaHanSansNeo-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SpoqaHanSansNeo-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SpoqaHanSansNeo-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-spoqa',
});

export const metadata: Metadata = {
  title: 'mmm',
  description: 'welcome to mmm client',
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spoqa.variable} font-spoqa`}>
      <body>
        {props.children}
        {props.modal}
        <div id="portal-root" />
      </body>
    </html>
  );
}
