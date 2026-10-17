// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"korostyshiv","repository":"europe","path":"ukraine/zhytomyr-oblast/korostyshiv","depth":3,"parent":"ukraine/zhytomyr-oblast","children":["zolotarka"]});
export const childModules = Object.freeze({"zolotarka":"./zolotarka/zolotarka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
