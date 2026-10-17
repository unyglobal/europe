// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"taufkirchen","repository":"europe","path":"germany/bavaria/taufkirchen","depth":3,"parent":"germany/bavaria","children":["winning"]});
export const childModules = Object.freeze({"winning":"./winning/winning.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
