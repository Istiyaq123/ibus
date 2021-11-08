var smallSpace = '<span class="invisible">.</span>'
var bigSpace = '<span class="invisible">...</span>'
var sSpace = '<span class="invisible">.</span>'
var bSpace = '<span class="invisible">...</span>'

var topTextYes = document.getElementById("topTextYes");
var topTextNo = document.getElementById("topTextNo");

function BusTerminatesHere(){
    topTextYes.style.display ="block";
    topTextNo.style.display ="none";
    topTextYes.innerHTML = "Bus Terminates Here. Take Your Belongings";
    topTextYes.style.animationName = "BusTerminatesHerenew";
}

function WalthamstowCentral58(){
    EastHamCentralPark58()
    showDestination.setAttribute( "onClick", "WalthamstowCentral58ibus();" );
}
function EastHam58(){
    ibus58EastHam()
    showDestination.setAttribute( "onClick", "EastHam58ibus();" );
}

function EastHamCentralPark58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "East Ham / Central Park";
    BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
    NextDestination.setAttribute( "onClick", "TilburyRoad58();" );
}
function TilburyRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Tilbury Road";
    BackDestination.setAttribute( "onClick", "EastHamCentralPark58();" );
    NextDestination.setAttribute( "onClick", "NewhamTownHall58();" );
}
function NewhamTownHall58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Newham Town Hall";
    BackDestination.setAttribute( "onClick", "TilburyRoad58();" );
    NextDestination.setAttribute( "onClick", "BartleAvenue58();" );
}
function BartleAvenue58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Bartle Avenue";
    BackDestination.setAttribute( "onClick", "NewhamTownHall58();" );
    NextDestination.setAttribute( "onClick", "AintreeAvenue58();" );
}
function AintreeAvenue58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Aintree Avenue";
    BackDestination.setAttribute( "onClick", "BartleAvenue58();" );
    NextDestination.setAttribute( "onClick", "DickensRoad58();" );
}
function DickensRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Dickens Road";
    BackDestination.setAttribute( "onClick", "AintreeAvenue58();" );
    NextDestination.setAttribute( "onClick", "UptonParkPrioryRoad58();" );
}
function UptonParkPrioryRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Upton Park / Priory Road";
    BackDestination.setAttribute( "onClick", "DickensRoad58();" );
    NextDestination.setAttribute( "onClick", "UptonParkGreenStreet58();" );
}
function UptonParkGreenStreet58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Upton Park / Green Street";
    BackDestination.setAttribute( "onClick", "UptonParkPrioryRoad58();" );
    NextDestination.setAttribute( "onClick", "UptonParkBoleyn58();" );
}
function UptonParkBoleyn58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Upton Park / Boleyn";
    BackDestination.setAttribute( "onClick", "UptonParkGreenStreet58();" );
    NextDestination.setAttribute( "onClick", "TudorRoad58();" );
}
function TudorRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Tudor Road";
    BackDestination.setAttribute( "onClick", "UptonParkBoleyn58();" );
    NextDestination.setAttribute( "onClick", "UptonParkStation58();" );
}
function UptonParkStation58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Upton Park Station";
    BackDestination.setAttribute( "onClick", "TudorRoad58();" );
    NextDestination.setAttribute( "onClick", "PlashetRoad58();" );
}
function PlashetRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Plashet Road";
    BackDestination.setAttribute( "onClick", "UptonParkStation58();" );
    NextDestination.setAttribute( "onClick", "OakdaleRoad58();" );
}
function OakdaleRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Oakdale Road";
    BackDestination.setAttribute( "onClick", "PlashetRoad58();" );
    NextDestination.setAttribute( "onClick", "CheshuntRoad58();" );
}
function CheshuntRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Cheshunt Road";
    BackDestination.setAttribute( "onClick", "OakdaleRoad58();" );
    NextDestination.setAttribute( "onClick", "StudleyRoad58();" );
}
function StudleyRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Studley Road";
    BackDestination.setAttribute( "onClick", "CheshuntRoad58();" );
    NextDestination.setAttribute( "onClick", "StDunstansRoad58();" );
}
function StDunstansRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "St Dunstan's Road";
    BackDestination.setAttribute( "onClick", "StudleyRoad58();" );
    NextDestination.setAttribute( "onClick", "GreenStreet58();" );
}
function GreenStreet58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Green Street";
    BackDestination.setAttribute( "onClick", "StDunstansRoad58();" );
    NextDestination.setAttribute( "onClick", "WoodgrangeRoad58();" );
}
function WoodgrangeRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Woodgrange Road";
    BackDestination.setAttribute( "onClick", "GreenStreet58();" );
    NextDestination.setAttribute( "onClick", "ClaremontRoad58();" );
}
function ClaremontRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Claremont Road";
    BackDestination.setAttribute( "onClick", "WoodgrangeRoad58();" );
    NextDestination.setAttribute( "onClick", "ForestGateStation58();" );
}
function ForestGateStation58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Forest Gate Station";
    BackDestination.setAttribute( "onClick", "ClaremontRoad58();" );
    NextDestination.setAttribute( "onClick", "WansteadParkStation58();" );
}
function WansteadParkStation58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Wanstead Park Station";
    BackDestination.setAttribute( "onClick", "ForestGateStation58();" );
    NextDestination.setAttribute( "onClick", "BignoldRoad58();" );
}
function BignoldRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Bignold Road";
    BackDestination.setAttribute( "onClick", "WansteadParkStation58();" );
    NextDestination.setAttribute( "onClick", "PevenseyRoad58();" );
}
function PevenseyRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Pevensey Road";
    BackDestination.setAttribute( "onClick", "BignoldRoad58();" );
    NextDestination.setAttribute( "onClick", "WansteadFlats58();" );
}
function WansteadFlats58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Wanstead Flats";
    BackDestination.setAttribute( "onClick", "PevenseyRoad58();" );
    NextDestination.setAttribute( "onClick", "BourneRoad58();" );
}
function BourneRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Bourne Road";
    BackDestination.setAttribute( "onClick", "WansteadFlats58();" );
    NextDestination.setAttribute( "onClick", "BuxtonSchool58();" );
}
function BuxtonSchool58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Buxton School";
    BackDestination.setAttribute( "onClick", "BourneRoad58();" );
    NextDestination.setAttribute( "onClick", "SelbyRoad58();" );
}
function SelbyRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Selby Road";
    BackDestination.setAttribute( "onClick", "BuxtonSchool58();" );
    NextDestination.setAttribute( "onClick", "HighRoadLeytonstone58();" );
}
function HighRoadLeytonstone58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "High Road Leytonstone";
    BackDestination.setAttribute( "onClick", "SelbyRoad58();" );
    NextDestination.setAttribute( "onClick", "BurgessRoad58();" );
}
function BurgessRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Burgess Road";
    BackDestination.setAttribute( "onClick", "HighRoadLeytonstone58();" );
    NextDestination.setAttribute( "onClick", "EdithRoad58();" );
}
function EdithRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Edith Road";
    BackDestination.setAttribute( "onClick", "BurgessRoad58();" );
    NextDestination.setAttribute( "onClick", "DrapersField58();" );
}
function DrapersField58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Drapers Field";
    BackDestination.setAttribute( "onClick", "EdithRoad58();" );
    NextDestination.setAttribute( "onClick", "MillaisRoad58();" );
}
function MillaisRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Millais Road";
    BackDestination.setAttribute( "onClick", "DrapersField58();" );
    NextDestination.setAttribute( "onClick", "LeytonStation58();" );
}
function LeytonStation58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Leyton Station";
    BackDestination.setAttribute( "onClick", "MillaisRoad58();" );
    NextDestination.setAttribute( "onClick", "LeytonLibrary58();" );
}
function LeytonLibrary58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Leyton Library";
    BackDestination.setAttribute( "onClick", "LeytonStation58();" );
    NextDestination.setAttribute( "onClick", "BuckinghamRoad58();" );
}
function BuckinghamRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Buckingham Road";
    BackDestination.setAttribute( "onClick", "LeytonLibrary58();" );
    NextDestination.setAttribute( "onClick", "GrangeParkRoad58();" );
}
function GrangeParkRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Grange Park Road";
    BackDestination.setAttribute( "onClick", "BuckinghamRoad58();" );
    NextDestination.setAttribute( "onClick", "GoldsmithRoad58();" );
}
function GoldsmithRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Goldsmith Road";
    BackDestination.setAttribute( "onClick", "GrangeParkRoad58();" );
    NextDestination.setAttribute( "onClick", "OliverRoad58();" );
}
function OliverRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Oliver Road";
    BackDestination.setAttribute( "onClick", "GoldsmithRoad58();" );
    NextDestination.setAttribute( "onClick", "VilliersClose58();" );
}
function VilliersClose58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Villiers Close";
    BackDestination.setAttribute( "onClick", "OliverRoad58();" );
    NextDestination.setAttribute( "onClick", "ParkRoad58();" );
}
function ParkRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Park Road";
    BackDestination.setAttribute( "onClick", "VilliersClose58();" );
    NextDestination.setAttribute( "onClick", "CapworthStreet58();" );
}
function CapworthStreet58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Capworth Street";
    BackDestination.setAttribute( "onClick", "ParkRoad58();" );
    NextDestination.setAttribute( "onClick", "GloucesterRoad58();" );
}
function GloucesterRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Gloucester Road";
    BackDestination.setAttribute( "onClick", "CapworthStreet58();" );
    NextDestination.setAttribute( "onClick", "LeaBridgeRoad58();" );
}
function LeaBridgeRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Lea Bridge Road";
    BackDestination.setAttribute( "onClick", "GloucesterRoad58();" );
    NextDestination.setAttribute( "onClick", "StSavioursChurch58();" );
}
function StSavioursChurch58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "St Saviour's Church";
    BackDestination.setAttribute( "onClick", "LeaBridgeRoad58();" );
    NextDestination.setAttribute( "onClick", "QueensRoad58();" );
}
function QueensRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Queen's Road";
    BackDestination.setAttribute( "onClick", "StSavioursChurch58();" );
    NextDestination.setAttribute( "onClick", "MarkhouseAvenue58();" );
}
function MarkhouseAvenue58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Markhouse Avenue";
    BackDestination.setAttribute( "onClick", "QueensRoad58();" );
    NextDestination.setAttribute( "onClick", "SouthGrove58();" );
}
function SouthGrove58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "South Grove";
    BackDestination.setAttribute( "onClick", "MarkhouseAvenue58();" );
    NextDestination.setAttribute( "onClick", "SelborneWalkVernonRoad58();" );
}
function SelborneWalkVernonRoad58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Selborne Walk / Vernon Road";
    BackDestination.setAttribute( "onClick", "SouthGrove58();" );
    NextDestination.setAttribute( "onClick", "SelborneWalk58();" );
}
function SelborneWalk58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Selborne Walk";
    BackDestination.setAttribute( "onClick", "SelborneWalkVernonRoad58();" );
    NextDestination.setAttribute( "onClick", "WalthamstowBusStation58();" );
}
function WalthamstowBusStation58(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "Walthamstow Bus Station";
    BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
    NextDestination.setAttribute( "onClick", "WalthamstowBusStation58();" );
}