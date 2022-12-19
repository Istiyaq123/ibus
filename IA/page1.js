var smallSpace = '<span class="invisible">.</span>'
var bigSpace = '<span class="invisible">...</span>'
var sSpace = '<span class="invisible">.</span>'
var bSpace = '<span class="invisible">...</span>'

var topTextYes = document.getElementById("topTextYes");
var topTextNo = document.getElementById("topTextNo");

function BethnalGreen309(){
  ibus309BethnalGreen()
  showDestination.setAttribute( "onClick", "BethnalGreen309ibus();" );
}
function CanningTown309(){
  ibus309CanningTown()
  showDestination.setAttribute( "onClick", "CanningTown309ibus();" );
}
function EarlCourtC3(){
  ibusC3EarlCourt()
  showDestination.setAttribute( "onClick", "EarlCourtC3ibus();" );
}
function ClaphamJunctionC3(){
  ibusC3ClaphamJunction()
  showDestination.setAttribute( "onClick", "ClaphamJunctionC3ibus();" );
}
function Waterloo76(){
  ibus76Waterloo()
  showDestination.setAttribute( "onClick", "Waterloo76ibus();" );
}
function TottenhamHale76(){
  ibus76TottenhamHale()
  showDestination.setAttribute( "onClick", "TottenhamHale76ibus();" );
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

// function ibus474ManorPark(){
//   topTextYes.style.display ="none";
//   topTextNo.style.display ="block";
//   topTextNo.innerHTML = "4"+smallSpace+"7"+smallSpace+"4"+bigSpace+"t"+smallSpace+"o"+bigSpace+"M"+smallSpace+"a"+smallSpace+"n"+smallSpace+"o"+smallSpace+"r"+bigSpace+"P"+smallSpace+"a"+smallSpace+"r"+smallSpace+"k";
//   NextDestination.setAttribute( "onClick", "HermitRoad();" );
// }function HermitRoad(){
//   topTextYes.style.display ="none";
//   topTextNo.style.display ="block";
//   topTextNo.innerHTML = "H"+smallSpace+"e"+smallSpace+"r"+smallSpace+"m"+smallSpace+"i"+smallSpace+"t"+bigSpace+"R"+smallSpace+"o"+smallSpace+"a"+smallSpace+"d";
//   NextDestination.setAttribute( "onClick", "RathboneMarket();" );
//   BackDestination.setAttribute( "onClick", "ibus474ManorPark();" );
// }function RathboneMarket(){
//   topTextYes.style.display ="none";
//   topTextNo.style.display ="block";
//   topTextNo.innerHTML = "Y"+smallSpace+"o"+smallSpace+"u"+bigSpace+"S"+smallSpace+"u"+smallSpace+"c"+smallSpace+"k";
//   NextDestination.setAttribute( "onClick", "RathboneMarket();" );
//   BackDestination.setAttribute( "onClick", "HermitRoad();" );
// }
function ibus309BethnalGreen(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "309 to Bethnal Green, Chest Hospital";
  NextDestination.setAttribute( "onClick", "AbbotRoad309();" );
  topTextYes.style.animationName = "BethnalGreen309";
}
function AbbotRoad309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Abbott Road";
  NextDestination.setAttribute( "onClick", "AberfeldyStreet309();" );
}
function AberfeldyStreet309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aberfeldy Street";
  BackDestination.setAttribute( "onClick", "AbbotRoad309();" );
  NextDestination.setAttribute( "onClick", "EttrickStreet309();" );
}
function CanningTown309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Canning Town Station";
  BackDestination.setAttribute( "onClick", " BusTerminatesHere309();" );
  NextDestination.setAttribute( "onClick", "StephensonStreet309();" );
}
function StephensonStreet309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Stephenson Street";
  BackDestination.setAttribute( "onClick", "CanningTown309();" );
  NextDestination.setAttribute( "onClick", "EastIndiaDockRoad309();" );
}
function EastIndiaDockRoad309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "East India Dock Road";
  BackDestination.setAttribute( "onClick", "StephensonStreet309();" );
  NextDestination.setAttribute( "onClick", "GoodwayGardens309();" );
}
function GoodwayGardens309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Goodway Gardens";
  BackDestination.setAttribute( "onClick", "EastIndiaDockRoad309();" );
  NextDestination.setAttribute( "onClick", "EttrickStreet309();" );
}
function EttrickStreet309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ettrick Street";
  BackDestination.setAttribute( "onClick", "GoodwayGardens309();" );
  NextDestination.setAttribute( "onClick", "LevenRoad309();" );
}
function LevenRoad309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Leven Road";
  BackDestination.setAttribute( "onClick", "EttrickStreet309();" );
  NextDestination.setAttribute( "onClick", "PoplarBaptistChurch309();" );
}
function PoplarBaptistChurch309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Poplar Baptist Church";
  BackDestination.setAttribute( "onClick", "LevenRoad309();" );
  NextDestination.setAttribute( "onClick", "TeviotEstate309();" );
}
function TeviotEstate309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Teviot Estate";
  BackDestination.setAttribute( "onClick", "PoplarBaptistChurch309();" );
  NextDestination.setAttribute( "onClick", "StMichaelscourt309();" );
}
function StMichaelscourt309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Michael's Court";
  BackDestination.setAttribute( "onClick", "TeviotEstate309();" );
  NextDestination.setAttribute( "onClick", "GlennkerryRoad309();" );
}
function GlennkerryRoad309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Glennkerry Road";
  BackDestination.setAttribute( "onClick", "StMichaelscourt309();" );
  NextDestination.setAttribute( "onClick", "HayCurrieStreet309();" );
}
function JollysGreen309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Jolly's Green";
  BackDestination.setAttribute( "onClick", "StMichaelscourt309();" );
  NextDestination.setAttribute( "onClick", "HayCurrieStreet309();" );
}
function HayCurrieStreet309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hay Currie Street";
  BackDestination.setAttribute( "onClick", "JollysGreen309();" );
  NextDestination.setAttribute( "onClick", "ChrispStreetMarket309();" );
}
function ChrispStreetMarket309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chrisp Street Market";
  BackDestination.setAttribute( "onClick", "HayCurrieStreet309();" );
  NextDestination.setAttribute( "onClick", "AugustaStreet309();" );
}
function AugustaStreet309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Augusta Street";
  BackDestination.setAttribute( "onClick", "ChrispStreetMarket309();" );
  NextDestination.setAttribute( "onClick", "BroomfieldStreet309();" );
}
function BroomfieldStreet309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Broomfield Street";
  BackDestination.setAttribute( "onClick", "AugustaStreet309();" );
  NextDestination.setAttribute( "onClick", "BurdettRoadStPaulChurch309();" );
}
function StPaulsWayTrustSchool309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Pauls Way Trust School";
  BackDestination.setAttribute( "onClick", "BroomfieldStreet309();" );
  NextDestination.setAttribute( "onClick", "BurdettRoadStPaulChurch309();" );
}
function BurdettRoadStPaulChurch309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Burdett Road / St Paul Church";
  BackDestination.setAttribute( "onClick", "StPaulsWayTrustSchool309();" );
  NextDestination.setAttribute( "onClick", "CopperfieldRoad309();" );
}
function CopperfieldRoad309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Copperfield Road";
  BackDestination.setAttribute( "onClick", "BurdettRoadStPaulChurch309();" );
  NextDestination.setAttribute( "onClick", "HarfordStreet309();" );
}
function HarfordStreet309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Harford Street";
  BackDestination.setAttribute( "onClick", "CopperfieldRoad309();" );
  NextDestination.setAttribute( "onClick", "StepneyGreenSchool309();" );
}
function StepneyGreenSchool309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Stepney Green School";
  BackDestination.setAttribute( "onClick", "HarfordStreet309();" );
  NextDestination.setAttribute( "onClick", "MileEndRoad309();" );
}
function MileEndRoad309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mile End Road";
  BackDestination.setAttribute( "onClick", "StepneyGreenSchool309();" );
  NextDestination.setAttribute( "onClick", "StepneyGreenStation309();" );
}
function StepneyGreenStation309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Stepney Green Station";
  BackDestination.setAttribute( "onClick", "MileEndRoad309();" );
  NextDestination.setAttribute( "onClick", "ColebertAvenue309();" );
}
function ColebertAvenue309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Colebert Avenue";
  BackDestination.setAttribute( "onClick", "StepneyGreenStation309();" );
  NextDestination.setAttribute( "onClick", "PortmanPlace309();" );
}
function PortmanPlace309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Portman Place";
  BackDestination.setAttribute( "onClick", "ColebertAvenue309();" );
  NextDestination.setAttribute( "onClick", "BethnalGreenStation309();" );
}
function BurnhamStreet309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Burnham Street";
  BackDestination.setAttribute( "onClick", "PortmanPlace309();" );
  NextDestination.setAttribute( "onClick", "BethnalGreenStation309();" );
}
function BethnalGreenStation309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bethnal Green Station";
  BackDestination.setAttribute( "onClick", "BurnhamStreet309();" );
  NextDestination.setAttribute( "onClick", "YorkHall309();" );
}
function YorkHall309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "York Hall";
  BackDestination.setAttribute( "onClick", "BethnalGreenStation309();" );
  NextDestination.setAttribute( "onClick", "PeelGrove309();" );
}
function PeelGrove309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Peel Grove";
  BackDestination.setAttribute( "onClick", "BethnalGreenStation309();" );
  NextDestination.setAttribute( "onClick", "BonnerRoad309();" );
}
function BonnerRoad309(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bonner Road";
  BackDestination.setAttribute( "onClick", "PeelGrove309();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere309();" );
}
function BusTerminatesHere309(){
  topTextYes.style.display ="Block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Bus Terminates Here. Take Your Belongins with you.";
  BackDestination.setAttribute( "onClick", "ibus309BethnalGreen();" );
  NextDestination.setAttribute( "onClick", "ibus309CanningTown();" );
  topTextYes.style.animationName = "Ending";
}
function ibus309CanningTown(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "309 to Canning Town";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere309();" );
  NextDestination.setAttribute( "onClick", "BonnerRoad309();" );
}
function CanningTown309ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "309 to Canning Town";
}function BethnalGreen309ibus(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "309 to Bethnal Green, Chest Hospital";
  topTextYes.style.animationName = "BethnalGreen309";
}

