//
// window.onload = function() …
//
// onStartBtnClick()
//
// 	=> newSequence()
//
// onGuessClick()
//
// 	=> checkSequence(btnClicked)
// 		if (lost)
// 			play('you lost');
// 			setTimeout, 1sec
// 			if (strict  mode)
// 				setTimeout 2.5 sec
// 					newSequence()
// 			else
// 				repeatSequence from start
//
// newSequence()
// 	=> add a note to the notes array
// 		& play sequence
//
// sequence()
// 	=> play music sequence (using setTimeout between notes)
