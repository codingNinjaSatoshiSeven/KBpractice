class Solution {
    public boolean canThreePartsEqualSum(int[] A) {
       int sum = 0;
       for(int a : A){
           sum += a;
       }
       if(sum % 3 != 0) return false;
       int avg = sum / 3;
       int k = 0, count = 0, sumPart = 0;
       while(k <A.length) {
           sumPart += A[k];
           if(sumPart == avg) {
               sumPart = 0;
               count++;
           }
           k++;
       }
       if(count ==3) return true;
       return false;
    }
}