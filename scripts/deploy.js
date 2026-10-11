const ghPages = require('gh-pages');

ghPages.publish(
  'build',
  {
    src: [
      '**/*',
      '!Git-2.56.0.2-64-bit.exe',
      '!GitHubDesktopSetup-x64.exe',
    ],
  },
  (error) => {
    if (error) {
      console.error('GitHub Pages deployment failed:', error);
      process.exitCode = 1;
      return;
    }

    console.log('Published to GitHub Pages.');
  }
);
