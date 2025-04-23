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
          { text: 'Hardware Requirements', link: '/getting-started/hardware-requirements' },
          { text: 'Prepare Raspberry Pi', link: '/getting-started/prepare-raspberry-pi' },
          { text: 'Client Installation', link: '/getting-started/client-installation' },
          { text: 'Installation Guide', link: '/getting-started/installation_guide' },
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
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/></svg>'
        },
        link: 'https://printerhive.com',
        ariaLabel: 'Printerhive Website'
      },
      { icon: 'discord', link: 'https://discord.gg/AwNP6HwvMZ' }
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
