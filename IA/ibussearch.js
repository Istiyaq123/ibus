var btn1 = `<button class="ibusButton" onclick="`
var btn2 = `()">`
var btn3 = `</button>&nbsp;&nbsp;&nbsp;`

function allIbusRight1(){
  ibusSearchHistory.innerHTML = btn1+"BrentfordCountyCourt195btn"+btn2+"Brentford, County Court 195"+btn3+btn1+"CharvilleLaneEstate195btn"+btn2+"Charville Lane Estate 195"+btn3+btn1+"WhiteCity207btn"+btn2+"White City 207"+btn3+btn1+"HayesByPass207btn"+btn2+"Hayes By-Pass 207"+btn3+btn1+"ActonHighStreet427btn"+btn2+"Acton, HIGH STREET 427"+btn3+btn1+"Uxbridge427btn"+btn2+"Uxbridge 427"+btn3+btn1+"Shadwell339btn"+btn2+"Shadwell 339"+btn3+btn1+"Leytonstone339btn"+btn2+"Leytonstone 339"+btn3+btn1+"Shadwell100btn"+btn2+"Shadwell 100"+btn3+btn1+"StPauls100btn"+btn2+"St Paul's 100"+btn3+btn1+"MileEndD7btn"+btn2+"Mile End D7"+btn3+btn1+"PoplarAllSaintsD7btn"+btn2+"Poplar, All Saints D7"+btn3+btn1+"CanningTown69btn"+btn2+"Canning Town 69"+btn3+btn1+"WalthamstowCentral69btn"+btn2+"Walthamstow Central 69"+btn3+btn1+"OldStreetStation135btnNew"+btn2+"Old Street, Provost Street 135 (New iBus)"+btn3+btn1+"Crossharbour135btnnew"+btn2+"Crossharbour, Asda 135 (New iBus)"+btn3;
}

function allIbusPlaylists(){
  ibusBtnleft.setAttribute( "onClick", "allIbusLeftPlaylist1();" );
  ibusBtnRight.setAttribute( "onClick", "allIbusRightPlaylist1();" );
  ibusSearchHistory.innerHTML = btn1+"Astrick"+btn2+"*"+btn3+btn1+"Diversion"+btn2+"Diversion"+btn3+btn1+"Waitnew"+btn2+"Bus will Wait here"+btn3+btn1+"DriverChangenew"+btn2+"Driver Change"+btn3+btn1+"CCTV"+btn2+"CCTV"+btn3+btn1+"DestinationChange"+btn2+"Destination Change"+btn3+btn1+"Standing"+btn2+"No Staning"+btn3+btn1+"moveDown"+btn2+"Move Down"+btn3+btn1+"seats"+btn2+"Seats"+btn3+btn1+"BusTerminatesHere"+btn2+"Bus Terminates Here"+btn3;
}