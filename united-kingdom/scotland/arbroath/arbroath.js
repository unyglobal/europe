// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arbroath","repository":"europe","path":"united-kingdom/scotland/arbroath","depth":3,"parent":"united-kingdom/scotland","children":["cairnie","demondale","hayshead","warddykes"]});
export const childModules = Object.freeze({"cairnie":"./cairnie/cairnie.js","demondale":"./demondale/demondale.js","hayshead":"./hayshead/hayshead.js","warddykes":"./warddykes/warddykes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
