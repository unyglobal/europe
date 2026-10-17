// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"torres-novas","repository":"europe","path":"portugal/santarem/torres-novas","depth":3,"parent":"portugal/santarem","children":["baiona"]});
export const childModules = Object.freeze({"baiona":"./baiona/baiona.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
