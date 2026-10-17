// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"krasnik","repository":"europe","path":"poland/lublin/krasnik","depth":3,"parent":"poland/lublin","children":["zarzecze"]});
export const childModules = Object.freeze({"zarzecze":"./zarzecze/zarzecze.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
