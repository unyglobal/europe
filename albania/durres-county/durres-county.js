// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"durres-county","repository":"europe","path":"albania/durres-county","depth":2,"parent":"albania","children":["durres","fushe-kruje","kruje","rrashbull"]});
export const childModules = Object.freeze({"durres":"./durres/durres.js","fushe-kruje":"./fushe-kruje/fushe-kruje.js","kruje":"./kruje/kruje.js","rrashbull":"./rrashbull/rrashbull.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
