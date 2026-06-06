import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeVintage from 'starlight-theme-vintage';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  site: 'https://jajera.github.io',
  base: '/aws-gcp-interconnect-walkthrough',
  vite: {
    plugins: [Icons({ compiler: 'astro' })],
  },
  integrations: [
    starlight({
      title: 'AWS-GCP Interconnect',
      favicon: '/favicon.svg',
      description:
        'CLI and Terraform walkthroughs for private AWS-GCP connectivity using Interconnect multicloud.',
      plugins: [starlightThemeVintage()],
      customCss: ['./src/styles/splash-overrides.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/jajera/aws-gcp-interconnect-walkthrough',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/jajera/aws-gcp-interconnect-walkthrough/edit/main/',
      },
      lastUpdated: true,
      pagination: true,
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content:
              'https://jajera.github.io/aws-gcp-interconnect-walkthrough/og-image.png',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:alt',
            content:
              'Private cross-cloud connectivity between AWS and GCP using Interconnect multicloud',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image',
            content:
              'https://jajera.github.io/aws-gcp-interconnect-walkthrough/og-image.png',
          },
        },
      ],
      sidebar: [
        { label: 'Introduction', link: '/' },
        { slug: 'overview' },
        {
          label: 'Prerequisites',
          collapsed: false,
          items: [
            { slug: 'prerequisites' },
            { slug: 'prerequisites/cost-estimate' },
          ],
        },
        {
          label: 'Setup',
          collapsed: false,
          items: [
            { slug: 'setup' },
            { slug: 'setup/configure-variables' },
            { slug: 'setup/apply-terraform' },
            { slug: 'setup/gcp-prep' },
          ],
        },
        {
          label: 'Interconnect',
          collapsed: false,
          items: [
            { slug: 'interconnect' },
            { slug: 'interconnect/aws-interconnect' },
            { slug: 'interconnect/gcp-transport' },
            { slug: 'interconnect/vpc-peering' },
          ],
        },
        {
          label: 'Verify',
          collapsed: false,
          items: [
            { slug: 'verify' },
            { slug: 'verify/routing' },
            { slug: 'verify/connectivity-test' },
          ],
        },
        { slug: 'teardown' },
        {
          label: 'Troubleshooting',
          collapsed: true,
          items: [
            { slug: 'troubleshooting' },
            { slug: 'troubleshooting/checking-errors' },
            { slug: 'troubleshooting/billing-verification' },
          ],
        },
        { slug: 'reference' },
      ],
    }),
  ],
});
