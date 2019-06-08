class Solution {
    public String gcdOfStrings(String s1, String s2) {
        if(s1.length() < s2.length()) return gcdOfStrings(s2, s1);
        if(s2.length() == 0) return s1;
        if(s1.startsWith(s2)) {
            while(s1.startsWith(s2)) {
                s1 = s1.substring(s2.length());
            }
            return gcdOfStrings(s2,s1);
        }
        return "";
    }
}