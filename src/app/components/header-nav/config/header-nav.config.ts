export interface HeaderNavItem {
  label: string;
  url: string;
  mobileUrl: string;
  fragment: string;
}

export const HEADER_NAV_CONFIG: HeaderNavItem[] = [
  {
    label: 'Home',
    url: '/',
    mobileUrl: "/",
    fragment: 'home',
  },
  {
    label: 'Tournaments',
    url: '/',
    mobileUrl: "/tournaments",
    fragment: 'tournaments',
  },
  {
    label: 'Leaderboard',
    url: '/',
    mobileUrl: 'leaderboard',
    fragment: 'leaderboard',
  },
  {
    label: 'About Us',
    url: '/',
    mobileUrl: "about-us",
    fragment: 'about-us',
  },
  {
    label: 'Contact Us',
    url: '/',
    mobileUrl: 'contact-us',
    fragment: 'contact-us',
  },
];
