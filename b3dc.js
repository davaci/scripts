d=document,a=app,p=a.player;
p.killOld=p.kill,p.noclip=0,p.killCount=0,p.kill=function(){if(this.noclip){return;}this.killOld(),this.killCount++,console.log(`kc: ${this.killCount}`)};
d.onkeypress=(e)=>{if(e.keyCode==192){if(p.noclip){p.noclip=0}else{p.noclip=1}}}
