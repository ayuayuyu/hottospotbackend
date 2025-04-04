//https://nitro.unjs.io/config

import nitroCloudflareDev from 'nitro-cloudflare-dev';
export default defineNitroConfig({
  srcDir: 'server',
  compatibilityDate: '2025-04-01',
  modules: [nitroCloudflareDev],
  preset: 'cloudflare-pages',
  experimental: {
    wasm: true,
  },
});
