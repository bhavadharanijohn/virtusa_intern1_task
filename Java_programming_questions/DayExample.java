import java.util.Scanner;

public class DayExample {
    enum Day {
        MONDAY,
        TUESDAY,
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
        SATURDAY,
        SUNDAY
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a day :");
        String input = scanner.nextLine();
        
        // Convert input to uppercase so "wednesday" becomes "WEDNESDAY"
        Day day = Day.valueOf(input.toUpperCase());

        if (day == Day.SATURDAY || day == Day.SUNDAY) {
            System.out.println("Weekend");
        } else {
            System.out.println("Weekday");
        }
    }
}