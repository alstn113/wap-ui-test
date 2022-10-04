import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'footer-leading-blank': [1, 'always'],
  },
};

module.exports = Configuration;
