export class Formatter {
    public static formatCurrency(value: number): string {
        return new Intl.NumberFormat('en-MX', {
            style: 'currency',
            currency: 'MNX',
        }).format(value);
    }
}