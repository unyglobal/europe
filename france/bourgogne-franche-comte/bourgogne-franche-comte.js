// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bourgogne-franche-comte","repository":"europe","path":"france/bourgogne-franche-comte","depth":2,"parent":"france","children":["audincourt","autun","auxerre","beaune","belfort","besancon","chalon-sur-saone","chenove","dijon","dole","le-creusot","lons-le-saunier","macon","montbeliard","montceau-les-mines","nevers","pontarlier","saint-leu","sens","vesoul"]});
export const childModules = Object.freeze({"audincourt":"./audincourt/audincourt.js","autun":"./autun/autun.js","auxerre":"./auxerre/auxerre.js","beaune":"./beaune/beaune.js","belfort":"./belfort/belfort.js","besancon":"./besancon/besancon.js","chalon-sur-saone":"./chalon-sur-saone/chalon-sur-saone.js","chenove":"./chenove/chenove.js","dijon":"./dijon/dijon.js","dole":"./dole/dole.js","le-creusot":"./le-creusot/le-creusot.js","lons-le-saunier":"./lons-le-saunier/lons-le-saunier.js","macon":"./macon/macon.js","montbeliard":"./montbeliard/montbeliard.js","montceau-les-mines":"./montceau-les-mines/montceau-les-mines.js","nevers":"./nevers/nevers.js","pontarlier":"./pontarlier/pontarlier.js","saint-leu":"./saint-leu/saint-leu.js","sens":"./sens/sens.js","vesoul":"./vesoul/vesoul.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
