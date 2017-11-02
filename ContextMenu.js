function ContextMenu(
	o=document.getElementById('div1'),
	m=document.getElementById('ContextMenu1'),
	beforeShow=function(){console.log('beforeShow',ManongContextMenu.e)}
){
	var
		ContextMenuProperPos=function(x,y,w,h){r=ProperPos(x,y,w,h,window.innerWidth,window.innerHeight);for(var i in r)r[i]=r[i]+'px';return r},
		ProperPos=function(x,y,w,h,w0,h0){if(x+w>w0)x-=w;if(y+h>h0)y-=h;return [x,y,w,h]}

	this.show = function(){
    var e = window.event || event;
    if (e.button == 2){
    	ManongContextMenu.e=e;		//	use e in beforeShow
    	beforeShow();
	    
	    this.was = document.oncontextmenu  ;
	    document.oncontextmenu = function(){return false	}

	    this.ev = ManongContextMenu.hide;

	    document.addEventListener	("mousedown"	, this.ev, false);

	    m.style.display = ''	; var r=ContextMenuProperPos(e.clientX,	e.clientY, 	m.offsetWidth,	m.offsetHeight );
	    m.style.left 		= r[0];
	    m.style.top  		= r[1];
    }
	};

	this.hide = function(){
    var e = window.event || event,t = e.srcElement;
    
    do{if (t == m) return false}while(t=t.offsetParent);
    
    document.removeEventListener(e.type, this.ev, false);
    
    m.style.display = 'none';
    
    document.oncontextmenu = this.was;
	};

	ManongContextMenu = this;												//	global => "this"
	this.was          = document.oncontextmenu;			//	store origin contextmenu event
	this.ev           = null;												//	store "this.event"

  m.style.position 	= 'absolute';
	m.style.display 	= 'none';

  o.addEventListener("mouseup", ManongContextMenu.show, false);
}
