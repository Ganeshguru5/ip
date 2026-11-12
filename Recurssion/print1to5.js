function print1to5(n) {
    console.log("➡️ Enter:", n);

    if (n === 6) {
        console.log("🛑 Base Case");
        console.log("🎁 RESULT: return");
        return;
    }

    console.log("🖨️ Print:", n);

    console.log("📞 Calling:", n + 1);
    print1to5(n + 1);

    console.log("⬅️ Resumed:", n);

    console.log("🎁 RESULT: Function", n, "completed");

    return;
}

print1to5(1);