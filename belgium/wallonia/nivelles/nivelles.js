// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nivelles","repository":"europe","path":"belgium/wallonia/nivelles","depth":3,"parent":"belgium/wallonia","children":["clarisse","faubourg-de-bruxelles","faubourg-de-charleroi","faubourg-de-namur","faubourg-de-soignies","faubourg-sainte-anne","saint-roch","sotriamont"]});
export const childModules = Object.freeze({"clarisse":"./clarisse/clarisse.js","faubourg-de-bruxelles":"./faubourg-de-bruxelles/faubourg-de-bruxelles.js","faubourg-de-charleroi":"./faubourg-de-charleroi/faubourg-de-charleroi.js","faubourg-de-namur":"./faubourg-de-namur/faubourg-de-namur.js","faubourg-de-soignies":"./faubourg-de-soignies/faubourg-de-soignies.js","faubourg-sainte-anne":"./faubourg-sainte-anne/faubourg-sainte-anne.js","saint-roch":"./saint-roch/saint-roch.js","sotriamont":"./sotriamont/sotriamont.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
