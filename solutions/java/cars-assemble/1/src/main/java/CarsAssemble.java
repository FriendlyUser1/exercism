public class CarsAssemble {

    public double productionRatePerHour(int speed) {
        return 221 * speed * (speed < 5 ? 1 : speed < 9 ? 0.9 : speed < 10 ? 0.8 : 0.77);
    }

    public int workingItemsPerMinute(int speed) {
        return (int) Math.floor(productionRatePerHour(speed) / 60);
    }
}
