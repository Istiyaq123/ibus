var smallSpace = '<span class="invisible">.</span>'
var bigSpace = '<span class="invisible">...</span>'
var sSpace = '<span class="invisible">.</span>'
var bSpace = '<span class="invisible">...</span>'

var topTextYes = document.getElementById("topTextYes");
var topTextNo = document.getElementById("topTextNo");

function DriverChange(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Driver Change";
}

function Waterloo26btn(){
  StMaryOfEtonChurch26()
  showDestination.setAttribute( "onClick", "Waterloo26ibus();" );
}
function HackneyWick26btn(){
  WaterlooStationWaterlooRoad26()
  showDestination.setAttribute( "onClick", "HackneyWick26ibus();" );
}
function StJamesStreet515btn(){
  ExmouthEstate515()
  showDestination.setAttribute( "onClick", "StJamesStreet515ibus();" );
}
function Stepney515btn(){
  CarisbrookeRoad515()
  showDestination.setAttribute( "onClick", "Stepney515ibus();" );
}
function NewCrossGate343btn(){
  AldgateStation343()
  showDestination.setAttribute( "onClick", "NewCrossGate343ibus();" );
}
function Aldgate343btn(){
  NewCrossJerningamRoad343()
  showDestination.setAttribute( "onClick", "Aldgate343ibus();" );
}
function AshGroveD6btn(){
  CrossharbourAsdaD6()
  showDestination.setAttribute( "onClick", "AshGroveD6ibus();" );
}
function CrossharbourD6btn(){
  KingEdwardsRoadD6()
  showDestination.setAttribute( "onClick", "CrossharbourD6ibus();" );
}


function StJamesStreet515ibus(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "515 to St James's Street Station, Mission Grove";
  topTextYes.style.animationName = "StJamesStreet515ibus";
}
function Stepney515ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "515 to Stepney, Arbour Square";
}
function Waterloo26ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "26 to Waterloo Station";
}
function HackneyWick26ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "26 to Hackney Wick";
}
function NewCrossGate343ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "343 to New Cross Gate";
}
function Aldgate343ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "343 to Aldgate";
}
function AshGroveD6ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "D6 to Ash Grove";
}
function CrossharbourD6ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "D6 to Crossharbour";
}

