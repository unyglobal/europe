// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wigan","repository":"europe","path":"united-kingdom/england/wigan","depth":3,"parent":"united-kingdom/england","children":["bull-hey","poolstock","wallgate"]});
export const childModules = Object.freeze({"bull-hey":"./bull-hey/bull-hey.js","poolstock":"./poolstock/poolstock.js","wallgate":"./wallgate/wallgate.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
