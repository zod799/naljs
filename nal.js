/* global naljs */
/* nal.js - Not Another Library
 * ES6/2015 helper functions
 * © 2016 Gerard Gust
 */
class Naljs {
  createDialog (content) {
    const d = `
      <div class='dialog-box'>
        <div class="dialog-box-content">
          <a href="#" class="dialog-close" onclick="this.parentNode.parentNode.remove()">&Cross;</a>
          ${content}
        </div>
      </div>
    `

    return d.replace(/\s{2,}/g, '') // .replace(/\'/g, '"') not sure if needed for minify
  }
}

// Dev - Comment Out or Delete for Production or if not developing
// fix for eslint standard no unused variables
var nalDev = new Naljs()
console.log(nalDev)
