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
function ClaptonPond792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Clapton Pond";
  BackDestination.setAttribute( "onClick", "ibus792EastHam();" );
  NextDestination.setAttribute( "onClick", "MillfieldsRoad792();" );
}
function MillfieldsRoad792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Millfields Road";
  BackDestination.setAttribute( "onClick", "ClaptonPond792();" );
  NextDestination.setAttribute( "onClick", "ClaptonGirlsTechCollege792();" );
}
function ClaptonGirlsTechCollege792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Clapton Girls' Tech College";
  BackDestination.setAttribute( "onClick", "MillfieldsRoad792();" );
  NextDestination.setAttribute( "onClick", "JackDunningEstate792();" );
}
function JackDunningEstate792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Jack Dunning Estate";
  BackDestination.setAttribute( "onClick", "ClaptonGirlsTechCollege792();" );
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
function GlynRoad792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Glyn Road";
  BackDestination.setAttribute( "onClick", "HomertonHospitalWardleStreet792();" );
  NextDestination.setAttribute( "onClick", "AdleyStreet792();" );
}
function AdleyStreet792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Adley Street";
  BackDestination.setAttribute( "onClick", "GlynRoad792();" );
  NextDestination.setAttribute( "onClick", "KingsmeadEstate792();" );
}
function KingsmeadEstate792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Kingsmead Estate";
  BackDestination.setAttribute( "onClick", "AdleyStreet792();" );
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
function StratfordBusStation792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Stratford Bus Station";
  BackDestination.setAttribute( "onClick", "StratfordHighStStnCarpentersRd792();" );
  NextDestination.setAttribute( "onClick", "LitchfieldAvenue792();" );
}
function LitchfieldAvenue792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Litchfield Avenue";
  BackDestination.setAttribute( "onClick", "StratfordBusStation792();" );
  NextDestination.setAttribute( "onClick", "WaterLaneUniversityOfEastLondon792();" );
}
function WaterLaneUniversityOfEastLondon792(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Water Lane / University Of East London";
  BackDestination.setAttribute( "onClick", "LitchfieldAvenue792();" );
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
function WoodgrangeRoad792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Woodgrange Road";
  BackDestination.setAttribute( "onClick", "MargeryParkRoad792();" );
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
function BerkeleyRoad792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Berkeley Road";
  BackDestination.setAttribute( "onClick", "CranbourneRoad792();" );
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
function NewhamTownHall792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Newham Town Hall";
  BackDestination.setAttribute( "onClick", "HighStreetNorth2nd792();" );
  NextDestination.setAttribute( "onClick", "MarketStreet792();" );
}
function MarketStreet792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Market Street";
  BackDestination.setAttribute( "onClick", "NewhamTownHall792();" );
  NextDestination.setAttribute( "onClick", "EastHamCentralPark792();" );
}
function EastHamCentralPark792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "East Ham / Central Park";
  BackDestination.setAttribute( "onClick", "MarketStreet792();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere792();" );
}
function BusTerminatesHere792(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bus Terminates Here";
  BackDestination.setAttribute( "onClick", "EastHamCentralPark792();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere792();" );
}
