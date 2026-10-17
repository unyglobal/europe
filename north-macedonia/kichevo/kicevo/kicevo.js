// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kicevo","repository":"europe","path":"north-macedonia/kichevo/kicevo","depth":3,"parent":"north-macedonia/kichevo","children":["karpos"]});
export const childModules = Object.freeze({"karpos":"./karpos/karpos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
