// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kurikka","repository":"europe","path":"finland/south-ostrobothnia/kurikka","depth":3,"parent":"finland/south-ostrobothnia","children":["kurikankyla"]});
export const childModules = Object.freeze({"kurikankyla":"./kurikankyla/kurikankyla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
