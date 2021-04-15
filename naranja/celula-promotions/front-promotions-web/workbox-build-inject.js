const workboxBuild = require('workbox-build');

const buildSW = () => {
  // This will return a Promise
  const outputBuild =  "dist/promociones";
  return workboxBuild.injectManifest({
    globDirectory: outputBuild,
    globPatterns: [
      '**/*.{js,css,html,png,svg,webp}'
    ],
    swSrc: "src/service-worker.js",
    swDest: `${outputBuild}/service-worker.js`
  }).then(({count, size, warnings}) => {
    // Optionally, log any warnings and details.
    warnings.forEach(console.warn);
    console.log(`${count} files will be precached, totaling ${size} bytes.`);
  })
};

buildSW();
