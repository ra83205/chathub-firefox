import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest(async () => {
  return {
    manifest_version: 3,
    name: '__MSG_appName__',
    description: '__MSG_appDesc__',
    default_locale: 'en',
    version: '1.45.7',
    icons: {
      '16': 'src/assets/icon.png',
      '32': 'src/assets/icon.png',
      '48': 'src/assets/icon.png',
      '128': 'src/assets/icon.png',
    },
    background: {
      scripts: ['src/background/index.ts'], // Используем скрипты для Firefox
    },
    action: {
      default_popup: 'src/ff/popup.html',
      default_icon: 'src/assets/icon.png',
    },
    host_permissions: [
      'https://*.bing.com/',
      'https://*.openai.com/',
      'https://bard.google.com/',
      'https://*.chathub.gg/',
      'https://*.duckduckgo.com/',
      'https://*.poe.com/',
      'https://*.anthropic.com/',
      'https://*.claude.ai/',
    ],
    permissions: ['storage', 'unlimitedStorage', 'scripting', 'tabs'],
    content_scripts: [
      {
        matches: ['https://chat.openai.com/*'],
        js: ['src/content-script/chatgpt-inpage-proxy.ts'],
      },
    ],
    commands: {
      'open-app': {
        suggested_key: {
          default: 'Alt+J',
          windows: 'Alt+J',
          linux: 'Alt+J',
          mac: 'Command+J',
        },
        description: 'Open ChatHub app',
      },
    },
    web_accessible_resources: [
      {
        resources: [
          'src/assets/icon.png',
          'src/content-script/chatgpt-inpage-proxy.ts',
          'src/ff/popup.html',
          'src/ff/popup.js',
        ],
        matches: [
          'https://*.bing.com/*',
          'https://*.openai.com/*',
          'https://bard.google.com/*',
          'https://*.chathub.gg/*',
          'https://*.duckduckgo.com/*',
          'https://*.poe.com/*',
          'https://*.anthropic.com/*',
          'https://*.claude.ai/*',
          'https://chat.openai.com/*',
          // Добавляйте здесь любые другие URL, которые могут использовать ресурсы
        ],
      },
    ],
    content_security_policy: {
      extension_pages: "script-src 'self'; object-src 'self';",
    },
    browser_specific_settings: {
      gecko: {
        id: 'mr-edge@yandex.ru',
        strict_min_version: '42.0',
      },
    },
  }
})
