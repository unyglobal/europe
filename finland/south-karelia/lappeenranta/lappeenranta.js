// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lappeenranta","repository":"europe","path":"finland/south-karelia/lappeenranta","depth":3,"parent":"finland/south-karelia","children":["alakyla","kiviharju","kylpyla","leiri","linnoitus","peltola","rakuunamaki","taikinamaki"]});
export const childModules = Object.freeze({"alakyla":"./alakyla/alakyla.js","kiviharju":"./kiviharju/kiviharju.js","kylpyla":"./kylpyla/kylpyla.js","leiri":"./leiri/leiri.js","linnoitus":"./linnoitus/linnoitus.js","peltola":"./peltola/peltola.js","rakuunamaki":"./rakuunamaki/rakuunamaki.js","taikinamaki":"./taikinamaki/taikinamaki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
