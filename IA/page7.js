var smallSpace = '<span class="invisible">.</span>'
var bigSpace = '<span class="invisible">...</span>'
var sSpace = '<span class="invisible">.</span>'
var bSpace = '<span class="invisible">...</span>'

var topTextYes = document.getElementById("topTextYes");
var topTextNo = document.getElementById("topTextNo");

function Shadwell339btn(){
  LeytonstoneStnGroveGreenRoad339()
  showDestination.setAttribute( "onClick", "Shadwell339ibus();" );
}
function Leytonstone339btn(){
  ShadwellStation339()
  showDestination.setAttribute( "onClick", "Leytonstone339ibus();" );
}

function Shadwell339ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "339 to Shadwell";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_339_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_SHADWELL_001.mp3";
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
function Leytonstone339ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "339 to Leytonstone";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_339_002.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_LEYTONSTONE_001.mp3";
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


function LeytonstoneStnGroveGreenRoad339(){
  LeytonstoneStnGroveGreenRoad()
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "LeytonstoneStnGroveGreenRoad339Audio();" );
}
function LeytonstoneStnGroveGreenRoad339Audio(){
  LeytonstoneStnGroveGreenRoadAudio()
  BackDestination.setAttribute( "onClick", "BrentsideHighSchoolE11();" );
  NextDestination.setAttribute( "onClick", "HamptonRoad339();" );
}
function HamptonRoad339(){
  HamptonRoad()
  BackDestination.setAttribute( "onClick", "HamptonRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "HamptonRoad339Audio();" );
}
function DraytonRoad339(){
  DraytonRoad()
  BackDestination.setAttribute( "onClick", "DraytonRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "DraytonRoad339Audio();" );
}
function DraytonRoad339Audio(){
  DraytonRoadAudio()
  BackDestination.setAttribute( "onClick", "LeytonstoneStnGroveGreenRoad339();" );
  NextDestination.setAttribute( "onClick", "AshvilleRoad339();" );
}
function HamptonRoad339Audio(){
  HamptonRoadAudio()
  BackDestination.setAttribute( "onClick", "DraytonRoad339();" );
  NextDestination.setAttribute( "onClick", "AshvilleRoad339();" );
}
function AshvilleRoad339(){
  AshvilleRoad()
  BackDestination.setAttribute( "onClick", "AshvilleRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "AshvilleRoad339Audio();" );
}
function AshvilleRoad339Audio(){
  AshvilleRoadAudio()
  BackDestination.setAttribute( "onClick", "BrentsideHighSchoolE11();" );
  NextDestination.setAttribute( "onClick", "CentralAvenue339();" );
}
function CentralAvenue339(){
  CentralAvenue()
  BackDestination.setAttribute( "onClick", "CentralAvenue339Audio();" );
  NextDestination.setAttribute( "onClick", "CentralAvenue339Audio();" );
}
function CentralAvenue339Audio(){
  CentralAvenueAudio()
  BackDestination.setAttribute( "onClick", "HamptonRoad339();" );
  NextDestination.setAttribute( "onClick", "CathallLeisureCentre339();" );
}
function CathallLeisureCentre339(){
  CathallLeisureCentre()
  BackDestination.setAttribute( "onClick", "CathallLeisureCentre339Audio();" );
  NextDestination.setAttribute( "onClick", "CathallLeisureCentre339Audio();" );
}
function CathallLeisureCentre339Audio(){
  CathallLeisureCentreAudio()
  BackDestination.setAttribute( "onClick", "BrentsideHighSchoolE11();" );
  NextDestination.setAttribute( "onClick", "HarrowGreen339();" );
}
function HarrowGreen339(){
  HarrowGreen()
  BackDestination.setAttribute( "onClick", "HarrowGreen339Audio();" );
  NextDestination.setAttribute( "onClick", "HarrowGreen339Audio();" );
}
function ApolloPlace339(){
  ApolloPlace()
  BackDestination.setAttribute( "onClick", "ApolloPlace339Audio();" );
  NextDestination.setAttribute( "onClick", "ApolloPlace339Audio();" );
}
function HollydownWay339(){
  HollydownWay()
  BackDestination.setAttribute( "onClick", "HollydownWay339Audio();" );
  NextDestination.setAttribute( "onClick", "HollydownWay339Audio();" );
}
function HollydownWay339Audio(){
  HollydownWayAudio()
  BackDestination.setAttribute( "onClick", "CentralAvenue339();" );
  NextDestination.setAttribute( "onClick", "RanelaghRoad339();" );
}
function ApolloPlace339Audio(){
  ApolloPlaceAudio()
  BackDestination.setAttribute( "onClick", "HollydownWay339();" );
  NextDestination.setAttribute( "onClick", "RanelaghRoad339();" );
}
function HarrowGreen339Audio(){
  HarrowGreenAudio()
  BackDestination.setAttribute( "onClick", "ApolloPlace339();" );
  NextDestination.setAttribute( "onClick", "RanelaghRoad339();" );
}
function RanelaghRoad339(){
  RanelaghRoad()
  BackDestination.setAttribute( "onClick", "RanelaghRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "RanelaghRoad339Audio();" );
}
function RanelaghRoad339Audio(){
  RanelaghRoadAudio()
  BackDestination.setAttribute( "onClick", "HarrowGreen339();" );
  NextDestination.setAttribute( "onClick", "LeytonstoneHighRoadThatchedHouse339();" );
}
function LeytonstoneHighRoadThatchedHouse339(){
  LeytonstoneHighRoadThatchedHouse()
  BackDestination.setAttribute( "onClick", "LeytonstoneHighRoadThatchedHouse339Audio();" );
  NextDestination.setAttribute( "onClick", "LeytonstoneHighRoadThatchedHouse339Audio();" );
}
function LeytonstoneHighRoadThatchedHouse339Audio(){
  LeytonstoneHighRoadThatchedHouseAudio()
  BackDestination.setAttribute( "onClick", "BrentsideHighSchoolE11();" );
  NextDestination.setAttribute( "onClick", "BurgessRoad339();" );
}
function BurgessRoad339(){
  BurgessRoad()
  BackDestination.setAttribute( "onClick", "BurgessRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "BurgessRoad339Audio();" );
}
function BurgessRoad339Audio(){
  BurgessRoadAudio()
  BackDestination.setAttribute( "onClick", "RanelaghRoad339();" );
  NextDestination.setAttribute( "onClick", "EdithRoad339();" );
}
function EdithRoad339(){
  EdithRoad()
  BackDestination.setAttribute( "onClick", "EdithRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "EdithRoad339Audio();" );
}
function EdithRoad339Audio(){
  EdithRoadAudio()
  BackDestination.setAttribute( "onClick", "BurgessRoad339();" );
  NextDestination.setAttribute( "onClick", "SirLudwigGuttmannHealthCentre339();" );
}
function SirLudwigGuttmannHealthCentre339(){
  SirLudwigGuttmannHealthCentre()
  BackDestination.setAttribute( "onClick", "SirLudwigGuttmannHealthCentre339Audio();" );
  NextDestination.setAttribute( "onClick", "SirLudwigGuttmannHealthCentre339Audio();" );
}
function ChobhamRoad339(){
  ChobhamRoad()
  BackDestination.setAttribute( "onClick", "ChobhamRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "ChobhamRoad339Audio();" );
}
function ChobhamRoad339Audio(){
  ChobhamRoadAudio()
  BackDestination.setAttribute( "onClick", "EdithRoad339();" );
  NextDestination.setAttribute( "onClick", "StratfordInternationalStation339();" );
}
function SirLudwigGuttmannHealthCentre339Audio(){
  SirLudwigGuttmannHealthCentreAudio()
  BackDestination.setAttribute( "onClick", "ChobhamRoad339();" );
  NextDestination.setAttribute( "onClick", "StratfordInternationalStation339();" );
}
function StratfordInternationalStation339(){
  StratfordInternationalStation()
  BackDestination.setAttribute( "onClick", "StratfordInternationalStation339Audio();" );
  NextDestination.setAttribute( "onClick", "StratfordInternationalStation339Audio();" );
}
function StratfordInternationalStation339Audio(){
  StratfordInternationalStationAudio()
  BackDestination.setAttribute( "onClick", "SirLudwigGuttmannHealthCentre339();" );
  NextDestination.setAttribute( "onClick", "StratfordCityBusStation339();" );
}
function StratfordCityBusStation339(){
  StratfordCityBusStation()
  BackDestination.setAttribute( "onClick", "StratfordCityBusStation339Audio();" );
  NextDestination.setAttribute( "onClick", "StratfordCityBusStation339Audio();" );
}
function StratfordCityBusStation339Audio(){
  StratfordCityBusStationAudio()
  BackDestination.setAttribute( "onClick", "BrentsideHighSchoolE11();" );
  NextDestination.setAttribute( "onClick", "LondonAquaticsCentre339();" );
}
function LondonAquaticsCentre339(){
  LondonAquaticsCentre()
  BackDestination.setAttribute( "onClick", "LondonAquaticsCentre339Audio();" );
  NextDestination.setAttribute( "onClick", "LondonAquaticsCentre339Audio();" );
}
function LondonAquaticsCentre339Audio(){
  LondonAquaticsCentreAudio()
  BackDestination.setAttribute( "onClick", "StratfordInternationalStation339();" );
  NextDestination.setAttribute( "onClick", "SidingsStreet339();" );
}
function SidingsStreet339(){
  SidingsStreet()
  BackDestination.setAttribute( "onClick", "SidingsStreet339Audio();" );
  NextDestination.setAttribute( "onClick", "SidingsStreet339Audio();" );
}
function SidingsStreet339Audio(){
  SidingsStreetAudio()
  BackDestination.setAttribute( "onClick", "LondonAquaticsCentre339();" );
  NextDestination.setAttribute( "onClick", "BobbyMooreAcademyPrimarySchool339();" );
}
function BobbyMooreAcademyPrimarySchool339(){
  BobbyMooreAcademyPrimarySchool()
  BackDestination.setAttribute( "onClick", "BobbyMooreAcademyPrimarySchool339Audio();" );
  NextDestination.setAttribute( "onClick", "BobbyMooreAcademyPrimarySchool339Audio();" );
}
function BobbyMooreAcademyPrimarySchool339Audio(){
  BobbyMooreAcademyPrimarySchoolAudio()
  BackDestination.setAttribute( "onClick", "SidingsStreet339();" );
  NextDestination.setAttribute( "onClick", "WhitePostLane339();" );
}
function WhitePostLane339(){
  WhitePostLane()
  BackDestination.setAttribute( "onClick", "WhitePostLane339Audio();" );
  NextDestination.setAttribute( "onClick", "WhitePostLane339Audio();" );
}
function WhitePostLane339Audio(){
  WhitePostLaneAudio()
  BackDestination.setAttribute( "onClick", "BobbyMooreAcademyPrimarySchool339();" );
  NextDestination.setAttribute( "onClick", "RothburyRoad339();" );
}
function RothburyRoad339(){
  RothburyRoad()
  BackDestination.setAttribute( "onClick", "RothburyRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "RothburyRoad339Audio();" );
}
function RothburyRoad339Audio(){
  RothburyRoadAudio()
  BackDestination.setAttribute( "onClick", "WhitePostLane339();" );
  NextDestination.setAttribute( "onClick", "MonierRoad339();" );
}
function MonierRoad339(){
  MonierRoad()
  BackDestination.setAttribute( "onClick", "MonierRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "MonierRoad339Audio();" );
}
function MonierRoad339Audio(){
  MonierRoadAudio()
  BackDestination.setAttribute( "onClick", "BrentsideHighSchoolE11();" );
  NextDestination.setAttribute( "onClick", "FishIsland339();" );
}
function FishIsland339(){
  FishIsland()
  BackDestination.setAttribute( "onClick", "FishIsland339Audio();" );
  NextDestination.setAttribute( "onClick", "FishIsland339Audio();" );
}
function WansbeckRoad339(){
  WansbeckRoad()
  BackDestination.setAttribute( "onClick", "WansbeckRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "WansbeckRoad339Audio();" );
}
function WansbeckRoad339Audio(){
  WansbeckRoadAudio()
  BackDestination.setAttribute( "onClick", "RothburyRoad339();" );
  NextDestination.setAttribute( "onClick", "AutumnStreet339();" );
}
function FishIsland339Audio(){
  FishIslandAudio()
  BackDestination.setAttribute( "onClick", "WansbeckRoad339();" );
  NextDestination.setAttribute( "onClick", "AutumnStreet339();" );
}
function AutumnStreet339(){
  AutumnStreet()
  BackDestination.setAttribute( "onClick", "AutumnStreet339Audio();" );
  NextDestination.setAttribute( "onClick", "AutumnStreet339Audio();" );
}
function AutumnStreet339Audio(){
  AutumnStreetAudio()
  BackDestination.setAttribute( "onClick", "FishIsland339();" );
  NextDestination.setAttribute( "onClick", "UsherRoad339();" );
}
function UsherRoad339(){
  UsherRoad()
  BackDestination.setAttribute( "onClick", "UsherRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "UsherRoad339Audio();" );
}
function UsherRoad339Audio(){
  UsherRoadAudio()
  BackDestination.setAttribute( "onClick", "AutumnStreet339();" );
  NextDestination.setAttribute( "onClick", "ShetlandRoad339();" );
}
function ShetlandRoad339(){
  ShetlandRoad()
  BackDestination.setAttribute( "onClick", "ShetlandRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "ShetlandRoad339Audio();" );
}
function ShetlandRoad339Audio(){
  ShetlandRoadAudio()
  BackDestination.setAttribute( "onClick", "BrentsideHighSchoolE11();" );
  NextDestination.setAttribute( "onClick", "FordRoad339();" );
}
function FordRoad339(){
  FordRoad()
  BackDestination.setAttribute( "onClick", "FordRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "FordRoad339Audio();" );
}
function AntillRoad339(){
  AntillRoad()
  BackDestination.setAttribute( "onClick", "AntillRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "AntillRoad339Audio();" );
}
function AntillRoad339Audio(){
  AntillRoadAudio()
  BackDestination.setAttribute( "onClick", "UsherRoad339();" );
  NextDestination.setAttribute( "onClick", "MedwayRoad339();" );
}
function FordRoad339Audio(){
  FordRoadAudio()
  BackDestination.setAttribute( "onClick", "AntillRoad339();" );
  NextDestination.setAttribute( "onClick", "MedwayRoad339();" );
}
function MedwayRoad339(){
  MedwayRoad()
  BackDestination.setAttribute( "onClick", "MedwayRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "MedwayRoad339Audio();" );
}
function MedwayRoad339Audio(){
  MedwayRoadAudio()
  BackDestination.setAttribute( "onClick", "FordRoad339();" );
  NextDestination.setAttribute( "onClick", "StBarnabasChurch339();" );
}
function StBarnabasChurch339(){
  StBarnabasChurch()
  BackDestination.setAttribute( "onClick", "StBarnabasChurch339Audio();" );
  NextDestination.setAttribute( "onClick", "StBarnabasChurch339Audio();" );
}
function RomanRoadGroveRoad339(){
  RomanRoadGroveRoad()
  BackDestination.setAttribute( "onClick", "RomanRoadGroveRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "RomanRoadGroveRoad339Audio();" );
}
function RomanRoadGroveRoad339Audio(){
  RomanRoadGroveRoadAudio()
  BackDestination.setAttribute( "onClick", "MedwayRoad339();" );
  NextDestination.setAttribute( "onClick", "ArberyRoad339();" );
}
function StBarnabasChurch339Audio(){
  StBarnabasChurchAudio()
  BackDestination.setAttribute( "onClick", "RomanRoadGroveRoad339();" );
  NextDestination.setAttribute( "onClick", "ArberyRoad339();" );
}
function ArberyRoad339(){
  ArberyRoad()
  BackDestination.setAttribute( "onClick", "ArberyRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "ArberyRoad339Audio();" );
}
function ArberyRoad339Audio(){
  ArberyRoadAudio()
  BackDestination.setAttribute( "onClick", "StBarnabasChurch339();" );
  NextDestination.setAttribute( "onClick", "LichfieldRoad339();" );
}
function LichfieldRoad339(){
  LichfieldRoad()
  BackDestination.setAttribute( "onClick", "LichfieldRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "LichfieldRoad339Audio();" );
}
function LichfieldRoad339Audio(){
  LichfieldRoadAudio()
  BackDestination.setAttribute( "onClick", "ArberyRoad339();" );
  NextDestination.setAttribute( "onClick", "MileEndStationBowRoad339();" );
}
function MileEndStationBowRoad339(){
  MileEndStationBowRoad()
  BackDestination.setAttribute( "onClick", "MileEndStationBowRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "MileEndStationBowRoad339Audio();" );
}
function MileEndStationBowRoad339Audio(){
  MileEndStationBowRoadAudio()
  BackDestination.setAttribute( "onClick", "BrentsideHighSchoolE11();" );
  NextDestination.setAttribute( "onClick", "RegentsCanal339();" );
}
function RegentsCanal339(){
  RegentsCanal()
  BackDestination.setAttribute( "onClick", "RegentsCanal339Audio();" );
  NextDestination.setAttribute( "onClick", "RegentsCanal339Audio();" );
}
function MileEndStationMileEndRoad339(){
  MileEndStationMileEndRoad()
  BackDestination.setAttribute( "onClick", "MileEndStationMileEndRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "MileEndStationMileEndRoad339Audio();" );
}
function MileEndStationMileEndRoad339Audio(){
  MileEndStationMileEndRoadAudio()
  BackDestination.setAttribute( "onClick", "LichfieldRoad339();" );
  NextDestination.setAttribute( "onClick", "QueenMaryUniversityofLondon339();" );
}
function RegentsCanal339Audio(){
  RegentsCanalAudio()
  BackDestination.setAttribute( "onClick", "MileEndStationMileEndRoad339();" );
  NextDestination.setAttribute( "onClick", "QueenMaryUniversityofLondon339();" );
}
function QueenMaryUniversityofLondon339(){
  QueenMaryUniversityofLondon()
  BackDestination.setAttribute( "onClick", "QueenMaryUniversityofLondon339Audio();" );
  NextDestination.setAttribute( "onClick", "QueenMaryUniversityofLondon339Audio();" );
}
function QueenMaryUniversityofLondon339Audio(){
  QueenMaryUniversityofLondonAudio()
  BackDestination.setAttribute( "onClick", "BrentsideHighSchoolE11();" );
  NextDestination.setAttribute( "onClick", "ErnestStreet339();" );
}
function ErnestStreet339(){
  ErnestStreet()
  BackDestination.setAttribute( "onClick", "ErnestStreet339Audio();" );
  NextDestination.setAttribute( "onClick", "ErnestStreet339Audio();" );
}
function ErnestStreet339Audio(){
  ErnestStreetAudio()
  BackDestination.setAttribute( "onClick", "RegentsCanal339();" );
  NextDestination.setAttribute( "onClick", "DongolaRoad339();" );
}
function DongolaRoad339(){
  DongolaRoad()
  BackDestination.setAttribute( "onClick", "DongolaRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "DongolaRoad339Audio();" );
}
function DongolaRoad339Audio(){
  DongolaRoadAudio()
  BackDestination.setAttribute( "onClick", "ErnestStreet339();" );
  NextDestination.setAttribute( "onClick", "HarfordStreet339();" );
}
function HarfordStreet339(){
  HarfordStreet()
  BackDestination.setAttribute( "onClick", "HarfordStreet339Audio();" );
  NextDestination.setAttribute( "onClick", "HarfordStreet339Audio();" );
}
function HarfordStreet339Audio(){
  HarfordStreetAudio()
  BackDestination.setAttribute( "onClick", "DongolaRoad339();" );
  NextDestination.setAttribute( "onClick", "StDunstansChurch339();" );
}
function StDunstansChurch339(){
  StDunstansChurch()
  BackDestination.setAttribute( "onClick", "StDunstansChurch339Audio();" );
  NextDestination.setAttribute( "onClick", "StDunstansChurch339Audio();" );
}
function StDunstansChurch339Audio(){
  StDunstansChurchAudio()
  BackDestination.setAttribute( "onClick", "HarfordStreet339();" );
  NextDestination.setAttribute( "onClick", "JamaicaStreet339();" );
}
function JamaicaStreet339(){
  JamaicaStreet()
  BackDestination.setAttribute( "onClick", "JamaicaStreet339Audio();" );
  NextDestination.setAttribute( "onClick", "JamaicaStreet339Audio();" );
}
function JamaicaStreet339Audio(){
  JamaicaStreetAudio()
  BackDestination.setAttribute( "onClick", "StDunstansChurch339();" );
  NextDestination.setAttribute( "onClick", "MusburyStreet339();" );
}
function MusburyStreet339(){
  MusburyStreet()
  BackDestination.setAttribute( "onClick", "MusburyStreet339Audio();" );
  NextDestination.setAttribute( "onClick", "MusburyStreet339Audio();" );
}
function MusburyStreet339Audio(){
  MusburyStreetAudio()
  BackDestination.setAttribute( "onClick", "JamaicaStreet339();" );
  NextDestination.setAttribute( "onClick", "MarthaStreet339();" );
}
function MarthaStreet339(){
  MarthaStreet()
  BackDestination.setAttribute( "onClick", "MarthaStreet339Audio();" );
  NextDestination.setAttribute( "onClick", "MarthaStreet339Audio();" );
}
function MarthaStreet339Audio(){
  MarthaStreetAudio()
  BackDestination.setAttribute( "onClick", "BrentsideHighSchoolE11();" );
  NextDestination.setAttribute( "onClick", "ShadwellStation339();" );
}
function ShadwellStation339(){
  ShadwellStation()
  BackDestination.setAttribute( "onClick", "ShadwellStation339Audio();" );
  NextDestination.setAttribute( "onClick", "ShadwellStation339Audio();" );
}
function SuttonStreet339(){
  SuttonStreet()
  BackDestination.setAttribute( "onClick", "SuttonStreet339Audio();" );
  NextDestination.setAttribute( "onClick", "SuttonStreet339Audio();" );
}
function SuttonStreet339Audio(){
  SuttonStreeAudio()
  BackDestination.setAttribute( "onClick", "MusburyStreet339();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}
function ShadwellStation339Audio(){
  ShadwellStationAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}