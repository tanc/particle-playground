/**
 * Demo of paragraphText. Pulls in paragraphText assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import demo assets
import twig from './paragraph-texts.twig';
import yaml from './paragraph-texts.yml';
import markdown from './paragraph-texts.md';

export default {
  twig,
  yaml,
  markdown,
};
