module.exports = {
  branch: process.env.RELEASE_BRANCH,
  analyzeCommits: '@semantic-release/commit-analyzer',
  plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      [
          '@semantic-release/changelog',
          {
              changelogFile: 'CHANGELOG.md',
          },
      ],
      '@semantic-release/npm',
  ],
  verifyConditions: '@semantic-release/npm',
  publish: '@semantic-release/npm',
  prepare: '@semantic-release/npm',
  generateNotes: '@semantic-release/release-notes-generator',
  success: false,
  fail: false,
  npmPublish: true,
  tarballDir: 'dist',
  tagFormat: process.env.RELEASE_TAG
      ? 'v${version}-' + process.env.RELEASE_TAG
      : 'v${version}',
};
