var smallSpace = '<span class="invisible">.</span>'
var bigSpace = '<span class="invisible">...</span>'
var sSpace = '<span class="invisible">.</span>'
var bSpace = '<span class="invisible">...</span>'

var topTextYes = document.getElementById("topTextYes");
var topTextNo = document.getElementById("topTextNo");

function Chingford305btn(){
  HighburyCorner305()
  showDestination.setAttribute( "onClick", "Chingford305ibus();" );
}
function HighburyCorner305btn(){
  ChingfordStation305()
  showDestination.setAttribute( "onClick", "HighburyCorner305ibus();" );
}
function Wandswortth28btn(){
  StationTerrace28()
  showDestination.setAttribute( "onClick", "Wandswortth28ibus();" );
}
function KensalRise28btn(){
  MapletonCrescent28()
  showDestination.setAttribute( "onClick", "KensalRise28ibus();" );
}
function HammersmithGrove27btnOld(){
  ChalkFarmRoadMorrisons27old()
  showDestination.setAttribute( "onClick", "HammersmithGrove27ibus();" );
}
function ChalkFarm27btnOld(){
  HammersmithStnHCandCircleLines27old()
  showDestination.setAttribute( "onClick", "ChalkFarm27ibus();" );
}
function WestCroydon250btn(){
  BrixtonRoadBrixtonPoliceStation250()
  showDestination.setAttribute( "onClick", "WestCroydon250ibus();" );
}
function Brixton250btn(){
  WestCroydonBusStation250()
  showDestination.setAttribute( "onClick", "Brixton250ibus();" );
}

function Chingford305ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "305 to Chingford";
}
function HighburyCorner305ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "305 to Highbury Corner";
}
function Wandswortth28ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "28 to Wandswortth";
}
function KensalRise28ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "28 to Kensal Rise";
}
function HammersmithGrove27ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "27 to Hammersmith Grove";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_27_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HAMMERSMITH_GROVE_001.mp3";
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
function ChalkFarm27ibus(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "27 to Chalk Farm";
    var audio = 1;
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_27_001.mp3";
    iBusAudio.play();
    iBusAudio.onended = function() {
      audio = 2;
      if (audio === 2){
        iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
        iBusAudio.play();
        iBusAudio.onended = function() {
          audio = 3;
          if (audio == 3){
            iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_CHALK_FARM_001.mp3";
            iBusAudio.play();
            iBusAudio.onended = function() {
              iBusAudio.src="hhjff.mp3";
              iBusAudio.play();
            }
          }
        }
      } 
    }
};
function WestCroydon250ibus(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "250 to West Croydon";
    var audio = 1;
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_250_001.mp3";
    iBusAudio.play();
    iBusAudio.onended = function() {
      audio = 2;
      if (audio === 2){
        iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
        iBusAudio.play();
        iBusAudio.onended = function() {
          audio = 3;
          if (audio == 3){
            iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_WEST_CROYDON_001.mp3";
            iBusAudio.play();
            iBusAudio.onended = function() {
              iBusAudio.src="hhjff.mp3";
              iBusAudio.play();
            }
          }
        }
      } 
    }
};
function Brixton250ibus(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "250 to Brixton";
    var audio = 1;
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_250_001.mp3";
    iBusAudio.play();
    iBusAudio.onended = function() {
      audio = 2;
      if (audio === 2){
        iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
        iBusAudio.play();
        iBusAudio.onended = function() {
          audio = 3;
          if (audio == 3){
            iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_BRIXTON_001.mp3";
            iBusAudio.play();
            iBusAudio.onended = function() {
              iBusAudio.src="hhjff.mp3";
              iBusAudio.play();
            }
          }
        }
      } 
    }
};

