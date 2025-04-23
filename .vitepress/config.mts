import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Printerhive Docs",
  description: "Documentation for Printerhive.com",
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', rel: 'stylesheet' }],
  ],
  
  themeConfig: {
    // Logo a další sdílená nastavení zůstávají
    logo: { 
      light: '/printerhive_com_light.svg',
      dark: '/printerhive_logo_dark.svg'
    },
    siteTitle: false,

    nav: [
      { text: 'Getting Started', link: '/' },
      { text: 'Features', link: '/features/' },
      { text: 'Changelog', link: '/changelog/' }
    ],
    
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Registration', link: '/getting-started/registration' },
          { text: 'Prepare Raspberry Pi', link: '/getting-started/prepare-raspberry-pi' },
          { text: 'Client Installation', link: '/getting-started/installation' },
          { text: 'Connect Printer', link: '/getting-started/connect-printer' }
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Features Overview', link: '/features/' },
          { text: 'Monitoring', link: '/features/monitoring' },
          { text: 'File Management', link: '/features/file-management' },
          { text: 'Notifications', link: '/features/notifications' },
          { text: 'Scheduled Prints', link: '/features/scheduled-prints' },
          { text: 'Locations', link: '/features/locations' },
          { text: 'Basic Printer Control', link: '/features/basic-printer-control' },
          { text: 'Lighting Automation', link: '/features/lighting-automation' }
        ]
      },
      {
        text: 'Updates',
        items: [
          { text: 'Changelog', link: '/changelog/' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/printerhive/printerhive-docs' }
    ],
    
    footer: {
      message: 'Documentation built with VitePress',
      copyright: `© ${new Date().getFullYear()} Printerhive. All rights reserved.`
    },

    // Nastavení specifická pro EN verzi, která byla dříve v root locale
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },
    
    outlineTitle: 'On this page',
    darkModeSwitchLabel: 'Appearance',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Return to top',
    
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search'
          },
          modal: {
            noResultsText: 'No results for',
            resetButtonTitle: 'Reset search',
            footer: {
              selectText: 'select',
              navigateText: 'navigate',
              closeText: 'close'
            }
          }
        }
      }
    }
  }
})
