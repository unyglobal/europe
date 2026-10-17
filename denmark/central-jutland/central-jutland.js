// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central-jutland","repository":"europe","path":"denmark/central-jutland","depth":2,"parent":"denmark","children":["arhus","hedensted","herning","holstebro","horsens","randers","silkeborg","skive","tilst","viborg","viby"]});
export const childModules = Object.freeze({"arhus":"./arhus/arhus.js","hedensted":"./hedensted/hedensted.js","herning":"./herning/herning.js","holstebro":"./holstebro/holstebro.js","horsens":"./horsens/horsens.js","randers":"./randers/randers.js","silkeborg":"./silkeborg/silkeborg.js","skive":"./skive/skive.js","tilst":"./tilst/tilst.js","viborg":"./viborg/viborg.js","viby":"./viby/viby.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
