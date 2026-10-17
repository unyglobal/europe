// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"new-mills","repository":"europe","path":"united-kingdom/england/new-mills","depth":3,"parent":"united-kingdom/england","children":["eaves-knoll","hidebank","high-lee","low-leighton","newtown","torr-top"]});
export const childModules = Object.freeze({"eaves-knoll":"./eaves-knoll/eaves-knoll.js","hidebank":"./hidebank/hidebank.js","high-lee":"./high-lee/high-lee.js","low-leighton":"./low-leighton/low-leighton.js","newtown":"./newtown/newtown.js","torr-top":"./torr-top/torr-top.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
