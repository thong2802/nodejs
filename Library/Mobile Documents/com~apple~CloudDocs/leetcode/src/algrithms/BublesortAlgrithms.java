package algrithms;

public class BublesortAlgrithms {

    public static void printArray(int stt, int[] a) {
        System.out.printf("%d: ", stt);
        for (int i = 0; i < a.length; i++) {
            System.out.printf(" %d ", a[i]);
        }
        System.out.println("");
    }

    public static void BublbleSort(int[] a) {
        int n = a.length;
        for (int i = 0; i < n; i ++){
            boolean isSorted = true;
            for (int j = 0; j <  n - i - 1; j++) {
                if (a[j] > a[j + 1]) {
                        isSorted = false;
                        int temple = a[j] ;
                        a[j] = a[ j +1];
                        a[ j + 1 ] = temple;
                }
            }
            printArray(i, a);
            if (isSorted ) {
                break;
            }
        }
    }

   

    public static void main(String[] args) {
        int[] a = {11, 6, 8, 2, 5, 9, 4, 7, 3};
        int[] b = {1,2,3,4,5,6,7,9,8};
        BublbleSort(a);
        System.out.println("------");

    }
}
