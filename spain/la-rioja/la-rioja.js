// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-rioja","repository":"europe","path":"spain/la-rioja","depth":2,"parent":"spain","children":["calahorra","logrono"]});
export const childModules = Object.freeze({"calahorra":"./calahorra/calahorra.js","logrono":"./logrono/logrono.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
