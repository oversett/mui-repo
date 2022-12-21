import * as React from 'react';
import Head from 'docs/src/modules/components/Head';
import NoSsr from '@mui/material/NoSsr';
import Divider from '@mui/material/Divider';
import AppHeader from 'docs/src/layouts/AppHeader';
import Hero from 'docs/src/components/home/Hero';
import References, { CORE_CUSTOMERS } from 'docs/src/components/home/References';
import ProductSuite from 'docs/src/components/home/ProductSuite';
import ValueProposition from 'docs/src/components/home/ValueProposition';
import DesignSystemComponents from 'docs/src/components/home/DesignSystemComponents';
import Testimonials from 'docs/src/components/home/Testimonials';
import Sponsors from 'docs/src/components/home/Sponsors';
import HeroEnd from 'docs/src/components/home/HeroEnd';
import AppFooter from 'docs/src/layouts/AppFooter';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import NewsletterToast from 'docs/src/components/home/NewsletterToast';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';

// OVERSETT
import ROUTES from 'docs/src/route';
import Link from 'docs/src/modules/components/Link';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

export default function Home() {
  // OVERSETT: We don't want to show the home page because it's (probably?) copyrighted. We only want to show the docs.
  const button = (to: string, label: string) =>
    <Button
      href={to}
      component={Link}
      noLinkStyle
      size="large"
      variant="outlined"
    >
      {label}
    </Button>
  return (
    <BrandingCssVarsProvider>
      <Head title="MUI" description="MUI" />
      <main id="main-content">
        <Container sx={{mt: 10}}>
          <h1>MUI</h1>
          <Stack spacing={3} direction="row">
            {button(ROUTES.materialDocs, 'Material UI')}
            {button(ROUTES.joyDocs, 'Joy UI')}
            {button(ROUTES.baseDocs, 'MUI Base')}
            {button(ROUTES.systemDocs, 'MUI System')}
          </Stack>
          <Divider sx={{mt: 10}} />
          <p><i>Machine-translated. See <Link href="https://oversett.xyz">Oversett</Link> for details and contact info.</i></p>
        </Container>
      </main>
    </BrandingCssVarsProvider>
  )

  return (
    <BrandingCssVarsProvider>
      <Head
        title="MUI: The React component library you always wanted"
        description="MUI provides a simple, customizable, and accessible library of React components. Follow your own design system, or start with Material Design."
      >
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MUI',
              url: 'https://mui.com/',
              logo: 'https://mui.com/static/logo.png',
              sameAs: [
                'https://twitter.com/MUI_hq',
                'https://github.com/mui/',
                'https://opencollective.com/mui',
              ],
            }),
          }}
        />
      </Head>
      <NoSsr>
        <NewsletterToast />
      </NoSsr>
      <AppHeaderBanner />
      <AppHeader />
      <main id="main-content">
        <Hero />
        <References companies={CORE_CUSTOMERS} />
        <ProductSuite />
        <ValueProposition />
        <DesignSystemComponents />
        <Testimonials />
        <Sponsors />
        <HeroEnd />
        <Divider />
      </main>
      <AppFooter />
    </BrandingCssVarsProvider>
  );
}
