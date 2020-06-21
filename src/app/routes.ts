interface Route {
  name: string;
  path?: string;
  authorized: boolean;
  admin: boolean;
  url?: string;
}

export const routes: Route[] = [
  {
    name: 'Home',
    path: '/',
    authorized: false,
    admin: false
  },
];

export const linkRoutes: Route[] = [
  {
    name: 'Discord',
    url: 'http://discord.codering.io',
    authorized: false,
    admin: false
  },
];

export const authorizedRoutes: Route[] = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    authorized: true,
    admin: false,
  },
  {
    name: 'Events',
    path: 'events',
    authorized: true,
    admin: false,
  },
  {
    name: 'Github',
    path: 'github',
    authorized: true,
    admin: false,
  },
  {
    name: 'Pull Requests',
    path: 'github/pullrequest',
    authorized: true,
    admin: false,
  },
  {
    name: 'Leaderboards',
    path: 'leaderboards',
    authorized: true,
    admin: false,
  },
];

export const adminRoutes: Route[] = [
  {
    name: 'Administrator',
    path: 'administrator',
    authorized: true,
    admin: true,
  }
]