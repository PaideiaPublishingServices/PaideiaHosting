/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://paideiahosting.net',
  generateRobotsTxt: true,
  outDir: './out',
  generateIndexSitemap: false,
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/pricing'),
    await config.transform(config, '/services'),
    await config.transform(config, '/services/ojs-hosting'),
    await config.transform(config, '/services/omp-hosting'),
    await config.transform(config, '/services/repository-hosting'),
    await config.transform(config, '/services/atom-hosting'),
    await config.transform(config, '/services/vps-for-institutions'),
    await config.transform(config, '/services/custom-solutions'),
    await config.transform(config, '/services/backup-solutions'),
    await config.transform(config, '/plugins'),
    await config.transform(config, '/plugins/academic-theme-omp'),
    await config.transform(config, '/blog'),
  ],
}