function StMaryOfEtonChurch26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Mary Of Eton Church";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "WickRoadKenworthyRoad26();" );
}
function WickRoadKenworthyRoad26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wick Road / Kenworthy Road";
  BackDestination.setAttribute( "onClick", "StMaryOfEtonChurch26();" );
  NextDestination.setAttribute( "onClick", "BarnabasRoad26();" );
}
function BarnabasRoad26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Barnabas Road";
  BackDestination.setAttribute( "onClick", "WickRoadKenworthyRoad26();" );
  NextDestination.setAttribute( "onClick", "KentonRoadWellStreet26();" );
}
function KentonRoadWellStreet26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Kenton Road / Well Street";
  BackDestination.setAttribute( "onClick", "BarnabasRoad26();" );
  NextDestination.setAttribute( "onClick", "ValentineRoad26();" );
}
function ValentineRoad26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Valentine Road";
  BackDestination.setAttribute( "onClick", "KentonRoadWellStreet26();" );
  NextDestination.setAttribute( "onClick", "HolcraftRoad26();" );
}
function WickRoad26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wick Road";
  BackDestination.setAttribute( "onClick", "StMaryOfEtonChurch26();" );
  NextDestination.setAttribute( "onClick", "ChristieRoad26();" );
}
function ChristieRoad26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Christie Road";
  BackDestination.setAttribute( "onClick", "WickRoad26();" );
  NextDestination.setAttribute( "onClick", "GascoyneRoad26();" );
}
function GascoyneRoad26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Gascoyne Road";
  BackDestination.setAttribute( "onClick", "ChristieRoad26();" );
  NextDestination.setAttribute( "onClick", "CasslandCrescent26();" );
}
function CasslandCrescent26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Cassland Crescent";
  BackDestination.setAttribute( "onClick", "GascoyneRoad26();" );
  NextDestination.setAttribute( "onClick", "HolcraftRoad26();" );
}
function HolcraftRoad26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Holcraft Road";
  BackDestination.setAttribute( "onClick", "CasslandCrescent26();" );
  NextDestination.setAttribute( "onClick", "ShoreRoad26();" );
}
function ShoreRoad26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Shore Road";
  BackDestination.setAttribute( "onClick", "HolcraftRoad26();" );
  NextDestination.setAttribute( "onClick", "MareStreetWellStreet26();" );
}
function MareStreetWellStreet26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mare Street / Well Street";
  BackDestination.setAttribute( "onClick", "ShoreRoad26();" );
  NextDestination.setAttribute( "onClick", "KingEdwardsRoad26();" );
}
function KingEdwardsRoad26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "King Edward's Road";
  BackDestination.setAttribute( "onClick", "ShoreRoad26();" );
  NextDestination.setAttribute( "onClick", "MareStreetVictoriaParkRoad26();" );
}
function MareStreetVictoriaParkRoad26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mare Street / Victoria Park Road";
  BackDestination.setAttribute( "onClick", "KingEdwardsRoad26();" );
  NextDestination.setAttribute( "onClick", "CambridgeHeathStation26();" );
}
function CambridgeHeathStation26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Cambridge Heath Station";
  BackDestination.setAttribute( "onClick", "MareStreetVictoriaParkRoad26();" );
  NextDestination.setAttribute( "onClick", "PritchardsRoad26();" );
}
function PritchardsRoad26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Pritchard's Road";
  BackDestination.setAttribute( "onClick", "CambridgeHeathStation26();" );
  NextDestination.setAttribute( "onClick", "WarnerPlace26();" );
}
function WarnerPlace26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Warner Place";
  BackDestination.setAttribute( "onClick", "PritchardsRoad26();" );
  NextDestination.setAttribute( "onClick", "QueensbridgeRoad26();" );
}
function QueensbridgeRoad26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Queensbridge Road";
  BackDestination.setAttribute( "onClick", "WarnerPlace26();" );
  NextDestination.setAttribute( "onClick", "HoxtonStation26();" );
}
function HoxtonStation26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hoxton Station";
  BackDestination.setAttribute( "onClick", "QueensbridgeRoad26();" );
  NextDestination.setAttribute( "onClick", "ShoreditchChurch26();" );
}
function HackneyRoadColumbiaRoad26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hackney Road / Columbia Road";
  BackDestination.setAttribute( "onClick", "HoxtonStation26();" );
  NextDestination.setAttribute( "onClick", "ShoreditchChurch26();" );
}
function ShoreditchChurch26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Shoreditch Church";
  BackDestination.setAttribute( "onClick", "HackneyRoadColumbiaRoad26();" );
  NextDestination.setAttribute( "onClick", "ShoreditchHighStreetStation26();" );
}
function ShoreditchHighStBethnalGreenRoad26(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Shoreditch High St / Bethnal Green Road";
  BackDestination.setAttribute( "onClick", "ShoreditchChurch26();" );
  NextDestination.setAttribute( "onClick", "ShoreditchHighStreetStation26();" );
  topTextYes.style.animationName = "ShoreditchHighStBethnalGreenRoad";
}
function ShoreditchHighStreetStation26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Shoreditch High Street Station";
  BackDestination.setAttribute( "onClick", "ShoreditchHighStBethnalGreenRoad26();" );
  NextDestination.setAttribute( "onClick", "CommercialStreetWorshipStreet26();" );
}
function CommercialStreetWorshipStreet26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Commercial Street / Worship Street";
  BackDestination.setAttribute( "onClick", "ShoreditchHighStreetStation26();" );
  NextDestination.setAttribute( "onClick", "PrimroseStreet26();" );
}
function PrimroseStreet26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Primrose Street";
  BackDestination.setAttribute( "onClick", "ShoreditchHighStreetStation26();" );
  NextDestination.setAttribute( "onClick", "LiverpoolStreetStation26();" );
}
function LiverpoolStreetStation26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Liverpool Street Station";
  BackDestination.setAttribute( "onClick", "PrimroseStreet26();" );
  NextDestination.setAttribute( "onClick", "WormwoodStreet26();" );
}
function WormwoodStreet26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wormwood Street";
  BackDestination.setAttribute( "onClick", "LiverpoolStreetStation26();" );
  NextDestination.setAttribute( "onClick", "OldBroadStreet26();" );
}
function OldBroadStreet26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Old Broad Street";
  BackDestination.setAttribute( "onClick", "WormwoodStreet26();" );
  NextDestination.setAttribute( "onClick", "BankStationQueenVictoriaStreet26();" );
}
function FenchurchStreet26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Fenchurch Street";
  BackDestination.setAttribute( "onClick", "WormwoodStreet26();" );
  NextDestination.setAttribute( "onClick", "KingWilliamStreetMonumentStn26();" );
}
function KingWilliamStreetMonumentStn26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "King William Street / Monument Stn";
  BackDestination.setAttribute( "onClick", "FenchurchStreet26();" );
  NextDestination.setAttribute( "onClick", "BankStationQueenVictoriaStreet26();" );
}
function BankStationQueenVictoriaStreet26(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Bank Station / Queen Victoria Street";
  BackDestination.setAttribute( "onClick", "KingWilliamStreetMonumentStn26();" );
  NextDestination.setAttribute( "onClick", "StPaulsChurchyard26();" );
  topTextYes.style.animationName = "BankStationQueenVictoriaStreet";
}
function StPaulsChurchyard26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Paul's Churchyard";
  BackDestination.setAttribute( "onClick", "BankStationQueenVictoriaStreet26();" );
  NextDestination.setAttribute( "onClick", "StPaulsCathedral26();" );
}
function MansionHouseStation26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mansion House Station";
  BackDestination.setAttribute( "onClick", "BankStationQueenVictoriaStreet26();" );
  NextDestination.setAttribute( "onClick", "StPaulsCathedral26();" );
}
function StPaulsCathedral26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Paul's Cathedral";
  BackDestination.setAttribute( "onClick", "MansionHouseStation26();" );
  NextDestination.setAttribute( "onClick", "CityThameslinkStnLudgateCircus26();" );
}
function CityThameslinkStnLudgateCircus26(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "City Thameslink Stn / Ludgate Circus";
  BackDestination.setAttribute( "onClick", "StPaulsCathedral26();" );
  NextDestination.setAttribute( "onClick", "ShoeLane26();" );
  topTextYes.style.animationName = "CityThameslinkStnLudgateCircus";
}
function ShoeLane26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Shoe Lane";
  BackDestination.setAttribute( "onClick", "CityThameslinkStnLudgateCircus26();" );
  NextDestination.setAttribute( "onClick", "LetterLane26();" );
}
function LudgateHillOldBailey26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ludgate Hill / Old Bailey";
  BackDestination.setAttribute( "onClick", "StPaulsCathedral26();" );
  NextDestination.setAttribute( "onClick", "LudgateCircus26();" );
}
function LudgateCircus26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ludgate Circus";
  BackDestination.setAttribute( "onClick", "LudgateHillOldBailey26();" );
  NextDestination.setAttribute( "onClick", "LetterLane26();" );
}
function LetterLane26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Fetter Lane";
  BackDestination.setAttribute( "onClick", "LudgateCircus26();" );
  NextDestination.setAttribute( "onClick", "ChanceryLane26();" );
}
function ChanceryLane26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chancery Lane";
  BackDestination.setAttribute( "onClick", "LetterLane26();" );
  NextDestination.setAttribute( "onClick", "TheRoyalCourtsOfJustice26();" );
}
function TheRoyalCourtsOfJustice26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The Royal Courts Of Justice";
  BackDestination.setAttribute( "onClick", "LetterLane26();" );
  NextDestination.setAttribute( "onClick", "AldwychAustraliaHouse26();" );
}
function AldwychAustraliaHouse26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldwych Australia House";
  BackDestination.setAttribute( "onClick", "TheRoyalCourtsOfJustice26();" );
  NextDestination.setAttribute( "onClick", "AldwychDuryLane26();" );
}
function AldwychDuryLane26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldwych / Dury Lane";
  BackDestination.setAttribute( "onClick", "AldwychAustraliaHouse26();" );
  NextDestination.setAttribute( "onClick", "WaterlooBridgeSouthBank26();" );
}
function Aldwych26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldwych";
  BackDestination.setAttribute( "onClick", "TheRoyalCourtsOfJustice26();" );
  NextDestination.setAttribute( "onClick", "LancasterPlace26();" );
}
function LancasterPlace26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lancaster Place";
  BackDestination.setAttribute( "onClick", "Aldwych26();" );
  NextDestination.setAttribute( "onClick", "WaterlooBridgeSouthBank26();" );
}
function WaterlooBridgeSouthBank26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Waterloo Bridge / South Bank";
  BackDestination.setAttribute( "onClick", "LancasterPlace26();" );
  NextDestination.setAttribute( "onClick", "WaterlooStationWaterlooRoad26();" );
}
function WaterlooStationWaterlooRoad26(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Waterloo Station / Waterloo Road";
  BackDestination.setAttribute( "onClick", "WaterlooBridgeSouthBank26();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}

function ExmouthEstate515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Exmouth Estate";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "StMaryStMichaelsChurch515();" );
}
function ArbourSquare515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Arbour Square";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "StMaryStMichaelsChurch515();" );
}
function StMaryStMichaelsChurch515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Mary's & St Michael's Church";
  BackDestination.setAttribute( "onClick", "ArbourSquare515();" );
  NextDestination.setAttribute( "onClick", "WatneyMarket515();" );
}
function WatneyMarket515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Watney Market";
  BackDestination.setAttribute( "onClick", "StMaryStMichaelsChurch515();" );
  NextDestination.setAttribute( "onClick", "NewRoad515();" );
}
function NewRoad515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "New Road";
  BackDestination.setAttribute( "onClick", "WatneyMarket515();" );
  NextDestination.setAttribute( "onClick", "HenriquesStreet515();" );
}
function HenriquesStreet515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Henriques Street";
  BackDestination.setAttribute( "onClick", "NewRoad515();" );
  NextDestination.setAttribute( "onClick", "AldateEastStation515();" );
}
function AldateEastStation2515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldgate East Station";
  BackDestination.setAttribute( "onClick", "HenriquesStreet515();" );
  NextDestination.setAttribute( "onClick", "AldateEastStation515();" );
}
function AldateEastStation515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldgate East Station";
  BackDestination.setAttribute( "onClick", "AldateEastStation2515();" );
  NextDestination.setAttribute( "onClick", "LolesworthClose515();" );
}
function LolesworthClose515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lolesworth Close";
  BackDestination.setAttribute( "onClick", "AldateEastStation515();" );
  NextDestination.setAttribute( "onClick", "BrushfieldStreet515();" );
}
function BrushfieldStreet515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brushfield Street";
  BackDestination.setAttribute( "onClick", "LolesworthClose515();" );
  NextDestination.setAttribute( "onClick", "ShoreditchHighStreetStation515();" );
}
function FolgateStreet515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Folgate Street";
  BackDestination.setAttribute( "onClick", "BrushfieldStreet515();" );
  NextDestination.setAttribute( "onClick", "ElderStreet2515();" );
}
function ElderStreet2515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Elder Street";
  BackDestination.setAttribute( "onClick", "FolgateStreet515();" );
  NextDestination.setAttribute( "onClick", "ShoreditchHighStreetStation515();" );
}
function ShoreditchHighStreetStation515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Shoreditch High Street Station";
  BackDestination.setAttribute( "onClick", "ElderStreet2515();" );
  NextDestination.setAttribute( "onClick", "ElderStreet515();" );
}
function ElderStreet515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Elder Street";
  BackDestination.setAttribute( "onClick", "ShoreditchHighStreetStation515();" );
  NextDestination.setAttribute( "onClick", "ShoreditchHighStBethnalGreenRoad515();" );
}
function ShoreditchHighStBethnalGreenRoad515(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Shoreditch High St / Bethnal Green Road";
  BackDestination.setAttribute( "onClick", "ElderStreet515();" );
  NextDestination.setAttribute( "onClick", "ShoreditchChurch515();" );
  topTextYes.style.animationName = "ShoreditchHighStBethnalGreenRoad";
}
function ShoreditchChurch515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Shoreditch Church";
  BackDestination.setAttribute( "onClick", "ShoreditchHighStreetStation515();" );
  NextDestination.setAttribute( "onClick", "WatersonStreet515();" );
}
function WatersonStreet515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Waterson Street";
  BackDestination.setAttribute( "onClick", "ShoreditchChurch515();" );
  NextDestination.setAttribute( "onClick", "HoxtonStationMuseumOfTheHome515();" );
}
function FalkirkStreet515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Falkirk Street";
  BackDestination.setAttribute( "onClick", "ShoreditchChurch515();" );
  NextDestination.setAttribute( "onClick", "HoxtonStationMuseumOfTheHome515();" );
}
function HoxtonStationMuseumOfTheHome515(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Hoxton Station / Museum Of The Home";
  BackDestination.setAttribute( "onClick", "FalkirkStreet515();" );
  NextDestination.setAttribute( "onClick", "PearsonStreet515();" );
  topTextYes.style.animationName = "HoxtonStationMuseumOfTheHome";
}
function PearsonStreet515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Pearson Street";
  BackDestination.setAttribute( "onClick", "HoxtonStationMuseumOfTheHome515();" );
  NextDestination.setAttribute( "onClick", "StLeonardsHospital515();" );
}
function StLeonardsHospital515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Leonard's Hospital";
  BackDestination.setAttribute( "onClick", "HoxtonStationMuseumOfTheHome515();" );
  NextDestination.setAttribute( "onClick", "LaburnumStreet515();" );
}
function LaburnumStreet515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Laburnum Street";
  BackDestination.setAttribute( "onClick", "StLeonardsHospital515();" );
  NextDestination.setAttribute( "onClick", "HaggerstonStation515();" );
}
function HaggerstonStation515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Haggerston Station";
  BackDestination.setAttribute( "onClick", "LaburnumStreet515();" );
  NextDestination.setAttribute( "onClick", "MiddletonRoad515();" );
}
function MiddletonRoad515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Middleton Road";
  BackDestination.setAttribute( "onClick", "HaggerstonStation515();" );
  NextDestination.setAttribute( "onClick", "DalstonJunctionStation515();" );
}
function ForestRoad515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Forest Road";
  BackDestination.setAttribute( "onClick", "MiddletonRoad515();" );
  NextDestination.setAttribute( "onClick", "DalstonJunctionStation515();" );
}
function DalstonJunctionStation515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Dalston Junction Station";
  BackDestination.setAttribute( "onClick", "ForestRoad515();" );
  NextDestination.setAttribute( "onClick", "DalstonLaneDalstonJunctionStn515();" );
}
function DalstonLaneDalstonJunctionStn515(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Dalston Lane / Dalston Junction Stn";
  BackDestination.setAttribute( "onClick", "DalstonJunctionStation515();" );
  NextDestination.setAttribute( "onClick", "StannardRoad515();" );
  topTextYes.style.animationName = "DalstonLaneDalstonJunctionStn";
}
function StannardRoad515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Stannard Road";
  BackDestination.setAttribute( "onClick", "DalstonJunctionStation515();" );
  NextDestination.setAttribute( "onClick", "GreenwoodRoad515();" );
}
function GreenwoodRoad515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Greenwood Road";
  BackDestination.setAttribute( "onClick", "StannardRoad515();" );
  NextDestination.setAttribute( "onClick", "RoyalOakRoad515();" );
}
function RoyalOakRoad515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Royal Oak Road";
  BackDestination.setAttribute( "onClick", "GreenwoodRoad515();" );
  NextDestination.setAttribute( "onClick", "HackneyCentralMareStreet515();" );
}
function HackneyCentralMareStreet515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hackney Central / Mare Street";
  BackDestination.setAttribute( "onClick", "RoyalOakRoad515();" );
  NextDestination.setAttribute( "onClick", "HackneyCentralStation515();" );
}
function GrahamRoadHackneyCentral515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Graham Road / Hackney Central";
  BackDestination.setAttribute( "onClick", "RoyalOakRoad515();" );
  NextDestination.setAttribute( "onClick", "HackneyCentralStation515();" );
}
function HackneyCentralStation515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hackney Central Station";
  BackDestination.setAttribute( "onClick", "GrahamRoadHackneyCentral515();" );
  NextDestination.setAttribute( "onClick", "AmhurstRoadHackneyDownsStation();" );
}
function AmhurstRoadHackneyDownsStation(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Amhurst Road / Hackney Downs Station";
  BackDestination.setAttribute( "onClick", "HackneyCentralStation515();" );
  NextDestination.setAttribute( "onClick", "PemburyRoadDownsParkRoad();" );
  topTextYes.style.animationName = "AmhurstRoadHackneyDownsStation";
}
function PemburyRoadDownsParkRoad(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Pembury Road / Downs Park Road";
  BackDestination.setAttribute( "onClick", "HackneyCentralStation515();" );
  NextDestination.setAttribute( "onClick", "ClaptonPond515();" );
}
function CricketfieldRoad515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Cricketfield Road";
  BackDestination.setAttribute( "onClick", "PemburyRoadDownsParkRoad();" );
  NextDestination.setAttribute( "onClick", "ClaptonPond515();" );
}
function ClaptonPond515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Clapton Pond";
  BackDestination.setAttribute( "onClick", "CricketfieldRoad515();" );
  NextDestination.setAttribute( "onClick", "LeaBridgeRoundabout515();" );
}
function LeaBridgeRoundabout515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lea Bridge Roundabout";
  BackDestination.setAttribute( "onClick", "ClaptonPond515();" );
  NextDestination.setAttribute( "onClick", "LeaBridgeRoadUpperClaptonRoad();" );
}
function LeaBridgeRoadUpperClaptonRoad(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Lea Bridge Road / Upper Clapton Road";
  BackDestination.setAttribute( "onClick", "LeaBridgeRoundabout515();" );
  NextDestination.setAttribute( "onClick", "WattisfieldRoad515();" );
  topTextYes.style.animationName = "LeaBridgeRoadUpperClaptonRoad";
}
function WattisfieldRoad515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wattisfield Road";
  BackDestination.setAttribute( "onClick", "LeaBridgeRoundabout515();" );
  NextDestination.setAttribute( "onClick", "ChatsworthRoad515();" );
}
function ChatsworthRoad515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chatsworth Road";
  BackDestination.setAttribute( "onClick", "WattisfieldRoad515();" );
  NextDestination.setAttribute( "onClick", "LeeValleyIceCentre515();" );
}
function LeeValleyIceCentre515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lee Valley Ice Centre";
  BackDestination.setAttribute( "onClick", "ChatsworthRoad515();" );
  NextDestination.setAttribute( "onClick", "LeeValleyRidingCentre515();" );
}
function LeeValleyRidingCentre515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lee Valley Riding Centre";
  BackDestination.setAttribute( "onClick", "LeeValleyIceCentre515();" );
  NextDestination.setAttribute( "onClick", "LeaBridgeStation515();" );
}
function LeaBridgeStation515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lea Bridge Station";
  BackDestination.setAttribute( "onClick", "LeeValleyRidingCentre515();" );
  NextDestination.setAttribute( "onClick", "EmmanuelParishChurch515();" );
}
function PerthRoad515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Perth Road";
  BackDestination.setAttribute( "onClick", "LeaBridgeStation515();" );
  NextDestination.setAttribute( "onClick", "MarkhouseRoad515();" );
}
function EmmanuelParishChurch515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Emmanuel Parish Church";
  BackDestination.setAttribute( "onClick", "PerthRoad515();" );
  NextDestination.setAttribute( "onClick", "MarkhouseRoad515();" );
}
function MarkhouseRoad515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Markhouse Road";
  BackDestination.setAttribute( "onClick", "EmmanuelParishChurch515();" );
  NextDestination.setAttribute( "onClick", "RochdaleRoad515();" );
}
function RochdaleRoad515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Rochdale Road";
  BackDestination.setAttribute( "onClick", "MarkhouseRoad515();" );
  NextDestination.setAttribute( "onClick", "ShrublandRoad515();" );
}
function ShrublandRoad515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Shrubland Road";
  BackDestination.setAttribute( "onClick", "RochdaleRoad515();" );
  NextDestination.setAttribute( "onClick", "HighRoadLeytonBakersArms515();" );
}
function ManorRoad515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Manor Road";
  BackDestination.setAttribute( "onClick", "MarkhouseRoad515();" );
  NextDestination.setAttribute( "onClick", "ShortlandsRoad515();" );
}
function ShortlandsRoad515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Shortlands Road";
  BackDestination.setAttribute( "onClick", "ManorRoad515();" );
  NextDestination.setAttribute( "onClick", "HighRoadLeytonBakersArms515();" );
}
function HighRoadLeytonBakersArms515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "High Road Leyton / Bakers Arms";
  BackDestination.setAttribute( "onClick", "ShortlandsRoad515();" );
  NextDestination.setAttribute( "onClick", "HoeStreetBakersArms515();" );
}
function HoeStreetBakersArms515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hoe Street / Bakers Arms";
  BackDestination.setAttribute( "onClick", "HighRoadLeytonBakersArms515();" );
  NextDestination.setAttribute( "onClick", "GroveRoad515();" );
}
function BakersAvenue515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bakers Avenue";
  BackDestination.setAttribute( "onClick", "HighRoadLeytonBakersArms515();" );
  NextDestination.setAttribute( "onClick", "GroveRoad515();" );
}
function GroveRoad515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Grove Road";
  BackDestination.setAttribute( "onClick", "BakersAvenue515();" );
  NextDestination.setAttribute( "onClick", "QueensRoad515();" );
}
function QueensRoad515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Queen's Road";
  BackDestination.setAttribute( "onClick", "GroveRoad515();" );
  NextDestination.setAttribute( "onClick", "WalthamstowBusStation515();" );
}
function GrosvenorParkRoad515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Grosvenor Park Road";
  BackDestination.setAttribute( "onClick", "GroveRoad515();" );
  NextDestination.setAttribute( "onClick", "WalthamstowBusStation515();" );
}
function WalthamstowBusStation515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Walthamstow Bus Station";
  BackDestination.setAttribute( "onClick", "GrosvenorParkRoad515();" );
  NextDestination.setAttribute( "onClick", "SelborneWalk515();" );
}
function SelborneWalk515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Selborne Walk";
  BackDestination.setAttribute( "onClick", "WalthamstowBusStation515();" );
  NextDestination.setAttribute( "onClick", "SouthGrove515();" );
}
function SelborneWalkVernonRoad515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Selborne Walk / Vernon Road";
  BackDestination.setAttribute( "onClick", "SelborneWalk515();" );
  NextDestination.setAttribute( "onClick", "SouthGrove515();" );
}
function SouthGrove515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "South Grove";
  BackDestination.setAttribute( "onClick", "SelborneWalkVernonRoad515();" );
  NextDestination.setAttribute( "onClick", "StJamessStreetStation515();" );
}
function StJamessStreetStation515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St James's Street Station";
  BackDestination.setAttribute( "onClick", "SouthGrove515();" );
  NextDestination.setAttribute( "onClick", "CarisbrookeRoad515();" );
}
function WalthamstowMarket515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Walthamstow Market";
  BackDestination.setAttribute( "onClick", "StJamessStreetStation515();" );
  NextDestination.setAttribute( "onClick", "CarisbrookeRoad515();" );
}
function CarisbrookeRoad515(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Carisbrooke Road";
  BackDestination.setAttribute( "onClick", "WalthamstowMarket515();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}

function AldgateStation343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldgate Station";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "Minories343();" );
}
function Minories343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Minories";
  BackDestination.setAttribute( "onClick", "AldgateStation343();" );
  NextDestination.setAttribute( "onClick", "TowerHillTowerGatewayStation343();" );
}
function TowerHillTowerGatewayStation343(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Tower Hill / Tower Gateway Station";
  BackDestination.setAttribute( "onClick", "Minories343();" );
  NextDestination.setAttribute( "onClick", "TowerBridgeCityHall343();" );
  topTextYes.style.animationName = "TowerHillTowerGatewayStation";
}
function TowerGatewayStation343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Tower Gateway Station";
  BackDestination.setAttribute( "onClick", "AldgateStation343();" );
  NextDestination.setAttribute( "onClick", "TowerBridgeCityHall343();" );
}
function TowerBridgeCityHall343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Tower Bridge / City Hall";
  BackDestination.setAttribute( "onClick", "TowerGatewayStation343();" );
  NextDestination.setAttribute( "onClick", "TooleyStreetCityHall343();" );
}
function TooleyStreetCityHall343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Tooley Street / City Hall";
  BackDestination.setAttribute( "onClick", "TowerBridgeCityHall343();" );
  NextDestination.setAttribute( "onClick", "LondonBridgeStation343();" );
}
function CityHall343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "City Hall";
  BackDestination.setAttribute( "onClick", "TowerBridgeCityHall343();" );
  NextDestination.setAttribute( "onClick", "AbbotsLane343();" );
}
function AbbotsLane343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Abbots Lane";
  BackDestination.setAttribute( "onClick", "CityHall343();" );
  NextDestination.setAttribute( "onClick", "HaysGalleria343();" );
}
function HaysGalleria343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hay's Galleria";
  BackDestination.setAttribute( "onClick", "AbbotsLane343();" );
  NextDestination.setAttribute( "onClick", "LondonBridgeStation343();" );
}
function LondonBridgeStation343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "London Bridge Station";
  BackDestination.setAttribute( "onClick", "HaysGalleria343();" );
  NextDestination.setAttribute( "onClick", "SouthwarkStreet343();" );
}
function SouthwarkStreet343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Southwark Street";
  BackDestination.setAttribute( "onClick", "LondonBridgeStation343();" );
  NextDestination.setAttribute( "onClick", "UnionStreet343();" );
}
function UnionStreet343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Union Street";
  BackDestination.setAttribute( "onClick", "LondonBridgeStation343();" );
  NextDestination.setAttribute( "onClick", "BoroughStation343();" );
}
function BoroughStation343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Borough Station";
  BackDestination.setAttribute( "onClick", "UnionStreet343();" );
  NextDestination.setAttribute( "onClick", "InnerLondonCrownCourt343();" );
}
function InnerLondonCrownCourt343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Inner London Crown Court";
  BackDestination.setAttribute( "onClick", "BoroughStation343();" );
  NextDestination.setAttribute( "onClick", "ElephantCastleNewingtonCauseway343();" );
}
function ElephantCastleNewingtonCauseway343(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Elephant & Castle / Newington Causeway";
  BackDestination.setAttribute( "onClick", "InnerLondonCrownCourt343();" );
  NextDestination.setAttribute( "onClick", "ElephantCastleStation343();" );
  topTextYes.style.animationName = "ElephantCastleNewingtonCauseway";
}
function ElephantCastleStation343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Elephant & Castle Station";
  BackDestination.setAttribute( "onClick", "ElephantCastleNewingtonCauseway343();" );
  NextDestination.setAttribute( "onClick", "ElephantPark343();" );
}
function HamptonStreet343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hampton Street";
  BackDestination.setAttribute( "onClick", "ElephantCastleStation343();" );
  NextDestination.setAttribute( "onClick", "ElephantPark343();" );
}
function ElephantPark343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Elephant Park";
  BackDestination.setAttribute( "onClick", "HamptonStreet343();" );
  NextDestination.setAttribute( "onClick", "LarcomStreet343();" );
}
function LarcomStreet343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Larcom Street";
  BackDestination.setAttribute( "onClick", "ElephantPark343();" );
  NextDestination.setAttribute( "onClick", "BalfourStreet343();" );
}
function BalfourStreet343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Balfour Street";
  BackDestination.setAttribute( "onClick", "LarcomStreet343();" );
  NextDestination.setAttribute( "onClick", "EastStreet343();" );
}
function EastStreet343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "East Street";
  BackDestination.setAttribute( "onClick", "BalfourStreet343();" );
  NextDestination.setAttribute( "onClick", "AlsaceRoad343();" );
}
function AlsaceRoad343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Alsace Road";
  BackDestination.setAttribute( "onClick", "EastStreet343();" );
  NextDestination.setAttribute( "onClick", "AlbanyWellsWay343();" );
}
function AlbanyWellsWay343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Albany Road / Wells Way";
  BackDestination.setAttribute( "onClick", "AlsaceRoad343();" );
  NextDestination.setAttribute( "onClick", "StGeorgesWayBurgessPark343();" );
}
function StGeorgesWayBurgessPark343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St George's Way / Burgess Park";
  BackDestination.setAttribute( "onClick", "AlbanyWellsWay343();" );
  NextDestination.setAttribute( "onClick", "SedgmoorPlace343();" );
}
function CottageGreen343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Cottage Green";
  BackDestination.setAttribute( "onClick", "StGeorgesWayBurgessPark343();" );
  NextDestination.setAttribute( "onClick", "SedgmoorPlace343();" );
}
function SedgmoorPlace343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Sedgmoor Place";
  BackDestination.setAttribute( "onClick", "CottageGreen343();" );
  NextDestination.setAttribute( "onClick", "SouthamptonWayEstate343();" );
}
function SouthamptonWayEstate343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Southampton Way Estate";
  BackDestination.setAttribute( "onClick", "SedgmoorPlace343();" );
  NextDestination.setAttribute( "onClick", "SouthamptonWayPeckhamRoad343();" );
}
function SouthamptonWayPeckhamRoad343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Southampton Way / Peckham Road";
  BackDestination.setAttribute( "onClick", "SouthamptonWayEstate343();" );
  NextDestination.setAttribute( "onClick", "HarrisAcademy343();" );
}
function PeckhamRoadSouthamptonWay343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Peckham Road / Southampton Way";
  BackDestination.setAttribute( "onClick", "SouthamptonWayEstate343();" );
  NextDestination.setAttribute( "onClick", "HarrisAcademy343();" );
}
function HarrisAcademy343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Harris Academy";
  BackDestination.setAttribute( "onClick", "PeckhamRoadSouthamptonWay343();" );
  NextDestination.setAttribute( "onClick", "PeckhamLibrary343();" );
}
function PeckhamLibrary343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Peckham Library";
  BackDestination.setAttribute( "onClick", "HarrisAcademy343();" );
  NextDestination.setAttribute( "onClick", "ClaytonRoad343();" );
}
function ClaytonRoad343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Clayton Road";
  BackDestination.setAttribute( "onClick", "PeckhamLibrary343();" );
  NextDestination.setAttribute( "onClick", "TheAyleshamCentre343();" );
}
function TheAyleshamCentre343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The Aylesham Centre";
  BackDestination.setAttribute( "onClick", "ClaytonRoad343();" );
  NextDestination.setAttribute( "onClick", "PeckhamRyeStation343();" );
}
function HanoverPark343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hanover Park";
  BackDestination.setAttribute( "onClick", "HarrisAcademy343();" );
  NextDestination.setAttribute( "onClick", "PeckhamRyeStation343();" );
}
function PeckhamRyeStation343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Peckham Rye Station";
  BackDestination.setAttribute( "onClick", "HanoverPark343();" );
  NextDestination.setAttribute( "onClick", "NigelRoad343();" );
}
function HeatonRoad343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Heaton Road";
  BackDestination.setAttribute( "onClick", "PeckhamRyeStation343();" );
  NextDestination.setAttribute( "onClick", "NigelRoad343();" );
}
function NigelRoad343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Nigel Road";
  BackDestination.setAttribute( "onClick", "HeatonRoad343();" );
  NextDestination.setAttribute( "onClick", "PeckhamRyeNunheadLane343();" );
}
function PeckhamRyeEastDulwichRoad343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Peckham Rye / East Dulwich Road";
  BackDestination.setAttribute( "onClick", "NigelRoad343();" );
  NextDestination.setAttribute( "onClick", "PeckhamRyeNunheadLane343();" );
}
function PeckhamRyeNunheadLane343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Peckham Rye / Nunhead Lane";
  BackDestination.setAttribute( "onClick", "PeckhamRyeEastDulwichRoad343();" );
  NextDestination.setAttribute( "onClick", "SolomonsPassage343();" );
}
function SolomonsPassage343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Solomon's Passage";
  BackDestination.setAttribute( "onClick", "PeckhamRyeNunheadLane343();" );
  NextDestination.setAttribute( "onClick", "RyeHillPark343();" );
}
function RyeHillPark343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Rye Hill Park";
  BackDestination.setAttribute( "onClick", "SolomonsPassage343();" );
  NextDestination.setAttribute( "onClick", "StuartRoad343();" );
}
function StuartRoad343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Stuart Road";
  BackDestination.setAttribute( "onClick", "RyeHillPark343();" );
  NextDestination.setAttribute( "onClick", "SurreyRoad343();" );
}
function SurreyRoad343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Surrey Road";
  BackDestination.setAttribute( "onClick", "StuartRoad343();" );
  NextDestination.setAttribute( "onClick", "MerttinsRoad343();" );
}
function MerttinsRoad343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Merttins Road";
  BackDestination.setAttribute( "onClick", "SurreyRoad343();" );
  NextDestination.setAttribute( "onClick", "StNorbetRoad343();" );
}
function InvertonRoad343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Inverton Road";
  BackDestination.setAttribute( "onClick", "SurreyRoad343();" );
  NextDestination.setAttribute( "onClick", "StNorbetRoad343();" );
}
function StNorbetRoad343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Norbet Road";
  BackDestination.setAttribute( "onClick", "InvertonRoad343();" );
  NextDestination.setAttribute( "onClick", "TurnhamRoad343();" );
}
function TurnhamRoad343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Turnham Road";
  BackDestination.setAttribute( "onClick", "StNorbetRoad343();" );
  NextDestination.setAttribute( "onClick", "BrockillCrescent343();" );
}
function BrockillCrescent343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brockill Crescent";
  BackDestination.setAttribute( "onClick", "TurnhamRoad343();" );
  NextDestination.setAttribute( "onClick", "StAsaphRoad343();" );
}
function StAsaphRoad343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Asaph Road";
  BackDestination.setAttribute( "onClick", "BrockillCrescent343();" );
  NextDestination.setAttribute( "onClick", "AvignonRoadDrakefellRoad343();" );
}
function AvignonRoadDrakefellRoad343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Avigon Road / Drakefell Road";
  BackDestination.setAttribute( "onClick", "StAsaphRoad343();" );
  NextDestination.setAttribute( "onClick", "KittoRoad343();" );
}
function DrakefellRoad343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Drakefell Road";
  BackDestination.setAttribute( "onClick", "StAsaphRoad343();" );
  NextDestination.setAttribute( "onClick", "KittoRoad343();" );
}
function KittoRoad343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Kitto Road";
  BackDestination.setAttribute( "onClick", "DrakefellRoad343();" );
  NextDestination.setAttribute( "onClick", "ArbuthnotRoad343();" );
}
function ArbuthnotRoad343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Arbuthnot Road";
  BackDestination.setAttribute( "onClick", "KittoRoad343();" );
  NextDestination.setAttribute( "onClick", "OmmaneyRoad343();" );
}
function OmmaneyRoad343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ommaney Road";
  BackDestination.setAttribute( "onClick", "KittoRoad343();" );
  NextDestination.setAttribute( "onClick", "NewCrossJerningamRoad343();" );
}
function NewCrossBusGarage343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "New Cross Bus Garage";
  BackDestination.setAttribute( "onClick", "OmmaneyRoad343();" );
  NextDestination.setAttribute( "onClick", "NewCrossJerningamRoad343();" );
}
function NewCrossJerningamRoad343(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "New Cross / Jerningham Road";
  BackDestination.setAttribute( "onClick", "NewCrossBusGarage343();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}

function CrossharbourAsdaD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Crossharbour ASDA";
  // BackDestination.setAttribute( "onClick", "NewCrossBusGarage343();" );
  NextDestination.setAttribute( "onClick", "CrossharbourStationD6();" );
}
function CrossharbourStationD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Crossharbour Station";
  BackDestination.setAttribute( "onClick", "IsleOfDogsASDAD6();" );
  NextDestination.setAttribute( "onClick", "HarbourExchangeSquareD6();" );
}
function IsleOfDogsASDAD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Isle Of Dogs ASDA";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "CrossharbourStationD6();" );
}
function EastFerryRoadD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "East Ferry Road";
  BackDestination.setAttribute( "onClick", "CrossharbourStationD6();" );
  NextDestination.setAttribute( "onClick", "HarbourExchangeSquareD6();" );
}
function HarbourExchangeSquareD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Harbour Exchange Square";
  BackDestination.setAttribute( "onClick", "EastFerryRoadD6();" );
  NextDestination.setAttribute( "onClick", "JackDashHouseD6();" );
}
function JackDashHouseD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Jack Dash House";
  BackDestination.setAttribute( "onClick", "HarbourExchangeSquareD6();" );
  NextDestination.setAttribute( "onClick", "TheBlueBridgeD6();" );
}
function TheBlueBridgeD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The Blue Bridge";
  BackDestination.setAttribute( "onClick", "JackDashHouseD6();" );
  NextDestination.setAttribute( "onClick", "ColdharbourD6();" );
}
function ColdharbourD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Coldharbour";
  BackDestination.setAttribute( "onClick", "JackDashHouseD6();" );
  NextDestination.setAttribute( "onClick", "AspenWayD6();" );
}
function AspenWayD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aspen Way";
  BackDestination.setAttribute( "onClick", "ColdharbourD6();" );
  NextDestination.setAttribute( "onClick", "PoplarHighStreetBlackwallD6();" );
}
function PoplarHighStreetBlackwallD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Poplar High Street / Blackwall";
  BackDestination.setAttribute( "onClick", "AspenWayD6();" );
  NextDestination.setAttribute( "onClick", "BazelyStreetD6();" );
}
function BazelyStreetD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bazely Street";
  BackDestination.setAttribute( "onClick", "PoplarHighStreetBlackwallD6();" );
  NextDestination.setAttribute( "onClick", "PoplarRecreationGroundD6();" );
}
function PoplarRecreationGroundD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Poplar Recreation Ground";
  BackDestination.setAttribute( "onClick", "BazelyStreetD6();" );
  NextDestination.setAttribute( "onClick", "UpperNorthStreetD6();" );
}
function PoplarAllSaintsChurchD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Poplar / All Saints Church";
  BackDestination.setAttribute( "onClick", "PoplarHighStreetBlackwallD6();" );
  NextDestination.setAttribute( "onClick", "ChrispStreetMarketD6();" );
}
function ChrispStreetMarketD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chrisp Street Market";
  BackDestination.setAttribute( "onClick", "PoplarAllSaintsChurchD6();" );
  NextDestination.setAttribute( "onClick", "PoplarRecreationGrdPoplarStnD6();" );
}
function PoplarRecreationGrdPoplarStnD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Poplar Recreation Grd / Poplar Stn";
  BackDestination.setAttribute( "onClick", "ChrispStreetMarketD6();" );
  NextDestination.setAttribute( "onClick", "UpperNorthStreetD6();" );
}
function UpperNorthStreetD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Upper North Street";
  BackDestination.setAttribute( "onClick", "PoplarRecreationGrdPoplarStnD6();" );
  NextDestination.setAttribute( "onClick", "UniversityOfCumbriaInLondonD6();" );
}
function UniversityOfCumbriaInLondonD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Univeristy Of Cumbria In London";
  BackDestination.setAttribute( "onClick", "UpperNorthStreetD6();" );
  NextDestination.setAttribute( "onClick", "EastIndiaDockRoadD6();" );
}
function EastIndiaDockRoadD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "East India Dock Road";
  BackDestination.setAttribute( "onClick", "UniversityOfCumbriaInLondonD6();" );
  NextDestination.setAttribute( "onClick", "PixelyStreetD6();" );
}
function PixelyStreetD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Pixely Street";
  BackDestination.setAttribute( "onClick", "EastIndiaDockRoadD6();" );
  NextDestination.setAttribute( "onClick", "StPaulsWayD6();" );
}
function StPaulsWayD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Paul's Way";
  BackDestination.setAttribute( "onClick", "PixelyStreetD6();" );
  NextDestination.setAttribute( "onClick", "AckroydDriveD6();" );
}
function AckroydDriveD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ackroyd Drive";
  BackDestination.setAttribute( "onClick", "StPaulsWayD6();" );
  NextDestination.setAttribute( "onClick", "EricStreetD6();" );
}
function MileEndParkLeisureCentreD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mile End Park Leisure Centre";
  BackDestination.setAttribute( "onClick", "StPaulsWayD6();" );
  NextDestination.setAttribute( "onClick", "EricStreetD6();" );
}
function EricStreetD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Eric Street";
  BackDestination.setAttribute( "onClick", "MileEndParkLeisureCentreD6();" );
  NextDestination.setAttribute( "onClick", "MileEndStationD6();" );
}
function MileEndStationD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mile End Station";
  BackDestination.setAttribute( "onClick", "EricStreetD6();" );
  NextDestination.setAttribute( "onClick", "MileEndStationMileEndRoadD6();" );
}
function MileEndStationMileEndRoadD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mile End Station / Mile End Road";
  BackDestination.setAttribute( "onClick", "MileEndStationD6();" );
  NextDestination.setAttribute( "onClick", "LichfieldRoadD6();" );
}
function MileEndStationBowRoadD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mile End Station / Bow Road";
  BackDestination.setAttribute( "onClick", "MileEndStationD6();" );
  NextDestination.setAttribute( "onClick", "LichfieldRoadD6();" );
}
function LichfieldRoadD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lichfield Road";
  BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD6();" );
  NextDestination.setAttribute( "onClick", "ArberyRoadD6();" );
}
function ArberyRoadD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Arbery Road";
  BackDestination.setAttribute( "onClick", "LichfieldRoadD6();" );
  NextDestination.setAttribute( "onClick", "StBarnabasChurchD6();" );
}
function StBarnabasChurchD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Barnabas Church";
  BackDestination.setAttribute( "onClick", "ArberyRoadD6();" );
  NextDestination.setAttribute( "onClick", "HaverfieldGreenGroveRoadD6();" );
}
function HaverfieldGreenGroveRoadD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Haverfield Green / Grove Road";
  BackDestination.setAttribute( "onClick", "StBarnabasChurchD6();" );
  NextDestination.setAttribute( "onClick", "BonnerStreetD6();" );
}
function SmartStreetD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Smart Street";
  BackDestination.setAttribute( "onClick", "StBarnabasChurchD6();" );
  NextDestination.setAttribute( "onClick", "BonnerStreetD6();" );
}
function BonnerStreetD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bonner Street";
  BackDestination.setAttribute( "onClick", "SmartStreetD6();" );
  NextDestination.setAttribute( "onClick", "MorpethStreetD6();" );
}
function MorpethStreetD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Morpeth Street";
  BackDestination.setAttribute( "onClick", "BonnerStreetD6();" );
  NextDestination.setAttribute( "onClick", "GlobeRoadD6();" );
}
function GlobeRoadD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Globe Road";
  BackDestination.setAttribute( "onClick", "MorpethStreetD6();" );
  NextDestination.setAttribute( "onClick", "BethnalGreenStationD6();" );
}
function BurnhamStreetD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Burnham Street";
  BackDestination.setAttribute( "onClick", "BonnerStreetD6();" );
  NextDestination.setAttribute( "onClick", "BethnalGreenStationD6();" );
}
function BethnalGreenStationD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bethnal Green Station";
  BackDestination.setAttribute( "onClick", "BurnhamStreetD6();" );
  NextDestination.setAttribute( "onClick", "OldFordRoadD6();" );
}
function OldFordRoadD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Old Ford Road";
  BackDestination.setAttribute( "onClick", "BethnalGreenStationD6();" );
  NextDestination.setAttribute( "onClick", "CambridgeHeathStationD6();" );
}
function CambridgeHeathStationD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Cambridge Heath Station";
  BackDestination.setAttribute( "onClick", "OldFordRoadD6();" );
  NextDestination.setAttribute( "onClick", "MareStreetVictoriaParkRoadD6();" );
}
function MareStreetVictoriaParkRoadD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mare Street / Victoria Park Road";
  BackDestination.setAttribute( "onClick", "CambridgeHeathStationD6();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}
function KingEdwardsRoadD6(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "King Edwards Road";
  BackDestination.setAttribute( "onClick", "MareStreetVictoriaParkRoadD6();" );
  // NextDestination.setAttribute( "onClick", "MareStreetVictoriaParkRoadD6();" );
}