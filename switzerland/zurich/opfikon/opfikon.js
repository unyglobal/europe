// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"opfikon","repository":"europe","path":"switzerland/zurich/opfikon","depth":3,"parent":"switzerland/zurich","children":["glattbrugg-wydacker-bettacker-lattenwiesen","glattbrugg-zentrum-mullacker"]});
export const childModules = Object.freeze({"glattbrugg-wydacker-bettacker-lattenwiesen":"./glattbrugg-wydacker-bettacker-lattenwiesen/glattbrugg-wydacker-bettacker-lattenwiesen.js","glattbrugg-zentrum-mullacker":"./glattbrugg-zentrum-mullacker/glattbrugg-zentrum-mullacker.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
