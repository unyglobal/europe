// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hoogeveen","repository":"europe","path":"netherlands/drenthe/hoogeveen","depth":3,"parent":"netherlands/drenthe","children":["veenesluis"]});
export const childModules = Object.freeze({"veenesluis":"./veenesluis/veenesluis.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
