import * as React from 'react';
import { AppProvider } from '@toolpad/core/nextjs';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Navigation } from '@toolpad/core/AppProvider';
import { SessionProvider, signIn, signOut } from 'next-auth/react';
import { auth } from '../auth';
import theme from '../theme';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: '',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'catalog',
    title: 'Catálogos',
    icon: <CoPresentIcon />,
  },
  {
    segment: 'invoice',
    title: 'Facturas',
    icon: <ReceiptIcon />,
  },
];

const BRANDING = {
  title: 'BeUnique Corportation inc.',
};


const AUTHENTICATION = {
  signIn,
  signOut,
};


export default async function RootLayout(props: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <html lang="en" data-toolpad-color-scheme="light">
      <body suppressHydrationWarning>
        <SessionProvider session={session}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          
            <AppProvider
              navigation={NAVIGATION}
              branding={BRANDING}
              session={session}
              authentication={AUTHENTICATION}
              theme={theme}
            >
              {props.children}
            </AppProvider>
            
          </AppRouterCacheProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
