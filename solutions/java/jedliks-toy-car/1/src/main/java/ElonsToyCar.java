public class ElonsToyCar {
    private int charge = 100;
    private int distance;

    public static ElonsToyCar buy() {
        return new ElonsToyCar();
    }

    public String distanceDisplay() {
        return String.format("Driven %s meters", distance);
    }

    public String batteryDisplay() {
        return String.format(charge > 0 ? "Battery at %s%%" : "Battery empty", charge);
    }

    public void drive() {
        if (charge > 0) {
            distance += 20;
            charge -= 1;
        }
    }
}
