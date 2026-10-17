// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tilburg","repository":"europe","path":"netherlands/north-brabant/tilburg","depth":3,"parent":"netherlands/north-brabant","children":["besterd","broekhoven","heike"]});
export const childModules = Object.freeze({"besterd":"./besterd/besterd.js","broekhoven":"./broekhoven/broekhoven.js","heike":"./heike/heike.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
