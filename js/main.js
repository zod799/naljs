// const gg = new Naljs()

// let elem = document.getElementById('createDialog-btn')

// elem.addEventListener('click', function (e) {
//   elem.parentNode.append(gg.createDialog(changeVid({chid: 'f0506eb8-ea24-4c99-a217-f0ee4f1b911f', vid: '52c42da6-22ff-4fa1-93c1-356fc61722f7'})))
// })
function createDialog (content) {
  var elem = document.createElement('div')
  elem.className = 'dialog-box'
  var d = '<div class="dialog-box-content"><a href="#" class="dialog-close" onclick="this.parentNode.parentNode.remove()">&Cross;</a>' + content + '</div>'
  elem.innerHTML = d

  return elem
}
function changeVid (obj) {
  if (obj === undefined || typeof obj !== 'object') {
    obj = {
      chid: '',
      vid: ''
    }
  }

  var iframeElem = "<iframe width=853 height=480 src='https://roberthalf.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?" +
              'chid=' + obj.chid +
              '&vid=' + obj.vid +
            "&amp;width=853&amp;height=480&amp;autoPlay=false&amp;showInfo=true' allowfullscreen data-spresponsive style='position: absolute; max-width: 100%; border: none;'></iframe>"

  return iframeElem
}
