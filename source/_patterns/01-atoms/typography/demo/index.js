/**
 * Demo of typography. Pulls in typography assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'atoms/typography';

// Import demo assets
import twig from './typographys.twig';
import yaml from './typographys.yml';
import markdown from './typographys.md';

export default {
  twig,
  yaml,
  markdown,
};
