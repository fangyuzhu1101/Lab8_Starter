// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// check for a valid phone number
test('if (346)702-2222 is a valid phone number', () => {
    expect(functions.isPhoneNumber("(346)702-2222")).toBe(true);
});
test('if 222-111-5599 is a valid phone number', () => {
    expect(functions.isPhoneNumber("222-111-5599")).toBe(true);
});

test('if 878-99-3333 is a valid phone number', () => {
    expect(functions.isPhoneNumber("878-99-3333")).toBe(false);
});
test('if (291)111-xyzk is a valid phone number', () => {
    expect(functions.isPhoneNumber("(291)111-xyzk")).toBe(false);
});

// check for a valid email
test('if fazhu@gmail.com is a valid email', () => {
    expect(functions.isEmail("fazhu@gmail.com")).toBe(true);
});
test('if knelakon@ucsd.edu is a valid email', () => {
    expect(functions.isEmail("knelakon@ucsd.edu")).toBe(true);
});

test('if WeLoveTA_Akshay@.com is a valid email', () => {
    expect(functions.isEmail("WeLoveTA_Akshay@.com")).toBe(false);
});
test('if PowellIs.Awesome@ucsd_edu is a valid email', () => {
    expect(functions.isEmail("PowellIs.Awesome@ucsd_edu")).toBe(false);
});

// check for a strong password
test('if a2345678_2364 is a strong password', () => {
    expect(functions.isStrongPassword("a2345678_2364")).toBe(true);
});

test('if abcde232_9 is a strong password', () => {
    expect(functions.isStrongPassword("abcde232_9")).toBe(true);
});

test('if 9ass is a strong password', () => {
    expect(functions.isStrongPassword("9ass")).toBe(false);
});

test('if P@$$W0RD is a strong password', () => {
    expect(functions.isStrongPassword("P@$$W0RD")).toBe(false);
});

// check for a valid date
test('if 1/1/2000 is a valid date', () => {
    expect(functions.isDate("1/1/2001")).toBe(true);
});

test('if 9/69/2001 is a valid date', () => {
    expect(functions.isDate("09/69/2001")).toBe(true);
});

test('if 12/32/90 is a valid date', () => {
    expect(functions.isDate("12/32/90")).toBe(false);
});

test('if 1/14 is a valid date', () => {
    expect(functions.isDate("1/14")).toBe(false);
});

// check for a valid hex color
test('if #AAA is a valid hex color', () => {
    expect(functions.isHexColor("#AAA")).toBe(true);
});

test('if abcdef is a valid hex color', () => {
    expect(functions.isHexColor("abcdef")).toBe(true);
});

test('if #1234 is a valid hex color', () => {
    expect(functions.isHexColor("#1234")).toBe(false);
});

test('if FF is a valid hex color', () => {
    expect(functions.isHexColor("FF")).toBe(false);
});