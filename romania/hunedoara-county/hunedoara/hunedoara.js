// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hunedoara","repository":"europe","path":"romania/hunedoara-county/hunedoara","depth":3,"parent":"romania/hunedoara-county","children":["teliucu-mic"]});
export const childModules = Object.freeze({"teliucu-mic":"./teliucu-mic/teliucu-mic.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
