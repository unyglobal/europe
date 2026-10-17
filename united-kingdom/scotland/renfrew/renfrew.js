// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"renfrew","repository":"europe","path":"united-kingdom/scotland/renfrew","depth":3,"parent":"united-kingdom/scotland","children":["loanhead","moorpark","newmains"]});
export const childModules = Object.freeze({"loanhead":"./loanhead/loanhead.js","moorpark":"./moorpark/moorpark.js","newmains":"./newmains/newmains.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
