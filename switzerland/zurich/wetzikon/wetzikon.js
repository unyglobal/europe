// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wetzikon","repository":"europe","path":"switzerland/zurich/wetzikon","depth":3,"parent":"switzerland/zurich","children":["wetzikon-ober-wetzikon","wetzikon-robenhausen"]});
export const childModules = Object.freeze({"wetzikon-ober-wetzikon":"./wetzikon-ober-wetzikon/wetzikon-ober-wetzikon.js","wetzikon-robenhausen":"./wetzikon-robenhausen/wetzikon-robenhausen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
