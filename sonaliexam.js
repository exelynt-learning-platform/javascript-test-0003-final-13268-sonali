let rows = 6;

for (let i = 1; i <= rows; i++) {
    let output = "";

    for (let j = 1; j <= i; j++) {

        if ((i + j) % 2 == 0) {
            output = output + "1 ";
        } else {
            output = output + "0 ";
        }

    }

    console.log(output);
}
