import url from '@rollup/plugin-url';

export default {
  plugins: [
    url({
      limit: 10000, // Files smaller than this will be inlined as base64 strings
      include: ['**/*.png', '**/*.jpg', '**/*.gif'],
      emitFiles: true // Ensure that files get emitted during the build
    })
  ]
};
