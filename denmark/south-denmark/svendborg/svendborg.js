// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"svendborg","repository":"europe","path":"denmark/south-denmark/svendborg","depth":3,"parent":"denmark/south-denmark","children":["pasop"]});
export const childModules = Object.freeze({"pasop":"./pasop/pasop.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
