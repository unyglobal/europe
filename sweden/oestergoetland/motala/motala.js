// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"motala","repository":"europe","path":"sweden/oestergoetland/motala","depth":3,"parent":"sweden/oestergoetland","children":["angdalen","gamla-sta-n","kvarnon","mossen","stenavadet","zederslund"]});
export const childModules = Object.freeze({"angdalen":"./angdalen/angdalen.js","gamla-sta-n":"./gamla-sta-n/gamla-sta-n.js","kvarnon":"./kvarnon/kvarnon.js","mossen":"./mossen/mossen.js","stenavadet":"./stenavadet/stenavadet.js","zederslund":"./zederslund/zederslund.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
