// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"delchevo","repository":"europe","path":"north-macedonia/delchevo","depth":2,"parent":"north-macedonia","children":["delcevo"]});
export const childModules = Object.freeze({"delcevo":"./delcevo/delcevo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
