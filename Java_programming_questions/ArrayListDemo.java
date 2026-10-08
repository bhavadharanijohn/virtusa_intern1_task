import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListDemo {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<String> names = new ArrayList<>();
        int choice;

        do {
            System.out.println("1. Add Names");
            System.out.println("2. Remove Name");
            System.out.println("3. Search Name");
            System.out.println("4. Display Names");
            System.out.println("5. Exit");
            System.out.print("Enter your choice (1-5): ");
            choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    System.out.print("Count of names? ");
                    int count = scanner.nextInt();
                    scanner.nextLine();

                    for (int i = 1; i <= count; i++) {
                        System.out.print("Name " + i + ": ");
                        names.add(scanner.nextLine());
                    }
                    System.out.println("Names added successfully.");
                    break;

                case 2:
                    System.out.print("Enter name to remove: ");
                    String nameToRemove = scanner.nextLine();
                    if (names.remove(nameToRemove)) {
                        System.out.println(nameToRemove + " removed successfully.");
                    } else {
                        System.out.println(nameToRemove + " not found.");
                    }
                    break;

                case 3:
                    System.out.print("Enter name to search: ");
                    String nameToSearch = scanner.nextLine();
                    int index = names.indexOf(nameToSearch);

                    if (index != -1) {
                        System.out.println(nameToSearch + " found at index " + index);
                    } else {
                        System.out.println(nameToSearch + " not found.");
                    }
                    break;

                case 4:
                    System.out.println("Current List: " + names);
                    break;
                case 5:
                    System.out.println("program exited");
                    break;
                default:
                    System.out.println("Invalid choice! Please try again.");
            }
        } while (choice != 5);

        scanner.close();
    }
}