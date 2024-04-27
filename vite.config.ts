import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { createHash } from 'crypto';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
      svgrOptions: {
        ref: true,
        exportType: 'named',
        namedExport: 'ReactComponent',
      },
    }),
  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
    },
  },
  css: {
    modules: {
      generateScopedName: (name, filename, css) => {
        const libraryStartClassnameList = ['ant'];
        if (
          libraryStartClassnameList.some((classname) => name.startsWith(classname))
        ) {
          return name;
        }
        const hash = createHash('md5').update(css).digest('hex').slice(0, 8);
        return `_${name}_${hash}`;
      },
    },
  },
});
