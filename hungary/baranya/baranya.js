// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baranya","repository":"europe","path":"hungary/baranya","depth":2,"parent":"hungary","children":["komlo","mohacs","pecs"]});
export const childModules = Object.freeze({"komlo":"./komlo/komlo.js","mohacs":"./mohacs/mohacs.js","pecs":"./pecs/pecs.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
