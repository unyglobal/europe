// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oulu","repository":"europe","path":"finland/north-ostrobothnia/oulu","depth":3,"parent":"finland/north-ostrobothnia","children":["heinapaa","hollihaka","leveri","myllytulli","pokkinen","vaara","vanhatulli"]});
export const childModules = Object.freeze({"heinapaa":"./heinapaa/heinapaa.js","hollihaka":"./hollihaka/hollihaka.js","leveri":"./leveri/leveri.js","myllytulli":"./myllytulli/myllytulli.js","pokkinen":"./pokkinen/pokkinen.js","vaara":"./vaara/vaara.js","vanhatulli":"./vanhatulli/vanhatulli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
