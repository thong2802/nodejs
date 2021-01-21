package abstraction;

import java.util.Scanner;

public class Ptbacnhat {
    public static void main(String[] args) {
        int aNumber, bNumber;
        double nghiem;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Nhập vào số a: ");
        aNumber = scanner.nextInt();
        System.out.println("Nhập vào số b: ");
        bNumber = scanner.nextInt();
        System.out.println("Phương trình bạn vừa nhập vào là: " + aNumber + "x + " + bNumber + " = 0.");
        if (aNumber == 0) {
            if (bNumber == 0) {
                System.out.println("Phương trình này có vô số nghiệm.");
            } else {
                System.out.println("Phương trình vô nghiệm.");
            }
        } else {
            nghiem = (double) -bNumber / aNumber;   // ép kiểu để cho ra kết quả chính xác
            System.out.println("Phương trình có nghiệm x = " 2+ nghiem + ".");
        }
    }
}
