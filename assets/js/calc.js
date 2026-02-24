function calculatePPS() {
    const trashBox = document.getElementById("trashBox").checked
    const genTemp = document.getElementById("genTemp").checked
    const turbineTemp = document.getElementById("turbineTemp").checked
    const hydraulicPump = document.getElementById("hydraulicPump").checked
    const autoExcitation = document.getElementById("autoExcitation").checked
    const tailwaterBonus = document.getElementById("tailwaterBonus").checked
    const demandMet = document.getElementById("demandMet").checked

    if (!demandMet) {
        document.getElementById("ppsResult").innerText = "Points per second: 0 (Demand not met)"
        return
    }

    let pps = tailwaterBonus ? 1.38 : 1.20

    if (autoExcitation) pps *= 0.90
    if (trashBox) pps *= 0.95
    if (turbineTemp) pps *= 0.90
    if (hydraulicPump) pps *= 0.90
    if (genTemp) pps *= 0.95

    document.getElementById("ppsResult").innerText =
        "Points per second: " + pps.toFixed(2) + "/s"
}