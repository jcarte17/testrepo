let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementsById('width').value);

    let area = length * width;

    document.getElementById('result').innerText = 'The Area of the rectangle is: ${area}';
}