function fazGet(url) { 
    let request = new XMLHttpRequest ()
    request.open("GET", url, false)
    request.send()
    return request.responseText

}

function printedAdvices(advices) {
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = `<p>"${advices.slip.advice}"</p>`
    let GetAdvice = document.querySelector("#GetAdvice");
    GetAdvice.innerHTML = `<h3>ADVICE # ${advices.slip.id}</h3>`
}

function main () {
    data = fazGet("https://api.adviceslip.com/advice")
    advices = JSON.parse(data);
    console.log(advices.slip.id);
    printedAdvices(advices);
}

main()

