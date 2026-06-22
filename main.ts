input.onButtonPressed(Button.A, function () {
    number += 1
    if (number == 27) {
        number = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString(Text)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
	
})
let Text = ""
let number = 0
radio.setGroup(1)
number = 0
basic.forever(function () {
    if (number == 1) {
        basic.showString("a")
        if (input.buttonIsPressed(Button.B)) {
            Text = "a" + Text
        }
    }
    if (number == 2) {
        basic.showString("b")
        if (input.buttonIsPressed(Button.B)) {
            Text = "b" + Text
        }
    }
    if (number == 3) {
        basic.showString("c")
        if (input.buttonIsPressed(Button.B)) {
            Text = "c" + Text
        }
    }
    if (number == 4) {
        basic.showString("d")
        if (input.buttonIsPressed(Button.B)) {
            Text = "d" + Text
        }
    }
    if (number == 5) {
        basic.showString("e")
        if (input.buttonIsPressed(Button.B)) {
            Text = "e" + Text
        }
    }
    if (number == 6) {
        basic.showString("f")
        if (input.buttonIsPressed(Button.B)) {
            Text = "f" + Text
        }
    }
    if (number == 7) {
        basic.showString("g")
        if (input.buttonIsPressed(Button.B)) {
            Text = "g" + Text
        }
    }
    if (number == 8) {
        basic.showString("h")
        if (input.buttonIsPressed(Button.B)) {
            Text = "h" + Text
        }
    }
    if (number == 9) {
        basic.showString("i")
        if (input.buttonIsPressed(Button.B)) {
            Text = "i" + Text
        }
    }
    if (number == 10) {
        basic.showString("j")
        if (input.buttonIsPressed(Button.B)) {
            Text = "j" + Text
        }
    }
    if (number == 11) {
        basic.showString("k")
        if (input.buttonIsPressed(Button.B)) {
            Text = "k" + Text
        }
    }
    if (number == 12) {
        basic.showString("l")
        if (input.buttonIsPressed(Button.B)) {
            Text = "l" + Text
        }
    }
    if (number == 13) {
        basic.showString("m")
        if (input.buttonIsPressed(Button.B)) {
            Text = "m" + Text
        }
    }
    if (number == 14) {
        basic.showString("n")
        if (input.buttonIsPressed(Button.B)) {
            Text = "n" + Text
        }
    }
    if (number == 15) {
        basic.showString("o")
        if (input.buttonIsPressed(Button.B)) {
            Text = "o" + Text
        }
    }
    if (number == 16) {
        basic.showString("p")
        if (input.buttonIsPressed(Button.B)) {
            Text = "p" + Text
        }
    }
    if (number == 17) {
        basic.showString("q")
        if (input.buttonIsPressed(Button.B)) {
            Text = "q" + Text
        }
    }
    if (number == 18) {
        basic.showString("r")
        if (input.buttonIsPressed(Button.B)) {
            Text = "r" + Text
        }
    }
    if (number == 19) {
        basic.showString("s")
        if (input.buttonIsPressed(Button.B)) {
            Text = "s" + Text
        }
    }
    if (number == 20) {
        basic.showString("t")
        if (input.buttonIsPressed(Button.B)) {
            Text = "t" + Text
        }
    }
    if (number == 21) {
        basic.showString("u")
        if (input.buttonIsPressed(Button.B)) {
            Text = "u" + Text
        }
    }
    if (number == 22) {
        basic.showString("v")
        if (input.buttonIsPressed(Button.B)) {
            Text = "v" + Text
        }
    }
    if (number == 23) {
        basic.showString("w")
        if (input.buttonIsPressed(Button.B)) {
            Text = "w" + Text
        }
    }
    if (number == 24) {
        basic.showString("w")
        if (input.buttonIsPressed(Button.B)) {
            Text = "x" + Text
        }
    }
    if (number == 25) {
        basic.showString("y")
        if (input.buttonIsPressed(Button.B)) {
            Text = "y" + Text
        }
    }
    if (number == 26) {
        basic.showString("z")
        if (input.buttonIsPressed(Button.B)) {
            Text = "z" + Text
        }
    }
})
