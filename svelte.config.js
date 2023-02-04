import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter()
		// Override: methodOverride: { allowed: ['PATCH', 'DELETE'] },
	},

	// plugin options
  vitePlugin: {
    exclude: [],

    // experimental options
		experimental: {
      inspector: {
        toggleKeyCombo: 'meta-shift',
        holdMode: false,
        showToggleButton: 'never', //always
        //toggleButtonPos: 'bottom-left'
      }
    }
  }
};

export default config;
