// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Σύλλογος Εθελοντούμε',
  tagline: 'Σύλλογος Φίλων Παιδιών, Εφήβων, Ενηλίκων ΑμεΑ και όλων των παιδιών «Εθελοντούμε»',
  //url: 'https://your-docusaurus-test-site.com', -->
  url: 'https://ethelontoume.gr',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Σύλλογος Εθελοντούμε',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {to: '/vision', label: 'Όραμα', position: 'left'},
          {to: '/activities', label: 'Δράσεις', position: 'left'},
          { to: '/contact', label: 'Επικοινωνία', position: 'left' },
          //{ to: '/terms-and-conditions', label: 'Όροι και Προϋποθέσεις', position: 'left' },
          //{
          //  to: '/contact',
          //  label: 'Επικοινωνία',
          //  position: 'left',
          //  items: [
          //    { label: 'Συχνές Ερωτήσεις', to: '/contact/faq' },
          //    { label: 'Ενημερωτικό Δελτίο', to: '/contact/newsletter' },           
          //    { label: 'Τρόπoς Λειτουργίας', to: '/contact/tropos-leitourgias' },
          //  ],
          //},
          //{
          //  label: 'Επικοινωνία',
          //  position: 'left',
          //  items: [
          //    { label: 'Συχνές Ερωτήσεις', to: '/contact#συχνές-ερωτήσεις' },
          //    { label: 'Ενημερωτικό Δελτίο', to: '/contact#newsletter' },
          //    { label: 'Τρόπος Λειτουργίας', to: '/contact#τρόπος-λειτουργίας' },
          //  ],
          //},
         //{
         //   to: '/terms-and-conditions',
         //   label: 'Όροι και Προϋποθέσεις',
         //   position: 'left',
         //   items: [          
         //     { label: 'Πολιτική Cookies', to: '/terms-and-conditions/cookies-policy' },             
         //     { label: 'Πολιτική Aπορρήτου', to: '/terms-and-conditions/privacy-policy' },   
         //   ],
         // },
         // {
         //   label: 'Όροι και Προϋποθέσεις',
         //   position: 'left',
         //   items: [          
         //     { label: 'Πολιτική Cookies', to: '/terms-and-conditions#πολιτική-cookies' },             
         //     { label: 'Πολιτική Απορρήτου', to: '/terms-and-conditions#πολιτική-απορρήτου' },   
         //   ],
         // },               
          {to: '/blog', label: 'Blog', position: 'right'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Κοινότητα',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/ethelontoume',
              },              
              {
                label: 'Facebook',
                href: 'https://facebook.com/syllogos.ethelontoume',
              },              
              {
                label: 'YouTube',
                href: 'https://youtube.com/@ethelontoume',
              },              
            ],
          },
          {
            title: 'Όραμα',
            items: [
              {
                label: 'Το Όραμά μας',
                to: '/vision',
              },
            ],
          },
          {
            title: 'Δράσεις',
            items: [
              {
                label: 'Σε Σχολεία & Δήμους',
                to: '/activities#δράσεις-και-εκστρατείες-σε-σχολεία-και-δήμους',
              },
              {
                label: 'Ευαισθητοποίησης',
                to: '/activities#δράσεις-ευαισθητοποίησης-για-όλα-τα-είδη-αναπηρίας',
              },
              {
                label: 'Βιωματικά Εργαστήρια',
                to: '/activities#βιωματικά-εργαστήρια-και-εκδηλώσεις',
              },
            ],
          },
          {
            title: 'Επικοινωνία',
            items: [
              {
                label: 'Στοιχεία Επικοινωνίας',
                to: '/contact',
              },
              //{
              //  label: 'Ενημερωτικό Δελτίο',
              //  to: '/contact#ενημερωτικό-δελτίο',
              //},   
              //{
              //  label: 'Συχνές Ερωτήσεις',
              //  to: '/contact#συχνές-ερωτήσεις',
              //},         
            ],
          },
          {
            title: 'Σχετικά',
            items: [
              {
                label: 'Όροι και Προϋποθέσεις',
                to: '/terms-and-conditions',
              },
              {
                label: 'Πολιτική Απορρήτου',
                to: '/terms-and-conditions#πολιτική-απορρήτου',
              },   
              {
                label: 'Πολιτική Cookies',
                to: '/terms-and-conditions#πολιτική-cookies',
              },      
            ],
          },         
          {
            title: 'Περισσότερα',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ethelontoume',
              },              
            ],
          },               
        ],
        copyright: `Copyright © 2024 - ${new Date().getFullYear()} Σύλλογος Εθελεντούμε - Built with Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
