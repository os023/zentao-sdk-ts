import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import clsx from 'clsx'
import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            开始使用
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): React.ReactElement {
  return (
    <Layout title="首页" description="禅道 RESTful API v2.0 TypeScript SDK">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h3>完整 API 覆盖</h3>
                <p>
                  覆盖 Bug、产品、项目、执行、任务、需求、测试等禅道 API v2.0 全部模块。
                </p>
              </div>
              <div className="col col--4">
                <h3>TypeScript 优先</h3>
                <p>完整类型定义，支持 ESM / CJS，使用 tsdown 构建。</p>
              </div>
              <div className="col col--4">
                <h3>pnpm Monorepo</h3>
                <p>SDK 与文档同仓维护，开箱即用的开发体验。</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
