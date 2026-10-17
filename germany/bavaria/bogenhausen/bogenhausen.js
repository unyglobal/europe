// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bogenhausen","repository":"europe","path":"germany/bavaria/bogenhausen","depth":3,"parent":"germany/bavaria","children":["herzogpark","parkstadt"]});
export const childModules = Object.freeze({"herzogpark":"./herzogpark/herzogpark.js","parkstadt":"./parkstadt/parkstadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
