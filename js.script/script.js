<script>
/* Input: convert pound to kilogram
 * Processing: Calculate the weight from pound to kilogram.
 * Output: the total weight in kilograms
 */
function poundsToKilograms() {
    // Get the amount of weight from pound and convert to kilogram.
    let p = parseFloat(document.getElementById('poundInput').value);
    let k = parseFloat(document.getElementById('kilogramInput').value);

    // Compute the weight in pound and convert to kilogram.
    let p = Math.PI * lb / 2.2046;

    // Display the converted weight in kilogram.
    document.getElementById('outputDiv').innerHTML = k;
}
</script>