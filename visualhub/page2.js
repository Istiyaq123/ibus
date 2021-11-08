var smallSpace = '<span class="invisible">.</span>'
var bigSpace = '<span class="invisible">...</span>'
var sSpace = '<span class="invisible">.</span>'
var bSpace = '<span class="invisible">...</span>'

var topTextYes = document.getElementById("topTextYes");
var topTextNo = document.getElementById("topTextNo");

function FinsburyParkW3(){
  ibusW3FinsburyPark()
  showDestination.setAttribute( "onClick", "FinsburyParkW3ibus();" );
}
function NorthcumberlandParkW3(){
  ibusW3NorthcumberlandPark()
  showDestination.setAttribute( "onClick", "NorthcumberlandParkW3ibus();" );
}
function EastHam792(){
  ibus792EastHam()
  showDestination.setAttribute( "onClick", "EastHam792ibus();" );
}
function Clapton792(){
  ibus792Clapton()
  showDestination.setAttribute( "onClick", "Clapton792ibus();" );
}
function TurnpikeLaneStation232(){
  ibus232TurnpikeLaneStation()
  showDestination.setAttribute( "onClick", "TurnpikeLaneStation232ibus();" );
}
function StRaphael232(){
  ibus232StRaphael()
  showDestination.setAttribute( "onClick", "StRaphael232ibus();" );
}

function FinsburyParkW3ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "W3 to Finsbury Park Station";
}
function NorthcumberlandParkW3ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "W3 to Northcumberland Park";
}
function EastHam792ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "792 to East Ham, Central Park";
}
function Clapton792ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "792 to Clapton Pond";
}
function TurnpikeLaneStation232ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "232 to Turnpike Lane Station";
}
function StRaphael232ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "232 to St Raphael's";
}

