let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    console.log(area);
    document.getElementById('result').innerText = `The Area of the rectangle is: ${area}`;
}

function calculateTotalAmount() {
    let grocery1 = parseFloat(document.getElementById('grocery1').value);
    let grocery2 = parseFloat(document.getElementById('grocery2').value);
    let grocery3 = parseFloat(document.getElementById('grocery3').value);

    doCalculation(grocery1, grocery2, grocery3);
}

function doCalculation(grocery1, grocery2, grocery3) {
    let total = grocery1 + grocery2 + grocery3;

    document.getElementById('result').innerText = `The total amount is: \$${total}`;
}