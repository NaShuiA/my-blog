const path = require("path");

module.exports = {
  title: "会飞的Bug - 前端工程师",
  tagline: "",
  url: "https://www.nashuia.com",
  baseUrl: "/",
  favicon: "img/favicon.svg",
  organizationName: "会飞的Bug", // Usually your GitHub org/user name.
  projectName: "nashuia.com", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "会飞的Bug",
      logo: {
        alt: " 会飞的Bug",
        src: "img/logo.svg",
      },
      links: [
        { to: "/", label: "Blog", position: "right" },
        // {
        //   to: "docs/react-examples/01-react-props-buttons/index",
        //   label: "React 示例",
        //   position: "right",
        // },
        {
          href: "https://github.com/nashuia",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Style Guide",
        //       to: "docs/doc1"
        //     },
        //     {
        //       label: "Second Doc",
        //       to: "docs/doc2"
        //     }
        //   ]
        // },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus"
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus"
        //     }
        //   ]
        // },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "/",
            },
            {
              label: "GitHub",
              href: "https://github.com/nashuia",
            },
            {
              label: "Bilibili 哔哩哔哩",
              href: "https://space.bilibili.com/18489687",
            },
          ],
        },
        {
          title: "友情链接",
          items: [
            {
              label: "虚位以待",
              to: "https://nashuia.github.io/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 会飞的Bug Built with Docusaurus.`,
      icp: "皖ICP备20010430号-1",
    },
    prism: {
      darkTheme: require("prism-react-renderer/themes/vsDark"),
      defaultLanguage: "javascript",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // docs: {
        //   sidebarPath: require.resolve("./sidebars.js"),
        //   editUrl: "https://github.com/zxuqian/zxuqian.cn/tree/master/docs",
        // },
        blog: {
          path: "./blog",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "daily",
          priority: 0.5,
        },
      },
    ],
  ],
  themes: [require.resolve("@docusaurus/theme-live-codeblock")],
  plugins: [
    path.resolve(__dirname, "./src/plugin/plugin-baidu-analytics"),
    // path.resolve(__dirname, "./src/plugin/plugin-google-adsense"),
  ],
};
