// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"geesthacht","repository":"europe","path":"germany/schleswig-holstein/geesthacht","depth":3,"parent":"germany/schleswig-holstein","children":["dosselbuschberg-worth","elbhang","richtweg-riesdahl","stadtkern"]});
export const childModules = Object.freeze({"dosselbuschberg-worth":"./dosselbuschberg-worth/dosselbuschberg-worth.js","elbhang":"./elbhang/elbhang.js","richtweg-riesdahl":"./richtweg-riesdahl/richtweg-riesdahl.js","stadtkern":"./stadtkern/stadtkern.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
