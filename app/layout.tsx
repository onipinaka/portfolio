import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const antonFont = Anton({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});

export const metadata: Metadata = {
    title: 'Vivek Sharma | Pinak | onipinak | Full Stack Developer & Software Intern',
    description:
        'I’m Vivek Sharma (aka Pinak / onipinak) — a full-stack developer skilled in Next.js, React, and MERN stack. Passionate about creating performant web apps and exploring cutting-edge technologies in software development.',
    keywords: [
        'Vivek Sharma',
        'Pinak',
        'onipinak',
        'onipinaka',
        'Full Stack Developer',
        'Web Developer',
        'Software Development Intern',
        'Next.js Developer',
        'React Developer',
        'MERN Stack Developer',
        'Portfolio',
        'AIT Pune',
    ],
    authors: [{ name: 'Vivek Sharma', url: 'https://www.viveksharma.tech/' }],
    openGraph: {
        title: 'Vivek Sharma | Full Stack Developer & Software Intern',
        description:
            'Portfolio of Vivek Sharma (Pinak / onipinak) — showcasing projects, design, and web development expertise with Next.js, React, and the MERN stack.',
        url: 'https://www.viveksharma.tech',
        siteName: 'Vivek Sharma Portfolio',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Vivek Sharma Portfolio | Full Stack Developer',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Vivek Sharma | Full Stack Developer & Software Intern',
        description:
            'Vivek Sharma (aka Pinak / onipinak) — building fast, interactive web apps using Next.js, React, and Node.js.',
        images: ['/og-image.png'],
        creator: '@onipinak',
    },
    metadataBase: new URL('https://www.viveksharma.tech/'),
    alternates: {
        canonical: 'https://www.viveksharma.tech/',
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <GoogleAnalytics gaId="G-MHLY1LNGY5" />
            <Script
                id="structured-data"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: 'Vivek Sharma',
                        alternateName: ['Pinak', 'onipinak', 'onipinaka'],
                        jobTitle: 'Full-Stack Developer',
                        url: 'https://www.viveksharma.tech',
                        sameAs: [
                            'https://www.linkedin.com/in/onipinak',
                            'https://x.com/onipinak',
                            'https://github.com/onipinak',
                        ],
                        description:
                            'Vivek Sharma is a software development intern and full-stack web developer skilled in React, Next.js, and the MERN stack.',
                        worksFor: {
                            '@type': 'Organization',
                            name: 'Army Institute of Technology, Pune',
                            url: 'https://www.aitpune.edu.in/',
                        },
                        alumniOf: {
                            '@type': 'CollegeOrUniversity',
                            name: 'Army Institute of Technology, Pune',
                        },
                        image: 'https://www.viveksharma.tech/og-image.png',
                    }),
                }}
            />

            <Script id="hotjar" strategy="afterInteractive">
                {`(function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:6380611,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
            </Script>

            <body
                className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
            >
                <ReactLenis root options={{ lerp: 0.1, duration: 1.4 }}>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                    <CustomCursor />
                    <Preloader />
                    <ScrollProgressIndicator />
                    <StickyEmail />
                </ReactLenis>
            </body>
        </html>
    );
}
