// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"balmazujvaros","repository":"europe","path":"hungary/hajdu-bihar/balmazujvaros","depth":3,"parent":"hungary/hajdu-bihar","children":["kadarcshat","karinko","telekfold","venkert"]});
export const childModules = Object.freeze({"kadarcshat":"./kadarcshat/kadarcshat.js","karinko":"./karinko/karinko.js","telekfold":"./telekfold/telekfold.js","venkert":"./venkert/venkert.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
