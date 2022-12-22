let D2 = 0
let D = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    D = 0
    D2 = 0
    D = D + cbit_小车类.Ultrasonic_Car()
    D2 = D2 + sonar.ping(
    DigitalPin.P12,
    DigitalPin.P13,
    PingUnit.Centimeters
    )
    if (D > 15 && D2 > 15) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 200)
    } else if (D < D2) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Right, 200)
    } else if (D > D2) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Left, 200)
    } else {
        if (Math.randomBoolean()) {
            cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Right, 200)
        } else {
            cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Left, 200)
        }
    }
    basic.pause(500)
})
