import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '22c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'fc2'),
    routes: [
      {
        path: '/docs/JAVA_review',
        component: ComponentCreator('/docs/JAVA_review', '808'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/review',
        component: ComponentCreator('/docs/review', '9ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a93'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
