class Service {

    public addFive(a: number): number {
        return a + 5;
    }

    public greet(name: string): string {
        if(!name)
            return '';

        return `Hello ${name}`;
    }
}