var loc = location.href;
var baseurl = loc.substring(0,loc.lastIndexOf('/'));

function getManifest() {
  return {
    "name": "VANS",

    "iconURL": baseurl+"/vans.png",
    "icon32URL": baseurl+"/vans32.png",
    "icon64URL": baseurl+"/vans64.png",
  
    "sidebarURL": baseurl+"/sidebar.html",

    "description": "VANS Triple Crown of Surfing",
    "author": "mixedpuppy",
    "homepageURL": "https://github.com/mixedpuppy/vans/",
  
    "version": 1
  }
}
