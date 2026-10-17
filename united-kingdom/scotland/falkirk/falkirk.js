// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"falkirk","repository":"europe","path":"united-kingdom/scotland/falkirk","depth":3,"parent":"united-kingdom/scotland","children":["arnothill","ladysmill","woodlands"]});
export const childModules = Object.freeze({"arnothill":"./arnothill/arnothill.js","ladysmill":"./ladysmill/ladysmill.js","woodlands":"./woodlands/woodlands.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