function ibus55OxfordCircus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "5"+sSpace+"5"+bSpace+"t"+sSpace+"o"+bSpace+"O"+sSpace+"x"+sSpace+"f"+sSpace+"o"+sSpace+"r"+sSpace+"d"+bSpace+"C"+sSpace+"i"+sSpace+"r"+sSpace+"c"+sSpace+"u"+sSpace+"s";
  // BackDestination.setAttribute( "onClick", "BusTerminatesHere309();" );
  NextDestination.setAttribute( "onClick", "GrosvenorParkRoad55();" );
}
function GrosvenorParkRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "G"+sSpace+"r"+sSpace+"s"+sSpace+"v"+sSpace+"e"+sSpace+"n"+sSpace+"o"+sSpace+"r"+bSpace+"P"+sSpace+"a"+sSpace+"r"+sSpace+"k"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "ibus55OxfordCircus();" );
  NextDestination.setAttribute( "onClick", "GroveRoad55();" );
}
function WalthamstowBusStation55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "W"+sSpace+"a"+sSpace+"l"+sSpace+"t"+sSpace+"h"+sSpace+"a"+sSpace+"m"+sSpace+"s"+sSpace+"t"+sSpace+"o"+sSpace+"w"+bSpace+"B"+sSpace+"u"+sSpace+"s"+bSpace+"S"+sSpace+"t"+sSpace+"a"+sSpace+"t"+sSpace+"i"+sSpace+"o"+sSpace+"n";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere55();" );
  NextDestination.setAttribute( "onClick", "QueenRoad();" );
}
function QueenRoad(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Q"+sSpace+"u"+sSpace+"e"+sSpace+"e"+sSpace+"n"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "WalthamstowBusStation55();" );
  NextDestination.setAttribute( "onClick", "GroveRoad55();" );
}
function GroveRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "G"+sSpace+"r"+sSpace+"o"+sSpace+"v"+sSpace+"e"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "QueenRoad();" );
  NextDestination.setAttribute( "onClick", "BakersAvenue55();" );
}
function BakersAvenue55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "B"+sSpace+"a"+sSpace+"k"+sSpace+"e"+sSpace+"r"+sSpace+"s"+bSpace+"A"+sSpace+"v"+sSpace+"e"+sSpace+"n"+sSpace+"u"+sSpace+"e";
  BackDestination.setAttribute( "onClick", "GroveRoad55();" );
  NextDestination.setAttribute( "onClick", "HighRoadLeytonBakersArms55();" );
}
function HoeStreetBakersArm55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "H"+sSpace+"o"+sSpace+"e"+bSpace+"S"+sSpace+"t"+sSpace+"r"+sSpace+"e"+sSpace+"e"+sSpace+"t"+bSpace+"/"+bSpace+"B"+sSpace+"a"+sSpace+"k"+sSpace+"e"+sSpace+"r"+sSpace+"s"+bSpace+"A"+sSpace+"r"+sSpace+"m";
  BackDestination.setAttribute( "onClick", "GroveRoad55();" );
  NextDestination.setAttribute( "onClick", "HighRoadLeytonBakersArms55();" );
}
function HighRoadLeytonBakersArms55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "H"+sSpace+"i"+sSpace+"g"+sSpace+"h"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d"+bSpace+"L"+sSpace+"e"+sSpace+"y"+sSpace+"t"+sSpace+"o"+sSpace+"n"+bSpace+"/"+bSpace+"B"+sSpace+"a"+sSpace+"k"+sSpace+"e"+sSpace+"r"+sSpace+"s"+bSpace+"A"+sSpace+"r"+sSpace+"m"+sSpace+"s";
  BackDestination.setAttribute( "onClick", "HoeStreetBakersArm55();" );
  NextDestination.setAttribute( "onClick", "ShortlandsRoad55();" );
}
function ShortlandsRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "S"+sSpace+"h"+sSpace+"o"+sSpace+"r"+sSpace+"t"+sSpace+"l"+sSpace+"a"+sSpace+"n"+sSpace+"d"+sSpace+"s"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "HighRoadLeytonBakersArms55();" );
  NextDestination.setAttribute( "onClick", "ManorRoad55();" );
}
function ManorRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "M"+sSpace+"a"+sSpace+"n"+sSpace+"o"+sSpace+"r"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "ShortlandsRoad55();" );
  NextDestination.setAttribute( "onClick", "MarkhouseRoad55();" );
}
function ShrublandRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "S"+sSpace+"h"+sSpace+"r"+sSpace+"u"+sSpace+"b"+sSpace+"l"+sSpace+"a"+sSpace+"n"+sSpace+"d"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "HighRoadLeytonBakersArms55();" );
  NextDestination.setAttribute( "onClick", "RochdaleRoad55();" );
}
function RochdaleRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "R"+sSpace+"o"+sSpace+"c"+sSpace+"h"+sSpace+"d"+sSpace+"a"+sSpace+"l"+sSpace+"e"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "ShrublandRoad55();" );
  NextDestination.setAttribute( "onClick", "MarkhouseRoad55();" );
}
function MarkhouseRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "M"+sSpace+"a"+sSpace+"r"+sSpace+"k"+sSpace+"h"+sSpace+"o"+sSpace+"u"+sSpace+"s"+sSpace+"e"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "RochdaleRoad55();" );
  NextDestination.setAttribute( "onClick", "EmmanuelParishChurch55();" );
}
function EmmanuelParishChurch55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "E"+sSpace+"m"+sSpace+"m"+sSpace+"a"+sSpace+"n"+sSpace+"u"+sSpace+"e"+sSpace+"l"+bSpace+"P"+sSpace+"a"+sSpace+"r"+sSpace+"i"+sSpace+"s"+sSpace+"h"+bSpace+"C"+sSpace+"h"+sSpace+"u"+sSpace+"r"+sSpace+"c"+sSpace+"h";
  BackDestination.setAttribute( "onClick", "MarkhouseRoad55();" );
  NextDestination.setAttribute( "onClick", "PerthRoad55();" );
}
function PerthRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "P"+sSpace+"e"+sSpace+"r"+sSpace+"t"+sSpace+"h"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "EmmanuelParishChurch55();" );
  NextDestination.setAttribute( "onClick", "LeaBridgeStation55();" );
}
function LeaBridgeStation55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "L"+sSpace+"e"+sSpace+"a"+bSpace+"B"+sSpace+"r"+sSpace+"i"+sSpace+"d"+sSpace+"g"+sSpace+"e"+bSpace+"S"+sSpace+"t"+sSpace+"a"+sSpace+"t"+sSpace+"i"+sSpace+"o"+sSpace+"n";
  BackDestination.setAttribute( "onClick", "PerthRoad55();" );
  NextDestination.setAttribute( "onClick", "LeaValleyRidingCentre55();" );
}
function LeaValleyRidingCentre55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "L"+sSpace+"e"+sSpace+"a"+bSpace+"V"+sSpace+"a"+sSpace+"l"+sSpace+"l"+sSpace+"e"+sSpace+"y"+bSpace+"R"+sSpace+"i"+sSpace+"d"+sSpace+"i"+sSpace+"n"+sSpace+"g"+bSpace+"C"+sSpace+"e"+sSpace+"n"+sSpace+"t"+sSpace+"r"+sSpace+"e";
  BackDestination.setAttribute( "onClick", "PerthRoad55();" );
  NextDestination.setAttribute( "onClick", "LeaValleyIceCentre55();" );
}
function LeaValleyIceCentre55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "L"+sSpace+"e"+sSpace+"a"+bSpace+"V"+sSpace+"a"+sSpace+"l"+sSpace+"l"+sSpace+"e"+sSpace+"y"+bSpace+"I"+sSpace+"c"+sSpace+"e"+bSpace+"C"+sSpace+"e"+sSpace+"n"+sSpace+"t"+sSpace+"r"+sSpace+"e";
  BackDestination.setAttribute( "onClick", "LeaValleyRidingCentre55();" );
  NextDestination.setAttribute( "onClick", "ChatsworthRoad55();" );
}
function ChatsworthRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "C"+sSpace+"h"+sSpace+"a"+sSpace+"t"+sSpace+"s"+sSpace+"w"+sSpace+"o"+sSpace+"r"+sSpace+"t"+sSpace+"h"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "LeaValleyIceCentre55();" );
  NextDestination.setAttribute( "onClick", "WattisfieldRoad55();" );
}
function WattisfieldRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "W"+sSpace+"a"+sSpace+"t"+sSpace+"t"+sSpace+"i"+sSpace+"s"+sSpace+"f"+sSpace+"i"+sSpace+"e"+sSpace+"l"+sSpace+"d"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "ChatsworthRoad55();" );
  NextDestination.setAttribute( "onClick", "LeaBridgeRoundabout55();" );
}
function LeaBridgeRoadUpperClaptonRoad55(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "L"+sSpace+"e"+sSpace+"a"+bSpace+"B"+sSpace+"r"+sSpace+"i"+sSpace+"d"+sSpace+"g"+sSpace+"e"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d"+bSpace+"/"+bSpace+"U"+sSpace+"p"+sSpace+"p"+sSpace+"e"+sSpace+"r"+bSpace+"C"+sSpace+"l"+sSpace+"a"+sSpace+"p"+sSpace+"t"+sSpace+"o"+sSpace+"n"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "WattisfieldRoad55();" );
  NextDestination.setAttribute( "onClick", "LeaBridgeRoundabout55();" );
  topTextYes.style.animationName = "LeaBridgeRoadUpperClaptonRoad55";
}
function LeaBridgeRoundabout55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "L"+sSpace+"e"+sSpace+"a"+bSpace+"B"+sSpace+"r"+sSpace+"i"+sSpace+"d"+sSpace+"g"+sSpace+"e"+bSpace+"R"+sSpace+"o"+sSpace+"u"+sSpace+"n"+sSpace+"d"+sSpace+"a"+sSpace+"b"+sSpace+"o"+sSpace+"u"+sSpace+"t";
  BackDestination.setAttribute( "onClick", "LeaBridgeRoadUpperClaptonRoad55();" );
  NextDestination.setAttribute( "onClick", "ClaptonPond55();" );
}
function ClaptonPond55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "C"+sSpace+"l"+sSpace+"a"+sSpace+"p"+sSpace+"t"+sSpace+"o"+sSpace+"n"+bSpace+"P"+sSpace+"o"+sSpace+"n"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "LeaBridgeRoundabout55();" );
  NextDestination.setAttribute( "onClick", "MillfieldsRoad55();" );
}
function MillfieldsRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "M"+sSpace+"i"+sSpace+"l"+sSpace+"l"+sSpace+"f"+sSpace+"i"+sSpace+"e"+sSpace+"l"+sSpace+"d"+sSpace+"s"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "ClaptonPond55();" );
  NextDestination.setAttribute( "onClick", "ClaptonGirlsAcademy55();" );
}
function ClaptonGirlsAcademy55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "C"+sSpace+"l"+sSpace+"a"+sSpace+"p"+sSpace+"t"+sSpace+"o"+sSpace+"n"+bSpace+"G"+sSpace+"i"+sSpace+"r"+sSpace+"l"+sSpace+"s"+sSpace+"'"+bSpace+"A"+sSpace+"c"+sSpace+"a"+sSpace+"d"+sSpace+"e"+sSpace+"m"+sSpace+"y";
  BackDestination.setAttribute( "onClick", "ClaptonPond55();" );
  NextDestination.setAttribute( "onClick", "HackneyBaths55();" );
}
function GlenarmRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "G"+sSpace+"l"+sSpace+"e"+sSpace+"n"+sSpace+"a"+sSpace+"r"+sSpace+"m"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "ClaptonGirlsAcademy55();" );
  NextDestination.setAttribute( "onClick", "HackneyBaths55();" );
}
function HackneyBaths55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "H"+sSpace+"a"+sSpace+"c"+sSpace+"k"+sSpace+"n"+sSpace+"e"+sSpace+"y"+bSpace+"B"+sSpace+"a"+sSpace+"t"+sSpace+"h"+sSpace+"s";
  BackDestination.setAttribute( "onClick", "GlenarmRoad55();" );
  NextDestination.setAttribute( "onClick", "ClaptonSquare55();" );
}
function ClaptonSquare55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "C"+sSpace+"l"+sSpace+"a"+sSpace+"p"+sSpace+"t"+sSpace+"o"+sSpace+"n"+bSpace+"S"+sSpace+"q"+sSpace+"u"+sSpace+"a"+sSpace+"r"+sSpace+"e";
  BackDestination.setAttribute( "onClick", "HackneyBaths55();" );
  NextDestination.setAttribute( "onClick", "PemburyCircus55();" );
}
function PemburyCircus55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "P"+sSpace+"e"+sSpace+"m"+sSpace+"b"+sSpace+"u"+sSpace+"r"+sSpace+"y"+bSpace+"C"+sSpace+"i"+sSpace+"r"+sSpace+"c"+sSpace+"u"+sSpace+"s";
  BackDestination.setAttribute( "onClick", "ClaptonSquare55();" );
  NextDestination.setAttribute( "onClick", "HackneyCentralStation55();" );
}
function MareStreetNarrowWay55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "M"+sSpace+"a"+sSpace+"r"+sSpace+"e"+bSpace+"S"+sSpace+"t"+sSpace+"r"+sSpace+"e"+sSpace+"e"+sSpace+"t"+bSpace+"/"+bSpace+"N"+sSpace+"a"+sSpace+"r"+sSpace+"r"+sSpace+"o"+sSpace+"w"+bSpace+"W"+sSpace+"a"+sSpace+"y";
  BackDestination.setAttribute( "onClick", "HackneyBaths55();" );
  NextDestination.setAttribute( "onClick", "AmhurstRoadHackneyDownsStation55();" );
}
function AmhurstRoadHackneyDownsStation55(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "A"+sSpace+"m"+sSpace+"h"+sSpace+"u"+sSpace+"r"+sSpace+"s"+sSpace+"t"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d"+bSpace+"/"+bSpace+"H"+sSpace+"a"+sSpace+"c"+sSpace+"k"+sSpace+"n"+sSpace+"e"+sSpace+"y"+bSpace+"D"+sSpace+"o"+sSpace+"w"+sSpace+"o"+sSpace+"n"+sSpace+"s"+bSpace+"S"+sSpace+"t"+sSpace+"a"+sSpace+"t"+sSpace+"i"+sSpace+"o"+sSpace+"n";
  BackDestination.setAttribute( "onClick", "MareStreetNarrowWay55();" );
  NextDestination.setAttribute( "onClick", "HackneyCentralStation55();" );
  topTextYes.style.animationName = "AmhurstRoadHackneyDownsStation55";
}
function HackneyCentralStation55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "H"+sSpace+"a"+sSpace+"c"+sSpace+"k"+sSpace+"n"+sSpace+"e"+sSpace+"y"+bSpace+"C"+sSpace+"e"+sSpace+"n"+sSpace+"t"+sSpace+"r"+sSpace+"a"+sSpace+"l"+bSpace+"S"+sSpace+"t"+sSpace+"a"+sSpace+"t"+sSpace+"i"+sSpace+"o"+sSpace+"n";
  BackDestination.setAttribute( "onClick", "AmhurstRoadHackneyDownsStation55();" );
  NextDestination.setAttribute( "onClick", "HackneyTownHall55();" );
}
function HackneyTownHall55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "H"+sSpace+"a"+sSpace+"c"+sSpace+"k"+sSpace+"n"+sSpace+"e"+sSpace+"y"+bSpace+"T"+sSpace+"o"+sSpace+"w"+sSpace+"n"+bSpace+"H"+sSpace+"a"+sSpace+"l"+sSpace+"l";
  BackDestination.setAttribute( "onClick", "HackneyCentralStation55();" );
  NextDestination.setAttribute( "onClick", "StThomasSquare55();" );
}
function StThomasSquare55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "S"+sSpace+"t"+bSpace+"T"+sSpace+"h"+sSpace+"o"+sSpace+"m"+sSpace+"a"+sSpace+"s"+sSpace+"'"+sSpace+"s"+bSpace+"S"+sSpace+"q"+sSpace+"u"+sSpace+"a"+sSpace+"r"+sSpace+"e";
  BackDestination.setAttribute( "onClick", "HackneyTownHall55();" );
  NextDestination.setAttribute( "onClick", "MareStreetWellStreet55();" );
}
function MareStreetWellStreet55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "M"+sSpace+"a"+sSpace+"r"+sSpace+"e"+bSpace+"S"+sSpace+"t"+sSpace+"r"+sSpace+"e"+sSpace+"e"+sSpace+"t"+bSpace+"/"+bSpace+"W"+sSpace+"e"+sSpace+"l"+sSpace+"l"+bSpace+"S"+sSpace+"t"+sSpace+"r"+sSpace+"e"+sSpace+"e"+sSpace+"t";
  BackDestination.setAttribute( "onClick", "StThomasSquare55();" );
  NextDestination.setAttribute( "onClick", "KingEdwardsRoad55();" );
}
function KingEdwardsRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "K"+sSpace+"i"+sSpace+"n"+sSpace+"g"+bSpace+"E"+sSpace+"d"+sSpace+"w"+sSpace+"a"+sSpace+"r"+sSpace+"d"+sSpace+"'"+sSpace+"s"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "MareStreetWellStreet55();" );
  NextDestination.setAttribute( "onClick", "CambridgeHeathStation55();" );
}
function MareStreetVictoriaParkRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "M"+sSpace+"a"+sSpace+"r"+sSpace+"e"+bSpace+"S"+sSpace+"t"+sSpace+"r"+sSpace+"e"+sSpace+"e"+sSpace+"t"+bSpace+"/"+bSpace+"V"+sSpace+"i"+sSpace+"c"+sSpace+"t"+sSpace+"o"+sSpace+"r"+sSpace+"i"+sSpace+"a"+bSpace+"P"+sSpace+"a"+sSpace+"r"+sSpace+"k"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "KingEdwardsRoad55();" );
  NextDestination.setAttribute( "onClick", "CambridgeHeathStation55();" );
}
function CambridgeHeathStation55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "C"+sSpace+"a"+sSpace+"m"+sSpace+"b"+sSpace+"r"+sSpace+"i"+sSpace+"d"+sSpace+"g"+sSpace+"e"+bSpace+"H"+sSpace+"e"+sSpace+"a"+sSpace+"t"+sSpace+"h"+bSpace+"S"+sSpace+"t"+sSpace+"a"+sSpace+"t"+sSpace+"i"+sSpace+"o"+sSpace+"n";
  BackDestination.setAttribute( "onClick", "MareStreetVictoriaParkRoad55();" );
  NextDestination.setAttribute( "onClick", "PritchardsRoad55();" );
}
function PritchardsRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "P"+sSpace+"r"+sSpace+"i"+sSpace+"t"+sSpace+"c"+sSpace+"h"+sSpace+"a"+sSpace+"r"+sSpace+"d"+sSpace+"'"+sSpace+"s"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "CambridgeHeathStation55();" );
  NextDestination.setAttribute( "onClick", "WarnerRoad55();" );
}
function WarnerRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "W"+sSpace+"a"+sSpace+"r"+sSpace+"n"+sSpace+"e"+sSpace+"r"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "PritchardsRoad55();" );
  NextDestination.setAttribute( "onClick", "QueenbridgeRoad55();" );
}
function WarnerPlace55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "W"+sSpace+"a"+sSpace+"r"+sSpace+"n"+sSpace+"e"+sSpace+"r"+bSpace+"P"+sSpace+"l"+sSpace+"a"+sSpace+"c"+sSpace+"e";
  BackDestination.setAttribute( "onClick", "PritchardsRoad55();" );
  NextDestination.setAttribute( "onClick", "QueenbridgeRoad55();" );
}
function QueenbridgeRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Q"+sSpace+"u"+sSpace+"e"+sSpace+"e"+sSpace+"n"+sSpace+"b"+sSpace+"r"+sSpace+"i"+sSpace+"d"+sSpace+"g"+sSpace+"e"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "WarnerPlace55();" );
  NextDestination.setAttribute( "onClick", "HoxtonStation55();" );
}
function HoxtonStation55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "H"+sSpace+"o"+sSpace+"x"+sSpace+"t"+sSpace+"o"+sSpace+"n"+bSpace+"S"+sSpace+"t"+sSpace+"a"+sSpace+"t"+sSpace+"i"+sSpace+"o"+sSpace+"n";
  BackDestination.setAttribute( "onClick", "QueenbridgeRoad55();" );
  NextDestination.setAttribute( "onClick", "ShoreditchChurch55();" );
}
function ShoreditchChurch55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "S"+sSpace+"h"+sSpace+"o"+sSpace+"r"+sSpace+"e"+sSpace+"d"+sSpace+"i"+sSpace+"t"+sSpace+"c"+sSpace+"h"+bSpace+"C"+sSpace+"h"+sSpace+"u"+sSpace+"r"+sSpace+"c"+sSpace+"h";
  BackDestination.setAttribute( "onClick", "HoxtonStation55();" );
  NextDestination.setAttribute( "onClick", "ShoreditchTownHall55();" );
}
function HackneyRoadColumbiaRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "H"+sSpace+"a"+sSpace+"c"+sSpace+"k"+sSpace+"n"+sSpace+"e"+sSpace+"y"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d"+bSpace+"/"+bSpace+"C"+sSpace+"o"+sSpace+"l"+sSpace+"u"+sSpace+"m"+sSpace+"b"+sSpace+"i"+sSpace+"a"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "HoxtonStation55();" );
  NextDestination.setAttribute( "onClick", "ShoreditchTownHall55();" );
}
function ShoreditchTownHall55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "S"+sSpace+"h"+sSpace+"o"+sSpace+"r"+sSpace+"e"+sSpace+"d"+sSpace+"i"+sSpace+"t"+sSpace+"c"+sSpace+"h"+bSpace+"T"+sSpace+"o"+sSpace+"w"+sSpace+"n"+bSpace+"H"+sSpace+"a"+sSpace+"l"+sSpace+"l";
  BackDestination.setAttribute( "onClick", "HackneyRoadColumbiaRoad55();" );
  NextDestination.setAttribute( "onClick", "GreatEasternStreet55();" );
}
function GreatEasternStreet55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "G"+sSpace+"r"+sSpace+"e"+sSpace+"a"+sSpace+"t"+bSpace+"E"+sSpace+"a"+sSpace+"s"+sSpace+"t"+sSpace+"e"+sSpace+"r"+sSpace+"n"+bSpace+"S"+sSpace+"t"+sSpace+"r"+sSpace+"e"+sSpace+"e"+sSpace+"t";
  BackDestination.setAttribute( "onClick", "ShoreditchTownHall55();" );
  NextDestination.setAttribute( "onClick", "OldStreetStation55();" );
}
function ShoreditchFireStation(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "S"+sSpace+"h"+sSpace+"o"+sSpace+"r"+sSpace+"e"+sSpace+"d"+sSpace+"i"+sSpace+"t"+sSpace+"c"+sSpace+"h"+bSpace+"F"+sSpace+"i"+sSpace+"r"+sSpace+"e"+bSpace+"S"+sSpace+"t"+sSpace+"a"+sSpace+"t"+sSpace+"i"+sSpace+"o"+sSpace+"n";
  BackDestination.setAttribute( "onClick", "GreatEasternStreet55();" );
  NextDestination.setAttribute( "onClick", "OldStreetStation55();" );
}
function OldStreetStation55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "O"+sSpace+"l"+sSpace+"d"+bSpace+"S"+sSpace+"t"+sSpace+"r"+sSpace+"e"+sSpace+"e"+sSpace+"t"+bSpace+"S"+sSpace+"t"+sSpace+"a"+sSpace+"t"+sSpace+"i"+sSpace+"o"+sSpace+"n";
  BackDestination.setAttribute( "onClick", "ShoreditchFireStation();" );
  NextDestination.setAttribute( "onClick", "BunhillRoad55();" );
}
function BunhillRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "B"+sSpace+"u"+sSpace+"n"+sSpace+"h"+sSpace+"i"+sSpace+"l"+sSpace+"l"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "OldStreetStation55();" );
  NextDestination.setAttribute( "onClick", "StLukesMusicEducationCentre55();" );
}
function StLukesMusicEducationCentre55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "S"+sSpace+"t"+bSpace+"L"+sSpace+"u"+sSpace+"k"+sSpace+"e"+sSpace+"'"+sSpace+"s"+bSpace+"M"+sSpace+"u"+sSpace+"s"+sSpace+"i"+sSpace+"c"+bSpace+"E"+sSpace+"d"+sSpace+"u"+sSpace+"c"+sSpace+"a"+sSpace+"t"+sSpace+"i"+sSpace+"o"+sSpace+"n"+bSpace+"C"+sSpace+"e"+sSpace+"n"+sSpace+"t"+sSpace+"r"+sSpace+"e";
  BackDestination.setAttribute( "onClick", "OldStreetStation55();" );
  NextDestination.setAttribute( "onClick", "GoswellRoad55();" );
}
function CentralStreet(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "C"+sSpace+"e"+sSpace+"n"+sSpace+"t"+sSpace+"r"+sSpace+"a"+sSpace+"l"+bSpace+"S"+sSpace+"t"+sSpace+"r"+sSpace+"e"+sSpace+"e"+sSpace+"t";
  BackDestination.setAttribute( "onClick", "StLukesMusicEducationCentre55();" );
  NextDestination.setAttribute( "onClick", "GoswellRoad55();" );
}
function GoswellRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "G"+sSpace+"o"+sSpace+"s"+sSpace+"w"+sSpace+"e"+sSpace+"l"+sSpace+"l"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "CentralStreet();" );
  NextDestination.setAttribute( "onClick", "ClerkenwellRoadStJohnStreet55();" );
}
function ClerkenwellRoadStJohnStreet55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "C"+sSpace+"l"+sSpace+"e"+sSpace+"r"+sSpace+"k"+sSpace+"e"+sSpace+"n"+sSpace+"w"+sSpace+"e"+sSpace+"l"+sSpace+"l"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d"+bSpace+"/"+bSpace+"S"+sSpace+"t"+bSpace+"J"+sSpace+"o"+sSpace+"h"+sSpace+"n"+bSpace+"S"+sSpace+"t"+sSpace+"r"+sSpace+"e"+sSpace+"e"+sSpace+"t";
  BackDestination.setAttribute( "onClick", "GoswellRoad55();" );
  NextDestination.setAttribute( "onClick", "ClerkenwellGreen55();" );
}
function ClerkenwellGreen55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "C"+sSpace+"l"+sSpace+"e"+sSpace+"r"+sSpace+"k"+sSpace+"e"+sSpace+"n"+sSpace+"w"+sSpace+"e"+sSpace+"l"+sSpace+"l"+bSpace+"G"+sSpace+"r"+sSpace+"e"+sSpace+"e"+sSpace+"e"+sSpace+"n";
  BackDestination.setAttribute( "onClick", "ClerkenwellRoadStJohnStreet55();" );
  NextDestination.setAttribute( "onClick", "HattonGardens55();" );
}
function HattonGardens55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "H"+sSpace+"a"+sSpace+"t"+sSpace+"t"+sSpace+"o"+sSpace+"n"+bSpace+"G"+sSpace+"a"+sSpace+"r"+sSpace+"d"+sSpace+"e"+sSpace+"n"+sSpace+"s";
  BackDestination.setAttribute( "onClick", "ClerkenwellGreen55();" );
  NextDestination.setAttribute( "onClick", "RoseberryAvenue55();" );
}
function StJohnStreet55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "S"+sSpace+"t"+bSpace+"J"+sSpace+"o"+sSpace+"h"+sSpace+"n"+bSpace+"S"+sSpace+"t"+sSpace+"r"+sSpace+"e"+sSpace+"e"+sSpace+"t";
  BackDestination.setAttribute( "onClick", "GoswellRoad55();" );
  NextDestination.setAttribute( "onClick", "FarringdonRoad55();" );
}
function FarringdonRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "F"+sSpace+"a"+sSpace+"r"+sSpace+"r"+sSpace+"i"+sSpace+"n"+sSpace+"g"+sSpace+"d"+sSpace+"o"+sSpace+"n"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "StJohnStreet55();" );
  NextDestination.setAttribute( "onClick", "RoseberryAvenue55();" );
}
function RoseberryAvenue55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "R"+sSpace+"o"+sSpace+"s"+sSpace+"e"+sSpace+"b"+sSpace+"e"+sSpace+"r"+sSpace+"r"+sSpace+"y"+bSpace+"A"+sSpace+"v"+sSpace+"e"+sSpace+"n"+sSpace+"u"+sSpace+"e";
  BackDestination.setAttribute( "onClick", "FarringdonRoad55();" );
  NextDestination.setAttribute( "onClick", "GraysInnRoad55();" );
}
function GraysInnRoad55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "G"+sSpace+"r"+sSpace+"a"+sSpace+"y"+sSpace+"'"+sSpace+"s"+bSpace+"I"+sSpace+"n"+sSpace+"n"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d";
  BackDestination.setAttribute( "onClick", "RoseberryAvenue55();" );
  NextDestination.setAttribute( "onClick", "RedLionStreet55();" );
}
function RedLionStreet55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "R"+sSpace+"e"+sSpace+"d"+bSpace+"L"+sSpace+"i"+sSpace+"o"+sSpace+"n"+bSpace+"S"+sSpace+"t"+sSpace+"r"+sSpace+"e"+sSpace+"e"+sSpace+"t";
  BackDestination.setAttribute( "onClick", "GraysInnRoad55();" );
  NextDestination.setAttribute( "onClick", "BloomsburySquare55();" );
}
function BloomsburySquare55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "B"+sSpace+"l"+sSpace+"o"+sSpace+"o"+sSpace+"m"+sSpace+"s"+sSpace+"b"+sSpace+"e"+sSpace+"r"+sSpace+"r"+sSpace+"y"+bSpace+"S"+sSpace+"q"+sSpace+"u"+sSpace+"a"+sSpace+"r"+sSpace+"e";
  BackDestination.setAttribute( "onClick", "RedLionStreet55();" );
  NextDestination.setAttribute( "onClick", "MuseumStreet55();" );
}
function MuseumStreet55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "M"+sSpace+"u"+sSpace+"s"+sSpace+"e"+sSpace+"u"+sSpace+"m"+bSpace+"S"+sSpace+"t"+sSpace+"r"+sSpace+"e"+sSpace+"e"+sSpace+"t";
  BackDestination.setAttribute( "onClick", "BloomsburySquare55();" );
  NextDestination.setAttribute( "onClick", "TottenhamCourtRoadStation55();" );
}
function TottenhamCourtRoadStation55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "T"+sSpace+"o"+sSpace+"t"+sSpace+"t"+sSpace+"e"+sSpace+"n"+sSpace+"h"+sSpace+"a"+sSpace+"m"+bSpace+"C"+sSpace+"o"+sSpace+"u"+sSpace+"r"+sSpace+"t"+bSpace+"R"+sSpace+"o"+sSpace+"a"+sSpace+"d"+bSpace+"S"+sSpace+"t"+sSpace+"a"+sSpace+"t"+sSpace+"i"+sSpace+"o"+sSpace+"n";
  BackDestination.setAttribute( "onClick", "MuseumStreet55();" );
  NextDestination.setAttribute( "onClick", "OxfordStreetSohoStreet55();" );
}
function OxfordStreetSohoStreet55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "O"+sSpace+"x"+sSpace+"f"+sSpace+"o"+sSpace+"r"+sSpace+"d"+bSpace+"S"+sSpace+"t"+sSpace+"r"+sSpace+"e"+sSpace+"e"+sSpace+"t"+bSpace+"/"+bSpace+"S"+sSpace+"o"+sSpace+"h"+sSpace+"o"+bSpace+"S"+sSpace+"t"+sSpace+"r"+sSpace+"e"+sSpace+"e"+sSpace+"t";
  BackDestination.setAttribute( "onClick", "TottenhamCourtRoadStation55();" );
  NextDestination.setAttribute( "onClick", "WardourStreet55();" );
}
function WardourStreet55(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "W"+sSpace+"a"+sSpace+"r"+sSpace+"d"+sSpace+"o"+sSpace+"u"+sSpace+"r"+bSpace+"S"+sSpace+"t"+sSpace+"r"+sSpace+"e"+sSpace+"e"+sSpace+"t";
  BackDestination.setAttribute( "onClick", "TottenhamCourtRoadStation55();" );
  NextDestination.setAttribute( "onClick", "GreatTitchfieldStOxfordCircusStn55();" );
}
function GreatTitchfieldStOxfordCircusStn55(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "G"+sSpace+"r"+sSpace+"e"+sSpace+"a"+sSpace+"t"+bSpace+"T"+sSpace+"i"+sSpace+"t"+sSpace+"c"+sSpace+"h"+sSpace+"f"+sSpace+"i"+sSpace+"e"+sSpace+"l"+sSpace+"d"+sSpace+"s"+bSpace+"S"+sSpace+"t"+bSpace+"/"+bSpace+"O"+sSpace+"x"+sSpace+"f"+sSpace+"o"+sSpace+"r"+sSpace+"d"+bSpace+"C"+sSpace+"i"+sSpace+"r"+sSpace+"c"+sSpace+"u"+sSpace+"s"+bSpace+"S"+sSpace+"t"+sSpace+"n";
  BackDestination.setAttribute( "onClick", "WardourStreet55();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere55();" );
  topTextYes.style.animationName = "GreatTitchfieldStOxfordCircusStn55";
}
function ibus55WalthamstowCentral(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "5"+sSpace+"5"+bSpace+"t"+sSpace+"o"+bSpace+"W"+sSpace+"a"+sSpace+"l"+sSpace+"t"+sSpace+"h"+sSpace+"a"+sSpace+"m"+sSpace+"s"+sSpace+"t"+sSpace+"o"+sSpace+"w"+bSpace+"C"+sSpace+"n"+sSpace+"t"+sSpace+"r"+sSpace+"a"+sSpace+"l";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere55();" );
  NextDestination.setAttribute( "onClick", "GreatTitchfieldStOxfordCircusStn55();" );
}
function BusTerminatesHere55(){
  topTextYes.style.display ="Block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "B"+sSpace+"u"+sSpace+"s"+bSpace+"T"+sSpace+"e"+sSpace+"r"+sSpace+"m"+sSpace+"i"+sSpace+"n"+sSpace+"a"+sSpace+"t"+sSpace+"e"+sSpace+"s"+bSpace+"H"+sSpace+"e"+sSpace+"r"+sSpace+"e"+sSpace+"."+bSpace+"T"+sSpace+"a"+sSpace+"k"+sSpace+"e"+bSpace+"Y"+sSpace+"o"+sSpace+"u"+sSpace+"'"+sSpace+"r"+sSpace+"e"+bSpace+"B"+sSpace+"e"+sSpace+"l"+sSpace+"o"+sSpace+"n"+sSpace+"g"+sSpace+"i"+sSpace+"n"+sSpace+"s"+bSpace+"w"+sSpace+"i"+sSpace+"t"+sSpace+"h"+bSpace+"y"+sSpace+"o"+sSpace+"u";
  BackDestination.setAttribute( "onClick", "ibus55OxfordCircus();" );
  NextDestination.setAttribute( "onClick", "ibus55WalthamstowCentral();" );
  topTextYes.style.animationName = "Ending";
}
function OxfordCircus55ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "5"+sSpace+"5"+bSpace+"t"+sSpace+"o"+bSpace+"O"+sSpace+"x"+sSpace+"f"+sSpace+"o"+sSpace+"r"+sSpace+"d"+bSpace+"S"+sSpace+"t"+sSpace+"r"+sSpace+"e"+sSpace+"e"+sSpace+"t";
}function WalthamstowCentra55ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "5"+sSpace+"5"+bSpace+"t"+sSpace+"o"+bSpace+"W"+sSpace+"a"+sSpace+"l"+sSpace+"t"+sSpace+"h"+sSpace+"a"+sSpace+"m"+sSpace+"s"+sSpace+"t"+sSpace+"o"+sSpace+"w"+bSpace+"C"+sSpace+"n"+sSpace+"t"+sSpace+"r"+sSpace+"a"+sSpace+"l";
}
function ibusC3EarlCourt(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "C3 to Earl's Court, Tesco";
  NextDestination.setAttribute( "onClick", "ClaphamJunctionStationC3();" );
}
function ClaphamJunctionStationTheFalconC3(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Clapham Junction Station / The Falcon";
  BackDestination.setAttribute( "onClick", "BusTerminatesHereC3();" );
  NextDestination.setAttribute( "onClick", "ClaphamJunctionStationC3();" );
  topTextYes.style.animationName = "ClaphamJunctionStationTheFalcon";
}
function ClaphamJunctionStationC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Clapham Junction Station";
  BackDestination.setAttribute( "onClick", "ClaphamJunctionStationTheFalconC3();" );
  NextDestination.setAttribute( "onClick", "StrathTerraceC3();" );
}
function StrathTerraceC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Strath Terrace";
  BackDestination.setAttribute( "onClick", "ClaphamJunctionStationC3();" );
  NextDestination.setAttribute( "onClick", "WaylandRoadEstateC3();" );
}
function WaylandRoadEstateC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wayland Road Estate";
  BackDestination.setAttribute( "onClick", "StrathTerraceC3();" );
  NextDestination.setAttribute( "onClick", "WallisCloseC3();" );
}
function WallisCloseC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wallis Close";
  BackDestination.setAttribute( "onClick", "WaylandRoadEstateC3();" );
  NextDestination.setAttribute( "onClick", "HopeStreetPlantationWharfPierC3();" );
}
function HopeStreetPlantationWharfPierC3(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Hope Street / Plantation Wharf Pier";
  BackDestination.setAttribute( "onClick", "WallisCloseC3();" );
  NextDestination.setAttribute( "onClick", "ChatfieldRoadC3();" );
  topTextYes.style.animationName = "HopeStreetPlantationWharfPier";
}
function ChatfieldRoadC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chatfield Road";
  BackDestination.setAttribute( "onClick", "HopeStreetPlantationWharfPierC3();" );
  NextDestination.setAttribute( "onClick", "PetergateC3();" );
}
function PetergateC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Petergate";
  BackDestination.setAttribute( "onClick", "ChatfieldRoadC3();" );
  NextDestination.setAttribute( "onClick", "BridgendRoadC3();" );
}
function BridgendRoadC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bridgend Road";
  BackDestination.setAttribute( "onClick", "PetergateC3();" );
  NextDestination.setAttribute( "onClick", "WandsworthBridgeC3();" );
}
function WandsworthBridgeC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wandsworth Bridge";
  BackDestination.setAttribute( "onClick", "BridgendRoadC3();" );
  NextDestination.setAttribute( "onClick", "WilliamMorrisWaySainsburyC3();" );
}
function WilliamMorrisWaySainsburyC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "William Morris Way / Sainsbury's";
  BackDestination.setAttribute( "onClick", "WandsworthBridgeC3();" );
  NextDestination.setAttribute( "onClick", "GlenrosaStreetC3();" );
}
function GlenrosaStreetC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Glenrosa Street";
  BackDestination.setAttribute( "onClick", "WilliamMorrisWaySainsburyC3();" );
  NextDestination.setAttribute( "onClick", "ImperialWharfStationImperialRoadC3();" );
}
function ImperialWharfStationImperialRoadC3(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Imperial Wharf Station / Imperial Road";
  BackDestination.setAttribute( "onClick", "GlenrosaStreetC3();" );
  NextDestination.setAttribute( "onClick", "ImperialWharfStnChelseaHarbourC3();" );
  topTextYes.style.animationName = "ImperialWharfStationImperialRoad"
}
function BagleysLaneC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bagleys Lane";
  BackDestination.setAttribute( "onClick", "GlenrosaStreetC3();" );
  NextDestination.setAttribute( "onClick", "ImperialRoadC3();" );
}
function ImperialRoadC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Imperial Road";
  BackDestination.setAttribute( "onClick", "BagleysLaneC3();" );
  NextDestination.setAttribute( "onClick", "ImperialWharfStnChelseaHarbourC3();" );
}
function ImperialWharfStnChelseaHarbourC3(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Imperial Wharf Stn / Chelsea Harbour";
  BackDestination.setAttribute( "onClick", "ImperialRoadC3();" );
  NextDestination.setAttribute( "onClick", "LotsRoadC3();" );
  topTextYes.style.animationName = "ImperialWharfStnChelseaHarbour"
}
function LotsRoadC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lots Road";
  BackDestination.setAttribute( "onClick", "ImperialWharfStnChelseaHarbourC3();" );
  NextDestination.setAttribute( "onClick", "WorldsEndHealthCentreC3();" );
}
function WorldsEndHealthCentreC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Worlds End Health Centre";
  BackDestination.setAttribute( "onClick", "LotsRoadC3();" );
  NextDestination.setAttribute( "onClick", "GunterGroveC3();" );
}
function GunterGroveC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Gunter Grove";
  BackDestination.setAttribute( "onClick", "WorldsEndHealthCentreC3();" );
  NextDestination.setAttribute( "onClick", "FulhamRoadC3();" );
}
function FulhamRoadC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Fulham Road";
  BackDestination.setAttribute( "onClick", "GunterGroveC3();" );
  NextDestination.setAttribute( "onClick", "RedcliffeStreetC3();" );
}
function RedcliffeStreetC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Redcliffe Street";
  BackDestination.setAttribute( "onClick", "FulhamRoadC3();" );
  NextDestination.setAttribute( "onClick", "OldBromptonRoadC3();" );
}
function OldBromptonRoadC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Old Brompton Road";
  BackDestination.setAttribute( "onClick", "RedcliffeStreetC3();" );
  NextDestination.setAttribute( "onClick", "EarlsCourtSquareC3();" );
}
function EarlsCourtSquareC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Earls Court Square";
  BackDestination.setAttribute( "onClick", "OldBromptonRoadC3();" );
  NextDestination.setAttribute( "onClick", "EarlsCourtStationC3();" );
}
function EdithGroveKingsRoadC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Edith Grove / King's Road";
  BackDestination.setAttribute( "onClick", "WorldsEndHealthCentreC3();" );
  NextDestination.setAttribute( "onClick", "FulhamRoadChelseaandWestminsterHospC3();" );
}
function FulhamRoadChelseaandWestminsterHospC3(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Fulham Road / Chelsea & Westminster Hosp";
  BackDestination.setAttribute( "onClick", "EdithGroveKingsRoadC3();" );
  NextDestination.setAttribute( "onClick", "RedcliffeSquareC3();" );
  topTextYes.style.animationName = "FulhamRoadChelseaandWestminsterHosp";
}
function RedcliffeSquareC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Redcliffe Square";
  BackDestination.setAttribute( "onClick", "FulhamRoadChelseaandWestminsterHospC3();" );
  NextDestination.setAttribute( "onClick", "EarlsCourtRoadOldBromptonRoadC3();" );
}
function EarlsCourtRoadOldBromptonRoadC3(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Earls Court Road / Old Brompton Road";
  BackDestination.setAttribute( "onClick", "RedcliffeSquareC3();" );
  NextDestination.setAttribute( "onClick", "EarlsCourtStationC3();" );
  topTextYes.style.animationName = "EarlsCourtRoadOldBromptonRoad";
}
function EarlsCourtStationC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Earls Court Station";
  BackDestination.setAttribute( "onClick", "EarlsCourtRoadOldBromptonRoadC3();" );
  NextDestination.setAttribute( "onClick", "WarwickRoadTescoC3();" );
}
function WarwickRoadTescoC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Warwick Road Tesco";
  BackDestination.setAttribute( "onClick", "EarlsCourtStationC3();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHereC3();" );
}
function BusTerminatesHereC3(){
  topTextYes.style.display ="Block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Bus Terminates Here. Take your belongings with you.";
  BackDestination.setAttribute( "onClick", "ibusC3EarlCourt();" );
  NextDestination.setAttribute( "onClick", "ibusC3ClaphamJunction();" );
  topTextYes.style.animationName = "Ending";
}
function NevernPlaceC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Nevern Place";
  BackDestination.setAttribute( "onClick", "EarlsCourtStationC3();" );
  NextDestination.setAttribute( "onClick", "CromwellRoadC3();" );
}
function CromwellRoadC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Cromwell Road";
  BackDestination.setAttribute( "onClick", "NevernPlaceC3();" );
  NextDestination.setAttribute( "onClick", "PembrokeRoadC3();" );
}
function PembrokeRoadC3(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Pembroke Road";
  BackDestination.setAttribute( "onClick", "CromwellRoadC3();" );
  NextDestination.setAttribute( "onClick", "ibusC3ClaphamJunction();" );
}
function ibusC3ClaphamJunction(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "C3 to Clapham Junction";
  BackDestination.setAttribute( "onClick", "BusTerminatesHereC3();" );
  NextDestination.setAttribute( "onClick", "PembrokeRoadC3();" );
}
function EarlCourtC3ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "C3 to Earl's Court, Tesco";
}
function ClaphamJunctionC3ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "C3 to Clapham Junction";
}

