// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"slonim","repository":"europe","path":"belarus/grodnenskaya/slonim","depth":3,"parent":"belarus/grodnenskaya","children":["tekstil-shchik"]});
export const childModules = Object.freeze({"tekstil-shchik":"./tekstil-shchik/tekstil-shchik.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
