
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangleright}","click",function(sym,e){window.open("http://www.pcce-techyon.com/home.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Starttext}","click",function(sym,e){window.open("http://www.pcce-techyon.com/home.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_reloadtext}","click",function(sym,e){sym.play("start");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangleleft}","click",function(sym,e){sym.play("start");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'
})(jQuery,AdobeEdge,"EDGE-707239309");
