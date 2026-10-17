// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"urban-municipality-of-velenje","repository":"europe","path":"slovenia/urban-municipality-of-velenje","depth":2,"parent":"slovenia","children":["velenje"]});
export const childModules = Object.freeze({"velenje":"./velenje/velenje.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
