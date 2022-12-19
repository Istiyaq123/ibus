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
function Shadwell100btn(){
  LeytonstoneStnGroveGreenRoad100()
  showDestination.setAttribute( "onClick", "Shadwell100ibus();" );
}
function Leytonstone339btn(){
  ShadwellStation339()
  showDestination.setAttribute( "onClick", "Leytonstone339ibus();" );
}
function Shadwell100btn(){
  KingEdwardStreetStPaulsStation100()
  showDestination.setAttribute( "onClick", "Shadwell100ibus();" );
}
function StPauls100btn(){
  StGeorgesTownHallShadwellStn100()
  showDestination.setAttribute( "onClick", "StPauls100ibus();" );
}
function PoplarAllSaintsD7btn(){
  MileEndStationBowRoadD7()
  showDestination.setAttribute( "onClick", "PoplarAllSaintsD7ibus();" );
}
function MileEndD7btn(){
  PoplarAllSaintsChurchD7()
  showDestination.setAttribute( "onClick", "MileEndD7ibus();" );
}
function CanningTown69btn(){
  routeDestination = "CanningTown69";
  WalthamstowBusStation69()
  showDestination.setAttribute( "onClick", "CanningTown69ibus();" );
}
function WalthamstowCentral69btn(){
  routeDestination = "WalthamstowCentral69";
  CanningTownStation69()
  showDestination.setAttribute( "onClick", "WalthamstowCentral69ibus();" );
}

function Shadwell339ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
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
  marquee.style.display = "none";
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
function Shadwell100ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "100 to Shadwell";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_100_001.mp3";
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
function StPauls100ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "100 to St Paul's";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_100_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_ST_PAULS_001.mp3";
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
function PoplarAllSaintsD7ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "D7 to Poplar, All Saints";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_D7_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_POPLAR_ALL_SAINTS_001.mp3";
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
function MileEndD7ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "D7 to Mile End";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_D7_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_MILE_END_001.mp3";
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
function CanningTown69ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "69 to Canning Town Bus Station";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_69_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CANNING_TOWN_BUS_STATION_001.mp3";
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
function WalthamstowCentral69ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "69 to Walthamstow Central";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_69_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_WALTHAMSTOW_CENTRAL_001.mp3";
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

