// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jaszbereny","repository":"europe","path":"hungary/jasz-nagykun-szolnok/jaszbereny","depth":3,"parent":"hungary/jasz-nagykun-szolnok","children":["oregerdo","tulatarna","zagyvapart","zsombekos"]});
export const childModules = Object.freeze({"oregerdo":"./oregerdo/oregerdo.js","tulatarna":"./tulatarna/tulatarna.js","zagyvapart":"./zagyvapart/zagyvapart.js","zsombekos":"./zsombekos/zsombekos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
