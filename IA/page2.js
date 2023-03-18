var smallSpace = '<span class="invisible">.</span>'
var bigSpace = '<span class="invisible">...</span>'
var sSpace = '<span class="invisible">.</span>'
var bSpace = '<span class="invisible">...</span>'

var topTextYes = document.getElementById("topTextYes");
var topTextNo = document.getElementById("topTextNo");

function Ilford648btn(){
  ibus648Ilford()
  showDestination.setAttribute( "onClick", "Ilford648ibus();" );
}
function Beckton648btn(){
  ibus648Beckton()
  showDestination.setAttribute( "onClick", "Beckton648ibus();" );
}
function RomfordStation674btn(){
  ibus674RomfordStation()
  showDestination.setAttribute( "onClick", "RomfordStation674ibus();" );
}
function HaroldHill674btn(){
  ibus674HaroldHill()
  showDestination.setAttribute( "onClick", "HaroldHill674ibus();" );
}
function TrafalgarSquareD11(){
  ibusD11TrafalgarSquare()
  showDestination.setAttribute( "onClick", "TrafalgarSquareD11ibus();" );
}
function TrafalgarWayD11(){
  ibusD11TrafalgarWay()
  showDestination.setAttribute( "onClick", "TrafalgarWayD11ibus();" );
}
// function S474_ManorPark(){
//   topTextYes.style.display ="none";
//   topTextNo.style.display ="block";
//   topTextNo.innerHTML = "4"+smallSpace+"7"+smallSpace+"4"+bigSpace+"t"+smallSpace+"o"+bigSpace+"M"+smallSpace+"a"+smallSpace+"n"+smallSpace+"o"+smallSpace+"r"+bigSpace+"P"+smallSpace+"a"+smallSpace+"r"+smallSpace+"k";
// }
// topTextYes.style.display ="block";
// topTextNo.style.display ="none";
// topTextYes.innerHTML = "309 to Bethnal Green, Chest Hospital";
// topTextYes.style.animationName = "BethnalGreen309";

