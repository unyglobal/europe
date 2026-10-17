// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"radomyshl","repository":"europe","path":"ukraine/zhytomyr-oblast/radomyshl","depth":3,"parent":"ukraine/zhytomyr-oblast","children":["kevlich","sukharka"]});
export const childModules = Object.freeze({"kevlich":"./kevlich/kevlich.js","sukharka":"./sukharka/sukharka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
