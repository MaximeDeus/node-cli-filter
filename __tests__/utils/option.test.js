test('sample OK test', () => {
    expect.assertions(2);
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
});

test('sample KO test', () => {
    expect.assertions(3);
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
});
