makerbit.onIrDatagram(function () {
    code = makerbit.irDatagram()
    if (code == "0x00FF18E7") {
        magicbit.MotorRunDual(magicbit.Motors.M1, forward, magicbit.Motors.M2, forward)
    } else if (code == "0x00FF38C7") {
        magicbit.MotorRunDual(magicbit.Motors.M1, 0, magicbit.Motors.M2, 0)
    } else if (code == "0x00FF10EF") {
        magicbit.MotorRunDual(magicbit.Motors.M1, half_forward, magicbit.Motors.M2, half_backward)
    } else if (code == "0x00FF5AA5") {
        magicbit.MotorRunDual(magicbit.Motors.M1, half_backward, magicbit.Motors.M2, half_forward)
    } else if (code == "0x00FF4AB5") {
        magicbit.MotorRunDual(magicbit.Motors.M1, backward, magicbit.Motors.M2, backward)
    } else if (code == "0x00FF9867") {
        forward = 255
        half_forward = 127
        backward = -255
        half_backward = -127
    } else if (code == "0x00FFA25D") {
        forward = 50
        half_forward = 25
        backward = -50
        half_backward = -25
    } else if (code == "0x00FF629D") {
        forward = 100
        half_forward = 50
        backward = -100
        half_backward = -50
    }
})
let backward = 0
let half_backward = 0
let half_forward = 0
let forward = 0
let code = ""
makerbit.connectIrReceiver(DigitalPin.P1, IrProtocol.NEC)