function HighburyCorner305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Highbury Corner";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "CanonburyRoadHighburyCorner305();" );
}
function CanonburyRoadHighburyCorner305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Canonbury Road / Highbury Corner";
  BackDestination.setAttribute( "onClick", "HighburyCorner305();" );
  NextDestination.setAttribute( "onClick", "CanonburyGrove305();" );
}
function CanonburyGrove305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Canonbury Road";
  BackDestination.setAttribute( "onClick", "CanonburyGrove305();" );
  NextDestination.setAttribute( "onClick", "EssexRoadStation305();" );
}
function CanonburySquare305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Canonbury Square";
  BackDestination.setAttribute( "onClick", "HighburyCorner305();" );
  NextDestination.setAttribute( "onClick", "EssexRoadStation305();" );
}
function EssexRoadStation305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Essex Road Station";
  BackDestination.setAttribute( "onClick", "CanonburySquare305();" );
  NextDestination.setAttribute( "onClick", "EcclesbourneRoad305();" );
}
function EcclesbourneRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ecclesbourne Road";
  BackDestination.setAttribute( "onClick", "EssexRoadStation305();" );
  NextDestination.setAttribute( "onClick", "BasireStreet305();" );
}
function BasireStreet305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Basire Street";
  BackDestination.setAttribute( "onClick", "EcclesbourneRoad305();" );
  NextDestination.setAttribute( "onClick", "BaringStreet305();" );
}
function EssexRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Essex Road";
  BackDestination.setAttribute( "onClick", "EssexRoadStation305();" );
  NextDestination.setAttribute( "onClick", "ElizabethAvenue305();" );
}
function ElizabethAvenue305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Elizabeth Avenue";
  BackDestination.setAttribute( "onClick", "EssexRoad305();" );
  NextDestination.setAttribute( "onClick", "BaringStreet305();" );
}
function BaringStreet305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Baring Street";
  BackDestination.setAttribute( "onClick", "ElizabethAvenue305();" );
  NextDestination.setAttribute( "onClick", "DownhamRoad305();" );
}
function CanalWalk305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Canal Walk";
  BackDestination.setAttribute( "onClick", "BaringStreet305();" );
  NextDestination.setAttribute( "onClick", "DownhamRoad305();" );
}
function DownhamRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Downham Road";
  BackDestination.setAttribute( "onClick", "CanalWalk305();" );
  NextDestination.setAttribute( "onClick", "NorthchurchRoad305();" );
}
function NorthchurchRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Northchurch Road";
  BackDestination.setAttribute( "onClick", "DownhamRoad305();" );
  NextDestination.setAttribute( "onClick", "UftonRoad305();" );
}
function UftonRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ufton Road";
  BackDestination.setAttribute( "onClick", "NorthchurchRoad305();" );
  NextDestination.setAttribute( "onClick", "MortimerRoad305();" );
}
function MortimerRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mortimer Road";
  BackDestination.setAttribute( "onClick", "UftonRoad305();" );
  NextDestination.setAttribute( "onClick", "DalstonJunctionStation305();" );
}
function EnglefieldRoadMortimerRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Englefield Road / Mortimer Road";
  BackDestination.setAttribute( "onClick", "UftonRoad305();" );
  NextDestination.setAttribute( "onClick", "ForestRoad305();" );
}
function ForestRoad2305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Forest Road";
  BackDestination.setAttribute( "onClick", "EnglefieldRoadMortimerRoad305();" );
  NextDestination.setAttribute( "onClick", "DalstonJunctionStation305();" );
}
function DalstonJunctionStation305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Dalston Junction Station";
  BackDestination.setAttribute( "onClick", "ForestRoad2305();" );
  NextDestination.setAttribute( "onClick", "DalstonLaneDalstonJunctionStn305();" );
}
function DalstonLaneDalstonJunctionStn305(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Dalston Lane / Dalston Junction Stn";
  BackDestination.setAttribute( "onClick", "DalstonJunctionStation305();" );
  NextDestination.setAttribute( "onClick", "StannardRoad305();" );
  topTextYes.style.animationName = "DalstonLaneDalstonJunctionStn";
}
function StannardRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Stannard Road";
  BackDestination.setAttribute( "onClick", "DalstonJunctionStation305();" );
  NextDestination.setAttribute( "onClick", "GreenwoodRoad305();" );
}
function GreenwoodRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Greenwood Road";
  BackDestination.setAttribute( "onClick", "StannardRoad305();" );
  NextDestination.setAttribute( "onClick", "RoyalOakRoad305();" );
}
function RoyalOakRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Royal Oak Road";
  BackDestination.setAttribute( "onClick", "GreenwoodRoad305();" );
  NextDestination.setAttribute( "onClick", "HackneyCentralMareStreet305();" );
}
function HackneyCentralMareStreet305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hackney Central / Mare Street";
  BackDestination.setAttribute( "onClick", "RoyalOakRoad305();" );
  NextDestination.setAttribute( "onClick", "HackneyTownHall305();" );
}
function GrahamRoadHackneyCentral305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Graham Road / Hackney Central";
  BackDestination.setAttribute( "onClick", "RoyalOakRoad305();" );
  NextDestination.setAttribute( "onClick", "HackneyTownHall305();" );
}
function HackneyTownHall305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hackney Town Hall";
  BackDestination.setAttribute( "onClick", "GrahamRoadHackneyCentral305();" );
  NextDestination.setAttribute( "onClick", "StThomassSquare305();" );
}
function StThomassSquare305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Thomas's Square";
  BackDestination.setAttribute( "onClick", "HackneyTownHall305();" );
  NextDestination.setAttribute( "onClick", "MareStreetWellStreet305();" );
}
function MareStreetWellStreet305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mare Street / Well Street";
  BackDestination.setAttribute( "onClick", "StThomassSquare305();" );
  NextDestination.setAttribute( "onClick", "KingEdwardsRoad305();" );
}
function KingEdwardsRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "King Edward's Road";
  BackDestination.setAttribute( "onClick", "MareStreetWellStreet305();" );
  NextDestination.setAttribute( "onClick", "MareStreetVictoriaParkRoad305();" );
}
function MareStreetVictoriaParkRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mare Street / Victoria Park Road";
  BackDestination.setAttribute( "onClick", "KingEdwardsRoad305();" );
  NextDestination.setAttribute( "onClick", "CambridgeHeathStation305();" );
}
function CambridgeHeathStation305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Cambridge Heath Station";
  BackDestination.setAttribute( "onClick", "MareStreetVictoriaParkRoad305();" );
  NextDestination.setAttribute( "onClick", "OldFordRoad305();" );
}
function OldFordRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Old Ford Road";
  BackDestination.setAttribute( "onClick", "CambridgeHeathStation305();" );
  NextDestination.setAttribute( "onClick", "BethnalGreenStation305();" );
}
function BethnalGreenStation305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bethnal Green Station";
  BackDestination.setAttribute( "onClick", "OldFordRoad305();" );
  NextDestination.setAttribute( "onClick", "BurnhamStreet305();" );
}
function BurnhamStreet305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Burnham Street";
  BackDestination.setAttribute( "onClick", "BethnalGreenStation305();" );
  NextDestination.setAttribute( "onClick", "BonnerStreet305();" );
}
function GlobeRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Globe Road";
  BackDestination.setAttribute( "onClick", "BethnalGreenStation305();" );
  NextDestination.setAttribute( "onClick", "MorpethStreet305();" );
}
function MorpethStreet305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Morpeth Street";
  BackDestination.setAttribute( "onClick", "GlobeRoad305();" );
  NextDestination.setAttribute( "onClick", "BonnerStreet305();" );
}
function BonnerStreet305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bonner Street";
  BackDestination.setAttribute( "onClick", "MorpethStreet305();" );
  NextDestination.setAttribute( "onClick", "SmartStreet305();" );
}
function SmartStreet305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Smart Street";
  BackDestination.setAttribute( "onClick", "BonnerStreet305();" );
  NextDestination.setAttribute( "onClick", "OldFordRoad2305();" );
}
function OldFordRoad2305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Old Ford Road";
  BackDestination.setAttribute( "onClick", "SmartStreet305();" );
  NextDestination.setAttribute( "onClick", "VictoriaPark305();" );
}
function HaverfieldGreenGroveRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Haverfield Green / Grove Road";
  BackDestination.setAttribute( "onClick", "BonnerStreet305();" );
  NextDestination.setAttribute( "onClick", "RomanRoad305();" );
}
function RomanRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Roman Road";
  BackDestination.setAttribute( "onClick", "HaverfieldGreenGroveRoad305();" );
  NextDestination.setAttribute( "onClick", "VictoriaPark305();" );
}
function VictoriaPark305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Victoria Park";
  BackDestination.setAttribute( "onClick", "RomanRoad305();" );
  NextDestination.setAttribute( "onClick", "VictoriaParkRoad305();" );
}
function VictoriaParkRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Victoria Park Road";
  BackDestination.setAttribute( "onClick", "VictoriaPark305();" );
  NextDestination.setAttribute( "onClick", "MoulinsRoad305();" );
}
function MoulinsRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Moulins Road";
  BackDestination.setAttribute( "onClick", "VictoriaParkRoad305();" );
  NextDestination.setAttribute( "onClick", "WellStreet305();" );
}
function WellStreet305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Well Street";
  BackDestination.setAttribute( "onClick", "MoulinsRoad305();" );
  NextDestination.setAttribute( "onClick", "MorningLane305();" );
}
function MorningLane305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Morning Lane";
  BackDestination.setAttribute( "onClick", "WellStreet305();" );
  NextDestination.setAttribute( "onClick", "FennStreet305();" );
}
function FennStreet305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Fenn Street";
  BackDestination.setAttribute( "onClick", "MorningLane305();" );
  NextDestination.setAttribute( "onClick", "HomertonHospitalHomertonRow305();" );
}
function HomertonHospitalHomertonRow305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Homerton Hospital / Homerton Row";
  BackDestination.setAttribute( "onClick", "FennStreet305();" );
  NextDestination.setAttribute( "onClick", "HomertonHospitalWardleStreet305();" );
}
function HomertonHospitalWardleStreet305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Homerton Hospital / Wardle Street";
  BackDestination.setAttribute( "onClick", "HomertonHospitalHomertonRow305();" );
  NextDestination.setAttribute( "onClick", "GlynRoad305();" );
}
function PenshurstRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Penshurst Road";
  BackDestination.setAttribute( "onClick", "VictoriaParkRoad305();" );
  NextDestination.setAttribute( "onClick", "ChurchCrescent305();" );
}
function ChurchCrescent305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Church Crescent";
  BackDestination.setAttribute( "onClick", "PenshurstRoad305();" );
  NextDestination.setAttribute( "onClick", "TerraceRoad305();" );
}
function TerraceRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Terrace Road";
  BackDestination.setAttribute( "onClick", "ChurchCrescent305();" );
  NextDestination.setAttribute( "onClick", "ValentineRoad305();" );
}
function ValentineRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Valentine Road";
  BackDestination.setAttribute( "onClick", "TerraceRoad305();" );
  NextDestination.setAttribute( "onClick", "PonsfordStreet305();" );
}
function PonsfordStreet305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ponsford Street";
  BackDestination.setAttribute( "onClick", "ValentineRoad305();" );
  NextDestination.setAttribute( "onClick", "HomertonHighStreet305();" );
}
function HomertonHighStreet305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Homerton High Street";
  BackDestination.setAttribute( "onClick", "PonsfordStreet305();" );
  NextDestination.setAttribute( "onClick", "BanisterHouse305();" );
}
function BanisterHouse305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Banister House";
  BackDestination.setAttribute( "onClick", "HomertonHighStreet305();" );
  NextDestination.setAttribute( "onClick", "HomertonHospital305();" );
}
function HomertonHospital305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Homerton Hospital";
  BackDestination.setAttribute( "onClick", "BanisterHouse305();" );
  NextDestination.setAttribute( "onClick", "BrooksbysWalkHomertonStation305();" );
}
function BrooksbysWalkHomertonStation305(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Brooksby's Walk / Homerton Station";
  BackDestination.setAttribute( "onClick", "HomertonHospital305();" );
  NextDestination.setAttribute( "onClick", "GlynRoad305();" );
  topTextYes.style.animationName = "BrooksbysWalkHomertonStation";
}
function GlynRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Glyn Road";
  BackDestination.setAttribute( "onClick", "BrooksbysWalkHomertonStation305();" );
  NextDestination.setAttribute( "onClick", "AdleyStreet305();" );
}
function AdleyStreet305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Adley Street";
  BackDestination.setAttribute( "onClick", "GlynRoad305();" );
  NextDestination.setAttribute( "onClick", "KingsmeadEstate305();" );
}
function MarshHill305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Marsh Hill";
  BackDestination.setAttribute( "onClick", "GlynRoad305();" );
  NextDestination.setAttribute( "onClick", "KingsmeadEstate305();" );
}
function KingsmeadEstate305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Kingsmead Estate";
  BackDestination.setAttribute( "onClick", "MarshHill305();" );
  NextDestination.setAttribute( "onClick", "HackneyMarshPlayingFields305();" );
}
function HackneyMarshPlayingFields305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hackney Marsh Playing Fields";
  BackDestination.setAttribute( "onClick", "KingsmeadEstate305();" );
  NextDestination.setAttribute( "onClick", "HackneyMarsh305();" );
}
function HackneyMarsh305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hackney Marsh";
  BackDestination.setAttribute( "onClick", "HackneyMarshPlayingFields305();" );
  NextDestination.setAttribute( "onClick", "RuckholtRoadBridge305();" );
}
function RuckholtRoadBridge305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ruckholt Road Bridge";
  BackDestination.setAttribute( "onClick", "HackneyMarsh305();" );
  NextDestination.setAttribute( "onClick", "LeaInterchangeBusGarage305();" );
}
function LeaInterchangeBusGarage305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lea Interchange Bus Garage";
  BackDestination.setAttribute( "onClick", "RuckholtRoadBridge305();" );
  NextDestination.setAttribute( "onClick", "Velopark305();" );
}
function SpitalfieldsMarket305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Spitalfields Market";
  BackDestination.setAttribute( "onClick", "RuckholtRoadBridge305();" );
  NextDestination.setAttribute( "onClick", "Velopark305();" );
}
function Velopark305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Velopark";
  BackDestination.setAttribute( "onClick", "SpitalfieldsMarket305();" );
  NextDestination.setAttribute( "onClick", "ChobhamAcademy305();" );
}
function ChobhamAcademy305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chobham Academy";
  BackDestination.setAttribute( "onClick", "Velopark305();" );
  NextDestination.setAttribute( "onClick", "SirLudwigGuttmannHealthCentre305();" );
}
function SirLudwigGuttmannHealthCentre305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Sir Ludwig Guttmann Health Centre";
  BackDestination.setAttribute( "onClick", "ChobhamAcademy305();" );
  NextDestination.setAttribute( "onClick", "ChobhamRoad305();" );
}
function ChobhamRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chobham Road";
  BackDestination.setAttribute( "onClick", "SirLudwigGuttmannHealthCentre305();" );
  NextDestination.setAttribute( "onClick", "EdithRoad305();" );
}
function EdithRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Edith Road";
  BackDestination.setAttribute( "onClick", "ChobhamRoad305();" );
  NextDestination.setAttribute( "onClick", "BurgessRoad305();" );
}
function BurgessRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Burgess Road";
  BackDestination.setAttribute( "onClick", "EdithRoad305();" );
  NextDestination.setAttribute( "onClick", "RanelaghRoad305();" );
}
function LeytonstoneHighRoadThatchedHouse305(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Leytonstone High Road / Thatched House";
  BackDestination.setAttribute( "onClick", "BurgessRoad305();" );
  NextDestination.setAttribute( "onClick", "RanelaghRoad305();" );
  topTextYes.style.animationName = "LeytonstoneHighRoadThatchedHouse";
}
function RanelaghRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ranelagh Road";
  BackDestination.setAttribute( "onClick", "LeytonstoneHighRoadThatchedHouse305();" );
  NextDestination.setAttribute( "onClick", "HarrowGreen305();" );
}
function HarrowGreen305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Harrow Green";
  BackDestination.setAttribute( "onClick", "RanelaghRoad305();" );
  NextDestination.setAttribute( "onClick", "WestStreet305();" );
}
function WestStreet305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "West Street";
  BackDestination.setAttribute( "onClick", "HarrowGreen305();" );
  NextDestination.setAttribute( "onClick", "LeytonstoneFireStation305();" );
}
function HarrowRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Harrow Road";
  BackDestination.setAttribute( "onClick", "HarrowGreen305();" );
  NextDestination.setAttribute( "onClick", "LeytonstoneFireStation305();" );
}
function LeytonstoneFireStation305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Leytonstone Fire Station";
  BackDestination.setAttribute( "onClick", "HarrowRoad305();" );
  NextDestination.setAttribute( "onClick", "LeytonstoneHighRoadStation305();" );
}
function LeytonstoneHighRoadStation305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Leytonstone High Road Station";
  BackDestination.setAttribute( "onClick", "LeytonstoneFireStation305();" );
  NextDestination.setAttribute( "onClick", "VernonRoad305();" );
}
function VernonRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Vernon Road";
  BackDestination.setAttribute( "onClick", "LeytonstoneHighRoadStation305();" );
  NextDestination.setAttribute( "onClick", "HarveyRoad305();" );
}
function MichaelRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Michael Road";
  BackDestination.setAttribute( "onClick", "LeytonstoneHighRoadStation305();" );
  NextDestination.setAttribute( "onClick", "HarveyRoad305();" );
}
function HarveyRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Harvey Road";
  BackDestination.setAttribute( "onClick", "MichaelRoad305();" );
  NextDestination.setAttribute( "onClick", "KirkdaleRoad305();" );
}
function KirkdaleRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Kirkdale Road";
  BackDestination.setAttribute( "onClick", "HarveyRoad305();" );
  NextDestination.setAttribute( "onClick", "GreenManRoundabout305();" );
}
function LeytonstoneStation305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Leytonstone Station";
  BackDestination.setAttribute( "onClick", "HarveyRoad305();" );
  NextDestination.setAttribute( "onClick", "GreenManRoundabout305();" );
}
function GreenManRoundabout305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Green Man Roundabout";
  BackDestination.setAttribute( "onClick", "LeytonstoneStation305();" );
  NextDestination.setAttribute( "onClick", "CambridgeRoad305();" );
}
function CambridgeRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Cambridge Road";
  BackDestination.setAttribute( "onClick", "GreenManRoundabout305();" );
  NextDestination.setAttribute( "onClick", "BlakeHallRoad305();" );
}
function BlakeHallRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Blake Hall Road";
  BackDestination.setAttribute( "onClick", "CambridgeRoad305();" );
  NextDestination.setAttribute( "onClick", "WansteadStation305();" );
}
function HighstoneAvenue305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Highstone Avenue";
  BackDestination.setAttribute( "onClick", "CambridgeRoad305();" );
  NextDestination.setAttribute( "onClick", "WansteadStationGeorgeGreen305();" );
}
function WansteadStationGeorgeGreen305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wanstead Station / George Green";
  BackDestination.setAttribute( "onClick", "HighstoneAvenue305();" );
  NextDestination.setAttribute( "onClick", "WansteadStation305();" );
}
function WansteadStation305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wanstead Station";
  BackDestination.setAttribute( "onClick", "WansteadStationGeorgeGreen305();" );
  NextDestination.setAttribute( "onClick", "NutterLane305();" );
}
function NutterLane305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Nutter Lane";
  BackDestination.setAttribute( "onClick", "WansteadStation305();" );
  NextDestination.setAttribute( "onClick", "RedbridgeStation305();" );
}
function WigramRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wigram Road";
  BackDestination.setAttribute( "onClick", "WansteadStation305();" );
  NextDestination.setAttribute( "onClick", "RedbridgeLaneWest305();" );
}
function RedbridgeLaneWest305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Redbridge Lane West";
  BackDestination.setAttribute( "onClick", "WigramRoad305();" );
  NextDestination.setAttribute( "onClick", "RedbridgeStation305();" );
}
function RedbridgeStation305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Redbridge Station";
  BackDestination.setAttribute( "onClick", "RedbridgeLaneWest305();" );
  NextDestination.setAttribute( "onClick", "HighRoadSouthWoodford305();" );
}
function HighRoadSouthWoodford305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "High Road South Woodford";
  BackDestination.setAttribute( "onClick", "RedbridgeStation305();" );
  NextDestination.setAttribute( "onClick", "WaterworksCorner305();" );
}
function WaterworksCorner305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Waterworks Corner";
  BackDestination.setAttribute( "onClick", "HighRoadSouthWoodford305();" );
  NextDestination.setAttribute( "onClick", "WaterworksCorner2305();" );
}
function WaterworksCorner2305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Waterworks Corner";
  BackDestination.setAttribute( "onClick", "WaterworksCorner305();" );
  NextDestination.setAttribute( "onClick", "ChelmsfordRoad305();" );
}
function ChelmsfordRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chelmsford Road";
  BackDestination.setAttribute( "onClick", "WaterworksCorner2305();" );
  NextDestination.setAttribute( "onClick", "OakHill305();" );
}
function OakHill305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Oak Hill";
  BackDestination.setAttribute( "onClick", "ChelmsfordRoad305();" );
  NextDestination.setAttribute( "onClick", "StAubynsSchool305();" );
}
function StAubynsSchool305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Aubyn's School";
  BackDestination.setAttribute( "onClick", "ChelmsfordRoad305();" );
  NextDestination.setAttribute( "onClick", "ChingfordLane305();" );
}
function ChingfordLane305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chingford Lane";
  BackDestination.setAttribute( "onClick", "StAubynsSchool305();" );
  NextDestination.setAttribute( "onClick", "WoodfordGreenBroadmeadRoad305();" );
}
function WoodfordGreenBroadmeadRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Woodford Green / Broadmead Road";
  BackDestination.setAttribute( "onClick", "ChingfordLane305();" );
  NextDestination.setAttribute( "onClick", "MonkhamsLane305();" );
}
function MonkhamsLane305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Monkhams Lane";
  BackDestination.setAttribute( "onClick", "WoodfordGreenBroadmeadRoad305();" );
  NextDestination.setAttribute( "onClick", "StThomasOfCanterburyChurch305();" );
}
function StThomasOfCanterburyChurch305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Thomas Of Canterbury Church";
  BackDestination.setAttribute( "onClick", "MonkhamsLane305();" );
  NextDestination.setAttribute( "onClick", "BancroftsSchool305();" );
}
function BancroftsSchool305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bancroft's School";
  BackDestination.setAttribute( "onClick", "StThomasOfCanterburyChurch305();" );
  NextDestination.setAttribute( "onClick", "ForestRoad305();" );
}
function ForestRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Forest Road";
  BackDestination.setAttribute( "onClick", "BancroftsSchool305();" );
  NextDestination.setAttribute( "onClick", "WhitehallLane305();" );
}
function WhitehallLane305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Whitehall Lane";
  BackDestination.setAttribute( "onClick", "ForestRoad305();" );
  NextDestination.setAttribute( "onClick", "SeymourCourt305();" );
}
function NewlandsRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Newlands Road";
  BackDestination.setAttribute( "onClick", "ForestRoad305();" );
  NextDestination.setAttribute( "onClick", "SeymourCourt305();" );
}
function SeymourCourt305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Seymour Court";
  BackDestination.setAttribute( "onClick", "NewlandsRoad305();" );
  NextDestination.setAttribute( "onClick", "BuryRoad305();" );
}
function BuryRoad305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bury Road";
  BackDestination.setAttribute( "onClick", "SeymourCourt305();" );
  NextDestination.setAttribute( "onClick", "ChingfordStation305();" );
}
function ChingfordStation305(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chingford Station";
  BackDestination.setAttribute( "onClick", "BuryRoad305();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}


function StationTerrace28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Station Terrace";
  // BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "BanisterRoad28();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STATION_TERRACE_001.mp3";
  iBusAudio.play();
}
function KensalRiseStation28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Kensal Rise Station";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "BanisterRoad28();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_KENSAL_RISE_STATION_001.mp3";
  iBusAudio.play();
}
function BanisterRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Banister Road";
  BackDestination.setAttribute( "onClick", "KensalRiseStation28();" );
  NextDestination.setAttribute( "onClick", "HarrowRoadKilburnLane28();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BANNISTER_ROAD_001.mp3";
  iBusAudio.play();
}
function HarrowRoadKilburnLane28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Harrow Road / Kilburn Lane";
  BackDestination.setAttribute( "onClick", "BanisterRoad28();" );
  NextDestination.setAttribute( "onClick", "FifthAvenue28();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HARROW_ROAD_KILBURN_LANE_001.mp3";
  iBusAudio.play();
}
function FifthAvenue28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Fifth Avenue";
  BackDestination.setAttribute( "onClick", "HarrowRoadKilburnLane28();" );
  NextDestination.setAttribute( "onClick", "ThirdAvenue28();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_FIFTH_AVENUE_001.mp3";
  iBusAudio.play();
}
function ThirdAvenue28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Third Avenue";
  BackDestination.setAttribute( "onClick", "FifthAvenue28();" );
  NextDestination.setAttribute( "onClick", "PortnallRoad28();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_THIRD_AVENUE_001.mp3";
  iBusAudio.play();
}
function PortnallRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Portnall Road";
  BackDestination.setAttribute( "onClick", "ThirdAvenue28();" );
  NextDestination.setAttribute( "onClick", "GreatWesternRoadElginAvenue28();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Portnall_road_001.mp3";
  iBusAudio.play();
}
function GreatWesternRoadElginAvenue28(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Great Western Road / Elgin Avenue";
  BackDestination.setAttribute( "onClick", "PortnallRoad28();" );
  NextDestination.setAttribute( "onClick", "GreatWesternRoadHarrowRoad28();" );
  topTextYes.style.animationName = "GreatWesternRoadElginAvenue";
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Great_western_road_Elgin_avenue_001.mp3";
  iBusAudio.play();
}
function GreatWesternRoadHarrowRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Great Western Road / Harrow Road";
  BackDestination.setAttribute( "onClick", "GreatWesternRoadElginAvenue28();" );
  NextDestination.setAttribute( "onClick", "WestbourneParkStation28();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Great_western_road_Harrow_Road_001.mp3";
  iBusAudio.play();
}
function KilburnLaneHarrowRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Kilburn Lane / Harrow Road";
  BackDestination.setAttribute( "onClick", "BanisterRoad28();" );
  NextDestination.setAttribute( "onClick", "LadbrokeGroveKilburnLane28();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Kilburn_Lane_Harrow_Road_001.mp3";
  iBusAudio.play();
}
function LadbrokeGroveKilburnLane28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ladbroke Grove / Kilburn Lane";
  BackDestination.setAttribute( "onClick", "KilburnLaneHarrowRoad28();" );
  NextDestination.setAttribute( "onClick", "FifthAvenueQueensParkLibrary28();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Ladbroke_Grove_Kilburn_Lane_001.mp3";
  iBusAudio.play();
}
function FifthAvenueQueensParkLibrary28(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Fifth Avenue / Queen's Park Library";
  BackDestination.setAttribute( "onClick", "LadbrokeGroveKilburnLane28();" );
  NextDestination.setAttribute( "onClick", "SecondAvenue28();" );
  topTextYes.style.animationName = "FifthAvenueQueensParkLibrary";
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Fifth_Avenue_Queens_Park_Libary_001.mp3";
  iBusAudio.play();
}
function SecondAvenue28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Second Avenue";
  BackDestination.setAttribute( "onClick", "FifthAvenueQueensParkLibrary28();" );
  NextDestination.setAttribute( "onClick", "AshmoreRoad28();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Second_Avenue_001.mp3";
  iBusAudio.play();
}
function AshmoreRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ashmore Road";
  BackDestination.setAttribute( "onClick", "SecondAvenue28();" );
  NextDestination.setAttribute( "onClick", "HarrowRoad28();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Ashmore_road_001.mp3";
  iBusAudio.play();
}
function HarrowRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Harrow Road";
  BackDestination.setAttribute( "onClick", "AshmoreRoad28();" );
  NextDestination.setAttribute( "onClick", "WestbourneParkStation28();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Harrow_Road_001.mp3";
  iBusAudio.play();
}
function WestbourneParkStation28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Westbourne Park Station";
  BackDestination.setAttribute( "onClick", "HarrowRoad28();" );
  NextDestination.setAttribute( "onClick", "ShrewsburyRoadBrunelEstate28();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Westbourne_Park_Station_001.mp3";
  iBusAudio.play();
}
function ShrewsburyRoadBrunelEstate28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Shrewsbury Road / Brunel Estate";
  BackDestination.setAttribute( "onClick", "WestbourneParkStation28();" );
  NextDestination.setAttribute( "onClick", "StStephensGardens28();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Shrewsbury_Road_Brunel_Estate_001.mp3";
  iBusAudio.play();
}
function BrunelEstate28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brunel Estate";
  BackDestination.setAttribute( "onClick", "WestbourneParkStation28();" );
  NextDestination.setAttribute( "onClick", "StStephensGardens28();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_brunel_Estate_001.mp3";
  iBusAudio.play();
}
function StStephensGardens28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Stephens Gardens";
  BackDestination.setAttribute( "onClick", "BrunelEstate28();" );
  NextDestination.setAttribute( "onClick", "WestbourneGrove28();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_St_Stephens_Gardens_001.mp3";
  iBusAudio.play();
}
function WestbourneGrove28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Westbourne Grove";
  BackDestination.setAttribute( "onClick", "StStephensGardens28();" );
  NextDestination.setAttribute( "onClick", "PembridgeVillas28();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Westbourne_Grove_001.mp3";
  iBusAudio.play();
}
function PembridgeVillas28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Pembridge Villas";
  BackDestination.setAttribute( "onClick", "WestbourneGrove28();" );
  NextDestination.setAttribute( "onClick", "ChepstowCrescent28();" );
}
function ArtesianRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Artesian Road";
  BackDestination.setAttribute( "onClick", "StStephensGardens28();" );
  NextDestination.setAttribute( "onClick", "PembridgeVillasWestbourneGrove28();" );
}
function PembridgeVillasWestbourneGrove28(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Pembridge Villas / Westbourne Grove";
  BackDestination.setAttribute( "onClick", "ArtesianRoad28();" );
  NextDestination.setAttribute( "onClick", "ChepstowCrescent28();" );
  topTextYes.style.animationName = "PembridgeVillasWestbourneGrove";
}
function ChepstowCrescent28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chepstow Crescent";
  BackDestination.setAttribute( "onClick", "PembridgeVillasWestbourneGrove28();" );
  NextDestination.setAttribute( "onClick", "NottingHillGateStation28();" );
}
function NottingHillGateStnPembridgeRd28(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Notting Hill Gate Stn / Pembridge Rd";
  BackDestination.setAttribute( "onClick", "ChepstowCrescent28();" );
  NextDestination.setAttribute( "onClick", "NottingHillGateStation28();" );
  topTextYes.style.animationName = "NottingHillGateStnPembridgeRd";
}
function NottingHillGateStation28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Notting Hill Gate Station";
  BackDestination.setAttribute( "onClick", "NottingHillGateStnPembridgeRd28();" );
  NextDestination.setAttribute( "onClick", "PalaceGardensTerrNottingHillGte28();" );
}
function PalaceGardensTerrNottingHillGte28(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Palace Gardens Terr / Notting Hill Gte";
  BackDestination.setAttribute( "onClick", "NottingHillGateStation28();" );
  NextDestination.setAttribute( "onClick", "SheffieldTerrace28();" );
  topTextYes.style.animationName = "PalaceGardensTerrNottingHillGte";
}
function SheffieldTerrace28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Sheffield Terrace";
  BackDestination.setAttribute( "onClick", "NottingHillGateStation28();" );
  NextDestination.setAttribute( "onClick", "YorkHousePlaceKensingtonHighSt28();" );
}
function YorkHousePlaceKensingtonHighSt28(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "York House Place / Kensington High St";
  BackDestination.setAttribute( "onClick", "SheffieldTerrace28();" );
  NextDestination.setAttribute( "onClick", "HighStreetKensingtonStation28();" );
  topTextYes.style.animationName = "YorkHousePlaceKensingtonHighSt";
}
function KensingtonChurchStreetHollandSt28(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Kensington Church Street / Holland St";
  BackDestination.setAttribute( "onClick", "SheffieldTerrace28();" );
  NextDestination.setAttribute( "onClick", "HighStreetKensingtonStation28();" );
  topTextYes.style.animationName = "KensingtonChurchStreetHollandSt";
}
function HighStreetKensingtonStation28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "High Street Kensington Station";
  BackDestination.setAttribute( "onClick", "KensingtonChurchStreetHollandSt28();" );
  NextDestination.setAttribute( "onClick", "PhillimoreGardens28();" );
}
function PhillimoreGardens28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Phillimore Gardens";
  BackDestination.setAttribute( "onClick", "HighStreetKensingtonStation28();" );
  NextDestination.setAttribute( "onClick", "TheDesignMuseum28();" );
}
function TheDesignMuseum28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The Design Museum";
  BackDestination.setAttribute( "onClick", "PhillimoreGardens28();" );
  NextDestination.setAttribute( "onClick", "WarwickGardens28();" );
}
function WarwickGardens28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Warwick Gardens";
  BackDestination.setAttribute( "onClick", "TheDesignMuseum28();" );
  NextDestination.setAttribute( "onClick", "KensingtonOlympiaStation28();" );
}
function KensingtonOlympiaStation28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Kensington Olympia Station";
  BackDestination.setAttribute( "onClick", "WarwickGardens28();" );
  NextDestination.setAttribute( "onClick", "KensingtonOlympia28();" );
}
function KensingtonOlympia28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Kensington Olympia";
  BackDestination.setAttribute( "onClick", "KensingtonOlympiaStation28();" );
  NextDestination.setAttribute( "onClick", "LyttonEstate28();" );
}
function HollandRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Holland Road";
  BackDestination.setAttribute( "onClick", "WarwickGardens28();" );
  NextDestination.setAttribute( "onClick", "KensingtonOlympiaHammersmithRoad28();" );
}
function KensingtonOlympiaHammersmithRoad28(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Kensington Olympia / Hammersmith Road";
  BackDestination.setAttribute( "onClick", "HollandRoad28();" );
  NextDestination.setAttribute( "onClick", "LyttonEstate28();" );
  topTextYes.style.animationName = "KensingtonOlympiaHammersmithRoad";
}
function LyttonEstate28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lytton Estate";
  BackDestination.setAttribute( "onClick", "KensingtonOlympiaHammersmithRoad28();" );
  NextDestination.setAttribute( "onClick", "WestKensingtonStation28();" );
}
function WestKensingtonStation28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "West Kensington Station";
  BackDestination.setAttribute( "onClick", "LyttonEstate28();" );
  NextDestination.setAttribute( "onClick", "WestKensingtonEstate28();" );
}
function WestKensingtonEstate28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "West Kensington Estate";
  BackDestination.setAttribute( "onClick", "WestKensingtonStation28();" );
  NextDestination.setAttribute( "onClick", "LillieRoad28();" );
}
function LillieRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lillie Road";
  BackDestination.setAttribute( "onClick", "WestKensingtonEstate28();" );
  NextDestination.setAttribute( "onClick", "MulgraveRoad28();" );
}
function MulgraveRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mulgrave Road";
  BackDestination.setAttribute( "onClick", "LillieRoad28();" );
  NextDestination.setAttribute( "onClick", "FulhamPools28();" );
}
function FulhamPools28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Fulham Pools";
  BackDestination.setAttribute( "onClick", "MulgraveRoad28();" );
  NextDestination.setAttribute( "onClick", "MunsterRoadFulhamCross28();" );
}
function MunsterRoadFulhamCross28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Munster Road / Fulham Cross";
  BackDestination.setAttribute( "onClick", "FulhamPools28();" );
  NextDestination.setAttribute( "onClick", "HannellRoad28();" );
}
function HannellRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hannell Road";
  BackDestination.setAttribute( "onClick", "MunsterRoadFulhamCross28();" );
  NextDestination.setAttribute( "onClick", "SherbrookeRoad28();" );
}
function SherbrookeRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Sherbrooke Road";
  BackDestination.setAttribute( "onClick", "HannellRoad28();" );
  NextDestination.setAttribute( "onClick", "ShorroldsRoad28();" );
}
function ShorroldsRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Shorrolds Road";
  BackDestination.setAttribute( "onClick", "LillieRoad28();" );
  NextDestination.setAttribute( "onClick", "NorthEndRoad28();" );
}
function NorthEndRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "North End Road";
  BackDestination.setAttribute( "onClick", "ShorroldsRoad28();" );
  NextDestination.setAttribute( "onClick", "FulhamBroadway28();" );
}
function FulhamBroadway28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Fulham Broadway";
  BackDestination.setAttribute( "onClick", "ShorroldsRoad28();" );
  NextDestination.setAttribute( "onClick", "FulhamTownHall28();" );
}
function FulhamTownHall28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Fulham Town Hall";
  BackDestination.setAttribute( "onClick", "FulhamBroadway28();" );
  NextDestination.setAttribute( "onClick", "TyrawleyRoad28();" );
}
function TyrawleyRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Tyrawley Road";
  BackDestination.setAttribute( "onClick", "FulhamTownHall28();" );
  NextDestination.setAttribute( "onClick", "NewKingsRoad28();" );
}
function NewKingsRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "New King's Road";
  BackDestination.setAttribute( "onClick", "TyrawleyRoad28();" );
  NextDestination.setAttribute( "onClick", "BovingdonRoad28();" );
}
function BovingdonRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bovingdon Road";
  BackDestination.setAttribute( "onClick", "NewKingsRoad28();" );
  NextDestination.setAttribute( "onClick", "SandsEndHazleburyRoad28();" );
}
function SandsEndHazleburyRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Sands End / Hazlebury Road";
  BackDestination.setAttribute( "onClick", "NewKingsRoad28();" );
  NextDestination.setAttribute( "onClick", "OakburyRoad28();" );
}
function OakburyRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Oakbury Road";
  BackDestination.setAttribute( "onClick", "SandsEndHazleburyRoad28();" );
  NextDestination.setAttribute( "onClick", "TownmeadRoad28();" );
}
function TownmeadRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Townmead Road";
  BackDestination.setAttribute( "onClick", "OakburyRoad28();" );
  NextDestination.setAttribute( "onClick", "BridgendRoad28();" );
}
function BridgendRoad28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bridgend Road";
  BackDestination.setAttribute( "onClick", "TownmeadRoad28();" );
  NextDestination.setAttribute( "onClick", "SwandonWay28();" );
}
function SwandonWay28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Swandon Way";
  BackDestination.setAttribute( "onClick", "BridgendRoad28();" );
  NextDestination.setAttribute( "onClick", "WandsworthTownHall28();" );
}
function WandsworthTownHall28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wandsworth Town Hall";
  BackDestination.setAttribute( "onClick", "SwandonWay28();" );
  NextDestination.setAttribute( "onClick", "SouthsideShoppingCentre28();" );
}
function RamStreet28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ram Street";
  BackDestination.setAttribute( "onClick", "SwandonWay28();" );
  NextDestination.setAttribute( "onClick", "SouthsideShoppingCentre28();" );
}
function SouthsideShoppingCentre28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Southside Shopping Centre";
  BackDestination.setAttribute( "onClick", "RamStreet28();" );
  NextDestination.setAttribute( "onClick", "MapletonCrescent28();" );
}
function MapletonCrescent28(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mapleton Crescent";
  BackDestination.setAttribute( "onClick", "SouthsideShoppingCentre28();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}

function ChalkFarmRoadMorrisons27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chalk Farm Road / Morrisons";
  // BackDestination.setAttribute( "onClick", "SouthsideShoppingCentre28();" );
  NextDestination.setAttribute( "onClick", "HawleyRoad27Old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CHALK_FARM_ROAD_MORRISONS_001.mp3";
  iBusAudio.play();
}
function HawleyRoad27Old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hawley Road";
  BackDestination.setAttribute( "onClick", "ChalkFarmRoadMorrisons27old();" );
  NextDestination.setAttribute( "onClick", "CamdenGardens27Old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Hawley_Road_001.mp3";
  iBusAudio.play();
}
function CamdenGardens27Old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Camden Gardens";
  BackDestination.setAttribute( "onClick", "HawleyRoad27Old();" );
  NextDestination.setAttribute( "onClick", "CamdenTownStation27Old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Camden_Gardens_001.mp3";
  iBusAudio.play();
}
function HartlandRoadCamdenMarket27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hartland Road / Camden Market";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "CamdenTownStation27Old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HARTLAND_ROAD_CAMDEN_MARKET_001.mp3";
  iBusAudio.play();
}
function CamdenTownStation27Old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Camden Town Station";
  BackDestination.setAttribute( "onClick", "HartlandRoadCamdenMarket27old();" );
  NextDestination.setAttribute( "onClick", "PrattStreet27Old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Camden_Town_Station_001.mp3";
  iBusAudio.play();
}
function PrattStreet27Old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Pratt Street";
  BackDestination.setAttribute( "onClick", "CamdenTownStation27Old();" );
  NextDestination.setAttribute( "onClick", "MorningtonCrescentStation27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Pratt_Street_001.mp3";
  iBusAudio.play();
}
function CamdenHighStreet27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Camden High Street";
  BackDestination.setAttribute( "onClick", "CamdenTownStation27Old();" );
  NextDestination.setAttribute( "onClick", "MorningtonCrescentStation27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CAMDEN_HIGH_STREET_001.mp3";
  iBusAudio.play();
}
function MorningtonCrescentStation27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mornington Crescent Station";
  BackDestination.setAttribute( "onClick", "CamdenHighStreet27old();" );
  NextDestination.setAttribute( "onClick", "Silverdale27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Mornington_Crescent_Station_001.mp3";
  iBusAudio.play();
}
function Silverdale27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Silverale";
  BackDestination.setAttribute( "onClick", "MorningtonCrescentStation27old();" );
  NextDestination.setAttribute( "onClick", "RobertStreet27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Silverdale_001.mp3";
  iBusAudio.play();
}
function RobertStreet27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Robert Street";
  BackDestination.setAttribute( "onClick", "MorningtonCrescentStation27old();" );
  NextDestination.setAttribute( "onClick", "EustonRoad27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Robert_Street_001.mp3";
  iBusAudio.play();
}
function EustonRoad27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Euston Road";
  BackDestination.setAttribute( "onClick", "RobertStreet27old();" );
  NextDestination.setAttribute( "onClick", "WarrenStreetStnTottenhamCourtRd27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Euston_Road_001.mp3";
  iBusAudio.play();
}
function WarrenStreetStnTottenhamCourtRd27old(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Warren Street Stn / Tottenham Court Rd";
  BackDestination.setAttribute( "onClick", "EustonRoad27old();" );
  NextDestination.setAttribute( "onClick", "GreatPortlandStreetStation27old();" );
  topTextYes.style.animationName = "WarrenStreetStnTottenhamCourtRd";
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WARREN_STREET_STATION_TOTTENHAM_COURT_ROAD_001.mp3";
  iBusAudio.play();
}
function GreatPortlandStreetStation27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Great Portland Street Station";
  BackDestination.setAttribute( "onClick", "WarrenStreetStnTottenhamCourtRd27old();" );
  NextDestination.setAttribute( "onClick", "RegentsParkStation27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GREAT_PORTLAND_STREET_STATION_001.mp3";
  iBusAudio.play();
}
function HampsteadRoadDrummondStreet27old(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Hampstead Road / Drummond Street";
  BackDestination.setAttribute( "onClick", "RobertStreet27old();" );
  NextDestination.setAttribute( "onClick", "GreatPortlandStStnEustonRd27old();" );
  topTextYes.style.animationName = "HampsteadRoadDrummondStreet";
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GREAT_PORTLAND_STREET_STATION_EUSTON_ROAD_001.mp3";
  iBusAudio.play();
}
function GreatPortlandStStnEustonRd27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Great Portland St Stn / Euston Rd";
  BackDestination.setAttribute( "onClick", "HampsteadRoadDrummondStreet27old();" );
  NextDestination.setAttribute( "onClick", "RegentsParkStation27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GREAT_PORTLAND_STREET_STATION_EUSTON_ROAD_001.mp3";
  iBusAudio.play();
}
function RegentsParkStation27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Regent's Park Station";
  BackDestination.setAttribute( "onClick", "GreatPortlandStStnEustonRd27old();" );
  NextDestination.setAttribute( "onClick", "HarleyStreet27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_REGENTS_PARK_STATION_001.mp3";
  iBusAudio.play();
}
function HarleyStreet27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Harley Street";
  BackDestination.setAttribute( "onClick", "RegentsParkStation27old();" );
  NextDestination.setAttribute( "onClick", "BakerStreetStation27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HARLEY_STREET_001.mp3";
  iBusAudio.play();
}
function BakerStreetStation27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Baker Street Station";
  BackDestination.setAttribute( "onClick", "HarleyStreet27old();" );
  NextDestination.setAttribute( "onClick", "GloucesterPlace27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BAKER_STREET_STATION_001.mp3";
  iBusAudio.play();
}
function GloucesterPlace27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Gloucester Place";
  BackDestination.setAttribute( "onClick", "BakerStreetStation27old();" );
  NextDestination.setAttribute( "onClick", "MaryleboneStation27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GLOUCESTER_PLACE_001.mp3";
  iBusAudio.play();
}
function OldMaryleboneTownHall27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Old Marylebone Town Hall";
  BackDestination.setAttribute( "onClick", "BakerStreetStation27old();" );
  NextDestination.setAttribute( "onClick", "MaryleboneStation27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_OLD_MARYLEBONE_TOWN_HALL_001.mp3";
  iBusAudio.play();
}
function MaryleboneStation27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Marylebone Station";
  BackDestination.setAttribute( "onClick", "OldMaryleboneTownHall27old();" );
  NextDestination.setAttribute( "onClick", "EdgwareRoad27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MARYLEBONE_STATION_001.mp3";
  iBusAudio.play();
}
function EdgwareRoad27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Edgware Road";
  BackDestination.setAttribute( "onClick", "MaryleboneStation27old();" );
  NextDestination.setAttribute( "onClick", "SussexGardens27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EDGWARE_ROAD_001.mp3";
  iBusAudio.play();
}
function SussexGardens27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Sussex Gardens";
  BackDestination.setAttribute( "onClick", "EdgwareRoad27old();" );
  NextDestination.setAttribute( "onClick", "StMarysHospital27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SUSSEX_GARDENS_001.mp3";
  iBusAudio.play();
}
function EdgwareRoadStation27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Edgware Road Station";
  BackDestination.setAttribute( "onClick", "MaryleboneStation27old();" );
  NextDestination.setAttribute( "onClick", "StMarysHospital27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EDGWARE_ROAD_STATION_001.mp3";
  iBusAudio.play();
}
function StMarysHospital27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Mary's Hospital";
  BackDestination.setAttribute( "onClick", "EdgwareRoadStation27old();" );
  NextDestination.setAttribute( "onClick", "PaddingtonStation27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_MARYS_HOSPITAL_001.mp3";
  iBusAudio.play();
}
function PaddingtonStation27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Paddington Station";
  BackDestination.setAttribute( "onClick", "StMarysHospital27old();" );
  NextDestination.setAttribute( "onClick", "PaddingtonStnEastbourneTerrace27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PADDINGTON_STATION_001.mp3";
  iBusAudio.play();
}
function PaddingtonStnEastbourneTerrace27old(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Paddington Stn / Eastbourne Terrace";
  BackDestination.setAttribute( "onClick", "PaddingtonStation27old();" );
  NextDestination.setAttribute( "onClick", "WestbourneTerrace27old();" );
  topTextYes.style.animationName = "PaddingtonStnEastbourneTerrace";
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PADDINGTON_STATION_EASTBOURNE_TERRACE_001.mp3";
  iBusAudio.play();
}
function WestbourneTerrace27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Westbourne Terrace";
  BackDestination.setAttribute( "onClick", "PaddingtonStnEastbourneTerrace27old();" );
  NextDestination.setAttribute( "onClick", "GloucesterTerrace27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WESTBOURNE_TERRACE_001.mp3";
  iBusAudio.play();
}
function GloucesterTerrace27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Gloucester Terrace";
  BackDestination.setAttribute( "onClick", "WestbourneTerrace27old();" );
  NextDestination.setAttribute( "onClick", "Queensway27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GLOUCESTER_TERRACE_001.mp3";
  iBusAudio.play();
}
function BishopsBridgRoadWestbourneTerrace27old(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Bishops Bridge Road / Westbourne Terrace";
  BackDestination.setAttribute( "onClick", "PaddingtonStnEastbourneTerrace27old();" );
  NextDestination.setAttribute( "onClick", "PorchesterTerraceNorth27old();" );
  topTextYes.style.animationName = "BishopsBridgeRoadWestbourneTerrace";
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BISHOPS_BRIDGE_ROAD_WESTBOURNE_TERRACE_001.mp3";
  iBusAudio.play();
}
function PorchesterTerraceNorth27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Porchester Terrace North";
  BackDestination.setAttribute( "onClick", "BishopsBridgRoadWestbourneTerrace27old();" );
  NextDestination.setAttribute( "onClick", "Queensway27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PORCHESTER_TERRACE_NORTH_001.mp3";
  iBusAudio.play();
}
function Queensway27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Queensway";
  BackDestination.setAttribute( "onClick", "PorchesterTerraceNorth27old();" );
  NextDestination.setAttribute( "onClick", "PembridgeVillas27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_QUEENSWAY_001.mp3";
  iBusAudio.play();
}
function PembridgeVillas27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Pembridge Villas";
  BackDestination.setAttribute( "onClick", "Queensway27old();" );
  NextDestination.setAttribute( "onClick", "ChepstowCrescent27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PEMBRIDGE_VILLAS_001.mp3";
  iBusAudio.play();
}
function ChepstowRoadWestbourneGrove27old(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Chepstow Road / Westbourne Grove";
  BackDestination.setAttribute( "onClick", "Queensway27old();" );
  NextDestination.setAttribute( "onClick", "PembridgeVillasWestbourneGrove27old();" );
  topTextYes.style.animationName = "ChepstowRoadWestbourneGrove";
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CHEPSTOW_ROAD_WESTBOURNE_GROVE_001.mp3";
  iBusAudio.play();
}
function PembridgeVillasWestbourneGrove27old(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Pembridge Villas / Westbourne Grove";
  BackDestination.setAttribute( "onClick", "ChepstowRoadWestbourneGrove27old();" );
  NextDestination.setAttribute( "onClick", "ChepstowCrescent27old();" );
  topTextYes.style.animationName = "PembridgeVillasWestbourneGrove";
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PEMBRIDGE_VILLAS_WESTBOURNE_GROVE_001.mp3";
  iBusAudio.play();
}
function ChepstowCrescent27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chepstow Crescent";
  BackDestination.setAttribute( "onClick", "PembridgeVillasWestbourneGrove27old();" );
  NextDestination.setAttribute( "onClick", "NottingHillGateStation27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CHEPSTOW_CRESCENT_001.mp3";
  iBusAudio.play();
}
function NottingHillGateStnPembridgeRd27old(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Notting Hill Gate Stn / Pembridge Rd";
  BackDestination.setAttribute( "onClick", "ChepstowCrescent27old();" );
  NextDestination.setAttribute( "onClick", "NottingHillGateStation27old();" );
  topTextYes.style.animationName = "NottingHillGateStnPembridgeRd";
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NOTTING_HILL_GATE_STATION_PEMBRIDGE_ROAD_001.mp3";
  iBusAudio.play();
}
function NottingHillGateStation27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Notting Hill Gate Station";
  BackDestination.setAttribute( "onClick", "NottingHillGateStnPembridgeRd27old();" );
  NextDestination.setAttribute( "onClick", "PalaceGardensTerrNottingHillGte27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NOTTING_HILL_GATE_STATION_001.mp3";
  iBusAudio.play();
}
function PalaceGardensTerrNottingHillGte27old(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Palace Gardens Terr / Notting Hill Gte";
  BackDestination.setAttribute( "onClick", "NottingHillGateStation27old();" );
  NextDestination.setAttribute( "onClick", "SheffieldTerrace27old();" );
  topTextYes.style.animationName = "PalaceGardensTerrNottingHillGte";
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PALACE_GARDEN_TERRACE_NOTTING_HILL_GATE_001.mp3";
  iBusAudio.play();
}
function SheffieldTerrace27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Sheffield Terrace";
  BackDestination.setAttribute( "onClick", "NottingHillGateStation27old();" );
  NextDestination.setAttribute( "onClick", "YorkHousePlaceKensingtonHighSt27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SHEFFIELD_TERRACE_001.mp3";
  iBusAudio.play();
}
function YorkHousePlaceKensingtonHighSt27old(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "York House Place / Kensington High St";
  BackDestination.setAttribute( "onClick", "SheffieldTerrace27old();" );
  NextDestination.setAttribute( "onClick", "HighStreetKensingtonStation27old();" );
  topTextYes.style.animationName = "YorkHousePlaceKensingtonHighSt";
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_YORK_HOUSE_PLACE_KENSINGTON_HIGH_STREET_001.mp3";
  iBusAudio.play();
}
function KensingtonChurchStreetHollandSt27old(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Kensington Church Street / Holland Road";
  BackDestination.setAttribute( "onClick", "SheffieldTerrace27old();" );
  NextDestination.setAttribute( "onClick", "HighStreetKensingtonStation27old();" );
  topTextYes.style.animationName = "KensingtonChurchStreetHollandSt";
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_KENSINGTON_CHURCH_ST_HOLLAND_ST_001.mp3";
  iBusAudio.play();
}
function HighStreetKensingtonStation27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "High Street Kensington Station";
  BackDestination.setAttribute( "onClick", "KensingtonChurchStreetHollandSt27old();" );
  NextDestination.setAttribute( "onClick", "PhillimoreGardens27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HIGH_STREET_KENSINGTON_STATION_001.mp3";
  iBusAudio.play();
}
function PhillimoreGardens27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Phillimore Gardens";
  BackDestination.setAttribute( "onClick", "HighStreetKensingtonStation27old();" );
  NextDestination.setAttribute( "onClick", "TheDesignMuseum27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PHILLIMORE_GARDENS_001.mp3";
  iBusAudio.play();
}
function TheDesignMuseum27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The Design Museum";
  BackDestination.setAttribute( "onClick", "PhillimoreGardens27old();" );
  NextDestination.setAttribute( "onClick", "WarwickGardens27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_THE_DESIGN_MUSEUM_001.mp3";
  iBusAudio.play();
}
function WarwickGardens27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Warwick Gardens";
  BackDestination.setAttribute( "onClick", "TheDesignMuseum27old();" );
  NextDestination.setAttribute( "onClick", "KensigntonOlympiaStation27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WARWICK_GARDENS_001.mp3";
  iBusAudio.play();
}
function HollandRoad27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Holland Road";
  BackDestination.setAttribute( "onClick", "WarwickGardens27old();" );
  NextDestination.setAttribute( "onClick", "KensigntonOlympiaStation27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HOLLAND_ROAD_001.mp3";
  iBusAudio.play();
}
function KensigntonOlympiaStation27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Kensington Olympia Station";
  BackDestination.setAttribute( "onClick", "HollandRoad27old();" );
  NextDestination.setAttribute( "onClick", "NorthEndRoad27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_KENSINGTON_OLYMPIA_STATION_001.mp3";
  iBusAudio.play();
}
function NorthEndRoad27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "North End Road";
  BackDestination.setAttribute( "onClick", "KensigntonOlympiaStation27old();" );
  NextDestination.setAttribute( "onClick", "BrookGreen27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NORTH_END_ROAD_001.mp3";
  iBusAudio.play();
}
function BrookGreen27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brook Green";
  BackDestination.setAttribute( "onClick", "NorthEndRoad27old();" );
  NextDestination.setAttribute( "onClick", "LatymerCourt27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BROOK_GREEN_001.mp3";
  iBusAudio.play();
}
function LatymerCourt27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Latymer Court";
  BackDestination.setAttribute( "onClick", "BrookGreen27old();" );
  NextDestination.setAttribute( "onClick", "HammersmithBroadway27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LATYMER_COURT_001.mp3";
  iBusAudio.play();
}
function HammersmithBroadway27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hammersmith Broadway";
  BackDestination.setAttribute( "onClick", "LatymerCourt27old();" );
  NextDestination.setAttribute( "onClick", "HammersmithBusStation27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HAMMERSMITH_BROADWAY_001.mp3";
  iBusAudio.play();
}
function HammersmithBusStation27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hammersmith Bus Station";
  BackDestination.setAttribute( "onClick", "LatymerCourt27old();" );
  NextDestination.setAttribute( "onClick", "KingsMallShoppingCentre27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HAMMERSMITH_BUS_STATION_001.mp3";
  iBusAudio.play();
}
function KingsMallShoppingCentre27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Kings Mall Shopping Centre";
  BackDestination.setAttribute( "onClick", "HammersmithBusStation27old();" );
  NextDestination.setAttribute( "onClick", "HammersmithTownHall27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_KINGS_MALL_SHOPPING_CENTRE_001.mp3";
  iBusAudio.play();
}
function HammersmithTownHall27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hammersmith Town Hall";
  BackDestination.setAttribute( "onClick", "KingsMallShoppingCentre27old();" );
  NextDestination.setAttribute( "onClick", "LamingtonStreet27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HAMMERSMITH_TOWN_HALL_001.mp3";
  iBusAudio.play();
}
function LamingtonStreet27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lamington Street";
  BackDestination.setAttribute( "onClick", "HammersmithTownHall27old();" );
  NextDestination.setAttribute( "onClick", "IffleyRoad27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LAMINGTON_STREET_001.mp3";
  iBusAudio.play();
}
function IffleyRoad27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Iffley Road";
  BackDestination.setAttribute( "onClick", "LamingtonStreet27old();" );
  NextDestination.setAttribute( "onClick", "GlenthorneHouse27old();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_IFFLEY_ROAD_001.mp3";
  iBusAudio.play();
}
function GlenthorneHouse27old(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Glenthorne House";
  BackDestination.setAttribute( "onClick", "IffleyRoad27old();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GLENTHORNE_HOUSE_001.mp3";
  iBusAudio.play();
}
function HammersmithStnHCandCircleLines27old(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Hammersmith Stn / H&C and Circle Lines";
  BackDestination.setAttribute( "onClick", "HammersmithBusStation27old();" );
//   NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  topTextYes.style.animationName = "HammersmithStnHCandCircleLines";
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HAMMERSMITH_STATION_HAMMERSMITH_N_CITY_001.mp3";
  iBusAudio.play();
}

function BrixtonRoadBrixtonPoliceStation250(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Brixton Road / Brixton Police Station";
  // BackDestination.setAttribute( "onClick", "HammersmithBusStation27old();" );
  NextDestination.setAttribute( "onClick", "BrixtonStation250();" );
  topTextYes.style.animationName = "BrixtonRoadBrixtonPoliceStation";
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BRIXTON_ROAD_BRIXTON_POLICE_STATION_001.mp3";
  iBusAudio.play();
}
function BrixtonStation250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brixton Station";
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "RushCommon250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BRIXTON_STATION_001.mp3";
  iBusAudio.play();
}
function LambethTownHall250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lambeth Town Hall";
  BackDestination.setAttribute( "onClick", "BrixtonStation250();" );
  NextDestination.setAttribute( "onClick", "RushCommon250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LAMBETH_TOWN_HALL_001.mp3";
  iBusAudio.play();
}
function RushCommon250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Rush Common";
  BackDestination.setAttribute( "onClick", "LambethTownHall250();" );
  NextDestination.setAttribute( "onClick", "BrixtonWaterLane250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_RUSH_COMMON_001.mp3";
  iBusAudio.play();
}
function BrixtonWaterLane250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brixton Water Lane";
  BackDestination.setAttribute( "onClick", "RushCommon250();" );
  NextDestination.setAttribute( "onClick", "BlenheimGardens250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BRIXTON_WATER_LANE_001.mp3";
  iBusAudio.play();
}
function BlenheimGardens250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Blenheim Gardens";
  BackDestination.setAttribute( "onClick", "RushCommon250();" );
  NextDestination.setAttribute( "onClick", "JebbAvenueBrixtonPrison250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BLENHEIM_GARDENS_001.mp3";
  iBusAudio.play();
}
function JebbAvenueBrixtonPrison250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Jebb Avenue / Brixton Prison";
  BackDestination.setAttribute( "onClick", "BlenheimGardens250();" );
  NextDestination.setAttribute( "onClick", "NewParkRoad250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_JEBB_AVENUE_BRIXTON_PRISON_001.mp3";
  iBusAudio.play();
}
function NewParkRoad250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "New Park Road";
  BackDestination.setAttribute( "onClick", "JebbAvenueBrixtonPrison250();" );
  NextDestination.setAttribute( "onClick", "HolmewoodRoad250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NEW_PARK_ROAD_001.mp3";
  iBusAudio.play();
}
function HolmewoodRoad250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Holmewood Road";
  BackDestination.setAttribute( "onClick", "NewParkRoad250();" );
  NextDestination.setAttribute( "onClick", "StreathamHillChristchurchRoad250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HOLMEWOOD_ROAD_001.mp3";
  iBusAudio.play();
}
function StreathamHillChristchurchRoad250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Streatham Hill / Christchurch Road";
  BackDestination.setAttribute( "onClick", "HolmewoodRoad250();" );
  NextDestination.setAttribute( "onClick", "TelfordAvenue250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STREATHAM_HILL_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CHRISTCHURCH_ROAD_001.mp3";
    iBusAudio.play();
    iBusAudio.onended = function() {
        iBusAudio.src="fhfh";
        iBusAudio.play();
    }
  }
}
function ChristchurchRoad250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Christchurch Road";
  BackDestination.setAttribute( "onClick", "HolmewoodRoad250();" );
  NextDestination.setAttribute( "onClick", "TelfordAvenue250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CHRISTCHURCH_ROAD_001.mp3";
  iBusAudio.play();
}
function TelfordAvenue250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Telford Avenue";
  BackDestination.setAttribute( "onClick", "ChristchurchRoad250();" );
  NextDestination.setAttribute( "onClick", "StreathamHillStnStreathamHill250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_TELFORD_AVENUE_001.mp3";
  iBusAudio.play();
}
function BarrhillRoad250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Barrhill Road";
  BackDestination.setAttribute( "onClick", "TelfordAvenue250();" );
  NextDestination.setAttribute( "onClick", "StreathamHillStnStreathamHill250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BARRHILL_ROAD_001.mp3";
  iBusAudio.play();
}
function StreathamHillStnStreathamHill250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Streatham Hill Stn / Streatham Hill";
  BackDestination.setAttribute( "onClick", "BarrhillRoad250();" );
  NextDestination.setAttribute( "onClick", "LeighamCourtRoad250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STREATHAM_HILL_STATION_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STREATHAM_HILL_001.mp3";
    iBusAudio.play();
    iBusAudio.onended = function() {
        iBusAudio.src="fhfh";
    }
  }
}
function LeighamCourtRoad250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Leigham Court Road";
  BackDestination.setAttribute( "onClick", "StreathamHillStnStreathamHill250();" );
  NextDestination.setAttribute( "onClick", "MountEphraimRoad250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LEIGHAM_COURT_ROAD_001.mp3";
  iBusAudio.play();
}
function MountEphraimRoad250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mount Ephraim Road";
  BackDestination.setAttribute( "onClick", "StreathamHillStnStreathamHill250();" );
  NextDestination.setAttribute( "onClick", "KingscourtRoad250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MOUNT_EPHRAIM_ROAD_001.mp3";
  iBusAudio.play();
}
function KingscourtRoad250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Kings Court Road";
  BackDestination.setAttribute( "onClick", "MountEphraimRoad250();" );
  NextDestination.setAttribute( "onClick", "BecmeadAvenue250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_KINGSCOURT_ROAD_001.mp3";
  iBusAudio.play();
}
function BecmeadAvenue250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Becmead Avenue";
  BackDestination.setAttribute( "onClick", "KingscourtRoad250();" );
  NextDestination.setAttribute( "onClick", "StLeonardsChurch250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BECMEAD_AVENUE_001.mp3";
  iBusAudio.play();
}
function StLeonardsChurch250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Leonard's Church";
  BackDestination.setAttribute( "onClick", "BecmeadAvenue250();" );
  NextDestination.setAttribute( "onClick", "StreathamStation250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_LEONARDS_CHURCH_001.mp3";
  iBusAudio.play();
}
function StreathamStation250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Streatham Station";
  BackDestination.setAttribute( "onClick", "StLeonardsChurch250();" );
  NextDestination.setAttribute( "onClick", "StreathamUnitedReformedChurch250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STREATHAM_STATION_001.mp3";
  iBusAudio.play();
}
function StreathamUnitedReformedChurch250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Streatham United Reformed Church";
  BackDestination.setAttribute( "onClick", "StreathamStation250();" );
  NextDestination.setAttribute( "onClick", "StreathamCommonGreyhoundLane250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STREATHAM_UNITED_REFORM_CHURCH_001.mp3";
  iBusAudio.play();
}
function StreathamCommonGreyhoundLane250(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Streatham Common / Greyhound Lane";
  BackDestination.setAttribute( "onClick", "StreathamStation250();" );
  NextDestination.setAttribute( "onClick", "ArragonGardens250();" );
  topTextYes.style.animationName = "StreathamCommonGreyhoundLane";
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STREATHAM_COMMON_GREYHOUND_LANE_001.mp3";
  iBusAudio.play();
}
function KempshottRoad250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Kempshott Road";
  BackDestination.setAttribute( "onClick", "StreathamCommonGreyhoundLane250();" );
  NextDestination.setAttribute( "onClick", "ArragonGardens250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_KEMPSHOTT_ROAD_001.mp3";
  iBusAudio.play();
}
function ArragonGardens250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Arragon Gardens";
  BackDestination.setAttribute( "onClick", "KempshottRoad250();" );
  NextDestination.setAttribute( "onClick", "HermitageLane250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ARRAGON_GARDENS_001.mp3";
  iBusAudio.play();
}
function HermitageLane250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hermitage Lane";
  BackDestination.setAttribute( "onClick", "ArragonGardens250();" );
  NextDestination.setAttribute( "onClick", "CourtlandAvenue250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HERMITAGE_LANE_001.mp3";
  iBusAudio.play();
}
function CourtlandAvenue250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Courtland Avenue";
  BackDestination.setAttribute( "onClick", "HermitageLane250();" );
  NextDestination.setAttribute( "onClick", "NorburyHill250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_COURTLAND_AVENUE_001.mp3";
  iBusAudio.play();
}
function NorburyHill250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Norbury Hill";
  BackDestination.setAttribute( "onClick", "CourtlandAvenue250();" );
  NextDestination.setAttribute( "onClick", "KensingtonAvenue250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NORBURY_HILL_001.mp3";
  iBusAudio.play();
}
function KensingtonAvenue250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Kensington Avenue";
  BackDestination.setAttribute( "onClick", "NorburyHill250();" );
  NextDestination.setAttribute( "onClick", "GreenLanePostOffice250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_KENSINGTON_AVENUE_001.mp3";
  iBusAudio.play();
}
function GreenLanePostOffice250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Green Lane Post Office";
  BackDestination.setAttribute( "onClick", "KensingtonAvenue250();" );
  NextDestination.setAttribute( "onClick", "CountyRoad250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GREEN_LANE_POST_OFFICE_001.mp3";
  iBusAudio.play();
}
function CountyRoad250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "County Road";
  BackDestination.setAttribute( "onClick", "GreenLanePostOffice250();" );
  NextDestination.setAttribute( "onClick", "ParkLawn250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_COUNTY_ROAD_001.mp3";
  iBusAudio.play();
}
function ParkLawn250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Park Lawn";
  BackDestination.setAttribute( "onClick", "CountyRoad250();" );
  NextDestination.setAttribute( "onClick", "SandfieldRoad250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PARK_LAWN_001.mp3";
  iBusAudio.play();
}
function SandfieldRoad250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Sandfield Road";
  BackDestination.setAttribute( "onClick", "ParkLawn250();" );
  NextDestination.setAttribute( "onClick", "ParchmoreMethodistChurch250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SANDFIELD_ROAD_001.mp3";
  iBusAudio.play();
}
function ParchmoreMethodistChurch250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Parchmore Methodist Church";
  BackDestination.setAttribute( "onClick", "SandfieldRoad250();" );
  NextDestination.setAttribute( "onClick", "ThorntonHeathStation250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PARCHMORE_METHODIST_CHURCH_001.mp3";
  iBusAudio.play();
}
function ThorntonHeathStation250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Thornton Heath Station";
  BackDestination.setAttribute( "onClick", "ParchmoreMethodistChurch250();" );
  NextDestination.setAttribute( "onClick", "BrookRoad250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_THORNTON_HEATH_STATION_001.mp3";
  iBusAudio.play();
}
function BrookRoad250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brook Road";
  BackDestination.setAttribute( "onClick", "ThorntonHeathStation250();" );
  NextDestination.setAttribute( "onClick", "BenshamLane250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BROOK_ROAD_001.mp3";
  iBusAudio.play();
}
function BenshamLane250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bensham Lane";
  BackDestination.setAttribute( "onClick", "BrookRoad250();" );
  NextDestination.setAttribute( "onClick", "WhitehorseManorBrigstockSite250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BRENSHAM_LANE_001.mp3";
  iBusAudio.play();
}
function ThorntonHeathLibrary250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Thornton Heath Library";
  BackDestination.setAttribute( "onClick", "BrookRoad250();" );
  NextDestination.setAttribute( "onClick", "NutfieldRoad250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_THORNTON_HEATH_LIBRARY_001.mp3";
  iBusAudio.play();
}
function NutfieldRoad250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Nutfield Road";
  BackDestination.setAttribute( "onClick", "ThorntonHeathLibrary250();" );
  NextDestination.setAttribute( "onClick", "WhitehorseManorBrigstockSite250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NUTFIELD_ROAD_001.mp3";
  iBusAudio.play();
}
function WhitehorseManorBrigstockSite250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Whitehorse Manor Brigstock Site";
  BackDestination.setAttribute( "onClick", "NutfieldRoad250();" );
  NextDestination.setAttribute( "onClick", "BrigstockRoadLondonRoad250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WHITEHORSE_MANOR_BRIGSTOCK_SITE_001.mp3";
  iBusAudio.play();
}
function BrigstockRoadLondonRoad250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brigstock Road / London Road";
  BackDestination.setAttribute( "onClick", "WhitehorseManorBrigstockSite250();" );
  NextDestination.setAttribute( "onClick", "ThorntonHeathPond250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BRIGSTOCK_ROAD_lONDON_ROAD_001.mp3";
  iBusAudio.play();
}
function ThorntonHeathPond250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Thornton Heath Pond";
  BackDestination.setAttribute( "onClick", "BrigstockRoadLondonRoad250();" );
  NextDestination.setAttribute( "onClick", "DunhevedRoadNorth250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_THORNTON_HEATH_POND_001.mp3";
  iBusAudio.play();
}
function DunhevedRoadNorth250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Dunheved Road North";
  BackDestination.setAttribute( "onClick", "BrigstockRoadLondonRoad250();" );
  NextDestination.setAttribute( "onClick", "CroydonUniversityHospital250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DUNHEVED_ROAD_NORTH_001.mp3";
  iBusAudio.play();
}
function CroydonUniversityHospital250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Croydon University Hospital";
  BackDestination.setAttribute( "onClick", "ThorntonHeathPond250();" );
  NextDestination.setAttribute( "onClick", "BroadGreenAvenue250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CROYDON_UNIVERSITY_HOSPITAL_001.mp3";
  iBusAudio.play();
}
function CanterburyRoad250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Canterbury Road";
  BackDestination.setAttribute( "onClick", "CroydonUniversityHospital250();" );
  NextDestination.setAttribute( "onClick", "BroadGreenAvenue250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CANTERBURY_ROAD_001.mp3";
  iBusAudio.play();
}
function BroadGreenAvenue250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Broad Green Avenue";
  BackDestination.setAttribute( "onClick", "CanterburyRoad250();" );
  NextDestination.setAttribute( "onClick", "SummerRoad250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BROAD_GREEN_AVENUE_001.mp3";
  iBusAudio.play();
}
function SummerRoad250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Summer Road";
  BackDestination.setAttribute( "onClick", "BroadGreenAvenue250();" );
  NextDestination.setAttribute( "onClick", "MontagueRoad250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SUMMER_ROAD_001.mp3";
  iBusAudio.play();
}
function MontagueRoad250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Montague Road";
  BackDestination.setAttribute( "onClick", "SummerRoad250();" );
  NextDestination.setAttribute( "onClick", "WestCroydonStation250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MONTAGUE_ROAD_001.mp3";
  iBusAudio.play();
}
function WestCroydonStation250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "West Croydon Station";
  BackDestination.setAttribute( "onClick", "MontagueRoad250();" );
  NextDestination.setAttribute( "onClick", "PoplarWalk250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WEST_CROYDON_STATION_001.mp3";
  iBusAudio.play();
}
function PoplarWalk250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Poplar Walk";
  BackDestination.setAttribute( "onClick", "WestCroydonStation250();" );
  NextDestination.setAttribute( "onClick", "WestCroydonBusStation250();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_POPLAR_WALK_001.mp3";
  iBusAudio.play();
}
function WestCroydonBusStation250(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "West Croydon Bus Station";
  BackDestination.setAttribute( "onClick", "WestCroydonStation250();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WEST_CROYDON_BUS_STATION_001.mp3";
  iBusAudio.play();
}