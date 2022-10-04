module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^Issue #[0-9]{1,4} (\w*) : (\w*)$/,
      headerCorrespondence: ['type', 'subject'],
      issuePrefixes: ['/^Issue [0-9]{1,4}/'],
    },
  },
  rules: {
    'subject-empty': [2, 'never'],
    'type-empty': [1, 'never'],
  },
};
