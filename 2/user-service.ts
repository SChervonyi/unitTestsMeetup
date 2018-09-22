class UserService {

    public getCurrentUserId(): string{
        return Math.random().toString(36).substring(7);
    }

    public updateUserAddress(address: string): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    }

}