function ibusW3FinsburyPark(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "W3 to Finsbury Park Station";
  NextDestination.setAttribute( "onClick", "ScotswoodWalkW3();" );
}
function NorthumberlandParkBusStandW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Northumberland Park Bus Stand";
  BackDestination.setAttribute( "onClick", "BusTerminatesHereW3();" );
  NextDestination.setAttribute( "onClick", "ScotswoodWalkW3();" );
}
function ScotswoodWalkW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Scotswood Walk";
  BackDestination.setAttribute( "onClick", "NorthumberlandParkBusStandW3();" );
  NextDestination.setAttribute( "onClick", "GillhamTerraceW3();" );
}
function GillhamTerraceW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Gillham Terrace";
  BackDestination.setAttribute( "onClick", "ScotswoodWalkW3();" );
  NextDestination.setAttribute( "onClick", "WorcesterAvenueW3();" );
}
function WorcesterAvenueW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Worcester Avenue";
  BackDestination.setAttribute( "onClick", "GillhamTerraceW3();" );
  NextDestination.setAttribute( "onClick", "WhiteHartLaneStationW3();" );
}
function TottenhamHighRoadW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Tottenham High Road";
  BackDestination.setAttribute( "onClick", "GillhamTerraceW3();" );
  NextDestination.setAttribute( "onClick", "WhiteHartLaneStationW3();" );
}
function WhiteHartLaneStationW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "White Hart Lane Station";
  BackDestination.setAttribute( "onClick", "TottenhamHighRoadW3();" );
  NextDestination.setAttribute( "onClick", "HaringeySixthFormCollegeW3();" );
}
function HaringeySixthFormCollegeW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Haringey Sixth Form College";
  BackDestination.setAttribute( "onClick", "WhiteHartLaneStationW3();" );
  NextDestination.setAttribute( "onClick", "TottenhamCemeteryW3();" );
}
function TottenhamCemeteryW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Tottenham Cemetery";
  BackDestination.setAttribute( "onClick", "HaringeySixthFormCollegeW3();" );
  NextDestination.setAttribute( "onClick", "GreatCambridgeRoadW3();" );
}
function GreatCambridgeRoadW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Great Cambridge Road";
  BackDestination.setAttribute( "onClick", "TottenhamCemeteryW3();" );
  NextDestination.setAttribute( "onClick", "RowlandHillAvenueW3();" );
}
function RowlandHillAvenueW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Rowland Hill Avenue";
  BackDestination.setAttribute( "onClick", "GreatCambridgeRoadW3();" );
  NextDestination.setAttribute( "onClick", "HaringeyFootballClubW3();" );
}
function HaringeyFootballClubW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Haringey Football Club";
  BackDestination.setAttribute( "onClick", "RowlandHillAvenueW3();" );
  NextDestination.setAttribute( "onClick", "NewRiverSportsCentreW3();" );
}
function NewRiverSportsCentreW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "New River Sports Centre";
  BackDestination.setAttribute( "onClick", "HaringeyFootballClubW3();" );
  NextDestination.setAttribute( "onClick", "PaisleyRoadW3();" );
}
function PaisleyRoadW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Paisley Road";
  BackDestination.setAttribute( "onClick", "NewRiverSportsCentreW3();" );
  NextDestination.setAttribute( "onClick", "PerthRoadW3();" );
}
function PerthRoadW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Perth Road";
  BackDestination.setAttribute( "onClick", "PaisleyRoadW3();" );
  NextDestination.setAttribute( "onClick", "WoodGreenCrownCourtW3();" );
}
function SolwayRoadW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Solway Road";
  BackDestination.setAttribute( "onClick", "PaisleyRoadW3();" );
  NextDestination.setAttribute( "onClick", "WoodGreenCrownCourtW3();" );
}
function WoodGreenCrownCourtW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wood Green Crown Court";
  BackDestination.setAttribute( "onClick", "SolwayRoadW3();" );
  NextDestination.setAttribute( "onClick", "WoodGreenStationW3();" );
}
function WoodGreenStationW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wood Green Station";
  BackDestination.setAttribute( "onClick", "WoodGreenCrownCourtW3();" );
  NextDestination.setAttribute( "onClick", "TheBroadwayW3();" );
}
function TheBroadwayW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The Broadway";
  BackDestination.setAttribute( "onClick", "WoodGreenCrownCourtW3();" );
  NextDestination.setAttribute( "onClick", "BarrattAvenueW3();" );
}
function RedversRoadW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Redvers Road";
  BackDestination.setAttribute( "onClick", "RedversRoadW3();" );
  NextDestination.setAttribute( "onClick", "WoodGreenStationRiverParkRoadW3();" );
}
function WoodGreenStationRiverParkRoadW3(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Wood Green Station / River Park Road";
  BackDestination.setAttribute( "onClick", "RedversRoadW3();" );
  NextDestination.setAttribute( "onClick", "BarrattAvenueW3();" );
  topTextYes.style.animationName = "WoodGreenStationRiverParkRoad";
}
function BarrattAvenueW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Barratt Avenue";
  BackDestination.setAttribute( "onClick", "WoodGreenStationRiverParkRoadW3();" );
  NextDestination.setAttribute( "onClick", "AlexandraPalaceStationW3();" );
}
function AlexandraPalaceStationW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Alexandra Palace Station";
  BackDestination.setAttribute( "onClick", "BarrattAvenueW3();" );
  NextDestination.setAttribute( "onClick", "PalaceGatesRoadW3();" );
}
function PalaceGatesRoadW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Palace Gates Road";
  BackDestination.setAttribute( "onClick", "AlexandraPalaceStationW3();" );
  NextDestination.setAttribute( "onClick", "AlexandraPalaceParkW3();" );
}
function AlexandraPalaceParkW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Alexandra Palace Park";
  BackDestination.setAttribute( "onClick", "PalaceGatesRoadW3();" );
  NextDestination.setAttribute( "onClick", "AlexandraPalaceIceRinkW3();" );
}
function AlexandraPalaceIceRinkW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Alexandra Palace Ice Rink";
  BackDestination.setAttribute( "onClick", "AlexandraPalaceParkW3();" );
  NextDestination.setAttribute( "onClick", "AlexandraPalacePalmCourtW3();" );
}
function AlexandraPalacePalmCourtW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Alexandra Palace Palm Court";
  BackDestination.setAttribute( "onClick", "AlexandraPalaceIceRinkW3();" );
  NextDestination.setAttribute( "onClick", "AlexandraPalaceGardenCentreW3();" );
}
function AlexandraPalaceGardenCentreW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Alexandra Palace Garden Centre";
  BackDestination.setAttribute( "onClick", "AlexandraPalacePalmCourtW3();" );
  NextDestination.setAttribute( "onClick", "ParkRoadW3();" );
}
function ParkRoadW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Park Road";
  BackDestination.setAttribute( "onClick", "AlexandraPalaceGardenCentreW3();" );
  NextDestination.setAttribute( "onClick", "HornseyFireStationW3();" );
}
function HornseyFireStationW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hornsey Fire Station";
  BackDestination.setAttribute( "onClick", "ParkRoadW3();" );
  NextDestination.setAttribute( "onClick", "NightingaleLaneW3();" );
}
function NightingaleLaneW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Nightingale Lane";
  BackDestination.setAttribute( "onClick", "HornseyFireStationW3();" );
  NextDestination.setAttribute( "onClick", "PrioryParkW3();" );
}
function PrioryParkW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Priory Park";
  BackDestination.setAttribute( "onClick", "NightingaleLaneW3();" );
  NextDestination.setAttribute( "onClick", "MiddleLaneW3();" );
}
function MiddleLaneW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Middle Lane";
  BackDestination.setAttribute( "onClick", "PrioryParkW3();" );
  NextDestination.setAttribute( "onClick", "TottenhamLaneW3();" );
}
function TottenhamLaneW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Tottenham Lane";
  BackDestination.setAttribute( "onClick", "MiddleLaneW3();" );
  NextDestination.setAttribute( "onClick", "WestonParkW3();" );
}
function PalaceRoadW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Palace Road";
  BackDestination.setAttribute( "onClick", "NightingaleLaneW3();" );
  NextDestination.setAttribute( "onClick", "TottenhamLaneYMCAW3();" );
}
function TottenhamLaneYMCAW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Tottenham Lane Y M C A";
  BackDestination.setAttribute( "onClick", "PalaceRoadW3();" );
  NextDestination.setAttribute( "onClick", "WestonParkW3();" );
}
function WestonParkW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Weston Park";
  BackDestination.setAttribute( "onClick", "TottenhamLaneYMCAW3();" );
  NextDestination.setAttribute( "onClick", "MountViewRoadW3();" );
}
function MountViewRoadW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mount View Road";
  BackDestination.setAttribute( "onClick", "WestonParkW3();" );
  NextDestination.setAttribute( "onClick", "OssianRoadW3();" );
}
function OssianRoadW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ossian Road";
  BackDestination.setAttribute( "onClick", "MountViewRoadW3();" );
  NextDestination.setAttribute( "onClick", "AlbertRoadW3();" );
}
function AlbertRoadW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Albert Road";
  BackDestination.setAttribute( "onClick", "OssianRoadW3();" );
  NextDestination.setAttribute( "onClick", "TollingtonParkW3();" );
}
function VictoriaRoadW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Victoria Road";
  BackDestination.setAttribute( "onClick", "OssianRoadW3();" );
  NextDestination.setAttribute( "onClick", "HanleyRoadStapletonHallRoad();" );
}
function HanleyRoadStapletonHallRoad(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hanley Road / Stapleton Hall Road";
  BackDestination.setAttribute( "onClick", "VictoriaRoadW3();" );
  NextDestination.setAttribute( "onClick", "TollingtonParkW3();" );
}
function TollingtonParkW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Tollington Park";
  BackDestination.setAttribute( "onClick", "HanleyRoadStapletonHallRoad();" );
  NextDestination.setAttribute( "onClick", "FinsburyParkStationW3();" );
}
function FinsburyParkStationW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Finsbury Park Station";
  BackDestination.setAttribute( "onClick", "TollingtonParkW3();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHereW3();" );
}
function BusTerminatesHereW3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bus Terminates Here";
  BackDestination.setAttribute( "onClick", "ibusW3FinsburyPark();" );
  NextDestination.setAttribute( "onClick", "ibusW3NorthcumberlandPark();" );
}
function ibusW3NorthcumberlandPark(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "W3 to Northumberland Park";
  BackDestination.setAttribute( "onClick", "BusTerminatesHereW3();" );
  NextDestination.setAttribute( "onClick", "TollingtonParkW3();" );
}

