basic.forever(function () {
    if (Environment.PIR(DigitalPin.P1)) {
        basic.showIcon(IconNames.Yes)
        pins.digitalWritePin(DigitalPin.P9, 1)
    } else {
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P9, 0)
    }
})
