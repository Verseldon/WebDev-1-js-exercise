class Student {
    String name;
    String idNum;
    int year;
    double grade;

    public Student(String name , String idNum , int year , double grade) {
        this.name = name;
        this.idNum = idNum;
        this.year = year;
        this.grade = grade;
    }
}

public class StudentGrades {
    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();;
        students.add(new Student("Alice", "1101", 1, 85.5));
        students.add(new Student("Bob", "1301", 2, 92.0));
        students.add(new Student("Charlie", "1106", 1, 78.0));
        students.add(new Student("David", "1308", 3, 88.5));
        students.add(new Student("Eva", "1202", 2, 95.0));
        students.add(new Student("Frank", "1228", 1, 67.5));
        students.add(new Student("Grace", "1309", 3, 82.0));
        students.add(new Student("Hannah", "1119", 2, 90.0));
        students.add(new Student("Ian", "1116", 1, 75.0));
        students.add(new Student("Jack", "1232", 3, 60.0));

        double highestGrade = Double.MIN_VALUE;
        double lowestGrade = Double.MAX_VALUE;
        String highestStudent = "";
        String lowestStudent = "";

        for (Student student : students) {
            if (student.grade > highestGrade) {
                highestGrade = student.grade;
                highestStudent = student.name;
            }

            if (student.grade < lowestGrade) {
                lowestGrade = student.grade;
                lowestStudent = student.name;
            }
        }
    
    System.out.println("Highest grade: " + highestGrade + " by " + highestStudent );
    System.out.println("Lowest grade: " + lowestGrade + " by " + lowestStudent);
    
}