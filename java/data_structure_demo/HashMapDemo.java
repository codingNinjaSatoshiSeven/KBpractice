//HashMap is Map with key-value pair.
import java.util.HashMap;
import java.lang.Integer;

public class HashMapDemo {
  public static void main(String[] args) {
    HashMap<String, Integer> hashMap= new HashMap<>();
    hashMap.put("apple", 10);
    hashMap.put("orange", 20);
    hashMap.put("banana", 30);
    Integer a = hashMap.get("orange");
    System.out.println("orange is " + a);
    print(hashMap);
    //{orange=20, banana=30, apple=10}
  }

  public static void print(HashMap<String, Integer> hashMap) {
    if(hashMap.isEmpty()) {
      System.out.println("hash map is empty");
    } else {
      System.out.println(hashMap);
    }
  }
}