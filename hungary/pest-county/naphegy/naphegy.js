// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"naphegy","repository":"europe","path":"hungary/pest-county/naphegy","depth":3,"parent":"hungary/pest-county","children":["kis-gellerthegy"]});
export const childModules = Object.freeze({"kis-gellerthegy":"./kis-gellerthegy/kis-gellerthegy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
