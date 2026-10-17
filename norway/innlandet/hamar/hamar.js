// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hamar","repository":"europe","path":"norway/innlandet/hamar","depth":3,"parent":"norway/innlandet","children":["ankerl-kka","holset","rollsl-kka","stbyen","vestbyen"]});
export const childModules = Object.freeze({"ankerl-kka":"./ankerl-kka/ankerl-kka.js","holset":"./holset/holset.js","rollsl-kka":"./rollsl-kka/rollsl-kka.js","stbyen":"./stbyen/stbyen.js","vestbyen":"./vestbyen/vestbyen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