function Ilford648ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "648 to Ilford";
}
function Beckton648ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "648 to Beckton";
}
function ibus648Ilford(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "648 to Ilford";
  // BackDestination.setAttribute( "onClick", "AliceLane702();" );
  NextDestination.setAttribute( "onClick", "Beckton648();" );
}
function Beckton648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Beckton";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere648();" );
  NextDestination.setAttribute( "onClick", "SavageGardens648();" );
}
function SavageGardens648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Savage Gardens";
  BackDestination.setAttribute( "onClick", "Beckton648();" );
  NextDestination.setAttribute( "onClick", "RoyalDocksMedicalCentre648();" );
}
function RoyalDocksMedicalCentre648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Royal Docks Medical Centre";
  BackDestination.setAttribute( "onClick", "SavageGardens648();" );
  NextDestination.setAttribute( "onClick", "CyprusStation648();" );
}
function CyprusStation648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Cyprus Station";
  BackDestination.setAttribute( "onClick", "RoyalDocksMedicalCentre648();" );
  NextDestination.setAttribute( "onClick", "FerndaleStreet648();" );
}
function DevallsClose648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Devalls Close";
  BackDestination.setAttribute( "onClick", "CyprusStation648();" );
  NextDestination.setAttribute( "onClick", "FerndaleStreet648();" );
}
function FerndaleStreet648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Ferndale Street";
  BackDestination.setAttribute( "onClick", "DevallsClose648();" );
  NextDestination.setAttribute( "onClick", "GallionsReachRoundabout648();" );
}
function GallionsReachRoundabout648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Gallions Reach Roundabout";
  BackDestination.setAttribute( "onClick", "FerndaleStreet648();" );
  NextDestination.setAttribute( "onClick", "UELDocklandsCampus648();" );
}
function UELDocklandsCampus648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "U E L Docklands Campus";
  BackDestination.setAttribute( "onClick", "FerndaleStreet648();" );
  NextDestination.setAttribute( "onClick", "BasculeBridge648();" );
}
function BasculeBridge648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Bascule Bridge";
  BackDestination.setAttribute( "onClick", "UELDocklandsCampus648();" );
  NextDestination.setAttribute( "onClick", "BargehouseRoad648();" );
}
function BargehouseRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Bargehouse Road";
  BackDestination.setAttribute( "onClick", "BasculeBridge648();" );
  NextDestination.setAttribute( "onClick", "RoyalVictoriaGardens648();" );
}
function RoyalVictoriaGardens648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Royal Victoria Gardens";
  BackDestination.setAttribute( "onClick", "BargehouseRoad648();" );
  NextDestination.setAttribute( "onClick", "NorthWoolwichPoliceStation648();" );
}
function NorthWoolwichPoliceStation648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "North Woolwich Police Station";
  BackDestination.setAttribute( "onClick", "RoyalVictoriaGardens648();" );
  NextDestination.setAttribute( "onClick", "NorthWoolwichFerry648();" );
}
function NorthWoolwichFerry648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "North Woolwich Ferry";
  BackDestination.setAttribute( "onClick", "NorthWoolwichPoliceStation648();" );
  NextDestination.setAttribute( "onClick", "PierRoad648();" );
}
function PierRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Pier Road";
  BackDestination.setAttribute( "onClick", "NorthWoolwichFerry648();" );
  NextDestination.setAttribute( "onClick", "KennardStreet648();" );
}
function FernhillStreet648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Fernhill Street";
  BackDestination.setAttribute( "onClick", "NorthWoolwichFerry648();" );
  NextDestination.setAttribute( "onClick", "KennardStreet648();" );
}
function KennardStreet648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Kennard Street";
  BackDestination.setAttribute( "onClick", "FernhillStreet648();" );
  NextDestination.setAttribute( "onClick", "TateRoad648();" );
}
function TateRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Tate Road";
  BackDestination.setAttribute( "onClick", "KennardStreet648();" );
  NextDestination.setAttribute( "onClick", "SavilleRoad648();" );
}
function LordStreet648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Lord Street";
  BackDestination.setAttribute( "onClick", "KennardStreet648();" );
  NextDestination.setAttribute( "onClick", "SavilleRoad648();" );
}
function SavilleRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Saville Road";
  BackDestination.setAttribute( "onClick", "LordStreet648();" );
  NextDestination.setAttribute( "onClick", "ConstanceStreet648();" );
}
function ConstanceStreet648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Constance Street";
  BackDestination.setAttribute( "onClick", "SavilleRoad648();" );
  NextDestination.setAttribute( "onClick", "LondonCityAirport648();" );
}
function LondonCityAirport648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "London City Airport";
  BackDestination.setAttribute( "onClick", "ConstanceStreet648();" );
  NextDestination.setAttribute( "onClick", "ConnaughtBridge648();" );
}
function ConnaughtBridge648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Connaught Bridge";
  BackDestination.setAttribute( "onClick", "LondonCityAirport648();" );
  NextDestination.setAttribute( "onClick", "ThamesBarrier648();" );
}
function ThamesBarrier648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Thames Barrier";
  BackDestination.setAttribute( "onClick", "ConnaughtBridge648();" );
  NextDestination.setAttribute( "onClick", "PontoonDockStation648();" );
}
function PontoonDockStation648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Pontoon Dock Station";
  BackDestination.setAttribute( "onClick", "ThamesBarrier648();" );
  NextDestination.setAttribute( "onClick", "MillRoad648();" );
}
function MillRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Mill Road";
  BackDestination.setAttribute( "onClick", "PontoonDockStation648();" );
  NextDestination.setAttribute( "onClick", "BoxleyStreet648();" );
}
function BoxleyStreet648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Boxley Street";
  BackDestination.setAttribute( "onClick", "MillRoad648();" );
  NextDestination.setAttribute( "onClick", "WestSilvertownStation648();" );
}
function WestSilvertownStation648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "West Silvertown Station";
  BackDestination.setAttribute( "onClick", "MillRoad648();" );
  NextDestination.setAttribute( "onClick", "CharringtonSteps648();" );
}
function CharringtonSteps648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Charrington Steps";
  BackDestination.setAttribute( "onClick", "WestSilvertownStation648();" );
  NextDestination.setAttribute( "onClick", "CanningTownBusStation648();" );
}
function GeorgeStreet648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "George Street";
  BackDestination.setAttribute( "onClick", "CharringtonSteps648();" );
  NextDestination.setAttribute( "onClick", "CanningTownBusStation648();" );
}
function CanningTownBusStation648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Canning Town Bus Station";
  BackDestination.setAttribute( "onClick", "GeorgeStreet648();" );
  NextDestination.setAttribute( "onClick", "StarLaneStation648();" );
}
function BarkingRoadManorRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Barking Road / Manor Road";
  BackDestination.setAttribute( "onClick", "CanningTownBusStation648();" );
  NextDestination.setAttribute( "onClick", "StarLaneStation648();" );
}
function StarLaneStation648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Star Lane Station";
  BackDestination.setAttribute( "onClick", "BarkingRoadManorRoad648();" );
  NextDestination.setAttribute( "onClick", "GodboldRoad648();" );
}
function GodboldRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Godbold Road";
  BackDestination.setAttribute( "onClick", "StarLaneStation648();" );
  NextDestination.setAttribute( "onClick", "MilnerRoad648();" );
}
function MilnerRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Milner Road";
  BackDestination.setAttribute( "onClick", "GodboldRoad648();" );
  NextDestination.setAttribute( "onClick", "WestHamStation648();" );
}
function WestHamStation648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "West Ham Station";
  BackDestination.setAttribute( "onClick", "MilnerRoad648();" );
  NextDestination.setAttribute( "onClick", "LeywickStreet648();" );
}
function LeywickStreet648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Leywick Street";
  BackDestination.setAttribute( "onClick", "WestHamStation648();" );
  NextDestination.setAttribute( "onClick", "MitreRoad648();" );
}
function MitreRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Mitre Road";
  BackDestination.setAttribute( "onClick", "LeywickStreet648();" );
  NextDestination.setAttribute( "onClick", "PlaistowGrove648();" );
}
function PlaistowGrove648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Plaistow Grove";
  BackDestination.setAttribute( "onClick", "MitreRoad648();" );
  NextDestination.setAttribute( "onClick", "MorleyRoad648();" );
}
function MorleyRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Morley Road";
  BackDestination.setAttribute( "onClick", "PlaistowGrove648();" );
  NextDestination.setAttribute( "onClick", "PlaistowStation648();" );
}
function PlaistowStation648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Plaistow Station";
  BackDestination.setAttribute( "onClick", "MorleyRoad648();" );
  NextDestination.setAttribute( "onClick", "VictoriaRoad648();" );
}
function VictoriaRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Victoria Road";
  BackDestination.setAttribute( "onClick", "PlaistowStation648();" );
  NextDestination.setAttribute( "onClick", "KennedyClose648();" );
}
function KennedyClose648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Kennedy Close";
  BackDestination.setAttribute( "onClick", "PlaistowStation648();" );
  NextDestination.setAttribute( "onClick", "BalaamStreet648();" );
}
function BalaamStreet648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Balaam Street";
  BackDestination.setAttribute( "onClick", "KennedyClose648();" );
  NextDestination.setAttribute( "onClick", "PerthRoad648();" );
}
function PerthRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Perth Road";
  BackDestination.setAttribute( "onClick", "BalaamStreet648();" );
  NextDestination.setAttribute( "onClick", "BarkingRoad648();" );
}
function GadClose648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Gad Close";
  BackDestination.setAttribute( "onClick", "BalaamStreet648();" );
  NextDestination.setAttribute( "onClick", "BarkingRoad648();" );
}
function BarkingRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Barking Road";
  BackDestination.setAttribute( "onClick", "GadClose648();" );
  NextDestination.setAttribute( "onClick", "PlaistowPrinceRegentLane648();" );
}
function PlaistowPrinceRegentLane648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Plaistow / Prince Regent Lane";
  BackDestination.setAttribute( "onClick", "BarkingRoad648();" );
  NextDestination.setAttribute( "onClick", "NewCityRoad648();" );
}
function NewCityRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "New City Road";
  BackDestination.setAttribute( "onClick", "PlaistowPrinceRegentLane648();" );
  NextDestination.setAttribute( "onClick", "SamsonStreet648();" );
}
function SamsonStreet648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Samson Street";
  BackDestination.setAttribute( "onClick", "NewCityRoad648();" );
  NextDestination.setAttribute( "onClick", "UptonParkGreenStreet648();" );
}
function UptonParkGreenStreet648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Upton Park / Green Street";
  BackDestination.setAttribute( "onClick", "NewCityRoad648();" );
  NextDestination.setAttribute( "onClick", "UptonParkPrioryRoad648();" );
}
function UptonParkPrioryRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Upton Park / Priory Road";
  BackDestination.setAttribute( "onClick", "UptonParkGreenStreet648();" );
  NextDestination.setAttribute( "onClick", "ArragonRoad648();" );
}
function ArragonRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Arragon Road";
  BackDestination.setAttribute( "onClick", "UptonParkPrioryRoad648();" );
  NextDestination.setAttribute( "onClick", "KatherineRoad648();" );
}
function KatherineRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Katherine Road";
  BackDestination.setAttribute( "onClick", "ArragonRoad648();" );
  NextDestination.setAttribute( "onClick", "BartleAvenue648();" );
}
function DickensRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Dickens Road";
  BackDestination.setAttribute( "onClick", "UptonParkPrioryRoad648();" );
  NextDestination.setAttribute( "onClick", "AintreeAvenue648();" );
}
function AintreeAvenue648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Aintree Avenue";
  BackDestination.setAttribute( "onClick", "DickensRoad648();" );
  NextDestination.setAttribute( "onClick", "BartleAvenue648();" );
}
function BartleAvenue648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Bartle Avenue";
  BackDestination.setAttribute( "onClick", "AintreeAvenue648();" );
  NextDestination.setAttribute( "onClick", "HighStreetNorth648();" );
}
function HighStreetNorth648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "High Street North";
  BackDestination.setAttribute( "onClick", "KatherineRoad648();" );
  NextDestination.setAttribute( "onClick", "NewhamTownHall648();" );
}
function NewhamTownHall648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Newham Town Hall";
  BackDestination.setAttribute( "onClick", "BartleAvenue648();" );
  NextDestination.setAttribute( "onClick", "AltmoreAvenue648();" );
}
function AltmoreAvenue648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Altomore Avenue";
  BackDestination.setAttribute( "onClick", "NewhamTownHall648();" );
  NextDestination.setAttribute( "onClick", "StOlaveRoad648();" );
}
function StOlaveRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "St Olave's Road";
  BackDestination.setAttribute( "onClick", "AltmoreAvenue648();" );
  NextDestination.setAttribute( "onClick", "BurgesRoad648();" );
}
function BurgesRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Burges Road";
  BackDestination.setAttribute( "onClick", "StOlaveRoad648();" );
  NextDestination.setAttribute( "onClick", "LongbridgeRoad648();" );
}
function BarkingTesco648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Barking Tesco";
  BackDestination.setAttribute( "onClick", "BurgesRoad648();" );
  NextDestination.setAttribute( "onClick", "LongbridgeRoad648();" );
}
function LongbridgeRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Longbridge Road";
  BackDestination.setAttribute( "onClick", "BarkingTesco648();" );
  NextDestination.setAttribute( "onClick", "VictoriaRoad2648();" );
}
function VictoriaRoad2648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Victoria Road";
  BackDestination.setAttribute( "onClick", "LongbridgeRoad648();" );
  NextDestination.setAttribute( "onClick", "LoxfordPolyclinic648();" );
}
function ParkAvenue648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Park Avenue";
  BackDestination.setAttribute( "onClick", "LongbridgeRoad648();" );
  NextDestination.setAttribute( "onClick", "LoxfordPolyclinic648();" );
}
function LoxfordPolyclinic648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Loxford Polyclinic";
  BackDestination.setAttribute( "onClick", "ParkAvenue648();" );
  NextDestination.setAttribute( "onClick", "WingateRoad648();" );
}
function WingateRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Wingate Road";
  BackDestination.setAttribute( "onClick", "LoxfordPolyclinic648();" );
  NextDestination.setAttribute( "onClick", "ClementswoodBaptistChurch648();" );
}
function ClementswoodBaptistChurch648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Clementswood Baptist Church";
  BackDestination.setAttribute( "onClick", "WingateRoad648();" );
  NextDestination.setAttribute( "onClick", "BengalRoad648();" );
}
function BengalRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Bengal Road";
  BackDestination.setAttribute( "onClick", "ClementswoodBaptistChurch648();" );
  NextDestination.setAttribute( "onClick", "IlfordHill648();" );
}
function IlfordHill648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Ilford Hill";
  BackDestination.setAttribute( "onClick", "BengalRoad648();" );
  NextDestination.setAttribute( "onClick", "RedbridgeCentralLibrary648();" );
}
function KingstonRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Kingston Road";
  BackDestination.setAttribute( "onClick", "WingateRoad648();" );
  NextDestination.setAttribute( "onClick", "DudleyRoad648();" );
}
function DudleyRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Dudley Road";
  BackDestination.setAttribute( "onClick", "KingstonRoad648();" );
  NextDestination.setAttribute( "onClick", "ChapelRoad648();" );
}
function ChapelRoad648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Chapel Road";
  BackDestination.setAttribute( "onClick", "DudleyRoad648();" );
  NextDestination.setAttribute( "onClick", "HighRoadIlford648();" );
}
function HighRoadIlford648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Ilford Broadway";
  BackDestination.setAttribute( "onClick", "ChapelRoad648();" );
  NextDestination.setAttribute( "onClick", "RedbridgeCentralLibrary648();" );
}
function RedbridgeCentralLibrary648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Redbridge Central Library";
  BackDestination.setAttribute( "onClick", "HighRoadIlford648();" );
  NextDestination.setAttribute( "onClick", "HainaultStreet648();" );
}
function HainaultStreet648(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="Block";
  topTextNo.innerHTML = "Hainault Street";
  BackDestination.setAttribute( "onClick", "RedbridgeCentralLibrary648();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere648();" );
}
function BusTerminatesHere648(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Bus Terminates Here. Take Your Belongings";
  // BackDestination.setAttribute( "onClick", "HainaultStreet648();" );
  // NextDestination.setAttribute( "onClick", "BusTerminatesHere648();" );
  topTextYes.style.animationName = "BusTerminatesHerenew";
}
function ibus648Beckton(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "648 to Beckton";
  // BackDestination.setAttribute( "onClick", "HainaultStreet648();" );
  NextDestination.setAttribute( "onClick", "HainaultStreet648();" );
}

