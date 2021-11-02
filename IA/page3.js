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

function TrafalgarSquareN550btn(){
  ibusN550TrafalgarSquare()
  showDestination.setAttribute( "onClick", "TrafalgarSquareN550ibus();" );
}
function CanningTownN550btn(){
  ibusN550CanningTown()
  showDestination.setAttribute( "onClick", "CanningTownN550ibus();" );
}
function TrafalgarSquareN551btn(){
  ibusN551TrafalgarSquare()
  showDestination.setAttribute( "onClick", "TrafalgarSquareN551ibus();" );
}
function GallionsReachN551btn(){
  ibusN551GallionsReach()
  showDestination.setAttribute( "onClick", "GallionsReachN551ibus();" );
}
function Mitcham200btn(){
  LambtonRoad200()
  showDestination.setAttribute( "onClick", "Mitcham200ibus();" );
}
function RaynesPark200btn(){
  MitchamFairGreen200()
  showDestination.setAttribute( "onClick", "RaynesPark200ibus();" );
}


function TrafalgarSquareN550ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "N550 To Trafalgar Square";
}
function CanningTownN550ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "N550 To Canning Town";
}
function TrafalgarSquareN551ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "N551 To Trafalgar Square";
}
function GallionsReachN551ibus(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "N551 To Gallions Reach, Shopping Park";
  topTextYes.style.animationName = "GallionsReachShoppingParkN551";
}
function Mitcham200ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "200 To Mitcham";
}
function RaynesPark200ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "200 To Raynes Park";
}

function BusTerminatesHere(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Bus Terminates Here. Take Your Belongings";
  topTextYes.style.animationName = "BusTerminatesHerenew";
}

