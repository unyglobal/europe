// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sumy","repository":"europe","path":"ukraine/sumy","depth":2,"parent":"ukraine","children":["bilopillia","hlukhiv","konotop","kovpakivskyi","krolevets","lebedyn","okhtyrka","romny","shostka","trostyanets","zarichnyi"]});
export const childModules = Object.freeze({"bilopillia":"./bilopillia/bilopillia.js","hlukhiv":"./hlukhiv/hlukhiv.js","konotop":"./konotop/konotop.js","kovpakivskyi":"./kovpakivskyi/kovpakivskyi.js","krolevets":"./krolevets/krolevets.js","lebedyn":"./lebedyn/lebedyn.js","okhtyrka":"./okhtyrka/okhtyrka.js","romny":"./romny/romny.js","shostka":"./shostka/shostka.js","trostyanets":"./trostyanets/trostyanets.js","zarichnyi":"./zarichnyi/zarichnyi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
