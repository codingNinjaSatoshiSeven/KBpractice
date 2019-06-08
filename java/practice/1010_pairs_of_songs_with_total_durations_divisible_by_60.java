class Solution {
    public int numPairsDivisibleBy60(int[] time) {
        int[] remainder = new int[60];
        int count = 0;
        for(int t : time) {
            remainder[t %60]++;
        }
        for(int i = 1; i <30;i++) {
            count += remainder[i] * remainder[60-i];
        }
        for(int i = 1; i < remainder[0]; i++){
            count += i;
        }
        for(int i = 1; i < remainder[30]; i++){
            count += i;
        }
        return count;
    }
}