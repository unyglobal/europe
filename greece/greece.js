// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"greece","repository":"europe","path":"greece","depth":1,"parent":"","children":["attica","central-greece","central-macedonia","crete","east-macedonia-and-thrace","epirus","ionian-islands","nea-ionia","nea-ionia-a","north-aegean","peloponnese","south-aegean","thessaly","west-greece","west-macedonia"]});
export const childModules = Object.freeze({"attica":"./attica/attica.js","central-greece":"./central-greece/central-greece.js","central-macedonia":"./central-macedonia/central-macedonia.js","crete":"./crete/crete.js","east-macedonia-and-thrace":"./east-macedonia-and-thrace/east-macedonia-and-thrace.js","epirus":"./epirus/epirus.js","ionian-islands":"./ionian-islands/ionian-islands.js","nea-ionia":"./nea-ionia/nea-ionia.js","nea-ionia-a":"./nea-ionia-a/nea-ionia-a.js","north-aegean":"./north-aegean/north-aegean.js","peloponnese":"./peloponnese/peloponnese.js","south-aegean":"./south-aegean/south-aegean.js","thessaly":"./thessaly/thessaly.js","west-greece":"./west-greece/west-greece.js","west-macedonia":"./west-macedonia/west-macedonia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