function ibusN550TrafalgarSquare(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "N550 To Trafalgar Square";
  // BackDestination.setAttribute( "onClick", "MileEnd702();" );
  NextDestination.setAttribute( "onClick", "CanningTownBusStationN550();" );
}
function CanningTownBusStationN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Canning Town Bus Station";
  // BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "LeamouthOrchardPlaceN550();" );
}
function CanningTownStationN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Canning Town Station";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "StephensonStreetN550();" );
}
function StephensonStreetN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Stephenson Street";
  BackDestination.setAttribute( "onClick", "CanningTownStationN550();" );
  NextDestination.setAttribute( "onClick", "LeamouthOrchardPlaceN550();" );
}
function LeamouthOrchardPlaceN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Leamouth / Orchard Place";
  BackDestination.setAttribute( "onClick", "StephensonStreetN550();" );
  NextDestination.setAttribute( "onClick", "LeamouthRoadN550();" );
}
function LeamouthRoadN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Leamouth Road";
  BackDestination.setAttribute( "onClick", "LeamouthOrchardPlaceN550();" );
  NextDestination.setAttribute( "onClick", "EastIndiaStationN550();" );
}
function EastIndiaStationN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "East India Station";
  BackDestination.setAttribute( "onClick", "LeamouthRoadN550();" );
  NextDestination.setAttribute( "onClick", "BaffinWayN550();" );
}
function BaffinWayN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Baffin Way";
  BackDestination.setAttribute( "onClick", "EastIndiaStationN550();" );
  NextDestination.setAttribute( "onClick", "AspenWayN550();" );
}
function AspenWayN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Aspen Way";
  BackDestination.setAttribute( "onClick", "BaffinWayN550();" );
  NextDestination.setAttribute( "onClick", "ColdharbourN550();" );
}
function ColdharbourN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Coldharbour";
  BackDestination.setAttribute( "onClick", "AspenWayN550();" );
  NextDestination.setAttribute( "onClick", "StewartStreetN550();" );
}
function TheBlueBridgeN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "The Blue Bridge";
  BackDestination.setAttribute( "onClick", "ColdharbourN550();" );
  NextDestination.setAttribute( "onClick", "StewartStreetN550();" );
}
function StewartStreetN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Stewart Street";
  BackDestination.setAttribute( "onClick", "TheBlueBridgeN550();" );
  NextDestination.setAttribute( "onClick", "StJohnParkN550();" );
}
function StJohnParkN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "St John's Park";
  BackDestination.setAttribute( "onClick", "StewartStreetN550();" );
  NextDestination.setAttribute( "onClick", "CubbitTownSchoolN550();" );
}
function CubbitTownSchoolN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Cubbit Town School";
  BackDestination.setAttribute( "onClick", "StJohnParkN550();" );
  NextDestination.setAttribute( "onClick", "PierStreetN550();" );
}
function PierStreetN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Pier Street";
  BackDestination.setAttribute( "onClick", "CubbitTownSchoolN550();" );
  NextDestination.setAttribute( "onClick", "IsleOfDogsPoliceStationN550();" );
}
function IsleOfDogsPoliceStationN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Isle Of Dogs Police Station";
  BackDestination.setAttribute( "onClick", "PierStreetN550();" );
  NextDestination.setAttribute( "onClick", "IslandGardensStationN550();" );
}
function GeorgeGreenSchoolN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "George Green's School";
  BackDestination.setAttribute( "onClick", "IsleOfDogsPoliceStationN550();" );
  NextDestination.setAttribute( "onClick", "IslandGardensStationN550();" );
}
function IslandGardensStationN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Island Gardens Station";
  BackDestination.setAttribute( "onClick", "GeorgeGreenSchoolN550();" );
  NextDestination.setAttribute( "onClick", "EastFerryRoadN550();" );
}
function EastFerryRoadN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "East Ferry Road";
  BackDestination.setAttribute( "onClick", "IslandGardensStationN550();" );
  NextDestination.setAttribute( "onClick", "LangbournePlaceN550();" );
}
function LangbournePlaceN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Langbourne Place";
  BackDestination.setAttribute( "onClick", "EastFerryRoadN550();" );
  NextDestination.setAttribute( "onClick", "HarbingerSchoolMasthouseTerPierN550();" );
}
function MaconochiesRoadN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Maconochies Road";
  BackDestination.setAttribute( "onClick", "EastFerryRoadN550();" );
  NextDestination.setAttribute( "onClick", "HarbingerSchoolMasthouseTerPierN550();" );
}
function HarbingerSchoolMasthouseTerPierN550(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Harbinger School / Masthouse Ter. Pier";
  BackDestination.setAttribute( "onClick", "MaconochiesRoadN550();" );
  NextDestination.setAttribute( "onClick", "StEdmundsSchoolN550();" );
  topTextYes.style.animationName = "HarbingerSchoolMasthouseTerPier";
}
function StEdmundsSchoolN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "St Edmund's School";
  BackDestination.setAttribute( "onClick", "HarbingerSchoolMasthouseTerPierN550();" );
  NextDestination.setAttribute( "onClick", "CrewsStreetN550();" );
}
function CrewsStreetN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Crews Street";
  BackDestination.setAttribute( "onClick", "StEdmundsSchoolN550();" );
  NextDestination.setAttribute( "onClick", "ArnhemWharfPrimarySchoolN550();" );
}
function CrewsStreetTheSpaceTheatreN5505(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Crews Street / The Space Theatre";
  BackDestination.setAttribute( "onClick", "StEdmundsSchoolN550();" );
  NextDestination.setAttribute( "onClick", "ArnhemWharfPrimarySchoolN550();" );
}
function ArnhemWharfPrimarySchoolN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Arnhem Wharf Primary School";
  BackDestination.setAttribute( "onClick", "CrewsStreetTheSpaceTheatreN5505();" );
  NextDestination.setAttribute( "onClick", "SirJohnMcdougallGardensN550();" );
}
function SirJohnMcdougallGardensN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Sir John Mcdougall Gardens";
  BackDestination.setAttribute( "onClick", "ArnhemWharfPrimarySchoolN550();" );
  NextDestination.setAttribute( "onClick", "BarkantineClinicHutchingsStreetN550();" );
}
function BarkantineClinicHutchingsStreetN550(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Barkantine Clinic / Hutchings Street";
  BackDestination.setAttribute( "onClick", "SirJohnMcdougallGardensN550();" );
  NextDestination.setAttribute( "onClick", "ByngStreetN550();" );
  topTextYes.style.animationName = "BarkantineClinicHutchingsStreet";
}
function ByngStreetN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Byng Street";
  BackDestination.setAttribute( "onClick", "BarkantineClinicHutchingsStreetN550();" );
  NextDestination.setAttribute( "onClick", "MarshWallHeronQuayN550();" );
}
function CubaStreetN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Cuba Street";
  BackDestination.setAttribute( "onClick", "BarkantineClinicHutchingsStreetN550();" );
  NextDestination.setAttribute( "onClick", "MarshWallHeronQuayN550();" );
}
function MarshWallHeronQuayN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Marsh Wall / Heron Quay";
  BackDestination.setAttribute( "onClick", "CubaStreetN550();" );
  NextDestination.setAttribute( "onClick", "CanaryWharfStationN550();" );
}
function CanaryWharfStationN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Canary Wharf Station";
  BackDestination.setAttribute( "onClick", "MarshWallHeronQuayN550();" );
  NextDestination.setAttribute( "onClick", "CanadaSquareSouthN550();" );
}
function CanadaSquareSouthN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Canada Square South";
  BackDestination.setAttribute( "onClick", "CanaryWharfStationN550();" );
  NextDestination.setAttribute( "onClick", "CanaryWharfStation2N550();" );
}
function CanadaSquareNorthN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Canada Square North";
  BackDestination.setAttribute( "onClick", "CanaryWharfStationN550();" );
  NextDestination.setAttribute( "onClick", "CanaryWharfStation2N550();" );
}
function CanaryWharfStation2N550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Canary Wharf Station";
  BackDestination.setAttribute( "onClick", "CanadaSquareNorthN550();" );
  NextDestination.setAttribute( "onClick", "WestIndiaAvenueN550();" );
}
function WestIndiaAvenueN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "West India Avenue";
  BackDestination.setAttribute( "onClick", "CanaryWharfStation2N550();" );
  NextDestination.setAttribute( "onClick", "WestferryCircusCanaryWharPierN550();" );
}
function WestferryCircusCanaryWharPierN550(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Westferry Circus / Canary Whar Pier";
  BackDestination.setAttribute( "onClick", "WestIndiaAvenueN550();" );
  NextDestination.setAttribute( "onClick", "WestferryStationN550();" );
  topTextYes.style.animationName = "WestferryCircusCanaryWharfPier";
}
function WestferryStationN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Westferry Station";
  BackDestination.setAttribute( "onClick", "WestIndiaAvenueN550();" );
  NextDestination.setAttribute( "onClick", "SalterStreetN550();" );
}
function SalterStreetN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Salter Street";
  BackDestination.setAttribute( "onClick", "WestferryStationN550();" );
  NextDestination.setAttribute( "onClick", "LimehousePoliceStationN550();" );
}
function LimehousePoliceStationN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Limehouse Police Station";
  BackDestination.setAttribute( "onClick", "WestferryStationN550();" );
  NextDestination.setAttribute( "onClick", "LimehouseTownHallN550();" );
}
function LimehouseTownHallN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Limehouse Town Hall";
  BackDestination.setAttribute( "onClick", "LimehousePoliceStationN550();" );
  NextDestination.setAttribute( "onClick", "LowellStreetN550();" );
}
function BurdettRoadN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Burdett Road";
  BackDestination.setAttribute( "onClick", "LimehousePoliceStationN550();" );
  NextDestination.setAttribute( "onClick", "SalmonLaneN550();" );
}
function SalmonLaneN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Salmon Lane";
  BackDestination.setAttribute( "onClick", "BurdettRoadN550();" );
  NextDestination.setAttribute( "onClick", "LowellStreetN550();" );
}
function LowellStreetN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lowell Street";
  BackDestination.setAttribute( "onClick", "SalmonLaneN550();" );
  NextDestination.setAttribute( "onClick", "LimehouseStationN550();" );
}
function LimehouseStationN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Limehouse Station";
  BackDestination.setAttribute( "onClick", "LowellStreetN550();" );
  NextDestination.setAttribute( "onClick", "StepneyMethodistChurchN550();" );
}
function StepneyMethodistChurchN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Stepney Methodist Church";
  BackDestination.setAttribute( "onClick", "LimehouseStationN550();" );
  NextDestination.setAttribute( "onClick", "MarionRichardsonSchoolN550();" );
}
function MarionRichardsonSchoolN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Marion Richardson School";
  BackDestination.setAttribute( "onClick", "StepneyMethodistChurchN550();" );
  NextDestination.setAttribute( "onClick", "ExmouthEstateN550();" );
}
function ExmouthEstateN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Exmouth Estate";
  BackDestination.setAttribute( "onClick", "MarionRichardsonSchoolN550();" );
  NextDestination.setAttribute( "onClick", "StMaryStMichaelChurchN550();" );
}
function ArbourSquareN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Arbour Square";
  BackDestination.setAttribute( "onClick", "StepneyMethodistChurchN550();" );
  NextDestination.setAttribute( "onClick", "StMaryStMichaelChurchN550();" );
}
function StMaryStMichaelChurchN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Mary & St Michael's Church";
  BackDestination.setAttribute( "onClick", "ArbourSquareN550();" );
  NextDestination.setAttribute( "onClick", "WatneyMarketN550();" );
}
function WatneyMarketN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Watney Market";
  BackDestination.setAttribute( "onClick", "StMaryStMichaelChurchN550();" );
  NextDestination.setAttribute( "onClick", "NewRoadN550();" );
}
function NewRoadN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "New Road";
  BackDestination.setAttribute( "onClick", "WatneyMarketN550();" );
  NextDestination.setAttribute( "onClick", "HenriquesStreetN550();" );
}
function HenriquesStreetN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Henriques Street";
  BackDestination.setAttribute( "onClick", "NewRoadN550();" );
  NextDestination.setAttribute( "onClick", "AldgateEastStationN550();" );
}
function AldgateEastStationN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldgate East Station";
  BackDestination.setAttribute( "onClick", "HenriquesStreetN550();" );
  NextDestination.setAttribute( "onClick", "AldgateStationN550();" );
}
function AldgateStationN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldgate Station";
  BackDestination.setAttribute( "onClick", "AldgateEastStationN550();" );
  NextDestination.setAttribute( "onClick", "StKatharineCreeN550();" );
}
function StKatharineCreeN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Katharine Cree";
  BackDestination.setAttribute( "onClick", "AldgateStationN550();" );
  NextDestination.setAttribute( "onClick", "StMaryAxeN550();" );
}
function StMaryAxeN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Mary Axe";
  BackDestination.setAttribute( "onClick", "StKatharineCreeN550();" );
  NextDestination.setAttribute( "onClick", "BankStationCornhillN550();" );
}
function BishopsgateN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bishopsgate";
  BackDestination.setAttribute( "onClick", "StMaryAxeN550();" );
  NextDestination.setAttribute( "onClick", "BankStationCornhillN550();" );
}
function BankStationCornhillN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bank Station / Cornhill";
  BackDestination.setAttribute( "onClick", "BishopsgateN550();" );
  NextDestination.setAttribute( "onClick", "BankStationQueenVictoriaStreetN550();" );
}
function BankStationQueenVictoriaStreetN550(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Bank Station / Queen Victoria Street";
  BackDestination.setAttribute( "onClick", "BankStationCornhillN550();" );
  NextDestination.setAttribute( "onClick", "StPaulChurchyardN550();" );
  topTextYes.style.animationName = "BankStationQueenVictoriaStreet";
}
function StPaulChurchyardN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Paul's Churchyard";
  BackDestination.setAttribute( "onClick", "BankStationQueenVictoriaStreetN550();" );
  NextDestination.setAttribute( "onClick", "StPaulCathedralN550();" );
}
function MansionHouseStationN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mansion House Station";
  BackDestination.setAttribute( "onClick", "BankStationQueenVictoriaStreetN550();" );
  NextDestination.setAttribute( "onClick", "StPaulCathedralN550();" );
}
function StPaulCathedralN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Paul's Cathedral";
  BackDestination.setAttribute( "onClick", "MansionHouseStationN550();" );
  NextDestination.setAttribute( "onClick", "CityThameslinkStnLudgateCircusN550();" );
}
function CityThameslinkStnLudgateCircusN550(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "City Thameslink Stn / Ludgate Circus";
  BackDestination.setAttribute( "onClick", "StPaulCathedralN550();" );
  NextDestination.setAttribute( "onClick", "ShoeLaneN550();" );
  topTextYes.style.animationName = "CityThameslinkStnLudgateCircus";
}
function ShoeLaneN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Shoe Lane";
  BackDestination.setAttribute( "onClick", "CityThameslinkStnLudgateCircusN550();" );
  NextDestination.setAttribute( "onClick", "FetterLaneN550();" );
}
function LudgateHillOldBaileyN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ludgate Hill / Old Bailey";
  BackDestination.setAttribute( "onClick", "StPaulCathedralN550();" );
  NextDestination.setAttribute( "onClick", "LudgateCircusN550();" );
}
function LudgateCircusN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ludgate Circus";
  BackDestination.setAttribute( "onClick", "LudgateHillOldBaileyN550();" );
  NextDestination.setAttribute( "onClick", "FetterLaneN550();" );
}
function FetterLaneN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Fetter Lane";
  BackDestination.setAttribute( "onClick", "LudgateCircusN550();" );
  NextDestination.setAttribute( "onClick", "ChanceryLaneN550();" );
}
function ChanceryLaneN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chancery Lane";
  BackDestination.setAttribute( "onClick", "FetterLaneN550();" );
  NextDestination.setAttribute( "onClick", "TheRoyalCourtsOfJusticeN550();" );
}
function TheRoyalCourtsOfJusticeN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The Royal Courts Of Justice";
  BackDestination.setAttribute( "onClick", "FetterLaneN550();" );
  NextDestination.setAttribute( "onClick", "AldwychAustraliaHouseN550();" );
}
function AldwychAustraliaHouseN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldwych Australia House";
  BackDestination.setAttribute( "onClick", "TheRoyalCourtsOfJusticeN550();" );
  NextDestination.setAttribute( "onClick", "SavoyStreetN550();" );
}
function SavoyStreetN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Savoy Street";
  BackDestination.setAttribute( "onClick", "AldwychAustraliaHouseN550();" );
  NextDestination.setAttribute( "onClick", "BedfordStreetN550();" );
}
function BedfordStreetN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bedford Street";
  BackDestination.setAttribute( "onClick", "SavoyStreetN550();" );
  NextDestination.setAttribute( "onClick", "CharingCrossStationN550();" );
}
function CharingCrossStationN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Charing Cross Station";
  BackDestination.setAttribute( "onClick", "BedfordStreetN550();" );
  NextDestination.setAttribute( "onClick", "TrafalgarSquareN550();" );
}
function Aldwych(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldwych";
  BackDestination.setAttribute( "onClick", "TheRoyalCourtsOfJusticeN550();" );
  NextDestination.setAttribute( "onClick", "SouthamptonStreetCoventGardenN550();" );
}
function SouthamptonStreetCoventGardenN550(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Southampton Street / Covent Garden";
  BackDestination.setAttribute( "onClick", "Aldwych();" );
  NextDestination.setAttribute( "onClick", "CharingCrossStnTrafalgarSquareN550();" );
  topTextYes.style.animationName = "SouthamptonStreetCoventGarden";
}
function CharingCrossStnTrafalgarSquareN550(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Charing Cross Stn / Trafalgar Square";
  BackDestination.setAttribute( "onClick", "SouthamptonStreetCoventGardenN550();" );
  NextDestination.setAttribute( "onClick", "TrafalgarSquareN550();" );
  topTextYes.style.animationName = "CharingCrossStnTrafalgarSquare";
}
function TrafalgarSquareN550(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Trafalgar Square";
  BackDestination.setAttribute( "onClick", "CharingCrossStnTrafalgarSquareN550();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}
function ibusN550CanningTown(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "N550 To Canning Town Bus Station";
  BackDestination.setAttribute( "onClick", "TrafalgarSquareN550();" );
  // NextDestination.setAttribute( "onClick", "CanningTownBusStationN550();" );
}

function ibusN551TrafalgarSquare(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "N551 To Trafalgar Square";
  // BackDestination.setAttribute( "onClick", "TrafalgarSquareN550();" );
  NextDestination.setAttribute( "onClick", "GallionsReachShoppingParkN551();" );
}
function GallionsReachShoppingParkN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Gallions Reach Shopping Park";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "HornetWayN551();" );
}
function HornetWayN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Hornet Way";
  BackDestination.setAttribute( "onClick", "GallionsReachShoppingParkN551();" );
  NextDestination.setAttribute( "onClick", "BecktonDlrDepotN551();" );
}
function BecktonDlrDepotN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Beckton Dlr Depot";
  BackDestination.setAttribute( "onClick", "HornetWayN551();" );
  NextDestination.setAttribute( "onClick", "ArmadaPointN551();" );
}
function ArmadaPointN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Armada Point";
  BackDestination.setAttribute( "onClick", "BecktonDlrDepotN551();" );
  NextDestination.setAttribute( "onClick", "GallionsReachStationN551();" );
}
function GallionsReachStationN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Gallions Reach Station";
  BackDestination.setAttribute( "onClick", "ArmadaPointN551();" );
  NextDestination.setAttribute( "onClick", "FerndaleStreetN551();" );
}
function FerndaleStreetN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Ferndale Street";
  BackDestination.setAttribute( "onClick", "GallionsReachStationN551();" );
  NextDestination.setAttribute( "onClick", "HorseLeazeN551();" );
}
function GallionsReachRoundaboutN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Gallions Reach Roundabout";
  BackDestination.setAttribute( "onClick", "GallionsReachStationN551();" );
  NextDestination.setAttribute( "onClick", "HorseLeazeN551();" );
}
function HorseLeazeN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Horse Leaze";
  BackDestination.setAttribute( "onClick", "GallionsReachRoundaboutN551();" );
  NextDestination.setAttribute( "onClick", "EastHamManorWayN551();" );
}
function EastHamManorWayN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "East Ham Manor Way";
  BackDestination.setAttribute( "onClick", "HorseLeazeN551();" );
  NextDestination.setAttribute( "onClick", "BecktonBusStationN551();" );
}
function CoveleesWallN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Covelees Wall";
  BackDestination.setAttribute( "onClick", "HorseLeazeN551();" );
  NextDestination.setAttribute( "onClick", "BecktonN551();" );
}
function BecktonN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Beckton";
  BackDestination.setAttribute( "onClick", "CoveleesWallN551();" );
  NextDestination.setAttribute( "onClick", "BecktonBusStationN551();" );
}
function BecktonBusStationN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Beckton Bus Station";
  BackDestination.setAttribute( "onClick", "BecktonN551();" );
  NextDestination.setAttribute( "onClick", "KingsfordWayN551();" );
}
function KingsfordWayN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Kingsford Way";
  BackDestination.setAttribute( "onClick", "BecktonBusStationN551();" );
  NextDestination.setAttribute( "onClick", "SwallowStreetN551();" );
}
function SwallowStreetN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Swallow Street";
  BackDestination.setAttribute( "onClick", "KingsfordWayN551();" );
  NextDestination.setAttribute( "onClick", "DoveApporoachN551();" );
}
function DoveApporoachN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Dove Apporoach";
  BackDestination.setAttribute( "onClick", "SwallowStreetN551();" );
  NextDestination.setAttribute( "onClick", "BecktonDistrictParkN551();" );
}
function BecktonDistrictParkN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Beckton District Park";
  BackDestination.setAttribute( "onClick", "DoveApporoachN551();" );
  NextDestination.setAttribute( "onClick", "SullivanAvenueN551();" );
}
function SullivanAvenueN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Sullivan Avenue";
  BackDestination.setAttribute( "onClick", "BecktonDistrictParkN551();" );
  NextDestination.setAttribute( "onClick", "ColmanRoadN551();" );
}
function ColmanRoadN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Colman Road";
  BackDestination.setAttribute( "onClick", "SullivanAvenueN551();" );
  NextDestination.setAttribute( "onClick", "NewhamWayN551();" );
}
function NewhamWayN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Newham Way";
  BackDestination.setAttribute( "onClick", "ColmanRoadN551();" );
  NextDestination.setAttribute( "onClick", "MortlakeRoadN551();" );
}
function MortlakeRoadN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Mortlake Road";
  BackDestination.setAttribute( "onClick", "NewhamWayN551();" );
  NextDestination.setAttribute( "onClick", "TreeRoadN551();" );
}
function TreeRoadN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Tree Road";
  BackDestination.setAttribute( "onClick", "NewhamWayN551();" );
  NextDestination.setAttribute( "onClick", "VictoriaDockRoadN551();" );
}
function VictoriaDockRoadN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Victoria Dock Road";
  BackDestination.setAttribute( "onClick", "TreeRoadN551();" );
  NextDestination.setAttribute( "onClick", "ChauntlerCloseCundyParkN551();" );
}
function PrinceRegentStationN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Prince Regent Station";
  BackDestination.setAttribute( "onClick", "VictoriaDockRoadN551();" );
  NextDestination.setAttribute( "onClick", "ChauntlerCloseCundyParkN551();" );
}
function ChauntlerCloseCundyParkN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Chauntler Close / Cundy Park";
  BackDestination.setAttribute( "onClick", "PrinceRegentStationN551();" );
  NextDestination.setAttribute( "onClick", "VictoriaDockRoadCustomHouseStatioN551();" );
}
function VictoriaDockRoadCustomHouseStatioN551(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Victoria Dock Road / Custom House Station";
  BackDestination.setAttribute( "onClick", "ChauntlerCloseCundyParkN551();" );
  NextDestination.setAttribute( "onClick", "BridgelandRoadN551();" );
  topTextYes.style.animationName = "VictoriaDockRoadCustomHouseStatio";
}
function BridgelandRoadN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bridgeland Road";
  BackDestination.setAttribute( "onClick", "VictoriaDockRoadCustomHouseStatioN551();" );
  NextDestination.setAttribute( "onClick", "MundayRoadRoyalVictoriaN551();" );
}
function MundayRoadRoyalVictoriaN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Munday Road / Royal Victoria";
  BackDestination.setAttribute( "onClick", "BridgelandRoadN551();" );
  NextDestination.setAttribute( "onClick", "HallsvillePrimarySchoolN551();" );
}
function HallsvillePrimarySchoolN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hallsville Primary School";
  BackDestination.setAttribute( "onClick", "MundayRoadRoyalVictoriaN551();" );
  NextDestination.setAttribute( "onClick", "KeirHardieRecreationGroundN551();" );
}
function TheApplebyCentreN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The Appleby Centre";
  BackDestination.setAttribute( "onClick", "BridgelandRoadN551();" );
  NextDestination.setAttribute( "onClick", "TarlingRoadN551();" );
}
function TarlingRoadN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Tarling Road";
  BackDestination.setAttribute( "onClick", "TheApplebyCentreN551();" );
  NextDestination.setAttribute( "onClick", "KeirHardieRecreationGroundN551();" );
}
function KeirHardieRecreationGroundN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Keir Hardie Recreation Ground";
  BackDestination.setAttribute( "onClick", "TarlingRoadN551();" );
  NextDestination.setAttribute( "onClick", "JudeStreetN551();" );
}
function JudeStreetN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Jude Street";
  BackDestination.setAttribute( "onClick", "KeirHardieRecreationGroundN551();" );
  NextDestination.setAttribute( "onClick", "CanningTownBusStationN551();" );
}
function RogersRoadN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Rogers Road";
  BackDestination.setAttribute( "onClick", "KeirHardieRecreationGroundN551();" );
  NextDestination.setAttribute( "onClick", "HallsvilleRoadn551();" );
}
function HallsvilleRoadn551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hallsville Road";
  BackDestination.setAttribute( "onClick", "RogersRoadN551();" );
  NextDestination.setAttribute( "onClick", "CanningTownBusStationN551();" );
}
function CanningTownBusStationN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Canning Town Bus Station";
  BackDestination.setAttribute( "onClick", "HallsvilleRoadn551();" );
  NextDestination.setAttribute( "onClick", "AbbottRoadN551();" );
}
function StephensonStreetN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Stephenson Street";
  BackDestination.setAttribute( "onClick", "CanningTownBusStationN551();" );
  NextDestination.setAttribute( "onClick", "AbbottRoadN551();" );
}
function AbbottRoadN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Abbott Road";
  BackDestination.setAttribute( "onClick", "StephensonStreetN551();" );
  NextDestination.setAttribute( "onClick", "BlackwallTunnelN551();" );
}
function BlackwallTunnelN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Blackwall Tunnel";
  BackDestination.setAttribute( "onClick", "AbbottRoadN551();" );
  NextDestination.setAttribute( "onClick", "BazelyStreetN551();" );
}
function NutmegLaneN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Nutmeg Lane";
  BackDestination.setAttribute( "onClick", "AbbottRoadN551();" );
  NextDestination.setAttribute( "onClick", "BrunswickRoadN551();" );
}
function BrunswickRoadN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brunswick Road";
  BackDestination.setAttribute( "onClick", "NutmegLaneN551();" );
  NextDestination.setAttribute( "onClick", "BazelyStreetN551();" );
}
function BazelyStreetN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bazely Street";
  BackDestination.setAttribute( "onClick", "BrunswickRoadN551();" );
  NextDestination.setAttribute( "onClick", "PoplarRecreationGroundN551();" );
}
function PoplarRecreationGroundN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Poplar Recreation Ground";
  BackDestination.setAttribute( "onClick", "BazelyStreetN551();" );
  NextDestination.setAttribute( "onClick", "UpperNorthStreetN551();" );
}
function ChrispStreetMarketN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chrisp Street Market";
  BackDestination.setAttribute( "onClick", "BazelyStreetN551();" );
  NextDestination.setAttribute( "onClick", "PoplarRecreationGrdPoplarStnN551();" );
}
function PoplarRecreationGrdPoplarStnN551(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Poplar Recreation Grd / Poplar Stn";
  BackDestination.setAttribute( "onClick", "ChrispStreetMarketN551();" );
  NextDestination.setAttribute( "onClick", "UpperNorthStreetN551();" );
  topTextYes.style.animationName = "PoplarRecreationGrdPoplarStn";
}
function UpperNorthStreetN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Upper Norh Street";
  BackDestination.setAttribute( "onClick", "PoplarRecreationGrdPoplarStnN551();" );
  NextDestination.setAttribute( "onClick", "UniversityOfCumbriaInLondonN551();" );
}
function UniversityOfCumbriaInLondonN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "University Of Cumbria In London";
  BackDestination.setAttribute( "onClick", "UpperNorthStreetN551();" );
  NextDestination.setAttribute( "onClick", "BurdettRoadN551();" );
}
function BurdettRoadN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Burdett Road";
  BackDestination.setAttribute( "onClick", "UniversityOfCumbriaInLondonN551();" );
  NextDestination.setAttribute( "onClick", "LimehouseTownHallN551();" );
}
function LimehouseTownHallN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Limehouse Town Hall";
  BackDestination.setAttribute( "onClick", "BurdettRoadN551();" );
  NextDestination.setAttribute( "onClick", "LowellStreetN551();" );
}
function SalmonLaneN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Salmon Lane";
  BackDestination.setAttribute( "onClick", "BurdettRoadN551();" );
  NextDestination.setAttribute( "onClick", "LowellStreetN551();" );
}
function LowellStreetN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lowell Street";
  BackDestination.setAttribute( "onClick", "SalmonLaneN551();" );
  NextDestination.setAttribute( "onClick", "LimehouseStationN551();" );
}
function LimehouseStationN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Limehouse Station";
  BackDestination.setAttribute( "onClick", "LowellStreetN551();" );
  NextDestination.setAttribute( "onClick", "CableStreetN551();" );
}
function CableStreetN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Cable Street";
  BackDestination.setAttribute( "onClick", "LimehouseStationN551();" );
  NextDestination.setAttribute( "onClick", "FreeTradeWharfN551();" );
}
function FreeTradeWharfN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Free Trade Wharf";
  BackDestination.setAttribute( "onClick", "CableStreetN551();" );
  NextDestination.setAttribute( "onClick", "TobaccoDockN551();" );
}
function StPaulsChurchN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Paul's Church";
  BackDestination.setAttribute( "onClick", "FreeTradeWharfN551();" );
  NextDestination.setAttribute( "onClick", "TobaccoDockN551();" );
}
function TobaccoDockN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Tobacco Dock";
  BackDestination.setAttribute( "onClick", "StPaulsChurchN551();" );
  NextDestination.setAttribute( "onClick", "WellcloseStreetN551();" );
}
function WellcloseStreetN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wellclose Street";
  BackDestination.setAttribute( "onClick", "TobaccoDockN551();" );
  NextDestination.setAttribute( "onClick", "StKatherineDocksN551();" );
}
function StKatherineDocksN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Katherine Docks";
  BackDestination.setAttribute( "onClick", "WellcloseStreetN551();" );
  NextDestination.setAttribute( "onClick", "TowerGatewayStationN551();" );
}
function TowerGatewayStationN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Tower Gateway Station";
  BackDestination.setAttribute( "onClick", "StKatherineDocksN551();" );
  NextDestination.setAttribute( "onClick", "AldgateBusStationN551();" );
}
function AldgateBusStationN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldgate Bus Station";
  BackDestination.setAttribute( "onClick", "TowerGatewayStationN551();" );
  NextDestination.setAttribute( "onClick", "DukesPlaceN551();" );
}
function DukesPlaceN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Duke's Place";
  BackDestination.setAttribute( "onClick", "AldgateBusStationN551();" );
  NextDestination.setAttribute( "onClick", "BishopsgateN551();" );
}
function BishopsgateN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bishopsgate";
  BackDestination.setAttribute( "onClick", "DukesPlaceN551();" );
  NextDestination.setAttribute( "onClick", "WormwoodStreetN551();" );
}
function TowerHillTowerGatewayStationN551(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Tower Hill / Tower Gateway Station";
  BackDestination.setAttribute( "onClick", "StKatherineDocksN551();" );
  NextDestination.setAttribute( "onClick", "MinoriesN551();" );
  topTextYes.style.animationName = "TowerHillTowerGatewayStation";
}
function MinoriesN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Minories";
  BackDestination.setAttribute( "onClick", "TowerHillTowerGatewayStationN551();" );
  NextDestination.setAttribute( "onClick", "AldgateStationN551();" );
}
function AldgateStationN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldgate Station";
  BackDestination.setAttribute( "onClick", "MinoriesN551();" );
  NextDestination.setAttribute( "onClick", "StBotolphStreetN551();" );
}
function StBotolphStreetN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Botolph Street";
  BackDestination.setAttribute( "onClick", "AldgateStationN551();" );
  NextDestination.setAttribute( "onClick", "WormwoodStreetN551();" );
}
function WormwoodStreetN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wormwood Street";
  BackDestination.setAttribute( "onClick", "StBotolphStreetN551();" );
  NextDestination.setAttribute( "onClick", "OldBroadStreetN551();" );
}
function OldBroadStreetN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Old Broad Street";
  BackDestination.setAttribute( "onClick", "WormwoodStreetN551();" );
  NextDestination.setAttribute( "onClick", "BankStationQueenVictoriaStreetN551();" );
}
function AllHallowsChurchN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "All Hallows Church";
  BackDestination.setAttribute( "onClick", "WormwoodStreetN551();" );
  NextDestination.setAttribute( "onClick", "EldonStreetN551();" );
}
function EldonStreetN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Eldon Street";
  BackDestination.setAttribute( "onClick", "AllHallowsChurchN551();" );
  NextDestination.setAttribute( "onClick", "MoorgateStationN551();" );
}
function MoorgateStationN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Moorgate Station";
  BackDestination.setAttribute( "onClick", "EldonStreetN551();" );
  NextDestination.setAttribute( "onClick", "LondonWallN551();" );
}
function LondonWallN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "London Wall";
  BackDestination.setAttribute( "onClick", "MoorgateStationN551();" );
  NextDestination.setAttribute( "onClick", "BankStationPrincesStreetN551();" );
}
function BankStationPrincesStreetN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bank Station / Princes Street";
  BackDestination.setAttribute( "onClick", "LondonWallN551();" );
  NextDestination.setAttribute( "onClick", "BankStationQueenVictoriaStreetN551();" );
}
function BankStationQueenVictoriaStreetN551(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Bank Station / Queen Victoria Street";
  BackDestination.setAttribute( "onClick", "BankStationPrincesStreetN551();" );
  NextDestination.setAttribute( "onClick", "StPaulChurchyardN551();" );
  topTextYes.style.animationName = "BankStationQueenVictoriaStreet";
}
function StPaulChurchyardN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Paul's Churchyard";
  BackDestination.setAttribute( "onClick", "BankStationQueenVictoriaStreetN551();" );
  NextDestination.setAttribute( "onClick", "StPaulCathedralN551();" );
}
function MansionHouseStationN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mansion House Station";
  BackDestination.setAttribute( "onClick", "BankStationQueenVictoriaStreetN551();" );
  NextDestination.setAttribute( "onClick", "StPaulCathedralN551();" );
}
function StPaulCathedralN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Paul's Cathedral";
  BackDestination.setAttribute( "onClick", "MansionHouseStationN551();" );
  NextDestination.setAttribute( "onClick", "CityThameslinkStnLudgateCircusN551();" );
}
function CityThameslinkStnLudgateCircusN551(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "City Thameslink Stn / Ludgate Circus";
  BackDestination.setAttribute( "onClick", "StPaulCathedralN551();" );
  NextDestination.setAttribute( "onClick", "ShoeLaneN551();" );
  topTextYes.style.animationName = "CityThameslinkStnLudgateCircus";
}
function ShoeLaneN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Shoe Lane";
  BackDestination.setAttribute( "onClick", "CityThameslinkStnLudgateCircusN551();" );
  NextDestination.setAttribute( "onClick", "FetterLaneN551();" );
}
function LudgateHillOldBaileyN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ludgate Hill / Old Bailey";
  BackDestination.setAttribute( "onClick", "StPaulCathedralN551();" );
  NextDestination.setAttribute( "onClick", "LudgateCircusN551();" );
}
function LudgateCircusN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ludgate Circus";
  BackDestination.setAttribute( "onClick", "LudgateHillOldBaileyN551();" );
  NextDestination.setAttribute( "onClick", "FetterLaneN551();" );
}
function FetterLaneN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Fetter Lane";
  BackDestination.setAttribute( "onClick", "LudgateCircusN551();" );
  NextDestination.setAttribute( "onClick", "ChanceryLaneN551();" );
}
function ChanceryLaneN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chancery Lane";
  BackDestination.setAttribute( "onClick", "FetterLaneN551();" );
  NextDestination.setAttribute( "onClick", "TheRoyalCourtsOfJusticeN551();" );
}
function TheRoyalCourtsOfJusticeN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The Royal Courts Of Justice";
  BackDestination.setAttribute( "onClick", "FetterLaneN551();" );
  NextDestination.setAttribute( "onClick", "AldwychAustraliaHouseN551();" );
}
function AldwychAustraliaHouseN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldwych Australia House";
  BackDestination.setAttribute( "onClick", "TheRoyalCourtsOfJusticeN551();" );
  NextDestination.setAttribute( "onClick", "SavoyStreetN551();" );
}
function SavoyStreetN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Savoy Street";
  BackDestination.setAttribute( "onClick", "AldwychAustraliaHouseN551();" );
  NextDestination.setAttribute( "onClick", "BedfordStreetN551();" );
}
function BedfordStreetN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bedford Street";
  BackDestination.setAttribute( "onClick", "SavoyStreetN551();" );
  NextDestination.setAttribute( "onClick", "CharingCrossStationN551();" );
}
function CharingCrossStationN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Charing Cross Station";
  BackDestination.setAttribute( "onClick", "BedfordStreetN551();" );
  NextDestination.setAttribute( "onClick", "TrafalgarSquareN551();" );
}
function AldwychN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldwych";
  BackDestination.setAttribute( "onClick", "TheRoyalCourtsOfJusticeN551();" );
  NextDestination.setAttribute( "onClick", "SouthamptonStreetCoventGardenN551();" );
}
function SouthamptonStreetCoventGardenN551(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Southampton Street / Covent Garden";
  BackDestination.setAttribute( "onClick", "AldwychN551();" );
  NextDestination.setAttribute( "onClick", "CharingCrossStnTrafalgarSquareN551();" );
  topTextYes.style.animationName = "SouthamptonStreetCoventGarden";
}
function CharingCrossStnTrafalgarSquareN551(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Charing Cross Stn / Trafalgar Square";
  BackDestination.setAttribute( "onClick", "SouthamptonStreetCoventGardenN551();" );
  NextDestination.setAttribute( "onClick", "TrafalgarSquareN551();" );
  topTextYes.style.animationName = "CharingCrossStnTrafalgarSquare";
}
function TrafalgarSquareN551(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Trafalgar Square";
  BackDestination.setAttribute( "onClick", "CharingCrossStnTrafalgarSquareN551();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}
function ibusN551GallionsReach(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "N551 to Gallions Reach, Shopping Park";
  BackDestination.setAttribute( "onClick", "TrafalgarSquareN551();" );
  // NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  topTextYes.style.animationName = "GallionsReachShoppingParkN551";
}

function ibus200Mitcham(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "200 to Mitcahm";
  // BackDestination.setAttribute( "onClick", "TrafalgarSquareN551();" );
  NextDestination.setAttribute( "onClick", "LambtonRoad200();" );
}
function LambtonRoad200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lambton Road";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "RaynesParkMethodistChurch200();" );
}
function RaynesParkMethodistChurch200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Raynes Park Methodist Church";
  BackDestination.setAttribute( "onClick", "LambtonRoad200();" );
  NextDestination.setAttribute( "onClick", "RaynesParkStation200();" );
}
function RaynesParkStation200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Raynes Park Station";
  BackDestination.setAttribute( "onClick", "LambtonRoad200();" );
  NextDestination.setAttribute( "onClick", "SpencerRoad200();" );
}
function SpencerRoad200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Spencer Road";
  BackDestination.setAttribute( "onClick", "RaynesParkStation200();" );
  NextDestination.setAttribute( "onClick", "OrchardLane200();" );
}
function OrchardLane200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Orchard Lane";
  BackDestination.setAttribute( "onClick", "SpencerRoad200();" );
  NextDestination.setAttribute( "onClick", "CopseHillChristChurch200();" );
}
function CopseHillChristChurch200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Copse Hill / Christ Church";
  BackDestination.setAttribute( "onClick", "OrchardLane200();" );
  NextDestination.setAttribute( "onClick", "HighCedarDrive200();" );
}
function HighCedarDrive200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "High Cedar Drive";
  BackDestination.setAttribute( "onClick", "CopseHillChristChurch200();" );
  NextDestination.setAttribute( "onClick", "AtkinsonCloseCopseHill200();" );
}
function AtkinsonCloseCopseHill200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Atkinson Close / Copse Hill";
  BackDestination.setAttribute( "onClick", "HighCedarDrive200();" );
  NextDestination.setAttribute( "onClick", "WoodhayesRoad200();" );
}
function PepysRoad200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Pepys Road";
  BackDestination.setAttribute( "onClick", "OrchardLane200();" );
  NextDestination.setAttribute( "onClick", "WoodhayesRoad200();" );
}
function WoodhayesRoad200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Woodhayes Road";
  BackDestination.setAttribute( "onClick", "PepysRoad200();" );
  NextDestination.setAttribute( "onClick", "EdgeHill200();" );
}
function AtkinsonCloseCopseHill2200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Atkinson Close / Copse Hill";
  BackDestination.setAttribute( "onClick", "WoodhayesRoad200();" );
  NextDestination.setAttribute( "onClick", "HighCedarDrive2200();" );
}
function HighCedarDrive2200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "High Cedar Drive";
  BackDestination.setAttribute( "onClick", "AtkinsonCloseCopseHill2200();" );
  NextDestination.setAttribute( "onClick", "ArterberryRoad200();" );
}
function ArterberryRoad200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Arterberry Road";
  BackDestination.setAttribute( "onClick", "HighCedarDrive2200();" );
  NextDestination.setAttribute( "onClick", "EdgeHill200();" );
}
function EdgeHill200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Edge Hill";
  BackDestination.setAttribute( "onClick", "ArterberryRoad200();" );
  NextDestination.setAttribute( "onClick", "WimbledonTelephoneExchange200();" );
}
function WimbledonTelephoneExchange200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wimbledon Telephone Exchange";
  BackDestination.setAttribute( "onClick", "EdgeHill200();" );
  NextDestination.setAttribute( "onClick", "WimbledonVillageRidgway200();" );
}
function WimbledonVillageRidgway200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wimbledon Village / Ridgway";
  BackDestination.setAttribute( "onClick", "WimbledonTelephoneExchange200();" );
  NextDestination.setAttribute( "onClick", "WimbledonHillRoad200();" );
}
function WimbledonHillRoad200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wimbledon Hill Road";
  BackDestination.setAttribute( "onClick", "WimbledonVillageRidgway200();" );
  NextDestination.setAttribute( "onClick", "WimbledonPoliceStation200();" );
}
function WimbledonStation200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wimbledon Station";
  BackDestination.setAttribute( "onClick", "WimbledonHillRoad200();" );
  NextDestination.setAttribute( "onClick", "WimbledonBusStation200();" );
}
function WimbledonBusStation200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wimbledon Bus Station";
  BackDestination.setAttribute( "onClick", "WimbledonStation200();" );
  NextDestination.setAttribute( "onClick", "WimbledonPoliceStation200();" );
}
function WimbledonPoliceStation200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wimbledon Police Station";
  BackDestination.setAttribute( "onClick", "WimbledonBusStation200();" );
  NextDestination.setAttribute( "onClick", "TriniyRoad200();" );
}
function TriniyRoad200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Trinity Road";
  BackDestination.setAttribute( "onClick", "WimbledonPoliceStation200();" );
  NextDestination.setAttribute( "onClick", "CravenGardens200();" );
}
function CravenGardens200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Craven Gardens";
  BackDestination.setAttribute( "onClick", "TriniyRoad200();" );
  NextDestination.setAttribute( "onClick", "HaydonsRoadStation200();" );
}
function HaydonsRoadStation200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Haydons Road Station";
  BackDestination.setAttribute( "onClick", "CravenGardens200();" );
  NextDestination.setAttribute( "onClick", "MiltonRoad200();" );
}
function MiltonRoad200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Milton Road";
  BackDestination.setAttribute( "onClick", "HaydonsRoadStation200();" );
  NextDestination.setAttribute( "onClick", "QuicksRoad200();" );
}
function QuicksRoad200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Quicks Road";
  BackDestination.setAttribute( "onClick", "MiltonRoad200();" );
  NextDestination.setAttribute( "onClick", "HaydonsRoadMertonHighStreet200();" );
}
function HaydonsRoadMertonHighStreet200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Haydons Road / Merton High Street";
  BackDestination.setAttribute( "onClick", "QuicksRoad200();" );
  NextDestination.setAttribute( "onClick", "AbbeyRoad200();" );
}
function AbbeyRoad200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Abbey Road";
  BackDestination.setAttribute( "onClick", "HaydonsRoadMertonHighStreet200();" );
  NextDestination.setAttribute( "onClick", "MertonAbbey200();" );
}
function MertonAbbey200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Merton Abbey";
  BackDestination.setAttribute( "onClick", "AbbeyRoad200();" );
  NextDestination.setAttribute( "onClick", "ColliersWoodStation200();" );
}
function ColliersWoodStation200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Colliers Wood Station";
  BackDestination.setAttribute( "onClick", "MertonAbbey200();" );
  NextDestination.setAttribute( "onClick", "ChristChurch200();" );
}
function ChristChurch200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Christ Church";
  BackDestination.setAttribute( "onClick", "ColliersWoodStation200();" );
  NextDestination.setAttribute( "onClick", "Runnymede200();" );
}
function Runnymede200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Runnymede";
  BackDestination.setAttribute( "onClick", "ColliersWoodStation200();" );
  NextDestination.setAttribute( "onClick", "MountRoad200();" );
}
function MountRoad200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mount Road";
  BackDestination.setAttribute( "onClick", "Runnymede200();" );
  NextDestination.setAttribute( "onClick", "HaslemereAvenue200();" );
}
function HaslemereAvenue200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Haslemere Avenue";
  BackDestination.setAttribute( "onClick", "MountRoad200();" );
  NextDestination.setAttribute( "onClick", "FrenshamCourt200();" );
}
function FrenshamCourt200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Frensham Court";
  BackDestination.setAttribute( "onClick", "HaslemereAvenue200();" );
  NextDestination.setAttribute( "onClick", "OxtedClose200();" );
}
function PhippsBridgeTramStop200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Phipps Bridge Tram Stop";
  BackDestination.setAttribute( "onClick", "FrenshamCourt200();" );
  NextDestination.setAttribute( "onClick", "OxtedClose200();" );
}
function OxtedClose200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Oxted Close";
  BackDestination.setAttribute( "onClick", "PhippsBridgeTramStop200();" );
  NextDestination.setAttribute( "onClick", "MilesRoad200();" );
}
function MilesRoad200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Miles Road";
  BackDestination.setAttribute( "onClick", "OxtedClose200();" );
  NextDestination.setAttribute( "onClick", "HallPlace200();" );
}
function HallPlace200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hall Place";
  BackDestination.setAttribute( "onClick", "MilesRoad200();" );
  NextDestination.setAttribute( "onClick", "MitchamLowerGreen200();" );
}
function MitchamLowerGreen200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mitcham / Lower Green";
  BackDestination.setAttribute( "onClick", "HallPlace200();" );
  NextDestination.setAttribute( "onClick", "GlebeCourt200();" );
}
function GlebeCourt200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Glebe Court";
  BackDestination.setAttribute( "onClick", "MitchamLowerGreen200();" );
  NextDestination.setAttribute( "onClick", "MitchamFairGreen200();" );
}
function MitchamFairGreen200(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mitcham Fair Green";
  BackDestination.setAttribute( "onClick", "GlebeCourt200();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}
