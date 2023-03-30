function hamming(n) {
    // the list of Hamming numbers
    let nums = [1]; 
    // pointers to the last Hamming number multiplied by 2, 3, 5
    let i2 = 0, i3 = 0, i5 = 0;
    for (let i = 1; i < n; i++) {
        let next = Math.min(nums[i2] * 2, nums[i3] * 3, nums[i5] * 5);
        nums.push(next);
        if (next === nums[i2] * 2) i2++;
        if (next === nums[i3] * 3) i3++;
        if (next === nums[i5] * 5) i5++;
    }
    return nums[n - 1];
}