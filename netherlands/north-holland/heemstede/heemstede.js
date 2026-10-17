// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"heemstede","repository":"europe","path":"netherlands/north-holland/heemstede","depth":3,"parent":"netherlands/north-holland","children":["berkenrode"]});
export const childModules = Object.freeze({"berkenrode":"./berkenrode/berkenrode.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
