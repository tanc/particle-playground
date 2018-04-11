/**
 * Design System
 * The kitchen sink of all design components
 */
import * as formElements from 'atoms/form-elements';
import * as image from 'atoms/image';
import * as icon from 'atoms/icon';
import * as button from 'atoms/button';
import * as typography from 'atoms/typography';
import * as paragraphImage from 'molecules/paragraph-image';
import * as paragraphTextImage from 'molecules/paragraph-text-image';
import * as paragraphText from 'molecules/paragraph-text';
import * as paragraphVideo from 'molecules/paragraph-video';


const components = {
  formElements,
  image,
  icon,
  button,
  paragraphImage,
  paragraphTextImage,
  paragraphText,
  paragraphVideo,
  typography,
};

/**
 * Default export of object containing all components
 */
export default components;

/**
 * All component names as an array
 * @returns {Array} List of components name strings
 */
export const componentNames = () => Object.values(components).map(({ name }) => name);

require('./tailwind/_tailwind_utilities.scss');

/**
 * Enable all components against a piece of DOM with some settings
 */
export const enableAllComponents = ($dom, settings) =>
  Object.values(components).forEach(({ enable }) => enable($dom, settings));
