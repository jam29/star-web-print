
const { convert } = require('html-to-text');
// There is also an alias to `convert` called `htmlToText`.

const options = {
  wordwrap: null,
};

//-- fonction sendMessage.
function sendMessage(request) {
  //showNowPrinting();
 
  var trader = new StarWebPrintTrader({
    url:'http://localhost:8001/StarWebPRNT/SendMessage', 
    papertype:'normal'});

  trader.onReceive = function (response) {
     // hideNowPrinting();

      var msg = '- onReceive -\n\n';

      msg += 'TraderSuccess : [ ' + response.traderSuccess + ' ]\n';

//      msg += 'TraderCode : [ ' + response.traderCode + ' ]\n';

      msg += 'TraderStatus : [ ' + response.traderStatus + ',\n';

      if (trader.isCoverOpen            ({traderStatus:response.traderStatus})) {msg += '\tCoverOpen,\n';}
      if (trader.isOffLine              ({traderStatus:response.traderStatus})) {msg += '\tOffLine,\n';}
      if (trader.isCompulsionSwitchClose({traderStatus:response.traderStatus})) {msg += '\tCompulsionSwitchClose,\n';}
      if (trader.isEtbCommandExecute    ({traderStatus:response.traderStatus})) {msg += '\tEtbCommandExecute,\n';}
      if (trader.isHighTemperatureStop  ({traderStatus:response.traderStatus})) {msg += '\tHighTemperatureStop,\n';}
      if (trader.isNonRecoverableError  ({traderStatus:response.traderStatus})) {msg += '\tNonRecoverableError,\n';}
      if (trader.isAutoCutterError      ({traderStatus:response.traderStatus})) {msg += '\tAutoCutterError,\n';}
      if (trader.isBlackMarkError       ({traderStatus:response.traderStatus})) {msg += '\tBlackMarkError,\n';}
      if (trader.isPaperEnd             ({traderStatus:response.traderStatus})) {msg += '\tPaperEnd,\n';}
      if (trader.isPaperNearEnd         ({traderStatus:response.traderStatus})) {msg += '\tPaperNearEnd,\n';}

      msg += '\tEtbCounter = ' + trader.extractionEtbCounter({traderStatus:response.traderStatus}).toString() + ' ]\n';

//      msg += 'Status : [ ' + response.status + ' ]\n';
//      msg += 'ResponseText : [ ' + response.responseText + ' ]\n';
      alert(msg);
  }

  trader.onError = function (response) {
      var msg = '- onError -\n\n';
      msg += '\tStatus:' + response.status + '\n';
      msg += '\tResponseText:' + response.responseText + '\n\n';
      msg += 'Do you want to retry?\n';
      var answer = confirm(msg);
      if (answer) {
          sendMessage(request);
      }
      else {
          //hideNowPrinting();
      }
  }
  trader.sendMessage({request:request});
}



//---- function de cut
function cutStringIntoPortions(str, portionLength) {
  const portions = [];
  for (let i = 0; i < str.length; i += portionLength) {
      portions.push(str.substring(i, i + portionLength));
  }
  return portions;
}


const html = `<section><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yves&nbsp;Berrou&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;44&nbsp;rue&nbsp;Saint&nbsp;Julien&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;49000&nbsp;Angers&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tel&nbsp;:&nbsp;0000000000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email&nbsp;:&nbsp;yves.berrou@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><br><p>26/04/2024&nbsp;17:41:26&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>Ticket&nbsp;n°&nbsp;000031#2&nbsp;-&nbsp;DUPLICATA</p><br><p>Qté&nbsp;Article&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P.U.&nbsp;&nbsp;&nbsp;&nbsp;Total&nbsp;T</p><p>================================================</p><p>&nbsp;&nbsp;1&nbsp;Pull&nbsp;imprimé&nbsp;colibri&nbsp;-&nbsp;S&nbsp;&nbsp;&nbsp;&nbsp;43.08&nbsp;&nbsp;&nbsp;&nbsp;43.08&nbsp;A</p><p>&nbsp;&nbsp;&nbsp;&nbsp;Remise&nbsp;20%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-8.62&nbsp;&nbsp;</p><p>================================================</p><p>TOTAL&nbsp;TTC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;34.46&nbsp;€</p><br><p>Nombre&nbsp;d'articles&nbsp;:&nbsp;1</p><p>Nombre&nbsp;de&nbsp;lignes&nbsp;:&nbsp;1</p><br><p>Code&nbsp;Taux&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TVA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TTC</p><p>================================================</p><p>&nbsp;(A)&nbsp;20.00&nbsp;%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28.72&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.74&nbsp;&nbsp;&nbsp;&nbsp;34.46</p><p>================================================</p><br><p>------------------------------------------------</p><p>Espèces&nbsp;(26/04/2024)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;34.46</p><br><br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KerAwen&nbsp;V&nbsp;2.5.0&nbsp;-&nbsp;b00007&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Service&nbsp;:&nbsp;Yves&nbsp;Berrou&nbsp;(1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Caisse&nbsp;1&nbsp;(1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><br><barcode>                   VJKOKSYVJ                    </barcode><br><p>------------------------------------------------</p><p>John&nbsp;DOE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>------------------------------------------------</p><p>En&nbsp;magasin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>------------------------------------------------</p><br><br><hr><drawer/><br></section>`;
const text = convert(html, options);

// hr -> couper papier
// drawer -> ouvrir tiroir caisse. 
// barcode


//const portions = cutStringIntoPortions(text, 50);
let portions = text.match(/.{1,48}/g);
console.log(portions);
var builder = new StarWebPrintBuilder();
request = '';
request += builder.createInitializationElement();
request += builder.createTextElement({font:'font_b'});
request += builder.createTextElement({codepage:'utf8'});
request += builder.createTextElement({international:'france'});
request += builder.createTextElement({width:1});
request += builder.createTextElement({height:1});
request += builder.createTextElement({characterspace:1});
request += builder.createAlignmentElement({position:'center'});

portions.forEach( ligne => {
  request += builder.createTextElement({data:ligne+'\n'});
})

request += builder.createCutPaperElement({feed:true});
// console.log(request);
sendMessage(request);