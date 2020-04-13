export default function configureStore(initialState: any): {
    dispatch: import("redux").Dispatch<any>;
    getState(): {
        foo: string;
    };
    subscribe(listener: () => void): import("redux").Unsubscribe;
    replaceReducer(nextReducer: import("redux").Reducer<{
        foo: string;
    }, any>): void;
    [Symbol.observable](): import("redux").Observable<{
        foo: string;
    }>;
};
