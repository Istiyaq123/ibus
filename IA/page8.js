var smallSpace = '<span class="invisible">.</span>'
var bigSpace = '<span class="invisible">...</span>'
var sSpace = '<span class="invisible">.</span>'
var bSpace = '<span class="invisible">...</span>'

var topTextYes = document.getElementById("topTextYes");
var topTextNo = document.getElementById("topTextNo");

var firstAudio = "https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/S_";
var lastAudio = "_001.mp3";

function ClaphamCommon417btn(){
  routeDestination = "ClaphamCommon417";
  CrystalPalaceBusStation417()
  showDestination.setAttribute( "onClick", "ClaphamCommon417ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "417 to Clapham Common";
}
function CrystalPalace417btn(){
  routeDestination = "CrystalPalace417";
  WingateSquare417()
  showDestination.setAttribute( "onClick", "CrystalPalace417ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "417 to Crystal Palace";
}
function NoakHill294btn(){
  routeDestination = "NoakHill294";
  HaveringPark294()
  showDestination.setAttribute( "onClick", "NoakHill294ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "294 to Noak Hill";
}
function HaveringPark294btn(){
  routeDestination = "HaveringPark294";
  WincantonRoad294()
  showDestination.setAttribute( "onClick", "HaveringPark294ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "294 to Havering Park";
}
function Aldgate343btn(){
  routeDestination = "Aldgate343";
  NewCrossJerninghamRoad343()
  showDestination.setAttribute( "onClick", "Aldgate343ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "343 to Aldgate";
}
function NewCrossGate343btn(){
  routeDestination = "NewCrossGate343";
  AldgateStation343()
  showDestination.setAttribute( "onClick", "NewCrossGate343ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "343 to New Cross Gate";
}
function SouthHarrow258btn(){
  routeDestination = "SouthHarrow258";
  WatfordJunctionStation258()
  showDestination.setAttribute( "onClick", "SouthHarrow258ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "258 to South Harrow";
}
function WatfordJunction258btn(){
  routeDestination = "WatfordJunction258";
  SouthHarrowBusStation258()
  showDestination.setAttribute( "onClick", "WatfordJunction258ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "258 to Watford Junction";
}
function EmersonParkSchool650btn(){
  routeDestination = "EmersonParkSchool650";
  RomfordBusGarage650()
  showDestination.setAttribute( "onClick", "EmersonParkSchool650ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "650 to Emerson Park School";
}
function RomfordBusGarage650btn(){
  routeDestination = "RomfordBusGarage650";
  EmersonParkAcademy650()
  showDestination.setAttribute( "onClick", "RomfordBusGarage650ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "650 to Romford Bus Garage";
}
function NewMaldenFountainRoundabout152btn(){
  routeDestination = "NewMaldenFountainRoundabout152";
  SouthLodgeAvenueYorkshireRoad152()
  showDestination.setAttribute( "onClick", "NewMaldenFountainRoundabout152ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "152 to New Malden, Fountain Roundabout";
}
function PollardsHill152btn(){
  routeDestination = "PollardsHill152";
  WaltonAvenue152()
  showDestination.setAttribute( "onClick", "PollardsHill152ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "152 to Pollards Hill";
}
function Lewisham108btn(){
  routeDestination = "Lewisham108";
  StratfordInternationalStation108()
  showDestination.setAttribute( "onClick", "Lewisham108ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "108 to Lewisham Station";
}
function StratfordInternational108btn(){
  routeDestination = "StratfordInternational108";
  LewishamCentre108()
  showDestination.setAttribute( "onClick", "StratfordInternational108ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "108 to Stratford International";
}
function StratfordInternationalfromCanningTown108btn(){
  routeDestination = "StratfordInternational108";
  CanningTownBusStation108()
  showDestination.setAttribute( "onClick", "StratfordInternational108ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "108 to Stratford International";
}
function CanningTown108btn(){
  routeDestination = "CanningTown108";
  StratfordInternationalStation108()
  showDestination.setAttribute( "onClick", "CanningTown108ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "108 to Canning Town Bus Station";
}
function Brixton351btn(){
  routeDestination = "Brixton351";
  IsleofDogsPoliceStation351()
  showDestination.setAttribute( "onClick", "Brixton351ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "351 to Brixton";
}
function IslandGardens351btn(){
  routeDestination = "IslandGardens351";
  BrixtonStationNR351()
  showDestination.setAttribute( "onClick", "IslandGardens351ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "351 to Cubitt Town, Manchester Road";
}
function StokeNewington276btn(){
  routeDestination = "StokeNewington276";
  GatewaySurgicalCentre276()
  showDestination.setAttribute( "onClick", "StokeNewington276ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "276 to Stoke Newington";
}
function NewhamHospital276btn(){
  routeDestination = "NewhamHospital276";
  StokeNewingtonCommon276()
  showDestination.setAttribute( "onClick", "NewhamHospital276ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "276 to Newham Hospital";
}
function BecktonStation101btn(){
  routeDestination = "BecktonStation101";
  WoodbinePlace101()
  showDestination.setAttribute( "onClick", "BecktonStation101ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "101 to Beckton, Bus Station";
}
function Wanstead101btn(){
  routeDestination = "Wanstead101";
  BecktonBusStation101()
  showDestination.setAttribute( "onClick", "Wanstead101ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "101 to Wanstead";
}
function EastHamNewhamTownHall376btn(){
  routeDestination = "EastHamNewhamTownHall376";
  BecktonBusStation376()
  showDestination.setAttribute( "onClick", "EastHamNewhamTownHall376ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "376 to East Ham, Newham Town Hall";
}
function BecktonStation376btn(){
  routeDestination = "BecktonStation376";
  NewhamTownHall376()
  showDestination.setAttribute( "onClick", "BecktonStation376ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "376 to Beckton, Bus Station";
}
function ElephantCastle363btn(){
  routeDestination = "ElephantCastle363";
  CrystalPalaceParade363()
  showDestination.setAttribute( "onClick", "ElephantCastle363ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "363 to Elephant & Castle";
}
function CrystalPalace363btn(){
  routeDestination = "CrystalPalace363";
  ElephantCastleLondonRoad363()
  showDestination.setAttribute( "onClick", "CrystalPalace363ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "363 to Crystal Palace";
}
function FulhamBroadway11btn(){
  routeDestination = "FulhamBroadway11";
  PrimroseStreet11()
  showDestination.setAttribute( "onClick", "FulhamBroadway11ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "11 to Fulham Broadway";
}
function LiverpoolStreet11btn(){
  routeDestination = "LiverpoolStreet11";
  FulhamTownHall11()
  showDestination.setAttribute( "onClick", "LiverpoolStreet11ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "11 to Liverpool Street";
}
function Debden20btn(){
  routeDestination = "Debden20";
  WalthamstowBusStation20()
  showDestination.setAttribute( "onClick", "Debden20ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "20 to Debden";
}
function WalthamstowCentral20btn(){
  routeDestination = "WalthamstowCentral20";
  TheBroadway20()
  showDestination.setAttribute( "onClick", "WalthamstowCentral20ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "20 to The Broadway";
}
function HarrowH18btn(){
  routeDestination = "HarrowH18";
  HarrowBusStationH18H19()
  showDestination.setAttribute( "onClick", "HarrowH18ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "H18 to Harrow, Bus Station";
}
function HarrowH19btn(){
  routeDestination = "HarrowH19";
  HarrowBusStationlastH18H19()
  showDestination.setAttribute( "onClick", "HarrowH19ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "H19 to Harrow, Bus Station";
}
function OxfordCircusN15btn(){
  routeDestination = "OxfordCircusN15";
  RomfordMarketN15()
  showDestination.setAttribute( "onClick", "OxfordCircusN15ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "N15 to Oxford Circus";
}
function RomfordMarketN15btn(){
  routeDestination = "RomfordMarketN15";
  OxfordCircusStnMargaretStreetN15()
  showDestination.setAttribute( "onClick", "RomfordMarketN15ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "N15 to Romford Market";
}
function MarbleArch30btn(){
  routeDestination = "MarbleArch30";
  HackneyWickTrowbridgeRoad30()
  showDestination.setAttribute( "onClick", "MarbleArch30ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "30 to Marble Arch";
}
function CanningTown147btn(){
  routeDestination = "CanningTown147";
  HainaultStreet147()
  showDestination.setAttribute( "onClick", "CanningTown147ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "147 to Canning Town Bus Station";
}
function Ilford147btn(){
  routeDestination = "Ilford147";
  CanningTownBusStation147()
  showDestination.setAttribute( "onClick", "Ilford147ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "147 to Ilford, Hainault Street";
}
function SurreyQuaysP12btn(){
  routeDestination = "SurreyQuaysP12";
  BrockleyRiseChandosP12()
  showDestination.setAttribute( "onClick", "SurreyQuaysP12ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "P12 to Surrey Quays";
}
function BrockleyRiseP12btn(){
  routeDestination = "BrockleyRiseP12";
  SurreyQuaysShoppingCentreP12()
  showDestination.setAttribute( "onClick", "BrockleyRiseP12ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "P12 to Brockley Rise";
}

function ClaphamCommon417ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "417 to Clapham Junction";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_147_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_CLAPHAM_JUNCTION_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function CrystalPalace417ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "417 to Crystal Palace";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_147_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_CRYSTAL_PALACE_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function NoakHill294ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "294 to Noak Hill";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_294_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_NOAK_HILL_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function HaveringPark294ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "294 to Havering Park";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_294_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_Havering_Park_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function Aldgate343ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "343 to Aldgate";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_343_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_ALDGATE_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function NewCrossGate343ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "343 to New Cross Gate";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_343_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_NEW_CROSS_GATE_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function EmersonParkSchool650ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "650 to Romford Bus Garage";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_650_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_Emerson_PARK_SCHOOL_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function RomfordBusGarage650ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "650 to Romford Bus Garage";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_650_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/S_ROMFORD_BUS_GARAGE_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function PollardsHill152ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "152 to Pollards Hill";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_153_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_POLLARDS_HILL_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function NewMaldenFountainRoundabout152ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="none";
  marquee.style.display = "block";
  marquee.innerHTML = "152 to New Malden, Fountain Roundabout";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_153_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_NEW_MALDEN_FOUNTAIN_ROUNDABOUT_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function Lewisham108ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "108 to Lewisham Station";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_108_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_LEWISHAM_STATION_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function StratfordInternational108ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "108 to Stratford International";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_108_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_STRATFORD_INTERNATIONAL_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function CanningTown108ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "108 to Canning Town Bus Station";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_108_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/S_CANNING_TOWN_BUS_STATION_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function Brixton351ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "351 to Brixton";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_352_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_BRIXTON_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function IslandGardens351ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="none";
  marquee.style.display = "block";
  marquee.innerHTML = "351 to Cubitt Town, Manchester Road";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_352_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_CUBITT_TOWN_MANCHESTER_ROAD_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function StokeNewington276ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "276 to Stoke Newington";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_276_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/S_STOKE_NEWINGTON_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function NewhamHospital276ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "276 to Newham Hospital";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_276_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_NEWHAM_GENERAL_HOSPITAL_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function BecktonStation101ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "101 to Beckton, Bus Station";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_101_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/S_BECKTON_BUS_STATION_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function Wanstead101ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "101 to Wanstead";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_101_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_WANSTEAD_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function EastHamNewhamTownHall376ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="none";
  marquee.style.display = "block";
  marquee.innerHTML = "376 to East Ham, Newham Town Hall";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_376_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_EAST_HAM_NEWHAM_TOWN_HALL_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function BecktonStation376ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "376 to Beckton, Bus Station";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_376_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/S_BECKTON_BUS_STATION_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function ElephantCastle363ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="none";
  marquee.style.display = "block";
  marquee.innerHTML = "363 to Elephant & Castle";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_363_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_ELEPHANT_N_CASTLE_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function CrystalPalace363ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "363 to Crystal Palace";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_363_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_CRYSTAL_PALACE_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function FulhamBroadway11ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "11 to Fulham Broadway";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_11_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_FULHAM_BROADWAY_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function LiverpoolStreet11ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "11 to Liverpool Street";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_11_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_LIVERPOOL_STREET_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function Debden20ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "20 to Debden";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_20_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_DEBDEN_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function WalthamstowCentral20ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "20 to Walthamstow Central";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_20_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_WALTHAMSTOW_CENTRAL_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function HarrowH18ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "H18 to Harrow, Bus Station";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_H18_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_HARROW_BUS_STATION_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function HarrowH19ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "H19 to Harrow, Bus Station";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_H19_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_HARROW_BUS_STATION_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function OxfordCircusN15ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "N15 to Oxford Circus";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_N15_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_OXFORD_CIRCUS_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function RomfordMarketN15ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "N15 to Romford Market";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_N15_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_ROMFORD_MARKET_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function MarbleArch30ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "30 to Marble Arch";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_30_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_MARBLE_ARCH_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function CanningTown147ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "147 to Canning Town Bus Station";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_147_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/S_CANNING_TOWN_BUS_STATION_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function Ilford147ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "147 to Ilford, Hainault Street";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_147_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_Ilford_Hainault_Street_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function BrockleyRiseP12ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "P12 to Brockley Rise";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_P12_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_Brockley_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function SurreyQuaysP12ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
    DestinationTextNewIbus();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "P12 to Brockley Rise";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/R_P12_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/Buses/IBus%20Announcements/D_Brockley_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}

function CrystalPalaceBusStation417(){
  getRidOfDestination()
  CrystalPalaceBusStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "CrystalPalaceBusStation417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "CrystalPalaceBusStation417Audio();" );
  }
}
function CrystalPalaceBusStation417Audio(){
  CrystalPalaceBusStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "WestowHill417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CrystalPalaceParade417(){
  getRidOfDestination()
  CrystalPalaceParade()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "CrystalPalaceParade417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "CrystalPalaceParade417Audio();" );
  }
}
function CrystalPalaceParade417Audio(){
  CrystalPalaceParadeAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function WestowHill417(){
  getRidOfDestination()
  WestowHill()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "WestowHill417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "WestowHill417Audio();" );
  }
}
function WestowHill417Audio(){
  WestowHillAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "WestowStreet417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "CrystalPalaceParade417();" );
  }
}
function WestowStreet417(){
  getRidOfDestination()
  WestowStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "WestowStreet417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "WestowStreet417Audio();" );
  }
}
function WestowStreet417Audio(){
  WestowStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "GipsyHillPoliceStation417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function GipsyHillPoliceStation417(){
  getRidOfDestination()
  GipsyHillPoliceStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "GipsyHillPoliceStation417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "GipsyHillPoliceStation417Audio();" );
  }
}
function GipsyHillPoliceStation417Audio(){
  GipsyHillPoliceStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RockmountRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function RockmountRoad417(){
  getRidOfDestination()
  RockmountRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RockmountRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RockmountRoad417Audio();" );
  }
}
function RockmountRoad417Audio(){
  RockmountRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "HermitageRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "WestowHill417();" );
  }
}
function HermitageRoad417(){
  getRidOfDestination()
  HermitageRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "HermitageRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "HermitageRoad417Audio();" );
  }
}
function HermitageRoad417Audio(){
  HermitageRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "SaltersHill417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RockmountRoad417();" );
  }
}
function SaltersHill417(){
  getRidOfDestination()
  SaltersHill()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "SaltersHill417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "SaltersHill417Audio();" );
  }
}
function SaltersHill417Audio(){
  SaltersHillAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "TivoliRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "HermitageRoad417();" );
  }
}
function NorwoodSchool417(){
  getRidOfDestination()
  NorwoodSchool()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "NorwoodSchool417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "NorwoodSchool417Audio();" );
  }
}
function NorwoodSchool417Audio(){
  NorwoodSchoolAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "SaltersHill417();" );
  }
}
function TivoliRoad417(){
  getRidOfDestination()
  TivoliRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "TivoliRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "TivoliRoad417Audio();" );
  }
}
function TivoliRoad417Audio(){
  TivoliRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "CrownPoint417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "NorwoodSchool417();" );
  }
}
function CrownPoint417(){
  getRidOfDestination()
  CrownPoint()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "CrownPoint417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "CrownPoint417Audio();" );
  }
}
function CrownPoint417Audio(){
  CrownPointAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RyecroftRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CrownLaneCrownPoint417(){
  getRidOfDestination()
  CrownLaneCrownPointd()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "CrownLaneCrownPoint417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "CrownLaneCrownPoint417Audio();" );
  }
}
function CrownLaneCrownPoint417Audio(){
  CrownLaneCrownPointAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "TivoliRoad417();" );
  }
}
function RyecroftRoad417(){
  getRidOfDestination()
  RyecroftRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RyecroftRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RyecroftRoad417Audio();" );
  }
}
function RyecroftRoad417Audio(){
  RyecroftRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamCommonNorthLeighamCrtRd417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "CrownLaneCrownPoint417();" );
  }
}
function StreathamCommonNorthLeighamCrtRd417(){
  getRidOfDestination()
  StreathamCommonNorthLeighamCrtRd()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamCommonNorthLeighamCrtRd417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamCommonNorthLeighamCrtRd417Audio();" );
  }
}
function StreathamCommonNorthLeighamCrtRd417Audio(){
  StreathamCommonNorthLeighamCrtRdAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadStreathamCommon417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LeighamCourtRoadStreathamCommon417(){
  getRidOfDestination()
  LeighamCourtRoadStreathamCommon()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadStreathamCommon417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadStreathamCommon417Audio();" );
  }
}
function LeighamCourtRoadStreathamCommon417Audio(){
  LeighamCourtRoadStreathamCommonAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "JuliansPrimarySchool417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RyecroftRoad417();" );
  }
}
function LeafGrove417(){
  getRidOfDestination()
  LeafGrove()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LeafGrove417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeafGrove417Audio();" );
  }
}
function LeafGrove417Audio(){
  LeafGroveAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadStreathamCommon417();" );
  }
}
function JuliansPrimarySchool417(){
  getRidOfDestination()
  JuliansPrimarySchool()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "JuliansPrimarySchool417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "JuliansPrimarySchool417Audio();" );
  }
}
function JuliansPrimarySchool417Audio(){
  JuliansPrimarySchoolAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RockhamptonRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeafGrove417();" );
  }
}
function RockhamptonRoad417(){
  getRidOfDestination()
  RockhamptonRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RockhamptonRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RockhamptonRoad417Audio();" );
  }
}
function RockhamptonRoad417Audio(){
  RockhamptonRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StPetersChurch417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StPetersChurch417(){
  getRidOfDestination()
  StPetersChurch()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StPetersChurch417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StPetersChurch417Audio();" );
  }
}
function StPetersChurch417Audio(){
  StPetersChurchAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ValleyRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "JuliansPrimarySchool417();" );
  }
}
function ValleyRoad417(){
  getRidOfDestination()
  ValleyRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ValleyRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ValleyRoad417Audio();" );
  }
}
function ValleyRoad417Audio(){
  ValleyRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "DunravenSchool417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LeighamCourtRoadValleyRoad417(){
  getRidOfDestination()
  LeighamCourtRoadValleyRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadValleyRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadValleyRoad417Audio();" );
  }
}
function LeighamCourtRoadValleyRoad417Audio(){
  LeighamCourtRoadValleyRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StPetersChurch417();" );
  }
}
function DunravenSchool417(){
  getRidOfDestination()
  DunravenSchool()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "DunravenSchool417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "DunravenSchool417Audio();" );
  }
}
function DunravenSchool417Audio(){
  DunravenSchoolAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "MountearlGardens417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadValleyRoad417();" );
  }
}
function MountearlGardens417(){
  getRidOfDestination()
  MountearlGardens()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "MountearlGardens417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "MountearlGardens417Audio();" );
  }
}
function MountearlGardens417Audio(){
  MountearlGardensAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LeighamCourtRdStreathamHillStn417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StreathamClose417(){
  getRidOfDestination()
  StreathamClose()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamClose417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamClose417Audio();" );
  }
}
function StreathamClose417Audio(){
  StreathamCloseAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "DunravenSchool417();" );
  }
}
function LeighamCourtRdStreathamHillStn417(){
  getRidOfDestination()
  LeighamCourtRdStreathamHillStn()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LeighamCourtRdStreathamHillStn417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeighamCourtRdStreathamHillStn417Audio();" );
  }
}
function LeighamCourtRdStreathamHillStn417Audio(){
  LeighamCourtRdStreathamHillStnAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamHillStnStreathamHill417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamClose417();" );
  }
}
function StreathamHillStnStreathamHill417(){
  getRidOfDestination()
  StreathamHillStnStreathamHill()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamHillStnStreathamHill417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamHillStnStreathamHill417Audio();" );
  }
}
function StreathamHillStnStreathamHill417Audio(){
  StreathamHillStnStreathamHillAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "BarrhillRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeighamCourtRdStreathamHillStn417();" );
  }
}
function BarrhillRoad417(){
  getRidOfDestination()
  BarrhillRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "BarrhillRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "BarrhillRoad417Audio();" );
  }
}
function BarrhillRoad417Audio(){
  BarrhillRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "TelfordAvenue417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function TelfordAvenue417(){
  getRidOfDestination()
  TelfordAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "TelfordAvenue417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "TelfordAvenue417Audio();" );
  }
}
function TelfordAvenue417Audio(){
  TelfordAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ChristchurchRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamHillStnStreathamHill417();" );
  }
}
function ChristchurchRoad417(){
  getRidOfDestination()
  ChristchurchRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ChristchurchRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ChristchurchRoad417Audio();" );
  }
}
function ChristchurchRoad417Audio(){
  ChristchurchRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamPlace417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StreathamHillChristchurchRoad417(){
  getRidOfDestination()
  StreathamHillChristchurchRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamHillChristchurchRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamHillChristchurchRoad417Audio();" );
  }
}
function StreathamHillChristchurchRoad417Audio(){
  StreathamHillChristchurchRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "TelfordAvenue417();" );
  }
}
function StreathamPlace417(){
  getRidOfDestination()
  StreathamPlace()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamPlace417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamPlace417Audio();" );
  }
}
function StreathamPlace417Audio(){
  StreathamPlaceAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "AtkinsRoadNewParkRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamHillChristchurchRoad417();" );
  }
}
function AtkinsRoadNewParkRoad417(){
  getRidOfDestination()
  AtkinsRoadNewParkRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "AtkinsRoadNewParkRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "AtkinsRoadNewParkRoad417Audio();" );
  }
}
function AtkinsRoadNewParkRoad417Audio(){
  AtkinsRoadNewParkRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "KingsAvenueAtkinsRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamPlace417();" );
  }
}
function KingsAvenueAtkinsRoad417(){
  getRidOfDestination()
  KingsAvenueAtkinsRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "KingsAvenueAtkinsRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "KingsAvenueAtkinsRoad417Audio();" );
  }
}
function KingsAvenueAtkinsRoad417Audio(){
  KingsAvenueAtkinsRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ThorncliffeRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "AtkinsRoadNewParkRoad417();" );
  }
}
function ThorncliffeRoad417(){
  getRidOfDestination()
  ThorncliffeRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ThorncliffeRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ThorncliffeRoad417Audio();" );
  }
}
function ThorncliffeRoad417Audio(){
  ThorncliffeRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ClarenceAvenue417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "KingsAvenueAtkinsRoad417();" );
  }
}
function RoseberyRoad417(){
  getRidOfDestination()
  RoseberyRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RoseberyRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RoseberyRoad417Audio();" );
  }
}
function RoseberyRoad417Audio(){
  RoseberyRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ThorncliffeRoad417();" );
  }
}
function ClarenceAvenue417(){
  getRidOfDestination()
  ClarenceAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ClarenceAvenue417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ClarenceAvenue417Audio();" );
  }
}
function ClarenceAvenue417Audio(){
  ClarenceAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LyhamRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RoseberyRoad417();" );
  }
}
function LyhamRoad417(){
  getRidOfDestination()
  LyhamRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LyhamRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LyhamRoad417Audio();" );
  }
}
function LyhamRoad417Audio(){
  LyhamRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "BedfordRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ClarenceAvenue417();" );
  }
}
function BedfordRoad417(){
  getRidOfDestination()
  BedfordRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "BedfordRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "BedfordRoad417Audio();" );
  }
}
function BedfordRoad417Audio(){
  BedfordRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ParkHill417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LyhamRoad417();" );
  }
}
function ParkHill417(){
  getRidOfDestination()
  ParkHill()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ParkHill417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ParkHill417Audio();" );
  }
}
function ParkHill417Audio(){
  ParkHillAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ClaphamCommonStation417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "BedfordRoad417();" );
  }
}
function ClaphamCommonStation417(){
  getRidOfDestination()
  ClaphamCommonStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ClaphamCommonStation417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ClaphamCommonStation417Audio();" );
  }
}
function ClaphamCommonStation417Audio(){
  ClaphamCommonStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LongRoadClaphamCommon417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ParkHill417();" );
  }
}
function LongRoadClaphamCommon417(){
  getRidOfDestination()
  LongRoadClaphamCommon()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LongRoadClaphamCommon417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LongRoadClaphamCommon417Audio();" );
  }
}
function LongRoadClaphamCommon417Audio(){
  LongRoadClaphamCommonAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "OmnibusClapham417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WingateSquare417(){
  getRidOfDestination()
  WingateSquare()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "WingateSquare417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "WingateSquare417Audio();" );
  }
}
function WingateSquare417Audio(){
  WingateSquareAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ClaphamCommonStation417();" );
  }
}
function OmnibusClapham417(){
  getRidOfDestination()
  OmnibusClapham()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "OmnibusClapham417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "OmnibusClapham417Audio();" );
  }
}
function OmnibusClapham417Audio(){
  OmnibusClaphamAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}

function HaveringPark294(){
  getRidOfDestination()
  HaveringPark()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HaveringPark294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HaveringPark294Audio();" );
  }
}
function HaveringPark294Audio(){
  HaveringParkAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HaveringParktwo294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function HaveringParktwo294(){
  getRidOfDestination()
  HaveringPark()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HaveringParktwo294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HaveringParktwo294Audio();" );
  }
}
function HaveringParktwo294Audio(){
  HaveringParkAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CharlotteGardens294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CharlotteGardens294(){
  getRidOfDestination()
  CharlotteGardens()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CharlotteGardens294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CharlotteGardens294Audio();" );
  }
}
function CharlotteGardens294Audio(){
  CharlotteGardensAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "PortmoreGardens294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CarterDrive294(){
  getRidOfDestination()
  CarterDrive()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CarterDrive294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CarterDrive294Audio();" );
  }
}
function CarterDrive294Audio(){
  CarterDriveAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "StaplefordGardens294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HaveringPark294();" );
  }
}
function PortmoreGardens294(){
  getRidOfDestination()
  PortmoreGardens()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "PortmoreGardens294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "PortmoreGardens294Audio();" );
  }
}
function PortmoreGardens294Audio(){
  PortmoreGardensAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "StaplefordGardens294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CarterDrive294();" );
  }
}
function StaplefordGardens294(){
  getRidOfDestination()
  StaplefordGardens()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "StaplefordGardens294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "StaplefordGardens294Audio();" );
  }
}
function StaplefordGardens294Audio(){
  StaplefordGardensAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "FrintonRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "PortmoreGardens294();" );
  }
}
function FrintonRoad294(){
  getRidOfDestination()
  FrintonRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "FrintonRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "FrintonRoad294Audio();" );
  }
}
function FrintonRoad294Audio(){
  FrintonRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "GobionsFarm294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "StaplefordGardens294();" );
  }
}
function GobionsFarm294(){
  getRidOfDestination()
  GobionsFarm()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "GobionsFarm294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "GobionsFarm294Audio();" );
  }
}
function GobionsFarm294Audio(){
  GobionsFarmAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WhiteHartLane294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HogHillRoad294(){
  getRidOfDestination()
  HogHillRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HogHillRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HogHillRoad294Audio();" );
  }
}
function HogHillRoad294Audio(){
  HogHillRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CollierRowClockhouseLane294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "FrintonRoad294();" );
  }
}
function WhiteHartLane294(){
  getRidOfDestination()
  WhiteHartLane()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WhiteHartLane294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WhiteHartLane294Audio();" );
  }
}
function WhiteHartLane294Audio(){
  WhiteHartLaneAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CollierRowClockhouseLane294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HogHillRoad294();" );
  }
}
function CollierRowClockhouseLane294(){
  getRidOfDestination()
  CollierRowClockhouseLane()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CollierRowClockhouseLane294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CollierRowClockhouseLane294Audio();" );
  }
}
function CollierRowClockhouseLane294Audio(){
  CollierRowClockhouseLaneAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CollierRowRoundaboutRexClose294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CollierRowRoundaboutRexClose294(){
  getRidOfDestination()
  CollierRowRoundaboutRexClose()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CollierRowRoundaboutRexClose294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CollierRowRoundaboutRexClose294Audio();" );
  }
}
function CollierRowRoundaboutRexClose294Audio(){
  CollierRowRoundaboutRexCloseAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HulseAvenue294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HulseAvenue294(){
  getRidOfDestination()
  HulseAvenue()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HulseAvenue294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HulseAvenue294Audio();" );
  }
}
function HulseAvenue294Audio(){
  HulseAvenueAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "MowbraysRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function MowbraysRoad294(){
  getRidOfDestination()
  MowbraysRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "MowbraysRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "MowbraysRoad294Audio();" );
  }
}
function MowbraysRoad294Audio(){
  MowbraysRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HainaultRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function MelvilleRoad294(){
  getRidOfDestination()
  MelvilleRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "MelvilleRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "MelvilleRoad294Audio();" );
  }
}
function MelvilleRoad294Audio(){
  MelvilleRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ParklandsSchool294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WhiteHartLane294();" );
  }
}
function CollierRowLibrary294(){
  getRidOfDestination()
  CollierRowLibrary()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "LowshoeLane294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CollierRowLibrary294Audio();" );
  }
}
function CollierRowLibrary294Audio(){
  CollierRowLibraryAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ParklandsSchool294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "MelvilleRoad294();" );
  }
}
function LowshoeLane294(){
  getRidOfDestination()
  LowshoeLane()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "LowshoeLane294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "LowshoeLane294Audio();" );
  }
}
function LowshoeLane294Audio(){
  LowshoeLaneAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ParklandsSchool294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CollierRowLibrary294();" );
  }
}
function HillfootRoad294(){
  getRidOfDestination()
  HillfootRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HillfootRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HillfootRoad294Audio();" );
  }
}
function HillfootRoad294Audio(){
  HillfootRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ParklandsSchool294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "LowshoeLane294();" );
  }
}
function HainaultRoad294(){
  getRidOfDestination()
  HainaultRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HainaultRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HainaultRoad294Audio();" );
  }
}
function HainaultRoad294Audio(){
  HainaultRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ParklandsSchool294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HillfootRoad294();" );
  }
}
function ParklandsSchool294(){
  getRidOfDestination()
  ParklandsSchool()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ParklandsSchool294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "ParklandsSchool294Audio();" );
  }
}
function ParklandsSchool294Audio(){
  ParklandsSchoolAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "RomfordBusGarage294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HainaultRoad294();" );
  }
}
function CedarRoad294(){
  getRidOfDestination()
  CedarRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CedarRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CedarRoad294Audio();" );
  }
}
function CedarRoad294Audio(){
  CedarRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "TheAvenue294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "ParklandsSchool294();" );
  }
}
function RomfordBusGarage294(){
  getRidOfDestination()
  RomfordBusGarage()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "RomfordBusGarage294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "RomfordBusGarage294Audio();" );
  }
}
function RomfordBusGarage294Audio(){
  RomfordBusGarageAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "TheAvenue294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CedarRoad294();" );
  }
}
function TheAvenue294(){
  getRidOfDestination()
  TheAvenue()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "TheAvenue294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "TheAvenue294Audio();" );
  }
}
function TheAvenue294Audio(){
  TheAvenueAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "RomfordMarket294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "RomfordBusGarage294();" );
  }
}
function RomfordMarket294(){
  getRidOfDestination()
  RomfordMarket()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "RomfordMarket294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "RomfordMarket294Audio();" );
  }
}
function RomfordMarket294Audio(){
  RomfordMarketAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "MercuryGardens294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "TheAvenue294();" );
  }
}
function MercuryGardens294(){
  getRidOfDestination()
  MercuryGardens()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "MercuryGardens294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "MercuryGardens294Audio();" );
  }
}
function MercuryGardens294Audio(){
  MercuryGardensAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WesternRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WesternRoad294(){
  getRidOfDestination()
  WesternRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WesternRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WesternRoad294Audio();" );
  }
}
function WesternRoad294Audio(){
  WesternRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "RomfordStation294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "RomfordMarket294();" );
  }
}
function RomfordStation294(){
  getRidOfDestination()
  RomfordStation()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "RomfordStation294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "RomfordStation294Audio();" );
  }
}
function RomfordStation294Audio(){
  RomfordStationAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ThurloeGardens294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WesternRoad294();" );
  }
}
function ThurloeGardens294(){
  getRidOfDestination()
  ThurloeGardens()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ThurloeGardens294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "ThurloeGardens294Audio();" );
  }
}
function ThurloeGardens294Audio(){
  ThurloeGardensAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "SouthStreet294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BrentwoodRoad294(){
  getRidOfDestination()
  BrentwoodRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "BrentwoodRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "BrentwoodRoad294Audio();" );
  }
}
function BrentwoodRoad294Audio(){
  BrentwoodRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "AlbertRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "RomfordStation294();" );
  }
}
function SouthStreet294(){
  getRidOfDestination()
  SouthStreet()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "SouthStreet294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "SouthStreet294Audio();" );
  }
}
function SouthStreet294Audio(){
  SouthStreetAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "AlbertRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "BrentwoodRoad294();" );
  }
}
function AlbertRoad294(){
  getRidOfDestination()
  AlbertRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "AlbertRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "AlbertRoad294Audio();" );
  }
}
function AlbertRoad294Audio(){
  AlbertRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "PrincesRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "SouthStreet294();" );
  }
}
function PrincesRoad294(){
  getRidOfDestination()
  PrincesRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "PrincesRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "PrincesRoad294Audio();" );
  }
}
function PrincesRoad294Audio(){
  PrincesRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "FrancesBardsleyAcademy294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "AlbertRoad294();" );
  }
}
function FrancesBardsleyAcademy294(){
  getRidOfDestination()
  FrancesBardsleyAcademy()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "FrancesBardsleyAcademy294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "FrancesBardsleyAcademy294Audio();" );
  }
}
function FrancesBardsleyAcademy294Audio(){
  FrancesBardsleyAcademyAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CranhamRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "PrincesRoad294();" );
  }
}
function CranhamRoad294(){
  getRidOfDestination()
  CranhamRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CranhamRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CranhamRoad294Audio();" );
  }
}
function CranhamRoad294Audio(){
  CranhamRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "SalisburyRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "FrancesBardsleyAcademy294();" );
  }
}
function SalisburyRoad294(){
  getRidOfDestination()
  SalisburyRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "SalisburyRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "SalisburyRoad294Audio();" );
  }
}
function SalisburyRoad294Audio(){
  SalisburyRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "TheDrillRoundabout294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CranhamRoad294();" );
  }
}
function TheDrillRoundabout294(){
  getRidOfDestination()
  TheDrillRoundabout()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "TheDrillRoundabout294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "TheDrillRoundabout294Audio();" );
  }
}
function TheDrillRoundabout294Audio(){
  TheDrillRoundaboutAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "GideaParkStation294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "SalisburyRoad294();" );
  }
}
function GideaParkStation294(){
  getRidOfDestination()
  GideaParkStation()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "GideaParkStation294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "GideaParkStation294Audio();" );
  }
}
function GideaParkStation294Audio(){
  GideaParkStationAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "UpperBrentwoodRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "TheDrillRoundabout294();" );
  }
}
function UpperBrentwoodRoad294(){
  getRidOfDestination()
  UpperBrentwoodRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "UpperBrentwoodRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "UpperBrentwoodRoad294Audio();" );
  }
}
function UpperBrentwoodRoad294Audio(){
  UpperBrentwoodRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "NorthumberlandAvenue294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function NorthumberlandAvenue294(){
  getRidOfDestination()
  NorthumberlandAvenue()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "NorthumberlandAvenue294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "NorthumberlandAvenue294Audio();" );
  }
}
function NorthumberlandAvenue294Audio(){
  NorthumberlandAvenueAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HardleyCrescent294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WestmorelandAvenue294(){
  getRidOfDestination()
  WestmorelandAvenue()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WestmorelandAvenue294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WestmorelandAvenue294Audio();" );
  }
}
function WestmorelandAvenue294Audio(){
  WestmorelandAvenueAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ArdleighGreenSchool294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "GideaParkStation294();" );
  }
}
function HardleyCrescent294(){
  getRidOfDestination()
  HardleyCrescent()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HardleyCrescent294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HardleyCrescent294Audio();" );
  }
}
function HardleyCrescent294Audio(){
  HardleyCrescentAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ArdleighGreenSchool294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WestmorelandAvenue294();" );
  }
}
function ArdleighGreenSchool294(){
  getRidOfDestination()
  ArdleighGreenSchool()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ArdleighGreenSchool294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "ArdleighGreenSchool294Audio();" );
  }
}
function ArdleighGreenSchool294Audio(){
  ArdleighGreenSchoolAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "SouthendArterialRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HardleyCrescent294();" );
  }
}
function SouthendArterialRoad294(){
  getRidOfDestination()
  SouthendArterialRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "SouthendArterialRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "SouthendArterialRoad294Audio();" );
  }
}
function SouthendArterialRoad294Audio(){
  SouthendArterialRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "RosslynAvenue294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "ArdleighGreenSchool294();" );
  }
}
function RosslynAvenue294(){
  getRidOfDestination()
  RosslynAvenue()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "RosslynAvenue294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "RosslynAvenue294Audio();" );
  }
}
function RosslynAvenue294Audio(){
  RosslynAvenueAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "StPetersChurch294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "SouthendArterialRoad294();" );
  }
}
function RecreationAvenue294(){
  getRidOfDestination()
  RecreationAvenue()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "RecreationAvenue294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "RecreationAvenue294Audio();" );
  }
}
function RecreationAvenue294Audio(){
  RecreationAvenueAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HaroldWoodStation294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "RosslynAvenue294();" );
  }
}
function StPetersChurch294(){
  getRidOfDestination()
  StPetersChurch()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "StPetersChurch294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "StPetersChurch294Audio();" );
  }
}
function StPetersChurch294Audio(){
  StPetersChurchAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HaroldWoodStation294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "RecreationAvenue294();" );
  }
}
function HaroldWoodStation294(){
  getRidOfDestination()
  HaroldWoodStation()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HaroldWoodStation294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HaroldWoodStation294Audio();" );
  }
}
function HaroldWoodStation294Audio(){
  HaroldWoodStationAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ArundelRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "StPetersChurch294();" );
  }
}
function ArundelRoad294(){
  getRidOfDestination()
  ArundelRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ArundelRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "ArundelRoad294Audio();" );
  }
}
function ArundelRoad294Audio(){
  ArundelRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "StNeotsRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HaroldWoodStation294();" );
  }
}
function StNeotsRoad294(){
  getRidOfDestination()
  StNeotsRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "StNeotsRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "StNeotsRoad294Audio();" );
  }
}
function StNeotsRoad294Audio(){
  StNeotsRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CamborneAvenue294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CamborneAvenue294(){
  getRidOfDestination()
  CamborneAvenue()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CamborneAvenue294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CamborneAvenue294Audio();" );
  }
}
function CamborneAvenue294Audio(){
  CamborneAvenueAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "KingsbridgeRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "ArundelRoad294();" );
  }
}
function KingsbridgeRoad294(){
  getRidOfDestination()
  KingsbridgeRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "KingsbridgeRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "KingsbridgeRoad294Audio();" );
  }
}
function KingsbridgeRoad294Audio(){
  KingsbridgeRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HaroldHillCommunityCentre294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CamborneAvenue294();" );
  }
}
function HaroldHillCommunityCentre294(){
  getRidOfDestination()
  HaroldHillCommunityCentre()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HaroldHillCommunityCentre294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HaroldHillCommunityCentre294Audio();" );
  }
}
function HaroldHillCommunityCentre294Audio(){
  HaroldHillCommunityCentreAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CentralParkLeisureCentre294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "KingsbridgeRoad294();" );
  }
}
function CentralParkLeisureCentre294(){
  getRidOfDestination()
  CentralParkLeisureCentre()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CentralParkLeisureCentre294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CentralParkLeisureCentre294Audio();" );
  }
}
function CentralParkLeisureCentre294Audio(){
  CentralParkLeisureCentreAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "BrooksideSchool294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HaroldHillCommunityCentre294();" );
  }
}
function BrooksideSchool294(){
  getRidOfDestination()
  BrooksideSchool()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "BrooksideSchool294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "BrooksideSchool294Audio();" );
  }
}
function BrooksideSchool294Audio(){
  BrooksideSchoolAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "LindfieldRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CentralParkLeisureCentre294();" );
  }
}
function LindfieldRoad294(){
  getRidOfDestination()
  LindfieldRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "LindfieldRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "LindfieldRoad294Audio();" );
  }
}
function LindfieldRoad294Audio(){
  LindfieldRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WigtonWay294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HarknessClose294(){
  getRidOfDestination()
  HarknessClose()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WigtonWay294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HarknessClose294Audio();" );
  }
}
function HarknessClose294Audio(){
  HarknessCloseAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WhitchurchRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "BrooksideSchool294();" );
  }
}
function WigtonWay294(){
  getRidOfDestination()
  WigtonWay()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WigtonWay294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WigtonWay294Audio();" );
  }
}
function WigtonWay294Audio(){
  WigtonWayAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WhitchurchRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HarknessClose294();" );
  }
}
function WhitchurchRoad294(){
  getRidOfDestination()
  WhitchurchRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WhitchurchRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WhitchurchRoad294Audio();" );
  }
}
function WhitchurchRoad294Audio(){
  WigtonWayAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "PrioryRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function PrioryRoad294(){
  getRidOfDestination()
  PrioryRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "PrioryRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "PrioryRoad294Audio();" );
  }
}
function PrioryRoad294Audio(){
  PrioryRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WincantonRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function TeesDrive294(){
  getRidOfDestination()
  TeesDrive()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "TeesDrive294Audio();" );
  }
}
function TeesDrive294Audio(){
  TeesDriveAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WigtonWay294();" );
  }
}
function TroopersDrive294(){
  getRidOfDestination()
  TroopersDrive()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "TroopersDrive294Audio();" );
  }
}
function TroopersDrive294Audio(){
  TroopersDriveAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "TeesDrive294();" );
  }
}
function AshbourneRoad294(){
  getRidOfDestination()
  AshbourneRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "AshbourneRoad294Audio();" );
  }
}
function AshbourneRoad294Audio(){
  AshbourneRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "TroopersDrive294();" );
  }
}
function WincantonRoadtwo294(){
  getRidOfDestination()
  WincantonRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WincantonRoadtwo294Audio();" );
  }
}
function WincantonRoadtwo294Audio(){
  WincantonRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "AshbourneRoad294();" );
  }
}
function CummingsHallLane294(){
  getRidOfDestination()
  CummingsHallLane()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CummingsHallLane294Audio();" );
  }
}
function CummingsHallLane294Audio(){
  CummingsHallLaneAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WincantonRoadtwo294();" );
  }
}
function WincantonRoad294(){
  getRidOfDestination()
  WincantonRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WincantonRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WincantonRoad294Audio();" );
  }
}
function WincantonRoad294Audio(){
  WincantonRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CummingsHallLane294();" );
  }
}

function AldgateStation343(){
  getRidOfDestination()
  AldgateStation()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "AldgateStation343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "AldgateStation343Audio();" );
  }
}
function AldgateStation343Audio(){
  AldgateStationAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "Minories343();" );
  }
}
function Minories343(){
  getRidOfDestination()
  Minories()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "Minories343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "Minories343Audio();" );
  }
}
function Minories343Audio(){
  MinoriesAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "TowerHillTowerGatewayStation343();" );
  }
}
function TowerHillTowerGatewayStation343(){
  getRidOfDestination()
  TowerHillTowerGatewayStation()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "TowerHillTowerGatewayStation343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "TowerHillTowerGatewayStation343Audio();" );
  }
}
function TowerHillTowerGatewayStation343Audio(){
  TowerHillTowerGatewayStationAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "TowerBridge343();" );
  }
}
function TowerGatewayStation343(){
  getRidOfDestination()
  TowerGatewayStation()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "TowerGatewayStation343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "TowerGatewayStation343Audio();" );
  }
}
function TowerGatewayStation343Audio(){
  TowerGatewayStationAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "AldgateStation343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "UnicornTheatre343();" );
  }
}
function TowerBridge343(){
  getRidOfDestination()
  TowerBridge()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "TowerBridge343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "TowerBridge343Audio();" );
  }
}
function TowerBridge343Audio(){
  TowerBridgeAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "TowerGatewayStation343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "UnicornTheatre343();" );
  }
}
function UnicornTheatre343(){
  getRidOfDestination()
  UnicornTheatre()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "UnicornTheatre343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "UnicornTheatre343Audio();" );
  }
}
function UnicornTheatre343Audio(){
  UnicornTheatreAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "TowerBridge343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "LondonBridgeStation343();" );
  }
}
function AbbotsLane343(){
  getRidOfDestination()
  AbbotsLane()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "AbbotsLane343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "AbbotsLane343Audio();" );
  }
}
function AbbotsLane343Audio(){
  AbbotsLaneAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "UnicornTheatre343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HaysGalleria343(){
  getRidOfDestination()
  HaysGalleria()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "HaysGalleria343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "HaysGalleria343Audio();" );
  }
}
function HaysGalleria343Audio(){
  HaysGalleriaAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "AbbotsLane343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SouthwarkStreet343();" );
  }
}
function LondonBridgeStation343(){
  getRidOfDestination()
  LondonBridgeStation()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "LondonBridgeStation343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "LondonBridgeStation343Audio();" );
  }
}
function LondonBridgeStation343Audio(){
  LondonBridgeStationAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "HaysGalleria343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SouthwarkStreet343();" );
  }
}
function SouthwarkStreet343(){
  getRidOfDestination()
  SouthwarkStreet()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "SouthwarkStreet343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SouthwarkStreet343Audio();" );
  }
}
function SouthwarkStreet343Audio(){
  SouthwarkStreetAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "UnionStreet343();" );
  }
}
function UnionStreet343(){
  getRidOfDestination()
  UnionStreet()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "UnionStreet343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "UnionStreet343Audio();" );
  }
}
function UnionStreet343Audio(){
  UnionStreetAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "LondonBridgeStation343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "BoroughStation343();" );
  }
}
function BoroughStation343(){
  getRidOfDestination()
  BoroughStation()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "BoroughStation343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "BoroughStation343Audio();" );
  }
}
function BoroughStation343Audio(){
  BoroughStationAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "UnionStreet343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "InnerLondonCrownCourt343();" );
  }
}
function InnerLondonCrownCourt343(){
  getRidOfDestination()
  InnerLondonCrownCourt()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "InnerLondonCrownCourt343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "InnerLondonCrownCourt343Audio();" );
  }
}
function InnerLondonCrownCourt343Audio(){
  InnerLondonCrownCourtAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "BoroughStation343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "ElephantCastleNewingtonCauseway343();" );
  }
}
function ElephantCastleNewingtonCauseway343(){
  getRidOfDestination()
  ElephantCastleNewingtonCauseway()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "ElephantCastleNewingtonCauseway343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "ElephantCastleNewingtonCauseway343Audio();" );
  }
}
function ElephantCastleNewingtonCauseway343Audio(){
  ElephantCastleNewingtonCausewayAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "InnerLondonCrownCourt343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "ElephantCastleStation343();" );
  }
}
function ElephantCastleStation343(){
  getRidOfDestination()
  ElephantCastleStation()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "ElephantCastleStation343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "ElephantCastleStation343Audio();" );
  }
}
function ElephantCastleStation343Audio(){
  ElephantCastleStationAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "ElephantCastleNewingtonCauseway343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "ElephantPark343();" );
  }
}
function HamptonStreet343(){
  getRidOfDestination()
  HamptonStreet()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "HamptonStreet343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "HamptonStreet343Audio();" );
  }
}
function HamptonStreet343Audio(){
  HamptonStreetAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "ElephantCastleStation343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "LarcomStreet343();" );
  }
}
function ElephantPark343(){
  getRidOfDestination()
  ElephantPark()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "ElephantPark343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "ElephantPark343Audio();" );
  }
}
function ElephantPark343Audio(){
  ElephantParkAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "HamptonStreet343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "LarcomStreet343();" );
  }
}
function LarcomStreet343(){
  getRidOfDestination()
  LarcomStreet()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "LarcomStreet343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "LarcomStreet343Audio();" );
  }
}
function LarcomStreet343Audio(){
  LarcomStreetAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "ElephantPark343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "BalfourStreet343();" );
  }
}
function BalfourStreet343(){
  getRidOfDestination()
  BalfourStreet()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "BalfourStreet343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "BalfourStreet343Audio();" );
  }
}
function BalfourStreet343Audio(){
  BalfourStreetAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "LarcomStreet343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "EastStreet343();" );
  }
}
function EastStreet343(){
  getRidOfDestination()
  EastStreet()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "EastStreet343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "EastStreet343Audio();" );
  }
}
function EastStreet343Audio(){
  EastStreetAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "BalfourStreet343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "AlsaceRoad343();" );
  }
}
function AlsaceRoad343(){
  getRidOfDestination()
  AlsaceRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "AlsaceRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "AlsaceRoad343Audio();" );
  }
}
function AlsaceRoad343Audio(){
  AlsaceRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "EastStreet343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "AlbanyRoadWellsWay343();" );
  }
}
function AlbanyRoadWellsWay343(){
  getRidOfDestination()
  AlbanyRoadWellsWay()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "AlbanyRoadWellsWay343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "AlbanyRoadWellsWay343Audio();" );
  }
}
function AlbanyRoadWellsWay343Audio(){
  AlbanyRoadWellsWayAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "AlsaceRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "StGeorgesWayBurgessPark343();" );
  }
}
function StGeorgesWayBurgessPark343(){
  getRidOfDestination()
  StGeorgesWayBurgessPark()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "StGeorgesWayBurgessPark343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "StGeorgesWayBurgessPark343Audio();" );
  }
}
function StGeorgesWayBurgessPark343Audio(){
  StGeorgesWayBurgessParkAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "AlbanyRoadWellsWay343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SedgmoorPlace343();" );
  }
}
function CottageGreen343(){
  getRidOfDestination()
  CottageGreen()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "CottageGreen343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "CottageGreen343Audio();" );
  }
}
function CottageGreen343Audio(){
  CottageGreenAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "StGeorgesWayBurgessPark343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SouthamptonWayEstate343();" );
  }
}
function SedgmoorPlace343(){
  getRidOfDestination()
  SedgmoorPlace()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "SedgmoorPlace343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SedgmoorPlace343Audio();" );
  }
}
function SedgmoorPlace343Audio(){
  SedgmoorPlaceAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "CottageGreen343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SouthamptonWayEstate343();" );
  }
}
function SouthamptonWayEstate343(){
  getRidOfDestination()
  SouthamptonWayEstate()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "SouthamptonWayEstate343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SouthamptonWayEstate343Audio();" );
  }
}
function SouthamptonWayEstate343Audio(){
  SouthamptonWayEstateAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "SedgmoorPlace343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SouthamptonWayPeckhamRoad343();" );
  }
}
function SouthamptonWayPeckhamRoad343(){
  getRidOfDestination()
  SouthamptonWayPeckhamRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "SouthamptonWayPeckhamRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SouthamptonWayPeckhamRoad343Audio();" );
  }
}
function SouthamptonWayPeckhamRoad343Audio(){
  SouthamptonWayPeckhamRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "HarrisAcademy343();" );
  }
}
function PeckhamRoadSouthamptonWay343(){
  getRidOfDestination()
  PeckhamRoadSouthamptonWay()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "PeckhamRoadSouthamptonWay343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "PeckhamRoadSouthamptonWay343Audio();" );
  }
}
function PeckhamRoadSouthamptonWay343Audio(){
  PeckhamRoadSouthamptonWayAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "SouthamptonWayEstate343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "PeckhamLibrary343();" );
  }
}
function HarrisAcademy343(){
  getRidOfDestination()
  HarrisAcademy()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "HarrisAcademy343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "HarrisAcademy343Audio();" );
  }
}
function HarrisAcademy343Audio(){
  HarrisAcademyAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "PeckhamRoadSouthamptonWay343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "PeckhamLibrary343();" );
  }
}
function PeckhamLibrary343(){
  getRidOfDestination()
  PeckhamLibrary()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "PeckhamLibrary343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "PeckhamLibrary343Audio();" );
  }
}
function PeckhamLibrary343Audio(){
  PeckhamLibraryAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "ClaytonRoad343();" );
  }
}
function ClaytonRoad343(){
  getRidOfDestination()
  ClaytonRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "ClaytonRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "ClaytonRoad343Audio();" );
  }
}
function ClaytonRoad343Audio(){
  ClaytonRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "TheAyleshamCentre343();" );
  }
}
function TheAyleshamCentre343(){
  getRidOfDestination()
  TheAyleshamCentre()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "TheAyleshamCentre343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "TheAyleshamCentre343Audio();" );
  }
}
function TheAyleshamCentre343Audio(){
  TheAyleshamCentreAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "PeckhamRyeStation343();" );
  }
}
function HanoverPark343(){
  getRidOfDestination()
  HanoverPark()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "HanoverPark343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "HanoverPark343Audio();" );
  }
}
function HanoverPark343Audio(){
  HanoverParkAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "HarrisAcademy343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "NigelRoad343();" );
  }
}
function PeckhamRyeStation343(){
  getRidOfDestination()
  PeckhamRyeStation()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeStation343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "PeckhamRyeStation343Audio();" );
  }
}
function PeckhamRyeStation343Audio(){
  PeckhamRyeStationAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "HanoverPark343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "NigelRoad343();" );
  }
}
function HeatonRoad343(){
  getRidOfDestination()
  HeatonRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "HeatonRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "HeatonRoad343Audio();" );
  }
}
function HeatonRoad343Audio(){
  HeatonRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeStation343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function NigelRoad343(){
  getRidOfDestination()
  NigelRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "NigelRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "NigelRoad343Audio();" );
  }
}
function NigelRoad343Audio(){
  NigelRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "HeatonRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "PeckhamRyeNunheadLane343();" );
  }
}
function PeckhamRyeEastDulwichRoad343(){
  getRidOfDestination()
  PeckhamRyeEastDulwichRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeEastDulwichRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "PeckhamRyeEastDulwichRoad343Audio();" );
  }
}
function PeckhamRyeEastDulwichRoad343Audio(){
  PeckhamRyeEastDulwichRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "NigelRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SolomonsPassage343();" );
  }
}
function PeckhamRyeNunheadLane343(){
  getRidOfDestination()
  PeckhamRyeNunheadLane()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeNunheadLane343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "PeckhamRyeNunheadLane343Audio();" );
  }
}
function PeckhamRyeNunheadLane343Audio(){
  PeckhamRyeNunheadLaneAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeEastDulwichRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SolomonsPassage343();" );
  }
}
function SolomonsPassage343(){
  getRidOfDestination()
  SolomonsPassage()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "SolomonsPassage343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SolomonsPassage343Audio();" );
  }
}
function SolomonsPassage343Audio(){
  SolomonsPassageAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeNunheadLane343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "RyeHillPark343();" );
  }
}
function RyeHillPark343(){
  getRidOfDestination()
  RyeHillPark()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "RyeHillPark343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "RyeHillPark343Audio();" );
  }
}
function RyeHillPark343Audio(){
  RyeHillParkAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "SolomonsPassage343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "StuartRoad343();" );
  }
}
function StuartRoad343(){
  getRidOfDestination()
  StuartRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "StuartRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "StuartRoad343Audio();" );
  }
}
function StuartRoad343Audio(){
  StuartRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "RyeHillPark343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SurreyRoad343();" );
  }
}
function SurreyRoad343(){
  getRidOfDestination()
  SurreyRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "SurreyRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SurreyRoad343Audio();" );
  }
}
function SurreyRoad343Audio(){
  SurreyRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "StuartRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "MerttinsRoad343();" );
  }
}
function MerttinsRoad343(){
  getRidOfDestination()
  MerttinsRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "MerttinsRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "MerttinsRoad343Audio();" );
  }
}
function MerttinsRoad343Audio(){
  MerttinsRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "StNorbertRoad343();" );
  }
}
function InvertonRoad343(){
  getRidOfDestination()
  InvertonRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "InvertonRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "InvertonRoad343Audio();" );
  }
}
function InvertonRoad343Audio(){
  InvertonRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "SurreyRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StNorbertRoad343(){
  getRidOfDestination()
  StNorbertRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "StNorbertRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "StNorbertRoad343Audio();" );
  }
}
function StNorbertRoad343Audio(){
  StNorbertRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "InvertonRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "TurnhamRoad343();" );
  }
}
function TurnhamRoad343(){
  getRidOfDestination()
  TurnhamRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "TurnhamRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "TurnhamRoad343Audio();" );
  }
}
function TurnhamRoad343Audio(){
  TurnhamRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "StNorbertRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "BrockillCrescent343();" );
  }
}
function BrockillCrescent343(){
  getRidOfDestination()
  BrockillCrescent()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "BrockillCrescent343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "BrockillCrescent343Audio();" );
  }
}
function BrockillCrescent343Audio(){
  BrockillCrescentAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "TurnhamRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "StAsaphRoad343();" );
  }
}
function StAsaphRoad343(){
  getRidOfDestination()
  StAsaphRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "StAsaphRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "StAsaphRoad343Audio();" );
  }
}
function StAsaphRoad343Audio(){
  StAsaphRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "BrockillCrescent343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "AvignonRoadDrakefellRoad343();" );
  }
}
function AvignonRoadDrakefellRoad343(){
  getRidOfDestination()
  AvignonRoadDrakefellRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "AvignonRoadDrakefellRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "AvignonRoadDrakefellRoad343Audio();" );
  }
}
function AvignonRoadDrakefellRoad343Audio(){
  AvignonRoadDrakefellRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "KittoRoad343();" );
  }
}
function DrakefellRoad343(){
  getRidOfDestination()
  DrakefellRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "DrakefellRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "DrakefellRoad343Audio();" );
  }
}
function DrakefellRoad343Audio(){
  DrakefellRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "StAsaphRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function KittoRoad343(){
  getRidOfDestination()
  KittoRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "KittoRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "KittoRoad343Audio();" );
  }
}
function KittoRoad343Audio(){
  KittoRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "DrakefellRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "ArbuthnotRoad343();" );
  }
}
function ArbuthnotRoad343(){
  getRidOfDestination()
  ArbuthnotRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "ArbuthnotRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "ArbuthnotRoad343Audio();" );
  }
}
function ArbuthnotRoad343Audio(){
  ArbuthnotRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "OmmaneyRoad343();" );
  }
}
function OmmaneyRoad343(){
  getRidOfDestination()
  OmmaneyRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "OmmaneyRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "OmmaneyRoad343Audio();" );
  }
}
function OmmaneyRoad343Audio(){
  OmmaneyRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "KittoRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "NewCrossJerninghamRoad343();" );
  }
}
function NewCrossBusGarage343(){
  getRidOfDestination()
  NewCrossBusGarage()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "NewCrossBusGarage343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "NewCrossBusGarage343Audio();" );
  }
}
function NewCrossBusGarage343Audio(){
  NewCrossBusGarageAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "OmmaneyRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function NewCrossJerninghamRoad343(){
  getRidOfDestination()
  NewCrossJerninghamRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "NewCrossJerninghamRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "NewCrossJerninghamRoad343Audio();" );
  }
}
function NewCrossJerninghamRoad343Audio(){
  NewCrossJerninghamRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "NewCrossBusGarage343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}

function WatfordJunctionStation258(){
  getRidOfDestination()
  WatfordJunctionStation()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WatfordJunctionStation258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WatfordJunctionStation258Audio();" );
  }
}
function WatfordJunctionStation258Audio(){
  WatfordJunctionStationAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "ClarendonRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ClarendonRoad258(){
  getRidOfDestination()
  ClarendonRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "ClarendonRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "ClarendonRoad258Audio();" );
  }
}
function ClarendonRoad258Audio(){
  ClarendonRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BeechenGrove258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BeechenGrove258(){
  getRidOfDestination()
  BeechenGrove()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BeechenGrove258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BeechenGrove258Audio();" );
  }
}
function BeechenGrove258Audio(){
  BeechenGroveAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WaterLane258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WaterLane258(){
  getRidOfDestination()
  WaterLane()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WaterLane258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WaterLane258Audio();" );
  }
}
function WaterLane258Audio(){
  WaterLaneAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WatfordHighStreetStation258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WatfordJunctionRailwayStation258(){
  getRidOfDestination()
  WatfordJunctionRailwayStation()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WatfordJunctionRailwayStation258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WatfordJunctionRailwayStation258Audio();" );
  }
}
function WatfordJunctionRailwayStation258Audio(){
  WatfordJunctionRailwayStationAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WatfordFieldRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function StJohnsRoad258(){
  getRidOfDestination()
  StJohnsRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "StJohnsRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "StJohnsRoad258Audio();" );
  }
}
function StJohnsRoad258Audio(){
  StJohnsRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WatfordFieldRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WatfordJunctionRailwayStation258();" );
  }
}
function StMarysRoad258(){
  getRidOfDestination()
  StMarysRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "StMarysRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "StMarysRoad258Audio();" );
  }
}
function StMarysRoad258Audio(){
  StMarysRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WatfordFieldRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "StJohnsRoad258();" );
  }
}
function KingStreet258(){
  getRidOfDestination()
  KingStreet()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "KingStreet258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "KingStreet258Audio();" );
  }
}
function KingStreet258Audio(){
  KingStreetAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WatfordFieldRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "StMarysRoad258();" );
  }
}
function WatfordHighStreetStation258(){
  getRidOfDestination()
  WatfordHighStreetStation()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WatfordHighStreetStation258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WatfordHighStreetStation258Audio();" );
  }
}
function WatfordHighStreetStation258Audio(){
  WatfordHighStreetStationAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WatfordFieldRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "KingStreet258();" );
  }
}
function WatfordFieldRoad258(){
  getRidOfDestination()
  WatfordFieldRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WatfordFieldRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WatfordFieldRoad258Audio();" );
  }
}
function WatfordFieldRoad258Audio(){
  WatfordFieldRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WaterfieldsWay258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WaterfieldsWay258(){
  getRidOfDestination()
  WaterfieldsWay()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WaterfieldsWay258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WaterfieldsWay258Audio();" );
  }
}
function WaterfieldsWay258Audio(){
  WaterfieldsWayAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BusheyArches258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function DaltonWay258(){
  getRidOfDestination()
  DaltonWay()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "DaltonWay258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "DaltonWay258Audio();" );
  }
}
function DaltonWay258Audio(){
  DaltonWayAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BusheyStation258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WatfordHighStreetStation258();" );
  }
}
function BusheyArches258(){
  getRidOfDestination()
  BusheyArches()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BusheyArches258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BusheyArches258Audio();" );
  }
}
function BusheyArches258Audio(){
  BusheyArchesAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BusheyStation258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "DaltonWay258();" );
  }
}
function BusheyStation258(){
  getRidOfDestination()
  BusheyStation()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BusheyStation258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BusheyStation258Audio();" );
  }
}
function BusheyStation258Audio(){
  BusheyStationAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "GrangeRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BusheyArches258();" );
  }
}
function GrangeRoad258(){
  getRidOfDestination()
  GrangeRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "GrangeRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "GrangeRoad258Audio();" );
  }
}
function GrangeRoad258Audio(){
  GrangeRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "GrangeAcademy258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BusheyStation258();" );
  }
}
function GrangeAcademy258(){
  getRidOfDestination()
  GrangeAcademy()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "GrangeAcademy258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "GrangeAcademy258Audio();" );
  }
}
function GrangeAcademy258Audio(){
  GrangeAcademyAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "TheRedLionPublicHouse258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "GrangeRoad258();" );
  }
}
function TheRedLionPublicHouse258(){
  getRidOfDestination()
  TheRedLionPublicHouse()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "TheRedLionPublicHouse258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "TheRedLionPublicHouse258Audio();" );
  }
}
function TheRedLionPublicHouse258Audio(){
  TheRedLionPublicHouseAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BournehallRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "GrangeAcademy258();" );
  }
}
function BournehallRoad258(){
  getRidOfDestination()
  BournehallRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BournehallRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BournehallRoad258Audio();" );
  }
}
function BournehallRoad258Audio(){
  BournehallRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "MelbourneRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "TheRedLionPublicHouse258();" );
  }
}
function MelbourneRoad258(){
  getRidOfDestination()
  MelbourneRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "MelbourneRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "MelbourneRoad258Audio();" );
  }
}
function MelbourneRoad258Audio(){
  MelbourneRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "Steeplands258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BournehallRoad258();" );
  }
}
function Steeplands258(){
  getRidOfDestination()
  Steeplands()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "Steeplands258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "Steeplands258Audio();" );
  }
}
function Steeplands258Audio(){
  SteeplandsAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "TheRoyalOakPublicHouse258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "MelbourneRoad258();" );
  }
}
function TheRoyalOakPublicHouse258(){
  getRidOfDestination()
  TheRoyalOakPublicHouse()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "TheRoyalOakPublicHouse258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "TheRoyalOakPublicHouse258Audio();" );
  }
}
function TheRoyalOakPublicHouse258Audio(){
  TheRoyalOakPublicHouseAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "MerryHillRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "Steeplands258();" );
  }
}
function MerryHillRoad258(){
  getRidOfDestination()
  MerryHillRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "MerryHillRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "MerryHillRoad258Audio();" );
  }
}
function MerryHillRoad258Audio(){
  MerryHillRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "StPetersClose258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "TheRoyalOakPublicHouse258();" );
  }
}
function StPetersClose258(){
  getRidOfDestination()
  StPetersClose()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "StPetersClose258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "StPetersClose258Audio();" );
  }
}
function StPetersClose258Audio(){
  StPetersCloseAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WindmillLane258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BusheyHeathThreeCrowns258(){
  getRidOfDestination()
  BusheyHeathThreeCrowns()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BusheyHeathThreeCrowns258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BusheyHeathThreeCrowns258Audio();" );
  }
}
function BusheyHeathThreeCrowns258Audio(){
  BusheyHeathThreeCrownsAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "CommonRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "MerryHillRoad258();" );
  }
}
function WindmillLane258(){
  getRidOfDestination()
  WindmillLane()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WindmillLane258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WindmillLane258Audio();" );
  }
}
function WindmillLane258Audio(){
  WindmillLaneAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "CommonRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BusheyHeathThreeCrowns258();" );
  }
}
function CommonRoad258(){
  getRidOfDestination()
  CommonRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "CommonRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "CommonRoad258Audio();" );
  }
}
function CommonRoad258Audio(){
  CommonRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HiveRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WindmillLane258();" );
  }
}
function HiveRoad258(){
  getRidOfDestination()
  HiveRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HiveRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HiveRoad258Audio();" );
  }
}
function HiveRoad258Audio(){
  HiveRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "AvantiHousePrimarySchool258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "CommonRoad258();" );
  }
}
function AvantiHousePrimarySchool258(){
  getRidOfDestination()
  AvantiHousePrimarySchool()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "AvantiHousePrimarySchool258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "AvantiHousePrimarySchool258Audio();" );
  }
}
function AvantiHousePrimarySchool258Audio(){
  AvantiHousePrimarySchoolAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "Sandringham258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HiveRoad258();" );
  }
}
function Sandringham258(){
  getRidOfDestination()
  Sandringham()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "Sandringham258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "Sandringham258Audio();" );
  }
}
function Sandringham258Audio(){
  SandringhamAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "ClampHill258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "AvantiHousePrimarySchool258();" );
  }
}
function ClampHill258(){
  getRidOfDestination()
  ClampHill()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "ClampHill258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "ClampHill258Audio();" );
  }
}
function ClampHill258Audio(){
  ClampHillAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BrookshillGate258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "Sandringham258();" );
  }
}
function BrookshillGate258(){
  getRidOfDestination()
  BrookshillGate()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BrookshillGate258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BrookshillGate258Audio();" );
  }
}
function BrookshillGate258Audio(){
  BrookshillGateAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowCollege258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "ClampHill258();" );
  }
}
function HarrowCollege258(){
  getRidOfDestination()
  HarrowCollege()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowCollege258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowCollege258Audio();" );
  }
}
function HarrowCollege258Audio(){
  HarrowCollegeAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "UxbridgeRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BrookshillGate258();" );
  }
}
function UxbridgeRoad258(){
  getRidOfDestination()
  UxbridgeRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "UxbridgeRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "UxbridgeRoad258Audio();" );
  }
}
function UxbridgeRoad258Audio(){
  UxbridgeRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowWealdBusGarage258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowCollege258();" );
  }
}
function MonroGardens258(){
  getRidOfDestination()
  MonroGardens()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "MonroGardens258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "MonroGardens258Audio();" );
  }
}
function MonroGardens258Audio(){
  MonroGardensAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WealdLane258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "UxbridgeRoad258();" );
  }
}
function HarrowWealdBusGarage258(){
  getRidOfDestination()
  HarrowWealdBusGarage()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowWealdBusGarage258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowWealdBusGarage258Audio();" );
  }
}
function HarrowWealdBusGarage258Audio(){
  HarrowWealdBusGarageAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WealdLane258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "MonroGardens258();" );
  }
}
function WealdLane258(){
  getRidOfDestination()
  WealdLane()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WealdLane258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WealdLane258Audio();" );
  }
}
function WealdLane258Audio(){
  WealdLaneAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "SalvatorianCollegeStJosephsChurch258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LongElmes258(){
  getRidOfDestination()
  LongElmes()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "LongElmes258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "LongElmes258Audio();" );
  }
}
function LongElmes258Audio(){
  LongElmesAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WealdstoneBaptistChurch258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowWealdBusGarage258();" );
  }
}
function SalvatorianCollegeStJosephsChurch258(){
  getRidOfDestination()
  SalvatorianCollegeStJosephsChurch()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "SalvatorianCollegeStJosephsChurch258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "SalvatorianCollegeStJosephsChurch258Audio();" );
  }
}
function SalvatorianCollegeStJosephsChurch258Audio(){
  SalvatorianCollegeStJosephsChurchAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WealdstoneBaptistChurch258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "LongElmes258();" );
  }
}
function WealdstoneBaptistChurch258(){
  getRidOfDestination()
  WealdstoneBaptistChurch()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WealdstoneBaptistChurch258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WealdstoneBaptistChurch258Audio();" );
  }
}
function WealdstoneBaptistChurch258Audio(){
  WealdstoneBaptistChurchAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "TheWealdstoneCentre258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "SalvatorianCollegeStJosephsChurch258();" );
  }
}
function TheWealdstoneCentre258(){
  getRidOfDestination()
  TheWealdstoneCentre()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "TheWealdstoneCentre258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "TheWealdstoneCentre258Audio();" );
  }
}
function TheWealdstoneCentre258Audio(){
  TheWealdstoneCentreAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowWealdstoneStation258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WealdstoneBaptistChurch258();" );
  }
}
function HarrowWealdstoneStation258(){
  getRidOfDestination()
  HarrowWealdstoneStation()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowWealdstoneStation258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowWealdstoneStation258Audio();" );
  }
}
function HarrowWealdstoneStation258Audio(){
  HarrowWealdstoneStationAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowCivicCentreHarrowMosque258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "TheWealdstoneCentre258();" );
  }
}
function HarrowCivicCentreHarrowMosque258(){
  getRidOfDestination()
  HarrowCivicCentreHarrowMosque()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowCivicCentreHarrowMosque258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowCivicCentreHarrowMosque258Audio();" );
  }
}
function HarrowCivicCentreHarrowMosque258Audio(){
  HarrowCivicCentreHarrowMosqueAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HindesRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowWealdstoneStation258();" );
  }
}
function HindesRoad258(){
  getRidOfDestination()
  HindesRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HindesRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HindesRoad258Audio();" );
  }
}
function HindesRoad258Audio(){
  HindesRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowTownCentreStJohnsRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HarrowTownCentreStJohnsRoad258(){
  getRidOfDestination()
  HarrowTownCentreStJohnsRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowTownCentreStJohnsRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowTownCentreStJohnsRoad258Audio();" );
  }
}
function HarrowTownCentreStJohnsRoad258Audio(){
  HarrowTownCentreStJohnsRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowTownCentre258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function SafariCinema258(){
  getRidOfDestination()
  SafariCinema()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "SafariCinema258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "SafariCinema258Audio();" );
  }
}
function SafariCinema258Audio(){
  SafariCinemaAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowBusStation258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowCivicCentreHarrowMosque258();" );
  }
}
function HarrowTownCentreSheepcoteRoad258(){
  getRidOfDestination()
  HarrowTownCentreSheepcoteRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowTownCentreSheepcoteRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowTownCentreSheepcoteRoad258Audio();" );
  }
}
function HarrowTownCentreSheepcoteRoad258Audio(){
  HarrowTownCentreSheepcoteRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowBusStation258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "SafariCinema258();" );
  }
}
function HarrowTownCentre258(){
  getRidOfDestination()
  HarrowTownCentre()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowTownCentre258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowTownCentre258Audio();" );
  }
}
function HarrowTownCentre258Audio(){
  HarrowTownCentreAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowBusStation258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowTownCentreSheepcoteRoad258();" );
  }
}
function HarrowBusStation258(){
  getRidOfDestination()
  HarrowBusStation()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowBusStation258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowBusStation258Audio();" );
  }
}
function HarrowBusStation258Audio(){
  HarrowBusStationAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowTownCentre2258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowTownCentre258();" );
  }
}
function HarrowTownCentre2258(){
  getRidOfDestination()
  HarrowTownCentre()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowTownCentre2258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowTownCentre2258Audio();" );
  }
}
function HarrowTownCentre2258Audio(){
  HarrowTownCentreAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "TyburnLane258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowBusStation258();" );
  }
}
function TyburnLane258(){
  getRidOfDestination()
  TyburnLane()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "TyburnLane258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "TyburnLane258Audio();" );
  }
}
function TyburnLane258Audio(){
  TyburnLaneAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "KentonRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowTownCentre2258();" );
  }
}
function KentonRoad258(){
  getRidOfDestination()
  KentonRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "KentonRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "KentonRoad258Audio();" );
  }
}
function KentonRoad258Audio(){
  KentonRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowSchool258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HarrowSchool258(){
  getRidOfDestination()
  HarrowSchool()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowSchool258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowSchool258Audio();" );
  }
}
function HarrowSchool258Audio(){
  HarrowSchoolAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowPark258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "TyburnLane258();" );
  }
}
function HarrowPark258(){
  getRidOfDestination()
  HarrowPark()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowPark258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowPark258Audio();" );
  }
}
function HarrowPark258Audio(){
  HarrowParkAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "RoxethHill258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowSchool258();" );
  }
}
function RoxethHill258(){
  getRidOfDestination()
  RoxethHill()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "RoxethHill258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "RoxethHill258Audio();" );
  }
}
function RoxethHill258Audio(){
  RoxethHillAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "GrangeRoad2258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowPark258();" );
  }
}
function GrangeRoad2258(){
  getRidOfDestination()
  GrangeRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "GrangeRoad2258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "GrangeRoad2258Audio();" );
  }
}
function GrangeRoad2258Audio(){
  GrangeRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "SouthHarrowBusStation258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "RoxethHill258();" );
  }
}
function SouthHarrowBusStation258(){
  getRidOfDestination()
  SouthHarrowBusStation()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "SouthHarrowBusStation258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "SouthHarrowBusStation258Audio();" );
  }
}
function SouthHarrowBusStation258Audio(){
  SouthHarrowBusStationAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "GrangeRoad2258();" );
  }
}

function CedarRoad650(){
  getRidOfDestination()
  CedarRoad()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "CedarRoad650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "CedarRoad650Audio();" );
  }
}
function CedarRoad650Audio(){
  CedarRoadAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "TheAvenue650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function RomfordBusGarage650(){
  getRidOfDestination()
  RomfordBusGarage()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "RomfordBusGarage650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "RomfordBusGarage650Audio();" );
  }
}
function RomfordBusGarage650Audio(){
  RomfordBusGarageAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "TheAvenue650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "CedarRoad650();" );
  }
}
function TheAvenue650(){
  getRidOfDestination()
  TheAvenue()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "TheAvenue650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "TheAvenue650Audio();" );
  }
}
function TheAvenue650Audio(){
  TheAvenueAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "RomfordMarket650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "RomfordBusGarage650();" );
  }
}
function RomfordMarket650(){
  getRidOfDestination()
  RomfordMarket()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "RomfordMarket650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "RomfordMarket650Audio();" );
  }
}
function RomfordMarket650Audio(){
  RomfordMarketAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "MercuryGardens650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "TheAvenue650();" );
  }
}
function MercuryGardens650(){
  getRidOfDestination()
  MercuryGardens()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "MercuryGardens650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "MercuryGardens650Audio();" );
  }
}
function MercuryGardens650Audio(){
  MercuryGardensAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "WesternRoad650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WesternRoad650(){
  getRidOfDestination()
  WesternRoad()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "WesternRoad650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "WesternRoad650Audio();" );
  }
}
function WesternRoad650Audio(){
  WesternRoadAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "RomfordStation650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "RomfordMarket650();" );
  }
}
function RomfordStation650(){
  getRidOfDestination()
  RomfordStation()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "RomfordStation650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "RomfordStation650Audio();" );
  }
}
function RomfordStation650Audio(){
  RomfordStationAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "AlbertRoad650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "WesternRoad650();" );
  }
}
function AlbertRoad650(){
  getRidOfDestination()
  AlbertRoad()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "AlbertRoad650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "AlbertRoad650Audio();" );
  }
}
function AlbertRoad650Audio(){
  AlbertRoadAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "ManorRoad650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "RomfordStation650();" );
  }
}
function ManorRoad650(){
  getRidOfDestination()
  ManorRoad()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "ManorRoad650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "ManorRoad650Audio();" );
  }
}
function ManorRoad650Audio(){
  ManorRoadAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "FairholmeAvenue650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "AlbertRoad650();" );
  }
}
function FairholmeAvenue650(){
  getRidOfDestination()
  FairholmeAvenue()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "FairholmeAvenue650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "FairholmeAvenue650Audio();" );
  }
}
function FairholmeAvenue650Audio(){
  FairholmeAvenueAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "MargaretRoad650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "ManorRoad650();" );
  }
}
function MargaretRoad650(){
  getRidOfDestination()
  MargaretRoad()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "MargaretRoad650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "MargaretRoad650Audio();" );
  }
}
function MargaretRoad650Audio(){
  MargaretRoadAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "TheDrillRoundabout650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WithamRoad650(){
  getRidOfDestination()
  WithamRoad()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "WithamRoad650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "WithamRoad650Audio();" );
  }
}
function WithamRoad650Audio(){
  WithamRoadAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "GideaParkStation650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "FairholmeAvenue650();" );
  }
}
function TheDrillRoundabout650(){
  getRidOfDestination()
  TheDrillRoundabout()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "TheDrillRoundabout650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "TheDrillRoundabout650Audio();" );
  }
}
function TheDrillRoundabout650Audio(){
  TheDrillRoundaboutAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "GideaParkStation650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "WithamRoad650();" );
  }
}
function GideaParkStation650(){
  getRidOfDestination()
  GideaParkStation()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "GideaParkStation650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "GideaParkStation650Audio();" );
  }
}
function GideaParkStation650Audio(){
  GideaParkStationAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "TheDrillRoundabout2650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "TheDrillRoundabout650();" );
  }
}
function TheDrillRoundabout2650(){
  getRidOfDestination()
  TheDrillRoundabout()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "TheDrillRoundabout2650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "TheDrillRoundabout2650Audio();" );
  }
}
function TheDrillRoundabout2650Audio(){
  TheDrillRoundaboutAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "BrooklandsGardens650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "GideaParkStation650();" );
  }
}
function BrooklandsGardens650(){
  getRidOfDestination()
  BrooklandsGardens()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "BrooklandsGardens650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "BrooklandsGardens650Audio();" );
  }
}
function BrooklandsGardens650Audio(){
  BrooklandsGardensAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "WaldenWay650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function KinfaunsAvenue650(){
  getRidOfDestination()
  KinfaunsAvenue()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "KinfaunsAvenue650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "KinfaunsAvenue650Audio();" );
  }
}
function KinfaunsAvenue650Audio(){
  KinfaunsAvenueAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "BurntwoodAvenue650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "TheDrillRoundabout2650();" );
  }
}
function WaldenWay650(){
  getRidOfDestination()
  WaldenWay()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "WaldenWay650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "WaldenWay650Audio();" );
  }
}
function WaldenWay650Audio(){
  WaldenWayAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "BurntwoodAvenue650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "KinfaunsAvenue650();" );
  }
}
function BurntwoodAvenue650(){
  getRidOfDestination()
  BurntwoodAvenue()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "BurntwoodAvenue650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "BurntwoodAvenue650Audio();" );
  }
}
function BurntwoodAvenue650Audio(){
  BurntwoodAvenueAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "ButtsGreenRoad650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WykehamAvenue650(){
  getRidOfDestination()
  WykehamAvenue()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "WykehamAvenue650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "WykehamAvenue650Audio();" );
  }
}
function WykehamAvenue650Audio(){
  WykehamAvenueAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "NelmesRoad650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "WaldenWay650();" );
  }
}
function ButtsGreenRoad650(){
  getRidOfDestination()
  ButtsGreenRoad()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "ButtsGreenRoad650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "ButtsGreenRoad650Audio();" );
  }
}
function ButtsGreenRoad650Audio(){
  ButtsGreenRoadAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "NelmesRoad650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "WykehamAvenue650();" );
  }
}
function NelmesRoad650(){
  getRidOfDestination()
  NelmesRoad()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "NelmesRoad650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "NelmesRoad650Audio();" );
  }
}
function NelmesRoad650Audio(){
  NelmesRoadAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "WingletyeLane650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "ButtsGreenRoad650();" );
  }
}
function WingletyeLane650(){
  getRidOfDestination()
  WingletyeLane()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "WingletyeLane650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "WingletyeLane650Audio();" );
  }
}
function WingletyeLane650Audio(){
  WingletyeLaneAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "EmersonParkAcademy650();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function EmersonParkAcademy650(){
  getRidOfDestination()
  EmersonParkAcademy()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "EmersonParkAcademy650Audio();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "EmersonParkAcademy650Audio();" );
  }
}
function EmersonParkAcademy650Audio(){
  EmersonParkAcademyAudio()
  if (routeDestination === "EmersonParkSchool650"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "RomfordBusGarage650") {
    NextDestination.setAttribute( "onClick", "NelmesRoad650();" );
  }
}

function SouthLodgeAvenueYorkshireRoad152(){
  getRidOfDestination()
  SouthLodgeAvenueYorkshireRoad()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "SouthLodgeAvenueYorkshireRoad152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "SouthLodgeAvenueYorkshireRoad152Audio();" );
  }
}
function SouthLodgeAvenueYorkshireRoad152Audio(){
  SouthLodgeAvenueYorkshireRoadAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "LeicesterAvenue152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function LeicesterAvenue152(){
  getRidOfDestination()
  LeicesterAvenue()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "LeicesterAvenue152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "LeicesterAvenue152Audio();" );
  }
}
function LeicesterAvenue152Audio(){
  LeicesterAvenueAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "NorthumberlandGardens152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function NorthumberlandGardens152(){
  getRidOfDestination()
  NorthumberlandGardens()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "NorthumberlandGardens152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "NorthumberlandGardens152Audio();" );
  }
}
function NorthumberlandGardens152Audio(){
  NorthumberlandGardensAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "WestmorlandWay152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WestmorlandWay152(){
  getRidOfDestination()
  WestmorlandWay()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "WestmorlandWay152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "WestmorlandWay152Audio();" );
  }
}
function WestmorlandWay152Audio(){
  WestmorlandWayAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "CarisbrookeRoadHertfordWay152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CarisbrookeRoadHertfordWay152(){
  getRidOfDestination()
  CarisbrookeRoadHertfordWay()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "CarisbrookeRoadHertfordWay152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "CarisbrookeRoadHertfordWay152Audio();" );
  }
}
function CarisbrookeRoadHertfordWay152Audio(){
  CarisbrookeRoadHertfordWayAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "PollardsHillLibrary152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function PollardsHillLibrary152(){
  getRidOfDestination()
  PollardsHillLibrary()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "PollardsHillLibrary152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "PollardsHillLibrary152Audio();" );
  }
}
function PollardsHillLibrary152Audio(){
  PollardsHillLibraryAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "IvyGardens152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "SouthLodgeAvenueYorkshireRoad152();" );
  }
}
function IvyGardens152(){
  getRidOfDestination()
  IvyGardens()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "IvyGardens152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "IvyGardens152Audio();" );
  }
}
function IvyGardens152Audio(){
  IvyGardensAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "NorthboroughRoad152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "PollardsHillLibrary152();" );
  }
}
function NorthboroughRoad152(){
  getRidOfDestination()
  NorthboroughRoad()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "NorthboroughRoad152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "NorthboroughRoad152Audio();" );
  }
}
function NorthboroughRoad152Audio(){
  NorthboroughRoadAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "StanfordWay152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "IvyGardens152();" );
  }
}
function StanfordWay152(){
  getRidOfDestination()
  StanfordWay()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "StanfordWay152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "StanfordWay152Audio();" );
  }
}
function StanfordWay152Audio(){
  StanfordWayAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "MeophamRoadWoodstockWay152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function RosemeadAvenue152(){
  getRidOfDestination()
  RosemeadAvenue()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "MeophamRoadWoodstockWay152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "RosemeadAvenue152Audio();" );
  }
}
function RosemeadAvenue152Audio(){
  RosemeadAvenueAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "ClayAvenue152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "NorthboroughRoad152();" );
  }
}
function StreathamParkCemetery152(){
  getRidOfDestination()
  StreathamParkCemetery()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "MeophamRoadWoodstockWay152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "StreathamParkCemetery152Audio();" );
  }
}
function StreathamParkCemetery152Audio(){
  StreathamParkCemeteryAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "ClayAvenue152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "RosemeadAvenue152();" );
  }
}
function MeophamRoadWoodstockWay152(){
  getRidOfDestination()
  MeophamRoadWoodstockWay()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "MeophamRoadWoodstockWay152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "MeophamRoadWoodstockWay152Audio();" );
  }
}
function MeophamRoadWoodstockWay152Audio(){
  MeophamRoadWoodstockWayAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "ClayAvenue152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "StreathamParkCemetery152();" );
  }
}
function WarminsterWay152(){
  getRidOfDestination()
  WarminsterWay()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "WarminsterWay152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "WarminsterWay152Audio();" );
  }
}
function WarminsterWay152Audio(){
  WarminsterWayAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "StMarksCofEAcademyPlayingFields152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "MeophamRoadWoodstockWay152();" );
  }
}
function ClayAvenue152(){
  getRidOfDestination()
  ClayAvenue()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "ClayAvenue152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "ClayAvenue152Audio();" );
  }
}
function ClayAvenue152Audio(){
  ClayAvenueAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "StMarksCofEAcademyPlayingFields152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "WarminsterWay152();" );
  }
}
function StMarksCofEAcademyPlayingFields152(){
  getRidOfDestination()
  StMarksCofEAcademyPlayingFields()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "StMarksCofEAcademyPlayingFields152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "StMarksCofEAcademyPlayingFields152Audio();" );
  }
}
function StMarksCofEAcademyPlayingFields152Audio(){
  StMarksCofEAcademyPlayingFieldsAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "MitchamEastfieldsStation152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "ClayAvenue152();" );
  }
}
function MitchamEastfieldsStation152(){
  getRidOfDestination()
  MitchamEastfieldsStation()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "MitchamEastfieldsStation152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "MitchamEastfieldsStation152Audio();" );
  }
}
function MitchamEastfieldsStation152Audio(){
  MitchamEastfieldsStationAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "EastfieldsRoad152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "StMarksCofEAcademyPlayingFields152();" );
  }
}
function EastfieldsRoad152(){
  getRidOfDestination()
  EastfieldsRoad()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "EastfieldsRoad152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "EastfieldsRoad152Audio();" );
  }
}
function EastfieldsRoad152Audio(){
  EastfieldsRoadAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "LocksLane152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function EastfieldsRdMitchamEastfieldsStn152(){
  getRidOfDestination()
  EastfieldsRdMitchamEastfieldsStn()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "EastfieldsRdMitchamEastfieldsStn152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "EastfieldsRdMitchamEastfieldsStn152Audio();" );
  }
}
function EastfieldsRdMitchamEastfieldsStn152Audio(){
  EastfieldsRdMitchamEastfieldsStnAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "DowneRoadMitchamLibrary152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "MitchamEastfieldsStation152();" );
  }
}
function LocksLane152(){
  getRidOfDestination()
  LocksLane()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "LocksLane152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "LocksLane152Audio();" );
  }
}
function LocksLane152Audio(){
  LocksLaneAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "DowneRoadMitchamLibrary152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "EastfieldsRdMitchamEastfieldsStn152();" );
  }
}
function EvelineRoad152(){
  getRidOfDestination()
  EvelineRoad()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "EvelineRoad152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "EvelineRoad152Audio();" );
  }
}
function EvelineRoad152Audio(){
  EvelineRoadAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "MitchamFairGreen152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "LocksLane152();" );
  }
}
function DowneRoadMitchamLibrary152(){
  getRidOfDestination()
  DowneRoadMitchamLibrary()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "DowneRoadMitchamLibrary152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "DowneRoadMitchamLibrary152Audio();" );
  }
}
function DowneRoadMitchamLibrary152Audio(){
  DowneRoadMitchamLibraryAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "MitchamFairGreen152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "EvelineRoad152();" );
  }
}
function MitchamFairGreen152(){
  getRidOfDestination()
  MitchamFairGreen()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "MitchamFairGreen152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "MitchamFairGreen152Audio();" );
  }
}
function MitchamFairGreen152Audio(){
  MitchamFairGreenAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "LoveLane152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "DowneRoadMitchamLibrary152();" );
  }
}
function LoveLane152(){
  getRidOfDestination()
  LoveLane()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "LoveLane152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "LoveLane152Audio();" );
  }
}
function LoveLane152Audio(){
  LoveLaneAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "SadlerClose152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "MitchamFairGreen152();" );
  }
}
function SadlerClose152(){
  getRidOfDestination()
  SadlerClose()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "SadlerClose152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "SadlerClose152Audio();" );
  }
}
function SadlerClose152Audio(){
  SadlerCloseAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "LewisRoad152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LewisRoad152(){
  getRidOfDestination()
  LewisRoad()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "LewisRoad152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "LewisRoad152Audio();" );
  }
}
function LewisRoad152Audio(){
  LewisRoadAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "LavenderAvenue152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "LoveLane152();" );
  }
}
function LavenderAvenue152(){
  getRidOfDestination()
  LavenderAvenue()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "LavenderAvenue152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "LavenderAvenue152Audio();" );
  }
}
function LavenderAvenue152Audio(){
  LavenderAvenueAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "ChelseaFields152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "LewisRoad152();" );
  }
}
function ChelseaFields152(){
  getRidOfDestination()
  ChelseaFields()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "ChelseaFields152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "ChelseaFields152Audio();" );
  }
}
function ChelseaFields152Audio(){
  ChelseaFieldsAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "Runnymede152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "LavenderAvenue152();" );
  }
}
function Runnymede152(){
  getRidOfDestination()
  Runnymede()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "Runnymede152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "Runnymede152Audio();" );
  }
}
function Runnymede152Audio(){
  RunnymedeAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "ColliersWoodStation152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "ChelseaFields152();" );
  }
}
function ChristChurch152(){
  getRidOfDestination()
  ChristChurch()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "ChristChurch152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "ChristChurch152Audio();" );
  }
}
function ChristChurch152Audio(){
  ChristChurchAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "MertonAbbey152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "Runnymede152();" );
  }
}
function ColliersWoodStation152(){
  getRidOfDestination()
  ColliersWoodStation()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "ColliersWoodStation152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "ColliersWoodStation152Audio();" );
  }
}
function ColliersWoodStation152Audio(){
  ColliersWoodStationAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "MertonAbbey152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "ChristChurch152();" );
  }
}
function MertonAbbey152(){
  getRidOfDestination()
  MertonAbbey()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "MertonAbbey152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "MertonAbbey152Audio();" );
  }
}
function MertonAbbey152Audio(){
  MertonAbbeyAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "AbbeyRoad152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "ColliersWoodStation152();" );
  }
}
function AbbeyRoad152(){
  getRidOfDestination()
  AbbeyRoad()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "AbbeyRoad152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "AbbeyRoad152Audio();" );
  }
}
function AbbeyRoad152Audio(){
  AbbeyRoadAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "SouthWimbledonStation152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "MertonAbbey152();" );
  }
}
function SouthWimbledonStation152(){
  getRidOfDestination()
  SouthWimbledonStation()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "SouthWimbledonStation152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "SouthWimbledonStation152Audio();" );
  }
}
function SouthWimbledonStation152Audio(){
  SouthWimbledonStationAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "MordenRoad152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "AbbeyRoad152();" );
  }
}
function MordenRoad152(){
  getRidOfDestination()
  MordenRoad()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "MordenRoad152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "MordenRoad152Audio();" );
  }
}
function MordenRoad152Audio(){
  MordenRoadAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "WimbledonFireStation152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "SouthWimbledonStation152();" );
  }
}
function WimbledonFireStation152(){
  getRidOfDestination()
  WimbledonFireStation()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "WimbledonFireStation152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "WimbledonFireStation152Audio();" );
  }
}
function WimbledonFireStation152Audio(){
  WimbledonFireStationAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "MertonParkTramStop152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "MordenRoad152();" );
  }
}
function MertonParkTramStop152(){
  getRidOfDestination()
  MertonParkTramStop()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "MertonParkTramStop152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "MertonParkTramStop152Audio();" );
  }
}
function MertonParkTramStop152Audio(){
  MertonParkTramStopAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "WiltonCrescent152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "WimbledonFireStation152();" );
  }
}
function WiltonCrescent152(){
  getRidOfDestination()
  WiltonCrescent()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "WiltonCrescent152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "WiltonCrescent152Audio();" );
  }
}
function WiltonCrescent152Audio(){
  WiltonCrescentAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "TheNelsonHealthCentre152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "MertonParkTramStop152();" );
  }
}
function TheNelsonHealthCentre152(){
  getRidOfDestination()
  TheNelsonHealthCentre()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "TheNelsonHealthCentre152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "TheNelsonHealthCentre152Audio();" );
  }
}
function TheNelsonHealthCentre152Audio(){
  TheNelsonHealthCentreAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "WimbledonChaseStation152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "WiltonCrescent152();" );
  }
}
function WimbledonChaseStation152(){
  getRidOfDestination()
  WimbledonChaseStation()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "WimbledonChaseStation152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "WimbledonChaseStation152Audio();" );
  }
}
function WimbledonChaseStation152Audio(){
  WimbledonChaseStationAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "LowerDownsRoad152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "TheNelsonHealthCentre152();" );
  }
}
function LowerDownsRoad152(){
  getRidOfDestination()
  LowerDownsRoad()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "LowerDownsRoad152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "LowerDownsRoad152Audio();" );
  }
}
function LowerDownsRoad152Audio(){
  LowerDownsRoadAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "SydneyRoad152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "WimbledonChaseStation152();" );
  }
}
function SydneyRoad152(){
  getRidOfDestination()
  SydneyRoad()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "SydneyRoad152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "SydneyRoad152Audio();" );
  }
}
function SydneyRoad152Audio(){
  SydneyRoadAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "RaynesParkLibrary152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "LowerDownsRoad152();" );
  }
}
function RaynesParkLibrary152(){
  getRidOfDestination()
  RaynesParkLibrary()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "RaynesParkLibrary152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "RaynesParkLibrary152Audio();" );
  }
}
function RaynesParkLibrary152Audio(){
  RaynesParkLibraryAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "RaynesParkStation152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "SydneyRoad152();" );
  }
}
function RaynesParkStation152(){
  getRidOfDestination()
  RaynesParkStation()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "RaynesParkStation152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "RaynesParkStation152Audio();" );
  }
}
function RaynesParkStation152Audio(){
  RaynesParkStationAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "BusheyRoadGrandDrive152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "RaynesParkLibrary152();" );
  }
}
function BusheyRoadGrandDrive152(){
  getRidOfDestination()
  BusheyRoadGrandDrive()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "BusheyRoadGrandDrive152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "BusheyRoadGrandDrive152Audio();" );
  }
}
function BusheyRoadGrandDrive152Audio(){
  BusheyRoadGrandDriveAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "CartersBridge152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "RaynesParkStation152();" );
  }
}
function CartersBridge152(){
  getRidOfDestination()
  CartersBridge()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "CartersBridge152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "CartersBridge152Audio();" );
  }
}
function CartersBridge152Audio(){
  CartersBridgeAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "RaynesParkHighSchool152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "BusheyRoadGrandDrive152();" );
  }
}
function RaynesParkHighSchool152(){
  getRidOfDestination()
  RaynesParkHighSchool()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "RaynesParkHighSchool152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "RaynesParkHighSchool152Audio();" );
  }
}
function RaynesParkHighSchool152Audio(){
  RaynesParkHighSchoolAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "ShannonCornerSuperstores152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ShannonCornerSuperstores152(){
  getRidOfDestination()
  ShannonCornerSuperstores()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "ShannonCornerSuperstores152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "ShannonCornerSuperstores152Audio();" );
  }
}
function ShannonCornerSuperstores152Audio(){
  ShannonCornerSuperstoresAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "ShannonCornerBeverleyWay152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ShannonCornerBeverleyWay152(){
  getRidOfDestination()
  ShannonCornerBeverleyWay()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "ShannonCornerBeverleyWay152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "ShannonCornerBeverleyWay152Audio();" );
  }
}
function ShannonCornerBeverleyWay152Audio(){
  ShannonCornerBeverleyWayAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "ShannonCornerRookwoodAvenue152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "CartersBridge152();" );
  }
}
function ShannonCornerRookwoodAvenue152(){
  getRidOfDestination()
  ShannonCornerRookwoodAvenue()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "ShannonCornerRookwoodAvenue152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "ShannonCornerRookwoodAvenue152Audio();" );
  }
}
function ShannonCornerRookwoodAvenue152Audio(){
  ShannonCornerRookwoodAvenueAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "QueensRoad152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "ShannonCornerBeverleyWay152();" );
  }
}
function QueensRoad152(){
  getRidOfDestination()
  QueensRoad()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "QueensRoad152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "QueensRoad152Audio();" );
  }
}
function QueensRoad152Audio(){
  QueensRoadAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "WaltonAvenue152();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "ShannonCornerRookwoodAvenue152();" );
  }
}
function WaltonAvenue152(){
  getRidOfDestination()
  WaltonAvenue()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "WaltonAvenue152Audio();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "WaltonAvenue152Audio();" );
  }
}
function WaltonAvenue152Audio(){
  WaltonAvenueAudio()
  if (routeDestination === "NewMaldenFountainRoundabout152"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "PollardsHill152") {
    NextDestination.setAttribute( "onClick", "QueensRoad152();" );
  }
}

function StratfordInternationalStation108(){
  getRidOfDestination()
  StratfordInternationalStation()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "StratfordInternationalStation108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "StratfordInternationalStation108Audio();" );
  }
}
function StratfordInternationalStation108Audio(){
  StratfordInternationalStationAudio()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "StratfordCityBusStation108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function StratfordCityBusStation108(){
  getRidOfDestination()
  StratfordCityBusStation()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "StratfordCityBusStation108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "StratfordCityBusStation108Audio();" );
  }
}
function StratfordCityBusStation108Audio(){
  StratfordCityBusStationAudio()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "LondonAquaticsCentre108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "StratfordInternationalStation108();" );
  }
}
function LondonAquaticsCentre108(){
  getRidOfDestination()
  LondonAquaticsCentre()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "LondonAquaticsCentre108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "LondonAquaticsCentre108Audio();" );
  }
}
function LondonAquaticsCentre108Audio(){
  LondonAquaticsCentreAudio()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "CarpentersPrimarySchool108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "StratfordCityBusStation108();" );
  }
}
function CarpentersPrimarySchool108(){
  getRidOfDestination()
  CarpentersPrimarySchool()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "CarpentersPrimarySchool108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "CarpentersPrimarySchool108Audio();" );
  }
}
function CarpentersPrimarySchool108Audio(){
  CarpentersPrimarySchoolAudio()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "WartonRoad108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function GibbinsRoad108(){
  getRidOfDestination()
  GibbinsRoad()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "WartonRoad108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "GibbinsRoad108Audio();" );
  }
}
function GibbinsRoad108Audio(){
  GibbinsRoadAudio()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "AbbeyLane108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "LondonAquaticsCentre108();" );
  }
}
function WartonRoad108(){
  getRidOfDestination()
  WartonRoad()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "WartonRoad108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "WartonRoad108Audio();" );
  }
}
function WartonRoad108Audio(){
  WartonRoadAudio()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "AbbeyLane108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "GibbinsRoad108();" );
  }
}
function AbbeyLane108(){
  getRidOfDestination()
  AbbeyLane()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "AbbeyLane108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "AbbeyLane108Audio();" );
  }
}
function AbbeyLane108Audio(){
  AbbeyLaneAudio()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "BowFlyover108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BowFlyover108(){
  getRidOfDestination()
  BowFlyover()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "BowFlyover108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BowFlyover108Audio();" );
  }
}
function BowFlyover108Audio(){
  BowFlyoverAudio()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "BowChurch108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function MarshgateLane108(){
  getRidOfDestination()
  MarshgateLane()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "BowChurch108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "MarshgateLane108Audio();" );
  }
}
function MarshgateLane108Audio(){
  MarshgateLaneAudio()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "BowChurchStation108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "WartonRoad108();" );
  }
}
function BowChurch108(){
  getRidOfDestination()
  BowChurch()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "BowChurch108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BowChurch108Audio();" );
  }
}
function BowChurch108Audio(){
  BowChurchAudio()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "BowChurchStation108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "MarshgateLane108();" );
  }
}
function BowChurchStation108(){
  getRidOfDestination()
  BowChurchStation()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "BowChurchStation108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BowChurchStation108Audio();" );
  }
}
function BowChurchStation108Audio(){
  BowChurchStationAudio()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "RountonRoad108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BowChurch108();" );
  }
}
function BowRoad108(){
  getRidOfDestination()
  BowRoad()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "RountonRoad108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BowRoad108Audio();" );
  }
}
function BowRoad108Audio(){
  BowRoadAudio()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "DevonsRoadStation108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BowChurchStation108();" );
  }
}
function RountonRoad108(){
  getRidOfDestination()
  RountonRoad()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "RountonRoad108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "RountonRoad108Audio();" );
  }
}
function RountonRoad108Audio(){
  RountonRoadAudio()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "DevonsRoadStation108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BowRoad108();" );
  }
}
function DevonsRoadStation108(){
  getRidOfDestination()
  DevonsRoadStation()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "DevonsRoadStation108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "DevonsRoadStation108Audio();" );
  }
}
function DevonsRoadStation108Audio(){
  DevonsRoadStationAudio()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "CranwellClose108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "RountonRoad108();" );
  }
}
function CranwellClose108(){
  getRidOfDestination()
  CranwellClose()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "CranwellClose108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "CranwellClose108Audio();" );
  }
}
function CranwellClose108Audio(){
  CranwellCloseAudio()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "FaweStreet108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "DevonsRoadStation108();" );
  }
}
function FaweStreet108(){
  getRidOfDestination()
  FaweStreet()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "FaweStreet108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "FaweStreet108Audio();" );
  }
}
function FaweStreet108Audio(){
  FaweStreetAudio()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "LangdonParkStation108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "CranwellClose108();" );
  }
}
function LangdonParkStation108(){
  getRidOfDestination()
  LangdonParkStation()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "LangdonParkStation108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "LangdonParkStation108Audio();" );
  }
}
function LangdonParkStation108Audio(){
  LangdonParkStationAudio()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "ChrispStreetMarket108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "FaweStreet108();" );
  }
}
function ChrispStreetMarket108(){
  getRidOfDestination()
  ChrispStreetMarket()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "ChrispStreetMarket108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "ChrispStreetMarket108Audio();" );
  }
}
function ChrispStreetMarket108Audio(){
  ChrispStreetMarketAudio()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "BazelyStreet108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "LangdonParkStation108();" );
  }
}
function BazelyStreet108(){
  getRidOfDestination()
  BazelyStreet()
  if (routeDestination === "Lewisham108" || routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "BazelyStreet108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BazelyStreet108Audio();" );
  }
}
function BazelyStreet108Audio(){
  BazelyStreetAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "BlackwallTunnelEastIndiaDockRoad108();" );
  } else if (routeDestination === "CanningTown108") {
    NextDestination.setAttribute( "onClick", "BrunswickRoad108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "ChrispStreetMarket108();" );
  }
}
function BrunswickRoad108(){
  getRidOfDestination()
  BrunswickRoad()
  if (routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "BrunswickRoad108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BrunswickRoad108Audio();" );
  }
}
function BrunswickRoad108Audio(){
  BrunswickRoadAudio()
  if (routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "NutmegLane108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function NutmegLane108(){
  getRidOfDestination()
  NutmegLane()
  if (routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "NutmegLane108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "NutmegLane108Audio();" );
  }
}
function NutmegLane108Audio(){
  NutmegLaneAudio()
  if (routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "AbbottRoad108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BlackwallTunnel108(){
  getRidOfDestination()
  BlackwallTunnel()
  if (routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "AbbottRoad108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BlackwallTunnel108Audio();" );
  }
}
function BlackwallTunnel108Audio(){
  BlackwallTunnelAudio()
  if (routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "StephensonStreet108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BazelyStreet108();" );
  }
}
function AbbottRoad108(){
  getRidOfDestination()
  AbbottRoad()
  if (routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "AbbottRoad108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "AbbottRoad108Audio();" );
  }
}
function AbbottRoad108Audio(){
  AbbottRoadAudio()
  if (routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "StephensonStreet108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BlackwallTunnel108();" );
  }
}
function StephensonStreet108(){
  getRidOfDestination()
  StephensonStreet()
  if (routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "StephensonStreet108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "StephensonStreet108Audio();" );
  }
}
function StephensonStreet108Audio(){
  StephensonStreetAudio()
  if (routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "CanningTownStation108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CanningTownStation108(){
  getRidOfDestination()
  CanningTownStation()
  if (routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "CanningTownStation108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "CanningTownStation108Audio();" );
  }
}
function CanningTownStation108Audio(){
  CanningTownStationAudio()
  if (routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CanningTownBusStation108(){
  getRidOfDestination()
  CanningTownBusStation()
  if (routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "CanningTownStation108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "CanningTownBusStation108Audio();" );
  }
}
function CanningTownBusStation108Audio(){
  CanningTownBusStationAudio()
  if (routeDestination === "CanningTown108"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "AbbottRoad108();" );
  }
}
function BlackwallTunnelEastIndiaDockRoad108(){
  getRidOfDestination()
  BlackwallTunnelEastIndiaDockRoad()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "BlackwallTunnelEastIndiaDockRoad108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BlackwallTunnelEastIndiaDockRoad108Audio();" );
  }
}
function BlackwallTunnelEastIndiaDockRoad108Audio(){
  BlackwallTunnelEastIndiaDockRoadAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "BoordStreet108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function MordenWharfRoad108(){
  getRidOfDestination()
  MordenWharfRoad()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "BoordStreet108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "MordenWharfRoad108Audio();" );
  }
}
function MordenWharfRoad108Audio(){
  MordenWharfRoadAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "NorthGreenwichStation108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BazelyStreet108();" );
  }
}
function BlackwallLane108(){
  getRidOfDestination()
  BlackwallLane()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "BoordStreet108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BlackwallLane108Audio();" );
  }
}
function BlackwallLane108Audio(){
  BlackwallLaneAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "NorthGreenwichStation108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "MordenWharfRoad108();" );
  }
}
function BoordStreet108(){
  getRidOfDestination()
  BoordStreet()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "BoordStreet108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BoordStreet108Audio();" );
  }
}
function BoordStreet108Audio(){
  BoordStreetAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "NorthGreenwichStation108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BlackwallLane108();" );
  }
}
function NorthGreenwichStation108(){
  getRidOfDestination()
  NorthGreenwichStation()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "NorthGreenwichStation108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "NorthGreenwichStation108Audio();" );
  }
}
function NorthGreenwichStation108Audio(){
  NorthGreenwichStationAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "MillenniumVillageOvalSquare108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BoordStreet108();" );
  }
}
function MillenniumVillageOvalSquare108(){
  getRidOfDestination()
  MillenniumVillageOvalSquare()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "MillenniumVillageOvalSquare108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "MillenniumVillageOvalSquare108Audio();" );
  }
}
function MillenniumVillageOvalSquare108Audio(){
  MillenniumVillageOvalSquareAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "MillenniumVillageSouth108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "NorthGreenwichStation108();" );
  }
}
function MillenniumVillageSouth108(){
  getRidOfDestination()
  MillenniumVillageSouth()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "MillenniumVillageSouth108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "MillenniumVillageSouth108Audio();" );
  }
}
function MillenniumVillageSouth108Audio(){
  MillenniumVillageSouthAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "MillenniumLeisureParkWest108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "MillenniumVillageOvalSquare108();" );
  }
}
function MillenniumLeisureParkWest108(){
  getRidOfDestination()
  MillenniumLeisureParkWest()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "MillenniumLeisureParkWest108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "MillenniumLeisureParkWest108Audio();" );
  }
}
function MillenniumLeisureParkWest108Audio(){
  MillenniumLeisureParkWestAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "MillenniumLeisureParkEast108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "MillenniumVillageSouth108();" );
  }
}
function MillenniumLeisureParkEast108(){
  getRidOfDestination()
  MillenniumLeisureParkEast()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "MillenniumLeisureParkEast108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "MillenniumLeisureParkEast108Audio();" );
  }
}
function MillenniumLeisureParkEast108Audio(){
  MillenniumLeisureParkEastAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "CombedaleRoad108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "MillenniumLeisureParkWest108();" );
  }
}
function CombedaleRoad108(){
  getRidOfDestination()
  CombedaleRoad()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "CombedaleRoad108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "CombedaleRoad108Audio();" );
  }
}
function CombedaleRoad108Audio(){
  CombedaleRoadAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "WestcombeParkStation108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function KemsingRoad108(){
  getRidOfDestination()
  KemsingRoad()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "WestcombeParkStation108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "KemsingRoad108Audio();" );
  }
}
function KemsingRoad108Audio(){
  KemsingRoadAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "KirksideRoad108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "MillenniumLeisureParkEast108();" );
  }
}
function WesterdaleRoad108(){
  getRidOfDestination()
  WesterdaleRoad()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "WestcombeParkStation108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "WesterdaleRoad108Audio();" );
  }
}
function WesterdaleRoad108Audio(){
  WesterdaleRoadAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "KirksideRoad108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "KemsingRoad108();" );
  }
}
function WestcombeParkStation108(){
  getRidOfDestination()
  WestcombeParkStation()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "WestcombeParkStation108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "WestcombeParkStation108Audio();" );
  }
}
function WestcombeParkStation108Audio(){
  WestcombeParkStationAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "KirksideRoad108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "WesterdaleRoad108();" );
  }
}
function KirksideRoad108(){
  getRidOfDestination()
  KirksideRoad()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "KirksideRoad108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "KirksideRoad108Audio();" );
  }
}
function KirksideRoad108Audio(){
  KirksideRoadAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "BlackheathRoyalStandard108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "WestcombeParkStation108();" );
  }
}
function BlackheathRoyalStandard108(){
  getRidOfDestination()
  BlackheathRoyalStandard()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "BlackheathRoyalStandard108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BlackheathRoyalStandard108Audio();" );
  }
}
function BlackheathRoyalStandard108Audio(){
  BlackheathRoyalStandardAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "StrathedenParade108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "KirksideRoad108();" );
  }
}
function StrathedenParade108(){
  getRidOfDestination()
  StrathedenParade()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "StrathedenParade108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "StrathedenParade108Audio();" );
  }
}
function StrathedenParade108Audio(){
  StrathedenParadeAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "StrathedenRoadShootersHillRoad108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StrathedenRoadShootersHillRoad108(){
  getRidOfDestination()
  StrathedenRoadShootersHillRoad()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "StrathedenRoadShootersHillRoad108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "StrathedenRoadShootersHillRoad108Audio();" );
  }
}
function StrathedenRoadShootersHillRoad108Audio(){
  StrathedenRoadShootersHillRoadAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "StGermansPlace108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BlackheathRoyalStandard108();" );
  }
}
function StGermansPlace108(){
  getRidOfDestination()
  StGermansPlace()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "StGermansPlace108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "StGermansPlace108Audio();" );
  }
}
function StGermansPlace108Audio(){
  StGermansPlaceAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "MontpelierRow108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "StrathedenRoadShootersHillRoad108();" );
  }
}
function MontpelierRow108(){
  getRidOfDestination()
  MontpelierRow()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "MontpelierRow108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "MontpelierRow108Audio();" );
  }
}
function MontpelierRow108Audio(){
  MontpelierRowAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "BlackheathStation108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "StGermansPlace108();" );
  }
}
function RoyalParade108(){
  getRidOfDestination()
  RoyalParade()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "BlackheathStation108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "RoyalParade108Audio();" );
  }
}
function RoyalParade108Audio(){
  RoyalParadeAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "BlackheathHospital108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "MontpelierRow108();" );
  }
}
function BlackheathStation108(){
  getRidOfDestination()
  BlackheathStation()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "BlackheathStation108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BlackheathStation108Audio();" );
  }
}
function BlackheathStation108Audio(){
  BlackheathStationAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "BlackheathHospital108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "RoyalParade108();" );
  }
}
function BlackheathHospital108(){
  getRidOfDestination()
  BlackheathHospital()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "BlackheathHospital108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BlackheathHospital108Audio();" );
  }
}
function BlackheathHospital108Audio(){
  BlackheathHospitalAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "StMargaretsChurchBrandramRoad108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BlackheathStation108();" );
  }
}
function StMargaretsChurchBrandramRoad108(){
  getRidOfDestination()
  StMargaretsChurchBrandramRoad()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "StMargaretsChurchBrandramRoad108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "StMargaretsChurchBrandramRoad108Audio();" );
  }
}
function StMargaretsChurchBrandramRoad108Audio(){
  StMargaretsChurchBrandramRoadAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "TheSquirrels108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "BlackheathHospital108();" );
  }
}
function TheSquirrels108(){
  getRidOfDestination()
  TheSquirrels()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "TheSquirrels108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "TheSquirrels108Audio();" );
  }
}
function TheSquirrels108Audio(){
  TheSquirrelsAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "LockmeadRoad108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "StMargaretsChurchBrandramRoad108();" );
  }
}
function LockmeadRoad108(){
  getRidOfDestination()
  LockmeadRoad()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "LockmeadRoad108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "LockmeadRoad108Audio();" );
  }
}
function LockmeadRoad108Audio(){
  LockmeadRoadAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "LewishamClockTower108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "TheSquirrels108();" );
  }
}
function LewishamClockTower108(){
  getRidOfDestination()
  LewishamClockTower()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "LewishamClockTower108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "LewishamClockTower108Audio();" );
  }
}
function LewishamClockTower108Audio(){
  LewishamClockTowerAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "LewishamStation108();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LewishamStation108(){
  getRidOfDestination()
  LewishamStation()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "LewishamStation108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "LewishamStation108Audio();" );
  }
}
function LewishamStation108Audio(){
  LewishamStationAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LewishamCentre108(){
  getRidOfDestination()
  LewishamCentre()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "LewishamStation108Audio();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "LewishamCentre108Audio();" );
  }
}
function LewishamCentre108Audio(){
  LewishamCentreAudio()
  if (routeDestination === "Lewisham108"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "StratfordInternational108") {
    NextDestination.setAttribute( "onClick", "LockmeadRoad108();" );
  }
}

function IsleofDogsPoliceStation351(){
  getRidOfDestination()
  IsleofDogsPoliceStation()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "IsleofDogsPoliceStation351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "IsleofDogsPoliceStation351Audio();" );
  }
}
function IsleofDogsPoliceStation351Audio(){
  IsleofDogsPoliceStationAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "IslandGardensStation351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function GeorgeGreensSchool351(){
  getRidOfDestination()
  GeorgeGreensSchool()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "IslandGardensStation351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "GeorgeGreensSchool351Audio();" );
  }
}
function GeorgeGreensSchool351Audio(){
  GeorgeGreensSchoolAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "EastFerryRoad351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function IslandGardensStation351(){
  getRidOfDestination()
  IslandGardensStation()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "IslandGardensStation351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "IslandGardensStation351Audio();" );
  }
}
function IslandGardensStation351Audio(){
  IslandGardensStationAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "EastFerryRoad351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "GeorgeGreensSchool351();" );
  }
}
function EastFerryRoad351(){
  getRidOfDestination()
  EastFerryRoad()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "EastFerryRoad351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "EastFerryRoad351Audio();" );
  }
}
function EastFerryRoad351Audio(){
  EastFerryRoadAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "MudchuteStationSpindriftAve351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function MudchuteStationSpindriftAve351(){
  getRidOfDestination()
  MudchuteStationSpindriftAve()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "MudchuteStationSpindriftAve351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "MudchuteStationSpindriftAve351Audio();" );
  }
}
function MudchuteStationSpindriftAve351Audio(){
  MudchuteStationSpindriftAveAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "MudchuteStation351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function MillwallPark351(){
  getRidOfDestination()
  MillwallPark()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "MudchuteStation351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "MillwallPark351Audio();" );
  }
}
function MillwallPark351Audio(){
  MillwallParkAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "CrossharbourAsda351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "IslandGardensStation351();" );
  }
}
function MudchuteStation351(){
  getRidOfDestination()
  MudchuteStation()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "MudchuteStation351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "MudchuteStation351Audio();" );
  }
}
function MudchuteStation351Audio(){
  MudchuteStationAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "CrossharbourAsda351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "MillwallPark351();" );
  }
}
function CrossharbourAsda351(){
  getRidOfDestination()
  CrossharbourAsda()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "CrossharbourAsda351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "CrossharbourAsda351Audio();" );
  }
}
function CrossharbourAsda351Audio(){
  CrossharbourAsdaAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "CrossharbourStation351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "MudchuteStation351();" );
  }
}
function CrossharbourStation351(){
  getRidOfDestination()
  CrossharbourStation()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "CrossharbourStation351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "CrossharbourStation351Audio();" );
  }
}
function CrossharbourStation351Audio(){
  CrossharbourStationAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "HarbourExchangeSquare351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "CrossharbourAsda351();" );
  }
}
function EastFerryRoadtwo351(){
  getRidOfDestination()
  EastFerryRoad()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "HarbourExchangeSquare351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "EastFerryRoadtwo351Audio();" );
  }
}
function EastFerryRoadtwo351Audio(){
  EastFerryRoadAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "SouthQuayStation351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "CrossharbourStation351();" );
  }
}
function HarbourExchangeSquare351(){
  getRidOfDestination()
  HarbourExchangeSquare()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "HarbourExchangeSquare351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "HarbourExchangeSquare351Audio();" );
  }
}
function HarbourExchangeSquare351Audio(){
  HarbourExchangeSquareAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "SouthQuayStation351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "EastFerryRoadtwo351();" );
  }
}
function SouthQuayStation351(){
  getRidOfDestination()
  SouthQuayStation()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "SouthQuayStation351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "SouthQuayStation351Audio();" );
  }
}
function SouthQuayStation351Audio(){
  SouthQuayStationAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "AdmiralsWay351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "HarbourExchangeSquare351();" );
  }
}
function AdmiralsWay351(){
  getRidOfDestination()
  AdmiralsWay()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "AdmiralsWay351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "AdmiralsWay351Audio();" );
  }
}
function AdmiralsWay351Audio(){
  AdmiralsWayAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "MastmakersRoad351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "SouthQuayStation351();" );
  }
}
function MastmakersRoad351(){
  getRidOfDestination()
  MastmakersRoad()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "MastmakersRoad351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "MastmakersRoad351Audio();" );
  }
}
function MastmakersRoad351Audio(){
  MastmakersRoadAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "HeronQuays351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "AdmiralsWay351();" );
  }
}
function HeronQuays351(){
  getRidOfDestination()
  HeronQuays()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "HeronQuays351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "HeronQuays351Audio();" );
  }
}
function HeronQuays351Audio(){
  HeronQuaysAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "CanaryWharfStation351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "MastmakersRoad351();" );
  }
}
function CanaryWharfStation351(){
  getRidOfDestination()
  CanaryWharfStation()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "CanaryWharfStation351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "CanaryWharfStation351Audio();" );
  }
}
function CanaryWharfStation351Audio(){
  CanaryWharfStationAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "CanadaSquareSouthCanaryWharfStn351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "HeronQuays351();" );
  }
}
function CanadaSquareSouthCanaryWharfStn351(){
  getRidOfDestination()
  CanadaSquareSouthCanaryWharfStn()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "CanadaSquareSouthCanaryWharfStn351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "CanadaSquareSouthCanaryWharfStn351Audio();" );
  }
}
function CanadaSquareSouthCanaryWharfStn351Audio(){
  CanadaSquareSouthCanaryWharfStnAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "CanaryWharfStationtwo351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CanaryWharfStationtwo351(){
  getRidOfDestination()
  CanaryWharfStation()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "CanaryWharfStationtwo351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "CanaryWharfStationtwo351Audio();" );
  }
}
function CanaryWharfStationtwo351Audio(){
  CanaryWharfStationAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "WestIndiaAvenue351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "CanaryWharfStation351();" );
  }
}
function WestIndiaAvenue351(){
  getRidOfDestination()
  WestIndiaAvenue()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "WestIndiaAvenue351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "WestIndiaAvenue351Audio();" );
  }
}
function WestIndiaAvenue351Audio(){
  WestIndiaAvenueAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "WestferryCircusCanaryWharfPier351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "CanaryWharfStationtwo351();" );
  }
}
function WestferryCircusCanaryWharfPier351(){
  getRidOfDestination()
  WestferryCircusCanaryWharfPier()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "WestferryCircusCanaryWharfPier351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "WestferryCircusCanaryWharfPier351Audio();" );
  }
}
function WestferryCircusCanaryWharfPier351Audio(){
  WestferryCircusCanaryWharfPierAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "WestferryStation351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WestferryStation351(){
  getRidOfDestination()
  WestferryStation()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "WestferryStation351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "WestferryStation351Audio();" );
  }
}
function WestferryStation351Audio(){
  WestferryStationAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "SalterStreet351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "WestIndiaAvenue351();" );
  }
}
function SalterStreet351(){
  getRidOfDestination()
  SalterStreet()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "SalterStreet351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "SalterStreet351Audio();" );
  }
}
function SalterStreet351Audio(){
  SalterStreetAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LimehousePoliceStation351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LimehousePoliceStation351(){
  getRidOfDestination()
  LimehousePoliceStation()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LimehousePoliceStation351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "LimehousePoliceStation351Audio();" );
  }
}
function LimehousePoliceStation351Audio(){
  LimehousePoliceStationAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LimehouseTownHall351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "WestferryStation351();" );
  }
}
function LimehouseTownHall351(){
  getRidOfDestination()
  LimehouseTownHall()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LimehouseTownHall351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "LimehouseTownHall351Audio();" );
  }
}
function LimehouseTownHall351Audio(){
  LimehouseTownHallAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LowellStreet351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BurdettRoad351(){
  getRidOfDestination()
  BurdettRoad()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LowellStreet351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "BurdettRoad351Audio();" );
  }
}
function BurdettRoad351Audio(){
  BurdettRoadAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LimehouseStation351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "LimehousePoliceStation351Audio();" );
  }
}
function SalmonLane351(){
  getRidOfDestination()
  SalmonLane()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LowellStreet351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "SalmonLane351Audio();" );
  }
}
function SalmonLane351Audio(){
  SalmonLaneAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LimehouseStation351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "BurdettRoad351();" );
  }
}
function LowellStreet351(){
  getRidOfDestination()
  LowellStreet()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LowellStreet351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "LowellStreet351Audio();" );
  }
}
function LowellStreet351Audio(){
  LowellStreetAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LimehouseStation351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "SalmonLane351();" );
  }
}
function LimehouseStation351(){
  getRidOfDestination()
  LimehouseStation()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LimehouseStation351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "LimehouseStation351Audio();" );
  }
}
function LimehouseStation351Audio(){
  LimehouseStationAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "StepneyMethodistChurch351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "LowellStreet351();" );
  }
}
function StepneyMethodistChurch351(){
  getRidOfDestination()
  StepneyMethodistChurch()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "StepneyMethodistChurch351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "StepneyMethodistChurch351Audio();" );
  }
}
function StepneyMethodistChurch351Audio(){
  StepneyMethodistChurchAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "MarionRichardsonSchool351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "LimehouseStation351();" );
  }
}
function MarionRichardsonSchool351(){
  getRidOfDestination()
  MarionRichardsonSchool()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "MarionRichardsonSchool351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "MarionRichardsonSchool351Audio();" );
  }
}
function MarionRichardsonSchool351Audio(){
  MarionRichardsonSchoolAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "ExmouthEstate351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ExmouthEstate351(){
  getRidOfDestination()
  ExmouthEstate()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "ExmouthEstate351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "ExmouthEstate351Audio();" );
  }
}
function ExmouthEstate351Audio(){
  ExmouthEstateAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "StMarysStMichaelsChurch351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ArbourSquare351(){
  getRidOfDestination()
  ArbourSquare()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "StMarysStMichaelsChurch351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "ArbourSquare351Audio();" );
  }
}
function ArbourSquare351Audio(){
  ArbourSquareAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "WatneyMarket351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "StepneyMethodistChurch351();" );
  }
}
function StMarysStMichaelsChurch351(){
  getRidOfDestination()
  StMarysStMichaelsChurch()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "StMarysStMichaelsChurch351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "StMarysStMichaelsChurch351Audio();" );
  }
}
function StMarysStMichaelsChurch351Audio(){
  StMarysStMichaelsChurchAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "WatneyMarket351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "ArbourSquare351();" );
  }
}
function WatneyMarket351(){
  getRidOfDestination()
  WatneyMarket()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "WatneyMarket351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "WatneyMarket351Audio();" );
  }
}
function WatneyMarket351Audio(){
  WatneyMarketAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "NewRoad351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "StMarysStMichaelsChurch351();" );
  }
}
function NewRoad351(){
  getRidOfDestination()
  NewRoad()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "NewRoad351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "NewRoad351Audio();" );
  }
}
function NewRoad351Audio(){
  NewRoadAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "HenriquesStreet351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "WatneyMarket351();" );
  }
}
function HenriquesStreet351(){
  getRidOfDestination()
  HenriquesStreet()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "HenriquesStreet351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "HenriquesStreet351Audio();" );
  }
}
function HenriquesStreet351Audio(){
  HenriquesStreetAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "AldgateEastStation351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "NewRoad351();" );
  }
}
function AldgateEastStation351(){
  getRidOfDestination()
  AldgateEastStation()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "AldgateEastStation351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "AldgateEastStation351Audio();" );
  }
}
function AldgateEastStation351Audio(){
  AldgateEastStationAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "AldgateStation351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "HenriquesStreet351();" );
  }
}
function AldgateStation351(){
  getRidOfDestination()
  AldgateStation()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "AldgateStation351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "AldgateStation351Audio();" );
  }
}
function AldgateStation351Audio(){
  AldgateStationAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "Minories351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function Minories351(){
  getRidOfDestination()
  Minories()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "Minories351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "Minories351Audio();" );
  }
}
function Minories351Audio(){
  MinoriesAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "TowerHillTowerGatewayStation351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function TowerHillTowerGatewayStation351(){
  getRidOfDestination()
  TowerHillTowerGatewayStation()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "TowerHillTowerGatewayStation351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "TowerHillTowerGatewayStation351Audio();" );
  }
}
function TowerHillTowerGatewayStation351Audio(){
  TowerHillTowerGatewayStationAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "TowerBridge351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function MansellStreet351(){
  getRidOfDestination()
  MansellStreet()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "TowerBridge351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "MansellStreet351Audio();" );
  }
}
function MansellStreet351Audio(){
  MansellStreetAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "DruidStreet351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "AldgateEastStation351();" );
  }
}
function TowerGatewayStation351(){
  getRidOfDestination()
  TowerGatewayStation()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "TowerBridge351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "TowerGatewayStation351Audio();" );
  }
}
function TowerGatewayStation351Audio(){
  TowerGatewayStationAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "DruidStreet351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "MansellStreet351();" );
  }
}
function TowerBridge351(){
  getRidOfDestination()
  TowerBridge()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "TowerBridge351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "TowerBridge351Audio();" );
  }
}
function TowerBridge351Audio(){
  TowerBridgeAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "DruidStreet351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "TowerGatewayStation351();" );
  }
}
function DruidStreet351(){
  getRidOfDestination()
  DruidStreet()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "DruidStreet351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "DruidStreet351Audio();" );
  }
}
function DruidStreet351Audio(){
  DruidStreetAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "AbbeyStreet351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "TowerBridge351();" );
  }
}
function AbbeyStreet351(){
  getRidOfDestination()
  AbbeyStreet()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "AbbeyStreet351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "AbbeyStreet351Audio();" );
  }
}
function AbbeyStreet351Audio(){
  AbbeyStreetAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "GrangeRoadCaledonianMarket351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "DruidStreet351();" );
  }
}
function GrangeRoadCaledonianMarket351(){
  getRidOfDestination()
  GrangeRoadCaledonianMarket()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "GrangeRoadCaledonianMarket351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "GrangeRoadCaledonianMarket351Audio();" );
  }
}
function GrangeRoadCaledonianMarket351Audio(){
  GrangeRoadCaledonianMarketAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "BricklayersArmsTowerBridgeRoad351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "AbbeyStreet351();" );
  }
}
function BricklayersArmsTowerBridgeRoad351(){
  getRidOfDestination()
  BricklayersArmsTowerBridgeRoad()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "BricklayersArmsTowerBridgeRoad351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "BricklayersArmsTowerBridgeRoad351Audio();" );
  }
}
function BricklayersArmsTowerBridgeRoad351Audio(){
  BricklayersArmsTowerBridgeRoadAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "BricklayersArmsNewKentRoad351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "GrangeRoadCaledonianMarket351();" );
  }
}
function BricklayersArmsNewKentRoad351(){
  getRidOfDestination()
  BricklayersArmsNewKentRoad()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "BricklayersArmsNewKentRoad351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "BricklayersArmsNewKentRoad351Audio();" );
  }
}
function BricklayersArmsNewKentRoad351Audio(){
  BricklayersArmsNewKentRoadAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "RodneyPlace351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "BricklayersArmsTowerBridgeRoad351();" );
  }
}
function RodneyPlace351(){
  getRidOfDestination()
  RodneyPlace()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "RodneyPlace351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "RodneyPlace351Audio();" );
  }
}
function RodneyPlace351Audio(){
  RodneyPlaceAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "ElephantCastleNewKentRoad351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "BricklayersArmsNewKentRoad351();" );
  }
}
function ElephantCastleNewKentRoad351(){
  getRidOfDestination()
  ElephantCastleNewKentRoad()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "ElephantCastleNewKentRoad351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "ElephantCastleNewKentRoad351Audio();" );
  }
}
function ElephantCastleNewKentRoad351Audio(){
  ElephantCastleNewKentRoadAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "ElephantCastleStation351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "RodneyPlace351();" );
  }
}
function ElephantCastleStation351(){
  getRidOfDestination()
  ElephantCastleStation()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "ElephantCastleStation351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "ElephantCastleStation351Audio();" );
  }
}
function ElephantCastleStation351Audio(){
  ElephantCastleStationAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LarcomStreet351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "ElephantCastleNewKentRoad351();" );
  }
}
function HamptonStreet351(){
  getRidOfDestination()
  HamptonStreet()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "HamptonStreet351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "HamptonStreet351Audio();" );
  }
}
function HamptonStreet351Audio(){
  HamptonStreetAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "EastStreet351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "ElephantCastleStation351();" );
  }
}
function LarcomStreet351(){
  getRidOfDestination()
  LarcomStreet()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LarcomStreet351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "LarcomStreet351Audio();" );
  }
}
function LarcomStreet351Audio(){
  LarcomStreetAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "EastStreet351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "HamptonStreet351();" );
  }
}
function EastStreet351(){
  getRidOfDestination()
  EastStreet()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "EastStreet351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "EastStreet351Audio();" );
  }
}
function EastStreet351Audio(){
  EastStreetAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "WestmorelandRoad351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "LarcomStreet351();" );
  }
}
function WestmorelandRoad351(){
  getRidOfDestination()
  WestmorelandRoad()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "WestmorelandRoad351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "WestmorelandRoad351Audio();" );
  }
}
function WestmorelandRoad351Audio(){
  WestmorelandRoadAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "CamberwellRoadAlbanyRoad351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "EastStreet351();" );
  }
}
function CamberwellRoadAlbanyRoad351(){
  getRidOfDestination()
  CamberwellRoadAlbanyRoad()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "CamberwellRoadAlbanyRoad351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "CamberwellRoadAlbanyRoad351Audio();" );
  }
}
function CamberwellRoadAlbanyRoad351Audio(){
  CamberwellRoadAlbanyRoadAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "BowyerPlace351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "WestmorelandRoad351();" );
  }
}
function BowyerPlace351(){
  getRidOfDestination()
  BowyerPlace()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "BowyerPlace351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "BowyerPlace351Audio();" );
  }
}
function BowyerPlace351Audio(){
  BowyerPlaceAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "MedlarStreet351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "CamberwellRoadAlbanyRoad351();" );
  }
}
function WyndhamRoad351(){
  getRidOfDestination()
  WyndhamRoad()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "WyndhamRoad351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "WyndhamRoad351Audio();" );
  }
}
function WyndhamRoad351Audio(){
  WyndhamRoadAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "DenmarkHillCamberwellGreen351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "BowyerPlace351();" );
  }
}
function MedlarStreet351(){
  getRidOfDestination()
  MedlarStreet()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "MedlarStreet351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "MedlarStreet351Audio();" );
  }
}
function MedlarStreet351Audio(){
  MedlarStreetAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "DenmarkHillCamberwellGreen351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "WyndhamRoad351();" );
  }
}
function CamberwellGreen351(){
  getRidOfDestination()
  CamberwellGreen()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "DenmarkHillCamberwellGreen351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "CamberwellGreen351Audio();" );
  }
}
function CamberwellGreen351Audio(){
  CamberwellGreenAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "ValmarRoad351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "MedlarStreet351();" );
  }
}
function DenmarkHillCamberwellGreen351(){
  getRidOfDestination()
  DenmarkHillCamberwellGreen()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "DenmarkHillCamberwellGreen351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "DenmarkHillCamberwellGreen351Audio();" );
  }
}
function DenmarkHillCamberwellGreen351Audio(){
  DenmarkHillCamberwellGreenAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "ValmarRoad351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "CamberwellGreen351();" );
  }
}
function ValmarRoad351(){
  getRidOfDestination()
  ValmarRoad()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "ValmarRoad351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "ValmarRoad351Audio();" );
  }
}
function ValmarRoad351Audio(){
  ValmarRoadAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "CaldecotRoad351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "DenmarkHillCamberwellGreen351();" );
  }
}
function CaldecotRoad351(){
  getRidOfDestination()
  CaldecotRoad()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "CaldecotRoad351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "CaldecotRoad351Audio();" );
  }
}
function CaldecotRoad351Audio(){
  CaldecotRoadAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LilfordRoad351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "ValmarRoad351();" );
  }
}
function LilfordRoad351(){
  getRidOfDestination()
  LilfordRoad()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LilfordRoad351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "LilfordRoad351Audio();" );
  }
}
function LilfordRoad351Audio(){
  LilfordRoadAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LoughboroughJunctionStation351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "CaldecotRoad351();" );
  }
}
function PomfretRoad351(){
  getRidOfDestination()
  PomfretRoad()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LoughboroughJunctionStation351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "PomfretRoad351Audio();" );
  }
}
function PomfretRoad351Audio(){
  PomfretRoadAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "ShakespeareRoad351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "LilfordRoad351();" );
  }
}
function LoughboroughJunctionStation351(){
  getRidOfDestination()
  LoughboroughJunctionStation()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LoughboroughJunctionStation351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "LoughboroughJunctionStation351Audio();" );
  }
}
function LoughboroughJunctionStation351Audio(){
  LoughboroughJunctionStationAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "ShakespeareRoad351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "PomfretRoad351();" );
  }
}
function ShakespeareRoad351(){
  getRidOfDestination()
  ShakespeareRoad()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "ShakespeareRoad351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "ShakespeareRoad351Audio();" );
  }
}
function ShakespeareRoad351Audio(){
  ShakespeareRoadAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "MoorlandRoad351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "LoughboroughJunctionStation351();" );
  }
}
function MoorlandRoad351(){
  getRidOfDestination()
  MoorlandRoad()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "MoorlandRoad351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "MoorlandRoad351Audio();" );
  }
}
function MoorlandRoad351Audio(){
  MoorlandRoadAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "ElectricLane351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ElectricLane351(){
  getRidOfDestination()
  ElectricLane()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "ElectricLane351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "ElectricLane351Audio();" );
  }
}
function ElectricLane351Audio(){
  ElectricLaneAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LambethTownHall351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LambethTownHall351(){
  getRidOfDestination()
  LambethTownHall()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "LambethTownHall351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "LambethTownHall351Audio();" );
  }
}
function LambethTownHall351Audio(){
  LambethTownHallAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "BrixtonStation351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BrixtonStation351(){
  getRidOfDestination()
  BrixtonStation()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "BrixtonStation351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "BrixtonStation351Audio();" );
  }
}
function BrixtonStation351Audio(){
  BrixtonStationAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "BrixtonStationNR351();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BrixtonStationNR351(){
  getRidOfDestination()
  BrixtonStationNR()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "BrixtonStationNR351Audio();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "BrixtonStationNR351Audio();" );
  }
}
function BrixtonStationNR351Audio(){
  BrixtonStationNRAudio()
  if (routeDestination === "Brixton351"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "IslandGardens351") {
    NextDestination.setAttribute( "onClick", "ShakespeareRoad351();" );
  }
}

function GatewaySurgicalCentre276(){
  getRidOfDestination()
  GatewaySurgicalCentre()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "GatewaySurgicalCentre276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "GatewaySurgicalCentre276Audio();" );
  }
}
function GatewaySurgicalCentre276Audio(){
  GatewaySurgicalCentreAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospMainReception276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function NewhamUniversityHospMainReception276(){
  getRidOfDestination()
  NewhamUniversityHospMainReception()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospMainReception276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospMainReception276Audio();" );
  }
}
function NewhamUniversityHospMainReception276Audio(){
  NewhamUniversityHospMainReceptionAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospEmergencyDept276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "GatewaySurgicalCentre276();" );
  }
}
function NewhamUniversityHospEmergencyDept276(){
  getRidOfDestination()
  NewhamUniversityHospEmergencyDept()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospEmergencyDept276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospEmergencyDept276Audio();" );
  }
}
function NewhamUniversityHospEmergencyDept276Audio(){
  NewhamUniversityHospEmergencyDeptAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospNewVicCollege276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospMainReception276();" );
  }
}
function NewhamUniversityHospNewVicCollege276(){
  getRidOfDestination()
  NewhamUniversityHospNewVicCollege()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospNewVicCollege276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospNewVicCollege276Audio();" );
  }
}
function NewhamUniversityHospNewVicCollege276Audio(){
  NewhamUniversityHospNewVicCollegeAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "WigstonRoad276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospEmergencyDept276();" );
  }
}
function WigstonRoad276(){
  getRidOfDestination()
  WigstonRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "WigstonRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "WigstonRoad276Audio();" );
  }
}
function WigstonRoad276Audio(){
  WigstonRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "PlaistowPrinceRegentLane276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function PlaistowPrinceRegentLane276(){
  getRidOfDestination()
  PlaistowPrinceRegentLane()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "PlaistowPrinceRegentLane276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "PlaistowPrinceRegentLane276Audio();" );
  }
}
function PlaistowPrinceRegentLane276Audio(){
  PlaistowPrinceRegentLaneAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "PlaistowPoliceStation276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BeaumontRoad276(){
  getRidOfDestination()
  BeaumontRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "BeaumontRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "BeaumontRoad276Audio();" );
  }
}
function BeaumontRoad276Audio(){
  BeaumontRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospNewVicCollege276();" );
  }
}
function KhartoumRoad276(){
  getRidOfDestination()
  KhartoumRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "KhartoumRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "KhartoumRoad276Audio();" );
  }
}
function KhartoumRoad276Audio(){
  KhartoumRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "BeaumontRoad276();" );
  }
}
function PlaistowPoliceStation276(){
  getRidOfDestination()
  PlaistowPoliceStation()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "PlaistowPoliceStation276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "PlaistowPoliceStation276Audio();" );
  }
}
function PlaistowPoliceStation276Audio(){
  PlaistowPoliceStationAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "BalaamStreet276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "KhartoumRoad276();" );
  }
}
function BalaamStreet276(){
  getRidOfDestination()
  BalaamStreet()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "BalaamStreet276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "BalaamStreet276Audio();" );
  }
}
function BalaamStreet276Audio(){
  BalaamStreetAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "ChargeableLane276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "PlaistowPoliceStation276();" );
  }
}
function ChargeableLane276(){
  getRidOfDestination()
  ChargeableLane()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "ChargeableLane276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "ChargeableLane276Audio();" );
  }
}
function ChargeableLane276Audio(){
  ChargeableLaneAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "CroydonRoad276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CroydonRoad276(){
  getRidOfDestination()
  CroydonRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "CroydonRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "CroydonRoad276Audio();" );
  }
}
function CroydonRoad276Audio(){
  CroydonRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "RokebySchool276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function KingStreet276(){
  getRidOfDestination()
  KingStreet()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "KingStreet276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "KingStreet276Audio();" );
  }
}
function KingStreet276Audio(){
  KingStreetAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "BalaamStreet276();" );
  }
}
function RokebySchool276(){
  getRidOfDestination()
  RokebySchool()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "RokebySchool276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "RokebySchool276Audio();" );
  }
}
function RokebySchool276Audio(){
  RokebySchoolAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "HermitRoad276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "KingStreet276();" );
  }
}
function HermitRoad276(){
  getRidOfDestination()
  HermitRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "HermitRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "HermitRoad276Audio();" );
  }
}
function HermitRoad276Audio(){
  HermitRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "MalmesburyTerrace276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "RokebySchool276();" );
  }
}
function MalmesburyTerrace276(){
  getRidOfDestination()
  MalmesburyTerrace()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "MalmesburyTerrace276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "MalmesburyTerrace276Audio();" );
  }
}
function MalmesburyTerrace276Audio(){
  MalmesburyTerraceAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "StarPrimarySchool276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "HermitRoad276();" );
  }
}
function StarPrimarySchool276(){
  getRidOfDestination()
  StarPrimarySchool()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "StarPrimarySchool276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "StarPrimarySchool276Audio();" );
  }
}
function StarPrimarySchool276Audio(){
  StarPrimarySchoolAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "StarLaneStation276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StarLaneStation276(){
  getRidOfDestination()
  StarLaneStation()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "StarLaneStation276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "StarLaneStation276Audio();" );
  }
}
function StarLaneStation276Audio(){
  StarLaneStationAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "GodboldRoad276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ExningRoad276(){
  getRidOfDestination()
  ExningRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "ExningRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "ExningRoad276Audio();" );
  }
}
function ExningRoad276Audio(){
  ExningRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "MalmesburyTerrace276();" );
  }
}
function StarLaneStnStarPrimarySch276(){
  getRidOfDestination()
  StarLaneStnStarPrimarySch()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "StarLaneStnStarPrimarySch276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "StarLaneStnStarPrimarySch276Audio();" );
  }
}
function StarLaneStnStarPrimarySch276Audio(){
  StarLaneStnStarPrimarySchAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "ExningRoad276();" );
  }
}
function GodboldRoad276(){
  getRidOfDestination()
  GodboldRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "GodboldRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "GodboldRoad276Audio();" );
  }
}
function GodboldRoad276Audio(){
  GodboldRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "MilnerRoad276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "StarLaneStnStarPrimarySch276();" );
  }
}
function MilnerRoad276(){
  getRidOfDestination()
  MilnerRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "MilnerRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "MilnerRoad276Audio();" );
  }
}
function MilnerRoad276Audio(){
  MilnerRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "WestHamStation276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "GodboldRoad276();" );
  }
}
function WestHamStation276(){
  getRidOfDestination()
  WestHamStation()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "WestHamStation276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "WestHamStation276Audio();" );
  }
}
function WestHamStation276Audio(){
  WestHamStationAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "LeywickStreet276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "MilnerRoad276();" );
  }
}
function LeywickStreet276(){
  getRidOfDestination()
  LeywickStreet()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "LeywickStreet276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "LeywickStreet276Audio();" );
  }
}
function LeywickStreet276Audio(){
  LeywickStreetAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "MitreRoad276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CorporationStreet276(){
  getRidOfDestination()
  CorporationStreet()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "CorporationStreet276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "CorporationStreet276Audio();" );
  }
}
function CorporationStreet276Audio(){
  CorporationStreetAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "WestHamStation276();" );
  }
}
function MitreRoad276(){
  getRidOfDestination()
  MitreRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "MitreRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "MitreRoad276Audio();" );
  }
}
function MitreRoad276Audio(){
  MitreRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "ChurchStreet276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "CorporationStreet276();" );
  }
}
function ChurchStreet276(){
  getRidOfDestination()
  ChurchStreet()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "ChurchStreet276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "ChurchStreet276Audio();" );
  }
}
function ChurchStreet276Audio(){
  ChurchStreetAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "PaulStreet276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "MitreRoad276();" );
  }
}
function PaulStreet276(){
  getRidOfDestination()
  PaulStreet()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "PaulStreet276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "PaulStreet276Audio();" );
  }
}
function PaulStreet276Audio(){
  PaulStreetAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "StratfordBusStation276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BarnbyStreet276(){
  getRidOfDestination()
  BarnbyStreet()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "BarnbyStreet276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "BarnbyStreet276Audio();" );
  }
}
function BarnbyStreet276Audio(){
  BarnbyStreetAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "ChurchStreet276();" );
  }
}
function StratfordBroadway276(){
  getRidOfDestination()
  StratfordBroadway()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "StratfordBroadway276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "StratfordBroadway276Audio();" );
  }
}
function StratfordBroadway276Audio(){
  StratfordBroadwayAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "BarnbyStreet276();" );
  }
}
function StratfordBusStation276(){
  getRidOfDestination()
  StratfordBusStation()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "StratfordBusStation276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "StratfordBusStation276Audio();" );
  }
}
function StratfordBusStation276Audio(){
  StratfordBusStationAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "StratfordHighStCarpentersRoad276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "StratfordBroadway276();" );
  }
}
function StratfordHighStCarpentersRoad276(){
  getRidOfDestination()
  StratfordHighStCarpentersRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "StratfordHighStCarpentersRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "StratfordHighStCarpentersRoad276Audio();" );
  }
}
function StratfordHighStCarpentersRoad276Audio(){
  StratfordHighStCarpentersRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "WartonRoad276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "StratfordBusStation276();" );
  }
}
function WartonRoad276(){
  getRidOfDestination()
  WartonRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "WartonRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "WartonRoad276Audio();" );
  }
}
function WartonRoad276Audio(){
  WartonRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "AbbeyLane276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "StratfordHighStCarpentersRoad276();" );
  }
}
function AbbeyLane276(){
  getRidOfDestination()
  AbbeyLane()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "AbbeyLane276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "AbbeyLane276Audio();" );
  }
}
function AbbeyLane276Audio(){
  AbbeyLaneAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "BowFlyover276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BowFlyover276(){
  getRidOfDestination()
  BowFlyover()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "BowFlyover276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "BowFlyover276Audio();" );
  }
}
function BowFlyover276Audio(){
  BowFlyoverAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "BowChurch276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function MarshgateLane276(){
  getRidOfDestination()
  MarshgateLane()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "MarshgateLane276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "MarshgateLane276Audio();" );
  }
}
function MarshgateLane276Audio(){
  MarshgateLaneAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "WartonRoad276();" );
  }
}
function BowChurch276(){
  getRidOfDestination()
  BowChurch()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "BowChurch276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "BowChurch276Audio();" );
  }
}
function BowChurch276Audio(){
  BowChurchAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "BowBusGarage276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "MarshgateLane276();" );
  }
}
function BowBusGarage276(){
  getRidOfDestination()
  BowBusGarage()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "BowBusGarage276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "BowBusGarage276Audio();" );
  }
}
function BowBusGarage276Audio(){
  BowBusGarageAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "TredegarRoad276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "BowChurch276();" );
  }
}
function TredegarRoad276(){
  getRidOfDestination()
  TredegarRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "TredegarRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "TredegarRoad276Audio();" );
  }
}
function TredegarRoad276Audio(){
  TredegarRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "RomanRoadMarket276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "BowBusGarage276();" );
  }
}
function RomanRoadMarket276(){
  getRidOfDestination()
  RomanRoadMarket()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "RomanRoadMarket276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "RomanRoadMarket276Audio();" );
  }
}
function RomanRoadMarket276Audio(){
  RomanRoadMarketAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "OldFordRoad276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "TredegarRoad276();" );
  }
}
function OldFordRoad276(){
  getRidOfDestination()
  OldFordRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "OldFordRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "OldFordRoad276Audio();" );
  }
}
function OldFordRoad276Audio(){
  OldFordRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "WatersideClose276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "RomanRoadMarket276();" );
  }
}
function WatersideClose276(){
  getRidOfDestination()
  WatersideClose()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "WatersideClose276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "WatersideClose276Audio();" );
  }
}
function WatersideClose276Audio(){
  WatersideCloseAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "WickLane276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WickLane276(){
  getRidOfDestination()
  WickLane()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "WickLane276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "WickLane276Audio();" );
  }
}
function WickLane276Audio(){
  WickLaneAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "WansbeckRoad276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "OldFordRoad276();" );
  }
}
function WansbeckRoad276(){
  getRidOfDestination()
  WansbeckRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "WansbeckRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "WansbeckRoad276Audio();" );
  }
}
function WansbeckRoad276Audio(){
  WansbeckRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "RothburyRoad276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function MonierRoad276(){
  getRidOfDestination()
  MonierRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "MonierRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "MonierRoad276Audio();" );
  }
}
function MonierRoad276Audio(){
  MonierRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "WickLane276();" );
  }
}
function RothburyRoad276(){
  getRidOfDestination()
  RothburyRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "RothburyRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "RothburyRoad276Audio();" );
  }
}
function RothburyRoad276Audio(){
  RothburyRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "HackneyWickStation276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "MonierRoad276();" );
  }
}
function HackneyWickStation276(){
  getRidOfDestination()
  HackneyWickStation()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "HackneyWickStation276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "HackneyWickStation276Audio();" );
  }
}
function HackneyWickStation276Audio(){
  HackneyWickStationAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "BerkshireRoad276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "RothburyRoad276();" );
  }
}
function BerkshireRoad276(){
  getRidOfDestination()
  BerkshireRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "BerkshireRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "BerkshireRoad276Audio();" );
  }
}
function BerkshireRoad276Audio(){
  BerkshireRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "OsborneRoad276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "HackneyWickStation276();" );
  }
}
function OsborneRoad276(){
  getRidOfDestination()
  OsborneRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "OsborneRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "OsborneRoad276Audio();" );
  }
}
function OsborneRoad276Audio(){
  OsborneRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "TrowbridgeEstate276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "BerkshireRoad276();" );
  }
}
function TrowbridgeEstate276(){
  getRidOfDestination()
  TrowbridgeEstate()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "TrowbridgeEstate276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "TrowbridgeEstate276Audio();" );
  }
}
function TrowbridgeEstate276Audio(){
  TrowbridgeEstateAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "CrowfootClose276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "OsborneRoad276();" );
  }
}
function CrowfootClose276(){
  getRidOfDestination()
  CrowfootClose()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "CrowfootClose276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "CrowfootClose276Audio();" );
  }
}
function CrowfootClose276Audio(){
  CrowfootCloseAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "PoplarClose276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "TrowbridgeEstate276();" );
  }
}
function PoplarClose276(){
  getRidOfDestination()
  PoplarClose()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "PoplarClose276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "PoplarClose276Audio();" );
  }
}
function PoplarClose276Audio(){
  PoplarCloseAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "KingsmeadEstate276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LeeConservancyRoadPoplarClose276(){
  getRidOfDestination()
  LeeConservancyRoadPoplarClose()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "LeeConservancyRoadPoplarClose276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "LeeConservancyRoadPoplarClose276Audio();" );
  }
}
function LeeConservancyRoadPoplarClose276Audio(){
  LeeConservancyRoadPoplarCloseAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "MarshHill276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "CrowfootClose276();" );
  }
}
function KingsmeadEstate276(){
  getRidOfDestination()
  KingsmeadEstate()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "KingsmeadEstate276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "KingsmeadEstate276Audio();" );
  }
}
function KingsmeadEstate276Audio(){
  KingsmeadEstateAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "MarshHill276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "LeeConservancyRoadPoplarClose276();" );
  }
}
function MarshHill276(){
  getRidOfDestination()
  MarshHill()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "MarshHill276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "MarshHill276Audio();" );
  }
}
function MarshHill276Audio(){
  MarshHillAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "GlynRoad276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function AdleyStreet276(){
  getRidOfDestination()
  AdleyStreet()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "AdleyStreet276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "AdleyStreet276Audio();" );
  }
}
function AdleyStreet276Audio(){
  AdleyStreetAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "KingsmeadEstate276();" );
  }
}
function GlynRoad276(){
  getRidOfDestination()
  GlynRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "GlynRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "GlynRoad276Audio();" );
  }
}
function GlynRoad276Audio(){
  GlynRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "BrooksbysWalkHomertonStation276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "AdleyStreet276();" );
  }
}
function BrooksbysWalkHomertonStation276(){
  getRidOfDestination()
  BrooksbysWalkHomertonStation()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "BrooksbysWalkHomertonStation276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "BrooksbysWalkHomertonStation276Audio();" );
  }
}
function BrooksbysWalkHomertonStation276Audio(){
  BrooksbysWalkHomertonStationAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "HomertonHospital276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HomertonHospital276(){
  getRidOfDestination()
  HomertonHospital()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "HomertonHospital276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "HomertonHospital276Audio();" );
  }
}
function HomertonHospital276Audio(){
  HomertonHospitalAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "BanisterHouse276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BanisterHouse276(){
  getRidOfDestination()
  BanisterHouse()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "BanisterHouse276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "BanisterHouse276Audio();" );
  }
}
function BanisterHouse276Audio(){
  BanisterHouseAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "PonsfordStreet276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function PonsfordStreet276(){
  getRidOfDestination()
  PonsfordStreet()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "PonsfordStreet276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "PonsfordStreet276Audio();" );
  }
}
function PonsfordStreet276Audio(){
  PonsfordStreetAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "TrelawneyEstate276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function TrelawneyEstate276(){
  getRidOfDestination()
  TrelawneyEstate()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "TrelawneyEstate276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "TrelawneyEstate276Audio();" );
  }
}
function TrelawneyEstate276Audio(){
  TrelawneyEstateAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "HackneyTownHall276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HackneyTownHall276(){
  getRidOfDestination()
  HackneyTownHall()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "HackneyTownHall276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "HackneyTownHall276Audio();" );
  }
}
function HackneyTownHall276Audio(){
  HackneyTownHallAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "HackneyCentralStation276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HomertonHospitalWardleStreet276(){
  getRidOfDestination()
  HomertonHospitalWardleStreet()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "HomertonHospitalWardleStreet276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "HomertonHospitalWardleStreet276Audio();" );
  }
}
function HomertonHospitalWardleStreet276Audio(){
  HomertonHospitalWardleStreetAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "GlynRoad276();" );
  }
}
function HomertonHospitalHomertonRow276(){
  getRidOfDestination()
  HomertonHospitalHomertonRow()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "HomertonHospitalHomertonRow276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "HomertonHospitalHomertonRow276Audio();" );
  }
}
function HomertonHospitalHomertonRow276Audio(){
  HomertonHospitalHomertonRowAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "HomertonHospitalWardleStreet276();" );
  }
}
function FennStreet276(){
  getRidOfDestination()
  FennStreet()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "FennStreet276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "FennStreet276Audio();" );
  }
}
function FennStreet276Audio(){
  FennStreetAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "HomertonHospitalHomertonRow276();" );
  }
}
function HomertonTerrace276(){
  getRidOfDestination()
  HomertonTerrace()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "HomertonTerrace276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "HomertonTerrace276Audio();" );
  }
}
function HomertonTerrace276Audio(){
  HomertonTerraceAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "FennStreet276();" );
  }
}
function MorningLaneTrelawneyEstate276(){
  getRidOfDestination()
  MorningLaneTrelawneyEstate()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "MorningLaneTrelawneyEstate276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "MorningLaneTrelawneyEstate276Audio();" );
  }
}
function MorningLaneTrelawneyEstate276Audio(){
  MorningLaneTrelawneyEstateAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "HomertonTerrace276();" );
  }
}
function HackneyCentralStation276(){
  getRidOfDestination()
  HackneyCentralStation()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "HackneyCentralStation276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "HackneyCentralStation276Audio();" );
  }
}
function HackneyCentralStation276Audio(){
  HackneyCentralStationAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "AmhurstRoadHackneyDownsStation276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "MorningLaneTrelawneyEstate276();" );
  }
}
function AmhurstRoadHackneyDownsStation276(){
  getRidOfDestination()
  AmhurstRoadHackneyDownsStation()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "AmhurstRoadHackneyDownsStation276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "AmhurstRoadHackneyDownsStation276Audio();" );
  }
}
function AmhurstRoadHackneyDownsStation276Audio(){
  AmhurstRoadHackneyDownsStationAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "AmhurstRoadDalstonLane276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function AmhurstRoadDalstonLane276(){
  getRidOfDestination()
  AmhurstRoadDalstonLane()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "AmhurstRoadDalstonLane276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "AmhurstRoadDalstonLane276Audio();" );
  }
}
function AmhurstRoadDalstonLane276Audio(){
  AmhurstRoadDalstonLaneAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "SandringhamRoad276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HackneyDownsStation276(){
  getRidOfDestination()
  HackneyDownsStation()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "HackneyDownsStation276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "HackneyDownsStation276Audio();" );
  }
}
function HackneyDownsStation276Audio(){
  HackneyDownsStationAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "HackneyCentralStation276();" );
  }
}
function SandringhamRoad276(){
  getRidOfDestination()
  SandringhamRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "SandringhamRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "SandringhamRoad276Audio();" );
  }
}
function SandringhamRoad276Audio(){
  SandringhamRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "DownsParkRoad276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "HackneyDownsStation276();" );
  }
}
function DownsParkRoad276(){
  getRidOfDestination()
  DownsParkRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "DownsParkRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "DownsParkRoad276Audio();" );
  }
}
function DownsParkRoad276Audio(){
  DownsParkRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "ShacklewellLane276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "SandringhamRoad276();" );
  }
}
function ShacklewellLane276(){
  getRidOfDestination()
  ShacklewellLane()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "ShacklewellLane276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "ShacklewellLane276Audio();" );
  }
}
function ShacklewellLane276Audio(){
  ShacklewellLaneAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "RectoryRoadDownsRoad276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "DownsParkRoad276();" );
  }
}
function RectoryRoadDownsRoad276(){
  getRidOfDestination()
  RectoryRoadDownsRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "RectoryRoadDownsRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "RectoryRoadDownsRoad276Audio();" );
  }
}
function RectoryRoadDownsRoad276Audio(){
  RectoryRoadDownsRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "ManseRoad276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ManseRoad276(){
  getRidOfDestination()
  ManseRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "ManseRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "ManseRoad276Audio();" );
  }
}
function ManseRoad276Audio(){
  ManseRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "StokeNewingtonPoliceStation276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StokeNewingtonPoliceStation276(){
  getRidOfDestination()
  StokeNewingtonPoliceStation()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "StokeNewingtonPoliceStation276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "StokeNewingtonPoliceStation276Audio();" );
  }
}
function StokeNewingtonPoliceStation276Audio(){
  StokeNewingtonPoliceStationAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "BrookeRoad276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BrookeRoad276(){
  getRidOfDestination()
  BrookeRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "BrookeRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "BrookeRoad276Audio();" );
  }
}
function BrookeRoad276Audio(){
  BrookeRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "StokeNewingtonHighStGarnhamStreet276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StokeNewingtonHighStGarnhamStreet276(){
  getRidOfDestination()
  StokeNewingtonHighStGarnhamStreet()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "StokeNewingtonHighStGarnhamStreet276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "StokeNewingtonHighStGarnhamStreet276Audio();" );
  }
}
function StokeNewingtonHighStGarnhamStreet276Audio(){
  StokeNewingtonHighStGarnhamStreetAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "NorthwoldRoadStokeNewingtonCommon276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function NorthwoldRoadStokeNewingtonCommon276(){
  getRidOfDestination()
  NorthwoldRoadStokeNewingtonCommon()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "NorthwoldRoadStokeNewingtonCommon276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "NorthwoldRoadStokeNewingtonCommon276Audio();" );
  }
}
function NorthwoldRoadStokeNewingtonCommon276Audio(){
  NorthwoldRoadStokeNewingtonCommonAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "StokeNewingtonCommon276();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function DownsRoad276(){
  getRidOfDestination()
  DownsRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "DownsRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "DownsRoad276Audio();" );
  }
}
function DownsRoad276Audio(){
  DownsRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "ShacklewellLane276();" );
  }
}
function RectoryRoadBrookeRoad276(){
  getRidOfDestination()
  RectoryRoadBrookeRoad()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "RectoryRoadBrookeRoad276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "RectoryRoadBrookeRoad276Audio();" );
  }
}
function RectoryRoadBrookeRoad276Audio(){
  RectoryRoadBrookeRoadAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "DownsRoad276();" );
  }
}
function StokeNewingtonCommon276(){
  getRidOfDestination()
  StokeNewingtonCommon()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "StokeNewingtonCommon276Audio();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "StokeNewingtonCommon276Audio();" );
  }
}
function StokeNewingtonCommon276Audio(){
  StokeNewingtonCommonAudio()
  if (routeDestination === "StokeNewington276"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "NewhamHospital276") {
    NextDestination.setAttribute( "onClick", "RectoryRoadBrookeRoad276();" );
  }
}

function WoodbinePlace101(){
  getRidOfDestination()
  WoodbinePlace()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "WoodbinePlace101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "WoodbinePlace101Audio();" );
  }
}
function WoodbinePlace101Audio(){
  WoodbinePlaceAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "WansteadHighStWansteadStation101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function WansteadHighStWansteadStation101(){
  getRidOfDestination()
  WansteadHighStWansteadStation()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "WansteadHighStWansteadStation101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "WansteadHighStWansteadStation101Audio();" );
  }
}
function WansteadHighStWansteadStation101Audio(){
  WansteadHighStWansteadStationAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "WansteadStationGeorgeGreen101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WansteadStationGeorgeGreen101(){
  getRidOfDestination()
  WansteadStationGeorgeGreen()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "WansteadStationGeorgeGreen101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "WansteadStationGeorgeGreen101Audio();" );
  }
}
function WansteadStationGeorgeGreen101Audio(){
  WansteadStationGeorgeGreenAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "FelsteadRoad101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function FelsteadRoad101(){
  getRidOfDestination()
  FelsteadRoad()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "FelsteadRoad101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "FelsteadRoad101Audio();" );
  }
}
function FelsteadRoad101Audio(){
  FelsteadRoadAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "BushRoad101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WansteadStation101(){
  getRidOfDestination()
  WansteadStation()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "WansteadStation101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "WansteadStation101Audio();" );
  }
}
function WansteadStation101Audio(){
  WansteadStationAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "WoodbinePlace101();" );
  }
}
function CambridgePark101(){
  getRidOfDestination()
  CambridgePark()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "CambridgePark101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "CambridgePark101Audio();" );
  }
}
function CambridgePark101Audio(){
  CambridgeParkAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "WansteadStation101();" );
  }
}
function BushRoad101(){
  getRidOfDestination()
  BushRoad()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "BushRoad101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "BushRoad101Audio();" );
  }
}
function BushRoad101Audio(){
  BushRoadAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "BlakeHallCrescent101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "CambridgePark101();" );
  }
}
function BlakeHallCrescent101(){
  getRidOfDestination()
  BlakeHallCrescent()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "BlakeHallCrescent101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "BlakeHallCrescent101Audio();" );
  }
}
function BlakeHallCrescent101Audio(){
  BlakeHallCrescentAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "QueenswoodGardens101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "BushRoad101();" );
  }
}
function QueenswoodGardens101(){
  getRidOfDestination()
  QueenswoodGardens()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "QueenswoodGardens101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "QueenswoodGardens101Audio();" );
  }
}
function QueenswoodGardens101Audio(){
  QueenswoodGardensAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "ParkRoad101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "BlakeHallCrescent101();" );
  }
}
function ParkRoad101(){
  getRidOfDestination()
  ParkRoad()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "ParkRoad101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "ParkRoad101Audio();" );
  }
}
function ParkRoad101Audio(){
  ParkRoadAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "HerongateRoad101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "QueenswoodGardens101();" );
  }
}
function HerongateRoad101(){
  getRidOfDestination()
  HerongateRoad()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "HerongateRoad101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "HerongateRoad101Audio();" );
  }
}
function HerongateRoad101Audio(){
  HerongateRoadAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "EmpressAvenue101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function DoverRoad101(){
  getRidOfDestination()
  DoverRoad()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "DoverRoad101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "DoverRoad101Audio();" );
  }
}
function DoverRoad101Audio(){
  DoverRoadAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "ParkRoad101();" );
  }
}
function EmpressAvenue101(){
  getRidOfDestination()
  EmpressAvenue()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "EmpressAvenue101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "EmpressAvenue101Audio();" );
  }
}
function EmpressAvenue101Audio(){
  EmpressAvenueAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "MerlinRoad101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "DoverRoad101();" );
  }
}
function MerlinRoad101(){
  getRidOfDestination()
  MerlinRoad()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "MerlinRoad101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "MerlinRoad101Audio();" );
  }
}
function MerlinRoad101Audio(){
  MerlinRoadAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "CityofLondonCemetery101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "EmpressAvenue101();" );
  }
}
function WansteadParkAvenue101(){
  getRidOfDestination()
  WansteadParkAvenue()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "WansteadParkAvenue101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "WansteadParkAvenue101Audio();" );
  }
}
function WansteadParkAvenue101Audio(){
  WansteadParkAvenueAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "MerlinRoad101();" );
  }
}
function CityofLondonCemetery101(){
  getRidOfDestination()
  CityofLondonCemetery()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "CityofLondonCemetery101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "CityofLondonCemetery101Audio();" );
  }
}
function CityofLondonCemetery101Audio(){
  CityofLondonCemeteryAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "CapelRoad101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "WansteadParkAvenue101();" );
  }
}
function CapelRoad101(){
  getRidOfDestination()
  CapelRoad()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "CapelRoad101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "CapelRoad101Audio();" );
  }
}
function CapelRoad101Audio(){
  CapelRoadAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "ManorParkStation101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "CityofLondonCemetery101();" );
  }
}
function ManorParkStation101(){
  getRidOfDestination()
  ManorParkStation()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "ManorParkStation101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "ManorParkStation101Audio();" );
  }
}
function ManorParkStation101Audio(){
  ManorParkStationAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "RomfordRoad101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "CapelRoad101();" );
  }
}
function RomfordRoad101(){
  getRidOfDestination()
  RomfordRoad()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "RomfordRoad101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "RomfordRoad101Audio();" );
  }
}
function RomfordRoad101Audio(){
  RomfordRoadAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "CranbourneRoad101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "ManorParkStation101();" );
  }
}
function CranbourneRoad101(){
  getRidOfDestination()
  CranbourneRoad()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "CranbourneRoad101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "CranbourneRoad101Audio();" );
  }
}
function CranbourneRoad101Audio(){
  CranbourneRoadAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "BerkeleyRoad101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BerkeleyRoad101(){
  getRidOfDestination()
  BerkeleyRoad()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "BerkeleyRoad101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "BerkeleyRoad101Audio();" );
  }
}
function BerkeleyRoad101Audio(){
  BerkeleyRoadAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "RuskinAvenue101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "RomfordRoad101();" );
  }
}
function RuskinAvenue101(){
  getRidOfDestination()
  RuskinAvenue()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "RuskinAvenue101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "RuskinAvenue101Audio();" );
  }
}
function RuskinAvenue101Audio(){
  RuskinAvenueAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "ShelleyAvenue101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "BerkeleyRoad101();" );
  }
}
function ShelleyAvenue101(){
  getRidOfDestination()
  ShelleyAvenue()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "ShelleyAvenue101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "ShelleyAvenue101Audio();" );
  }
}
function ShelleyAvenue101Audio(){
  ShelleyAvenueAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "GladstoneAvenue101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "RuskinAvenue101();" );
  }
}
function GladstoneAvenue101(){
  getRidOfDestination()
  GladstoneAvenue()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "GladstoneAvenue101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "GladstoneAvenue101Audio();" );
  }
}
function GladstoneAvenue101Audio(){
  GladstoneAvenueAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "EastHamStation101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "ShelleyAvenue101();" );
  }
}
function EastHamStation101(){
  getRidOfDestination()
  EastHamStation()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "EastHamStation101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "EastHamStation101Audio();" );
  }
}
function EastHamStation101Audio(){
  EastHamStationAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "BendishRoad101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "GladstoneAvenue101();" );
  }
}
function BendishRoad101(){
  getRidOfDestination()
  BendishRoad()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "BendishRoad101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "BendishRoad101Audio();" );
  }
}
function BendishRoad101Audio(){
  BendishRoadAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "RonLeightonWay101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "EastHamStation101();" );
  }
}
function RonLeightonWay101(){
  getRidOfDestination()
  RonLeightonWay()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "RonLeightonWay101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "RonLeightonWay101Audio();" );
  }
}
function RonLeightonWay101Audio(){
  RonLeightonWayAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "HighStreetNorth101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HighStreetNorth101(){
  getRidOfDestination()
  HighStreetNorth()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "HighStreetNorth101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "HighStreetNorth101Audio();" );
  }
}
function HighStreetNorth101Audio(){
  HighStreetNorthAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "NewhamTownHall101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CaledonRoad101(){
  getRidOfDestination()
  CaledonRoad()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "CaledonRoad101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "CaledonRoad101Audio();" );
  }
}
function CaledonRoad101Audio(){
  CaledonRoadAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "BendishRoad101();" );
  }
}
function KemptonRoad101(){
  getRidOfDestination()
  KemptonRoad()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "KemptonRoad101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "KemptonRoad101Audio();" );
  }
}
function KemptonRoad101Audio(){
  KemptonRoadAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "CaledonRoad101();" );
  }
}
function NewhamTownHall101(){
  getRidOfDestination()
  NewhamTownHall()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "NewhamTownHall101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "NewhamTownHall101Audio();" );
  }
}
function NewhamTownHall101Audio(){
  NewhamTownHallAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "MarketStreet101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "KemptonRoad101();" );
  }
}
function MarketStreet101(){
  getRidOfDestination()
  MarketStreet()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "MarketStreet101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "MarketStreet101Audio();" );
  }
}
function MarketStreet101Audio(){
  MarketStreetAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "EastHamCentralPark101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function TilburyRoad101(){
  getRidOfDestination()
  TilburyRoad()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "TilburyRoad101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "TilburyRoad101Audio();" );
  }
}
function TilburyRoad101Audio(){
  TilburyRoadAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "NewhamTownHall101();" );
  }
}
function EastHamCentralPark101(){
  getRidOfDestination()
  EastHamCentralPark()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "EastHamCentralPark101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "EastHamCentralPark101Audio();" );
  }
}
function EastHamCentralPark101Audio(){
  EastHamCentralParkAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "VicarageLane101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "TilburyRoad101();" );
  }
}
function VicarageLane101(){
  getRidOfDestination()
  VicarageLane()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "VicarageLane101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "VicarageLane101Audio();" );
  }
}
function VicarageLane101Audio(){
  VicarageLaneAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "EastHamFireStation101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function EastHamFireStation101(){
  getRidOfDestination()
  EastHamFireStation()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "EastHamFireStation101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "EastHamFireStation101Audio();" );
  }
}
function EastHamFireStation101Audio(){
  EastHamFireStationAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "LonsdaleAvenue101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function MarlowRoad101(){
  getRidOfDestination()
  MarlowRoad()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "MarlowRoad101Audio();" );
  }
}
function MarlowRoad101Audio(){
  MarlowRoadAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "EastHamCentralPark101();" );
  }
}
function MortimerRoad101(){
  getRidOfDestination()
  MortimerRoad()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "MortimerRoad101Audio();" );
  }
}
function MortimerRoad101Audio(){
  MortimerRoadAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "MarlowRoad101();" );
  }
}
function LonsdaleAvenue101(){
  getRidOfDestination()
  LonsdaleAvenue()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "LonsdaleAvenue101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "LonsdaleAvenue101Audio();" );
  }
}
function LonsdaleAvenue101Audio(){
  LonsdaleAvenueAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "AlbatrossClose101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "MortimerRoad101();" );
  }
}
function AlbatrossClose101(){
  getRidOfDestination()
  AlbatrossClose()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "AlbatrossClose101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "AlbatrossClose101Audio();" );
  }
}
function AlbatrossClose101Audio(){
  AlbatrossCloseAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "TollgateRoad101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "LonsdaleAvenue101();" );
  }
}
function TollgateRoad101(){
  getRidOfDestination()
  TollgateRoad()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "TollgateRoad101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "TollgateRoad101Audio();" );
  }
}
function TollgateRoad101Audio(){
  TollgateRoadAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "BecktonBusStation101();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "AlbatrossClose101();" );
  }
}
function BecktonBusStation101(){
  getRidOfDestination()
  BecktonBusStation()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "BecktonBusStation101Audio();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "BecktonBusStation101Audio();" );
  }
}
function BecktonBusStation101Audio(){
  BecktonBusStationAudio()
  if (routeDestination === "BecktonStation101"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "Wanstead101") {
    NextDestination.setAttribute( "onClick", "TollgateRoad101();" );
  }
}

function BecktonBusStation376(){
  getRidOfDestination()
  BecktonBusStation()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "BecktonBusStation376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "BecktonBusStation376Audio();" );
  }
}
function BecktonBusStation376Audio(){
  BecktonBusStationAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "CoveleesWall376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function CoveleesWall376(){
  getRidOfDestination()
  CoveleesWall()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "CoveleesWall376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "CoveleesWall376Audio();" );
  }
}
function CoveleesWall376Audio(){
  CoveleesWallAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "WinsorParkEstate376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function EastHamManorWay376(){
  getRidOfDestination()
  EastHamManorWay()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "EastHamManorWay376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "EastHamManorWay376Audio();" );
  }
}
function EastHamManorWay376Audio(){
  EastHamManorWayAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "HorseLeaze376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "BecktonBusStation376();" );
  }
}
function WinsorParkEstate376(){
  getRidOfDestination()
  WinsorParkEstate()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "WinsorParkEstate376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "WinsorParkEstate376Audio();" );
  }
}
function WinsorParkEstate376Audio(){
  WinsorParkEstateAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "HorseLeaze376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "EastHamManorWay376();" );
  }
}
function HorseLeaze376(){
  getRidOfDestination()
  HorseLeaze()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "HorseLeaze376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "HorseLeaze376Audio();" );
  }
}
function HorseLeaze376Audio(){
  HorseLeazeAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "DevallsClose376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "WinsorParkEstate376();" );
  }
}
function DevallsClose376(){
  getRidOfDestination()
  DevallsClose()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "DevallsClose376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "DevallsClose376Audio();" );
  }
}
function DevallsClose376Audio(){
  DevallsCloseAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "CyprusStation376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function FerndaleStreet376(){
  getRidOfDestination()
  FerndaleStreet()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "FerndaleStreet376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "FerndaleStreet376Audio();" );
  }
}
function FerndaleStreet376Audio(){
  FerndaleStreetAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "HorseLeaze376();" );
  }
}
function CyprusStation376(){
  getRidOfDestination()
  CyprusStation()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "CyprusStation376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "CyprusStation376Audio();" );
  }
}
function CyprusStation376Audio(){
  CyprusStationAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "StraitRoadEastHamManorWay376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "FerndaleStreet376();" );
  }
}
function StraitRoadEastHamManorWay376(){
  getRidOfDestination()
  StraitRoadEastHamManorWay()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "StraitRoadEastHamManorWay376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "StraitRoadEastHamManorWay376Audio();" );
  }
}
function StraitRoadEastHamManorWay376Audio(){
  StraitRoadEastHamManorWayAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "RenfrewClose376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "CyprusStation376();" );
  }
}
function RenfrewClose376(){
  getRidOfDestination()
  RenfrewClose()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "RenfrewClose376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "RenfrewClose376Audio();" );
  }
}
function RenfrewClose376Audio(){
  RenfrewCloseAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "BecktonParkStation376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "StraitRoadEastHamManorWay376();" );
  }
}
function CampionClose376(){
  getRidOfDestination()
  CampionClose()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "CampionClose376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "CampionClose376Audio();" );
  }
}
function CampionClose376Audio(){
  CampionCloseAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "StraitRoadStansfeldRoad376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "RenfrewClose376();" );
  }
}
function BecktonParkStation376(){
  getRidOfDestination()
  BecktonParkStation()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "BecktonParkStation376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "BecktonParkStation376Audio();" );
  }
}
function BecktonParkStation376Audio(){
  BecktonParkStationAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "StraitRoadStansfeldRoad376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "CampionClose376();" );
  }
}
function StraitRoadStansfeldRoad376(){
  getRidOfDestination()
  StraitRoadStansfeldRoad()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "StraitRoadStansfeldRoad376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "StraitRoadStansfeldRoad376Audio();" );
  }
}
function StraitRoadStansfeldRoad376Audio(){
  StraitRoadStansfeldRoadAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "JakeRussellWalk376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "BecktonParkStation376();" );
  }
}
function JakeRussellWalk376(){
  getRidOfDestination()
  JakeRussellWalk()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "JakeRussellWalk376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "JakeRussellWalk376Audio();" );
  }
}
function JakeRussellWalk376Audio(){
  JakeRussellWalkAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "WillThornePavilion376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "StraitRoadStansfeldRoad376();" );
  }
}
function WillThornePavilion376(){
  getRidOfDestination()
  WillThornePavilion()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "WillThornePavilion376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "WillThornePavilion376Audio();" );
  }
}
function WillThornePavilion376Audio(){
  WillThornePavilionAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "FulmerRoad376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "JakeRussellWalk376();" );
  }
}
function FulmerRoad376(){
  getRidOfDestination()
  FulmerRoad()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "FulmerRoad376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "FulmerRoad376Audio();" );
  }
}
function FulmerRoad376Audio(){
  FulmerRoadAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "SullivanAvenue376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "WillThornePavilion376();" );
  }
}
function SullivanAvenue376(){
  getRidOfDestination()
  SullivanAvenue()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "SullivanAvenue376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "SullivanAvenue376Audio();" );
  }
}
function SullivanAvenue376Audio(){
  SullivanAvenueAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "ColmanRoad376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "FulmerRoad376();" );
  }
}
function ColmanRoad376(){
  getRidOfDestination()
  ColmanRoad()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "ColmanRoad376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "ColmanRoad376Audio();" );
  }
}
function ColmanRoad376Audio(){
  ColmanRoadAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "BennettRoad376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "SullivanAvenue376();" );
  }
}
function NewhamLeisureCentre376(){
  getRidOfDestination()
  NewhamLeisureCentre()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "NewhamLeisureCentre376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "NewhamLeisureCentre376Audio();" );
  }
}
function NewhamLeisureCentre376Audio(){
  NewhamLeisureCentreAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "ColmanRoad376();" );
  }
}
function BennettRoad376(){
  getRidOfDestination()
  BennettRoad()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "BennettRoad376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "BennettRoad376Audio();" );
  }
}
function BennettRoad376Audio(){
  BennettRoadAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospEmergencyDept376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "NewhamLeisureCentre376();" );
  }
}
function NewhamUniversityHospEmergencyDept376(){
  getRidOfDestination()
  NewhamUniversityHospEmergencyDept()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospEmergencyDept376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospEmergencyDept376Audio();" );
  }
}
function NewhamUniversityHospEmergencyDept376Audio(){
  NewhamUniversityHospEmergencyDeptAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospMainReception376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "BennettRoad376();" );
  }
}
function NewhamUniversityHospMainReception376(){
  getRidOfDestination()
  NewhamUniversityHospMainReception()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospMainReception376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospMainReception376Audio();" );
  }
}
function NewhamUniversityHospMainReception376Audio(){
  NewhamUniversityHospMainReceptionAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "BramptonManorSchool376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospEmergencyDept376();" );
  }
}
function BramptonManorSchool376(){
  getRidOfDestination()
  BramptonManorSchool()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "BramptonManorSchool376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "BramptonManorSchool376Audio();" );
  }
}
function BramptonManorSchool376Audio(){
  BramptonManorSchoolAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "NewCityRoad376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function NewCityRoad376(){
  getRidOfDestination()
  NewCityRoad()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "NewCityRoad376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "NewCityRoad376Audio();" );
  }
}
function NewCityRoad376Audio(){
  NewCityRoadAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "WilsonRoad376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WilsonRoad376(){
  getRidOfDestination()
  WilsonRoad()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "WilsonRoad376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "WilsonRoad376Audio();" );
  }
}
function WilsonRoad376Audio(){
  WilsonRoadAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "BarkingRoad376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BarkingRoad376(){
  getRidOfDestination()
  BarkingRoad()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "BarkingRoad376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "BarkingRoad376Audio();" );
  }
}
function BarkingRoad376Audio(){
  BarkingRoadAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "UptonParkBoleyn376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BecktonOrPrinceRegent376(){
  getRidOfDestination()
  BecktonOrPrinceRegent()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "BecktonOrPrinceRegent376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "BecktonOrPrinceRegent376Audio();" );
  }
}
function BecktonOrPrinceRegent376Audio(){
  BecktonOrPrinceRegentAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospMainReception376();" );
  }
}
function FrintonRoad376(){
  getRidOfDestination()
  FrintonRoad()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "FrintonRoad376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "FrintonRoad376Audio();" );
  }
}
function FrintonRoad376Audio(){
  FrintonRoadAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "BecktonOrPrinceRegent376();" );
  }
}
function BensonAvenue376(){
  getRidOfDestination()
  BensonAvenue()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "BensonAvenue376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "BensonAvenue376Audio();" );
  }
}
function BensonAvenue376Audio(){
  BensonAvenueAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "TudorRoad376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "FrintonRoad376();" );
  }
}
function UptonParkBoleyn376(){
  getRidOfDestination()
  UptonParkBoleyn()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "UptonParkBoleyn376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "UptonParkBoleyn376Audio();" );
  }
}
function UptonParkBoleyn376Audio(){
  UptonParkBoleynAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "TudorRoad376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "BensonAvenue376();" );
  }
}
function TudorRoad376(){
  getRidOfDestination()
  TudorRoad()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "TudorRoad376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "TudorRoad376Audio();" );
  }
}
function TudorRoad376Audio(){
  TudorRoadAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "UptonParkStation376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function QueensMarket376(){
  getRidOfDestination()
  QueensMarket()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "QueensMarket376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "QueensMarket376Audio();" );
  }
}
function QueensMarket376Audio(){
  QueensMarketAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "UptonParkBoleyn376();" );
  }
}
function UptonParkStation376(){
  getRidOfDestination()
  UptonParkStation()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "UptonParkStation376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "UptonParkStation376Audio();" );
  }
}
function UptonParkStation376Audio(){
  UptonParkStationAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "PlashetRoad376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "QueensMarket376();" );
  }
}
function PlashetRoad376(){
  getRidOfDestination()
  PlashetRoad()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "PlashetRoad376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "PlashetRoad376Audio();" );
  }
}
function PlashetRoad376Audio(){
  PlashetRoadAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "WashingtonRoad376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WashingtonRoad376(){
  getRidOfDestination()
  WashingtonRoad()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "WashingtonRoad376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "WashingtonRoad376Audio();" );
  }
}
function WashingtonRoad376Audio(){
  WashingtonRoadAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "WalpoleRoad376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WalpoleRoad376(){
  getRidOfDestination()
  WalpoleRoad()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "WalpoleRoad376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "WalpoleRoad376Audio();" );
  }
}
function WalpoleRoad376Audio(){
  WalpoleRoadAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "KatherineRoad376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function GreenStreet376(){
  getRidOfDestination()
  GreenStreet()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "GreenStreet376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "GreenStreet376Audio();" );
  }
}
function GreenStreet376Audio(){
  GreenStreetAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "UptonParkStation376();" );
  }
}
function WhitfieldRoad376(){
  getRidOfDestination()
  WhitfieldRoad()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "WhitfieldRoad376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "WhitfieldRoad376Audio();" );
  }
}
function WhitfieldRoad376Audio(){
  WhitfieldRoadAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "GreenStreet376();" );
  }
}
function KatherineRoad376(){
  getRidOfDestination()
  KatherineRoad()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "KatherineRoad376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "KatherineRoad376Audio();" );
  }
}
function KatherineRoad376Audio(){
  KatherineRoadAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "ShrewsburyRoad376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "WhitfieldRoad376();" );
  }
}
function ShrewsburyRoad376(){
  getRidOfDestination()
  ShrewsburyRoad()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "ShrewsburyRoad376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "ShrewsburyRoad376Audio();" );
  }
}
function ShrewsburyRoad376Audio(){
  ShrewsburyRoadAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "PlashetSchool376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "KatherineRoad376();" );
  }
}
function PlashetSchool376(){
  getRidOfDestination()
  PlashetSchool()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "PlashetSchool376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "PlashetSchool376Audio();" );
  }
}
function PlashetSchool376Audio(){
  PlashetSchoolAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "EastHamStation376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "ShrewsburyRoad376();" );
  }
}
function EastHamStation376(){
  getRidOfDestination()
  EastHamStation()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "EastHamStation376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "EastHamStation376Audio();" );
  }
}
function EastHamStation376Audio(){
  EastHamStationAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "BendishRoad376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "PlashetSchool376();" );
  }
}
function BendishRoad376(){
  getRidOfDestination()
  BendishRoad()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "BendishRoad376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "BendishRoad376Audio();" );
  }
}
function BendishRoad376Audio(){
  BendishRoadAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "RonLeightonWay376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "EastHamStation376();" );
  }
}
function RonLeightonWay376(){
  getRidOfDestination()
  RonLeightonWay()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "RonLeightonWay376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "RonLeightonWay376Audio();" );
  }
}
function RonLeightonWay376Audio(){
  RonLeightonWayAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "HighStreetNorth376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HighStreetNorth376(){
  getRidOfDestination()
  HighStreetNorth()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "HighStreetNorth376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "HighStreetNorth376Audio();" );
  }
}
function HighStreetNorth376Audio(){
  HighStreetNorthAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "NewhamTownHall376();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CaledonRoad376(){
  getRidOfDestination()
  CaledonRoad()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "CaledonRoad376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "CaledonRoad376Audio();" );
  }
}
function CaledonRoad376Audio(){
  CaledonRoadAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "BendishRoad376();" );
  }
}
function KemptonRoad376(){
  getRidOfDestination()
  KemptonRoad()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "KemptonRoad376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "KemptonRoad376Audio();" );
  }
}
function KemptonRoad376Audio(){
  KemptonRoadAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "CaledonRoad376();" );
  }
}
function NewhamTownHall376(){
  getRidOfDestination()
  NewhamTownHall()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "NewhamTownHall376Audio();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "NewhamTownHall376Audio();" );
  }
}
function NewhamTownHall376Audio(){
  NewhamTownHallAudio()
  if (routeDestination === "EastHamNewhamTownHall376"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "BecktonStation376") {
    NextDestination.setAttribute( "onClick", "KemptonRoad376();" );
  }
}

function CrystalPalaceParade363(){
  getRidOfDestination()
  CrystalPalaceParade()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "CrystalPalaceParade363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "CrystalPalaceParade363Audio();" );
  }
}
function CrystalPalaceParade363Audio(){
  CrystalPalaceParadeAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "CrystalPalaceParadeCollegeRoad363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CrystalPalaceParadeCollegeRoad363(){
  getRidOfDestination()
  CrystalPalaceParadeCollegeRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "CrystalPalaceParadeCollegeRoad363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "CrystalPalaceParadeCollegeRoad363Audio();" );
  }
}
function CrystalPalaceParadeCollegeRoad363Audio(){
  CrystalPalaceParadeCollegeRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "WestwoodHill363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function WestwoodHill363(){
  getRidOfDestination()
  WestwoodHill()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "WestwoodHill363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "WestwoodHill363Audio();" );
  }
}
function WestwoodHill363Audio(){
  WestwoodHillAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "DomeHillPark363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CrystalPalaceParadeFountainDrive363(){
  getRidOfDestination()
  CrystalPalaceParadeFountainDrive()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "CrystalPalaceParadeFountainDrive363Audio();" );
  }
}
function CrystalPalaceParadeFountainDrive363Audio(){
  CrystalPalaceParadeFountainDriveAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "CrystalPalaceParadeCollegeRoad363();" );
  }
}
function SydenhamHillBluebellClose363(){
  getRidOfDestination()
  SydenhamHillBluebellClose()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "SydenhamHillBluebellClose363Audio();" );
  }
}
function SydenhamHillBluebellClose363Audio(){
  SydenhamHillBluebellCloseAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "CrystalPalaceParadeFountainDrive363();" );
  }
}
function DomeHillPark363(){
  getRidOfDestination()
  DomeHillPark()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "DomeHillPark363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "DomeHillPark363Audio();" );
  }
}
function DomeHillPark363Audio(){
  DomeHillParkAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "WellsParkRoad363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "SydenhamHillBluebellClose363();" );
  }
}
function WellsParkRoad363(){
  getRidOfDestination()
  WellsParkRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "WellsParkRoad363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "WellsParkRoad363Audio();" );
  }
}
function WellsParkRoad363Audio(){
  WellsParkRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "DroitwichClose363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "DomeHillPark363();" );
  }
}
function DroitwichClose363(){
  getRidOfDestination()
  DroitwichClose()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "DroitwichClose363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "DroitwichClose363Audio();" );
  }
}
function DroitwichClose363Audio(){
  DroitwichCloseAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "CrescentWoodRoad363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "WellsParkRoad363();" );
  }
}
function CrescentWoodRoad363(){
  getRidOfDestination()
  CrescentWoodRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "CrescentWoodRoad363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "CrescentWoodRoad363Audio();" );
  }
}
function CrescentWoodRoad363Audio(){
  CrescentWoodRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "SydenhamHillKirkdale363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "DroitwichClose363();" );
  }
}
function SydenhamHillKirkdale363(){
  getRidOfDestination()
  SydenhamHillKirkdale()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "SydenhamHillKirkdale363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "SydenhamHillKirkdale363Audio();" );
  }
}
function SydenhamHillKirkdale363Audio(){
  SydenhamHillKirkdaleAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "HornimanPark363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "CrescentWoodRoad363();" );
  }
}
function HornimanPark363(){
  getRidOfDestination()
  HornimanPark()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "HornimanPark363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "HornimanPark363Audio();" );
  }
}
function HornimanPark363Audio(){
  HornimanParkAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "LordshipLaneWoodVale363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "SydenhamHillKirkdale363();" );
  }
}
function LordshipLaneWoodVale363(){
  getRidOfDestination()
  LordshipLaneWoodVale()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "LordshipLaneWoodVale363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "LordshipLaneWoodVale363Audio();" );
  }
}
function LordshipLaneWoodVale363Audio(){
  LordshipLaneWoodValeAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "UnderhillRoadMelfordRoad363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "HornimanPark363();" );
  }
}
function UnderhillRoadMelfordRoad363(){
  getRidOfDestination()
  UnderhillRoadMelfordRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "UnderhillRoadMelfordRoad363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "UnderhillRoadMelfordRoad363Audio();" );
  }
}
function UnderhillRoadMelfordRoad363Audio(){
  UnderhillRoadMelfordRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "MelfordRoad363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function UnderhillRoad363(){
  getRidOfDestination()
  UnderhillRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "UnderhillRoad363Audio();" );
  }
}
function UnderhillRoad363Audio(){
  UnderhillRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "LordshipLaneWoodVale363();" );
  }
}
function MelfordRoad363(){
  getRidOfDestination()
  MelfordRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "MelfordRoad363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "MelfordRoad363Audio();" );
  }
}
function MelfordRoad363Audio(){
  MelfordRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "LangtonRise363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "UnderhillRoad363();" );
  }
}
function LangtonRise363(){
  getRidOfDestination()
  LangtonRise()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "LangtonRise363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "LangtonRise363Audio();" );
  }
}
function LangtonRise363Audio(){
  LangtonRiseAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "WoodValeForestHillRoad363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "MelfordRoad363();" );
  }
}
function WoodValeForestHillRoad363(){
  getRidOfDestination()
  WoodValeForestHillRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "WoodValeForestHillRoad363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "WoodValeForestHillRoad363Audio();" );
  }
}
function WoodValeForestHillRoad363Audio(){
  WoodValeForestHillRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "TherapiaRoad363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "LangtonRise363();" );
  }
}
function TherapiaRoad363(){
  getRidOfDestination()
  TherapiaRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "TherapiaRoad363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "TherapiaRoad363Audio();" );
  }
}
function TherapiaRoad363Audio(){
  TherapiaRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "DunstansRoad363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "WoodValeForestHillRoad363();" );
  }
}
function DunstansRoad363(){
  getRidOfDestination()
  DunstansRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "DunstansRoad363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "DunstansRoad363Audio();" );
  }
}
function DunstansRoad363Audio(){
  DunstansRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "FriernRoad363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "TherapiaRoad363();" );
  }
}
function FriernRoad363(){
  getRidOfDestination()
  FriernRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "FriernRoad363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "FriernRoad363Audio();" );
  }
}
function FriernRoad363Audio(){
  FriernRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeBarryRoad363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "DunstansRoad363();" );
  }
}
function PeckhamRyeBarryRoad363(){
  getRidOfDestination()
  PeckhamRyeBarryRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeBarryRoad363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "PeckhamRyeBarryRoad363Audio();" );
  }
}
function PeckhamRyeBarryRoad363Audio(){
  PeckhamRyeBarryRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "TheGardens363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function TheGardens363(){
  getRidOfDestination()
  TheGardens()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "TheGardens363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "TheGardens363Audio();" );
  }
}
function TheGardens363Audio(){
  TheGardensAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeEastDulwichRoad363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "FriernRoad363();" );
  }
}
function PeckhamRyeEastDulwichRoad363(){
  getRidOfDestination()
  PeckhamRyeEastDulwichRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeEastDulwichRoad363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "PeckhamRyeEastDulwichRoad363Audio();" );
  }
}
function PeckhamRyeEastDulwichRoad363Audio(){
  PeckhamRyeEastDulwichRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "NigelRoad363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "TheGardens363();" );
  }
}
function NigelRoad363(){
  getRidOfDestination()
  NigelRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "NigelRoad363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "NigelRoad363Audio();" );
  }
}
function NigelRoad363Audio(){
  NigelRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "HeatonRoad363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "PeckhamRyeEastDulwichRoad363();" );
  }
}
function HeatonRoad363(){
  getRidOfDestination()
  HeatonRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "HeatonRoad363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "HeatonRoad363Audio();" );
  }
}
function HeatonRoad363Audio(){
  HeatonRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeStation363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function PeckhamRyeStation363(){
  getRidOfDestination()
  PeckhamRyeStation()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeStation363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "PeckhamRyeStation363Audio();" );
  }
}
function PeckhamRyeStation363Audio(){
  PeckhamRyeStationAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "TheAyleshamCentre363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "NigelRoad363();" );
  }
}
function TheAyleshamCentre363(){
  getRidOfDestination()
  TheAyleshamCentre()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "TheAyleshamCentre363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "TheAyleshamCentre363Audio();" );
  }
}
function TheAyleshamCentre363Audio(){
  TheAyleshamCentreAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "PeckhamLibrary363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "PeckhamRyeStation363();" );
  }
}
function PeckhamPostOffice363(){
  getRidOfDestination()
  PeckhamPostOffice()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "PeckhamPostOffice363Audio();" );
  }
}
function PeckhamPostOffice363Audio(){
  PeckhamPostOfficeAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "TheAyleshamCentre363();" );
  }
}
function PeckhamLibrary363(){
  getRidOfDestination()
  PeckhamLibrary()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "PeckhamLibrary363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "PeckhamLibrary363Audio();" );
  }
}
function PeckhamLibrary363Audio(){
  PeckhamLibraryAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "BonarRoad363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "PeckhamPostOffice363();" );
  }
}
function BonarRoad363(){
  getRidOfDestination()
  BonarRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "BonarRoad363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "BonarRoad363Audio();" );
  }
}
function BonarRoad363Audio(){
  BonarRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "CommercialWay363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "PeckhamLibrary363();" );
  }
}
function CommercialWay363(){
  getRidOfDestination()
  CommercialWay()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "CommercialWay363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "CommercialWay363Audio();" );
  }
}
function CommercialWay363Audio(){
  CommercialWayAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "BirdInBushRoad363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "BonarRoad363();" );
  }
}
function BirdInBushRoad363(){
  getRidOfDestination()
  BirdInBushRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "BirdInBushRoad363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "BirdInBushRoad363Audio();" );
  }
}
function BirdInBushRoad363Audio(){
  BirdInBushRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "StGeorgesWay363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "CommercialWay363();" );
  }
}
function StGeorgesWay363(){
  getRidOfDestination()
  StGeorgesWay()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "StGeorgesWay363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "StGeorgesWay363Audio();" );
  }
}
function StGeorgesWay363Audio(){
  StGeorgesWayAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "WaiteStreet363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "BirdInBushRoad363();" );
  }
}
function WaiteStreet363(){
  getRidOfDestination()
  WaiteStreet()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "WaiteStreet363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "WaiteStreet363Audio();" );
  }
}
function WaiteStreet363Audio(){
  WaiteStreetAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "NileTerrace363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "StGeorgesWay363();" );
  }
}
function NileTerrace363(){
  getRidOfDestination()
  NileTerrace()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "NileTerrace363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "NileTerrace363Audio();" );
  }
}
function NileTerrace363Audio(){
  NileTerraceAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "DuntonRoad363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "WaiteStreet363();" );
  }
}
function DuntonRoad363(){
  getRidOfDestination()
  DuntonRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "DuntonRoad363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "DuntonRoad363Audio();" );
  }
}
function DuntonRoad363Audio(){
  DuntonRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "OldKentRoadEastStreet363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "NileTerrace363();" );
  }
}
function OldKentRoadEastStreet363(){
  getRidOfDestination()
  OldKentRoadEastStreet()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "OldKentRoadEastStreet363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "OldKentRoadEastStreet363Audio();" );
  }
}
function OldKentRoadEastStreet363Audio(){
  OldKentRoadEastStreetAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "BricklayersArms363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "DuntonRoad363();" );
  }
}
function BricklayersArms363(){
  getRidOfDestination()
  BricklayersArms()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "BricklayersArms363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "BricklayersArms363Audio();" );
  }
}
function BricklayersArms363Audio(){
  BricklayersArmsAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "BricklayersArmsNewKentRoad363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BricklayersArmsNewKentRoad363(){
  getRidOfDestination()
  BricklayersArmsNewKentRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "BricklayersArmsNewKentRoad363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "BricklayersArmsNewKentRoad363Audio();" );
  }
}
function BricklayersArmsNewKentRoad363Audio(){
  BricklayersArmsNewKentRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "RodneyPlace363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function RodneyPlace363(){
  getRidOfDestination()
  RodneyPlace()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "RodneyPlace363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "RodneyPlace363Audio();" );
  }
}
function RodneyPlace363Audio(){
  RodneyPlaceAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "ElephantCastleNewKentRoad363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "OldKentRoadEastStreet363();" );
  }
}
function ElephantCastleNewKentRoad363(){
  getRidOfDestination()
  ElephantCastleNewKentRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "ElephantCastleNewKentRoad363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "ElephantCastleNewKentRoad363Audio();" );
  }
}
function ElephantCastleNewKentRoad363Audio(){
  ElephantCastleNewKentRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "ElephantCastleLondonRoad363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "RodneyPlace363();" );
  }
}
function ElephantCastleLondonRoad363(){
  getRidOfDestination()
  ElephantCastleLondonRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "ElephantCastleLondonRoad363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "ElephantCastleLondonRoad363Audio();" );
  }
}
function ElephantCastleLondonRoad363Audio(){
  ElephantCastleLondonRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "LambethRoad363();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "ElephantCastleNewKentRoad363();" );
  }
}
function LambethRoad363(){
  getRidOfDestination()
  LambethRoad()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "LambethRoad363Audio();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "LambethRoad363Audio();" );
  }
}
function LambethRoad363Audio(){
  LambethRoadAudio()
  if (routeDestination === "ElephantCastle363"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "CrystalPalace363") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}

function AppoldStreet11(){
  getRidOfDestination()
  AppoldStreet()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "AppoldStreet11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "AppoldStreet11Audio();" );
  }
}
function AppoldStreet11Audio(){
  AppoldStreetAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function PrimroseStreet11(){
  getRidOfDestination()
  PrimroseStreet()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "PrimroseStreet11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "PrimroseStreet11Audio();" );
  }
}
function PrimroseStreet11Audio(){
  PrimroseStreetAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "LiverpoolStreetStation11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "AppoldStreet11();" );
  }
}
function LiverpoolStreetStation11(){
  getRidOfDestination()
  LiverpoolStreetStation()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "LiverpoolStreetStation11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "LiverpoolStreetStation11Audio();" );
  }
}
function LiverpoolStreetStation11Audio(){
  LiverpoolStreetStationAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "CamomileStreet11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "PrimroseStreet11();" );
  }
}
function CamomileStreet11(){
  getRidOfDestination()
  CamomileStreet()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "CamomileStreet11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "CamomileStreet11Audio();" );
  }
}
function CamomileStreet11Audio(){
  CamomileStreetAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "OldBroadStreet11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function OldBroadStreet11(){
  getRidOfDestination()
  OldBroadStreet()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "OldBroadStreet11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "OldBroadStreet11Audio();" );
  }
}
function OldBroadStreet11Audio(){
  OldBroadStreetAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "PoultryBankStation11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function PoultryBankStation11(){
  getRidOfDestination()
  PoultryBankStation()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "PoultryBankStation11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "PoultryBankStation11Audio();" );
  }
}
function PoultryBankStation11Audio(){
  PoultryBankStationAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "NewChangeCannonStreet11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WormwoodStreet11(){
  getRidOfDestination()
  WormwoodStreet()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "WormwoodStreet11Audio();" );
  }
}
function WormwoodStreet11Audio(){
  WormwoodStreetAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "LiverpoolStreetStation11();" );
  }
}
function AllHallowsChurch11(){
  getRidOfDestination()
  AllHallowsChurch()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "AllHallowsChurch11Audio();" );
  }
}
function AllHallowsChurch11Audio(){
  AllHallowsChurchAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "WormwoodStreet11();" );
  }
}
function LondonWallMoorgateStation11(){
  getRidOfDestination()
  LondonWallMoorgateStation()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "LondonWallMoorgateStation11Audio();" );
  }
}
function LondonWallMoorgateStation11Audio(){
  LondonWallMoorgateStationAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "AllHallowsChurch11();" );
  }
}
function LondonWallMuseumofLondon11(){
  getRidOfDestination()
  LondonWallMuseumofLondon()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "LondonWallMuseumofLondon11Audio();" );
  }
}
function LondonWallMuseumofLondon11Audio(){
  LondonWallMuseumofLondonAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "LondonWallMoorgateStation11();" );
  }
}
function LittleBritain11(){
  getRidOfDestination()
  LittleBritain()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "LittleBritain11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "LittleBritain11Audio();" );
  }
}
function LittleBritain11Audio(){
  LittleBritainAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "LondonWallMuseumofLondon11();" );
  }
}
function StPaulsStation11(){
  getRidOfDestination()
  StPaulsStation()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "StPaulsStation11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "StPaulsStation11Audio();" );
  }
}
function StPaulsStation11Audio(){
  StPaulsStationAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "LittleBritain11();" );
  }
}
function NewChangeCannonStreet11(){
  getRidOfDestination()
  NewChangeCannonStreet()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "NewChangeCannonStreet11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "NewChangeCannonStreet11Audio();" );
  }
}
function NewChangeCannonStreet11Audio(){
  NewChangeCannonStreetAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "StPaulsChurchyard11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "StPaulsStation11();" );
  }
}
function StPaulsChurchyard11(){
  getRidOfDestination()
  StPaulsChurchyard()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "StPaulsChurchyard11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "StPaulsChurchyard11Audio();" );
  }
}
function StPaulsChurchyard11Audio(){
  StPaulsChurchyardAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "StPaulsCathedral11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StPaulsCathedral11(){
  getRidOfDestination()
  StPaulsCathedral()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "StPaulsCathedral11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "StPaulsCathedral11Audio();" );
  }
}
function StPaulsCathedral11Audio(){
  StPaulsCathedralAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "CityThameslinkStnLudgateCircus11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "NewChangeCannonStreet11();" );
  }
}
function CityThameslinkStnLudgateCircus11(){
  getRidOfDestination()
  CityThameslinkStnLudgateCircus()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "CityThameslinkStnLudgateCircus11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "CityThameslinkStnLudgateCircus11Audio();" );
  }
}
function CityThameslinkStnLudgateCircus11Audio(){
  CityThameslinkStnLudgateCircusAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "ShoeLane11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ShoeLane11(){
  getRidOfDestination()
  ShoeLane()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "ShoeLane11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "ShoeLane11Audio();" );
  }
}
function ShoeLane11Audio(){
  ShoeLaneAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "FetterLane11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LudgateHillOldBailey11(){
  getRidOfDestination()
  LudgateHillOldBailey()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "LudgateCircus11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "LudgateHillOldBailey11Audio();" );
  }
}
function LudgateHillOldBailey11Audio(){
  LudgateHillOldBaileyAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "StPaulsCathedral11();" );
  }
}
function LudgateCircus11(){
  getRidOfDestination()
  LudgateCircus()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "LudgateCircus11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "LudgateCircus11Audio();" );
  }
}
function LudgateCircus11Audio(){
  LudgateCircusAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "LudgateHillOldBailey11();" );
  }
}
function FetterLane11(){
  getRidOfDestination()
  FetterLane()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "FetterLane11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "FetterLane11Audio();" );
  }
}
function FetterLane11Audio(){
  FetterLaneAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "ChanceryLane11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "LudgateCircus11();" );
  }
}
function ChanceryLane11(){
  getRidOfDestination()
  ChanceryLane()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "ChanceryLane11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "ChanceryLane11Audio();" );
  }
}
function ChanceryLane11Audio(){
  ChanceryLaneAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "TheRoyalCourtsofJustice11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function TheRoyalCourtsofJustice11(){
  getRidOfDestination()
  TheRoyalCourtsofJustice()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "TheRoyalCourtsofJustice11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "TheRoyalCourtsofJustice11Audio();" );
  }
}
function TheRoyalCourtsofJustice11Audio(){
  TheRoyalCourtsofJusticeAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "AldwychAustraliaHouse11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "FetterLane11();" );
  }
}
function AldwychAustraliaHouse11(){
  getRidOfDestination()
  AldwychAustraliaHouse()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "AldwychAustraliaHouse11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "AldwychAustraliaHouse11Audio();" );
  }
}
function AldwychAustraliaHouse11Audio(){
  AldwychAustraliaHouseAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "AldwychDruryLane11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function AldwychDruryLane11(){
  getRidOfDestination()
  AldwychDruryLane()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "AldwychDruryLane11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "AldwychDruryLane11Audio();" );
  }
}
function AldwychDruryLane11Audio(){
  AldwychDruryLaneAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "SavoyStreet11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function SavoyStreet11(){
  getRidOfDestination()
  SavoyStreet()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "SavoyStreet11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "SavoyStreet11Audio();" );
  }
}
function SavoyStreet11Audio(){
  SavoyStreetAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "BedfordStreet11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BedfordStreet11(){
  getRidOfDestination()
  BedfordStreet()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "BedfordStreet11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "BedfordStreet11Audio();" );
  }
}
function BedfordStreet11Audio(){
  BedfordStreetAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "TrafalgarSquareCharingCrossStn11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function TrafalgarSquareCharingCrossStn11(){
  getRidOfDestination()
  TrafalgarSquareCharingCrossStn()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "TrafalgarSquareCharingCrossStn11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "TrafalgarSquareCharingCrossStn11Audio();" );
  }
}
function TrafalgarSquareCharingCrossStn11Audio(){
  TrafalgarSquareCharingCrossStnAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "WhitehallTrafalgarSquare11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WhitehallTrafalgarSquare11(){
  getRidOfDestination()
  WhitehallTrafalgarSquare()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "WhitehallTrafalgarSquare11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "WhitehallTrafalgarSquare11Audio();" );
  }
}
function WhitehallTrafalgarSquare11Audio(){
  WhitehallTrafalgarSquareAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "HorseGuardsParade11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function Aldwych11(){
  getRidOfDestination()
  Aldwych()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "Aldwych11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "Aldwych11Audio();" );
  }
}
function Aldwych11Audio(){
  AldwychAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "TheRoyalCourtsofJustice11();" );
  }
}
function SouthamptonStreetCoventGarden11(){
  getRidOfDestination()
  SouthamptonStreetCoventGarden()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "SouthamptonStreetCoventGarden11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "SouthamptonStreetCoventGarden11Audio();" );
  }
}
function SouthamptonStreetCoventGarden11Audio(){
  SouthamptonStreetCoventGardenAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "Aldwych11();" );
  }
}
function CharingCrossStnTrafalgarSquare11(){
  getRidOfDestination()
  CharingCrossStnTrafalgarSquare()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "CharingCrossStnTrafalgarSquare11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "CharingCrossStnTrafalgarSquare11Audio();" );
  }
}
function CharingCrossStnTrafalgarSquare11Audio(){
  CharingCrossStnTrafalgarSquareAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "SouthamptonStreetCoventGarden11();" );
  }
}
function HorseGuardsParade11(){
  getRidOfDestination()
  HorseGuardsParade()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "HorseGuardsParade11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "HorseGuardsParade11Audio();" );
  }
}
function HorseGuardsParade11Audio(){
  HorseGuardsParadeAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "WestminsterStnParliamentSquare11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "CharingCrossStnTrafalgarSquare11();" );
  }
}
function WestminsterStnParliamentSquare11(){
  getRidOfDestination()
  WestminsterStnParliamentSquare()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "WestminsterStnParliamentSquare11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "WestminsterStnParliamentSquare11Audio();" );
  }
}
function WestminsterStnParliamentSquare11Audio(){
  WestminsterStnParliamentSquareAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "GreatSmithStreetWestminsterAbbey11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "HorseGuardsParade11();" );
  }
}
function GreatSmithStreetWestminsterAbbey11(){
  getRidOfDestination()
  GreatSmithStreetWestminsterAbbey()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "GreatSmithStreetWestminsterAbbey11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "GreatSmithStreetWestminsterAbbey11Audio();" );
  }
}
function GreatSmithStreetWestminsterAbbey11Audio(){
  GreatSmithStreetWestminsterAbbeyAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "StJamessParkStation11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WestminsterAbbey11(){
  getRidOfDestination()
  WestminsterAbbey()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "StJamessParkStation11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "WestminsterAbbey11Audio();" );
  }
}
function WestminsterAbbey11Audio(){
  WestminsterAbbeyAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "WestminsterCityHall11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "WestminsterStnParliamentSquare11();" );
  }
}
function StJamessParkStation11(){
  getRidOfDestination()
  StJamessParkStation()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "StJamessParkStation11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "StJamessParkStation11Audio();" );
  }
}
function StJamessParkStation11Audio(){
  StJamessParkStationAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "WestminsterCityHall11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "WestminsterAbbey11();" );
  }
}
function WestminsterCityHall11(){
  getRidOfDestination()
  WestminsterCityHall()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "WestminsterCityHall11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "WestminsterCityHall11Audio();" );
  }
}
function WestminsterCityHall11Audio(){
  WestminsterCityHallAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "WestminsterCathedralVictoriaStn11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "StJamessParkStation11();" );
  }
}
function WestminsterCathedralVictoriaStn11(){
  getRidOfDestination()
  WestminsterCathedralVictoriaStn()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "WestminsterCathedralVictoriaStn11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "WestminsterCathedralVictoriaStn11Audio();" );
  }
}
function WestminsterCathedralVictoriaStn11Audio(){
  WestminsterCathedralVictoriaStnAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "VictoriaStation11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WestminsterCathedral11(){
  getRidOfDestination()
  WestminsterCathedral()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "WestminsterCathedral11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "WestminsterCathedral11Audio();" );
  }
}
function WestminsterCathedral11Audio(){
  WestminsterCathedralAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "WestminsterCityHall11();" );
  }
}
function VictoriaStation11(){
  getRidOfDestination()
  VictoriaStation()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "VictoriaStation11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "VictoriaStation11Audio();" );
  }
}
function VictoriaStation11Audio(){
  VictoriaStationAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "VictoriaCoachStation11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "WestminsterCathedral11();" );
  }
}
function EcclestonBridge11(){
  getRidOfDestination()
  EcclestonBridge()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "EcclestonBridge11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "EcclestonBridge11Audio();" );
  }
}
function EcclestonBridge11Audio(){
  EcclestonBridgeAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "PimlicoRoadEburyBridgeRoad11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "VictoriaStation11();" );
  }
}
function VictoriaCoachStation11(){
  getRidOfDestination()
  VictoriaCoachStation()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "VictoriaCoachStation11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "VictoriaCoachStation11Audio();" );
  }
}
function VictoriaCoachStation11Audio(){
  VictoriaCoachStationAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "PimlicoRoadEburyBridgeRoad11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "EcclestonBridge11();" );
  }
}
function PimlicoRoadEburyBridgeRoad11(){
  getRidOfDestination()
  PimlicoRoadEburyBridgeRoad()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "PimlicoRoadEburyBridgeRoad11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "PimlicoRoadEburyBridgeRoad11Audio();" );
  }
}
function PimlicoRoadEburyBridgeRoad11Audio(){
  PimlicoRoadEburyBridgeRoadAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "RoyalHospitalRoad11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function RoyalHospitalRoad11(){
  getRidOfDestination()
  RoyalHospitalRoad()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "RoyalHospitalRoad11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "RoyalHospitalRoad11Audio();" );
  }
}
function RoyalHospitalRoad11Audio(){
  RoyalHospitalRoadAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "SloaneSquareStation11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function SloaneSquareStation11(){
  getRidOfDestination()
  SloaneSquareStation()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "SloaneSquareStation11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "SloaneSquareStation11Audio();" );
  }
}
function SloaneSquareStation11Audio(){
  SloaneSquareStationAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "DukeofYorkSquare11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function EburyBridgeRoad11(){
  getRidOfDestination()
  EburyBridgeRoad()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "EburyBridgeRoad11Audio();" );
  }
}
function EburyBridgeRoad11Audio(){
  EburyBridgeRoadAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "VictoriaCoachStation11();" );
  }
}
function ChelseaBridgeRoad11(){
  getRidOfDestination()
  ChelseaBridgeRoad()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "DukeofYorkSquare11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "ChelseaBridgeRoad11Audio();" );
  }
}
function ChelseaBridgeRoad11Audio(){
  ChelseaBridgeRoadAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "EburyBridgeRoad11();" );
  }
}
function SloaneSquareStnLowerSloaneSt11(){
  getRidOfDestination()
  SloaneSquareStnLowerSloaneSt()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "DukeofYorkSquare11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "SloaneSquareStnLowerSloaneSt11Audio();" );
  }
}
function SloaneSquareStnLowerSloaneSt11Audio(){
  SloaneSquareStnLowerSloaneStAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "ChelseaBridgeRoad11();" );
  }
}
function CadoganGardensSloaneSquare11(){
  getRidOfDestination()
  CadoganGardensSloaneSquare()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "DukeofYorkSquare11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "CadoganGardensSloaneSquare11Audio();" );
  }
}
function CadoganGardensSloaneSquare11Audio(){
  CadoganGardensSloaneSquareAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "SloaneSquareStnLowerSloaneSt11();" );
  }
}
function DukeofYorkSquare11(){
  getRidOfDestination()
  DukeofYorkSquare()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "DukeofYorkSquare11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "DukeofYorkSquare11Audio();" );
  }
}
function DukeofYorkSquare11Audio(){
  DukeofYorkSquareAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "WalpoleStreet11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "CadoganGardensSloaneSquare11();" );
  }
}
function WalpoleStreet11(){
  getRidOfDestination()
  WalpoleStreet()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "WalpoleStreet11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "WalpoleStreet11Audio();" );
  }
}
function WalpoleStreet11Audio(){
  WalpoleStreetAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "MarkhamStreet11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function MarkhamStreet11(){
  getRidOfDestination()
  MarkhamStreet()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "MarkhamStreet11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "MarkhamStreet11Audio();" );
  }
}
function MarkhamStreet11Audio(){
  MarkhamStreetAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "ChelseaOldTownHall11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "DukeofYorkSquare11();" );
  }
}
function ChelseaOldTownHall11(){
  getRidOfDestination()
  ChelseaOldTownHall()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "ChelseaOldTownHall11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "ChelseaOldTownHall11Audio();" );
  }
}
function ChelseaOldTownHall11Audio(){
  ChelseaOldTownHallAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "CarlyleSquare11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "MarkhamStreet11();" );
  }
}
function CarlyleSquare11(){
  getRidOfDestination()
  CarlyleSquare()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "CarlyleSquare11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "CarlyleSquare11Audio();" );
  }
}
function CarlyleSquare11Audio(){
  CarlyleSquareAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "BeaufortStreet11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "ChelseaOldTownHall11();" );
  }
}
function OldChurchStreet11(){
  getRidOfDestination()
  OldChurchStreet()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "OldChurchStreet11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "OldChurchStreet11Audio();" );
  }
}
function OldChurchStreet11Audio(){
  OldChurchStreetAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "CarlyleSquare11();" );
  }
}
function BeaufortStreet11(){
  getRidOfDestination()
  BeaufortStreet()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "BeaufortStreet11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "BeaufortStreet11Audio();" );
  }
}
function BeaufortStreet11Audio(){
  BeaufortStreetAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "EdithGroveWorldsEnd11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "OldChurchStreet11();" );
  }
}
function HoburyStreetWorldsEnd11(){
  getRidOfDestination()
  HoburyStreetWorldsEnd()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "HoburyStreetWorldsEnd11Audio();" );
  }
}
function HoburyStreetWorldsEnd11Audio(){
  HoburyStreetWorldsEndAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "=();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "BeaufortStreet11();" );
  }
}
function EdithGroveWorldsEnd11(){
  getRidOfDestination()
  EdithGroveWorldsEnd()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "EdithGroveWorldsEnd11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "EdithGroveWorldsEnd11Audio();" );
  }
}
function EdithGroveWorldsEnd11Audio(){
  EdithGroveWorldsEndAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "WorldsEndHealthCentre11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "HoburyStreetWorldsEnd11();" );
  }
}
function WorldsEndHealthCentre11(){
  getRidOfDestination()
  WorldsEndHealthCentre()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "WorldsEndHealthCentre11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "WorldsEndHealthCentre11Audio();" );
  }
}
function WorldsEndHealthCentre11Audio(){
  WorldsEndHealthCentreAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "RumboldRoad11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "EdithGroveWorldsEnd11();" );
  }
}
function RumboldRoad11(){
  getRidOfDestination()
  RumboldRoad()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "RumboldRoad11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "RumboldRoad11Audio();" );
  }
}
function RumboldRoad11Audio(){
  RumboldRoadAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "TyrawleyRoad11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "WorldsEndHealthCentre11();" );
  }
}
function TyrawleyRoad11(){
  getRidOfDestination()
  TyrawleyRoad()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "TyrawleyRoad11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "TyrawleyRoad11Audio();" );
  }
}
function TyrawleyRoad11Audio(){
  TyrawleyRoadAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "FulhamTownHall11();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "RumboldRoad11();" );
  }
}
function FulhamTownHall11(){
  getRidOfDestination()
  FulhamTownHall()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "FulhamTownHall11Audio();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "FulhamTownHall11Audio();" );
  }
}
function FulhamTownHall11Audio(){
  FulhamTownHallAudio()
  if (routeDestination === "FulhamBroadway11"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "LiverpoolStreet11") {
    NextDestination.setAttribute( "onClick", "TyrawleyRoad11();" );
  }
}

function WalthamstowBusStation20(){
  getRidOfDestination()
  WalthamstowBusStation()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "WalthamstowBusStation20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "WalthamstowBusStation20Audio();" );
  }
}
function WalthamstowBusStation20Audio(){
  WalthamstowBusStationAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "GrosvenorParkRoad20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function GrosvenorParkRoad20(){
  getRidOfDestination()
  GrosvenorParkRoad()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "GrosvenorParkRoad20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "GrosvenorParkRoad20Audio();" );
  }
}
function GrosvenorParkRoad20Audio(){
  GrosvenorParkRoadAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "GroveRoad20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function QueensRoad20(){
  getRidOfDestination()
  QueensRoad()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "GroveRoad20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "QueensRoad20Audio();" );
  }
}
function QueensRoad20Audio(){
  QueensRoadAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "BakersAvenue20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "WalthamstowBusStation20();" );
  }
}
function GroveRoad20(){
  getRidOfDestination()
  GroveRoad()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "GroveRoad20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "GroveRoad20Audio();" );
  }
}
function GroveRoad20Audio(){
  GroveRoadAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "BakersAvenue20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "QueensRoad20();" );
  }
}
function BakersAvenue20(){
  getRidOfDestination()
  BakersAvenue()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "BakersAvenue20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "BakersAvenue20Audio();" );
  }
}
function BakersAvenue20Audio(){
  BakersAvenueAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "LeaBridgeRoadBakersArms20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HoeStreetBakersArms20(){
  getRidOfDestination()
  HoeStreetBakersArms()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "HoeStreetBakersArms20Audio();" );
  }
}
function HoeStreetBakersArms20Audio(){
  HoeStreetBakersArmsAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "GroveRoad20();" );
  }
}
function LeaBridgeRoadBakersArms20(){
  getRidOfDestination()
  LeaBridgeRoadBakersArms()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "LeaBridgeRoadBakersArms20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "LeaBridgeRoadBakersArms20Audio();" );
  }
}
function LeaBridgeRoadBakersArms20Audio(){
  LeaBridgeRoadBakersArmsAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "LeytonGreenRoad20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "HoeStreetBakersArms20();" );
  }
}
function LeytonGreenRoad20(){
  getRidOfDestination()
  LeytonGreenRoad()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "LeytonGreenRoad20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "LeytonGreenRoad20Audio();" );
  }
}
function LeytonGreenRoad20Audio(){
  LeytonGreenRoadAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "ShernhallStreet20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "LeaBridgeRoadBakersArms20();" );
  }
}
function ShernhallStreet20(){
  getRidOfDestination()
  ShernhallStreet()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "ShernhallStreet20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "ShernhallStreet20Audio();" );
  }
}
function ShernhallStreet20Audio(){
  ShernhallStreetAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "PeterboroughRoad20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function EssexRoad20(){
  getRidOfDestination()
  EssexRoad()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "PeterboroughRoad20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "EssexRoad20Audio();" );
  }
}
function EssexRoad20Audio(){
  EssexRoadAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "WhippsCrossWoodStreet20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "LeytonGreenRoad20();" );
  }
}
function PeterboroughRoad20(){
  getRidOfDestination()
  PeterboroughRoad()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "PeterboroughRoad20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "PeterboroughRoad20Audio();" );
  }
}
function PeterboroughRoad20Audio(){
  PeterboroughRoadAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "WhippsCrossWoodStreet20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "EssexRoad20();" );
  }
}
function WhippsCrossWoodStreet20(){
  getRidOfDestination()
  WhippsCrossWoodStreet()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "WhippsCrossWoodStreet20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "WhippsCrossWoodStreet20Audio();" );
  }
}
function WhippsCrossWoodStreet20Audio(){
  WhippsCrossWoodStreetAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "HainaultCourt20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WhippsCrossBusStand20(){
  getRidOfDestination()
  WhippsCrossBusStand()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "HainaultCourt20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "WhippsCrossBusStand20Audio();" );
  }
}
function WhippsCrossBusStand20Audio(){
  WhippsCrossBusStandAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "OakhurstGardens20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "PeterboroughRoad20();" );
  }
}
function HainaultCourt20(){
  getRidOfDestination()
  HainaultCourt()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "HainaultCourt20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "HainaultCourt20Audio();" );
  }
}
function HainaultCourt20Audio(){
  HainaultCourtAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "OakhurstGardens20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "WhippsCrossBusStand20();" );
  }
}
function OakhurstGardens20(){
  getRidOfDestination()
  OakhurstGardens()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "OakhurstGardens20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "OakhurstGardens20Audio();" );
  }
}
function OakhurstGardens20Audio(){
  OakhurstGardensAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "StPetersChurch20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function SnaresbrookRoad20(){
  getRidOfDestination()
  SnaresbrookRoad()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "SnaresbrookRoad20Audio();" );
  }
}
function SnaresbrookRoad20Audio(){
  SnaresbrookRoadAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "HainaultCourt20();" );
  }
}
function StPetersChurch20(){
  getRidOfDestination()
  StPetersChurch()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "StPetersChurch20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "StPetersChurch20Audio();" );
  }
}
function StPetersChurch20Audio(){
  StPetersChurchAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "ForestRoad20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "SnaresbrookRoad20();" );
  }
}
function ForestRoad20(){
  getRidOfDestination()
  ForestRoad()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "ForestRoad20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "ForestRoad20Audio();" );
  }
}
function ForestRoad20Audio(){
  ForestRoadAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "WaterworksCorner20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "StPetersChurch20();" );
  }
}
function WaterworksCorner20(){
  getRidOfDestination()
  WaterworksCorner()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "WaterworksCorner20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "WaterworksCorner20Audio();" );
  }
}
function WaterworksCorner20Audio(){
  WaterworksCornerAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "ChelmsfordRoad20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "ForestRoad20();" );
  }
}
function ChelmsfordRoad20(){
  getRidOfDestination()
  ChelmsfordRoad()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "ChelmsfordRoad20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "ChelmsfordRoad20Audio();" );
  }
}
function ChelmsfordRoad20Audio(){
  ChelmsfordRoadAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "OakHill20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "WaterworksCorner20();" );
  }
}
function OakHill20(){
  getRidOfDestination()
  OakHill()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "OakHill20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "OakHill20Audio();" );
  }
}
function OakHill20Audio(){
  OakHillAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "StAubynsSchool20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StAubynsSchool20(){
  getRidOfDestination()
  StAubynsSchool()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "StAubynsSchool20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "StAubynsSchool20Audio();" );
  }
}
function StAubynsSchool20Audio(){
  StAubynsSchoolAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "ChingfordLane20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "ChelmsfordRoad20();" );
  }
}
function ChingfordLane20(){
  getRidOfDestination()
  ChingfordLane()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "ChingfordLane20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "ChingfordLane20Audio();" );
  }
}
function ChingfordLane20Audio(){
  ChingfordLaneAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "WoodfordGreenBroadmeadRoad20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "StAubynsSchool20();" );
  }
}
function WoodfordGreenBroadmeadRoad20(){
  getRidOfDestination()
  WoodfordGreenBroadmeadRoad()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "WoodfordGreenBroadmeadRoad20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "WoodfordGreenBroadmeadRoad20Audio();" );
  }
}
function WoodfordGreenBroadmeadRoad20Audio(){
  WoodfordGreenBroadmeadRoadAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "MonkhamsLane20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "ChingfordLane20();" );
  }
}
function MonkhamsLane20(){
  getRidOfDestination()
  MonkhamsLane()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "MonkhamsLane20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "MonkhamsLane20Audio();" );
  }
}
function MonkhamsLane20Audio(){
  MonkhamsLaneAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "StThomasofCanterburyChurch20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "WoodfordGreenBroadmeadRoad20();" );
  }
}
function StThomasofCanterburyChurch20(){
  getRidOfDestination()
  StThomasofCanterburyChurch()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "StThomasofCanterburyChurch20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "StThomasofCanterburyChurch20Audio();" );
  }
}
function StThomasofCanterburyChurch20Audio(){
  StThomasofCanterburyChurchAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "WhitehallRoadBancroftsSchool20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "MonkhamsLane20();" );
  }
}
function WhitehallRoadBancroftsSchool20(){
  getRidOfDestination()
  WhitehallRoadBancroftsSchool()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "WhitehallRoadBancroftsSchool20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "WhitehallRoadBancroftsSchool20Audio();" );
  }
}
function WhitehallRoadBancroftsSchool20Audio(){
  WhitehallRoadBancroftsSchoolAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "KnightonLane20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "StThomasofCanterburyChurch20();" );
  }
}
function KnightonLane20(){
  getRidOfDestination()
  KnightonLane()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "KnightonLane20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "KnightonLane20Audio();" );
  }
}
function KnightonLane20Audio(){
  KnightonLaneAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "StagLane20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "WhitehallRoadBancroftsSchool20();" );
  }
}
function StagLane20(){
  getRidOfDestination()
  StagLane()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "StagLane20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "StagLane20Audio();" );
  }
}
function StagLane20Audio(){
  StagLaneAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "RussellRoad20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "KnightonLane20();" );
  }
}
function RussellRoad20(){
  getRidOfDestination()
  RussellRoad()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "RussellRoad20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "RussellRoad20Audio();" );
  }
}
function RussellRoad20Audio(){
  RussellRoadAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "CricketGround20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "StagLane20();" );
  }
}
function CricketGround20(){
  getRidOfDestination()
  CricketGround()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "CricketGround20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "CricketGround20Audio();" );
  }
}
function CricketGround20Audio(){
  CricketGroundAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "NorthFarm20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "RussellRoad20();" );
  }
}
function NorthFarm20(){
  getRidOfDestination()
  NorthFarm()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "NorthFarm20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "NorthFarm20Audio();" );
  }
}
function NorthFarm20Audio(){
  NorthFarmAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "SpringGrove20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "CricketGround20();" );
  }
}
function SpringGrove20(){
  getRidOfDestination()
  SpringGrove()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "SpringGrove20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "SpringGrove20Audio();" );
  }
}
function SpringGrove20Audio(){
  SpringGroveAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "UpperPark20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "NorthFarm20();" );
  }
}
function UpperPark20(){
  getRidOfDestination()
  UpperPark()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "UpperPark20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "UpperPark20Audio();" );
  }
}
function UpperPark20Audio(){
  UpperParkAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "TheCrown20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function TheCrescent20(){
  getRidOfDestination()
  TheCrescent()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "TheCrown20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "TheCrescent20Audio();" );
  }
}
function TheCrescent20Audio(){
  TheCrescentAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "LoughtonStation20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "SpringGrove20();" );
  }
}
function TheCrown20(){
  getRidOfDestination()
  TheCrown()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "TheCrown20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "TheCrown20Audio();" );
  }
}
function TheCrown20Audio(){
  TheCrownAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "LoughtonStation20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "TheCrescent20();" );
  }
}
function LoughtonStation20(){
  getRidOfDestination()
  LoughtonStation()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "LoughtonStation20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "LoughtonStation20Audio();" );
  }
}
function LoughtonStation20Audio(){
  LoughtonStationAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "Sainsburys20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "Sainsburys20();" );
  }
}
function Sainsburys20(){
  getRidOfDestination()
  Sainsburys()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "Sainsburys20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "Sainsburys20Audio();" );
  }
}
function Sainsburys20Audio(){
  SainsburysAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "TheCrowntwo20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "TheCrown20();" );
  }
}
function TheCrowntwo20(){
  getRidOfDestination()
  TheCrown()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "TheCrowntwo20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "TheCrowntwo20Audio();" );
  }
}
function TheCrowntwo20Audio(){
  TheCrownAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "ForestRoadtwo20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "LoughtonStation20();" );
  }
}
function ForestRoadtwo20(){
  getRidOfDestination()
  ForestRoad()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "ForestRoadtwo20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "ForestRoadtwo20Audio();" );
  }
}
function ForestRoadtwo20Audio(){
  ForestRoadAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "TrapsHill20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "TheCrowntwo20();" );
  }
}
function TrapsHill20(){
  getRidOfDestination()
  TrapsHill()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "TrapsHill20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "TrapsHill20Audio();" );
  }
}
function TrapsHill20Audio(){
  TrapsHillAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "TheUplands20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "ForestRoadtwo20();" );
  }
}
function TheUplands20(){
  getRidOfDestination()
  TheUplands()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "TheUplands20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "TheUplands20Audio();" );
  }
}
function TheUplands20Audio(){
  TheUplandsAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "ChurchClose20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "TrapsHill20();" );
  }
}
function ChurchClose20(){
  getRidOfDestination()
  ChurchClose()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "ChurchClose20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "ChurchClose20Audio();" );
  }
}
function ChurchClose20Audio(){
  ChurchCloseAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "SedleyRise20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "TheUplands20();" );
  }
}
function SedleyRise20(){
  getRidOfDestination()
  SedleyRise()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "SedleyRise20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "SedleyRise20Audio();" );
  }
}
function SedleyRise20Audio(){
  SedleyRiseAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "MapleGate20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "ChurchClose20();" );
  }
}
function MapleGate20(){
  getRidOfDestination()
  MapleGate()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "MapleGate20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "MapleGate20Audio();" );
  }
}
function MapleGate20Audio(){
  MapleGateAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "Hillyfields20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "SedleyRise20();" );
  }
}
function Hillyfields20(){
  getRidOfDestination()
  Hillyfields()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "Hillyfields20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "Hillyfields20Audio();" );
  }
}
function Hillyfields20Audio(){
  HillyfieldsAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "Hillcroft20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "MapleGate20();" );
  }
}
function Hillcroft20(){
  getRidOfDestination()
  Hillcroft()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "Hillcroft20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "Hillcroft20Audio();" );
  }
}
function Hillcroft20Audio(){
  HillcroftAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "PyrlesLane20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "Hillyfields20();" );
  }
}
function PyrlesLane20(){
  getRidOfDestination()
  PyrlesLane()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "PyrlesLane20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "PyrlesLane20Audio();" );
  }
}
function PyrlesLane20Audio(){
  PyrlesLaneAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "ChandlerRoad20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "Hillcroft20();" );
  }
}
function ChandlerRoad20(){
  getRidOfDestination()
  ChandlerRoad()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "ChandlerRoad20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "ChandlerRoad20Audio();" );
  }
}
function ChandlerRoad20Audio(){
  ChandlerRoadAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "CastellRoad20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "PyrlesLane20();" );
  }
}
function CastellRoad20(){
  getRidOfDestination()
  CastellRoad()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "CastellRoad20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "CastellRoad20Audio();" );
  }
}
function CastellRoad20Audio(){
  CastellRoadAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "DavenantSchool20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "ChandlerRoad20();" );
  }
}
function DavenantSchool20(){
  getRidOfDestination()
  DavenantSchool()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "DavenantSchool20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "DavenantSchool20Audio();" );
  }
}
function DavenantSchool20Audio(){
  DavenantSchoolAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "TheCottageLoaf20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ColebrookLane20(){
  getRidOfDestination()
  ColebrookLane()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "ColebrookLane20Audio();" );
  }
}
function ColebrookLane20Audio(){
  getRidOfDestination()
  ColebrookLaneAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "CastellRoad20();" );
  }
}
function TheCottageLoaf20Audio(){
  ColebrookLaneAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "CastellRoad20();" );
  }
}
function TheCottageLoaf20(){
  getRidOfDestination()
  TheCottageLoaf()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "TheCottageLoaf20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "TheCottageLoaf20Audio();" );
  }
}
function TheCottageLoaf20Audio(){
  TheCottageLoafAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "GoldinghamAvenue20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "ColebrookLane20();" );
  }
}
function GoldinghamAvenue20(){
  getRidOfDestination()
  GoldinghamAvenue()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "GoldinghamAvenue20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "GoldinghamAvenue20Audio();" );
  }
}
function GoldinghamAvenue20Audio(){
  GoldinghamAvenueAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "MannockDrive20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "TheCottageLoaf20();" );
  }
}
function MannockDrive20(){
  getRidOfDestination()
  MannockDrive()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "MannockDrive20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "MannockDrive20Audio();" );
  }
}
function MannockDrive20Audio(){
  MannockDriveAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "EtheridgeRoad20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "GoldinghamAvenue20();" );
  }
}
function EtheridgeRoad20(){
  getRidOfDestination()
  EtheridgeRoad()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "EtheridgeRoad20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "EtheridgeRoad20Audio();" );
  }
}
function EtheridgeRoad20Audio(){
  EtheridgeRoadAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "VereRoad20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "MannockDrive20();" );
  }
}
function VereRoad20(){
  getRidOfDestination()
  VereRoad()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "VereRoad20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "VereRoad20Audio();" );
  }
}
function VereRoad20Audio(){
  VereRoadAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "BurtonRoad20();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BurtonRoad20(){
  getRidOfDestination()
  BurtonRoad()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "BurtonRoad20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "BurtonRoad20Audio();" );
  }
}
function BurtonRoad20Audio(){
  BurtonRoadAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "EtheridgeRoad20();" );
  }
}
function TorringtonDrive20(){
  getRidOfDestination()
  TorringtonDrive()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "TorringtonDrive20Audio();" );
  }
}
function TorringtonDrive20Audio(){
  TorringtonDriveAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "BurtonRoad20();" );
  }
}
function TheBroadway20(){
  getRidOfDestination()
  TheBroadway()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "TheBroadway20Audio();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "TheBroadway20Audio();" );
  }
}
function TheBroadway20Audio(){
  TheBroadwayAudio()
  if (routeDestination === "Debden20"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral20") {
    NextDestination.setAttribute( "onClick", "TorringtonDrive20();" );
  }
}

function HarrowBusStationH18H19(){
  getRidOfDestination()
  HarrowBusStation()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "HarrowBusStationH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "HarrowBusStationH18H19Audio();" );
  }
}
function HarrowBusStationH18H19Audio(){
  HarrowBusStationAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "NeptuneRoadH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function StGeorgesCentreH18H19(){
  getRidOfDestination()
  StGeorgesCentre()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "StGeorgesCentreH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "StGeorgesCentreH18H19Audio();" );
  }
}
function StGeorgesCentreH18H19Audio(){
  StGeorgesCentreAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "StGeorgesCentreH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "HarrowBusStationH18H19();" );
  }
}
function NeptuneRoadH18H19(){
  getRidOfDestination()
  NeptuneRoad()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "NeptuneRoadH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "NeptuneRoadH18H19Audio();" );
  }
}
function NeptuneRoadH18H19Audio(){
  NeptuneRoadAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "OxfordRoadH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "StGeorgesCentreH18H19();" );
  }
}
function OxfordRoadH18H19(){
  getRidOfDestination()
  OxfordRoad()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "OxfordRoadH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "OxfordRoadH18H19Audio();" );
  }
}
function OxfordRoadH18H19Audio(){
  OxfordRoadAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "TheGardensH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "NeptuneRoadH18H19();" );
  }
}
function TheGardensH18H19(){
  getRidOfDestination()
  TheGardens()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "TheGardensH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "TheGardensH18H19Audio();" );
  }
}
function TheGardensH18H19Audio(){
  TheGardensAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "DurhamRoadH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function RutlandRoadH18H19(){
  getRidOfDestination()
  RutlandRoad()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "RutlandRoadH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "RutlandRoadH18H19Audio();" );
  }
}
function RutlandRoadH18H19Audio(){
  RutlandRoadAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "StationRoadH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "OxfordRoadH18H19();" );
  }
}
function DurhamRoadH18H19(){
  getRidOfDestination()
  DurhamRoad()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "DurhamRoadH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "DurhamRoadH18H19Audio();" );
  }
}
function DurhamRoadH18H19Audio(){
  DurhamRoadAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "StationRoadH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "RutlandRoadH18H19();" );
  }
}
function StationRoadH18H19(){
  getRidOfDestination()
  StationRoad()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "StationRoadH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "StationRoadH18H19Audio();" );
  }
}
function StationRoadH18H19Audio(){
  StationRoadAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "SouthfieldParkH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "DurhamRoadH18H19();" );
  }
}
function SouthfieldParkH18H19(){
  getRidOfDestination()
  SouthfieldPark()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "SouthfieldParkH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "SouthfieldParkH18H19Audio();" );
  }
}
function SouthfieldParkH18H19Audio(){
  SouthfieldParkAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "PrioryWayH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "StationRoadH18H19();" );
  }
}
function PrioryWayH18H19(){
  getRidOfDestination()
  PrioryWay()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "PrioryWayH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "PrioryWayH18H19Audio();" );
  }
}
function PrioryWayH18H19Audio(){
  PrioryWayAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "ElmcroftCrescentH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "SouthfieldParkH18H19();" );
  }
}
function ElmcroftCrescentH18H19(){
  getRidOfDestination()
  ElmcroftCrescent()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "ElmcroftCrescentH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "ElmcroftCrescentH18H19Audio();" );
  }
}
function ElmcroftCrescentH18H19Audio(){
  ElmcroftCrescentAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "PinnerParkAvenueH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "PrioryWayH18H19();" );
  }
}
function PinnerParkAvenueH18H19(){
  getRidOfDestination()
  PinnerParkAvenue()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "PinnerParkAvenueH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "PinnerParkAvenueH18H19Audio();" );
  }
}
function PinnerParkAvenueH18H19Audio(){
  PinnerParkAvenueAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "BroadfieldsSportsGroundH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "ElmcroftCrescentH18H19();" );
  }
}
function BroadfieldsSportsGroundH18H19(){
  getRidOfDestination()
  BroadfieldsSportsGround()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "BroadfieldsSportsGroundH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "BroadfieldsSportsGroundH18H19Audio();" );
  }
}
function BroadfieldsSportsGroundH18H19Audio(){
  BroadfieldsSportsGroundAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "HeadstoneLaneStationH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ParkfieldAvenueH18H19(){
  getRidOfDestination()
  ParkfieldAvenue()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "HeadstoneLaneStationH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "ParkfieldAvenueH18H19Audio();" );
  }
}
function ParkfieldAvenueH18H19Audio(){
  ParkfieldAvenueAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "HeadstoneLaneH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "PinnerParkAvenueH18H19();" );
  }
}
function HeadstoneLaneStationH18H19(){
  getRidOfDestination()
  HeadstoneLaneStation()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "HeadstoneLaneStationH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "HeadstoneLaneStationH18H19Audio();" );
  }
}
function HeadstoneLaneStationH18H19Audio(){
  HeadstoneLaneStationAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "HeadstoneLaneH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "ParkfieldAvenueH18H19();" );
  }
}
function HeadstoneLaneH18H19(){
  getRidOfDestination()
  HeadstoneLane()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "HeadstoneLaneH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "HeadstoneLaneH18H19Audio();" );
  }
}
function HeadstoneLaneH18H19Audio(){
  HeadstoneLaneAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "CourtenayAvenueH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "HeadstoneLaneStationH18H19();" );
  }
}
function CourtenayAvenueH18H19(){
  getRidOfDestination()
  CourtenayAvenue()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "CourtenayAvenueH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "CourtenayAvenueH18H19Audio();" );
  }
}
function CourtenayAvenueH18H19Audio(){
  CourtenayAvenueAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "LongElmesBoxtreeLaneH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "HeadstoneLaneH18H19();" );
  }
}
function LongElmesBoxtreeLaneH18H19(){
  getRidOfDestination()
  LongElmesBoxtreeLane()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "LongElmesBoxtreeLaneH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "LongElmesBoxtreeLaneH18H19Audio();" );
  }
}
function LongElmesBoxtreeLaneH18H19Audio(){
  LongElmesBoxtreeLaneAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "StanhopeAvenueH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StanhopeAvenueH18H19(){
  getRidOfDestination()
  StanhopeAvenue()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "StanhopeAvenueH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "StanhopeAvenueH18H19Audio();" );
  }
}
function StanhopeAvenueH18H19Audio(){
  StanhopeAvenueAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "LongElmesH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "CourtenayAvenueH18H19();" );
  }
}
function LongElmesH18H19(){
  getRidOfDestination()
  LongElmes()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "LongElmesH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "LongElmesH18H19Audio();" );
  }
}
function LongElmesH18H19Audio(){
  LongElmesAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "HarrowWealdBusGarageH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LongElmesAspriMedicalCentreH18H19(){
  getRidOfDestination()
  LongElmesAspriMedicalCentre()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "LongElmesAspriMedicalCentreH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "LongElmesAspriMedicalCentreH18H19Audio();" );
  }
}
function LongElmesAspriMedicalCentreH18H19Audio(){
  LongElmesAspriMedicalCentreAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "MonroGardensH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "StanhopeAvenueH18H19();" );
  }
}
function HarrowWealdBusGarageH18H19(){
  getRidOfDestination()
  HarrowWealdBusGarage()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "HarrowWealdBusGarageH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "HarrowWealdBusGarageH18H19Audio();" );
  }
}
function HarrowWealdBusGarageH18H19Audio(){
  HarrowWealdBusGarageAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "MonroGardensH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "LongElmesAspriMedicalCentreH18H19();" );
  }
}
function MonroGardensH18H19(){
  getRidOfDestination()
  MonroGardens()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "MonroGardensH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "MonroGardensH18H19Audio();" );
  }
}
function MonroGardensH18H19Audio(){
  MonroGardensAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "BrookshillH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BrookshillH18H19(){
  getRidOfDestination()
  Brookshill()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "BrookshillH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "BrookshillH18H19Audio();" );
  }
}
function BrookshillH18H19Audio(){
  BrookshillAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "AllSaintsMewsH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function UxbridgeRoadH18H19(){
  getRidOfDestination()
  UxbridgeRoad()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "AllSaintsMewsH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "UxbridgeRoadH18H19Audio();" );
  }
}
function UxbridgeRoadH18H19Audio(){
  UxbridgeRoadAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "BrockhurstCornerH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "HarrowWealdBusGarageH18H19();" );
  }
}
function AllSaintsMewsH18H19(){
  getRidOfDestination()
  AllSaintsMews()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "AllSaintsMewsH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "AllSaintsMewsH18H19Audio();" );
  }
}
function AllSaintsMewsH18H19Audio(){
  AllSaintsMewsAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "BrockhurstCornerH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "UxbridgeRoadH18H19();" );
  }
}
function BrockhurstCornerH18H19(){
  getRidOfDestination()
  BrockhurstCorner()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "BrockhurstCornerH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "BrockhurstCornerH18H19Audio();" );
  }
}
function BrockhurstCornerH18H19Audio(){
  BrockhurstCornerAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "GordonAvenueH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "AllSaintsMewsH18H19();" );
  }
}
function GordonAvenueH18H19(){
  getRidOfDestination()
  GordonAvenue()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "GordonAvenueH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "GordonAvenueH18H19Audio();" );
  }
}
function GordonAvenueH18H19Audio(){
  GordonAvenueAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "LaurelParkH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function RichmondGardensH18H19(){
  getRidOfDestination()
  RichmondGardens()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "RichmondGardensH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "RichmondGardensH18H19Audio();" );
  }
}
function RichmondGardensH18H19Audio(){
  RichmondGardensAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "RichmondGardensH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "BrockhurstCornerH18H19();" );
  }
}
function LaurelParkH18H19(){
  getRidOfDestination()
  LaurelPark()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "LaurelParkH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "LaurelParkH18H19Audio();" );
  }
}
function LaurelParkH18H19Audio(){
  LaurelParkAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "CollegeHillRoadH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "RichmondGardensH18H19();" );
  }
}
function CollegeHillRoadH18H19(){
  getRidOfDestination()
  CollegeHillRoad()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "CollegeHillRoadH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "CollegeHillRoadH18H19Audio();" );
  }
}
function CollegeHillRoadH18H19Audio(){
  CollegeHillRoadAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "FisherRoadH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "LaurelParkH18H19();" );
  }
}
function FisherRoadH18H19(){
  getRidOfDestination()
  FisherRoad()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "FisherRoadH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "FisherRoadH18H19Audio();" );
  }
}
function FisherRoadH18H19Audio(){
  FisherRoadAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "BelmontHealthCentreH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "CollegeHillRoadH18H19();" );
  }
}
function BelmontHealthCentreH18H19(){
  getRidOfDestination()
  BelmontHealthCentre()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "BelmontHealthCentreH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "BelmontHealthCentreH18H19Audio();" );
  }
}
function BelmontHealthCentreH18H19Audio(){
  BelmontHealthCentreAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "BelmontCircleH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BelmontCircleH18H19(){
  getRidOfDestination()
  BelmontCircle()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "BelmontCircleH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "BelmontCircleH18H19Audio();" );
  }
}
function BelmontCircleH18H19Audio(){
  BelmontCircleAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "CliftonAvenueH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "FisherRoadH18H19();" );
  }
}
function CliftonAvenueH18H19(){
  getRidOfDestination()
  CliftonAvenue()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "CliftonAvenueH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "CliftonAvenueH18H19Audio();" );
  }
}
function CliftonAvenueH18H19Audio(){
  CliftonAvenueAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "QueensAvenueH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "BelmontCircleH18H19();" );
  }
}
function QueensAvenueH18H19(){
  getRidOfDestination()
  QueensAvenue()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "QueensAvenueH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "QueensAvenueH18H19Audio();" );
  }
}
function QueensAvenueH18H19Audio(){
  QueensAvenueAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "KentonLibraryH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "CliftonAvenueH18H19();" );
  }
}
function KentonLibraryH18H19(){
  getRidOfDestination()
  KentonLibrary()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "KentonLibraryH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "KentonLibraryH18H19Audio();" );
  }
}
function KentonLibraryH18H19Audio(){
  KentonLibraryAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "HuntersGroveH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "QueensAvenueH18H19();" );
  }
}
function HuntersGroveH18H19(){
  getRidOfDestination()
  HuntersGrove()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "HuntersGroveH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "HuntersGroveH18H19Audio();" );
  }
}
function HuntersGroveH18H19Audio(){
  HuntersGroveAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "WoodcockHillKentonLaneH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "KentonLibraryH18H19();" );
  }
}
function WoodcockHillKentonLaneH18H19(){
  getRidOfDestination()
  WoodcockHillKentonLane()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "WoodcockHillKentonLaneH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "WoodcockHillKentonLaneH18H19Audio();" );
  }
}
function WoodcockHillKentonLaneH18H19Audio(){
  WoodcockHillKentonLaneAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "StLeonardsAvenueH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function KentonRoadH18H19(){
  getRidOfDestination()
  KentonRoad()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "KentonRoadH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "KentonRoadH18H19Audio();" );
  }
}
function KentonRoadH18H19Audio(){
  KentonRoadAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "UptonGardensH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "HuntersGroveH18H19();" );
  }
}
function StLeonardsAvenueH18H19(){
  getRidOfDestination()
  StLeonardsAvenue()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "StLeonardsAvenueH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "StLeonardsAvenueH18H19Audio();" );
  }
}
function StLeonardsAvenueH18H19Audio(){
  StLeonardsAvenueAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "UptonGardensH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "KentonRoadH18H19();" );
  }
}
function UptonGardensH18H19(){
  getRidOfDestination()
  UptonGardens()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "UptonGardensH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "UptonGardensH18H19Audio();" );
  }
}
function UptonGardensH18H19Audio(){
  UptonGardensAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "KentonStationH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function OdeonParadeUptonGardensH18H19(){
  getRidOfDestination()
  OdeonParadeUptonGardens()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "OdeonParadeUptonGardensH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "OdeonParadeUptonGardensH18H19Audio();" );
  }
}
function OdeonParadeUptonGardensH18H19Audio(){
  OdeonParadeUptonGardensAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "OdeonParadeUptonGardensH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "StLeonardsAvenueH18H19();" );
  }
}
function CarltonAvenueH18H19(){
  getRidOfDestination()
  CarltonAvenue()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "CarltonAvenueH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "CarltonAvenueH18H19Audio();" );
  }
}
function CarltonAvenueH18H19Audio(){
  CarltonAvenueAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "NorthwickParkStationH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "OdeonParadeUptonGardensH18H19();" );
  }
}
function KentonStationH18H19(){
  getRidOfDestination()
  KentonStation()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "KentonStationH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "KentonStationH18H19Audio();" );
  }
}
function KentonStationH18H19Audio(){
  KentonStationAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "NorthwickParkStationH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "CarltonAvenueH18H19();" );
  }
}
function NorthwickAvenueH18H19(){
  getRidOfDestination()
  NorthwickAvenue()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "NorthwickAvenueH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "NorthwickAvenueH18H19Audio();" );
  }
}
function NorthwickAvenueH18H19Audio(){
  NorthwickAvenueAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "NorthwickAvenueH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "KentonStationH18H19();" );
  }
}
function NorthwickParkStationH18H19(){
  getRidOfDestination()
  NorthwickParkStation()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "NorthwickParkStationH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "NorthwickParkStationH18H19Audio();" );
  }
}
function NorthwickParkStationH18H19Audio(){
  NorthwickParkStationAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "TyburnLaneH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "NorthwickAvenueH18H19();" );
  }
}
function GaytonRoadH18H19(){
  getRidOfDestination()
  GaytonRoad()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "GaytonRoadH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "GaytonRoadH18H19Audio();" );
  }
}
function GaytonRoadH18H19Audio(){
  GaytonRoadAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "GaytonRoadH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "NorthwickParkStationH18H19();" );
  }
}
function TyburnLaneH18H19(){
  getRidOfDestination()
  TyburnLane()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "TyburnLaneH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "TyburnLaneH18H19Audio();" );
  }
}
function TyburnLaneH18H19Audio(){
  TyburnLaneAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "HarrowTownCentreH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "GaytonRoadH18H19();" );
  }
}
function HarrowTownCentreH18H19(){
  getRidOfDestination()
  HarrowTownCentre()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "HarrowTownCentreH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "HarrowTownCentreH18H19Audio();" );
  }
}
function HarrowTownCentreH18H19Audio(){
  HarrowTownCentreAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "HarrowBusStationlastH18H19();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "TyburnLaneH18H19();" );
  }
}
function HarrowBusStationlastH18H19(){
  getRidOfDestination()
  HarrowBusStation()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "HarrowBusStationlastH18H19Audio();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "HarrowBusStationlastH18H19Audio();" );
  }
}
function HarrowBusStationlastH18H19Audio(){
  HarrowBusStationAudio()
  if (routeDestination === "HarrowH18"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "HarrowH19") {
    NextDestination.setAttribute( "onClick", "HarrowTownCentreH18H19();" );
  }
}

function RomfordMarketN15(){
  getRidOfDestination()
  RomfordMarket()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "RomfordMarketN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "RomfordMarketN15Audio();" );
  }
}
function RomfordMarketN15Audio(){
  RomfordMarketAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "MercuryGardensN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function MercuryGardensN15(){
  getRidOfDestination()
  MercuryGardens()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "MercuryGardensN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "MercuryGardensN15Audio();" );
  }
}
function MercuryGardensN15Audio(){
  MercuryGardensAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "WesternRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WesternRoadN15(){
  getRidOfDestination()
  WesternRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "WesternRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "WesternRoadN15Audio();" );
  }
}
function WesternRoadN15Audio(){
  WesternRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "RomfordStationN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "RomfordMarketN15();" );
  }
}
function RomfordStationN15(){
  getRidOfDestination()
  RomfordStation()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "RomfordStationN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "RomfordStationN15Audio();" );
  }
}
function RomfordStationN15Audio(){
  RomfordStationAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ThurloeGardensN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "WesternRoadN15();" );
  }
}
function ThurloeGardensN15(){
  getRidOfDestination()
  ThurloeGardens()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ThurloeGardensN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "ThurloeGardensN15Audio();" );
  }
}
function ThurloeGardensN15Audio(){
  ThurloeGardensAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BrentwoodRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BrentwoodRoadN15(){
  getRidOfDestination()
  BrentwoodRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BrentwoodRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BrentwoodRoadN15Audio();" );
  }
}
function BrentwoodRoadN15Audio(){
  BrentwoodRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ClydesdaleRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "RomfordStationN15();" );
  }
}
function ClydesdaleRoadN15(){
  getRidOfDestination()
  ClydesdaleRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ClydesdaleRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "ClydesdaleRoadN15Audio();" );
  }
}
function ClydesdaleRoadN15Audio(){
  ClydesdaleRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "NorwoodAvenueN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BrentwoodRoadN15();" );
  }
}
function NorwoodAvenueN15(){
  getRidOfDestination()
  NorwoodAvenue()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "NorwoodAvenueN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "NorwoodAvenueN15Audio();" );
  }
}
function NorwoodAvenueN15Audio(){
  NorwoodAvenueAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "RushGreenRoadDagenhamRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "ClydesdaleRoadN15();" );
  }
}
function RushGreenRoadDagenhamRoadN15(){
  getRidOfDestination()
  RushGreenRoadDagenhamRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "RushGreenRoadDagenhamRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "RushGreenRoadDagenhamRoadN15Audio();" );
  }
}
function RushGreenRoadDagenhamRoadN15Audio(){
  RushGreenRoadDagenhamRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "LeonardAvenueN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function DagenhamRoadN15(){
  getRidOfDestination()
  DagenhamRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "DagenhamRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "DagenhamRoadN15Audio();" );
  }
}
function DagenhamRoadN15Audio(){
  DagenhamRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ClaytonRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "NorwoodAvenueN15();" );
  }
}
function LeonardAvenueN15(){
  getRidOfDestination()
  LeonardAvenue()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "LeonardAvenueN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "LeonardAvenueN15Audio();" );
  }
}
function LeonardAvenueN15Audio(){
  LeonardAvenueAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ClaytonRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "DagenhamRoadN15();" );
  }
}
function ClaytonRoadN15(){
  getRidOfDestination()
  ClaytonRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ClaytonRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "ClaytonRoadN15Audio();" );
  }
}
function ClaytonRoadN15Audio(){
  ClaytonRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BartonAvenueN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "LeonardAvenueN15();" );
  }
}
function BartonAvenueN15(){
  getRidOfDestination()
  BartonAvenue()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BartonAvenueN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BartonAvenueN15Audio();" );
  }
}
function BartonAvenueN15Audio(){
  BartonAvenueAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "CuLondonUniversityWoodLaneN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "ClaytonRoadN15();" );
  }
}
function CuLondonUniversityWoodLaneN15(){
  getRidOfDestination()
  CuLondonUniversityWoodLane()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "CuLondonUniversityWoodLaneN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "CuLondonUniversityWoodLaneN15Audio();" );
  }
}
function CuLondonUniversityWoodLaneN15Audio(){
  CuLondonUniversityWoodLaneAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BecontreeHeathLeisureCentreN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BartonAvenueN15();" );
  }
}
function BecontreeHeathLeisureCentreN15(){
  getRidOfDestination()
  BecontreeHeathLeisureCentre()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BecontreeHeathLeisureCentreN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BecontreeHeathLeisureCentreN15Audio();" );
  }
}
function BecontreeHeathLeisureCentreN15Audio(){
  BecontreeHeathLeisureCentreAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "MorrisRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "CuLondonUniversityWoodLaneN15();" );
  }
}
function MorrisRoadN15(){
  getRidOfDestination()
  MorrisRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "MorrisRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "MorrisRoadN15Audio();" );
  }
}
function MorrisRoadN15Audio(){
  MorrisRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "FiveElmsSchoolN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BecontreeHeathLeisureCentreN15();" );
  }
}
function FiveElmsSchoolN15(){
  getRidOfDestination()
  FiveElmsSchool()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "FiveElmsSchoolN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "FiveElmsSchoolN15Audio();" );
  }
}
function FiveElmsSchoolN15Audio(){
  FiveElmsSchoolAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BoxollRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BoxollRoadN15(){
  getRidOfDestination()
  BoxollRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BoxollRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BoxollRoadN15Audio();" );
  }
}
function BoxollRoadN15Audio(){
  BoxollRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BeverleyRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BeverleyRoadN15(){
  getRidOfDestination()
  BeverleyRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BeverleyRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BeverleyRoadN15Audio();" );
  }
}
function BeverleyRoadN15Audio(){
  BeverleyRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "MartinsCornerValenceAvenueN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HeathwayN15(){
  getRidOfDestination()
  Heathway()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "WinmillRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "HeathwayN15Audio();" );
  }
}
function HeathwayN15Audio(){
  HeathwayAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BennettsCastleLaneN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "MorrisRoadN15();" );
  }
}
function WinmillRoadN15(){
  getRidOfDestination()
  WinmillRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "WinmillRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "WinmillRoadN15Audio();" );
  }
}
function WinmillRoadN15Audio(){
  WinmillRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BennettsCastleLaneN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "HeathwayN15();" );
  }
}
function CharlecoteRoadN15(){
  getRidOfDestination()
  CharlecoteRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "CharlecoteRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "CharlecoteRoadN15Audio();" );
  }
}
function CharlecoteRoadN15Audio(){
  CharlecoteRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BennettsCastleLaneN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "WinmillRoadN15();" );
  }
}
function MartinsCornerValenceAvenueN15(){
  getRidOfDestination()
  MartinsCornerValenceAvenue()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "MartinsCornerValenceAvenueN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "MartinsCornerValenceAvenueN15Audio();" );
  }
}
function MartinsCornerValenceAvenueN15Audio(){
  MartinsCornerValenceAvenueAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BennettsCastleLaneN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "CharlecoteRoadN15();" );
  }
}
function BennettsCastleLaneN15(){
  getRidOfDestination()
  BennettsCastleLane()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BennettsCastleLaneN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BennettsCastleLaneN15Audio();" );
  }
}
function BennettsCastleLaneN15Audio(){
  BennettsCastleLaneAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "LindseyRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "MartinsCornerValenceAvenueN15();" );
  }
}
function LindseyRoadN15(){
  getRidOfDestination()
  LindseyRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "LindseyRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "LindseyRoadN15Audio();" );
  }
}
function LindseyRoadN15Audio(){
  LindseyRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "LodgeAvenueN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BennettsCastleLaneN15();" );
  }
}
function LodgeAvenueN15(){
  getRidOfDestination()
  LodgeAvenue()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "LodgeAvenueN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "LodgeAvenueN15Audio();" );
  }
}
function LodgeAvenueN15Audio(){
  LodgeAvenueAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "StThomasMoreCatholicChurchN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BecontreeAvenueN15(){
  getRidOfDestination()
  BecontreeAvenue()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BecontreeAvenueN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BecontreeAvenueN15Audio();" );
  }
}
function BecontreeAvenueN15Audio(){
  BecontreeAvenueAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "CapelGardensN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "LindseyRoadN15();" );
  }
}
function StThomasMoreCatholicChurchN15(){
  getRidOfDestination()
  StThomasMoreCatholicChurch()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "StThomasMoreCatholicChurchN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "StThomasMoreCatholicChurchN15Audio();" );
  }
}
function StThomasMoreCatholicChurchN15Audio(){
  StThomasMoreCatholicChurchAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "CapelGardensN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BecontreeAvenueN15();" );
  }
}
function CapelGardensN15(){
  getRidOfDestination()
  CapelGardens()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "CapelGardensN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "CapelGardensN15Audio();" );
  }
}
function CapelGardensN15Audio(){
  CapelGardensAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ThurlestoneAvenueN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "StThomasMoreCatholicChurchN15();" );
  }
}
function ThurlestoneAvenueN15(){
  getRidOfDestination()
  ThurlestoneAvenue()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ThurlestoneAvenueN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "ThurlestoneAvenueN15Audio();" );
  }
}
function ThurlestoneAvenueN15Audio(){
  ThurlestoneAvenueAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BarkingBusGarageN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "CapelGardensN15();" );
  }
}
function BarkingBusGarageN15(){
  getRidOfDestination()
  BarkingBusGarage()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BarkingBusGarageN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BarkingBusGarageN15Audio();" );
  }
}
function BarkingBusGarageN15Audio(){
  BarkingBusGarageAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "FaircrossN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "ThurlestoneAvenueN15();" );
  }
}
function FaircrossN15(){
  getRidOfDestination()
  Faircross()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "FaircrossN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "FaircrossN15Audio();" );
  }
}
function FaircrossN15Audio(){
  FaircrossAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "HulseAvenueBarkingParkN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BarkingBusGarageN15();" );
  }
}
function HulseAvenueBarkingParkN15(){
  getRidOfDestination()
  HulseAvenueBarkingPark()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "HulseAvenueBarkingParkN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "HulseAvenueBarkingParkN15Audio();" );
  }
}
function HulseAvenueBarkingParkN15Audio(){
  HulseAvenueBarkingParkAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ParkAvenueN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "FaircrossN15();" );
  }
}
function ParkAvenueN15(){
  getRidOfDestination()
  ParkAvenue()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ParkAvenueN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "ParkAvenueN15Audio();" );
  }
}
function ParkAvenueN15Audio(){
  ParkAvenueAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BarkingStationN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "HulseAvenueBarkingParkN15();" );
  }
}
function BarkingStationN15(){
  getRidOfDestination()
  BarkingStation()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BarkingStationN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BarkingStationN15Audio();" );
  }
}
function BarkingStationN15Audio(){
  BarkingStationAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BarkingTownCentreN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "ParkAvenueN15();" );
  }
}
function BarkingTownCentreN15(){
  getRidOfDestination()
  BarkingTownCentre()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BarkingTownCentreN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BarkingTownCentreN15Audio();" );
  }
}
function BarkingTownCentreN15Audio(){
  BarkingTownCentreAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "NorthStreetN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BarkingStationN15();" );
  }
}
function NorthStreetN15(){
  getRidOfDestination()
  NorthStreet()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "NorthStreetN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "NorthStreetN15Audio();" );
  }
}
function NorthStreetN15Audio(){
  NorthStreetAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BarkingTescoN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BarkingTownCentreN15();" );
  }
}
function BarkingTescoN15(){
  getRidOfDestination()
  BarkingTesco()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BarkingTescoN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BarkingTescoN15Audio();" );
  }
}
function BarkingTescoN15Audio(){
  BarkingTescoAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BurgesRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BurgesRoadN15(){
  getRidOfDestination()
  BurgesRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BurgesRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BurgesRoadN15Audio();" );
  }
}
function BurgesRoadN15Audio(){
  BurgesRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "StOlavesRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "NorthStreetN15();" );
  }
}
function StOlavesRoadN15(){
  getRidOfDestination()
  StOlavesRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "StOlavesRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "StOlavesRoadN15Audio();" );
  }
}
function StOlavesRoadN15Audio(){
  StOlavesRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "AltmoreAvenueN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BurgesRoadN15();" );
  }
}
function AltmoreAvenueN15(){
  getRidOfDestination()
  AltmoreAvenue()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "AltmoreAvenueN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "AltmoreAvenueN15Audio();" );
  }
}
function AltmoreAvenueN15Audio(){
  AltmoreAvenueAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "NewhamTownHallN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "StOlavesRoadN15();" );
  }
}
function NewhamTownHallN15(){
  getRidOfDestination()
  NewhamTownHall()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "NewhamTownHallN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "NewhamTownHallN15Audio();" );
  }
}
function NewhamTownHallN15Audio(){
  NewhamTownHallAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BartleAvenueN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "AltmoreAvenueN15();" );
  }
}
function HighStreetNorthN15(){
  getRidOfDestination()
  HighStreetNorth()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "HighStreetNorthN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "HighStreetNorthN15Audio();" );
  }
}
function HighStreetNorthN15Audio(){
  HighStreetNorthAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "AintreeAvenueN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "NewhamTownHallN15();" );
  }
}
function BartleAvenueN15(){
  getRidOfDestination()
  BartleAvenue()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BartleAvenueN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BartleAvenueN15Audio();" );
  }
}
function BartleAvenueN15Audio(){
  BartleAvenueAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "AintreeAvenueN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "HighStreetNorthN15();" );
  }
}
function AintreeAvenueN15(){
  getRidOfDestination()
  AintreeAvenue()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "AintreeAvenueN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "AintreeAvenueN15Audio();" );
  }
}
function AintreeAvenueN15Audio(){
  AintreeAvenueAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "DickensRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function DickensRoadN15(){
  getRidOfDestination()
  DickensRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "DickensRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "DickensRoadN15Audio();" );
  }
}
function DickensRoadN15Audio(){
  DickensRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "UptonParkPrioryRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function KatherineRoadN15(){
  getRidOfDestination()
  KatherineRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "KatherineRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "KatherineRoadN15Audio();" );
  }
}
function KatherineRoadN15Audio(){
  KatherineRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "UptonParkGreenStreetN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BartleAvenueN15();" );
  }
}
function ArragonRoadN15(){
  getRidOfDestination()
  ArragonRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ArragonRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "ArragonRoadN15Audio();" );
  }
}
function ArragonRoadN15Audio(){
  ArragonRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "UptonParkGreenStreetN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "KatherineRoadN15();" );
  }
}
function UptonParkPrioryRoadN15(){
  getRidOfDestination()
  UptonParkPrioryRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "UptonParkPrioryRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "UptonParkPrioryRoadN15Audio();" );
  }
}
function UptonParkPrioryRoadN15Audio(){
  UptonParkPrioryRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "UptonParkGreenStreetN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "ArragonRoadN15();" );
  }
}
function UptonParkGreenStreetN15(){
  getRidOfDestination()
  UptonParkGreenStreet()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "UptonParkGreenStreetN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "UptonParkGreenStreetN15Audio();" );
  }
}
function UptonParkGreenStreetN15Audio(){
  UptonParkGreenStreetAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "NewCityRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "UptonParkPrioryRoadN15();" );
  }
}
function SamsonStreetN15(){
  getRidOfDestination()
  SamsonStreet()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "SamsonStreetN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "SamsonStreetN15Audio();" );
  }
}
function SamsonStreetN15Audio(){
  SamsonStreetAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "PlaistowPrinceRegentLaneN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "UptonParkGreenStreetN15();" );
  }
}
function NewCityRoadN15(){
  getRidOfDestination()
  NewCityRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "NewCityRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "NewCityRoadN15Audio();" );
  }
}
function NewCityRoadN15Audio(){
  NewCityRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "PlaistowPrinceRegentLaneN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "SamsonStreetN15();" );
  }
}
function PlaistowPrinceRegentLaneN15(){
  getRidOfDestination()
  PlaistowPrinceRegentLane()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "PlaistowPrinceRegentLaneN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "PlaistowPrinceRegentLaneN15Audio();" );
  }
}
function PlaistowPrinceRegentLaneN15Audio(){
  PlaistowPrinceRegentLaneAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "PlaistowPoliceStationN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "NewCityRoadN15();" );
  }
}
function PlaistowPoliceStationN15(){
  getRidOfDestination()
  PlaistowPoliceStation()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "PlaistowPoliceStationN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "PlaistowPoliceStationN15Audio();" );
  }
}
function PlaistowPoliceStationN15Audio(){
  PlaistowPoliceStationAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BalaamStreetN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "PlaistowPrinceRegentLaneN15();" );
  }
}
function BalaamStreetN15(){
  getRidOfDestination()
  BalaamStreet()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BalaamStreetN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BalaamStreetN15Audio();" );
  }
}
function BalaamStreetN15Audio(){
  BalaamStreetAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ChargeableLaneN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "PlaistowPoliceStationN15();" );
  }
}
function ChargeableLaneN15(){
  getRidOfDestination()
  ChargeableLane()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ChargeableLaneN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "ChargeableLaneN15Audio();" );
  }
}
function ChargeableLaneN15Audio(){
  ChargeableLaneAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "CroydonRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CroydonRoadN15(){
  getRidOfDestination()
  CroydonRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "CroydonRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "CroydonRoadN15Audio();" );
  }
}
function CroydonRoadN15Audio(){
  CroydonRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "RokebySchoolN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function KingStreetN15(){
  getRidOfDestination()
  KingStreet()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "KingStreetN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "KingStreetN15Audio();" );
  }
}
function KingStreetN15Audio(){
  KingStreetAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "HermitRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BalaamStreetN15();" );
  }
}
function RokebySchoolN15(){
  getRidOfDestination()
  RokebySchool()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "RokebySchoolN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "RokebySchoolN15Audio();" );
  }
}
function RokebySchoolN15Audio(){
  RokebySchoolAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "HermitRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "KingStreetN15();" );
  }
}
function HermitRoadN15(){
  getRidOfDestination()
  HermitRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "HermitRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "HermitRoadN15Audio();" );
  }
}
function HermitRoadN15Audio(){
  HermitRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "RathboneMarketN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "RokebySchoolN15();" );
  }
}
function RathboneMarketN15(){
  getRidOfDestination()
  RathboneMarket()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "RathboneMarketN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "RathboneMarketN15Audio();" );
  }
}
function RathboneMarketN15Audio(){
  RathboneMarketAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "CanningTownBusStationN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "HermitRoadN15();" );
  }
}
function CanningTownBusStationN15(){
  getRidOfDestination()
  CanningTownBusStation()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "CanningTownBusStationN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "CanningTownBusStationN15Audio();" );
  }
}
function CanningTownBusStationN15Audio(){
  CanningTownBusStationAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "AbbottRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "RathboneMarketN15();" );
  }
}
function StephensonStreetN15(){
  getRidOfDestination()
  StephensonStreet()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "StephensonStreetN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "StephensonStreetN15Audio();" );
  }
}
function StephensonStreetN15Audio(){
  StephensonStreetAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BlackwallTunnelN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "CanningTownBusStationN15();" );
  }
}
function AbbottRoadN15(){
  getRidOfDestination()
  AbbottRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "AbbottRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "AbbottRoadN15Audio();" );
  }
}
function AbbottRoadN15Audio(){
  AbbottRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BlackwallTunnelN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "StephensonStreetN15();" );
  }
}
function BlackwallTunnelN15(){
  getRidOfDestination()
  BlackwallTunnel()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BlackwallTunnelN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BlackwallTunnelN15Audio();" );
  }
}
function BlackwallTunnelN15Audio(){
  BlackwallTunnelAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BazelyStreetN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function NutmegLaneN15(){
  getRidOfDestination()
  NutmegLane()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "NutmegLaneN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "NutmegLaneN15Audio();" );
  }
}
function NutmegLaneN15Audio(){
  NutmegLaneAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "PoplarRecreationGroundN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "AbbottRoadN15();" );
  }
}
function BrunswickRoadN15(){
  getRidOfDestination()
  BrunswickRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BrunswickRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BrunswickRoadN15Audio();" );
  }
}
function BrunswickRoadN15Audio(){
  BrunswickRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "PoplarRecreationGroundN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "NutmegLaneN15();" );
  }
}
function BazelyStreetN15(){
  getRidOfDestination()
  BazelyStreet()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BazelyStreetN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BazelyStreetN15Audio();" );
  }
}
function BazelyStreetN15Audio(){
  BazelyStreetAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "PoplarRecreationGroundN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BrunswickRoadN15();" );
  }
}
function ChrispStreetMarketAllSaintsDlrN15(){
  getRidOfDestination()
  ChrispStreetMarketAllSaintsDlr()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ChrispStreetMarketAllSaintsDlrN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "ChrispStreetMarketAllSaintsDlrN15Audio();" );
  }
}
function ChrispStreetMarketAllSaintsDlrN15Audio(){
  ChrispStreetMarketAllSaintsDlrAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "UpperNorthStreetN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BazelyStreetN15();" );
  }
}
function PoplarRecreationGroundN15(){
  getRidOfDestination()
  PoplarRecreationGround()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "PoplarRecreationGroundN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "PoplarRecreationGroundN15Audio();" );
  }
}
function PoplarRecreationGroundN15Audio(){
  PoplarRecreationGroundAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "UpperNorthStreetN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "ChrispStreetMarketAllSaintsDlrN15();" );
  }
}
function UpperNorthStreetN15(){
  getRidOfDestination()
  UpperNorthStreet()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "UpperNorthStreetN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "UpperNorthStreetN15Audio();" );
  }
}
function UpperNorthStreetN15Audio(){
  UpperNorthStreetAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "UniversityofCumbriaInLondonN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "PoplarRecreationGroundN15();" );
  }
}
function UniversityofCumbriaInLondonN15(){
  getRidOfDestination()
  UniversityofCumbriaInLondon()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "UniversityofCumbriaInLondonN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "UniversityofCumbriaInLondonN15Audio();" );
  }
}
function UniversityofCumbriaInLondonN15Audio(){
  UniversityofCumbriaInLondonAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BurdettRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "UpperNorthStreetN15();" );
  }
}
function BurdettRoadN15(){
  getRidOfDestination()
  BurdettRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BurdettRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BurdettRoadN15Audio();" );
  }
}
function BurdettRoadN15Audio(){
  BurdettRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "LimehouseTownHallN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "UniversityofCumbriaInLondonN15();" );
  }
}
function LimehouseTownHallN15(){
  getRidOfDestination()
  LimehouseTownHall()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "LimehouseTownHallN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "LimehouseTownHallN15Audio();" );
  }
}
function LimehouseTownHallN15Audio(){
  LimehouseTownHallAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "LowellStreetN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function SalmonLaneN15(){
  getRidOfDestination()
  SalmonLane()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "LowellStreetN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "SalmonLaneN15Audio();" );
  }
}
function SalmonLaneN15Audio(){
  SalmonLaneAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "LimehouseStationN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BurdettRoadN15();" );
  }
}
function LowellStreetN15(){
  getRidOfDestination()
  LowellStreet()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "LowellStreetN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "LowellStreetN15Audio();" );
  }
}
function LowellStreetN15Audio(){
  LowellStreetAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "LimehouseStationN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "SalmonLaneN15();" );
  }
}
function LimehouseStationN15(){
  getRidOfDestination()
  LimehouseStation()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "LimehouseStationN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "LimehouseStationN15Audio();" );
  }
}
function LimehouseStationN15Audio(){
  LimehouseStationAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "StepneyMethodistChurchN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "LowellStreetN15();" );
  }
}
function StepneyMethodistChurchN15(){
  getRidOfDestination()
  StepneyMethodistChurch()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "StepneyMethodistChurchN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "StepneyMethodistChurchN15Audio();" );
  }
}
function StepneyMethodistChurchN15Audio(){
  StepneyMethodistChurchAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "MarionRichardsonSchoolN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "LimehouseStationN15();" );
  }
}
function MarionRichardsonSchoolN15(){
  getRidOfDestination()
  MarionRichardsonSchool()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "MarionRichardsonSchoolN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "MarionRichardsonSchoolN15Audio();" );
  }
}
function MarionRichardsonSchoolN15Audio(){
  MarionRichardsonSchoolAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ExmouthEstateN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ExmouthEstateN15(){
  getRidOfDestination()
  ExmouthEstate()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ExmouthEstateN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "ExmouthEstateN15Audio();" );
  }
}
function ExmouthEstateN15Audio(){
  ExmouthEstateAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "StMarysStMichaelsChurchN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ArbourSquareN15(){
  getRidOfDestination()
  ArbourSquare()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ArbourSquareN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "ArbourSquareN15Audio();" );
  }
}
function ArbourSquareN15Audio(){
  ArbourSquareAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "WatneyMarketN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "StepneyMethodistChurchN15();" );
  }
}
function StMarysStMichaelsChurchN15(){
  getRidOfDestination()
  StMarysStMichaelsChurch()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "StMarysStMichaelsChurchN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "StMarysStMichaelsChurchN15Audio();" );
  }
}
function StMarysStMichaelsChurchN15Audio(){
  StMarysStMichaelsChurchAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "WatneyMarketN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "ArbourSquareN15();" );
  }
}
function WatneyMarketN15(){
  getRidOfDestination()
  WatneyMarket()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "WatneyMarketN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "WatneyMarketN15Audio();" );
  }
}
function WatneyMarketN15Audio(){
  WatneyMarketAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "NewRoadN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "StMarysStMichaelsChurchN15();" );
  }
}
function NewRoadN15(){
  getRidOfDestination()
  NewRoad()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "NewRoadN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "NewRoadN15Audio();" );
  }
}
function NewRoadN15Audio(){
  NewRoadAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "HenriquesStreetN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "WatneyMarketN15();" );
  }
}
function HenriquesStreetN15(){
  getRidOfDestination()
  HenriquesStreet()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "HenriquesStreetN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "HenriquesStreetN15Audio();" );
  }
}
function HenriquesStreetN15Audio(){
  HenriquesStreetAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "AldgateEastStationN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "NewRoadN15();" );
  }
}
function AldgateEastStationN15(){
  getRidOfDestination()
  AldgateEastStation()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "AldgateEastStationN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "AldgateEastStationN15Audio();" );
  }
}
function AldgateEastStationN15Audio(){
  AldgateEastStationAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "AldgateStationN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "HenriquesStreetN15();" );
  }
}
function AldgateStationN15(){
  getRidOfDestination()
  AldgateStation()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "AldgateStationN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "AldgateStationN15Audio();" );
  }
}
function AldgateStationN15Audio(){
  AldgateStationAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "MinoriesN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function MinoriesN15(){
  getRidOfDestination()
  Minories()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "MinoriesN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "MinoriesN15Audio();" );
  }
}
function MinoriesN15Audio(){
  MinoriesAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "TowerofLondonN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function MansellStreetN15(){
  getRidOfDestination()
  MansellStreet()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "MansellStreetN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "MansellStreetN15Audio();" );
  }
}
function MansellStreetN15Audio(){
  MansellStreetAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "GreatTowerStreetN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "AldgateEastStationN15();" );
  }
}
function TowerofLondonN15(){
  getRidOfDestination()
  TowerofLondon()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "TowerofLondonN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "TowerofLondonN15Audio();" );
  }
}
function TowerofLondonN15Audio(){
  TowerofLondonAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "GreatTowerStreetN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "MansellStreetN15();" );
  }
}
function GreatTowerStreetN15(){
  getRidOfDestination()
  GreatTowerStreet()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "GreatTowerStreetN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "GreatTowerStreetN15Audio();" );
  }
}
function GreatTowerStreetN15Audio(){
  GreatTowerStreetAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "MonumentStationN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "TowerofLondonN15();" );
  }
}
function MonumentStationN15(){
  getRidOfDestination()
  MonumentStation()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "MonumentStationN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "MonumentStationN15Audio();" );
  }
}
function MonumentStationN15Audio(){
  MonumentStationAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "CannonStreetStationN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "GreatTowerStreetN15();" );
  }
}
function CannonStreetStationN15(){
  getRidOfDestination()
  CannonStreetStation()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "CannonStreetStationN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "CannonStreetStationN15Audio();" );
  }
}
function CannonStreetStationN15Audio(){
  CannonStreetStationAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "StPaulsChurchyardN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "MonumentStationN15();" );
  }
}
function StPaulsChurchyardN15(){
  getRidOfDestination()
  StPaulsChurchyard()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "StPaulsChurchyardN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "StPaulsChurchyardN15Audio();" );
  }
}
function StPaulsChurchyardN15Audio(){
  StPaulsChurchyardAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "StPaulsCathedralN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function MansionHouseStationN15(){
  getRidOfDestination()
  MansionHouseStation()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "MansionHouseStationN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "MansionHouseStationN15Audio();" );
  }
}
function MansionHouseStationN15Audio(){
  MansionHouseStationAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "CityThameslinkStnLudgateCircusN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "CannonStreetStationN15();" );
  }
}
function StPaulsCathedralN15(){
  getRidOfDestination()
  StPaulsCathedral()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "StPaulsCathedralN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "StPaulsCathedralN15Audio();" );
  }
}
function StPaulsCathedralN15Audio(){
  StPaulsCathedralAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "CityThameslinkStnLudgateCircusN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "MansionHouseStationN15();" );
  }
}
function CityThameslinkStnLudgateCircusN15(){
  getRidOfDestination()
  CityThameslinkStnLudgateCircus()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "CityThameslinkStnLudgateCircusN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "CityThameslinkStnLudgateCircusN15Audio();" );
  }
}
function CityThameslinkStnLudgateCircusN15Audio(){
  CityThameslinkStnLudgateCircusAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ShoeLaneN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ShoeLaneN15(){
  getRidOfDestination()
  ShoeLane()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ShoeLaneN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "ShoeLaneN15Audio();" );
  }
}
function ShoeLaneN15Audio(){
  ShoeLaneAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "FetterLaneN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LudgateHillOldBaileyN15(){
  getRidOfDestination()
  LudgateHillOldBailey()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "LudgateHillOldBaileyN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "LudgateHillOldBaileyN15Audio();" );
  }
}
function LudgateHillOldBaileyN15Audio(){
  LudgateHillOldBaileyAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "LudgateCircusN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "StPaulsCathedralN15();" );
  }
}
function LudgateCircusN15(){
  getRidOfDestination()
  LudgateCircus()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "LudgateCircusN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "LudgateCircusN15Audio();" );
  }
}
function LudgateCircusN15Audio(){
  LudgateCircusAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "LudgateCircusN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "LudgateHillOldBaileyN15();" );
  }
}
function FetterLaneN15(){
  getRidOfDestination()
  FetterLane()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "FetterLaneN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "FetterLaneN15Audio();" );
  }
}
function FetterLaneN15Audio(){
  FetterLaneAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ChanceryLaneN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "LudgateCircusN15();" );
  }
}
function ChanceryLaneN15(){
  getRidOfDestination()
  ChanceryLane()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "ChanceryLaneN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "ChanceryLaneN15Audio();" );
  }
}
function ChanceryLaneN15Audio(){
  ChanceryLaneAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "TheRoyalCourtsofJusticeN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function TheRoyalCourtsofJusticeN15(){
  getRidOfDestination()
  TheRoyalCourtsofJustice()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "TheRoyalCourtsofJusticeN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "TheRoyalCourtsofJusticeN15Audio();" );
  }
}
function TheRoyalCourtsofJusticeN15Audio(){
  TheRoyalCourtsofJusticeAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "AldwychAustraliaHouseN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "FetterLaneN15();" );
  }
}
function AldwychAustraliaHouseN15(){
  getRidOfDestination()
  AldwychAustraliaHouse()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "AldwychAustraliaHouseN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "AldwychAustraliaHouseN15Audio();" );
  }
}
function AldwychAustraliaHouseN15Audio(){
  AldwychAustraliaHouseAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "AldwychDruryLaneN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function AldwychDruryLaneN15(){
  getRidOfDestination()
  AldwychDruryLane()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "AldwychDruryLaneN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "AldwychDruryLaneN15Audio();" );
  }
}
function AldwychDruryLaneN15Audio(){
  AldwychDruryLaneAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "SavoyStreetN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function SavoyStreetN15(){
  getRidOfDestination()
  SavoyStreet()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "SavoyStreetN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "SavoyStreetN15Audio();" );
  }
}
function SavoyStreetN15Audio(){
  SavoyStreetAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BedfordStreetN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BedfordStreetN15(){
  getRidOfDestination()
  BedfordStreet()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BedfordStreetN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BedfordStreetN15Audio();" );
  }
}
function BedfordStreetN15Audio(){
  BedfordStreetAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "CharingCrossStationN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CharingCrossStationN15(){
  getRidOfDestination()
  CharingCrossStation()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "CharingCrossStationN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "CharingCrossStationN15Audio();" );
  }
}
function CharingCrossStationN15Audio(){
  CharingCrossStationAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "TrafalgarSquareN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function AldwychN15(){
  getRidOfDestination()
  Aldwych()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "AldwychN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "AldwychN15Audio();" );
  }
}
function AldwychN15Audio(){
  AldwychAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "RegentStreetStJamessN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "TheRoyalCourtsofJusticeN15();" );
  }
}
function SouthamptonStreetCoventGardenN15(){
  getRidOfDestination()
  SouthamptonStreetCoventGarden()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "SouthamptonStreetCoventGardenN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "SouthamptonStreetCoventGardenN15Audio();" );
  }
}
function SouthamptonStreetCoventGardenN15Audio(){
  SouthamptonStreetCoventGardenAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "RegentStreetStJamessN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "AldwychN15();" );
  }
}
function CharingCrossStnTrafalgarSquareN15(){
  getRidOfDestination()
  CharingCrossStnTrafalgarSquare()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "CharingCrossStnTrafalgarSquareN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "CharingCrossStnTrafalgarSquareN15Audio();" );
  }
}
function CharingCrossStnTrafalgarSquareN15Audio(){
  CharingCrossStnTrafalgarSquareAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "RegentStreetStJamessN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "SouthamptonStreetCoventGardenN15();" );
  }
}
function TrafalgarSquareN15(){
  getRidOfDestination()
  TrafalgarSquare()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "TrafalgarSquareN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "TrafalgarSquareN15Audio();" );
  }
}
function TrafalgarSquareN15Audio(){
  TrafalgarSquareAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "RegentStreetStJamessN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "CharingCrossStnTrafalgarSquareN15();" );
  }
}
function RegentStreetStJamessN15(){
  getRidOfDestination()
  RegentStreetStJamess()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "RegentStreetStJamessN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "RegentStreetStJamessN15Audio();" );
  }
}
function RegentStreetStJamessN15Audio(){
  RegentStreetStJamessAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "PiccadillyCircusN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HaymarketJermynStreetN15(){
  getRidOfDestination()
  HaymarketJermynStreet()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "PiccadillyCircusN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "HaymarketJermynStreetN15Audio();" );
  }
}
function HaymarketJermynStreetN15Audio(){
  HaymarketJermynStreetAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BeakStreetHamleysToyStoreN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "TrafalgarSquareN15();" );
  }
}
function PiccadillyCircusN15(){
  getRidOfDestination()
  PiccadillyCircus()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "PiccadillyCircusN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "PiccadillyCircusN15Audio();" );
  }
}
function PiccadillyCircusN15Audio(){
  PiccadillyCircusAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BeakStreetHamleysToyStoreN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "HaymarketJermynStreetN15();" );
  }
}
function BeakStreetHamleysToyStoreN15(){
  getRidOfDestination()
  BeakStreetHamleysToyStore()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BeakStreetHamleysToyStoreN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BeakStreetHamleysToyStoreN15Audio();" );
  }
}
function BeakStreetHamleysToyStoreN15Audio(){
  BeakStreetHamleysToyStoreAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "OxfordCircusStationN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "PiccadillyCircusN15();" );
  }
}
function OxfordCircusStationN15(){
  getRidOfDestination()
  OxfordCircusStation()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "OxfordCircusStationN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "OxfordCircusStationN15Audio();" );
  }
}
function OxfordCircusStationN15Audio(){
  OxfordCircusStationAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "MargaretStreetOxfordCircusN15();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "BeakStreetHamleysToyStoreN15();" );
  }
}
function MargaretStreetOxfordCircusN15(){
  getRidOfDestination()
  MargaretStreetOxfordCircus()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "MargaretStreetOxfordCircusN15Audio();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "MargaretStreetOxfordCircusN15Audio();" );
  }
}
function MargaretStreetOxfordCircusN15Audio(){
  MargaretStreetOxfordCircusAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function OxfordCircusStnMargaretStreetN15(){
  getRidOfDestination()
  OxfordCircusStnMargaretStreet()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "OxfordCircusStnMargaretStreetN15Audio();" );
  }
}
function OxfordCircusStnMargaretStreetN15Audio(){
  OxfordCircusStnMargaretStreetAudio()
  if (routeDestination === "OxfordCircusN15"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "RomfordMarketN15") {
    NextDestination.setAttribute( "onClick", "OxfordCircusStationN15();" );
  }
}

function HackneyWickTrowbridgeRoad30(){
  getRidOfDestination()
  HackneyWickTrowbridgeRoad()
  if (routeDestination === "MarbleArch30"){
    NextDestination.setAttribute( "onClick", "HackneyWickTrowbridgeRoad30Audio();" );
  } else if (routeDestination === "HackneyWick30") {
    NextDestination.setAttribute( "onClick", "HackneyWickTrowbridgeRoad30Audio();" );
  }
}
function HackneyWickTrowbridgeRoad30Audio(){
  HackneyWickTrowbridgeRoadAudio()
  if (routeDestination === "MarbleArch30"){
    NextDestination.setAttribute( "onClick", "WickRoadKenworthyRoad30();" );
  } else if (routeDestination === "HackneyWick30") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WickRoadKenworthyRoad30(){
  getRidOfDestination()
  WickRoadKenworthyRoad()
  if (routeDestination === "MarbleArch30"){
    NextDestination.setAttribute( "onClick", "WickRoadKenworthyRoad30Audio();" );
  } else if (routeDestination === "HackneyWick30") {
    NextDestination.setAttribute( "onClick", "WickRoadKenworthyRoad30Audio();" );
  }
}
function WickRoadKenworthyRoad30Audio(){
  WickRoadKenworthyRoadAudio()
  if (routeDestination === "MarbleArch30"){
    NextDestination.setAttribute( "onClick", "BarnabasRoad30();" );
  } else if (routeDestination === "HackneyWick30") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BarnabasRoad30(){
  getRidOfDestination()
  BarnabasRoad()
  if (routeDestination === "MarbleArch30"){
    NextDestination.setAttribute( "onClick", "BarnabasRoad30Audio();" );
  } else if (routeDestination === "HackneyWick30") {
    NextDestination.setAttribute( "onClick", "BarnabasRoad30Audio();" );
  }
}
function BarnabasRoad30Audio(){
  BarnabasRoadAudio()
  if (routeDestination === "MarbleArch30"){
    NextDestination.setAttribute( "onClick", "KentonRoadWellStreet30();" );
  } else if (routeDestination === "HackneyWick30") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function KentonRoadWellStreet30(){
  getRidOfDestination()
  KentonRoadWellStreet()
  if (routeDestination === "MarbleArch30"){
    NextDestination.setAttribute( "onClick", "KentonRoadWellStreet30Audio();" );
  } else if (routeDestination === "HackneyWick30") {
    NextDestination.setAttribute( "onClick", "KentonRoadWellStreet30Audio();" );
  }
}
function KentonRoadWellStreet30Audio(){
  KentonRoadWellStreetAudio()
  if (routeDestination === "MarbleArch30"){
    NextDestination.setAttribute( "onClick", "MorningLaneRetreatPlace30();" );
  } else if (routeDestination === "HackneyWick30") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function MorningLaneRetreatPlace30(){
  getRidOfDestination()
  MorningLaneRetreatPlace()
  if (routeDestination === "MarbleArch30"){
    NextDestination.setAttribute( "onClick", "MorningLaneRetreatPlace30Audio();" );
  } else if (routeDestination === "HackneyWick30") {
    NextDestination.setAttribute( "onClick", "MorningLaneRetreatPlace30Audio();" );
  }
}
function MorningLaneRetreatPlace30Audio(){
  MorningLaneRetreatPlaceAudio()
  if (routeDestination === "MarbleArch30"){
    NextDestination.setAttribute( "onClick", "PonsfordStreet30();" );
  } else if (routeDestination === "HackneyWick30") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function PonsfordStreet30(){
  getRidOfDestination()
  PonsfordStreet()
  if (routeDestination === "MarbleArch30"){
    NextDestination.setAttribute( "onClick", "MorningLaneRetreatPlace30Audio();" );
  } else if (routeDestination === "HackneyWick30") {
    NextDestination.setAttribute( "onClick", "PonsfordStreet30Audio();" );
  }
}
function PonsfordStreet30Audio(){
  PonsfordStreetAudio()
  if (routeDestination === "MarbleArch30"){
    NextDestination.setAttribute( "onClick", "PonsfordStreet30();" );
  } else if (routeDestination === "HackneyWick30") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}

function CanningTownBusStation147(){
  getRidOfDestination()
  CanningTownBusStation()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "CanningTownBusStation147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "CanningTownBusStation147Audio();" );
  }
}
function CanningTownBusStation147Audio(){
  CanningTownBusStationAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "RogersRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function RogersRoad147(){
  getRidOfDestination()
  RogersRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "RogersRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "RogersRoad147Audio();" );
  }
}
function RogersRoad147Audio(){
  RogersRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "KeirHardieRecreationGround147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CanningTownStation147(){
  getRidOfDestination()
  CanningTownStation()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "CanningTownStation147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "CanningTownStation147Audio();" );
  }
}
function CanningTownStation147Audio(){
  CanningTownStationAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "TarlingRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function BrunelStreet147(){
  getRidOfDestination()
  BrunelStreet()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "BrunelStreet147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "BrunelStreet147Audio();" );
  }
}
function BrunelStreet147Audio(){
  BrunelStreetAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "TarlingRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "CanningTownStation147();" );
  }
}
function JudeStreet147(){
  getRidOfDestination()
  JudeStreet()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "JudeStreet147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "JudeStreet147Audio();" );
  }
}
function JudeStreet147Audio(){
  JudeStreetAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "TarlingRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "BrunelStreet147();" );
  }
}
function KeirHardieRecreationGround147(){
  getRidOfDestination()
  KeirHardieRecreationGround()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "KeirHardieRecreationGround147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "KeirHardieRecreationGround147Audio();" );
  }
}
function KeirHardieRecreationGround147Audio(){
  KeirHardieRecreationGroundAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "TarlingRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "JudeStreet147();" );
  }
}
function TarlingRoad147(){
  getRidOfDestination()
  TarlingRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "TarlingRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "TarlingRoad147Audio();" );
  }
}
function TarlingRoad147Audio(){
  TarlingRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "TheApplebyCentre147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function TheApplebyCentre147(){
  getRidOfDestination()
  TheApplebyCentre()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "TheApplebyCentre147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "TheApplebyCentre147Audio();" );
  }
}
function TheApplebyCentre147Audio(){
  TheApplebyCentreAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "BridgelandRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HallsvillePrimarySchool147(){
  getRidOfDestination()
  HallsvillePrimarySchool()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "HallsvillePrimarySchool147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "HallsvillePrimarySchool147Audio();" );
  }
}
function HallsvillePrimarySchool147Audio(){
  HallsvillePrimarySchoolAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "CustomHouseStation147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "KeirHardieRecreationGround147();" );
  }
}
function MundayRoadRoyalVictoria147(){
  getRidOfDestination()
  MundayRoadRoyalVictoria()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "MundayRoadRoyalVictoria147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "MundayRoadRoyalVictoria147Audio();" );
  }
}
function MundayRoadRoyalVictoria147Audio(){
  MundayRoadRoyalVictoriaAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "CustomHouseStation147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "HallsvillePrimarySchool147();" );
  }
}
function BridgelandRoad147(){
  getRidOfDestination()
  BridgelandRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "BridgelandRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "BridgelandRoad147Audio();" );
  }
}
function BridgelandRoad147Audio(){
  BridgelandRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "CustomHouseStation147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "MundayRoadRoyalVictoria147();" );
  }
}
function CustomHouseStation147(){
  getRidOfDestination()
  CustomHouseStation()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "CustomHouseStation147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "CustomHouseStation147Audio();" );
  }
}
function CustomHouseStation147Audio(){
  CustomHouseStationAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "ChauntlerCloseCundyPark147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "BridgelandRoad147();" );
  }
}
function ChauntlerCloseCundyPark147(){
  getRidOfDestination()
  ChauntlerCloseCundyPark()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "ChauntlerCloseCundyPark147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "ChauntlerCloseCundyPark147Audio();" );
  }
}
function ChauntlerCloseCundyPark147Audio(){
  ChauntlerCloseCundyParkAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "VictoriaDockRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "CustomHouseStation147();" );
  }
}
function VictoriaDockRoad147(){
  getRidOfDestination()
  VictoriaDockRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "VictoriaDockRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "VictoriaDockRoad147Audio();" );
  }
}
function VictoriaDockRoad147Audio(){
  VictoriaDockRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "TreeRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "ChauntlerCloseCundyPark147();" );
  }
}
function TreeRoad147(){
  getRidOfDestination()
  TreeRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "TreeRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "TreeRoad147Audio();" );
  }
}
function TreeRoad147Audio(){
  TreeRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "NewhamWay147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "VictoriaDockRoad147();" );
  }
}
function MortlakeRoad147(){
  getRidOfDestination()
  MortlakeRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "MortlakeRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "MortlakeRoad147Audio();" );
  }
}
function MortlakeRoad147Audio(){
  MortlakeRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "BennettRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "TreeRoad147();" );
  }
}
function NewhamWay147(){
  getRidOfDestination()
  NewhamWay()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "NewhamWay147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "NewhamWay147Audio();" );
  }
}
function NewhamWay147Audio(){
  NewhamWayAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "BennettRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "MortlakeRoad147();" );
  }
}
function NewhamLeisureCentre147(){
  getRidOfDestination()
  NewhamLeisureCentre()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "NewhamLeisureCentre147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "NewhamLeisureCentre147Audio();" );
  }
}
function NewhamLeisureCentre147Audio(){
  NewhamLeisureCentreAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospNewVicCollege147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "NewhamWay147();" );
  }
}
function BennettRoad147(){
  getRidOfDestination()
  BennettRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "BennettRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "BennettRoad147Audio();" );
  }
}
function BennettRoad147Audio(){
  BennettRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospNewVicCollege147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "NewhamLeisureCentre147();" );
  }
}
function NewhamUniversityHospNewVicCollege147(){
  getRidOfDestination()
  NewhamUniversityHospNewVicCollege()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospNewVicCollege147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospNewVicCollege147Audio();" );
  }
}
function NewhamUniversityHospNewVicCollege147Audio(){
  NewhamUniversityHospNewVicCollegeAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "WigstonRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "BennettRoad147();" );
  }
}
function WigstonRoad147(){
  getRidOfDestination()
  WigstonRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "WigstonRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "WigstonRoad147Audio();" );
  }
}
function WigstonRoad147Audio(){
  WigstonRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "PlaistowPrinceRegentLane147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function PlaistowPrinceRegentLane147(){
  getRidOfDestination()
  PlaistowPrinceRegentLane()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "PlaistowPrinceRegentLane147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "PlaistowPrinceRegentLane147Audio();" );
  }
}
function PlaistowPrinceRegentLane147Audio(){
  PlaistowPrinceRegentLaneAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "NewCityRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BeaumontRoad147(){
  getRidOfDestination()
  BeaumontRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "BeaumontRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "BeaumontRoad147Audio();" );
  }
}
function BeaumontRoad147Audio(){
  BeaumontRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "SamsonStreet147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "NewhamUniversityHospNewVicCollege147();" );
  }
}
function NewCityRoad147(){
  getRidOfDestination()
  NewCityRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "NewCityRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "NewCityRoad147Audio();" );
  }
}
function NewCityRoad147Audio(){
  NewCityRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "SamsonStreet147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "BeaumontRoad147();" );
  }
}
function SamsonStreet147(){
  getRidOfDestination()
  SamsonStreet()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "SamsonStreet147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "SamsonStreet147Audio();" );
  }
}
function SamsonStreet147Audio(){
  SamsonStreetAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "UptonParkGreenStreet147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function UptonParkGreenStreet147(){
  getRidOfDestination()
  UptonParkGreenStreet()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "UptonParkGreenStreet147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "UptonParkGreenStreet147Audio();" );
  }
}
function UptonParkGreenStreet147Audio(){
  UptonParkGreenStreetAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "UptonParkPrioryRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "NewCityRoad147();" );
  }
}
function UptonParkPrioryRoad147(){
  getRidOfDestination()
  UptonParkPrioryRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "UptonParkPrioryRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "UptonParkPrioryRoad147Audio();" );
  }
}
function UptonParkPrioryRoad147Audio(){
  UptonParkPrioryRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "ArragonRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "UptonParkGreenStreet147();" );
  }
}
function ArragonRoad147(){
  getRidOfDestination()
  ArragonRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "ArragonRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "ArragonRoad147Audio();" );
  }
}
function ArragonRoad147Audio(){
  ArragonRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "KatherineRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function KatherineRoad147(){
  getRidOfDestination()
  KatherineRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "KatherineRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "KatherineRoad147Audio();" );
  }
}
function KatherineRoad147Audio(){
  KatherineRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "BartleAvenue147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function DickensRoad147(){
  getRidOfDestination()
  DickensRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "DickensRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "DickensRoad147Audio();" );
  }
}
function DickensRoad147Audio(){
  DickensRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "HighStreetNorth147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "UptonParkPrioryRoad147();" );
  }
}
function AintreeAvenue147(){
  getRidOfDestination()
  AintreeAvenue()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "AintreeAvenue147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "AintreeAvenue147Audio();" );
  }
}
function AintreeAvenue147Audio(){
  AintreeAvenueAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "HighStreetNorth147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "DickensRoad147();" );
  }
}
function BartleAvenue147(){
  getRidOfDestination()
  BartleAvenue()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "BartleAvenue147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "BartleAvenue147Audio();" );
  }
}
function BartleAvenue147Audio(){
  BartleAvenueAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "HighStreetNorth147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "AintreeAvenue147();" );
  }
}
function HighStreetNorth147(){
  getRidOfDestination()
  HighStreetNorth()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "HighStreetNorth147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "HighStreetNorth147Audio();" );
  }
}
function HighStreetNorth147Audio(){
  HighStreetNorthAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "KemptonRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function KemptonRoad147(){
  getRidOfDestination()
  KemptonRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "KemptonRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "KemptonRoad147Audio();" );
  }
}
function KemptonRoad147Audio(){
  KemptonRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "CaledonRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CaledonRoad147(){
  getRidOfDestination()
  CaledonRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "CaledonRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "CaledonRoad147Audio();" );
  }
}
function CaledonRoad147Audio(){
  CaledonRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "BendishRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function RonLeightonWay147(){
  getRidOfDestination()
  RonLeightonWay()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "RonLeightonWay147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "RonLeightonWay147Audio();" );
  }
}
function RonLeightonWay147Audio(){
  RonLeightonWayAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "EastHamStation147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "BartleAvenue147();" );
  }
}
function BendishRoad147(){
  getRidOfDestination()
  BendishRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "BendishRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "BendishRoad147Audio();" );
  }
}
function BendishRoad147Audio(){
  BendishRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "EastHamStation147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "RonLeightonWay147();" );
  }
}
function EastHamStation147(){
  getRidOfDestination()
  EastHamStation()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "EastHamStation147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "EastHamStation147Audio();" );
  }
}
function EastHamStation147Audio(){
  EastHamStationAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "HighStreetNorthtwo147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "BendishRoad147();" );
  }
}
function HighStreetNorthtwo147(){
  getRidOfDestination()
  HighStreetNorth()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "HighStreetNorthtwo147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "HighStreetNorthtwo147Audio();" );
  }
}
function HighStreetNorthtwo147Audio(){
  HighStreetNorthAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "BrowningRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "EastHamStation147();" );
  }
}
function BrowningRoad147(){
  getRidOfDestination()
  BrowningRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "BrowningRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "BrowningRoad147Audio();" );
  }
}
function BrowningRoad147Audio(){
  BrowningRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "StBarnabasChurch147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "HighStreetNorthtwo147();" );
  }
}
function StBarnabasChurch147(){
  getRidOfDestination()
  StBarnabasChurch()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "StBarnabasChurch147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "StBarnabasChurch147Audio();" );
  }
}
function StBarnabasChurch147Audio(){
  StBarnabasChurchAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "SheridanRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "BrowningRoad147();" );
  }
}
function SheridanRoad147(){
  getRidOfDestination()
  SheridanRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "SheridanRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "SheridanRoad147Audio();" );
  }
}
function SheridanRoad147Audio(){
  SheridanRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "ChurchRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function RuskinAvenue147(){
  getRidOfDestination()
  RuskinAvenue()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "RuskinAvenue147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "RuskinAvenue147Audio();" );
  }
}
function RuskinAvenue147Audio(){
  RuskinAvenueAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "StStephensChurch147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "StBarnabasChurch147();" );
  }
}
function LittleIlfordSchool147(){
  getRidOfDestination()
  LittleIlfordSchool()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "LittleIlfordSchool147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "LittleIlfordSchool147Audio();" );
  }
}
function LittleIlfordSchool147Audio(){
  LittleIlfordSchoolAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "StStephensChurch147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "RuskinAvenue147();" );
  }
}
function ChurchRoad147(){
  getRidOfDestination()
  ChurchRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "ChurchRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "ChurchRoad147Audio();" );
  }
}
function ChurchRoad147Audio(){
  ChurchRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "StStephensChurch147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "LittleIlfordSchool147();" );
  }
}
function StStephensChurch147(){
  getRidOfDestination()
  StStephensChurch()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "StStephensChurch147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "StStephensChurch147Audio();" );
  }
}
function StStephensChurch147Audio(){
  StStephensChurchAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "WolfertonRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WolfertonRoad147(){
  getRidOfDestination()
  WolfertonRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "WolfertonRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "WolfertonRoad147Audio();" );
  }
}
function WolfertonRoad147Audio(){
  WolfertonRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "LittleIlfordLane147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "ChurchRoad147();" );
  }
}
function LittleIlfordLane147(){
  getRidOfDestination()
  LittleIlfordLane()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "LittleIlfordLane147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "LittleIlfordLane147Audio();" );
  }
}
function LittleIlfordLane147Audio(){
  LittleIlfordLaneAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "NorthCircularRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function NorthCircularRoad147(){
  getRidOfDestination()
  NorthCircularRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "NorthCircularRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "NorthCircularRoad147Audio();" );
  }
}
function NorthCircularRoad147Audio(){
  NorthCircularRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "IlfordHill147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function IlfordHill147(){
  getRidOfDestination()
  IlfordHill()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "IlfordHill147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "IlfordHill147Audio();" );
  }
}
function IlfordHill147Audio(){
  IlfordHillAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "ChapelRoad147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function DersinghamAvenue147(){
  getRidOfDestination()
  DersinghamAvenue()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "DersinghamAvenue147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "DersinghamAvenue147Audio();" );
  }
}
function DersinghamAvenue147Audio(){
  DersinghamAvenueAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "RedbridgeCentralLibrary147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "WolfertonRoad147();" );
  }
}
function ChapelRoad147(){
  getRidOfDestination()
  ChapelRoad()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "ChapelRoad147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "ChapelRoad147Audio();" );
  }
}
function ChapelRoad147Audio(){
  ChapelRoadAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "RedbridgeCentralLibrary147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "DersinghamAvenue147();" );
  }
}
function IlfordBroadway147(){
  getRidOfDestination()
  IlfordBroadway()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "IlfordBroadway147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "IlfordBroadway147Audio();" );
  }
}
function IlfordBroadway147Audio(){
  IlfordBroadwayAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "HainaultStreet147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "ChapelRoad147();" );
  }
}
function RedbridgeCentralLibrary147(){
  getRidOfDestination()
  RedbridgeCentralLibrary()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "RedbridgeCentralLibrary147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "RedbridgeCentralLibrary147Audio();" );
  }
}
function RedbridgeCentralLibrary147Audio(){
  RedbridgeCentralLibraryAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "HainaultStreet147();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "IlfordBroadway147();" );
  }
}
function HainaultStreet147(){
  getRidOfDestination()
  HainaultStreet()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "HainaultStreet147Audio();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "HainaultStreet147Audio();" );
  }
}
function HainaultStreet147Audio(){
  HainaultStreetAudio()
  if (routeDestination === "Ilford147"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "CanningTown147") {
    NextDestination.setAttribute( "onClick", "RedbridgeCentralLibrary147();" );
  }
}

function SurreyQuaysShoppingCentreP12(){
  getRidOfDestination()
  SurreyQuaysShoppingCentre()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "SurreyQuaysShoppingCentreP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "SurreyQuaysShoppingCentreP12Audio();" );
  }
}
function SurreyQuaysShoppingCentreP12Audio(){
  SurreyQuaysShoppingCentreAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "SurreyQuaysLeisureParkP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function SurreyQuaysLeisureParkP12(){
  getRidOfDestination()
  SurreyQuaysLeisurePark()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "SurreyQuaysLeisureParkP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "SurreyQuaysLeisureParkP12Audio();" );
  }
}
function SurreyQuaysLeisureParkP12Audio(){
  SurreyQuaysLeisureParkAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "CanadaStreetP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "Canada StreetP12();" );
  }
}
function CanadaStreetP12(){
  getRidOfDestination()
  CanadaStreet()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "CanadaStreetP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CanadaStreetP12Audio();" );
  }
}
function CanadaStreetP12Audio(){
  CanadaStreetAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "CanadaWaterBusStationP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CanadaWaterBusStationP12();" );
  }
}
function RotherhithePoliceStationP12(){
  getRidOfDestination()
  RotherhithePoliceStation()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "RotherhithePoliceStationP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "RotherhithePoliceStationP12Audio();" );
  }
}
function RotherhithePoliceStationP12Audio(){
  RotherhithePoliceStationAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "SurreyQuaysShoppingCentreP12();" );
  }
}
function CanadaWaterBusStationP12(){
  getRidOfDestination()
  CanadaWaterBusStation()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "CanadaWaterBusStationP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CanadaWaterBusStationP12Audio();" );
  }
}
function CanadaWaterBusStationP12Audio(){
  CanadaWaterBusStationAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "NeptuneStreetStOlavesEstateP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "RotherhithePoliceStationP12();" );
  }
}
function SurreyQuaysRoadP12(){
  getRidOfDestination()
  SurreyQuaysRoad()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "SurreyQuaysRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "SurreyQuaysRoadP12Audio();" );
  }
}
function SurreyQuaysRoadP12Audio(){
  SurreyQuaysRoadAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CanadaWaterBusStationP12();" );
  }
}
function NeptuneStreetStOlavesEstateP12(){
  getRidOfDestination()
  NeptuneStreetStOlavesEstate()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "NeptuneStreetStOlavesEstateP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "NeptuneStreetStOlavesEstateP12Audio();" );
  }
}
function NeptuneStreetStOlavesEstateP12Audio(){
  NeptuneStreetStOlavesEstateAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "SouthwarkParkP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "SurreyQuaysRoadP12();" );
  }
}
function SouthwarkParkP12(){
  getRidOfDestination()
  SouthwarkPark()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "SouthwarkParkP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "SouthwarkParkP12Audio();" );
  }
}
function SouthwarkParkP12Audio(){
  SouthwarkParkAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "KirbyEstateP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "NeptuneStreetStOlavesEstateP12();" );
  }
}
function KirbyEstateP12(){
  getRidOfDestination()
  KirbyEstate()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "KirbyEstateP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "KirbyEstateP12Audio();" );
  }
}
function KirbyEstateP12Audio(){
  KirbyEstateAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "GatakerStreetP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "SouthwarkParkP12();" );
  }
}
function GatakerStreetP12(){
  getRidOfDestination()
  GatakerStreet()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "GatakerStreetP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "GatakerStreetP12Audio();" );
  }
}
function GatakerStreetP12Audio(){
  GatakerStreetAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "StalhamStreetP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CanadaWaterBusStationP12();" );
  }
}
function StalhamStreetP12(){
  getRidOfDestination()
  StalhamStreet()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "StalhamStreetP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "StalhamStreetP12Audio();" );
  }
}
function StalhamStreetP12Audio(){
  StalhamStreetAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "RaymouthRoadP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "KirbyEstateP12();" );
  }
}
function RaymouthRoadP12(){
  getRidOfDestination()
  RaymouthRoad()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "RaymouthRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "RaymouthRoadP12Audio();" );
  }
}
function RaymouthRoadP12Audio(){
  RaymouthRoadAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "SouthwarkParkRoadStJamessRoadP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "StalhamStreetP12();" );
  }
}
function SouthwarkParkRoadStJamessRoadP12(){
  getRidOfDestination()
  SouthwarkParkRoadStJamessRoad()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "SouthwarkParkRoadStJamessRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "SouthwarkParkRoadStJamessRoadP12Audio();" );
  }
}
function SouthwarkParkRoadStJamessRoadP12Audio(){
  SouthwarkParkRoadStJamessRoadAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "EsmeraldaRoadP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CanadaWaterBusStationP12();" );
  }
}
function AnchorStreetP12(){
  getRidOfDestination()
  AnchorStreet()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "AnchorStreetP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "AnchorStreetP12Audio();" );
  }
}
function AnchorStreetP12Audio(){
  AnchorStreetAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "RaymouthRoadP12();" );
  }
}
function StJamessRoadSouthwarkParkRoadP12(){
  getRidOfDestination()
  StJamessRoadSouthwarkParkRoad()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "StJamessRoadSouthwarkParkRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "StJamessRoadSouthwarkParkRoadP12Audio();" );
  }
}
function StJamessRoadSouthwarkParkRoadP12Audio(){
  StJamessRoadSouthwarkParkRoadAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "AnchorStreetP12();" );
  }
}
function EsmeraldaRoadP12(){
  getRidOfDestination()
  EsmeraldaRoad()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "EsmeraldaRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "EsmeraldaRoadP12Audio();" );
  }
}
function EsmeraldaRoadP12Audio(){
  EsmeraldaRoadAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "CatlinStreetP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "StJamessRoadSouthwarkParkRoadP12();" );
  }
}
function CatlinStreetP12(){
  getRidOfDestination()
  CatlinStreet()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "CatlinStreetP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CatlinStreetP12Audio();" );
  }
}
function CatlinStreetP12Audio(){
  CatlinStreetAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "SheppardDriveP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "EsmeraldaRoadP12();" );
  }
}
function SheppardDriveP12(){
  getRidOfDestination()
  SheppardDrive()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "SheppardDriveP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "SheppardDriveP12Audio();" );
  }
}
function SheppardDriveP12Audio(){
  SheppardDriveAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "SouthBermondseyStationP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CatlinStreetP12();" );
  }
}
function SouthBermondseyStationP12(){
  getRidOfDestination()
  SouthBermondseyStation()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "SouthBermondseyStationP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "SouthBermondseyStationP12Audio();" );
  }
}
function SouthBermondseyStationP12Audio(){
  SouthBermondseyStationAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "MillwallFootballGroundP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "SheppardDriveP12();" );
  }
}
function MillwallFootballGroundP12(){
  getRidOfDestination()
  MillwallFootballGround()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "MillwallFootballGroundP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "MillwallFootballGroundP12Audio();" );
  }
}
function MillwallFootballGroundP12Audio(){
  MillwallFootballGroundAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "ManorGroveP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "SouthBermondseyStationP12();" );
  }
}
function PenarthStreetP12(){
  getRidOfDestination()
  PenarthStreet()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "PenarthStreetP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "PenarthStreetP12Audio();" );
  }
}
function PenarthStreetP12Audio(){
  PenarthStreetAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "WagnerStreetP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "MillwallFootballGroundP12();" );
  }
}
function ManorGroveP12(){
  getRidOfDestination()
  ManorGrove()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "ManorGroveP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "ManorGroveP12Audio();" );
  }
}
function ManorGroveP12Audio(){
  ManorGroveAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "WagnerStreetP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "PenarthStreetP12();" );
  }
}
function WagnerStreetP12(){
  getRidOfDestination()
  WagnerStreet()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "WagnerStreetP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "WagnerStreetP12Audio();" );
  }
}
function WagnerStreetP12Audio(){
  WagnerStreetAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "OldKentRoadIldertonRoadP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CanadaWaterBusStationP12();" );
  }
}
function OldKentRoadIldertonRoadP12(){
  getRidOfDestination()
  OldKentRoadIldertonRoad()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "OldKentRoadIldertonRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "OldKentRoadIldertonRoadP12Audio();" );
  }
}
function OldKentRoadIldertonRoadP12Audio(){
  OldKentRoadIldertonRoadAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "CommercialWayP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "ManorGroveP12();" );
  }
}
function CommercialWayP12(){
  getRidOfDestination()
  CommercialWay()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "CommercialWayP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CommercialWayP12Audio();" );
  }
}
function CommercialWayP12Audio(){
  CommercialWayAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "CarolineGardensP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CanadaWaterBusStationP12();" );
  }
}
function CarolineGardensP12(){
  getRidOfDestination()
  CarolineGardens()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "CarolineGardensP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CarolineGardensP12Audio();" );
  }
}
function CarolineGardensP12Audio(){
  CarolineGardensAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "CliftonWayP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "OldKentRoadIldertonRoadP12();" );
  }
}
function CliftonWayP12(){
  getRidOfDestination()
  CliftonWay()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "CliftonWayP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CliftonWayP12Audio();" );
  }
}
function CliftonWayP12Audio(){
  CliftonWayAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "QueensRoadPeckhamStationP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CarolineGardensP12();" );
  }
}
function QueensRoadPeckhamStationP12(){
  getRidOfDestination()
  QueensRoadPeckhamStation()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "QueensRoadPeckhamStationP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "QueensRoadPeckhamStationP12Audio();" );
  }
}
function QueensRoadPeckhamStationP12Audio(){
  QueensRoadPeckhamStationAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "CarltonGroveP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CliftonWayP12();" );
  }
}
function CarltonGroveP12(){
  getRidOfDestination()
  CarltonGrove()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "CarltonGroveP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CarltonGroveP12Audio();" );
  }
}
function CarltonGroveP12Audio(){
  CarltonGroveAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "ClaytonRoadP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "QueensRoadPeckhamStationP12();" );
  }
}
function ClaytonRoadP12(){
  getRidOfDestination()
  ClaytonRoad()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "ClaytonRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "ClaytonRoadP12Audio();" );
  }
}
function ClaytonRoadP12Audio(){
  ClaytonRoadAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "TheAyleshamCentreP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CanadaWaterBusStationP12();" );
  }
}
function PeckhamPostOfficeP12(){
  getRidOfDestination()
  PeckhamPostOffice()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "PeckhamPostOfficeP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "PeckhamPostOfficeP12Audio();" );
  }
}
function PeckhamPostOfficeP12Audio(){
  PeckhamPostOfficeAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeStationP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CarltonGroveP12();" );
  }
}
function PeckhamBusStationP12(){
  getRidOfDestination()
  PeckhamBusStation()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "PeckhamBusStationP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "PeckhamBusStationP12Audio();" );
  }
}
function PeckhamBusStationP12Audio(){
  PeckhamBusStationAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeStationP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "PeckhamPostOfficeP12();" );
  }
}
function TheAyleshamCentreP12(){
  getRidOfDestination()
  TheAyleshamCentre()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "TheAyleshamCentreP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "TheAyleshamCentreP12Audio();" );
  }
}
function TheAyleshamCentreP12Audio(){
  TheAyleshamCentreAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeStationP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "PeckhamBusStationP12();" );
  }
}
function PeckhamRyeStationP12(){
  getRidOfDestination()
  PeckhamRyeStation()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeStationP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "PeckhamRyeStationP12Audio();" );
  }
}
function PeckhamRyeStationP12Audio(){
  PeckhamRyeStationAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "NigelRoadP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "TheAyleshamCentreP12();" );
  }
}
function HeatonRoadP12(){
  getRidOfDestination()
  HeatonRoad()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "NigelRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "HeatonRoadP12Audio();" );
  }
}
function HeatonRoadP12Audio(){
  HeatonRoadAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeNunheadLaneP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "PeckhamRyeStationP12();" );
  }
}
function NigelRoadP12(){
  getRidOfDestination()
  NigelRoad()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "NigelRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "NigelRoadP12Audio();" );
  }
}
function NigelRoadP12Audio(){
  NigelRoadAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeNunheadLaneP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "HeatonRoadP12();" );
  }
}
function PeckhamRyeNunheadLaneP12(){
  getRidOfDestination()
  PeckhamRyeNunheadLane()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeNunheadLaneP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "PeckhamRyeNunheadLaneP12Audio();" );
  }
}
function PeckhamRyeNunheadLaneP12Audio(){
  PeckhamRyeNunheadLaneAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "CardenRoadP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CanadaWaterBusStationP12();" );
  }
}
function PeckhamRyeEastDulwichRoadP12(){
  getRidOfDestination()
  PeckhamRyeEastDulwichRoad()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeEastDulwichRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "PeckhamRyeEastDulwichRoadP12Audio();" );
  }
}
function PeckhamRyeEastDulwichRoadP12Audio(){
  PeckhamRyeEastDulwichRoadAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "LindenGroveP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "NigelRoadP12();" );
  }
}
function CardenRoadP12(){
  getRidOfDestination()
  CardenRoad()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "CardenRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CardenRoadP12Audio();" );
  }
}
function CardenRoadP12Audio(){
  CardenRoadAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "LindenGroveP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "PeckhamRyeEastDulwichRoadP12();" );
  }
}
function LindenGroveP12(){
  getRidOfDestination()
  LindenGrove()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "LindenGroveP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "LindenGroveP12Audio();" );
  }
}
function LindenGroveP12Audio(){
  LindenGroveAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "BarsetRoadP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CanadaWaterBusStationP12();" );
  }
}
function NunheadGreenP12(){
  getRidOfDestination()
  NunheadGreen()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "BarsetRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "NunheadGreenP12Audio();" );
  }
}
function NunheadGreenP12Audio(){
  NunheadGreenAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "KimberleyAvenueP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CardenRoadP12();" );
  }
}
function BarsetRoadP12(){
  getRidOfDestination()
  BarsetRoad()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "BarsetRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "BarsetRoadP12Audio();" );
  }
}
function BarsetRoadP12Audio(){
  BarsetRoadAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "KimberleyAvenueP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "NunheadGreenP12();" );
  }
}
function KimberleyAvenueP12(){
  getRidOfDestination()
  KimberleyAvenue()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "KimberleyAvenueP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "KimberleyAvenueP12Audio();" );
  }
}
function KimberleyAvenueP12Audio(){
  KimberleyAvenueAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "NunheadStationP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CanadaWaterBusStationP12();" );
  }
}
function HollydaleRoadP12(){
  getRidOfDestination()
  HollydaleRoad()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "StMarysRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "HollydaleRoadP12Audio();" );
  }
}
function HollydaleRoadP12Audio(){
  HollydaleRoadAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "IvydaleRoadLindenGroveP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "BarsetRoadP12();" );
  }
}
function StMarysRoadP12(){
  getRidOfDestination()
  StMarysRoad()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "StMarysRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "StMarysRoadP12Audio();" );
  }
}
function StMarysRoadP12Audio(){
  StMarysRoadAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "IvydaleRoadLindenGroveP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "HollydaleRoadP12();" );
  }
}
function NunheadStationP12(){
  getRidOfDestination()
  NunheadStation()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "NunheadStationP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "NunheadStationP12Audio();" );
  }
}
function NunheadStationP12Audio(){
  NunheadStationAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "IvydaleRoadLindenGroveP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "StMarysRoadP12();" );
  }
}
function IvydaleRoadLindenGroveP12(){
  getRidOfDestination()
  IvydaleRoadLindenGrove()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "IvydaleRoadLindenGroveP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "IvydaleRoadLindenGroveP12Audio();" );
  }
}
function IvydaleRoadLindenGroveP12Audio(){
  IvydaleRoadLindenGroveAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "PeckhamseventhDayAdventistChurchP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "NunheadStationP12();" );
  }
}
function PeckhamseventhDayAdventistChurchP12(){
  getRidOfDestination()
  PeckhamseventhDayAdventistChurch()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "PeckhamseventhDayAdventistChurchP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "PeckhamseventhDayAdventistChurchP12Audio();" );
  }
}
function PeckhamseventhDayAdventistChurchP12Audio(){
  PeckhamseventhDayAdventistChurchAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "LimesfordRoadP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "IvydaleRoadLindenGroveP12();" );
  }
}
function LimesfordRoadP12(){
  getRidOfDestination()
  LimesfordRoad()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "LimesfordRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "LimesfordRoadP12Audio();" );
  }
}
function LimesfordRoadP12Audio(){
  LimesfordRoadAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "BellwoodRoadP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "PeckhamseventhDayAdventistChurchP12();" );
  }
}
function BellwoodRoadP12(){
  getRidOfDestination()
  BellwoodRoad()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "BellwoodRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "BellwoodRoadP12Audio();" );
  }
}
function BellwoodRoadP12Audio(){
  BellwoodRoadAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "MerttinsRoadP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "LimesfordRoadP12();" );
  }
}
function MerttinsRoadP12(){
  getRidOfDestination()
  MerttinsRoad()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "MerttinsRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "MerttinsRoadP12Audio();" );
  }
}
function MerttinsRoadP12Audio(){
  MerttinsRoadAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "BrockleyWayP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CanadaWaterBusStationP12();" );
  }
}
function InvertonRoadP12(){
  getRidOfDestination()
  InvertonRoad()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "InvertonRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "InvertonRoadP12Audio();" );
  }
}
function InvertonRoadP12Audio(){
  InvertonRoadAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "BellwoodRoadP12();" );
  }
}
function BrockleyWayP12(){
  getRidOfDestination()
  BrockleyWay()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "BrockleyWayP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "BrockleyWayP12Audio();" );
  }
}
function BrockleyWayP12Audio(){
  BrockleyWayAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "CamberwellNewCemeteryP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "InvertonRoadP12();" );
  }
}
function CamberwellNewCemeteryP12(){
  getRidOfDestination()
  CamberwellNewCemetery()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "CamberwellNewCemeteryP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CamberwellNewCemeteryP12Audio();" );
  }
}
function CamberwellNewCemeteryP12Audio(){
  CamberwellNewCemeteryAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "BuckstoneCloseP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "BrockleyWayP12();" );
  }
}
function BuckstoneCloseP12(){
  getRidOfDestination()
  BuckstoneClose()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "BuckstoneCloseP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "BuckstoneCloseP12Audio();" );
  }
}
function BuckstoneCloseP12Audio(){
  BuckstoneCloseAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "NetherbyRoadP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "CamberwellNewCemeteryP12();" );
  }
}
function NetherbyRoadP12(){
  getRidOfDestination()
  NetherbyRoad()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "NetherbyRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "NetherbyRoadP12Audio();" );
  }
}
function NetherbyRoadP12Audio(){
  NetherbyRoadAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "HengraveRoadP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "BuckstoneCloseP12();" );
  }
}
function HengraveRoadP12(){
  getRidOfDestination()
  HengraveRoad()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "HengraveRoadP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "HengraveRoadP12Audio();" );
  }
}
function HengraveRoadP12Audio(){
  HengraveRoadAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "HonorOakParkStationP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "NetherbyRoadP12();" );
  }
}
function HonorOakParkStationP12(){
  getRidOfDestination()
  HonorOakParkStation()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "HonorOakParkStationP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "HonorOakParkStationP12Audio();" );
  }
}
function HonorOakParkStationP12Audio(){
  HonorOakParkStationAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "BrockleyRiseChandosP12();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "HengraveRoadP12();" );
  }
}
function BrockleyRiseP12(){
  getRidOfDestination()
  BrockleyRise()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "BrockleyRiseP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "BrockleyRiseP12Audio();" );
  }
}
function BrockleyRiseP12Audio(){
  BrockleyRiseAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "HonorOakParkStationP12();" );
  }
}
function BrockleyRiseChandosP12(){
  getRidOfDestination()
  BrockleyRiseChandos()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "BrockleyRiseChandosP12Audio();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "BrockleyRiseChandosP12Audio();" );
  }
}
function BrockleyRiseChandosP12Audio(){
  BrockleyRiseChandosAudio()
  if (routeDestination === "BrockleyRiseP12"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "SurreyQuaysP12") {
    NextDestination.setAttribute( "onClick", "BrockleyRiseP12();" );
  }
}