function ibus674RomfordStation(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "674 to Romford Station";
  // BackDestination.setAttribute( "onClick", "HainaultStreet648();" );
  NextDestination.setAttribute( "onClick", "SheffieldDrive674();" );
}
function SheffieldDrive674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Sheffield Drive";
  // BackDestination.setAttribute( "onClick", "HainaultStreet648();" );
  NextDestination.setAttribute( "onClick", "SettleRoad674();" );
}
function SettleRoad674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Settle Road";
  BackDestination.setAttribute( "onClick", "SheffieldDrive674();" );
  NextDestination.setAttribute( "onClick", "SedgefieldCrescent674();" );
}
function DagnamParkSquare674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Dagnam Park Square";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere674();" );
  NextDestination.setAttribute( "onClick", "TarnworthRoad674();" );
}
function TarnworthRoad674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Tarnworth Road";
  BackDestination.setAttribute( "onClick", "DagnamParkSquare674();" );
  NextDestination.setAttribute( "onClick", "StNeotsRoad674();" );
}
function StNeotsRoad674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Neot's Road";
  BackDestination.setAttribute( "onClick", "TarnworthRoad674();" );
  NextDestination.setAttribute( "onClick", "PetersfieldAvenue674();" );
}
function PetersfieldAvenue674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Petersfield Avenue";
  BackDestination.setAttribute( "onClick", "StNeotsRoad674();" );
  NextDestination.setAttribute( "onClick", "RedruthRoad674();" );
}
function RedruthRoad674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Redruth Road";
  BackDestination.setAttribute( "onClick", "PetersfieldAvenue674();" );
  NextDestination.setAttribute( "onClick", "WickfordDrive674();" );
}
function WickfordDrive674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wickford Drive";
  BackDestination.setAttribute( "onClick", "RedruthRoad674();" );
  NextDestination.setAttribute( "onClick", "SedgefieldCrescent674();" );
}
function SedgefieldCrescent674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Sedgefield Crescent";
  BackDestination.setAttribute( "onClick", "WickfordDrive674();" );
  NextDestination.setAttribute( "onClick", "HarknessClose674();" );
}
function HarknessClose674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Harkness Close";
  BackDestination.setAttribute( "onClick", "SedgefieldCrescent674();" );
  NextDestination.setAttribute( "onClick", "BrooksideSchool674();" );
}
function BrooksideSchool674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brookside School";
  BackDestination.setAttribute( "onClick", "HarknessClose674();" );
  NextDestination.setAttribute( "onClick", "ChippenhamRoad674();" );
}
function ChippenhamRoad674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chippenham Road";
  BackDestination.setAttribute( "onClick", "BrooksideSchool674();" );
  NextDestination.setAttribute( "onClick", "HilldeneAvenueShoppingCentre674();" );
}
function HilldeneAvenueShoppingCentre674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hilldene Avenue Shopping Centre";
  BackDestination.setAttribute( "onClick", "ChippenhamRoad674();" );
  NextDestination.setAttribute( "onClick", "ChatterisAvenue674();" );
}
function ChatterisAvenue674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chatteris Avenue";
  BackDestination.setAttribute( "onClick", "HilldeneAvenueShoppingCentre674();" );
  NextDestination.setAttribute( "onClick", "CharlburyCrescent674();" );
}
function HilldeneAvenueChatterisAvenue674(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Hilldene Avenue / Chatteris Avenue";
  BackDestination.setAttribute( "onClick", "HilldeneAvenueShoppingCentre674();" );
  NextDestination.setAttribute( "onClick", "CharlburyCrescent674();" );
  topTextYes.style.animationName = "HilldeneAvenueChatterisAvenue";
}
function CharlburyCrescent674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Charlbury Crescent";
  BackDestination.setAttribute( "onClick", "HilldeneAvenueChatterisAvenue674();" );
  NextDestination.setAttribute( "onClick", "GrangeRoad674();" );
}
function GrangeRoad674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Grange Road";
  BackDestination.setAttribute( "onClick", "CharlburyCrescent674();" );
  NextDestination.setAttribute( "onClick", "MyrtleRoad674();" );
}
function MyrtleRoad674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Myrtle Road";
  BackDestination.setAttribute( "onClick", "GrangeRoad674();" );
  NextDestination.setAttribute( "onClick", "HeatonAvenue674();" );
}
function HeatonAvenue674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Heaton Avenue";
  BackDestination.setAttribute( "onClick", "MyrtleRoad674();" );
  NextDestination.setAttribute( "onClick", "MasefieldCrescent674();" );
}
function MasefieldCrescent674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Masefield Crescent";
  BackDestination.setAttribute( "onClick", "HeatonAvenue674();" );
  NextDestination.setAttribute( "onClick", "GallowsCorner674();" );
}
function FarringdonAvenue674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Farringdon Avenue";
  BackDestination.setAttribute( "onClick", "HeatonAvenue674();" );
  NextDestination.setAttribute( "onClick", "GallowsCorner674();" );
}
function GallowsCorner674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Gallows Corner";
  BackDestination.setAttribute( "onClick", "FarringdonAvenue674();" );
  NextDestination.setAttribute( "onClick", "UpperBrentwoodRoad674();" );
}
function UpperBrentwoodRoad674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Upper Brentwood Road";
  BackDestination.setAttribute( "onClick", "GallowsCorner674();" );
  NextDestination.setAttribute( "onClick", "WesternAvenue674();" );
}
function WesternAvenue674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Western Avenue";
  BackDestination.setAttribute( "onClick", "UpperBrentwoodRoad674();" );
  NextDestination.setAttribute( "onClick", "BelgraveAvenue674();" );
}
function BelgraveAvenue674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Belgrave Avenue";
  BackDestination.setAttribute( "onClick", "WesternAvenue674();" );
  NextDestination.setAttribute( "onClick", "RoyalLibertySchool674();" );
}
function RoyalLibertySchool674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Royal Liberty School";
  BackDestination.setAttribute( "onClick", "BelgraveAvenue674();" );
  NextDestination.setAttribute( "onClick", "GideaParkStation674();" );
}
function GideaParkStation674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Gidea Park Station";
  BackDestination.setAttribute( "onClick", "RoyalLibertySchool674();" );
  NextDestination.setAttribute( "onClick", "TheDrillRoundabout674();" );
}
function TheDrillRoundabout674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The Drill Roundabout";
  BackDestination.setAttribute( "onClick", "GideaParkStation674();" );
  NextDestination.setAttribute( "onClick", "SalisburyRoad674();" );
}
function SalisburyRoad674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Salisbury Road";
  BackDestination.setAttribute( "onClick", "TheDrillRoundabout674();" );
  NextDestination.setAttribute( "onClick", "CranhamRoad674();" );
}
function CranhamRoad674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Cranham Road";
  BackDestination.setAttribute( "onClick", "SalisburyRoad674();" );
  NextDestination.setAttribute( "onClick", "FrancesBardsleyAcademy674();" );
}
function FrancesBardsleyAcademy674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Frances Bardsley Academy";
  BackDestination.setAttribute( "onClick", "CranhamRoad674();" );
  NextDestination.setAttribute( "onClick", "PrincesRoad674();" );
}
function PrincesRoad674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Princes Road";
  BackDestination.setAttribute( "onClick", "FrancesBardsleyAcademy674();" );
  NextDestination.setAttribute( "onClick", "AlbertRoad674();" );
}
function AlbertRoad674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Albert Road";
  BackDestination.setAttribute( "onClick", "PrincesRoad674();" );
  NextDestination.setAttribute( "onClick", "SouthStreet674();" );
}
function SouthStreet674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "South Street";
  BackDestination.setAttribute( "onClick", "AlbertRoad674();" );
  NextDestination.setAttribute( "onClick", "BrentwoodRoad674();" );
}
function BrentwoodRoad674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brentwood Road";
  BackDestination.setAttribute( "onClick", "SouthStreet674();" );
  NextDestination.setAttribute( "onClick", "RomfordStation674();" );
}
function RomfordStation674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Romford Station";
  BackDestination.setAttribute( "onClick", "BrentwoodRoad674();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere674();" );
}
function BusTerminatesHere674(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Bus Terminates Here. Take Your Belongings";
  // BackDestination.setAttribute( "onClick", "BrentwoodRoad674();" );
  // NextDestination.setAttribute( "onClick", "BusTerminatesHere674();" );
  topTextYes.style.animationName = "BusTerminatesHerenew";
}
function ThurloeGardens674(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Thurloe Gardens";
  BackDestination.setAttribute( "onClick", "SouthStreet674();" );
  // NextDestination.setAttribute( "onClick", "BusTerminatesHere674();" );
}
function ibus674HaroldHill(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "674 to Harold Hill, Dagnam Park Square";
  BackDestination.setAttribute( "onClick", "ThurloeGardens674();" );
  // NextDestination.setAttribute( "onClick", "BusTerminatesHere674();" );
  topTextYes.style.animationName = "HaroldHillDagnamParkSquare674";
}
function RomfordStation674ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "674 to Romford Station";
}
function HaroldHill674ibus(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "674 to Harold Hill, Dagnam Park Square";
  topTextYes.style.animationName = "HaroldHillDagnamParkSquare674";
}