function ibus76Waterloo(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "76 to Waterloo";
  NextDestination.setAttribute( "onClick", "ParkViewRoad76();" );
}
function TottenhamHaleBusStation76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Tottenham Hale Bus Station";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere76();" );
  NextDestination.setAttribute( "onClick", "ParkViewRoad76();" );
}
function ParkViewRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Park View Road";
  BackDestination.setAttribute( "onClick", "TottenhamHaleBusStation76();" );
  NextDestination.setAttribute( "onClick", "TottenhamTownHall76();" );
}
function TottenhamHighRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Tottenham High Road";
  BackDestination.setAttribute( "onClick", "ParkViewRoad76();" );
  NextDestination.setAttribute( "onClick", "TottenhamTownHall76();" );
}
function TottenhamTownHall76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Tottenham Town Hall";
  BackDestination.setAttribute( "onClick", "TottenhamHighRoad76();" );
  NextDestination.setAttribute( "onClick", "CollegeOfNorthEastLondon76();" );
}
function CollegeOfNorthEastLondon76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "College Of North East London";
  BackDestination.setAttribute( "onClick", "TottenhamTownHall76();" );
  NextDestination.setAttribute( "onClick", "SevenSistersStation76();" );
}
function SevenSistersStation76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Seven Sisters Station";
  BackDestination.setAttribute( "onClick", "CollegeOfNorthEastLondon76();" );
  NextDestination.setAttribute( "onClick", "SouthTottenhamStation76();" );
}
function SevenSistersRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Seven Sisters Road";
  BackDestination.setAttribute( "onClick", "SevenSistersStation76();" );
  NextDestination.setAttribute( "onClick", "SouthTottenhamStation76();" );
}
function SouthTottenhamStation76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "South Tottenham Station";
  BackDestination.setAttribute( "onClick", "SevenSistersRoad76();" );
  NextDestination.setAttribute( "onClick", "StAnnsRoad76();" );
}
function LealandRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lealand Road";
  BackDestination.setAttribute( "onClick", "SouthTottenhamStation76();" );
  NextDestination.setAttribute( "onClick", "StAnnsRoad76();" );
}
function StAnnsRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Ann's Road";
  BackDestination.setAttribute( "onClick", "LealandRoad76();" );
  NextDestination.setAttribute( "onClick", "EgertonRoad76();" );
}
function EgertonRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Egerton Road";
  BackDestination.setAttribute( "onClick", "StAnnsRoad76();" );
  NextDestination.setAttribute( "onClick", "StamfordHillBroadway76();" );
}
function StamfordHillBroadway76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Stamford Hill Broadway";
  BackDestination.setAttribute( "onClick", "EgertonRoad76();" );
  NextDestination.setAttribute( "onClick", "StamfordHillLibrary76();" );
}
function StamfordHillLibrary76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Stamford Hill Library";
  BackDestination.setAttribute( "onClick", "StamfordHillBroadway76();" );
  NextDestination.setAttribute( "onClick", "LynmouthRoad76();" );
}
function LynmouthRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lynmouth Road";
  BackDestination.setAttribute( "onClick", "StamfordHillLibrary76();" );
  NextDestination.setAttribute( "onClick", "StokeNewingtonStation76();" );
}
function StokeNewingtonStation76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Stoke Newington Station";
  BackDestination.setAttribute( "onClick", "LynmouthRoad76();" );
  NextDestination.setAttribute( "onClick", "NorthwoldRoadStokeNewingtonCommon76();" );
}
function NorthwoldRoadStokeNewingtonCommon76(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Northwold Road / Stoke Newington Common";
  BackDestination.setAttribute( "onClick", "StokeNewingtonStation76();" );
  NextDestination.setAttribute( "onClick", "RectoryRoadBrookeRoad76();" );
  topTextYes.style.animationName = "NorthwoldRoadStokeNewingtonCommon";
}
function RectoryRoadBrookeRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Rectory Road / Brooke Road";
  BackDestination.setAttribute( "onClick", "NorthwoldRoadStokeNewingtonCommon76();" );
  NextDestination.setAttribute( "onClick", "ManseRoad76();" );
}
function ManseRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Manse Road";
  BackDestination.setAttribute( "onClick", "RectoryRoadBrookeRoad76();" );
  NextDestination.setAttribute( "onClick", "StokeNewingtonRoadAmhurstRoad76();" );
}
function StokeNewingtonRoadAmhurstRoad76(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Stoke Newington Road / Amhurst Road";
  BackDestination.setAttribute( "onClick", "ManseRoad76();" );
  NextDestination.setAttribute( "onClick", "PrincessMayRoad76();" );
  topTextYes.style.animationName = "StokeNewingtonRdAmhurstRd";
}
function StokeNewingtonChurchStreet76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Stoke Newington Church Street";
  BackDestination.setAttribute( "onClick", "StokeNewingtonStation76();" );
  NextDestination.setAttribute( "onClick", "BrookeRoad76();" );
}
function BrookeRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brooke Road";
  BackDestination.setAttribute( "onClick", "StokeNewingtonChurchStreet76();" );
  NextDestination.setAttribute( "onClick", "StokeNewingtonPoliceStation76();" );
}
function StokeNewingtonPoliceStation76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Stoke Newington Police Station";
  BackDestination.setAttribute( "onClick", "BrookeRoad76();" );
  NextDestination.setAttribute( "onClick", "AmhurstRoad76();" );
}
function AmhurstRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Amhurst Road";
  BackDestination.setAttribute( "onClick", "StokeNewingtonPoliceStation76();" );
  NextDestination.setAttribute( "onClick", "PrincessMayRoad76();" );
}
function PrincessMayRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Princess May Road";
  BackDestination.setAttribute( "onClick", "AmhurstRoad76();" );
  NextDestination.setAttribute( "onClick", "ShacklewellLane76();" );
}
function ShacklewellLane76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Shacklewell Lane";
  BackDestination.setAttribute( "onClick", "PrincessMayRoad76();" );
  NextDestination.setAttribute( "onClick", "RioCinema76();" );
}
function RioCinema76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Rio Cinema";
  BackDestination.setAttribute( "onClick", "PrincessMayRoad76();" );
  NextDestination.setAttribute( "onClick", "DalstonKingslandStation76();" );
}
function DalstonKingslandStation76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Dalston Kingsland Station";
  BackDestination.setAttribute( "onClick", "RioCinema76();" );
  NextDestination.setAttribute( "onClick", "DalstonJunctionStation76();" );
}
function KingslandHighStreetDalstonJct76(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Kingsland High Street / Dalston Jct";
  BackDestination.setAttribute( "onClick", "DalstonKingslandStation76();" );
  NextDestination.setAttribute( "onClick", "DalstonJunctionStation76();" );
  topTextYes.style.animationName = "KingslandHighStreetDalstonJut";
}
function DalstonJunctionStation76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Dalston Junction Station";
  BackDestination.setAttribute( "onClick", "KingslandHighStreetDalstonJct76();" );
  NextDestination.setAttribute( "onClick", "ForestRoad76();" );
}
function ForestRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Forest Road";
  BackDestination.setAttribute( "onClick", "DalstonJunctionStation76();" );
  NextDestination.setAttribute( "onClick", "EnglefieldRoadMortimerRoad76();" );
}
function EnglefieldRoadMortimerRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Englefield Road / Mortimer Road";
  BackDestination.setAttribute( "onClick", "ForestRoad76();" );
  NextDestination.setAttribute( "onClick", "UftonRoad76();" );
}
function MortimerRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mortimer Road";
  BackDestination.setAttribute( "onClick", "DalstonJunctionStation76();" );
  NextDestination.setAttribute( "onClick", "UftonRoad76();" );
}
function UftonRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ufton Road";
  BackDestination.setAttribute( "onClick", "MortimerRoad76();" );
  NextDestination.setAttribute( "onClick", "NorthchurchRoad76();" );
}
function NorthchurchRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Northchurch Road";
  BackDestination.setAttribute( "onClick", "UftonRoad76();" );
  NextDestination.setAttribute( "onClick", "DownhamRoad76();" );
}
function DownhamRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Downham Road";
  BackDestination.setAttribute( "onClick", "NorthchurchRoad76();" );
  NextDestination.setAttribute( "onClick", "CanalWalk76();" );
}
function CanalWalk76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Canal Walk";
  BackDestination.setAttribute( "onClick", "DownhamRoad76();" );
  NextDestination.setAttribute( "onClick", "BaringStreet76();" );
}
function BaringStreet76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Baring Street";
  BackDestination.setAttribute( "onClick", "DownhamRoad76();" );
  NextDestination.setAttribute( "onClick", "EagleWharfRoad76();" );
}
function EagleWharfRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Eagle Wharf Road";
  BackDestination.setAttribute( "onClick", "BaringStreet76();" );
  NextDestination.setAttribute( "onClick", "MinternStreet76();" );
}
function MinternStreet76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mintern Street";
  BackDestination.setAttribute( "onClick", "EagleWharfRoad76();" );
  NextDestination.setAttribute( "onClick", "BevendenStreet76();" );
}
function BevendenStreet76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bevenden Street";
  BackDestination.setAttribute( "onClick", "MinternStreet76();" );
  NextDestination.setAttribute( "onClick", "OldStreetStnMoorfieldsEyeHosp76();" );
}
function OldStreetStnMoorfieldsEyeHosp76(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Old Street Stn / Moorfields Eye Hosp";
  BackDestination.setAttribute( "onClick", "BevendenStreet76();" );
  NextDestination.setAttribute( "onClick", "CityRoadLeonardStreet76();" );
  topTextYes.style.animationName = "OldStreetStnMoorfieldsEyeHosp";
}
function CityRoadLeonardStreet76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "City Road / Leonard Street";
  BackDestination.setAttribute( "onClick", "OldStreetStnMoorfieldsEyeHosp76();" );
  NextDestination.setAttribute( "onClick", "EpworthStreet76();" );
}
function EpworthStreet76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Epworth Street";
  BackDestination.setAttribute( "onClick", "CityRoadLeonardStreet76();" );
  NextDestination.setAttribute( "onClick", "FinsburySquareMoorgate76();" );
}
function FinsburySquareMoorgate76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Finsbury Square / Moorgate";
  BackDestination.setAttribute( "onClick", "EpworthStreet76();" );
  NextDestination.setAttribute( "onClick", "MoorgateStation76();" );
}
function MoorfieldsEyeHospital76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Moorfields Eye Hospital";
  BackDestination.setAttribute( "onClick", "BevendenStreet76();" );
  NextDestination.setAttribute( "onClick", "FinsburySquare76();" );
}
function FinsburySquare76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Finsbury Square";
  BackDestination.setAttribute( "onClick", "MoorfieldsEyeHospital76();" );
  NextDestination.setAttribute( "onClick", "MoorgateStation76();" );
}
function MoorgateStation76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Moorgate Station";
  BackDestination.setAttribute( "onClick", "FinsburySquare76();" );
  NextDestination.setAttribute( "onClick", "LondonWallMuseumOfLondon76();" );
}
function LondonWallMoorgateStation76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "London Wall / Moorgate Station";
  BackDestination.setAttribute( "onClick", "MoorgateStation76();" );
  NextDestination.setAttribute( "onClick", "LondonWallMuseumOfLondon76();" );
}
function LondonWallMuseumOfLondon76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "London Wall / Museum Of London";
  BackDestination.setAttribute( "onClick", "LondonWallMoorgateStation76();" );
  NextDestination.setAttribute( "onClick", "StPaulsStation76();" );
}
function LittleBritain76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Little Britain";
  BackDestination.setAttribute( "onClick", "LondonWallMuseumOfLondon76();" );
  NextDestination.setAttribute( "onClick", "StPaulsStation76();" );
}
function StPaulsStation76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Paul's Station";
  BackDestination.setAttribute( "onClick", "LittleBritain76();" );
  NextDestination.setAttribute( "onClick", "NewChangeCannonStreet76();" );
}
function NewChangeCannonStreet76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "New Change / Cannon Street";
  BackDestination.setAttribute( "onClick", "StPaulsStation76();" );
  NextDestination.setAttribute( "onClick", "StPaulsChurchyard76();" );
}
function StPaulsChurchyard76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Pauls Churchyard";
  BackDestination.setAttribute( "onClick", "NewChangeCannonStreet76();" );
  NextDestination.setAttribute( "onClick", "StPaulsCathedral76();" );
}
function StPaulsCathedral76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Paul's Cathedral";
  BackDestination.setAttribute( "onClick", "StPaulsChurchyard76();" );
  NextDestination.setAttribute( "onClick", "CityThameslinkStnLudgateCircus76();" );
}
function CityThameslinkStnLudgateCircus76(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "City Thameslink Stn / Ludgate Circus";
  BackDestination.setAttribute( "onClick", "StPaulsCathedral76();" );
  NextDestination.setAttribute( "onClick", "ShoeLane76();" );
  topTextYes.style.animationName = "CityThameslinkStnLudgateCircus";
}
function ShoeLane76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Shoe Lane";
  BackDestination.setAttribute( "onClick", "CityThameslinkStnLudgateCircus76();" );
  NextDestination.setAttribute( "onClick", "FetterLane76();" );
}
function LudgateHillOldBailey76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ludgate Hill / Old Bailey";
  BackDestination.setAttribute( "onClick", "StPaulsCathedral76();" );
  NextDestination.setAttribute( "onClick", "LudgateCircus76();" );
}
function LudgateCircus76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ludgate Circus";
  BackDestination.setAttribute( "onClick", "LudgateHillOldBailey76();" );
  NextDestination.setAttribute( "onClick", "FetterLane76();" );
}
function FetterLane76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Fetter Lane";
  BackDestination.setAttribute( "onClick", "LudgateCircus76();" );
  NextDestination.setAttribute( "onClick", "ChanceryLane76();" );
}
function ChanceryLane76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chancery Lane";
  BackDestination.setAttribute( "onClick", "FetterLane76();" );
  NextDestination.setAttribute( "onClick", "TheRoyalCourtsofJustice76();" );
}
function TheRoyalCourtsofJustice76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The Royal Courts of Justice";
  BackDestination.setAttribute( "onClick", "ChanceryLane76();" );
  NextDestination.setAttribute( "onClick", "AldwychAustraliaHouse76();" );
}
function AldwychAustraliaHouse76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldwych Australia House";
  BackDestination.setAttribute( "onClick", "TheRoyalCourtsofJustice76();" );
  NextDestination.setAttribute( "onClick", "AldwychDruryLane76();" );
}
function AldwychDruryLane76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldwych Drury Lane";
  BackDestination.setAttribute( "onClick", "AldwychAustraliaHouse76();" );
  NextDestination.setAttribute( "onClick", "WaterlooBridgeSouthBank76();" );
}
function Aldwych76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Aldwych";
  BackDestination.setAttribute( "onClick", "TheRoyalCourtsofJustice76();" );
  NextDestination.setAttribute( "onClick", "LancasterPlace76();" );
}
function LancasterPlace76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lancaster Place";
  BackDestination.setAttribute( "onClick", "Aldwych76();" );
  NextDestination.setAttribute( "onClick", "WaterlooBridgeSouthBank76();" );
}
function WaterlooBridgeSouthBank76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Waterloo Bridge / South Bank";
  BackDestination.setAttribute( "onClick", "LancasterPlace76();" );
  NextDestination.setAttribute( "onClick", "WaterlooStationYorkRoad76();" );
}
function WaterlooStationYorkRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Waterloo Station / York Road";
  BackDestination.setAttribute( "onClick", "WaterlooBridgeSouthBank76();" );
  NextDestination.setAttribute( "onClick", "CountyHall76();" );
}
function CountyHall76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "County Hall";
  BackDestination.setAttribute( "onClick", "WaterlooStationYorkRoad76();" );
  NextDestination.setAttribute( "onClick", "LowerMarsh76();" );
}
function LowerMarsh76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lower Marsh";
  BackDestination.setAttribute( "onClick", "CountyHall76();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere76();" );
}
function BusTerminatesHere76(){
  topTextYes.style.display ="Block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Bus Terminates Here. Take your belongings with you.";
  BackDestination.setAttribute( "onClick", "ibus76Waterloo();" );
  NextDestination.setAttribute( "onClick", "ibus76TottenhamHale();" );
  topTextYes.style.animationName = "Ending";
}
function WaterlooStationWaterlooRoad76(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Waterloo Station / Waterloo Road";
  BackDestination.setAttribute( "onClick", "WaterlooBridgeSouthBank76();" );
  NextDestination.setAttribute( "onClick", "ibus76TottenhamHale();" );
}
function ibus76TottenhamHale(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "76 to Tottenham Hale, Bus Station";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere76();" );
  NextDestination.setAttribute( "onClick", "WaterlooStationWaterlooRoad76();" );
}
