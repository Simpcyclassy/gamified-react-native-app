declare const store: {
    dispatch: import("redux").Dispatch<any>;
    getState(): import("redux").CombinedState<{
        router: {
            path: any;
        };
    }>;
    subscribe(listener: () => void): import("redux").Unsubscribe;
    replaceReducer(nextReducer: import("redux").Reducer<import("redux").CombinedState<{
        router: {
            path: any;
        };
    }>, any>): void;
    [Symbol.observable](): import("redux").Observable<import("redux").CombinedState<{
        router: {
            path: any;
        };
    }>>;
};
export default store;
