let Bars: number[] = []
let testing: number[] = []
let pos = 0
// (B button zeigt 2x5 leds an, test Funktion)
function clear_led () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.unplot(x, y)
        }
    }
}
/**
 * Author: nicht Finn
 */
/**
 * Unfertiges Script, dass mit dem A button mit 5 Balken Zufallszahlen von 0 bis 5 zeigt
 */
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    clear_led()
    Bars = [
    0,
    0,
    0,
    0,
    0
    ]
    for (let Row = 0; Row <= 4; Row++) {
        Bars[Row] = randint(0, 5)
    }
    display_values(Bars)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    testing = [
    1,
    1,
    1,
    1,
    1
    ]
    display_values(testing)
})
function display_values (Led_value_array: number[]) {
    pos = 0
    for (let Wert of Led_value_array) {
        for (let Index = 0; Index <= 5; Index++) {
            if (Wert >= Index) {
                led.toggle(pos, Index)
            }
        }
        pos += 1
    }
}
