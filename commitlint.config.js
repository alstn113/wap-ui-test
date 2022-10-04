module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^Issue\s#[0-9]{1,4}\s(\w*)\s:\s(\w*)$/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
  rules: {
    'subject-empty': [2, 'never'],
    'scope-empty': [1, 'never'],
  },
};
