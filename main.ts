namespace lectorIR{
//%block="mostrar codigo IR"

makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.Keyestudio)
basic.showLeds(`
    . . . . .
    # . # . #
    # . # # .
    # . # . .
    # . # . .
    `)
basic.pause(1000)
basic.forever(function () {
    basic.showNumber(makerbit.irButton())
})
}