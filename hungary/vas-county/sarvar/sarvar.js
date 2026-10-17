// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sarvar","repository":"europe","path":"hungary/vas-county/sarvar","depth":3,"parent":"hungary/vas-county","children":["sarsziget","tizenharomvaros"]});
export const childModules = Object.freeze({"sarsziget":"./sarsziget/sarsziget.js","tizenharomvaros":"./tizenharomvaros/tizenharomvaros.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
