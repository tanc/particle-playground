/**
 * Demo of paragraphImage. Pulls in paragraphImage assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import demo assets
import twig from './paragraph-images.twig';
import yaml from './paragraph-images.yml';
import markdown from './paragraph-images.md';

export default {
  twig,
  yaml,
  markdown,
};
