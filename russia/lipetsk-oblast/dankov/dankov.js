// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dankov","repository":"europe","path":"russia/lipetsk-oblast/dankov","depth":3,"parent":"russia/lipetsk-oblast","children":["bogoslovka"]});
export const childModules = Object.freeze({"bogoslovka":"./bogoslovka/bogoslovka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
