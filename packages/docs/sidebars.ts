import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: '指南',
      items: ['guide/installation', 'guide/authentication', 'guide/configuration'],
    },
    {
      type: 'category',
      label: 'API 参考',
      link: { type: 'doc', id: 'api/overview' },
      items: [
        'api/overview',
        'api/token',
        'api/bug',
        'api/product',
        'api/project',
        'api/execution',
        'api/task',
        'api/story',
        'api/user',
        'api/modules',
      ],
    },
  ],
}

export default sidebars
