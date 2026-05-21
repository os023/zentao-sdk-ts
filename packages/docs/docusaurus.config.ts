import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: '禅道 TypeScript SDK',
  tagline: '禅道 RESTful API v2.0 官方 TypeScript SDK 文档',
  favicon: 'img/favicon.ico',

  url: 'https://example.com',
  baseUrl: '/',

  organizationName: 'zentao',
  projectName: 'zentao-ts-sdk',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: '禅道 SDK',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: '文档',
        },
        {
          href: 'https://www.zentao.net/book/api/2309.html',
          label: '官方 API',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            { label: '快速开始', to: '/docs/intro' },
            { label: 'API 参考', to: '/docs/api/overview' },
          ],
        },
        {
          title: '禅道',
          items: [
            {
              label: 'API v2.0 手册',
              href: 'https://www.zentao.net/book/api/1828.html',
            },
            {
              label: '使用教程',
              href: 'https://www.zentao.net/book/api/2309.html',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 禅道 TypeScript SDK`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
