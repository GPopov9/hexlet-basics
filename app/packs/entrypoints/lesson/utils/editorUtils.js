// @ts-check

import _ from 'lodash';

const languageMapping = {
  racket: 'scheme',
};

const editorMapping = {
  racket: 'scheme',
  java: 'text/x-java',
};

const langToTabSizeMapping = {
  javascript: 2,
  ruby: 2,
  racket: 2,
  erlang: 2,
  elixir: 2,
  html: 2,
  css: 2,
  python: 4,
  java: 4,
};

const defaultTabSize = 4;

export const getLanguage = (language) => _.get(languageMapping, language, language);

export const getLanguageForEditor = (language) => _.get(editorMapping, language, language);

export const getTabSize = (language) => _.get(langToTabSizeMapping, language, defaultTabSize);