function ibus792EastHam(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "792 to East Ham, Central Park";
  BackDestination.setAttribute( "onClick", "BusTerminatesHereW3();" );
  NextDestination.setAttribute( "onClick", "ClaptonPond792();" );
}
function LeaBridgeRoundabout792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lea Bridge Roundabout";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere792();" );
  NextDestination.setAttribute( "onClick", "ClaptonPond792();" );
}
function ClaptonPond792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Clapton Pond";
  BackDestination.setAttribute( "onClick", "LeaBridgeRoundabout792();" );
  NextDestination.setAttribute( "onClick", "MillfieldsRoad792();" );
}
function MillfieldsRoad792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Millfields Road";
  BackDestination.setAttribute( "onClick", "ClaptonPond792();" );
  NextDestination.setAttribute( "onClick", "ClaptonGirlsAcademy792();" );
}
function ClaptonGirlsAcademy792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Clapton Girls' Academy";
  BackDestination.setAttribute( "onClick", "ClaptonPond792();" );
  NextDestination.setAttribute( "onClick", "JackDunningEstate792();" );
}
function GlenarmRoad792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Glenarm Road";
  BackDestination.setAttribute( "onClick", "ClaptonGirlsAcademy792();" );
  NextDestination.setAttribute( "onClick", "JackDunningEstate792();" );
}
function JackDunningEstate792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Jack Dunning Estate";
  BackDestination.setAttribute( "onClick", "GlenarmRoad792();" );
  NextDestination.setAttribute( "onClick", "TheCityAcademy792();" );
}
function TheCityAcademy792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The City Academy";
  BackDestination.setAttribute( "onClick", "JackDunningEstate792();" );
  NextDestination.setAttribute( "onClick", "FennStreet792();" );
}
function FennStreet792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Fenn Street";
  BackDestination.setAttribute( "onClick", "TheCityAcademy792();" );
  NextDestination.setAttribute( "onClick", "HomertonHospitalHomertonRow792();" );
}
function HomertonHospitalHomertonRow792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Homerton Hospital / Homerton Row";
  BackDestination.setAttribute( "onClick", "FennStreet792();" );
  NextDestination.setAttribute( "onClick", "HomertonHospitalWardleStreet792();" );
}
function HomertonHospitalWardleStreet792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Homerton Hospital / Wardle Street";
  BackDestination.setAttribute( "onClick", "HomertonHospitalHomertonRow792();" );
  NextDestination.setAttribute( "onClick", "GlynRoad792();" );
}
function BanisterHouse792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Banister House";
  BackDestination.setAttribute( "onClick", "TheCityAcademy792();" );
  NextDestination.setAttribute( "onClick", "HomertonHospital792();" );
}
function HomertonHospital792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Homerton Hospital";
  BackDestination.setAttribute( "onClick", "BanisterHouse792();" );
  NextDestination.setAttribute( "onClick", "BrooksbysWalkHomertonStation792();" );
}
function BrooksbysWalkHomertonStation792(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Brooksby's Walk / Homerton Station";
  BackDestination.setAttribute( "onClick", "HomertonHospital792();" );
  NextDestination.setAttribute( "onClick", "GlynRoad792();" );
  topTextYes.style.animationName = "BrooksbyWalkHomertonStation";
}
function GlynRoad792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Glyn Road";
  BackDestination.setAttribute( "onClick", "BrooksbysWalkHomertonStation792();" );
  NextDestination.setAttribute( "onClick", "AdleyStreet792();" );
}
function AdleyStreet792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Adley Street";
  BackDestination.setAttribute( "onClick", "GlynRoad792();" );
  NextDestination.setAttribute( "onClick", "KingsmeadEstate792();" );
}
function MarshHill792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Marsh Hill";
  BackDestination.setAttribute( "onClick", "GlynRoad792();" );
  NextDestination.setAttribute( "onClick", "KingsmeadEstate792();" );
}
function KingsmeadEstate792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Kingsmead Estate";
  BackDestination.setAttribute( "onClick", "MarshHill792();" );
  NextDestination.setAttribute( "onClick", "HackneyMarshPlayingFields792();" );
}
function HackneyMarshPlayingFields792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hackney Marsh Playing Fields";
  BackDestination.setAttribute( "onClick", "KingsmeadEstate792();" );
  NextDestination.setAttribute( "onClick", "HackneyMarsh792();" );
}
function HackneyMarsh792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hackney Marsh";
  BackDestination.setAttribute( "onClick", "HackneyMarshPlayingFields792();" );
  NextDestination.setAttribute( "onClick", "TheCopperBox792();" );
}
function TheCopperBox792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The Copper Box";
  BackDestination.setAttribute( "onClick", "HackneyMarsh792();" );
  NextDestination.setAttribute( "onClick", "WestfieldAvenue792();" );
}
function WestfieldAvenue792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Westfield Avenue";
  BackDestination.setAttribute( "onClick", "TheCopperBox792();" );
  NextDestination.setAttribute( "onClick", "LondonAquaticsCentre792();" );
}
function LondonAquaticsCentre792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "London Aquatics Centre";
  BackDestination.setAttribute( "onClick", "WestfieldAvenue792();" );
  NextDestination.setAttribute( "onClick", "CarpentersPrimarySchool792();" );
}
function CarpentersPrimarySchool792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Carpenters Primary School";
  BackDestination.setAttribute( "onClick", "LondonAquaticsCentre792();" );
  NextDestination.setAttribute( "onClick", "StratfordHighStStnCarpentersRd792();" );
}
function StratfordHighStStnCarpentersRd792(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Stratford High St Stn / Carpenters Rd";
  BackDestination.setAttribute( "onClick", "CarpentersPrimarySchool792();" );
  NextDestination.setAttribute( "onClick", "StratfordBusStation792();" );
  topTextYes.style.animationName = "StratfordHighStStnCarpentersRd";
}
function GibbinsRoad792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Gibbins Road";
  BackDestination.setAttribute( "onClick", "LondonAquaticsCentre792();" );
  NextDestination.setAttribute( "onClick", "StratfordHighStCarpentersRoad792();" );
}
function StratfordHighStCarpentersRoad792(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Stratford High St / Carpenters Road";
  BackDestination.setAttribute( "onClick", "GibbinsRoad792();" );
  NextDestination.setAttribute( "onClick", "StratfordBusStation792();" );
  topTextYes.style.animationName = "StratfordHighStCarpentersRoad";
}
function StratfordBusStation792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Stratford Bus Station";
  BackDestination.setAttribute( "onClick", "StratfordHighStCarpentersRoad792();" );
  NextDestination.setAttribute( "onClick", "LitchfieldAvenue792();" );
}
function LitchfieldAvenue792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Litchfield Avenue";
  BackDestination.setAttribute( "onClick", "StratfordBusStation792();" );
  NextDestination.setAttribute( "onClick", "WaterLaneUniversityOfEastLondon792();" );
}
function StratfordCentre792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Stratford Centre";
  BackDestination.setAttribute( "onClick", "StratfordBusStation792();" );
  NextDestination.setAttribute( "onClick", "WaterLaneUniversityOfEastLondon792();" );
}
function WaterLaneUniversityOfEastLondon792(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Water Lane / University Of East London";
  BackDestination.setAttribute( "onClick", "StratfordCentre792();" );
  NextDestination.setAttribute( "onClick", "AthertonLeisureCentre792();" );
  topTextYes.style.animationName = "WaterLaneUniversityOfEastLondon";
}
function AthertonLeisureCentre792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Atherton Leisure Centre";
  BackDestination.setAttribute( "onClick", "WaterLaneUniversityOfEastLondon792();" );
  NextDestination.setAttribute( "onClick", "MargeryParkRoad792();" );
}
function MargeryParkRoad792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Margery Park Road";
  BackDestination.setAttribute( "onClick", "AthertonLeisureCentre792();" );
  NextDestination.setAttribute( "onClick", "WoodgrangeRoad792();" );
}
function SprowstonRoad792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Sprowston Road";
  BackDestination.setAttribute( "onClick", "MargeryParkRoad792();" );
  NextDestination.setAttribute( "onClick", "WoodgrangeRoad792();" );
}
function WoodgrangeRoad792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Woodgrange Road";
  BackDestination.setAttribute( "onClick", "SprowstonRoad792();" );
  NextDestination.setAttribute( "onClick", "GreenStreet792();" );
}
function GreenStreet792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Green Street";
  BackDestination.setAttribute( "onClick", "WoodgrangeRoad792();" );
  NextDestination.setAttribute( "onClick", "KatherineRoad792();" );
}
function KatherineRoad792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Katherine Road";
  BackDestination.setAttribute( "onClick", "GreenStreet792();" );
  NextDestination.setAttribute( "onClick", "ShrewsburyRoad792();" );
}
function ShrewsburyRoad792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Shrewsbury Road";
  BackDestination.setAttribute( "onClick", "KatherineRoad792();" );
  NextDestination.setAttribute( "onClick", "WoodgrangeParkStation792();" );
}
function WoodgrangeParkStation792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Woodgrange Park Station";
  BackDestination.setAttribute( "onClick", "ShrewsburyRoad792();" );
  NextDestination.setAttribute( "onClick", "HighStreetNorth792();" );
}
function HighStreetNorth792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "High Street North";
  BackDestination.setAttribute( "onClick", "WoodgrangeParkStation792();" );
  NextDestination.setAttribute( "onClick", "CranbourneRoad792();" );
}
function CranbourneRoad792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Cranbourne Road";
  BackDestination.setAttribute( "onClick", "HighStreetNorth792();" );
  NextDestination.setAttribute( "onClick", "BerkeleyRoad792();" );
}
function RomfordRoad792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Romford Road";
  BackDestination.setAttribute( "onClick", "WoodgrangeParkStation792();" );
  NextDestination.setAttribute( "onClick", "BerkeleyRoad792();" );
}
function BerkeleyRoad792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Berkeley Road";
  BackDestination.setAttribute( "onClick", "RomfordRoad792();" );
  NextDestination.setAttribute( "onClick", "RuskinAvenue792();" );
}
function RuskinAvenue792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ruskin Avenue";
  BackDestination.setAttribute( "onClick", "BerkeleyRoad792();" );
  NextDestination.setAttribute( "onClick", "ShelleyAvenue792();" );
}
function ShelleyAvenue792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Shelley Avenue";
  BackDestination.setAttribute( "onClick", "RuskinAvenue792();" );
  NextDestination.setAttribute( "onClick", "GladstoneAvenue792();" );
}
function GladstoneAvenue792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Gladstone Avenue";
  BackDestination.setAttribute( "onClick", "ShelleyAvenue792();" );
  NextDestination.setAttribute( "onClick", "EastHamStation792();" );
}
function EastHamStation792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "East Ham Station";
  BackDestination.setAttribute( "onClick", "GladstoneAvenue792();" );
  NextDestination.setAttribute( "onClick", "BendishRoad792();" );
}
function BendishRoad792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bendish Road";
  BackDestination.setAttribute( "onClick", "EastHamStation792();" );
  NextDestination.setAttribute( "onClick", "RonLeightonWay792();" );
}
function RonLeightonWay792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ron Leighton Way";
  BackDestination.setAttribute( "onClick", "BendishRoad792();" );
  NextDestination.setAttribute( "onClick", "HighStreetNorth2nd792();" );
}
function HighStreetNorth2nd792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "High Street North";
  BackDestination.setAttribute( "onClick", "RonLeightonWay792();" );
  NextDestination.setAttribute( "onClick", "NewhamTownHall792();" );
}
function CaledonRoad792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Caledon Road";
  BackDestination.setAttribute( "onClick", "BendishRoad792();" );
  NextDestination.setAttribute( "onClick", "KemptonRoad792();" );
}
function KemptonRoad792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Kempton Road";
  BackDestination.setAttribute( "onClick", "CaledonRoad792();" );
  NextDestination.setAttribute( "onClick", "NewhamTownHall792();" );
}
function NewhamTownHall792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Newham Town Hall";
  BackDestination.setAttribute( "onClick", "KemptonRoad792();" );
  NextDestination.setAttribute( "onClick", "MarketStreet792();" );
}
function MarketStreet792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Market Street";
  BackDestination.setAttribute( "onClick", "NewhamTownHall792();" );
  NextDestination.setAttribute( "onClick", "EastHamCentralPark792();" );
}
function TilburyRoad792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Tilbury Road";
  BackDestination.setAttribute( "onClick", "NewhamTownHall792();" );
  NextDestination.setAttribute( "onClick", "EastHamCentralPark792();" );
}
function EastHamCentralPark792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "East Ham / Central Park";
  BackDestination.setAttribute( "onClick", "TilburyRoad792();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere792();" );
}
function BusTerminatesHere792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bus Terminates Here";
  BackDestination.setAttribute( "onClick", "EastHamCentralPark792();" );
  NextDestination.setAttribute( "onClick", "ibus792Clapton();" );
}
function ibus792Clapton(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "792 to Clapton";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere792();" );
  NextDestination.setAttribute( "onClick", "EastHamCentralPark792();" );
}

