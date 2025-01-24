let x = 5 + 8; // 13
x = "5" + 8 // 58
x = 5 + "8" // 58
x = 7 + "5" + 8 // 758
x = 1 + 3 + "5" + 8 + 9 // 4589  : after string, It will be considered as string only
x = 1 - "5" + 8 // 4
x = "5" - 8 // -3
x = "5" - "8" // -3
x = "5" + 8 - 4 // 54
x = "5" + 8 + "hello" + 9 // 58hello9
x = "5" + 8 + "hello" + 9 // NaN - Not A Number
x = "5" - 8 + "hello" + 9 // -3hello9
x = "5" + 6 + 11 + "1" - 6 // 56105
document.write(x);