function KingEdwardStreetStPaulsStation100(){
  KingEdwardStreetStPaulsStation()
  BackDestination.setAttribute( "onClick", "KingEdwardStreetStPaulsStation100Audio();" );
  NextDestination.setAttribute( "onClick", "KingEdwardStreetStPaulsStation100Audio();" );
}
function KingEdwardStreetStPaulsStation100Audio(){
  KingEdwardStreetStPaulsStationAudio()
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "LittleBritain100();" );
}
function LittleBritain100(){
  LittleBritain()
  BackDestination.setAttribute( "onClick", "LittleBritain100Audio();" );
  NextDestination.setAttribute( "onClick", "LittleBritain100Audio();" );
}
function LittleBritain100Audio(){
  LittleBritainAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "LondonWallMuseumofLondon100();" );
}
function LondonWallMuseumofLondon100(){
  LondonWallMuseumofLondon()
  BackDestination.setAttribute( "onClick", "LondonWallMuseumofLondon100Audio();" );
  NextDestination.setAttribute( "onClick", "LondonWallMuseumofLondon100Audio();" );
}
function StPaulsStation100(){
  StPaulsStation()
  BackDestination.setAttribute( "onClick", "StPaulsStation100Audio();" );
  NextDestination.setAttribute( "onClick", "StPaulsStation100Audio();" );
}
function StPaulsStation100Audio(){
  StPaulsStationAudio()
  BackDestination.setAttribute( "onClick", "KingEdwardStreetStPaulsStation100();" );
  NextDestination.setAttribute( "onClick", "LondonWallMoorgateStation100();" );
}
function LondonWallMuseumofLondon100Audio(){
  LondonWallMuseumofLondonAudio()
  BackDestination.setAttribute( "onClick", "StPaulsStation100();" );
  NextDestination.setAttribute( "onClick", "LondonWallMoorgateStation100();" );
}
function LondonWallMoorgateStation100(){
  LondonWallMoorgateStation()
  BackDestination.setAttribute( "onClick", "LondonWallMoorgateStation100Audio();" );
  NextDestination.setAttribute( "onClick", "LondonWallMoorgateStation100Audio();" );
}
function LondonWallMoorgateStation100Audio(){
  LondonWallMoorgateStationAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "AllHallowsChurch100();" );
}
function AllHallowsChurch100(){
  AllHallowsChurch()
  BackDestination.setAttribute( "onClick", "AllHallowsChurch100Audio();" );
  NextDestination.setAttribute( "onClick", "AllHallowsChurch100Audio();" );
}
function AllHallowsChurch100Audio(){
  AllHallowsChurchAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "WormwoodStreet100();" );
}
function WormwoodStreet100(){
  WormwoodStreet()
  BackDestination.setAttribute( "onClick", "WormwoodStreet100Audio();" );
  NextDestination.setAttribute( "onClick", "WormwoodStreet100Audio();" );
}
function MoorgateStation100(){
  MoorgateStation()
  BackDestination.setAttribute( "onClick", "MoorgateStation100Audio();" );
  NextDestination.setAttribute( "onClick", "MoorgateStation100Audio();" );
}
function MoorgateStation100Audio(){
  MoorgateStationAudio()
  BackDestination.setAttribute( "onClick", "LondonWallMuseumofLondon100();" );
  NextDestination.setAttribute( "onClick", "StBotolphStreet100();" );
}
function WormwoodStreet100Audio(){
  WormwoodStreetAudio()
  BackDestination.setAttribute( "onClick", "MoorgateStation100();" );
  NextDestination.setAttribute( "onClick", "StBotolphStreet100();" );
}
function StBotolphStreet100(){
  StBotolphStreet()
  BackDestination.setAttribute( "onClick", "StBotolphStreet100Audio();" );
  NextDestination.setAttribute( "onClick", "StBotolphStreet100Audio();" );
}
function StBotolphStreet100Audio(){
  StBotolphStreetAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "AldgateStation100();" );
}
function AldgateStation100(){
  AldgateStation()
  BackDestination.setAttribute( "onClick", "AldgateStation100Audio();" );
  NextDestination.setAttribute( "onClick", "AldgateStation100Audio();" );
}
function AldgateStation100Audio(){
  AldgateStationAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "Minories100();" );
}
function Minories100(){
  Minories()
  BackDestination.setAttribute( "onClick", "Minories100Audio();" );
  NextDestination.setAttribute( "onClick", "Minories100Audio();" );
}
function Minories100Audio(){
  MinoriesAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "TowerHillTowerGatewayStation100();" );
}
function TowerHillTowerGatewayStation100(){
  TowerHillTowerGatewayStation()
  BackDestination.setAttribute( "onClick", "TowerHillTowerGatewayStation100Audio();" );
  NextDestination.setAttribute( "onClick", "TowerHillTowerGatewayStation100Audio();" );
}
function TowerHillTowerGatewayStation100Audio(){
  TowerHillTowerGatewayStationAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "StKatharineDocks100();" );
}
function StKatharineDocks100(){
  StKatharineDocks()
  BackDestination.setAttribute( "onClick", "StKatharineDocks100Audio();" );
  NextDestination.setAttribute( "onClick", "StKatharineDocks100Audio();" );
}
function TowerGatewayStation100(){
  TowerGatewayStation()
  BackDestination.setAttribute( "onClick", "TowerGatewayStation100Audio();" );
  NextDestination.setAttribute( "onClick", "TowerGatewayStation100Audio();" );
}
function MansellStreet100(){
  MansellStreet()
  BackDestination.setAttribute( "onClick", "MansellStreet100Audio();" );
  NextDestination.setAttribute( "onClick", "MansellStreet100Audio();" );
}
function DukesPlace100(){
  DukesPlace()
  BackDestination.setAttribute( "onClick", "DukesPlace100Audio();" );
  NextDestination.setAttribute( "onClick", "DukesPlace100Audio();" );
}
function Bishopsgate100(){
  Bishopsgate()
  BackDestination.setAttribute( "onClick", "Bishopsgate100Audio();" );
  NextDestination.setAttribute( "onClick", "Bishopsgate100Audio();" );
}
function Bishopsgate100Audio(){
  BishopsgateAudio()
  BackDestination.setAttribute( "onClick", "WormwoodStreet100();" );
  NextDestination.setAttribute( "onClick", "TheHighway100();" );
}
function DukesPlace100Audio(){
  DukesPlaceAudio()
  BackDestination.setAttribute( "onClick", "Bishopsgate100();" );
  NextDestination.setAttribute( "onClick", "TheHighway100();" );
}
function MansellStreet100Audio(){
  MansellStreetAudio()
  BackDestination.setAttribute( "onClick", "DukesPlace100();" );
  NextDestination.setAttribute( "onClick", "TheHighway100();" );
}
function TowerGatewayStation100Audio(){
  TowerGatewayStationAudio()
  BackDestination.setAttribute( "onClick", "MansellStreet100();" );
  NextDestination.setAttribute( "onClick", "TheHighway100();" );
}
function StKatharineDocks100Audio(){
  StKatharineDocksAudio()
  BackDestination.setAttribute( "onClick", "TowerGatewayStation100();" );
  NextDestination.setAttribute( "onClick", "TheHighway100();" );
}
function TheHighway100(){
  TheHighway()
  BackDestination.setAttribute( "onClick", "TheHighway100Audio();" );
  NextDestination.setAttribute( "onClick", "TheHighway100Audio();" );
}
function TheHighway100Audio(){
  TheHighwayAudio()
  BackDestination.setAttribute( "onClick", "StKatharineDocks100();" );
  NextDestination.setAttribute( "onClick", "NeshamStreet100();" );
}
function NeshamStreet100(){
  NeshamStreet()
  BackDestination.setAttribute( "onClick", "NeshamStreet100Audio();" );
  NextDestination.setAttribute( "onClick", "NeshamStreet100Audio();" );
}
function NeshamStreet100Audio(){
  NeshamStreetAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "HermitageWall100();" );
}
function HermitageWall100(){
  HermitageWall()
  BackDestination.setAttribute( "onClick", "HermitageWall100Audio();" );
  NextDestination.setAttribute( "onClick", "HermitageWall100Audio();" );
}
function StockholmWay100(){
  StockholmWay()
  BackDestination.setAttribute( "onClick", "StockholmWay100Audio();" );
  NextDestination.setAttribute( "onClick", "StockholmWay100Audio();" );
}
function StockholmWay100Audio(){
  StockholmWayAudio()
  BackDestination.setAttribute( "onClick", "TheHighway100();" );
  NextDestination.setAttribute( "onClick", "SampsonStreet100();" );
}
function HermitageWall100Audio(){
  HermitageWallAudio()
  BackDestination.setAttribute( "onClick", "StockholmWay100();" );
  NextDestination.setAttribute( "onClick", "SampsonStreet100();" );
}
function SampsonStreet100(){
  SampsonStreet()
  BackDestination.setAttribute( "onClick", "SampsonStreet100Audio();" );
  NextDestination.setAttribute( "onClick", "SampsonStreet100Audio();" );
}
function SampsonStreet100Audio(){
  SampsonStreetAudio()
  BackDestination.setAttribute( "onClick", "HermitageWall100();" );
  NextDestination.setAttribute( "onClick", "DundeeStreet100();" );
}
function DundeeStreet100(){
  DundeeStreet()
  BackDestination.setAttribute( "onClick", "DundeeStreet100Audio();" );
  NextDestination.setAttribute( "onClick", "DundeeStreet100Audio();" );
}
function DundeeStreet100Audio(){
  DundeeStreetAudio()
  BackDestination.setAttribute( "onClick", "SampsonStreet100();" );
  NextDestination.setAttribute( "onClick", "WappingStation100();" );
}
function WappingStation100(){
  WappingStation()
  BackDestination.setAttribute( "onClick", "WappingStation100Audio();" );
  NextDestination.setAttribute( "onClick", "WappingStation100Audio();" );
}
function WappingStation100Audio(){
  WappingStationAudio()
  BackDestination.setAttribute( "onClick", "DundeeStreet100();" );
  NextDestination.setAttribute( "onClick", "WappingHealthCentre100();" );
}
function WappingHealthCentre100(){
  WappingHealthCentre()
  BackDestination.setAttribute( "onClick", "WappingHealthCentre100Audio();" );
  NextDestination.setAttribute( "onClick", "WappingHealthCentre100Audio();" );
}
function CleggStreet100(){
  CleggStreet()
  BackDestination.setAttribute( "onClick", "CleggStreet100Audio();" );
  NextDestination.setAttribute( "onClick", "CleggStreet100Audio();" );
}
function GarnetStreet100(){
  GarnetStreet()
  BackDestination.setAttribute( "onClick", "GarnetStreet100Audio();" );
  NextDestination.setAttribute( "onClick", "GarnetStreet100Audio();" );
}
function WappingWall100(){
  WappingWall1()
  BackDestination.setAttribute( "onClick", "WappingWall100Audio();" );
  NextDestination.setAttribute( "onClick", "WappingWall100Audio();" );
}
function WappingWall100Audio(){
  WappingWallAudio()
  BackDestination.setAttribute( "onClick", "WappingStation100();" );
  NextDestination.setAttribute( "onClick", "TobaccoDock100();" );
}
function GarnetStreet100Audio(){
  GarnetStreetAudio()
  BackDestination.setAttribute( "onClick", "WappingWall100();" );
  NextDestination.setAttribute( "onClick", "TobaccoDock100();" );
}
function CleggStreet100Audio(){
  CleggStreetAudio()
  BackDestination.setAttribute( "onClick", "GarnetStreet100();" );
  NextDestination.setAttribute( "onClick", "TobaccoDock100();" );
}
function WappingHealthCentre100Audio(){
  WappingHealthCentreAudio()
  BackDestination.setAttribute( "onClick", "CleggStreet100();" );
  NextDestination.setAttribute( "onClick", "TobaccoDock100();" );
}
function TobaccoDock100(){
  TobaccoDock()
  BackDestination.setAttribute( "onClick", "TobaccoDock100Audio();" );
  NextDestination.setAttribute( "onClick", "TobaccoDock100Audio();" );
}
function TobaccoDock100Audio(){
  TobaccoDockAudio()
  BackDestination.setAttribute( "onClick", "WappingHealthCentre100();" );
  NextDestination.setAttribute( "onClick", "StPaulsChurch100();" );
}
function StPaulsChurch100(){
  StPaulsChurch()
  BackDestination.setAttribute( "onClick", "StPaulsChurch100Audio();" );
  NextDestination.setAttribute( "onClick", "StPaulsChurch100Audio();" );
}
function StPaulsChurch100Audio(){
  StPaulsChurchAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "GlamisPlace100();" );
}
function GlamisPlace100(){
  GlamisPlace()
  BackDestination.setAttribute( "onClick", "GlamisPlace100Audio();" );
  NextDestination.setAttribute( "onClick", "GlamisPlace100Audio();" );
}
function GlamisPlace100Audio(){
  GlamisPlaceAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "KingDavidLane100();" );
}
function KingDavidLane100(){
  KingDavidLane()
  BackDestination.setAttribute( "onClick", "KingDavidLane100Audio();" );
  NextDestination.setAttribute( "onClick", "KingDavidLane100Audio();" );
}
function KingDavidLane100Audio(){
  KingDavidLaneAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "ShadwellStation100();" );
}
function ShadwellStation100(){
  ShadwellStation()
  BackDestination.setAttribute( "onClick", "ShadwellStation100Audio();" );
  NextDestination.setAttribute( "onClick", "ShadwellStation100Audio();" );
}
function ShadwellStation100Audio(){
  ShadwellStationAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "StGeorgesTownHallShadwellStn100();" );
}
function StGeorgesTownHallShadwellStn100(){
  StGeorgesTownHallShadwellStn()
  BackDestination.setAttribute( "onClick", "StGeorgesTownHallShadwellStn100Audio();" );
  NextDestination.setAttribute( "onClick", "StGeorgesTownHallShadwellStn100Audio();" );
}
function StGeorgesTownHallShadwellStn100Audio(){
  StGeorgesTownHallShadwellStnAudio()
  BackDestination.setAttribute( "onClick", "TobaccoDock100();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}

function PoplarAllSaintsChurchD7(){
  PoplarAllSaintsChurch()
  BackDestination.setAttribute( "onClick", "PoplarAllSaintsChurchD7Audio();" );
  NextDestination.setAttribute( "onClick", "PoplarAllSaintsChurchD7Audio();" );
}
function PoplarAllSaintsChurchD7Audio(){
  PoplarAllSaintsChurchAudio()
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "PoplarHighStreetBlackwallD7();" );
}
function PoplarHighStreetBlackwallD7(){
  PoplarHighStreetBlackwall()
  BackDestination.setAttribute( "onClick", "PoplarHighStreetBlackwallD7Audio();" );
  NextDestination.setAttribute( "onClick", "PoplarHighStreetBlackwallD7Audio();" );
}
function PoplarHighStreetBlackwallD7Audio(){
  PoplarHighStreetBlackwallAudio()
  BackDestination.setAttribute( "onClick", "PoplarAllSaintsChurchD7();" );
  NextDestination.setAttribute( "onClick", "AspenWayD7();" );
}
function AspenWayD7(){
  AspenWay()
  BackDestination.setAttribute( "onClick", "AspenWayD7Audio();" );
  NextDestination.setAttribute( "onClick", "AspenWayD7Audio();" );
}
function AspenWayD7Audio(){
  AspenWayAudio()
  BackDestination.setAttribute( "onClick", "PoplarHighStreetBlackwallD7();" );
  NextDestination.setAttribute( "onClick", "ColdharbourD7();" );
}
function ColdharbourD7(){
  Coldharbour()
  BackDestination.setAttribute( "onClick", "ColdharbourD7Audio();" );
  NextDestination.setAttribute( "onClick", "ColdharbourD7Audio();" );
}
function ColdharbourD7Audio(){
  ColdharbourAudio()
  BackDestination.setAttribute( "onClick", "AspenWayD7();" );
  NextDestination.setAttribute( "onClick", "StewartStreetD7();" );
}
function StewartStreetD7(){
  StewartStreet()
  BackDestination.setAttribute( "onClick", "StewartStreetD7Audio();" );
  NextDestination.setAttribute( "onClick", "StewartStreetD7Audio();" );
}
function StewartStreetD7Audio(){
  StewartStreetAudio()
  BackDestination.setAttribute( "onClick", "TheBlueBridgeD7();" );
  NextDestination.setAttribute( "onClick", "StJohnsParkD7();" );
}
function TheBlueBridgeD7(){
  TheBlueBridge()
  BackDestination.setAttribute( "onClick", "TheBlueBridgeD7Audio();" );
  NextDestination.setAttribute( "onClick", "TheBlueBridgeD7Audio();" );
}
function TheBlueBridgeD7Audio(){
  TheBlueBridgeAudio()
  BackDestination.setAttribute( "onClick", "ColdharbourD7();" );
  NextDestination.setAttribute( "onClick", "StJohnsParkD7();" );
}
function StJohnsParkD7(){
  StJohnsPark()
  BackDestination.setAttribute( "onClick", "StJohnsParkD7Audio();" );
  NextDestination.setAttribute( "onClick", "StJohnsParkD7Audio();" );
}
function StJohnsParkD7Audio(){
  StJohnsParkAudio()
  BackDestination.setAttribute( "onClick", "StewartStreetD7();" );
  NextDestination.setAttribute( "onClick", "CubittTownSchoolD7();" );
}
function CubittTownSchoolD7(){
  CubittTownSchool()
  BackDestination.setAttribute( "onClick", "CubittTownSchoolD7Audio();" );
  NextDestination.setAttribute( "onClick", "CubittTownSchoolD7Audio();" );
}
function CubittTownSchoolD7Audio(){
  CubittTownSchoolAudio()
  BackDestination.setAttribute( "onClick", "StJohnsParkD7();" );
  NextDestination.setAttribute( "onClick", "PierStreetD7();" );
}
function PierStreetD7(){
  PierStreet()
  BackDestination.setAttribute( "onClick", "PierStreetD7Audio();" );
  NextDestination.setAttribute( "onClick", "PierStreetD7Audio();" );
}
function PierStreetD7Audio(){
  PierStreetAudio()
  BackDestination.setAttribute( "onClick", "CubittTownSchoolD7();" );
  NextDestination.setAttribute( "onClick", "IsleofDogsPoliceStationD7();" );
}
function IsleofDogsPoliceStationD7(){
  IsleofDogsPoliceStation()
  BackDestination.setAttribute( "onClick", "IsleofDogsPoliceStationD7Audio();" );
  NextDestination.setAttribute( "onClick", "IsleofDogsPoliceStationD7Audio();" );
}
function IsleofDogsPoliceStationD7Audio(){
  IsleofDogsPoliceStationAudio()
  BackDestination.setAttribute( "onClick", "PierStreetD7();" );
  NextDestination.setAttribute( "onClick", "IslandGardensStationD7();" );
}
function IslandGardensStationD7(){
  IslandGardensStation()
  BackDestination.setAttribute( "onClick", "IslandGardensStationD7Audio();" );
  NextDestination.setAttribute( "onClick", "IslandGardensStationD7Audio();" );
}
function IslandGardensStationD7Audio(){
  IslandGardensStationAudio()
  BackDestination.setAttribute( "onClick", "GeorgeGreensSchoolD7();" );
  NextDestination.setAttribute( "onClick", "EastFerryRoadD7();" );
}
function GeorgeGreensSchoolD7(){
  GeorgeGreensSchool()
  BackDestination.setAttribute( "onClick", "GeorgeGreensSchoolD7Audio();" );
  NextDestination.setAttribute( "onClick", "GeorgeGreensSchoolD7Audio();" );
}
function GeorgeGreensSchoolD7Audio(){
  GeorgeGreensSchoolAudio()
  BackDestination.setAttribute( "onClick", "IsleofDogsPoliceStationD7();" );
  NextDestination.setAttribute( "onClick", "EastFerryRoadD7();" );
}
function EastFerryRoadD7(){
  EastFerryRoad()
  BackDestination.setAttribute( "onClick", "EastFerryRoadD7Audio();" );
  NextDestination.setAttribute( "onClick", "EastFerryRoadD7Audio();" );
}
function EastFerryRoadD7Audio(){
  EastFerryRoadAudio()
  BackDestination.setAttribute( "onClick", "IslandGardensStationD7();" );
  NextDestination.setAttribute( "onClick", "LangbournePlaceD7();" );
}
function LangbournePlaceD7(){
  LangbournePlace()
  BackDestination.setAttribute( "onClick", "LangbournePlaceD7Audio();" );
  NextDestination.setAttribute( "onClick", "LangbournePlaceD7Audio();" );
}
function LangbournePlaceD7Audio(){
  LangbournePlaceAudio()
  BackDestination.setAttribute( "onClick", "TobaccoDock100();" );
  NextDestination.setAttribute( "onClick", "HarbingerSchoolMasthouseTerPierD7();" );
}
function HarbingerSchoolMasthouseTerPierD7(){
  HarbingerSchoolMasthouseTerPier()
  BackDestination.setAttribute( "onClick", "HarbingerSchoolMasthouseTerPierD7Audio();" );
  NextDestination.setAttribute( "onClick", "HarbingerSchoolMasthouseTerPierD7Audio();" );
}
function HarbingerSchoolMasthouseTerPierD7Audio(){
  HarbingerSchoolMasthouseTerPierAudio()
  BackDestination.setAttribute( "onClick", "MaconochiesRoadD7();" );
  NextDestination.setAttribute( "onClick", "StEdmundsSchoolD7();" );
}
function MaconochiesRoadD7(){
  MaconochiesRoad()
  BackDestination.setAttribute( "onClick", "MaconochiesRoadD7Audio();" );
  NextDestination.setAttribute( "onClick", "MaconochiesRoadD7Audio();" );
}
function MaconochiesRoadD7Audio(){
  MaconochiesRoadAudio()
  BackDestination.setAttribute( "onClick", "EastFerryRoadD7();" );
  NextDestination.setAttribute( "onClick", "StEdmundsSchoolD7();" );
}
function StEdmundsSchoolD7(){
  StEdmundsSchool()
  BackDestination.setAttribute( "onClick", "StEdmundsSchoolD7Audio();" );
  NextDestination.setAttribute( "onClick", "StEdmundsSchoolD7Audio();" );
}
function StEdmundsSchoolD7Audio(){
  StEdmundsSchoolAudio()
  BackDestination.setAttribute( "onClick", "HarbingerSchoolMasthouseTerPierD7();" );
  NextDestination.setAttribute( "onClick", "CrewsStreetD7();" );
}
function CrewsStreetD7(){
  CrewsStreet()
  BackDestination.setAttribute( "onClick", "CrewsStreetD7Audio();" );
  NextDestination.setAttribute( "onClick", "CrewsStreetD7Audio();" );
}
function CrewsStreetD7Audio(){
  CrewsStreetAudio()
  BackDestination.setAttribute( "onClick", "TobaccoDock100();" );
  NextDestination.setAttribute( "onClick", "ArnhemWharfPrimarySchoolD7();" );
}
function ArnhemWharfPrimarySchoolD7(){
  ArnhemWharfPrimarySchool()
  BackDestination.setAttribute( "onClick", "ArnhemWharfPrimarySchoolD7Audio();" );
  NextDestination.setAttribute( "onClick", "ArnhemWharfPrimarySchoolD7Audio();" );
}
function ArnhemWharfPrimarySchoolD7Audio(){
  ArnhemWharfPrimarySchoolAudio()
  BackDestination.setAttribute( "onClick", "CrewsStreettheSpaceTheatreD7();" );
  NextDestination.setAttribute( "onClick", "SirJohnMcdougallGardensD7();" );
}
function CrewsStreettheSpaceTheatreD7(){
  CrewsStreettheSpaceTheatre()
  BackDestination.setAttribute( "onClick", "CrewsStreettheSpaceTheatreD7Audio();" );
  NextDestination.setAttribute( "onClick", "CrewsStreettheSpaceTheatreD7Audio();" );
}
function CrewsStreettheSpaceTheatreD7Audio(){
  CrewsStreettheSpaceTheatreAudio()
  BackDestination.setAttribute( "onClick", "StEdmundsSchoolD7();" );
  NextDestination.setAttribute( "onClick", "SirJohnMcdougallGardensD7();" );
}
function SirJohnMcdougallGardensD7(){
  SirJohnMcdougallGardens()
  BackDestination.setAttribute( "onClick", "SirJohnMcdougallGardensD7Audio();" );
  NextDestination.setAttribute( "onClick", "SirJohnMcdougallGardensD7Audio();" );
}
function SirJohnMcdougallGardensD7Audio(){
  SirJohnMcdougallGardensAudio()
  BackDestination.setAttribute( "onClick", "ArnhemWharfPrimarySchoolD7();" );
  NextDestination.setAttribute( "onClick", "BarkantineClinicHutchingsStreetD7();" );
}
function BarkantineClinicHutchingsStreetD7(){
  BarkantineClinicHutchingsStreet()
  BackDestination.setAttribute( "onClick", "BarkantineClinicHutchingsStreetD7Audio();" );
  NextDestination.setAttribute( "onClick", "BarkantineClinicHutchingsStreetD7Audio();" );
}
function BarkantineClinicHutchingsStreetD7Audio(){
  BarkantineClinicHutchingsStreetAudio()
  BackDestination.setAttribute( "onClick", "SirJohnMcdougallGardensD7();" );
  NextDestination.setAttribute( "onClick", "ByngStreetD7();" );
}
function ByngStreetD7(){
  ByngStreet()
  BackDestination.setAttribute( "onClick", "ByngStreetD7Audio();" );
  NextDestination.setAttribute( "onClick", "ByngStreetD7Audio();" );
}
function ByngStreetD7Audio(){
  ByngStreetAudio()
  BackDestination.setAttribute( "onClick", "TobaccoDock100();" );
  NextDestination.setAttribute( "onClick", "MarshWallHeronQuayD7();" );
}
function MarshWallHeronQuayD7(){
  MarshWallHeronQuay()
  BackDestination.setAttribute( "onClick", "MarshWallHeronQuayD7Audio();" );
  NextDestination.setAttribute( "onClick", "MarshWallHeronQuayD7Audio();" );
}
function MarshWallHeronQuayD7Audio(){
  MarshWallHeronQuayAudio()
  BackDestination.setAttribute( "onClick", "CubaStreetD7();" );
  NextDestination.setAttribute( "onClick", "CanaryWharfStationD7();" );
}
function CubaStreetD7(){
  CubaStreet()
  BackDestination.setAttribute( "onClick", "CubaStreetD7Audio();" );
  NextDestination.setAttribute( "onClick", "CubaStreetD7Audio();" );
}
function CubaStreetD7Audio(){
  CubaStreetAudio()
  BackDestination.setAttribute( "onClick", "BarkantineClinicHutchingsStreetD7();" );
  NextDestination.setAttribute( "onClick", "CanaryWharfStationD7();" );
}
function CanaryWharfStationD7(){
  CanaryWharfStation()
  BackDestination.setAttribute( "onClick", "CanaryWharfStationD7Audio();" );
  NextDestination.setAttribute( "onClick", "CanaryWharfStationD7Audio();" );
}
function CanaryWharfStationD7Audio(){
  CanaryWharfStationAudio()
  BackDestination.setAttribute( "onClick", "MarshWallHeronQuayD7();" );
  NextDestination.setAttribute( "onClick", "CanadaSquareSouthCanaryWharfStnD7();" );
}
function CanadaSquareSouthCanaryWharfStnD7(){
  CanadaSquareSouthCanaryWharfStn()
  BackDestination.setAttribute( "onClick", "CanadaSquareSouthCanaryWharfStnD7Audio();" );
  NextDestination.setAttribute( "onClick", "CanadaSquareSouthCanaryWharfStnD7Audio();" );
}
function CanadaSquareSouthCanaryWharfStnD7Audio(){
  CanadaSquareSouthCanaryWharfStnAudio()
  BackDestination.setAttribute( "onClick", "TobaccoDock100();" );
  NextDestination.setAttribute( "onClick", "CanaryWharfStation2D7();" );
}
function CanaryWharfStation2D7(){
  CanaryWharfStation()
  BackDestination.setAttribute( "onClick", "CanaryWharfStation2D7Audio();" );
  NextDestination.setAttribute( "onClick", "CanaryWharfStation2D7Audio();" );
}
function CanaryWharfStation2D7Audio(){
  CanaryWharfStationAudio()
  BackDestination.setAttribute( "onClick", "CanaryWharfStationD7();" );
  NextDestination.setAttribute( "onClick", "WestIndiaAvenueD7();" );
}
function WestIndiaAvenueD7(){
  WestIndiaAvenue()
  BackDestination.setAttribute( "onClick", "WestIndiaAvenueD7Audio();" );
  NextDestination.setAttribute( "onClick", "WestIndiaAvenueD7Audio();" );
}
function WestIndiaAvenueD7Audio(){
  WestIndiaAvenueAudio()
  BackDestination.setAttribute( "onClick", "CanaryWharfStation2D7();" );
  NextDestination.setAttribute( "onClick", "WestferryCircusCanaryWharfPierD7();" );
}
function WestferryCircusCanaryWharfPierD7(){
  WestferryCircusCanaryWharfPier()
  BackDestination.setAttribute( "onClick", "WestferryCircusCanaryWharfPierD7Audio();" );
  NextDestination.setAttribute( "onClick", "WestferryCircusCanaryWharfPierD7Audio();" );
}
function WestferryCircusCanaryWharfPierD7Audio(){
  WestferryCircusCanaryWharfPierAudio()
  BackDestination.setAttribute( "onClick", "TobaccoDock100();" );
  NextDestination.setAttribute( "onClick", "WestferryStationD7();" );
}
function WestferryStationD7(){
  WestferryStation()
  BackDestination.setAttribute( "onClick", "WestferryStationD7Audio();" );
  NextDestination.setAttribute( "onClick", "WestferryStationD7Audio();" );
}
function WestferryStationD7Audio(){
  WestferryStationAudio()
  BackDestination.setAttribute( "onClick", "WestIndiaAvenueD7();" );
  NextDestination.setAttribute( "onClick", "SalterStreetD7();" );
}
function SalterStreetD7(){
  SalterStreet()
  BackDestination.setAttribute( "onClick", "SalterStreetD7Audio();" );
  NextDestination.setAttribute( "onClick", "SalterStreetD7Audio();" );
}
function SalterStreetD7Audio(){
  SalterStreetAudio()
  BackDestination.setAttribute( "onClick", "TobaccoDock100();" );
  NextDestination.setAttribute( "onClick", "EastIndiaDockRoadD7();" );
}
function EastIndiaDockRoadD7(){
  EastIndiaDockRoad()
  BackDestination.setAttribute( "onClick", "EastIndiaDockRoadD7Audio();" );
  NextDestination.setAttribute( "onClick", "EastIndiaDockRoadD7Audio();" );
}
function EastIndiaDockRoadD7Audio(){
  EastIndiaDockRoadAudio()
  BackDestination.setAttribute( "onClick", "LimehousePoliceStationD7();" );
  NextDestination.setAttribute( "onClick", "PixleyStreetD7();" );
}
function LimehousePoliceStationD7(){
  LimehousePoliceStation()
  BackDestination.setAttribute( "onClick", "LimehousePoliceStationD7Audio();" );
  NextDestination.setAttribute( "onClick", "LimehousePoliceStationD7Audio();" );
}
function LimehousePoliceStationD7Audio(){
  LimehousePoliceStationAudio()
  BackDestination.setAttribute( "onClick", "WestferryStationD7();" );
  NextDestination.setAttribute( "onClick", "PixleyStreetD7();" );
}
function PixleyStreetD7(){
  PixleyStreet()
  BackDestination.setAttribute( "onClick", "PixleyStreetD7Audio();" );
  NextDestination.setAttribute( "onClick", "PixleyStreetD7Audio();" );
}
function PixleyStreetD7Audio(){
  PixleyStreetAudio()
  BackDestination.setAttribute( "onClick", "EastIndiaDockRoadD7();" );
  NextDestination.setAttribute( "onClick", "StPaulsWayD7();" );
}
function StPaulsWayD7(){
  StPaulsWay()
  BackDestination.setAttribute( "onClick", "StPaulsWayD7Audio();" );
  NextDestination.setAttribute( "onClick", "StPaulsWayD7Audio();" );
}
function StPaulsWayD7Audio(){
  StPaulsWayAudio()
  BackDestination.setAttribute( "onClick", "PixleyStreetD7();" );
  NextDestination.setAttribute( "onClick", "AckroydDriveD7();" );
}
function AckroydDriveD7(){
  AckroydDrive()
  BackDestination.setAttribute( "onClick", "AckroydDriveD7Audio();" );
  NextDestination.setAttribute( "onClick", "AckroydDriveD7Audio();" );
}
function AckroydDriveD7Audio(){
  AckroydDriveAudio()
  BackDestination.setAttribute( "onClick", "TobaccoDock100();" );
  NextDestination.setAttribute( "onClick", "EricStreetD7();" );
}
function EricStreetD7(){
  EricStreet()
  BackDestination.setAttribute( "onClick", "EricStreetD7Audio();" );
  NextDestination.setAttribute( "onClick", "EricStreetD7Audio();" );
}
function EricStreetD7Audio(){
  EricStreetAudio()
  BackDestination.setAttribute( "onClick", "MileEndParkLeisureCentreD7();" );
  NextDestination.setAttribute( "onClick", "MileEndStationD7();" );
}
function MileEndParkLeisureCentreD7(){
  MileEndParkLeisureCentre()
  BackDestination.setAttribute( "onClick", "MileEndParkLeisureCentreD7Audio();" );
  NextDestination.setAttribute( "onClick", "MileEndParkLeisureCentreD7Audio();" );
}
function MileEndParkLeisureCentreD7Audio(){
  MileEndParkLeisureCentreAudio()
  BackDestination.setAttribute( "onClick", "StPaulsWayD7();" );
  NextDestination.setAttribute( "onClick", "MileEndStationD7();" );
}
function MileEndStationD7(){
  MileEndStation()
  BackDestination.setAttribute( "onClick", "MileEndStationD7Audio();" );
  NextDestination.setAttribute( "onClick", "MileEndStationD7Audio();" );
}
function MileEndStationD7Audio(){
  MileEndStationAudio()
  BackDestination.setAttribute( "onClick", "EricStreetD7();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}
function MileEndStationBowRoadD7(){
  MileEndStationBowRoad()
  BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  NextDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
}
function MileEndStationBowRoadD7Audio(){
  MileEndStationBowRoadAudio()
  BackDestination.setAttribute( "onClick", "MileEndStationD7();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}

function WalthamstowBusStation69(){
  WalthamstowBusStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "WalthamstowBusStation69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "WalthamstowBusStation69Audio();" );
  }
}
function WalthamstowBusStation69Audio(){
  WalthamstowBusStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "GrosvenorParkRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function GrosvenorParkRoad69(){
  GrosvenorParkRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "GrosvenorParkRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function GrosvenorParkRoad69Audio(){
  GrosvenorParkRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "GroveRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function QueensRoad69(){
  QueensRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "QueensRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "QueensRoad69Audio();" );
  }
}
function QueensRoad69Audio(){
  QueensRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "WalthamstowBusStation69();" );
  }
}
function GroveRoad69(){
  GroveRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "GroveRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "GroveRoad69Audio();" );
  }
}
function GroveRoad69Audio(){
  GroveRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BakersAvenue69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "QueensRoad69();" );
  }
}
function BakersAvenue69(){
  BakersAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BakersAvenue69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BakersAvenue69Audio(){
  BakersAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonGreen69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LeytonGreen69(){
  LeytonGreen()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonGreen69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LeytonGreen69Audio(){
  LeytonGreenAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "ColchesterRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HoeStreetBakersArms69(){
  HoeStreetBakersArms()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "HoeStreetBakersArms69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "HoeStreetBakersArms69Audio();" );
  }
}
function HoeStreetBakersArms69Audio(){
  HoeStreetBakersArmsAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonMidlandRoadStation69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "GroveRoad69();" );
  }
}
function LeaBridgeRoadBakersArms69(){
  LeaBridgeRoadBakersArms()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeaBridgeRoadBakersArms69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "LeaBridgeRoadBakersArms69Audio();" );
  }
}
function LeaBridgeRoadBakersArms69Audio(){
  LeaBridgeRoadBakersArmsAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonMidlandRoadStation69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "HoeStreetBakersArms69();" );
  }
}
function ColchesterRoad69(){
  ColchesterRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "ColchesterRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "ColchesterRoad69Audio();" );
  }
}
function ColchesterRoad69Audio(){
  ColchesterRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonMidlandRoadStation69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "LeaBridgeRoadBakersArms69();" );
  }
}
function LeytonMidlandRoadStation69(){
  LeytonMidlandRoadStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonMidlandRoadStation69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "LeytonMidlandRoadStation69Audio();" );
  }
}
function LeytonMidlandRoadStation69Audio(){
  LeytonMidlandRoadStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonSportsGround69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "ColchesterRoad69();" );
  }
}
function LeytonSportsGround69(){
  LeytonSportsGround()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonSportsGround69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LeytonSportsGround69Audio(){
  LeytonSportsGroundAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "VicarageRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BrunswickRoad69(){
  BrunswickRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BrunswickRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "BrunswickRoad69Audio();" );
  }
}
function BrunswickRoad69Audio(){
  BrunswickRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "LeytonMidlandRoadStation69();" );
  }
}
function VicarageRoad69(){
  VicarageRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "VicarageRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "VicarageRoad69Audio();" );
  }
}
function VicarageRoad69Audio(){
  VicarageRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "GrangeParkRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "BrunswickRoad69();" );
  }
}
function GrangeParkRoad69(){
  GrangeParkRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "GrangeParkRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "GrangeParkRoad69Audio();" );
  }
}
function GrangeParkRoad69Audio(){
  GrangeParkRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BuckinghamRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "VicarageRoad69();" );
  }
}
function BuckinghamRoad69(){
  BuckinghamRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BuckinghamRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "BuckinghamRoad69Audio();" );
  }
}
function BuckinghamRoad69Audio(){
  BuckinghamRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonLibrary69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "GrangeParkRoad69();" );
  }
}
function LeytonLibrary69(){
  LeytonLibrary()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonLibrary69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "LeytonLibrary69Audio();" );
  }
}
function LeytonLibrary69Audio(){
  LeytonLibraryAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonStation69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "BuckinghamRoad69();" );
  }
}
function LeytonStation69(){
  LeytonStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonStation69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "LeytonStation69Audio();" );
  }
}
function LeytonStation69Audio(){
  LeytonStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "MillaisRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "LeytonLibrary69();" );
  }
}
function MillaisRoad69(){
  MillaisRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "MillaisRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "MillaisRoad69Audio();" );
  }
}
function MillaisRoad69Audio(){
  MillaisRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "DrapersField69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "LeytonStation69();" );
  }
}
function DrapersField69(){
  DrapersField()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "DrapersField69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "DrapersField69Audio();" );
  }
}
function DrapersField69Audio(){
  DrapersFieldAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "EdithRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "MillaisRoad69();" );
  }
}
function EdithRoad69(){
  EdithRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "EdithRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "EdithRoad69Audio();" );
  }
}
function EdithRoad69Audio(){
  EdithRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BurgessRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "DrapersField69();" );
  }
}
function BurgessRoad69(){
  BurgessRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BurgessRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "BurgessRoad69Audio();" );
  }
}
function BurgessRoad69Audio(){
  BurgessRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "JansonRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "EdithRoad69();" );
  }
}
function JansonRoad69(){
  JansonRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "JansonRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function JansonRoad69Audio(){
  JansonRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "ChobhamRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ChobhamRoad69(){
  ChobhamRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "ChobhamRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "ChobhamRoad69Audio();" );
  }
}
function ChobhamRoad69Audio(){
  ChobhamRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "MarylandStation69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "BurgessRoad69();" );
  }
}
function MarylandStation69(){
  MarylandStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "MarylandStation69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "MarylandStation69Audio();" );
  }
}
function MarylandStation69Audio(){
  MarylandStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "ManbeyGrove69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "ChobhamRoad69();" );
  }
}
function ManbeyGrove69(){
  ManbeyGrove()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "ManbeyGrove69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ManbeyGrove69Audio(){
  ManbeyGroveAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StratfordLibrary69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StratfordLibrary69(){
  StratfordLibrary()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StratfordLibrary69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StratfordLibrary69Audio(){
  StratfordLibraryAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StratfordCentre69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StratfordCentre69(){
  StratfordCentre()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StratfordCentre69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StratfordCentre69Audio(){
  StratfordCentreAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BarnbyStreet69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BarnbyStreet69(){
  BarnbyStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BarnbyStreet69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BarnbyStreet69Audio(){
  BarnbyStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "ChurchStreet69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function MarylandStationManbeyGrove69(){
  MarylandStationManbeyGrove()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StratfordBroadway69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "MarylandStationManbeyGrove69Audio();" );
  }
}
function MarylandStationManbeyGrove69Audio(){
  MarylandStationManbeyGroveAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "MarylandStation69();" );
  }
}
function TheGrove69(){
  TheGrove()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StratfordBroadway69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "TheGrove69Audio();" );
  }
}
function TheGrove69Audio(){
  TheGroveAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "MarylandStationManbeyGrove69();" );
  }
}
function StratfordBusStation69(){
  StratfordBusStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StratfordBroadway69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "StratfordBusStation69Audio();" );
  }
}
function StratfordBusStation69Audio(){
  StratfordBusStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "TheGrove69();" );
  }
}
function StratfordBroadway69(){
  StratfordBroadway()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StratfordBroadway69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "StratfordBroadway69Audio();" );
  }
}
function StratfordBroadway69Audio(){
  StratfordBroadwayAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "StratfordBusStation69();" );
  }
}
function PaulStreet69(){
  PaulStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "PaulStreet69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "PaulStreet69Audio();" );
  }
}
function PaulStreet69Audio(){
  PaulStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "StratfordBroadway69();" );
  }
}
function ChurchStreet69(){
  ChurchStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "ChurchStreet69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "ChurchStreet69Audio();" );
  }
}
function ChurchStreet69Audio(){
  ChurchStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "PlaistowGrove69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "PaulStreet69();" );
  }
}
function PlaistowGrove69(){
  PlaistowGrove()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "PlaistowGrove69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "PlaistowGrove69Audio();" );
  }
}
function PlaistowGrove69Audio(){
  PlaistowGroveAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "MorleyRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "ChurchStreet69();" );
  }
}
function MorleyRoad69(){
  MorleyRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "MorleyRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "MorleyRoad69Audio();" );
  }
}
function MorleyRoad69Audio(){
  MorleyRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "PlaistowStation69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "PlaistowGrove69();" );
  }
}
function PlaistowStation69(){
  MorleyRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "PlaistowStation69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "PlaistowStation69Audio();" );
  }
}
function PlaistowStation69Audio(){
  PlaistowStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "HighStreetPlaistow69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "MorleyRoad69();" );
  }
}
function HighStreetPlaistow69(){
  HighStreetPlaistow()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "HighStreetPlaistow69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HighStreetPlaistow69Audio(){
  HighStreetPlaistowAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "FlorenceRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function FlorenceRoad69(){
  FlorenceRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "FlorenceRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "FlorenceRoad69Audio();" );
  }
}
function FlorenceRoad69Audio(){
  FlorenceRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "UpperRoadGrangeRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "PlaistowStation69();" );
  }
}
function UpperRoadGrangeRoad69(){
  UpperRoadGrangeRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "UpperRoadGrangeRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function UpperRoadGrangeRoad69Audio(){
  UpperRoadGrangeRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "EastLondonCemetery69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function EastLondonCemetery69(){
  EastLondonCemetery()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "EastLondonCemetery69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function EastLondonCemetery69Audio(){
  EastLondonCemeteryAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StephensCourt69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function SuffolkRoad69(){
  SuffolkRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "SuffolkRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "SuffolkRoad69Audio();" );
  }
}
function SuffolkRoad69Audio(){
  SuffolkRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BlakeRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "FlorenceRoad69();" );
  }
}
function LadysmithRoad69(){
  LadysmithRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LadysmithRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "LadysmithRoad69Audio();" );
  }
}
function LadysmithRoad69Audio(){
  LadysmithRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BlakeRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "SuffolkRoad69();" );
  }
}
function StephensCourt69(){
  StephensCourt()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StephensCourt69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "StephensCourt69Audio();" );
  }
}
function StephensCourt69Audio(){
  StephensCourtAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BlakeRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "LadysmithRoad69();" );
  }
}
function BlakeRoad69(){
  BlakeRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BlakeRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "BlakeRoad69Audio();" );
  }
}
function BlakeRoad69Audio(){
  BlakeRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StarLane69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "StephensCourt69();" );
  }
}
function StarLane69(){
  StarLane()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StarLane69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "StarLane69Audio();" );
  }
}
function StarLane69Audio(){
  StarLaneAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "HermitRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "BlakeRoad69();" );
  }
}
function HermitRoad69(){
  HermitRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "HermitRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "HermitRoad69Audio();" );
  }
}
function HermitRoad69Audio(){
  HermitRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "RathboneMarket69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "StarLane69();" );
  }
}
function RathboneMarket69(){
  RathboneMarket()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "RathboneMarket69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "RathboneMarket69Audio();" );
  }
}
function RathboneMarket69Audio(){
  RathboneMarketAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "CanningTownStation69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "HermitRoad69();" );
  }
}
function CanningTownStation69(){
  CanningTownStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "CanningTownStation69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "CanningTownStation69Audio();" );
  }
}
function CanningTownStation69Audio(){
  CanningTownStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BusTermiatesHere();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "RathboneMarket69();" );
  }
}