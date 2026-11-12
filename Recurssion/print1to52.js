function print1to5(n) {
    if (n === 6) {
        return;
    }

    // console.log(n);

    print1to5(n + 1);

    console.log("RESULT:", n);

    return;
}

print1to5(1);