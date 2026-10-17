// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"urban-municipality-of-ptuj","repository":"europe","path":"slovenia/urban-municipality-of-ptuj","depth":2,"parent":"slovenia","children":["ptuj"]});
export const childModules = Object.freeze({"ptuj":"./ptuj/ptuj.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