function ibus232TurnpikeLaneStation(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "232 to Turnpike Lane Station";
  NextDestination.setAttribute( "onClick", "LilburneWalk232();" );
}
function MitchellWay232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mitchell Way";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere232();" );
  NextDestination.setAttribute( "onClick", "LilburneWalk232();" );
}
function LilburneWalk232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lilburne Walk";
  BackDestination.setAttribute( "onClick", "MitchellWay232();" );
  NextDestination.setAttribute( "onClick", "OwenWay232();" );
}
function OwenWay232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Owen Way";
  BackDestination.setAttribute( "onClick", "LilburneWalk232();" );
  NextDestination.setAttribute( "onClick", "LovettWay232();" );
}
function LovettWay232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lovett Way";
  BackDestination.setAttribute( "onClick", "OwenWay232();" );
  NextDestination.setAttribute( "onClick", "WoodheyesRoad232();" );
}
function WoodheyesRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Woodheyes Road";
  BackDestination.setAttribute( "onClick", "LovettWay232();" );
  NextDestination.setAttribute( "onClick", "VillageWay232();" );
}
function IkeaBrentPark232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ikea Brent Park";
  BackDestination.setAttribute( "onClick", "LovettWay232();" );
  NextDestination.setAttribute( "onClick", "BrentParkTesco232();" );
}
function BrentParkTesco232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brent Park Tesco";
  BackDestination.setAttribute( "onClick", "IkeaBrentPark232();" );
  NextDestination.setAttribute( "onClick", "YeatsClose232();" );
}
function YeatsClose232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Yeats Close";
  BackDestination.setAttribute( "onClick", "BrentParkTesco232();" );
  NextDestination.setAttribute( "onClick", "VillageWay232();" );
}
function VillageWay232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Village Way";
  BackDestination.setAttribute( "onClick", "YeatsClose232();" );
  NextDestination.setAttribute( "onClick", "WinslowClose232();" );
}
function WinslowClose232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Winslow Close";
  BackDestination.setAttribute( "onClick", "VillageWay232();" );
  NextDestination.setAttribute( "onClick", "NeasdenShoppingCentreBirseCrescent232();" );
}
function NeasdenShoppingCentreBirseCrescent232(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Neasden Shopping Centre / Birse Crescent";
  BackDestination.setAttribute( "onClick", "WinslowClose232();" );
  NextDestination.setAttribute( "onClick", "StCatherineNeasdenChurch232();" );
  topTextYes.style.animationName = "NeasdenShoppingCentreBirseCrescent";
}
function NeasdenUnderpass232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Neasden Underpass";
  BackDestination.setAttribute( "onClick", "VillageWay232();" );
  NextDestination.setAttribute( "onClick", "StCatherineNeasdenChurch232();" );
}
function StCatherineNeasdenChurch232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Catherine Neasden Church";
  BackDestination.setAttribute( "onClick", "NeasdenUnderpass232();" );
  NextDestination.setAttribute( "onClick", "RandallAvenue232();" );
}
function RandallAvenue232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Randall Avenue";
  BackDestination.setAttribute( "onClick", "StCatherineNeasdenChurch232();" );
  NextDestination.setAttribute( "onClick", "GladstonePark232();" );
}
function GladstonePark232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Gladstone Park";
  BackDestination.setAttribute( "onClick", "RandallAvenue232();" );
  NextDestination.setAttribute( "onClick", "BrookRoad232();" );
}
function BrookRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brook Road";
  BackDestination.setAttribute( "onClick", "GladstonePark232();" );
  NextDestination.setAttribute( "onClick", "PippinClose232();" );
}
function PippinClose232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Pippin Close";
  BackDestination.setAttribute( "onClick", "BrookRoad232();" );
  NextDestination.setAttribute( "onClick", "OxgateGardens232();" );
}
function OxgateGardens232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Oxgate Gardens";
  BackDestination.setAttribute( "onClick", "PippinClose232();" );
  NextDestination.setAttribute( "onClick", "HumberRoad232();" );
}
function Parkside232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Parkside";
  BackDestination.setAttribute( "onClick", "BrookRoad232();" );
  NextDestination.setAttribute( "onClick", "NewfieldRise232();" );
}
function NewfieldRise232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Newfield Rise";
  BackDestination.setAttribute( "onClick", "Parkside232();" );
  NextDestination.setAttribute( "onClick", "HumberRoad232();" );
}
function HumberRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Humber Road";
  BackDestination.setAttribute( "onClick", "NewfieldRise232();" );
  NextDestination.setAttribute( "onClick", "OxgateLane232();" );
}
function OxgateLane232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Oxgate Lane";
  BackDestination.setAttribute( "onClick", "HumberRoad232();" );
  NextDestination.setAttribute( "onClick", "StaplesCorner232();" );
}
function EyhurstClose232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Eyhurst Close";
  BackDestination.setAttribute( "onClick", "HumberRoad232();" );
  NextDestination.setAttribute( "onClick", "ColesGreenRoad232();" );
}
function ColesGreenRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Coles Green Road";
  BackDestination.setAttribute( "onClick", "EyhurstClose232();" );
  NextDestination.setAttribute( "onClick", "StaplesCorner232();" );
}
function StaplesCorner232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Staples Corner";
  BackDestination.setAttribute( "onClick", "ColesGreenRoad232();" );
  NextDestination.setAttribute( "onClick", "EtheridgeRoad232();" );
}
function EtheridgeRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Etheridge Road";
  BackDestination.setAttribute( "onClick", "StaplesCorner232();" );
  NextDestination.setAttribute( "onClick", "BrentCrossShoppingCentre232();" );
}
function TillingRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Tilling Road";
  BackDestination.setAttribute( "onClick", "StaplesCorner232();" );
  NextDestination.setAttribute( "onClick", "BrentCrossShoppingCentre232();" );
}
function BrentCrossShoppingCentre232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brent Cross Shopping Centre";
  BackDestination.setAttribute( "onClick", "TillingRoad232();" );
  NextDestination.setAttribute( "onClick", "HeathfieldGardens232();" );
}
function HeathfieldGardens232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Heathfield Gardens";
  BackDestination.setAttribute( "onClick", "BrentCrossShoppingCentre232();" );
  NextDestination.setAttribute( "onClick", "GoldersGreenRoad232();" );
}
function PrinceCharlesDrive232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Prince Charles Drive";
  BackDestination.setAttribute( "onClick", "BrentCrossShoppingCentre232();" );
  NextDestination.setAttribute( "onClick", "BrentCrossStation232();" );
}
function BrentCrossStation232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brent Cross Station";
  BackDestination.setAttribute( "onClick", "PrinceCharlesDrive232();" );
  NextDestination.setAttribute( "onClick", "GoldersGreenRoad232();" );
}
function GoldersGreenRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Golders Green Road";
  BackDestination.setAttribute( "onClick", "BrentCrossStation232();" );
  NextDestination.setAttribute( "onClick", "BridgeLane232();" );
}
function BridgeLane232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bridge Lane";
  BackDestination.setAttribute( "onClick", "GoldersGreenRoad232();" );
  NextDestination.setAttribute( "onClick", "SouthbourneCrescent232();" );
}
function SouthbourneCrescent232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Southbourne Crescent";
  BackDestination.setAttribute( "onClick", "BridgeLane232();" );
  NextDestination.setAttribute( "onClick", "HenlysCorner232();" );
}
function HenlysCorner232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Henlys Corner";
  BackDestination.setAttribute( "onClick", "SouthbourneCrescent232();" );
  NextDestination.setAttribute( "onClick", "BeechwoodAvenue232();" );
}
function BeechwoodAvenue232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Beechwood Avenue";
  BackDestination.setAttribute( "onClick", "HenlysCorner232();" );
  NextDestination.setAttribute( "onClick", "AmberdenAvenue232();" );
}
function AmberdenAvenue232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Amberden Avenue";
  BackDestination.setAttribute( "onClick", "BeechwoodAvenue232();" );
  NextDestination.setAttribute( "onClick", "EastEndRoad232();" );
}
function BeechwoodDrive232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Beechwood Drive";
  BackDestination.setAttribute( "onClick", "HenlysCorner232();" );
  NextDestination.setAttribute( "onClick", "EastEndRoad232();" );
}
function EastEndRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "East End Road";
  BackDestination.setAttribute( "onClick", "BeechwoodDrive232();" );
  NextDestination.setAttribute( "onClick", "LongLane232();" );
}
function LongLane232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Long Lane";
  BackDestination.setAttribute( "onClick", "EastEndRoad232();" );
  NextDestination.setAttribute( "onClick", "FinchleyHighRoad232();" );
}
function FinchleyHighRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Finchley High Road";
  BackDestination.setAttribute( "onClick", "LongLane232();" );
  NextDestination.setAttribute( "onClick", "CoppettsClose232();" );
}
function CoppettsClose232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Coppetts Close";
  BackDestination.setAttribute( "onClick", "FinchleyHighRoad232();" );
  NextDestination.setAttribute( "onClick", "ColneyHatchLane232();" );
}
function ColneyHatchLane232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Colney Hatch Lane";
  BackDestination.setAttribute( "onClick", "CoppettsClose232();" );
  NextDestination.setAttribute( "onClick", "AlexandraRoad232();" );
}
function AlexandraRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Alexandra Road";
  BackDestination.setAttribute( "onClick", "ColneyHatchLane232();" );
  NextDestination.setAttribute( "onClick", "BoundsGreenRoad232();" );
}
function BoundsGreenRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bounds Green Road";
  BackDestination.setAttribute( "onClick", "AlexandraRoad232();" );
  NextDestination.setAttribute( "onClick", "HobartCorner232();" );
}
function HobartCorner232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hobart Corner";
  BackDestination.setAttribute( "onClick", "AlexandraRoad232();" );
  NextDestination.setAttribute( "onClick", "LowerParkRoad232();" );
}
function LowerParkRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lower Park Road";
  BackDestination.setAttribute( "onClick", "HobartCorner232();" );
  NextDestination.setAttribute( "onClick", "WhitmoreClose232();" );
}
function WhitmoreClose232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Whitmore Close";
  BackDestination.setAttribute( "onClick", "LowerParkRoad232();" );
  NextDestination.setAttribute( "onClick", "NewSouthgateStation232();" );
}
function NewSouthgateStation232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "New Southgate Station";
  BackDestination.setAttribute( "onClick", "WhitmoreClose232();" );
  NextDestination.setAttribute( "onClick", "BetstyleRoad232();" );
}
function BetstyleRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Betstyle Road";
  BackDestination.setAttribute( "onClick", "NewSouthgateStation232();" );
  NextDestination.setAttribute( "onClick", "ArnosGroveStation232();" );
}
function BetstyleCircus232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Betstyle Circus";
  BackDestination.setAttribute( "onClick", "NewSouthgateStation232();" );
  NextDestination.setAttribute( "onClick", "RavenscraigRoad232();" );
}
function RavenscraigRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ravenscraig Road";
  BackDestination.setAttribute( "onClick", "BetstyleCircus232();" );
  NextDestination.setAttribute( "onClick", "ArnosGroveStation232();" );
}
function ArnosGroveStation232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Arnos Grove Station";
  BackDestination.setAttribute( "onClick", "RavenscraigRoad232();" );
  NextDestination.setAttribute( "onClick", "TelfordRoad232();" );
}
function TelfordRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Telford Road";
  BackDestination.setAttribute( "onClick", "ArnosGroveStation232();" );
  NextDestination.setAttribute( "onClick", "BrownlowRoad232();" );
}
function BrownlowRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brownlow Road";
  BackDestination.setAttribute( "onClick", "TelfordRoad232();" );
  NextDestination.setAttribute( "onClick", "PymmesRoad232();" );
}
function ArnosGroveSwimmingPool232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Arnos Grove Swimming Pool";
  BackDestination.setAttribute( "onClick", "ArnosGroveStation232();" );
  NextDestination.setAttribute( "onClick", "WarwickRoad232();" );
}
function WarwickRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Warwick Road";
  BackDestination.setAttribute( "onClick", "ArnosGroveSwimmingPool232();" );
  NextDestination.setAttribute( "onClick", "PymmesRoad232();" );
}
function PymmesRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Pymmes Road";
  BackDestination.setAttribute( "onClick", "WarwickRoad232();" );
  NextDestination.setAttribute( "onClick", "TottenhallRoad232();" );
}
function PalmerstonRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Palmerston Road";
  BackDestination.setAttribute( "onClick", "PymmesRoad232();" );
  NextDestination.setAttribute( "onClick", "TottenhallRoad232();" );
}
function TottenhallRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Tottenhall Road";
  BackDestination.setAttribute( "onClick", "PalmerstonRoad232();" );
  NextDestination.setAttribute( "onClick", "BerkshireGardens232();" );
}
function BerkshireGardens232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Berkshire Gardens";
  BackDestination.setAttribute( "onClick", "TottenhallRoad232();" );
  NextDestination.setAttribute( "onClick", "ArcadianGardens232();" );
}
function ArcadianGardens232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Arcadian Gardens";
  BackDestination.setAttribute( "onClick", "BerkshireGardens232();" );
  NextDestination.setAttribute( "onClick", "NightingaleRoad232();" );
}
function NightingaleRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Nightingale Road";
  BackDestination.setAttribute( "onClick", "ArcadianGardens232();" );
  NextDestination.setAttribute( "onClick", "CanningCrescent232();" );
}
function CanningCrescent232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Canning Crescent";
  BackDestination.setAttribute( "onClick", "NightingaleRoad232();" );
  NextDestination.setAttribute( "onClick", "HaringeyCivicCentre232();" );
}
function HaringeyCivicCentre232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Haringey Civic Centre";
  BackDestination.setAttribute( "onClick", "NightingaleRoad232();" );
  NextDestination.setAttribute( "onClick", "WoodGreenStation232();" );
}
function WoodGreenBusGarage232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wood Green Bus Garage";
  BackDestination.setAttribute( "onClick", "HaringeyCivicCentre232();" );
  NextDestination.setAttribute( "onClick", "WoodGreenStation232();" );
}
function WoodGreenStation232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wood Green Station";
  BackDestination.setAttribute( "onClick", "WoodGreenBusGarage232();" );
  NextDestination.setAttribute( "onClick", "WoodGreenShoppingCity232();" );
}
function WoodGreenShoppingCity232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wood Green Shopping City";
  BackDestination.setAttribute( "onClick", "WoodGreenStation232();" );
  NextDestination.setAttribute( "onClick", "BramptonParkRoad232();" );
}
function BramptonParkRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brampton Park Road";
  BackDestination.setAttribute( "onClick", "WoodGreenShoppingCity232();" );
  NextDestination.setAttribute( "onClick", "ColeraineRoad232();" );
}
function ColeraineRoad232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Coleraine Road";
  BackDestination.setAttribute( "onClick", "WoodGreenShoppingCity232();" );
  NextDestination.setAttribute( "onClick", "TurnpikeLaneStationi232();" );
}
function TurnpikeLaneStationi232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Turnpike Lane Station";
  BackDestination.setAttribute( "onClick", "ColeraineRoad232();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere232();" );
}
function BusTerminatesHere232(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bus Terminates Here";
  BackDestination.setAttribute( "onClick", "TurnpikeLaneStationi232();" );
}
function ibus232StRaphael(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "232 to St Raphael's";
  NextDestination.setAttribute( "onClick", "ColeraineRoad232();" );
}
