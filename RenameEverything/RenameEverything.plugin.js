/**
 * @name RenameEverything
 * @author Pedro
 * @authorId 296461607549272064
 * @version 0.0.5
 * @description Change everything in the Discord client
 */
 var a = 0;
 var i = 0;
 var cooldown = 10000;
 
 module.exports = class RenameEverything {
    load() {
      //TODO: FAZER CÓDIGO COM COMPATIBILIDADE BETTERDISCORD V2
      //TODO: CRIAR REPOSITÓRIO NO GITHUB
      //TODO: INSTALAR O GULP PARA MINIFICAR E COMPILAR DIRETAMENTE NO DIRETÓRIO DO BETTERDISCORD

    }
    start() {       
       var tempo = setInterval(renameEverything, cooldown);
       //! TOTAL TIME
       setInterval(function () {
          a = a + 1;
       }, 1000);
 
       
 
       function renameEverything() {
          i = i + 1;
 
          //! Generate random number + than 1000
 
          var previousUserId = 0;
          var valueof = 0;
          let generateNumber = Math.floor(1000 + Math.random() * 8999); //! Generate number recipe
          var id = document.querySelector(
             "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div.container-1eFtFS > div > div > div.sidebar-1tnWFu > section > div.container-YkUktl.gameActivityToggleAdded-Yd-YxC > div.nameTag-sc-gpq.canCopy-IgTwyV > div.text-xs-normal-3SiVjE.subtext-2HDqJ7"
          );
          valueof = generateNumber;
 
          if (id != null) {
             previousUserId = id.textContent;
             //! Define randomNumber generated to my #
             id.innerHTML = "#" + generateNumber;
             var userID = (id.innerHTML = "#" + generateNumber);
          } else {
             previousUserId = "Loading...";
          }
 
          //! Random change texts :p ( would be better if we checked if we entered in x chat to start verifying )
          var tata = document.querySelector(
             "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div.container-1eFtFS > div > div > div.sidebar-1tnWFu > nav > div.scroller-WSmht3.thin-31rlnD.scrollerBase-_bVAAt.fade-1R6FHN > ul > li:nth-child(4) > div"
          );
          var tatamessage = document.querySelector("#message-content-984090251637178418");
 
          // ? Fazer com que mostre a mensagem antiga e a nova
 
          if (typeof tatamessage != "undefined" && tatamessage != null) {
             if (tata.hasAttribute("class", "interactiveSelected-29CP8y")) {
                console.log("%c Looking for message...", "color: #ffa; font-size: 16px");
                var completemsg = "[Message loaded and applied]";
                var completecss = "color: green; font-size: 20px; background: white";
                var changeto = "elefante estupefato de austeridade gnômica";
                tata.setAttribute("id", "tata");
                console.log("%c" + completemsg, completecss + " Changed from: " + tatamessage.textContent + " to: " + changeto);
                document.querySelector("#message-content-984090251637178418").innerHTML = changeto;
             } else {
                var errormsg = "[Message not loaded]";
                var errorcss = "color: aquablue; font-size: 20px; background: red";
                console.log("%c" + errormsg, errorcss);
             }
          }
 
          //! Generate random name error
 
          var newUser = document.querySelector(
             "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div.container-1eFtFS > div > div > div.sidebar-1tnWFu > section > div.container-YkUktl.gameActivityToggleAdded-Yd-YxC > div.nameTag-sc-gpq.canCopy-IgTwyV > div.defaultColor-24IHKz.text-sm-normal-3Zj3Iv.usernameContainer-3PPkWq > div"
          );
          var randomError = Math.floor(400 + Math.random() * 99);
 
          if (newUser != null) {
             var oldUser = newUser.textContent;
             newUser = newUser.innerHTML = "x = " + randomError;
          } else {
             newUser.textContent = "Loading...";
          }
 
          if (randomError == 404) {
             var text = "[Interval Time]:";
             var css = "color: red";
             console.log("%c" + text, css, +cooldown);
          }
 
          //! Button to increase cooldown on time
 
          var clickToStop = document.querySelector(
             "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div.container-1eFtFS > nav > ul > div.scroller-3X7KbA.none-2-_0dP.scrollerBase-_bVAAt > div.tutorialContainer-1pL9QS > div > div.listItemWrapper-3d87LP > div > svg > foreignObject > div"
          );
 
          clickToStop.setAttribute("id", "stopBtn");
          var clickToStopID = document.getElementById("stopBtn");
 
          clickToStopID.onclick = function () {
             setGlobal();
          };
 
          //! Console all the changes made by the script
 
          var results = console.log(
             "%c [Generated Name]: " +
                newUser +
                " [Previous Name]: " +
                oldUser +
                "\n%c [Generated ID]: " +
                userID +
                " [Previous ID]: " +
                previousUserId +
                "\n%c It will be randomized again in: " +
                "%c" +
                cooldown / 1000 +
                " seconds" +
                "\n%c Executed: " +
                i +
                " times ||" +
                "|| Total Time: " +
                a +
                " seconds",
             "color: #faf; font-size: 18px",
             "color #f00; font-size: 18px",
             "color: #afa; font-size: 18px",
             "color: #aff; font-size: 18px",
             "color: #badaea; font-size: 18px"
          );
 
          console.log(results);
       }
       function setGlobal() {
          clearInterval(tempo);
          cooldown = cooldown + 10000;
          console.log("%c Cooldown: " + cooldown / 1000 + " Seconds", "color: #fff; font-size: 50px;");
          tempo = setInterval(renameEverything, cooldown);
          /* execute(); */
       }
      }
      stop() {
         clearInterval(tempo);
         Patcher.unpatchAll();
         return;
      }
 };
 