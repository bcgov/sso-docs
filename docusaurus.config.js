// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentation",
  tagline: "SSO Pathfinder Knowledge Base",
  favicon: "img/favicon.ico",
  // Set the production url of your site here
  url: "https://bcgov.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/sso-docs/",
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "bcgov", // Usually your GitHub org/user name.
  projectName: "sso-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  themes: ["@saucelabs/theme-github-codeblock"],
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false,
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/bcgov/sso-docs",
          routeBasePath: "/",
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: "keywords", content: "pathfinder, sso, keycloak" },
        {
          name: "description",
          content:
            "We offer a simple way for application development teams to set up login functionality for their app from approved identity providers over a standard and secure protocol aka to help you obtain the technical details for your login component",
        },
        {
          name: "og:image",
          content: "https://bcgov.github.io/sso-docs/img/sso-single-signon.png",
        },
      ],
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Pathfinder SSO",
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://mvp.developer.gov.bc.ca/docs/default/component/css-docs",
            label: "Wiki",
            position: "right",
          },
          {
            href: "https://sso-requests.apps.gold.devops.gov.bc.ca/",
            label: "CSS",
            position: "right",
          },
          {
            href: "https://mvp.developer.gov.bc.ca/docs/default/component/css-docs/Pathfinder-Uptime-Monitoring",
            label: "Uptime",
            position: "right",
          },
          {
            href: "https://chat.developer.gov.bc.ca/channel/sso",
            label: "Rocket.Chat",
            position: "right",
          },
          {
            href: "mailto:bcgov.sso@gov.bc.ca",
            label: "Email",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        copyright: `Copyright © ${new Date().getFullYear()} SSO Docs. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
