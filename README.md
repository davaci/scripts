# scripts
## a collection of random scripts, usually designed to annoy people
~~### note: you need SnowLord7's script extension to run this, thanks for your great extension man!~~

## quick start
~~Download SnowLord7's Script Extension for chrome:
[https://chrome.google.com/webstore/detail/snowlords-script-extensio/ocpkldjgfaimjjemnlppehhgdbagajhp?hl=en](https://chrome.google.com/webstore/detail/snowlords-script-extensio/ocpkldjgfaimjjemnlppehhgdbagajhp?hl=en)
Once installed, choose a script below and copy it's url:~~

~~Alert 100: https://cdn.jsdelivr.net/gh/davaci/scripts@master/alert100.js  
Page Freezer: https://cdn.jsdelivr.net/gh/davaci/scripts@master/autofreeze.js  
Freeze TypingClub: https://cdn.jsdelivr.net/gh/davaci/scripts@master/freeze.js  
TypingClub Killer: https://cdn.jsdelivr.net/gh/davaci/scripts@master/killtypingclub.js  
Tab Bomber: https://cdn.jsdelivr.net/gh/davaci/scripts@master/bomber.js~~

~~Click on the extension's icon. It should open a window. At the top of said window, there will be a box that is labeled *Script URL*
and paste the selected code from before. Name it something descriptave, then click *Add*.
Scroll down to the bottom of the window, and you should see a new entry named whatever you called it. Next to it, there will a button labeled
*Inject*. Click on that, and the script will be run on the page. For a destructave example, try the Page Freezer, and use *body*
as the id. Then click OK,
and the page will freeze.~~

## new method: coresdev loader
Copy and paste the following script into the JavaScript console:
```
var ic=document.createElement("script");ic.setAttribute('src','https://raw.githubusercontent.com/coredoescode/scripts/master/loader.js');document.head.appendChild(ic);
```
This will inject and start the coresdev loader, allowing you to further inject scripts. Custom extension catching is now supported.
Loader source code in loader.js.