function ibusD11TrafalgarSquare(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "D11 to Trafalgar Sqaure";
  NextDestination.setAttribute( "onClick", "ChurchhillPlaceD11();" );
}
function BillingsgateMarketD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Billingsgate Market";
  BackDestination.setAttribute( "onClick", "BusTerminatesHereD11();" );
  NextDestination.setAttribute( "onClick", "ChurchhillPlaceD11();" );
}
function ChurchhillPlaceD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Churchill Place";
  BackDestination.setAttribute( "onClick", "BillingsgateMarketD11();" );
  NextDestination.setAttribute( "onClick", "CanaryWharfStationD11();" );
}
function CanaryWharfStationD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Canary Wharf Station";
  BackDestination.setAttribute( "onClick", "ChurchhillPlaceD11();" );
  NextDestination.setAttribute( "onClick", "MarshWallHeronQuayD11();" );
}
function MarshWallHeronQuayD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Marsh Wall / Heron Quay";
  BackDestination.setAttribute( "onClick", "CanaryWharfStationD11();" );
  NextDestination.setAttribute( "onClick", "CubaStreetD11();" );
}
function CubaStreetD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Cuba Street";
  BackDestination.setAttribute( "onClick", "MarshWallHeronQuayD11();" );
  NextDestination.setAttribute( "onClick", "BarkantineClinicHutchingsStreetD11();" );
}
function ByngStreetD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Byng Street";
  BackDestination.setAttribute( "onClick", "MarshWallHeronQuayD11();" );
  NextDestination.setAttribute( "onClick", "BarkantineClinicHutchingsStreetD11();" );
}
function BarkantineClinicHutchingsStreetD11(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Barkantine Clinic / Hutchings Street";
  BackDestination.setAttribute( "onClick", "ByngStreetD11();" );
  NextDestination.setAttribute( "onClick", "SirJohnMcdougalGardensD11();" );
  topTextYes.style.animationName = "BarkantineClinicHutchingsStreet";
}
function SirJohnMcdougalGardensD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Sir John Mcdougal Gardens";
  BackDestination.setAttribute( "onClick", "BarkantineClinicHutchingsStreetD11();" );
  NextDestination.setAttribute( "onClick", "ArnhemWharfPrimarySchoolD11();" );
}
function ArnhemWharfPrimarySchoolD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Arnhem Wharf Primary School";
  BackDestination.setAttribute( "onClick", "SirJohnMcdougalGardensD11();" );
  NextDestination.setAttribute( "onClick", "CrewsStreetTheSpaceTheatreD11();" );
}
function CrewsStreetTheSpaceTheatreD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Crews Street / The Space Theatre";
  BackDestination.setAttribute( "onClick", "ArnhemWharfPrimarySchoolD11();" );
  NextDestination.setAttribute( "onClick", "StEdmundsSchoolD11();" );
}
function CrewsStreetD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Crews Street";
  BackDestination.setAttribute( "onClick", "ArnhemWharfPrimarySchoolD11();" );
  NextDestination.setAttribute( "onClick", "StEdmundsSchoolD11();" );
}
function StEdmundsSchoolD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Edmund's School";
  BackDestination.setAttribute( "onClick", "CrewsStreetD11();" );
  NextDestination.setAttribute( "onClick", "TelegraphPlaceD11();" );
}
function TelegraphPlaceD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Telegraph Place";
  BackDestination.setAttribute( "onClick", "StEdmundsSchoolD11();" );
  NextDestination.setAttribute( "onClick", "MudchuteStationD11();" );
}
function MudchuteStationD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mudchute Station";
  BackDestination.setAttribute( "onClick", "TelegraphPlaceD11();" );
  NextDestination.setAttribute( "onClick", "CrossharbourAsdaD11();" );
}
function CrossharbourAsdaD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Crossharbour Asda";
  BackDestination.setAttribute( "onClick", "MudchuteStationD11();" );
  NextDestination.setAttribute( "onClick", "CrossharbourStationD11();" );
}
function CrossharbourStationD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Crossharbour Station";
  BackDestination.setAttribute( "onClick", "CrossharbourAsdaD11();" );
  NextDestination.setAttribute( "onClick", "HarbourExchangeSquareD11();" );
}
function EastFerryRoadD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "East Ferry Road";
  BackDestination.setAttribute( "onClick", "CrossharbourStationD11();" );
  NextDestination.setAttribute( "onClick", "HarbourExchangeSquareD11();" );
}
function HarbourExchangeSquareD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Harbour Exchange Square";
  BackDestination.setAttribute( "onClick", "EastFerryRoadD11();" );
  NextDestination.setAttribute( "onClick", "JackDashHouseD11();" );
}
function JackDashHouseD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Jack Dash House";
  BackDestination.setAttribute( "onClick", "HarbourExchangeSquareD11();" );
  NextDestination.setAttribute( "onClick", "TheBlueBridgeD11();" );
}
function TheBlueBridgeD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The Blue Bridge";
  BackDestination.setAttribute( "onClick", "JackDashHouseD11();" );
  NextDestination.setAttribute( "onClick", "ColdharbourD11();" );
}
function ColdharbourD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Coldharbour";
  BackDestination.setAttribute( "onClick", "JackDashHouseD11();" );
  NextDestination.setAttribute( "onClick", "BaffinWayD11();" );
}
function AspenWayD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aspen Way";
  BackDestination.setAttribute( "onClick", "ColdharbourD11();" );
  NextDestination.setAttribute( "onClick", "BaffinWayD11();" );
}
function BaffinWayD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Baffin Way";
  BackDestination.setAttribute( "onClick", "AspenWayD11();" );
  NextDestination.setAttribute( "onClick", "EastIndiaStationD11();" );
}
function EastIndiaStationD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "East India Station";
  BackDestination.setAttribute( "onClick", "BaffinWayD11();" );
  NextDestination.setAttribute( "onClick", "LeamouthRoadD11();" );
}
function LeamouthRoadD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Leamouth Road";
  BackDestination.setAttribute( "onClick", "EastIndiaStationD11();" );
  NextDestination.setAttribute( "onClick", "LeamouthOrchardPlaceD11();" );
}
function LeamouthOrchardPlaceD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Leamouth / Orchard Place";
  BackDestination.setAttribute( "onClick", "EastIndiaStationD11();" );
  NextDestination.setAttribute( "onClick", "StephensonStreetD11();" );
}
function StephensonStreetD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Stephenson Street";
  BackDestination.setAttribute( "onClick", "CanningTownBusStationD11();" );
  NextDestination.setAttribute( "onClick", "CanningTownBusStationD11();" );
}
function CanningTownBusStationD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Canning Town Bus Station";
  BackDestination.setAttribute( "onClick", "LeamouthOrchardPlaceD11();" );
  NextDestination.setAttribute( "onClick", "BlackwallTunnelD11();" );
}
function BlackwallTunnelD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Blackwall Tunnel";
  BackDestination.setAttribute( "onClick", "CanningTownBusStationD11();" );
  NextDestination.setAttribute( "onClick", "BazelyStreetD11();" );
}
function AbbottRoadD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Abbott Road";
  BackDestination.setAttribute( "onClick", "StephensonStreetD11();" );
  NextDestination.setAttribute( "onClick", "NutmegLaneD11();" );
}
function NutmegLaneD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Nutmeg Lane";
  BackDestination.setAttribute( "onClick", "AbbottRoadD11();" );
  NextDestination.setAttribute( "onClick", "BrunswickRoadD11();" );
}
function BrunswickRoadD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brunswick Road";
  BackDestination.setAttribute( "onClick", "NutmegLaneD11();" );
  NextDestination.setAttribute( "onClick", "BazelyStreetD11();" );
}
function BazelyStreetD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bazely Street";
  BackDestination.setAttribute( "onClick", "BrunswickRoadD11();" );
  NextDestination.setAttribute( "onClick", "ChrispStreetMarketD11();" );
}
function ChrispStreetMarketD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chrisp Street Market";
  BackDestination.setAttribute( "onClick", "BazelyStreetD11();" );
  NextDestination.setAttribute( "onClick", "AugustaStreetD11();" );
}
function AugustaStreetD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Augusta Street";
  BackDestination.setAttribute( "onClick", "ChrispStreetMarketD11();" );
  NextDestination.setAttribute( "onClick", "BroomfieldStreetD11();" );
}
function BroomfieldStreetD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Broomfield Street";
  BackDestination.setAttribute( "onClick", "AugustaStreetD11();" );
  NextDestination.setAttribute( "onClick", "DevonsRoadD11();" );
}
function DevonsRoadD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Devons Road";
  BackDestination.setAttribute( "onClick", "BroomfieldStreetD11();" );
  NextDestination.setAttribute( "onClick", "BurgessStreetD11();" );
}
function BurgessStreetD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Burgess Street";
  BackDestination.setAttribute( "onClick", "DevonsRoadD11();" );
  NextDestination.setAttribute( "onClick", "BurdettRoadStPaulsChurchD11();" );
}
function StPaulsWayTrustSchoolD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Paul's Way Trust School";
  BackDestination.setAttribute( "onClick", "DevonsRoadD11();" );
  NextDestination.setAttribute( "onClick", "BurdettRoadStPaulsChurchD11();" );
}
function BurdettRoadStPaulsChurchD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Burdett Road / St Paul's Church";
  BackDestination.setAttribute( "onClick", "StPaulsWayTrustSchoolD11();" );
  NextDestination.setAttribute( "onClick", "AckroydDriveD11();" );
}
function AckroydDriveD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ackroyd Drive";
  BackDestination.setAttribute( "onClick", "BurdettRoadStPaulsChurchD11();" );
  NextDestination.setAttribute( "onClick", "EricStreetD11();" );
}
function StPaulsWayD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Paul's Way";
  BackDestination.setAttribute( "onClick", "BurdettRoadStPaulsChurchD11();" );
  NextDestination.setAttribute( "onClick", "MileEndParkLeisureCentreD11();" );
}
function MileEndParkLeisureCentreD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mile End Park Leisure Centre";
  BackDestination.setAttribute( "onClick", "StPaulsWayD11();" );
  NextDestination.setAttribute( "onClick", "EricStreetD11();" );
}
function EricStreetD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Eric Street";
  BackDestination.setAttribute( "onClick", "MileEndParkLeisureCentreD11();" );
  NextDestination.setAttribute( "onClick", "MileEndD11();" );
}
function MileEndD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mile End";
  BackDestination.setAttribute( "onClick", "EricStreetD11();" );
  NextDestination.setAttribute( "onClick", "RegentsCanalD11();" );
}
function RegentsCanalD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Regents Canal";
  BackDestination.setAttribute( "onClick", "MileEndD11();" );
  NextDestination.setAttribute( "onClick", "QueenMaryUniversityOfLondonD11();" );
}
function QueenMaryUniversityOfLondonD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Queen Mary University Of London";
  BackDestination.setAttribute( "onClick", "RegentsCanalD11();" );
  NextDestination.setAttribute( "onClick", "OceanEstateD11();" );
}
function OceanEstateD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ocean Estate";
  BackDestination.setAttribute( "onClick", "RegentsCanalD11();" );
  NextDestination.setAttribute( "onClick", "StepneyGreenStationD11();" );
}
function BancroftRoadOceanEstateD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bancroft Road / Ocean Estate";
  BackDestination.setAttribute( "onClick", "QueenMaryUniversityOfLondonD11();" );
  NextDestination.setAttribute( "onClick", "StepneyGreenStationD11();" );
}
function StepneyGreenStationD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Stepney Green Station";
  BackDestination.setAttribute( "onClick", "BancroftRoadOceanEstateD11();" );
  NextDestination.setAttribute( "onClick", "StepneyGreenD11();" );
}
function StepneyGreenD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Stepney Green";
  BackDestination.setAttribute( "onClick", "StepneyGreenStationD11();" );
  NextDestination.setAttribute( "onClick", "BoothMemorialD11();" );
}
function BoothMemorialD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Booth Memorial";
  BackDestination.setAttribute( "onClick", "StepneyGreenD11();" );
  NextDestination.setAttribute( "onClick", "SidneyStreetD11();" );
}
function SidneyStreetD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Sidney Street";
  BackDestination.setAttribute( "onClick", "BoothMemorialD11();" );
  NextDestination.setAttribute( "onClick", "WhitechapelStnRoyalLondonHospD11();" );
}
function WhitechapelStnRoyalLondonHospD11(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Whitechapel Stn / Royal London Hosp";
  BackDestination.setAttribute( "onClick", "BoothMemorialD11();" );
  NextDestination.setAttribute( "onClick", "TheEastLondonMosqueD11();" );
  topTextYes.style.animationName = "WhitechapelStnRoyalLondonHosp"
}
function TheEastLondonMosqueD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The East London Mosque";
  BackDestination.setAttribute( "onClick", "WhitechapelStnRoyalLondonHospD11();" );
  NextDestination.setAttribute( "onClick", "AltabAliParkD11();" );
}
function AltabAliParkD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Altab Ali Park";
  BackDestination.setAttribute( "onClick", "TheEastLondonMosqueD11();" );
  NextDestination.setAttribute( "onClick", "AldgateEastStationD11();" );
}
function AldgateEastStationD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldgate East Station";
  BackDestination.setAttribute( "onClick", "AltabAliParkD11();" );
  NextDestination.setAttribute( "onClick", "DukePlaceD11();" );
}
function DukePlaceD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Duke's Place";
  BackDestination.setAttribute( "onClick", "AldgateEastStationD11();" );
  NextDestination.setAttribute( "onClick", "BishopsgateD11();" );
}
function BishopsgateD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bishopsgate";
  BackDestination.setAttribute( "onClick", "DukePlaceD11();" );
  NextDestination.setAttribute( "onClick", "FenchurchStreetD11();" );
}
function StBotolphStreetD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Botolph Street";
  BackDestination.setAttribute( "onClick", "AldgateEastStationD11();" );
  NextDestination.setAttribute( "onClick", "WormwoodStreetD11();" );
}
function WormwoodStreetD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wormwood Street";
  BackDestination.setAttribute( "onClick", "StBotolphStreetD11();" );
  NextDestination.setAttribute( "onClick", "FenchurchStreetD11();" );
}
function FenchurchStreetD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Fenchurch Street";
  BackDestination.setAttribute( "onClick", "WormwoodStreetD11();" );
  NextDestination.setAttribute( "onClick", "CannonStreetStationD11();" );
}
function GracechurchStreetMonumentStationD11(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Gracechurch Street / Monument Station";
  BackDestination.setAttribute( "onClick", "FenchurchStreetD11();" );
  NextDestination.setAttribute( "onClick", "CannonStreetStationD11();" );
  topTextYes.style.animationName = "GracechurchStreetMonumentStation";
}
function CannonStreetStationD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Cannon Street Station";
  BackDestination.setAttribute( "onClick", "GracechurchStreetMonumentStationD11();" );
  NextDestination.setAttribute( "onClick", "StPaulsChurchyardD11();" );
}
function StPaulsChurchyardD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Paul's Churchyard";
  BackDestination.setAttribute( "onClick", "CannonStreetStationD11();" );
  NextDestination.setAttribute( "onClick", "StPaulsCathedralD11();" );
}
function MansionHouseStationD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mansion House Station";
  BackDestination.setAttribute( "onClick", "CannonStreetStationD11();" );
  NextDestination.setAttribute( "onClick", "StPaulsCathedralD11();" );
}
function StPaulsCathedralD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Paul's Cathedral";
  BackDestination.setAttribute( "onClick", "MansionHouseStationD11();" );
  NextDestination.setAttribute( "onClick", "CityThameslinkStnLudgateCircusD11();" );
}
function CityThameslinkStnLudgateCircusD11(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "City Thameslink Stn / Ludgate Circus";
  BackDestination.setAttribute( "onClick", "StPaulsCathedralD11();" );
  NextDestination.setAttribute( "onClick", "ShoeLaneD11();" );
  topTextYes.style.animationName = "CityThameslinkStnLudgateCircus";
}
function ShoeLaneD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Shoe Lane";
  BackDestination.setAttribute( "onClick", "CityThameslinkStnLudgateCircusD11();" );
  NextDestination.setAttribute( "onClick", "FetterLaneD11();" );
}
function LudgateHillOldBaileyD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ludgate Hill / Old Bailey";
  BackDestination.setAttribute( "onClick", "StPaulsCathedralD11();" );
  NextDestination.setAttribute( "onClick", "LudgateCircusD11();" );
}
function LudgateCircusD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ludgate Circus";
  BackDestination.setAttribute( "onClick", "LudgateHillOldBaileyD11();" );
  NextDestination.setAttribute( "onClick", "FetterLaneD11();" );
}
function FetterLaneD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Fetter Lane";
  BackDestination.setAttribute( "onClick", "LudgateCircusD11();" );
  NextDestination.setAttribute( "onClick", "ChanceryLaneD11();" );
}
function ChanceryLaneD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chancery Lane";
  BackDestination.setAttribute( "onClick", "FetterLaneD11();" );
  NextDestination.setAttribute( "onClick", "TheRoyalCourtsOfJusticeD11();" );
}
function TheRoyalCourtsOfJusticeD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The Royal Courts Of Justice";
  BackDestination.setAttribute( "onClick", "FetterLaneD11();" );
  NextDestination.setAttribute( "onClick", "AldwychAustraliaHouseD11();" );
}
function AldwychAustraliaHouseD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldwych Australia House";
  BackDestination.setAttribute( "onClick", "TheRoyalCourtsOfJusticeD11();" );
  NextDestination.setAttribute( "onClick", "AldwychDruryLaneD11();" );
}
function AldwychDruryLaneD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldwych / Drury Lane";
  BackDestination.setAttribute( "onClick", "AldwychAustraliaHouseD11();" );
  NextDestination.setAttribute( "onClick", "SavoyStreetD11();" );
}
function SavoyStreetD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Savoy Street";
  BackDestination.setAttribute( "onClick", "TheRoyalCourtsOfJusticeD11();" );
  NextDestination.setAttribute( "onClick", "BedfordStreetD11();" );
}
function BedfordStreetD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bedford Street";
  BackDestination.setAttribute( "onClick", "SavoyStreetD11();" );
  NextDestination.setAttribute( "onClick", "CharingCrossStationD11();" );
}
function CharingCrossStationD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Charing Cross Station";
  BackDestination.setAttribute( "onClick", "BedfordStreetD11();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHereD11();" );
}
function AldwychD11(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldwych";
  BackDestination.setAttribute( "onClick", "TheRoyalCourtsOfJusticeD11();" );
  NextDestination.setAttribute( "onClick", "SouthamptonStreetCoventGardenD11();" );
}
function SouthamptonStreetCoventGardenD11(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Southampton Street / Covent Garden";
  BackDestination.setAttribute( "onClick", "AldwychD11();" );
  NextDestination.setAttribute( "onClick", "ibusD11TrafalgarWay();" );
  topTextYes.style.animationName = "SouthamptonStreetCoventGarden";
}
function ibusD11TrafalgarWay(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "D11 to Trafalgar Way";
  BackDestination.setAttribute( "onClick", "BusTerminatesHereD11();" );
  NextDestination.setAttribute( "onClick", "SouthamptonStreetCoventGardenD11();" );
}
function BusTerminatesHereD11(){
  topTextYes.style.display ="Block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Bus Terminates Here. Take Your belongings with you.";
  BackDestination.setAttribute( "onClick", "ibusD11TrafalgarSquare();" );
  NextDestination.setAttribute( "onClick", "ibusD11TrafalgarWay();" );
  topTextYes.style.animationName = "Ending";
}
function TrafalgarWayD11ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "D11 to Trafalgar Way";
}
function TrafalgarSquareD11ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "D11 to Trafalgar Square";
}
