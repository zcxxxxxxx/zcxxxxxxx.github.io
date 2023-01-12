import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '091'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '969'),
    routes: [
      {
        path: '/docs/personal_html',
        component: ComponentCreator('/docs/personal_html', '2f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/useful_hoy_key',
        component: ComponentCreator('/docs/useful_hoy_key', '629'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/useful_tool',
        component: ComponentCreator('/docs/useful_tool', 'c8d'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '725'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
