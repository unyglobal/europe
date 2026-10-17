// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"coimbra","repository":"europe","path":"portugal/coimbra","depth":2,"parent":"portugal","children":["condeixa-a-nova","eiras","figueira-da-foz","ribeira-de-frades","santo-antonio-dos-olivais","sao-martinho-do-bispo","sao-paulo-de-frades"]});
export const childModules = Object.freeze({"condeixa-a-nova":"./condeixa-a-nova/condeixa-a-nova.js","eiras":"./eiras/eiras.js","figueira-da-foz":"./figueira-da-foz/figueira-da-foz.js","ribeira-de-frades":"./ribeira-de-frades/ribeira-de-frades.js","santo-antonio-dos-olivais":"./santo-antonio-dos-olivais/santo-antonio-dos-olivais.js","sao-martinho-do-bispo":"./sao-martinho-do-bispo/sao-martinho-do-bispo.js","sao-paulo-de-frades":"./sao-paulo-de-frades/sao-paulo-de-frades.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
