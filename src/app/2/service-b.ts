class UserService {

    public method(): string{
        return Math.random().toString(36).substring(7);
    }

    public updateUserAddress(address: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 1000);
        });
    }

}