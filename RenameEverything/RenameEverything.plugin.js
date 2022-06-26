/**
 * @name RenameEverything
 * @author Pedro
 * @authorId 296461607549272064
 * @version 0.0.7
 * @description Change everything in the Discord client
 * @updateUrl https://raw.githubusercontent.com/ThanksUniverse/Plugins/dev/RenameEverything/RenameEverything.plugin.js?token=GHSAT0AAAAAABULNPNXFS4XYTRGBPIDVFV4YVC3FPQ
 */
var seconds = 0,
	minutes = 0,
	hours = 0,
	days = 0,
	executed = 0,
	cooldown = 60000, // 1e4 //10000
	lose = 1,
	win = 1,
	updateTime = 0,
	infTimer = 0,
	totalTime = 0,
	tempo = 0,
	home = 0;
time = 0;
module.exports = class RenameEverything {
	load() {}
	start() {
		//TODO: Make the informations when u click on home appear in a Toast instead of showing in the console
		globalThis.UserNames = [];
		function audioComponent() {
			const audiow = document.createElement("audio");
			audiow.setAttribute("autoplay", "autoplay");	
			audiow.setAttribute("id", "audio");	
			audiow.loop = true
			audiow.volume = 0.05
			audiow.style.opacity = "0.02"
			const sourcs = audiow.appendChild(document.createElement("source"));
			sourcs.setAttribute("src", "https://cdn.discordapp.com/attachments/423879458047655946/990334517262831616/x.mp3");
			BdApi.Themes.getAll()
			return audiow;
		}
		
		function getBackground() {
			var root = document.querySelector(':root')
			var rootVariables = getComputedStyle(root)
			console.log("The actual background is: " + rootVariables.getPropertyValue('--background-image'));
			console.log(" and the Popout is: " + rootVariables.getPropertyValue('--popout-modal-image'));
		}

		function randomizeBackground() {
			rootVariables.style.setProperty('--background-image', randomBackground); //! Create an array with some background to make a random from it
			rootVariables.style.setProperty('-popout-modal-image', randomBackground);
		}

		document.body.appendChild(audioComponent());

		console.log("%c Starting Script in... [" + cooldown / 1000 + " Seconds]", "color: #ffaa00; font-size: 20px");
		var tempo = setInterval(renameEverything, cooldown);
		//! Create the time
		setInterval(function () {
			var SeeIfOpen = document.querySelector("#app-mount > div.appDevToolsWrapper-1QxdQf > div > div:nth-child(3) > div.layer-1Ixpg3 > div > div");

			var OpacityBackground = document.querySelector("#app-mount > div.appDevToolsWrapper-1QxdQf > div > div:nth-child(3) > div.backdrop-2ByYRN.withLayer-2VVmpp");

			var NameForm = document.querySelector("#app-mount > div.appDevToolsWrapper-1QxdQf > div > div:nth-child(3) > div.layer-1Ixpg3 > div > div > form");

			var UserTextName = document.querySelector("#app-mount > div.appDevToolsWrapper-1QxdQf > div > div:nth-child(3) > div.layer-1Ixpg3 > div > div > form > div.content-2hZxGK.content-18dVld.thin-31rlnD.scrollerBase-_bVAAt > div:nth-child(1) > h5")
			if (typeof NameForm != "undefined" && NameForm != null && UserTextName != "undefined" && UserTextName != null) {
				OpacityBackground.style.opacity = "0.35";
				OpacityBackground.style.transition = "all 2s";
				if (promptBody != !promptBody) var RColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
				var promptBody = document.querySelector("#app-mount > div.appDevToolsWrapper-1QxdQf > div > div:nth-child(3) > div.layer-1Ixpg3 > div > div");
				var promptFooter = document.querySelector(
					"#app-mount > div.appDevToolsWrapper-1QxdQf > div > div:nth-child(3) > div.layer-1Ixpg3 > div > div > form > div.flex-2S1XBF.flex-3BkGQD.horizontalReverse-60Katr.horizontalReverse-2QssvL.flex-3BkGQD.directionRowReverse-HZatnx.justifyStart-2Mwniq.alignStretch-Uwowzr.noWrap-hBpHBz.footer-31IekZ.footerSeparator-VzAYwb"
				);
				promptBody.style.backgroundColor = RColor;
				promptBody.style.transition = "all 2s";
				if (typeof promptFooter != "undefined" && promptFooter != null) {
					promptFooter.style.backgroundColor = RColor;
					promptFooter.style.transition = "all 2s";
				}
			}

			if (typeof SeeIfOpen != "undefined" && SeeIfOpen != null) {
				var UserDialog = document.querySelector("#app-mount > div.appDevToolsWrapper-1QxdQf > div > div:nth-child(3) > div.layer-1Ixpg3 > div > div").children[0];
				var UserName = UserDialog.children[0];
				var UserText = UserDialog.children[1];
				var NameForm = document.querySelector("#app-mount > div.appDevToolsWrapper-1QxdQf > div > div:nth-child(3) > div.layer-1Ixpg3 > div > div > form");
				var IdLabel = document.querySelector("#app-mount > div.appDevToolsWrapper-1QxdQf > div > div:nth-child(3) > div.layer-1Ixpg3 > div > div > form > div.content-2hZxGK.content-18dVld.thin-31rlnD.scrollerBase-_bVAAt > div:nth-child(1) > div > div.inputWrapper-1YNMmM.multiInputLast-35zVz0");
				if (typeof UserName != "undefined" && UserName != null && typeof UserText != "undefined" && UserText != null && typeof NameForm != "undefined" && NameForm != null && typeof IdLabel != "undefined" && IdLabel != null) {
					var UserNameColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
					var UserTextColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
					UserName.textContent = "Your new Godness name";
					UserName.style.color = UserNameColor;
					UserName.style.transition = "all 1s";
					UserText.textContent = "Choose the name and give me your password :)";
					UserText.style.color = UserTextColor;
					UserText.style.transition = "all 1s";
				}
			}
			updateTime = updateTime + 1;
			infTimer = infTimer + 1;
			seconds = seconds + 1;
			time = seconds + " Seconds ";
			if (seconds == 60) {
				seconds = 0;
				minutes = minutes + 1;
			}
			if (minutes == 60) {
				minutes = 0;
				hours = hours + 1;
			}
			if (hours == 24) {
				hours = 0;
				days = days + 1;
			}

			if (minutes >= 1) {
				time = minutes + " Minutes and " + seconds + " Seconds";
			}

			if (hours >= 1) {
				time = hours + " Hours " + minutes + " Minutes and " + seconds + " Seconds ";
			}

			if (days >= 1) {
				time = days + " Days " + hours + " Hours " + minutes + " Minutes and " + seconds + " Seconds ";
			}
		}, 1000);
		function renameEverything() {
			/* var audio = new Audio("https://youtu.be/n61ULEU7CO0");
			audio.play(); */
			/* console.log(seconds);
			console.log(minutes);
			console.log(hours);
			console.log(time);
			console.log(totalTime)
			console.log(executed) */

			executed = executed + 1;
			console.time("ExecutionTime: ");
			//! Generate random number + than 1000
			var previousUserId = 0;
			var valueof = 0;
			let generateNumber = Math.floor(1000 + Math.random() * 8999); //! Generate number recipe
			var id = document.querySelector(
				"#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div.container-1eFtFS > div > div > div.sidebar-1tnWFu > section > div.container-YkUktl > div.nameTag-sc-gpq.canCopy-IgTwyV > div.text-xs-normal-3SiVjE.subtext-2HDqJ7"
			);

			valueof = generateNumber;

			if (id != null) {
				id.setAttribute("id", "id");
				previousUserId = id.textContent;
				//! Define randomNumber generated to my #
				id.innerHTML = "#" + generateNumber;
				var userID = (id.innerHTML = "#" + generateNumber);
			} else {
				previousUserId = "Loading...";
			}
/*  //! Implementar essa parte no código
			while (id < generateNumber) {
				console.log(id)
				id++;
			 }
			 while (id > generateNumber) {
				console.log(id)
				id--;
			 } */

			//! Random change texts :p ( would be better if we checked if we entered in x chat to start verifying )
			var tata = document.querySelector(
				"#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div.container-1eFtFS > div > div > div.sidebar-1tnWFu > nav > div.scroller-WSmht3.thin-31rlnD.scrollerBase-_bVAAt.fade-1R6FHN > ul > li:nth-child(4) > div"
			);
			var tatamessage = document.querySelector("#message-content-984090251637178418");

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
				"#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div.container-1eFtFS > div > div > div.sidebar-1tnWFu > section > div.container-YkUktl > div.nameTag-sc-gpq.canCopy-IgTwyV > div.defaultColor-24IHKz.text-sm-normal-3Zj3Iv.usernameContainer-3PPkWq > div"
			);

			var newUserw = document.querySelector(
				"#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div.container-1eFtFS > div > div > div.sidebar-1tnWFu > section > div.container-YkUktl > div.nameTag-sc-gpq.canCopy-IgTwyV > div.text-xs-normal-3SiVjE.subtext-2HDqJ7"
			);

			//! Change the name color
			var randomNameColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
			var randomIdColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
			newUser.style.transition = "all 2s";
			newUser.style.color = randomNameColor;
			id.style.color = randomIdColor;

			var randomError = Math.floor(400 + Math.random() * 100);
			UserNames.push(randomError);
			console.log("%c Previous Usernames: " + UserNames, "color: #313acd; font-size: 12px;");

			if (newUser != null || newUserw != null) {
				var oldUser = newUser.textContent;
				newUser = newUser.innerHTML = "x = " + randomError;
			} else {
				newUser = "Loading...";
				newUserw = "Loading...";
			}

			if (randomError == 400) {
				id.style.color = "#daa520";
			} else if (randomNameColor == randomIdColor) {
				BdApi.showToast("Congratulations", { type: "success", timeout: 60000 });
				id.style.color = "#daa520";
				newUser.style.color = "#daa520";
				Victory();
			}

			//! Button to increase cooldown on time

			var clickToStop = document.querySelector(
				"#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div.container-1eFtFS > nav > ul > div.scroller-3X7KbA.none-2-_0dP.scrollerBase-_bVAAt > div.tutorialContainer-1pL9QS > div > div.listItemWrapper-3d87LP > div > svg > foreignObject > div"
			);

			clickToStop.setAttribute("id", "stopBtn");
			var clickToStopID = document.getElementById("stopBtn");

			clickToStopID.onclick = function () {
				Home();
			};

			totalTime = infTimer - executed;
			//! Console all the changes made by the script
			globalThis.GeneratedName = "%c" + "[Generated Name]: " + newUser + " [Previous Name]: " + oldUser + "\n";
			globalThis.GeneratedID = "%c" + "[Generated ID]: " + userID + " [Previous ID]: " + previousUserId + "\n";
			globalThis.CooldownShow = "%c" + "It will be randomized again in: " + cooldown / 1000 + " seconds" + "\n";
			globalThis.TotalTime = "%c" + "Total Time: " + time + "\n";
			globalThis.ExecutedTimes = "%c" + "Executed: " + executed + " times" + "\n";
			globalThis.Errorx = "%c" + "You lost, the cooldown time has been increased to: " + cooldown / 1000 + " seconds" + "\n";
			globalThis.ErrorCounter = "%c" + "You already lost the game: " + lose + " times" + "\n";
			globalThis.TimeToUpdate = "%c" + "It took: " + updateTime + " seconds to update" + " || You already waited: " + totalTime + " seconds for it to update";

			globalThis.GenerateNameCss = "color: #faf; font-size: 18px;";
			globalThis.GeneratedIDCss = "color: #fa0; font-size: 18px";
			globalThis.CooldownShowCss = "color: #afa; font-size: 18px";
			globalThis.ExecutedTimesCss = "color: #aff; font-size: 18px";
			globalThis.TotalTimeCss = "color: #badaea; font-size: 18px";
			globalThis.ErrorCss = "color: #fa00ac; font-size: 18px;";
			globalThis.ErrorCounterCss = "color: #f00; font-size: 18px";
			globalThis.UpdateTimeCss = "color: #ffff0a; font-size: 18px";

			if (randomError == 404) {
				BdApi.showToast("You Lost", { type: "error", timeout: 10000 });
				setGlobal();
			} else {
				console.log(GeneratedName + GeneratedID + CooldownShow + TotalTime + ExecutedTimes + TimeToUpdate, GenerateNameCss, GeneratedIDCss, CooldownShowCss, ExecutedTimesCss, TotalTimeCss, UpdateTimeCss);
			}

			updateTime = 0;

			console.timeEnd("ExecutionTime: ");
			BdApi.showToast("Executing Script...", { type: "info", timeout: 900 });
		}
		function loadDaFun() {
			var script = document.createElement("script");
			script.src = "./complement.js";
		}
		function setGlobal() {
			clearInterval(tempo);
			CooldownShow = "%c" + "It was being randomized every: " + cooldown / 1000 + " seconds";
			cooldown = cooldown + 10000;
			var CooldownShow0 = " || Now it will be " + cooldown / 1000 + " seconds" + "\n";
			Errorx = "%c" + "You lost, the cooldown time has been increased to: " + cooldown / 1000 + " seconds" + "\n";
			lose = lose + 1;
			console.log(GeneratedName + GeneratedID + CooldownShow + CooldownShow0 + TotalTime + ExecutedTimes + Errorx + ErrorCounter + TimeToUpdate, GenerateNameCss, GeneratedIDCss, CooldownShowCss, ExecutedTimesCss, TotalTimeCss, ErrorCss, ErrorCounterCss, UpdateTimeCss);
			tempo = setInterval(renameEverything, cooldown);
		}
		function Home() {
			var HomeButton = "%c" + "You already pressed the Home Button " + home + " Times\n";
			var HomeButtonCss = "color: rgb(225, 225, 225); font-size: 18px";
			home = home + 1;
			console.log(TotalTime + ExecutedTimes + HomeButton, TotalTimeCss, ExecutedTimesCss, HomeButtonCss);
		}
		function Victory() {
			clearInterval(tempo);
			CooldownShow = "%c" + "It was being randomized every: " + cooldown / 1000 + " seconds";
			cooldown = cooldown - 10000;
			WinContent = "%c" + "You won, the cooldown time has been decreased to: " + cooldown / 1000 + " seconds" + "\n";
			WinContentCss = "color: #daa520; font-size: 18px";
			console.log(GeneratedName + GeneratedID + CooldownShow + TotalTime + ExecutedTimes + TimeToUpdate + WinContent, GenerateNameCss, GeneratedIDCss, CooldownShowCss, ExecutedTimesCss, TotalTimeCss, UpdateTimeCss, WinContentCss);
			win = win + 1;
			tempo = setInterval(renameEverything, cooldown);
		}
	}
	stop() {
		clearInterval(tempo);
		console.log("%c Stopping Script... [It executed " + executed + " Times]" + "\n%c Elapsed Time: " + time, "color: #ffeaaa; font-size: 20px", "color: #00ffac; font-size: 18px");
		return;
	}
};
