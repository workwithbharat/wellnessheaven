import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Loss Fat with Dr's rare method",
  description: "96% of patient's dropped 29.4 lbs of Fat with Dr's rare method",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
      <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','G-G0C0CYBJDE');`}} />
    <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/gtag/js?id=G-G0C0CYBJDE" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}} />
    <script dangerouslySetInnerHTML={{__html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '939966840631518');
fbq('track', 'PageView');`}} />
<noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.facebook.com/tr?id=939966840631518&ev=PageView&noscript=1" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}} />

      </body>
    </html>
  );
}
