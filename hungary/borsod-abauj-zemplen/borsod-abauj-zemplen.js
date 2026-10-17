// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"borsod-abauj-zemplen","repository":"europe","path":"hungary/borsod-abauj-zemplen","depth":2,"parent":"hungary","children":["diosgyor","kazincbarcika","mezokovesd","miskolc","ozd","satoraljaujhely","tiszaujvaros"]});
export const childModules = Object.freeze({"diosgyor":"./diosgyor/diosgyor.js","kazincbarcika":"./kazincbarcika/kazincbarcika.js","mezokovesd":"./mezokovesd/mezokovesd.js","miskolc":"./miskolc/miskolc.js","ozd":"./ozd/ozd.js","satoraljaujhely":"./satoraljaujhely/satoraljaujhely.js","tiszaujvaros":"./tiszaujvaros/tiszaujvaros.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
